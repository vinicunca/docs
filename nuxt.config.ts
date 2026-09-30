import { createResolver } from '@nuxt/kit';
import { readFileSync } from 'node:fs';

const { resolve } = createResolver(import.meta.url);
const componentApiRoutes = (packageId: 'akar' | 'pohon') => {
  const metadata = JSON.parse(readFileSync(resolve(`./server/data/${packageId}-components.json`), 'utf8'));
  return [
    `/api/${packageId}/components.json`,
    ...Object.keys(metadata.components).map(name => `/api/${packageId}/components/${name}.json`),
  ];
};

export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'class': 'bg-background',
      'data-akar-drawer-wrapper': '',
    },
  },

  compatibilityDate: '2024-07-09',

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'ts', 'typescript', 'diff', 'vue', 'json', 'yml', 'css', 'mdc', 'blade', 'edge', 'jsonc', 'js', 'lua'],
        },
      },
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },

  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true,
  },

  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: 'noopener',
      },
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'fontsource', weights: ['100 900'] },
    ],
  },

  gtag: {
    id: 'G-7H5VDKTB5C',
  },

  icon: {
    clientBundle: {
      includeCustomCollections: true,
      scan: true,
    },
    customCollections: [{
      dir: resolve('./app/assets/icons'),
      prefix: 'custom',
    }],
    provider: 'server',
    serverBundle: {
      collections: ['fa-regular', 'fa-solid', 'ic', 'logos', 'lucide', 'simple-icons', 'vscode-icons'],
    },
  },

  imports: {
    autoImport: false,
  },

  llms: {
    description: 'A curated collection of essential utilities, robust configurations, and design presets for modern web development.',
    domain: 'https://vinicunca.dev',
    full: {
      description: 'This is the full documentation for Vinicunca. It includes all the Markdown files written with the MDC syntax.',
      title: 'Vinicunca Full Documentation',
    },
    notes: [
      'The content is automatically generated from the same source as the official documentation.',
    ],
    sections: [
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/akar%' },
        ],
        title: 'Akar',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/eslint%' },
        ],
        title: 'ESLint Config',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/perkakas%' },
        ],
        title: 'Perkakas',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/pohon%' },
        ],
        title: 'Pohon UI',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/taman%' },
        ],
        title: 'Taman',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/unocss-preset%' },
        ],
        title: 'UnoCSS Preset',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/unocss-variants%' },
        ],
        title: 'UnoCSS Variants',
      },
      {
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/windows-dev/%' },
        ],
        title: 'Windows Dev',
      },
    ],
    title: 'Vinicunca',
  },

  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },

  modules: [
    'pohon-ui',
    '@nuxt/content',
    '@nuxt/fonts',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-llms',
    'nuxt-gtag',
  ],

  nitro: {
    prerender: {
      routes: [
        '/api/perkakas.json',
        ...componentApiRoutes('akar'),
        ...componentApiRoutes('pohon'),
      ],
    },
  },

  routeRules: {
    '/unocss-preset/akar': {
      prerender: false,
      redirect: { statusCode: 301, to: '/unocss-preset/akar/usage' },
    },
    '/unocss-preset/animations': {
      prerender: false,
      redirect: { statusCode: 301, to: '/unocss-preset/animations/usage' },
    },
    '/unocss-preset/fluid': {
      prerender: false,
      redirect: { statusCode: 301, to: '/unocss-preset/fluid/usage' },
    },
    '/unocss-preset/magic-css': {
      prerender: false,
      redirect: { statusCode: 301, to: '/unocss-preset/magic-css/usage' },
    },
    '/unocss-preset/scrollbar': {
      prerender: false,
      redirect: { statusCode: 301, to: '/unocss-preset/scrollbar/usage' },
    },
    '/windows-dev': {
      prerender: false,
      redirect: { statusCode: 301, to: '/windows-dev/wsl' },
    },
  },

  vite: {
    optimizeDeps: {
      // prevents reloading page when navigating between components
      include: [
      ],
    },
  },
});
