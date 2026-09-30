export const packages = [
  {
    id: 'akar',
    label: 'Akar',
    description: 'Accessible Vue components and primitives.',
    icon: 'i-lucide:blocks',
    path: '/akar',
    repo: 'vinicunca/akar',
    status: 'published',
  },
  {
    id: 'eslint',
    label: 'ESLint Config',
    description: 'A configurable ESLint setup for modern projects.',
    icon: 'i-logos:eslint',
    path: '/eslint',
    repo: 'vinicunca/eslint-config',
    status: 'published',
  },
  {
    id: 'perkakas',
    label: 'Perkakas',
    description: 'JavaScript and TypeScript utility functions.',
    icon: 'i-logos:typescript-icon',
    path: '/perkakas',
    repo: 'vinicunca/perkakas',
    status: 'published',
  },
  {
    id: 'pohon',
    label: 'Pohon UI',
    description: 'A Vue component library built on Akar and UnoCSS.',
    icon: 'i-lucide:panels-top-left',
    path: '/pohon',
    repo: 'vinicunca/pohon',
    status: 'published',
  },
  {
    id: 'taman',
    label: 'Taman',
    description: 'Application packages and tools in development.',
    icon: 'i-lucide:flower-2',
    path: '/taman',
    repo: 'vinicunca/taman',
    status: 'work-in-progress',
  },
  {
    id: 'unocss-preset',
    label: 'UnoCSS Preset',
    description: 'Animations, fluid utilities, and theme presets for UnoCSS.',
    icon: 'i-logos:unocss',
    path: '/unocss-preset',
    repo: 'vinicunca/unocss-preset-vinicunca',
    status: 'published',
  },
  {
    id: 'unocss-variants',
    label: 'UnoCSS Variants',
    description: 'Typed variants for composing utility classes.',
    icon: 'i-lucide:sliders-horizontal',
    path: '/unocss-variants',
    repo: 'praburangki/unocss-variants',
    status: 'published',
  },
] as const;

export type Package = (typeof packages)[number];
export type PackageId = Package['id'];

export function isWithinPath(path: string, root: string): boolean {
  return path === root || path.startsWith(`${root}/`);
}

export function packageForPath(path: string): Package | undefined {
  return packages.find(item => isWithinPath(path, item.path));
}
