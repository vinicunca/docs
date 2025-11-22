import { useRoute } from '#app';
import { computed } from '#imports';

export function useHeader() {
  const route = useRoute();

  const desktopLinks = computed(() => [
    {
      label: 'ESLint',
      to: '/eslint',
      active: route.path.startsWith('/eslint'),
    },
    {
      label: 'Perkakas',
      to: '/perkakas',
      active: route.path.startsWith('/perkakas'),
    },
    {
      label: 'UnoCSS Preset',
      to: '/unocss-preset',
      active: route.path.startsWith('/unocss-preset'),
    },
    {
      label: 'UnoCSS Variants',
      to: '/unocss-variants',
      active: route.path.startsWith('/unocss-variants'),
    },
    {
      label: 'Windows Dev',
      to: '/windows-dev/wsl',
      active: route.path.startsWith('/windows-dev'),
    },
  ]);

  const mobileLinks = computed(() => [
    {
      label: 'ESLint',
      icon: 'i-logos:eslint',
      to: '/eslint',
      active: route.path.startsWith('/eslint'),
    },
    {
      label: 'Perkakas',
      icon: 'i-logos:typescript-icon',
      to: '/perkakas',
      active: route.path.startsWith('/perkakas'),
    },
    {
      label: 'UnoCSS Preset',
      icon: 'i-logos:unocss',
      to: '/unocss-preset',
      active: route.path.startsWith('/unocss-preset'),
    },
    {
      label: 'UnoCSS Variants',
      icon: 'i-logos:unocss',
      to: '/unocss-variants',
      active: route.path.startsWith('/unocss-variants'),
    },
    {
      label: 'Windows Dev',
      icon: 'i-logos:microsoft-windows-icon',
      to: '/windows-dev',
      active: route.path.startsWith('/windows-dev'),
    },
  ]);

  return {
    desktopLinks,
    mobileLinks,
  };
}
