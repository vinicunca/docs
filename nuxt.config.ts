import { readFileSync } from 'node:fs';
import { createResolver } from '@nuxt/kit';
import { DOCS_PACKAGES } from './app/utils/packages.ts';
import { WHEN_TO_USE_SECTION } from './server/utils/llms.ts';
import { SITE_URL } from './server/utils/site.ts';

const { resolve } = createResolver(import.meta.url);

/** Installed version of every documented npm package, shown next to its name. */
function resolveVersions() {
  const versions: Record<string, string> = {};
  for (const pkg of DOCS_PACKAGES) {
    if (!pkg.npm) {
      continue;
    }
    try {
      versions[pkg.npm] = JSON.parse(readFileSync(resolve(`./node_modules/${pkg.npm}/package.json`), 'utf8')).version;
    } catch {
      // not a dependency of the docs (create-taman): no version badge
    }
  }
  return versions;
}

const packageRedirects = Object.fromEntries(DOCS_PACKAGES.map((pkg) => [
  `/${pkg.id}`,
  { prerender: false, redirect: pkg.to },
]));

/** @keep-sorted */
export default defineNuxtConfig({
  $development: {
    site: {
      url: 'http://localhost:3000',
    },
  },

  $production: {
    site: {
      url: SITE_URL,
    },
  },

  agentDiscovery: {
    discovery: {
      links: [
        {
          anchor: '/',
          href: '/llms.txt',
          rel: 'service-doc',
          type: 'text/plain',
        },
        {
          header: false,
          href: '/raw/index.md',
          rel: 'start',
          title: 'Homepage',
          type: 'text/markdown',
        },
      ],
    },
    // Only the homepage and the documentation have a Markdown representation.
    routes: [
      { path: '/', raw: '/raw/index.md' },
      ...DOCS_PACKAGES.map((pkg) => `/${pkg.id}/**`),
    ],
    sitemap: {
      markdown: {
        expand: DOCS_PACKAGES.map((pkg) => `/${pkg.id}`),
      },
    },
    siteName: 'Vinicunca',
    siteUrl: SITE_URL,
    // Scanned from `./skills`, with `/.well-known/skills/index.json` generated
    // from the files on disk rather than hand-maintained.
    skills: { dir: './skills' },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
    rootAttrs: {
      class: 'bg-background',
    },
  },

  compatibilityDate: '2026-01-14',

  componentMeta: {
    exclude: [
      '@nuxt/content',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@nuxtjs/mdc',
      '@comark/vue',
      'nuxt/dist',
      'nuxt-og-image',
      resolve('./app/components'),
    ],
    metaFields: {
      events: 'no-schema',
      exposed: false,
      props: true,
      slots: 'no-schema',
      type: false,
    },
    overrides: {
      PCalendar: {
        props: {
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          defaultValue: { name: 'defaultValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[]' },
          maxValue: { name: 'maxValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          modelValue: { name: 'modelValue', type: 'null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[]' },
          placeholder: { name: 'placeholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
        },
      },
      PEditor: {
        props: {
          modelValue: { name: 'modelValue', type: 'null | string | JSONContent | JSONContent[]' },
          parseOptions: { name: 'parseOptions', type: 'ParseOptions' },
        },
      },
      PEditorDragHandle: {
        props: {
          editor: { name: 'editor', type: 'Editor' },
        },
      },
      PEditorEmojiMenu: {
        props: {
          editor: { name: 'editor', type: 'Editor' },
        },
      },
      PEditorMentionMenu: {
        props: {
          editor: { name: 'editor', type: 'Editor' },
        },
      },
      PEditorSuggestionMenu: {
        props: {
          editor: { name: 'editor', type: 'Editor' },
        },
      },
      PEditorToolbar: {
        props: {
          editor: { name: 'editor', type: 'Editor' },
        },
      },
      PInputDate: {
        props: {
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          defaultValue: { name: 'defaultValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime | DateRange' },
          maxValue: { name: 'maxValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
          modelValue: { name: 'modelValue', type: 'null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange' },
          placeholder: { name: 'placeholder', type: 'CalendarDate | CalendarDateTime | ZonedDateTime' },
        },
      },
      PInputTime: {
        props: {
          defaultPlaceholder: { name: 'defaultPlaceholder', type: 'Time | CalendarDateTime | ZonedDateTime' },
          defaultValue: { name: 'defaultValue', type: 'Time | CalendarDateTime | ZonedDateTime' },
          maxValue: { name: 'maxValue', type: 'Time | CalendarDateTime | ZonedDateTime' },
          minValue: { name: 'minValue', type: 'Time | CalendarDateTime | ZonedDateTime' },
          modelValue: { name: 'modelValue', type: 'null | Time | CalendarDateTime | ZonedDateTime' },
          placeholder: { name: 'placeholder', type: 'Time | CalendarDateTime | ZonedDateTime' },
        },
      },
    },
    transformers: [
      (component, code) => {
      // Simplify ui in slot prop types: `leading(props: { ui: Button['ui'] })` -> `leading(props: { ui: object })`
        code = code.replace(/ui:[^}]+(?=\})/g, 'ui: object');
        // JSDoc links copied from Nuxt UI point at `/docs/...`, which is `/pohon/...` here
        code = code.replace(/\]\(\/docs\//g, '](/pohon/');

        return { code, component };
      },
    ],
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'bash',
            'ts',
            'typescript',
            'diff',
            'vue',
            'json',
            'jsonc',
            'yml',
            'yaml',
            'css',
            'mdc',
            'js',
            'powershell',
            'shell',
            'ini',
            'toml',
            'html',
            'sql',
          ],
        },
      },
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },

  css: ['~/assets/css/main.css'],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  devtools: {
    enabled: true,
  },

  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: 'noopener',
      },
    },
    // `@nuxt/content`, `@nuxt/image` 2.0, `nuxt-llms` and `nuxt-agent-discovery`
    // import Nitro helpers from `#imports`, which compat v5 no longer provides.
    // Remove once they all import them explicitly.
    nitroAutoImports: true,
    // A `hydrate-never` component's `useAsyncData` stays out of the payload:
    // the Perkakas reference renders 160-odd static summaries that way.
    stripNeverHydratedData: true,
  },

  // Declared global so @nuxt/fonts emits their faces where nuxt-og-image
  // reads them: the site's Public Sans, and a mono for the OG code pane.
  fonts: {
    families: [
      {
        global: true,
        name: 'Public Sans',
        provider: 'fontsource',
        weights: [400, 500, 600, 700],
      },
      {
        global: true,
        name: 'Geist Mono',
        provider: 'fontsource',
        weights: [400],
      },
    ],
  },

  future: {
    compatibilityVersion: 5,
  },

  gtag: {
    id: 'G-7H5VDKTB5C',
  },

  icon: {
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
        'vscode-icons:file-type-yarn',
      ],
      includeCustomCollections: true,
      scan: {
        // `ts` is added because the default glob skips JS/TS for perf, but nav icons
        // live in `app/utils/packages.ts`. The explicit dot pattern is required because
        // tinyglobby's `dot: false` makes `*.yml` skip `.navigation.yml`.
        globInclude: ['**/*.{vue,jsx,tsx,md,mdc,mdx,yml,yaml,ts}', '**/.*.{yml,yaml}'],
      },
    },
    customCollections: [
      {
        dir: resolve('./app/assets/icons'),
        prefix: 'custom',
      },
    ],
    // Keep the icon collections as JSON files next to the server instead of
    // inlining them, Rollup spends about 1 GB of heap parsing them otherwise.
    serverBundle: {
      externalizeIconsJson: true,
    },
  },

  image: {
    format: ['webp', 'jpeg', 'jpg', 'png', 'svg'],
    provider: 'ipx',
  },

  llms: {
    // `/raw/**` is served by nuxt-agent-discovery through the adapter in
    // server/plugins/agent-discovery.ts
    contentRawMarkdown: false,
    description: 'Documentation for every @vinicunca package: Pohon UI, Akar, Perkakas, Taman, ESLint Config, UnoCSS Preset and UnoCSS Variants.',
    domain: SITE_URL,
    full: {
      description: 'The full documentation for every @vinicunca package, as Markdown.',
      title: 'Vinicunca Full Documentation',
    },
    notes: [
      'The content is generated from the same source as the documentation pages.',
    ],
    sections: [
      WHEN_TO_USE_SECTION,
      ...DOCS_PACKAGES.map((pkg) => ({
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE' as const, value: `/${pkg.id}/%` },
          { field: 'extension', operator: '=' as const, value: 'md' },
          { field: 'to', operator: 'IS NULL' as const },
        ],
        description: pkg.description,
        title: pkg.title,
      })),
    ],
    title: 'Vinicunca',
  },
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
    'nuxt-gtag',
  ],

  nitro: {
    prerender: { failOnError: false },
  },

  ogImage: {
    defaults: {
      height: 630,
      width: 1200,
    },
    security: {
      renderTimeout: 60000,
    },
    zeroRuntime: true,
  },

  prerender: {
    crawlLinks: true,
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
      ...DOCS_PACKAGES.map((pkg) => pkg.to),
    ],
  },

  robots: {
    disallow: ['/examples/'],
  },

  routeRules: {
    '/api/fonts.json': { prerender: true },
    '/api/navigation.json': { prerender: true },
    ...packageRedirects,
    // Old hub URLs
    '/eslint': { prerender: false, redirect: '/eslint/getting-started' },
    '/unocss-preset': { prerender: false, redirect: '/unocss-preset/getting-started' },
    '/unocss-preset/animations/usage': { prerender: false, redirect: '/unocss-preset/animations' },
    '/unocss-preset/fluid/usage': { prerender: false, redirect: '/unocss-preset/fluid' },
    '/unocss-preset/magic-css/usage': { prerender: false, redirect: '/unocss-preset/magic-css' },
    '/unocss-preset/scrollbar/usage': { prerender: false, redirect: '/unocss-preset/scrollbar' },
    '/unocss-variants': { prerender: false, redirect: '/unocss-variants/getting-started' },
    '/windows-dev': { prerender: false, redirect: '/windows-dev/guide' },
    '/windows-dev/guide/git-commits': { prerender: false, redirect: '/windows-dev/extras/git-commits' },
    '/windows-dev/guide/git-config': { prerender: false, redirect: '/windows-dev/guide/git' },
  },

  runtimeConfig: {
    public: {
      versions: resolveVersions(),
    },
  },

  schemaOrg: {
    identity: {
      description: 'Vinicunca builds Pohon UI, Akar, Perkakas, Taman and the tooling around them.',
      logo: '/logo.svg',
      name: 'Vinicunca',
      sameAs: ['https://github.com/vinicunca'],
      type: 'Organization',
      url: SITE_URL,
    },
  },

  site: {
    name: 'Vinicunca',
  },

  // Server sourcemaps cost the final Nitro bundle about 1 GB of heap while
  // bundling. In dev, the Nitro rebuild after saving two theme files peaked
  // at 4.7 GB with them and ran out of memory, 1.6 GB without.
  sourcemap: {
    server: false,
  },

  vite: {
    optimizeDeps: {
      /** @keep-sorted */
      include: [
        '@ai-sdk/vue',
        '@comark/vue',
        '@comark/vue/plugins/shiki',
        '@floating-ui/dom',
        '@internationalized/date',
        '@tanstack/vue-table',
        '@tanstack/vue-virtual',
        '@tiptap/core',
        '@tiptap/extension-code',
        '@tiptap/extension-drag-handle-vue-3',
        '@tiptap/extension-emoji',
        '@tiptap/extension-horizontal-rule',
        '@tiptap/extension-image',
        '@tiptap/extension-mention',
        '@tiptap/extension-placeholder',
        '@tiptap/extension-text-align',
        '@tiptap/markdown',
        '@tiptap/pm/state',
        '@tiptap/pm/view',
        '@tiptap/starter-kit',
        '@tiptap/suggestion',
        '@tiptap/vue-3',
        '@tiptap/vue-3/menus',
        '@unocss/preset-wind4/colors',
        '@vueuse/integrations/useFuse',
        '@vueuse/integrations/useSortable',
        'ai',
        'embla-carousel-auto-height',
        'embla-carousel-auto-scroll',
        'embla-carousel-autoplay',
        'embla-carousel-class-names',
        'embla-carousel-fade',
        'embla-carousel-vue',
        'embla-carousel-wheel-gestures',
        'fflate',
        'json5',
        'prettier',
        'shiki-transformer-color-highlight',
        'shiki/wasm',
        'tiptap-extension-code-block-shiki',
        'unocss-variants',
        'zod',
      ],
    },
  },
});
