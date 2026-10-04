import { readFileSync } from 'node:fs'
import { createResolver } from '@nuxt/kit'
import { WHEN_TO_USE_SECTION } from './server/utils/llms'
import { SITE_URL } from './server/utils/site'
import { DOCS_PACKAGES } from './app/utils/packages'

const { resolve } = createResolver(import.meta.url)

/** Installed version of every documented npm package, shown next to its name. */
function resolveVersions() {
  const versions: Record<string, string> = {}
  for (const pkg of DOCS_PACKAGES) {
    if (!pkg.npm) continue
    try {
      versions[pkg.npm] = JSON.parse(readFileSync(resolve(`./node_modules/${pkg.npm}/package.json`), 'utf8')).version
    } catch {
      // not a dependency of the docs (create-taman): no version badge
    }
  }
  return versions
}

const packageRedirects = Object.fromEntries(DOCS_PACKAGES.map(pkg => [`/${pkg.id}`, { redirect: pkg.to, prerender: false }]))

export default defineNuxtConfig({
  modules: [
    'pohon-ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-agent-discovery',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    'nuxt-llms',
    // listed although Pohon UI depends on it: nuxt-og-image only reads fonts
    // from @nuxt/fonts when it finds the module here
    '@nuxt/fonts',
    'nuxt-og-image',
    'nuxt-schema-org',
    'motion-v/nuxt',
    'nuxt-gtag'
  ],

  $development: {
    site: {
      url: 'http://localhost:3000'
    }
  },

  $production: {
    site: {
      url: SITE_URL
    }
  },

  devtools: {
    enabled: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-background'
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Vinicunca'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'ts', 'typescript', 'diff', 'vue', 'json', 'jsonc', 'yml', 'yaml', 'css', 'mdc', 'js', 'powershell', 'shell', 'ini', 'toml', 'html', 'sql']
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  runtimeConfig: {
    public: {
      versions: resolveVersions()
    }
  },

  routeRules: {
    '/api/navigation.json': { prerender: true },
    '/api/fonts.json': { prerender: true },
    ...packageRedirects,
    // Old hub URLs
    '/eslint': { redirect: '/eslint/getting-started', prerender: false },
    '/unocss-preset': { redirect: '/unocss-preset/getting-started', prerender: false },
    '/unocss-preset/animations/usage': { redirect: '/unocss-preset/animations', prerender: false },
    '/unocss-preset/fluid/usage': { redirect: '/unocss-preset/fluid', prerender: false },
    '/unocss-preset/scrollbar/usage': { redirect: '/unocss-preset/scrollbar', prerender: false },
    '/unocss-preset/magic-css/usage': { redirect: '/unocss-preset/magic-css', prerender: false },
    '/unocss-variants': { redirect: '/unocss-variants/getting-started', prerender: false },
    '/windows-dev': { redirect: '/windows-dev/guide', prerender: false },
    '/windows-dev/guide/git-config': { redirect: '/windows-dev/guide/git', prerender: false },
    '/windows-dev/guide/git-commits': { redirect: '/windows-dev/extras/git-commits', prerender: false }
  },

  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: 'noopener'
      }
    }
  },

  compatibilityDate: '2026-01-14',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/theme',
        '/api/countries.json',
        '/api/phone-codes.json',
        '/api/locales.json',
        '/api/fonts.json',
        '/api/mcp/pages.json',
        '/api/mcp/pohon-components.json',
        '/api/mcp/pohon-examples.json',
        ...DOCS_PACKAGES.map(pkg => pkg.to)
      ],
      crawlLinks: true,
      failOnError: false
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@unocss/preset-wind4/colors',
        'ai',
        '@ai-sdk/vue',
        'prettier',
        'unocss-variants',
        '@comark/vue',
        '@comark/vue/plugins/shiki',
        'vaul-vue',
        '@vueuse/integrations/useFuse',
        '@floating-ui/dom',
        '@tiptap/vue-3',
        '@tiptap/suggestion',
        '@tiptap/pm/state',
        'shiki-transformer-color-highlight',
        'json5',
        '@internationalized/date',
        'fflate',
        'shiki/wasm',
        '@tanstack/vue-table',
        '@tanstack/vue-virtual',
        '@vueuse/integrations/useSortable',
        'embla-carousel-vue',
        'embla-carousel-autoplay',
        'embla-carousel-auto-scroll',
        'embla-carousel-auto-height',
        'embla-carousel-class-names',
        'embla-carousel-fade',
        'embla-carousel-wheel-gestures'
      ]
    }
  },

  agentDiscovery: {
    siteUrl: SITE_URL,
    siteName: 'Vinicunca',
    // Only the homepage and the documentation have a Markdown representation.
    routes: [
      { path: '/', raw: '/raw/index.md' },
      ...DOCS_PACKAGES.map(pkg => `/${pkg.id}/**`)
    ],
    sitemap: {
      markdown: {
        expand: DOCS_PACKAGES.map(pkg => `/${pkg.id}`)
      }
    },
    // Scanned from `./skills`, with `/.well-known/skills/index.json` generated
    // from the files on disk rather than hand-maintained.
    skills: { dir: './skills' },
    discovery: {
      links: [
        { href: '/llms.txt', rel: 'service-doc', type: 'text/plain', anchor: '/' },
        { href: '/raw/index.md', rel: 'start', type: 'text/markdown', title: 'Homepage', header: false }
      ]
    }
  },

  componentMeta: {
    transformers: [(component, code) => {
      // Simplify ui in slot prop types: `leading(props: { ui: Button['ui'] })` -> `leading(props: { ui: object })`
      code = code.replace(/ui:[^}]+(?=\})/g, 'ui: object')

      return { component, code }
    }],
    overrides: {
      PEditor: {
        props: {
          modelValue: { name: 'modelValue', type: 'null | string | JSONContent | JSONContent[]' },
          parseOptions: { name: 'parseOptions', type: 'ParseOptions' }
        }
      },
      PEditorDragHandle: { props: { editor: { name: 'editor', type: 'Editor' } } },
      PEditorToolbar: { props: { editor: { name: 'editor', type: 'Editor' } } },
      PEditorSuggestionMenu: { props: { editor: { name: 'editor', type: 'Editor' } } },
      PEditorMentionMenu: { props: { editor: { name: 'editor', type: 'Editor' } } },
      PEditorEmojiMenu: { props: { editor: { name: 'editor', type: 'Editor' } } },
      PCalendar: {
        props: {
          defaultValue: { name: 'defaultValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[]' },
          modelValue: { name: 'modelValue', type: 'null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[]' },
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          placeholder: { name: 'placeholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          maxValue: { name: 'maxValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' }
        }
      },
      PInputDate: {
        props: {
          defaultValue: { name: 'defaultValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime | DateRange' },
          modelValue: { name: 'modelValue', type: 'null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange' },
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          placeholder: { name: 'placeholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          maxValue: { name: 'maxValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' }
        }
      },
      PInputTime: {
        props: {
          defaultValue: { name: 'defaultValue', type: 'Time | CalendarDateTime | ZonedDateTime' },
          modelValue: { name: 'modelValue', type: 'null | Time | CalendarDateTime | ZonedDateTime' },
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'Time | CalendarDateTime | ZonedDateTime' },
          placeholder: { name: 'placeholder', type: 'Time | CalendarDateTime | ZonedDateTime' },
          maxValue: { name: 'maxValue', type: 'Time | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'Time | CalendarDateTime | ZonedDateTime' }
        }
      }
    },
    exclude: [
      '@nuxt/content',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@nuxtjs/mdc',
      '@comark/vue',
      'nuxt/dist',
      'nuxt-og-image',
      resolve('./app/components')
    ],
    metaFields: {
      type: false,
      props: true,
      slots: 'no-schema',
      events: 'no-schema',
      exposed: false
    }
  },

  // Declared global so @nuxt/fonts emits their faces where nuxt-og-image
  // reads them: the site's Public Sans, and a mono for the OG code pane.
  fonts: {
    families: [
      { name: 'Public Sans', provider: 'fontsource', weights: [400, 500, 600, 700], global: true },
      { name: 'Geist Mono', provider: 'fontsource', weights: [400], global: true }
    ]
  },

  gtag: {
    id: 'G-7H5VDKTB5C'
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons')
    }],
    clientBundle: {
      // `ProseCodeIcon` resolves through Pohon UI's code icon map and falls back to
      // `i-vscode-icons-file-type-{extension}`, and `ProsePrompt` hardcodes one logo per
      // action. None of them appear in anything `scan` looks at, so bundle them by hand
      // (nuxt/icon#518).
      icons: [
        'simple-icons:claude',
        'simple-icons:cursor',
        'simple-icons:windsurf',
        'vscode-icons:file-type-bun',
        'vscode-icons:file-type-css',
        'vscode-icons:file-type-dotenv',
        'vscode-icons:file-type-edge',
        'vscode-icons:file-type-git',
        'vscode-icons:file-type-html',
        'vscode-icons:file-type-npm',
        'vscode-icons:file-type-php',
        'vscode-icons:file-type-pnpm',
        'vscode-icons:file-type-powershell',
        'vscode-icons:file-type-tsconfig',
        'vscode-icons:file-type-yarn'
      ],
      scan: {
        // `ts` is added because the default glob skips JS/TS for perf, but nav icons
        // live in `app/utils/packages.ts`. The explicit dot pattern is required because
        // tinyglobby's `dot: false` makes `*.yml` skip `.navigation.yml`.
        globInclude: ['**/*.{vue,jsx,tsx,md,mdc,mdx,yml,yaml,ts}', '**/.*.{yml,yaml}']
      },
      includeCustomCollections: true
    }
  },

  image: {
    format: ['webp', 'jpeg', 'jpg', 'png', 'svg'],
    provider: 'ipx'
  },

  llms: {
    domain: SITE_URL,
    title: 'Vinicunca',
    description: 'Documentation for every @vinicunca package: Pohon UI, Akar, Perkakas, Taman, ESLint Config, UnoCSS Preset and UnoCSS Variants.',
    // `/raw/**` is served by nuxt-agent-discovery through the adapter in
    // server/plugins/agent-discovery.ts
    contentRawMarkdown: false,
    full: {
      title: 'Vinicunca Full Documentation',
      description: 'The full documentation for every @vinicunca package, as Markdown.'
    },
    sections: [
      WHEN_TO_USE_SECTION,
      ...DOCS_PACKAGES.map(pkg => ({
        title: pkg.title,
        description: pkg.description,
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE' as const, value: `/${pkg.id}/%` },
          { field: 'extension', operator: '=' as const, value: 'md' },
          { field: 'to', operator: 'IS NULL' as const }
        ]
      }))
    ],
    notes: [
      'The content is generated from the same source as the documentation pages.'
    ]
  },

  ogImage: {
    zeroRuntime: true,
    defaults: {
      width: 1200,
      height: 630
    },
    security: {
      renderTimeout: 60000
    }
  },

  robots: {
    disallow: ['/examples/']
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Vinicunca',
      description: 'Vinicunca builds Pohon UI, Akar, Perkakas, Taman and the tooling around them.',
      url: SITE_URL,
      logo: '/logo.svg',
      sameAs: ['https://github.com/vinicunca']
    }
  }
})
