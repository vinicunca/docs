import { useRoute } from '#app';
import { computed, ref } from '#imports';

export function useSearch() {
  const route = useRoute();

  const searchTerm = ref('');

  const links = computed(() => [
    {
      label: 'ESLint',
      description: 'Config and rules to enforce code quality and consistency.',
      icon: 'i-logos:eslint',
      to: '/eslint',
      active: route.path.startsWith('/eslint'),
    },
    {
      label: 'Perkakas',
      description: 'A collection of TypeScript utilities and tools for developers.',
      icon: 'i-logos:typescript-icon',
      to: '/perkakas',
      active: route.path.startsWith('/perkakas'),
    },
    {
      label: 'UnoCSS Preset',
      description: 'An opinionated UnoCSS preset',
      icon: 'i-logos:unocss',
      to: '/unocss-preset',
      active: route.path.startsWith('/unocss-preset'),
    },
    {
      label: 'UnoCSS Variants',
      description: 'Allow you to modify or extend existing utility classes',
      icon: 'i-logos:unocss',
      to: '/unocss-variants',
      active: route.path.startsWith('/unocss-variants'),
    },
    {
      label: 'Windows Dev',
      description: 'Setup WSL for your Windows',
      icon: 'i-logos:microsoft-windows-icon',
      to: '/windows-dev',
    },
    {
      label: 'GitHub',
      description: 'Check out the Vinicunca repository and follow development on GitHub.',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/vinicunca',
      target: '_blank',
    },
  ]);

  return {
    links,
    searchTerm,
  };
}
