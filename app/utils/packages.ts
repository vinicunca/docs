export interface DocsPackage {
  /** First URL segment and `content/<id>` folder. */
  id: string
  title: string
  description: string
  icon: string
  /** Landing page of the package (its first section). */
  to: string
  /** npm package name, its version comes from `runtimeConfig.public.versions`. */
  npm?: string
  github: string
  group: 'packages' | 'guides'
  /** Section slug -> sidebar categories, read from each page's `category` frontmatter. */
  categories?: Record<string, { id: string, title: string, framework?: string }[]>
}

export const DOCS_PACKAGES: DocsPackage[] = [{
  id: 'pohon',
  title: 'Pohon UI',
  description: 'A Vue and Nuxt component library styled with UnoCSS, built on Akar.',
  icon: 'i-lucide-trees',
  to: '/pohon/getting-started',
  npm: 'pohon-ui',
  github: 'https://github.com/vinicunca/pohon',
  group: 'packages',
  categories: {
    components: [
      { id: 'layout', title: 'Layout' },
      { id: 'element', title: 'Element' },
      { id: 'form', title: 'Form' },
      { id: 'data', title: 'Data' },
      { id: 'navigation', title: 'Navigation' },
      { id: 'overlay', title: 'Overlay' },
      { id: 'page', title: 'Page' },
      { id: 'dashboard', title: 'Dashboard' },
      { id: 'chat', title: 'AI Chat' },
      { id: 'editor', title: 'Editor' },
      { id: 'content', title: 'Content', framework: 'nuxt' },
      { id: 'color-mode', title: 'Color Mode' },
      { id: 'i18n', title: 'i18n' }
    ],
    typography: [
      { id: 'components', title: 'Components' }
    ]
  }
}, {
  id: 'akar',
  title: 'Akar',
  description: 'Unstyled, accessible Vue primitives for building design systems.',
  icon: 'i-lucide-sprout',
  to: '/akar/overview',
  npm: 'akar',
  github: 'https://github.com/vinicunca/akar',
  group: 'packages'
}, {
  id: 'perkakas',
  title: 'Perkakas',
  description: 'A typed, data-first and data-last utility library for TypeScript.',
  icon: 'i-lucide-wrench',
  to: '/perkakas/getting-started',
  npm: '@vinicunca/perkakas',
  github: 'https://github.com/vinicunca/perkakas',
  group: 'packages'
}, {
  id: 'taman',
  title: 'Taman',
  description: 'A full-stack Vue admin template with oRPC, better-auth and Cloudflare.',
  icon: 'i-lucide-layout-dashboard',
  to: '/taman/getting-started',
  npm: 'create-taman',
  github: 'https://github.com/vinicunca/taman',
  group: 'packages'
}, {
  id: 'eslint',
  title: 'ESLint Config',
  description: 'Vinicunca\'s flat ESLint config with formatting, TypeScript, Vue and more.',
  icon: 'i-simple-icons-eslint',
  to: '/eslint/getting-started',
  npm: '@vinicunca/eslint-config',
  github: 'https://github.com/vinicunca/eslint-config',
  group: 'packages'
}, {
  id: 'unocss-preset',
  title: 'UnoCSS Preset',
  description: 'The Vinicunca UnoCSS preset: fluid sizing, animations, scrollbars and more.',
  icon: 'i-simple-icons-unocss',
  to: '/unocss-preset/getting-started',
  npm: '@vinicunca/unocss-preset',
  github: 'https://github.com/vinicunca/unocss-preset-vinicunca',
  group: 'packages'
}, {
  id: 'unocss-variants',
  title: 'UnoCSS Variants',
  description: 'Variants, slots and compound styles for UnoCSS, a port of Tailwind Variants.',
  icon: 'i-lucide-layers',
  to: '/unocss-variants/getting-started',
  npm: 'unocss-variants',
  github: 'https://github.com/praburangki/unocss-variants',
  group: 'packages'
}, {
  id: 'windows-dev',
  title: 'Windows Dev Setup',
  description: 'Set up a web development environment on Windows with WSL.',
  icon: 'i-simple-icons-windows',
  to: '/windows-dev/guide',
  github: 'https://github.com/vinicunca/docs',
  group: 'guides'
}]

export function findDocsPackage(path: string): DocsPackage | undefined {
  const id = path.split('/')[1]
  return DOCS_PACKAGES.find(pkg => pkg.id === id)
}
