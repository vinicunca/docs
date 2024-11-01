import { defineConfig } from 'vitepress';

import { devSetupSidebar } from './theme/sidebar.dev-setup';

export default defineConfig({
  cleanUrls: true,

  description: 'Utilities to enhance developer experience',

  head: [
    // Favicons
    [
      'meta',
      {
        content: '#ffffff',
        name: 'theme-color',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon.ico',
        rel: 'icon',
        sizes: '48x48',
      },
    ],
    [
      'link',
      {
        href: '/favicons/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
      },
    ],
    [
      'link',
      {
        href: '/favicons/site.webmanifest',
        rel: 'manifest',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon.ico',
        rel: 'icon',
        sizes: '48x48',
      },
    ],

    [
      'meta',
      {
        content: 'praburangki',
        name: 'author',
      },
    ],
    [
      'meta',
      {
        content: 'Vinicunca',
        property: 'og:title',
      },
    ],
    [
      'meta',
      {
        content: 'Utilities to enhance developer experience',
        property: 'og:description',
      },
    ],
    [
      'meta',
      {
        content: 'summary_large_image',
        name: 'twitter:card',
      },
    ],
    [
      'meta',
      {
        content: '@praburangki',
        name: 'twitter:creator',
      },
    ],
    [
      'meta',
      {
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
        name: 'viewport',
      },
    ],

    [
      'link',
      { href: 'https://fonts.gstatic.com', rel: 'dns-prefetch' },
    ],
    [
      'link',
      { crossorigin: 'anonymous', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', rel: 'stylesheet' },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap', rel: 'stylesheet' },
    ],

    [
      'meta',
      {
        content: 'https://vinicunca.dev/og/base.jpg',
        property: 'og:image',
      },
    ],

    // Google Analytics
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7H5VDKTB5C',
      },
    ],
    [
      'script',
      {},
      'window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\', new Date());\ngtag(\'config\', \'G-7H5VDKTB5C\');',
    ],
  ],

  lang: 'en-US',

  lastUpdated: true,

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vinicunca/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    footer: {
      copyright: 'Copyright © 2023-PRESENT praburangki',
      message: 'Released under the MIT License.',
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
      text: 'Updated at',
    },

    logo: '/logo.svg',

    nav: [
      {
        activeMatch: '/dev-setup/',
        items: [
          { link: '/dev-setup/wsl', text: 'WSL' },
          { link: '/dev-setup/terminal', text: 'Terminal' },
          { link: '/dev-setup/git-config', text: 'Git Config' },
          { link: '/dev-setup/chocolatey', text: 'Chocolatey' },
          { link: '/dev-setup/zsh', text: 'ZSH' },
          { link: '/dev-setup/pnpm', text: 'PNPM' },
          { link: '/dev-setup/vscode', text: 'VSCode' },
          { link: '/dev-setup/git-commits', text: 'Git Commits' },
        ],
        text: 'Dev Setup',
      },
    ],

    sidebar: {
      '/dev-setup': devSetupSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinicunca' },
    ],
  },

  title: 'Vinicunca',

  async transformPageData(pageData) {
    pageData.lastUpdated = Date.now();
  },
});
