import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

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

  icon: {
    clientBundle: {
      includeCustomCollections: true,
      scan: true,
    },
    customCollections: [{
      dir: resolve('./app/assets/icons'),
      prefix: 'custom',
    }],
    provider: 'iconify',
  },

  imports: {
    autoImport: false,
  },

  // llms: {
  //   description: 'A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.',
  //   domain: 'https://akar.vinicunca.dev',
  //   full: {
  //     description: 'This is the full documentation for Pohon UI. It includes all the Markdown files written with the MDC syntax.',
  //     title: 'Pohon UI Full Documentation',
  //   },
  //   notes: [
  //     'The content is automatically generated from the same source as the official documentation.',
  //   ],
  //   sections: [
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: 'docs/akar/getting-started%' },
  //       ],
  //       title: 'Akar Getting Started',
  //     },
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/docs/akar/components/%' },
  //       ],
  //       title: 'Akar Components',
  //     },
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/docs/akar/utilities/%' },
  //       ],
  //       title: 'Akar Utilities',
  //     },
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: 'docs/pohon/getting-started%' },
  //       ],
  //       title: 'Pohon Getting Started',
  //     },
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/docs/pohon/components/%' },
  //       ],
  //       title: 'Pohon Components',
  //     },
  //     {
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/docs/pohon/composables/%' },
  //       ],
  //       title: 'Pohon Composables',
  //     },
  //   ],
  //   title: 'Pohon UI',
  // },

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
    '@unocss/nuxt',
    'motion-v/nuxt',
    // 'nuxt-llms',
  ],

  vite: {
    optimizeDeps: {
      // prevents reloading page when navigating between components
      include: [
      ],
    },
  },
});
