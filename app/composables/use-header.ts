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
      label: 'Windows Dev',
      to: '/windows-dev',
      active: route.path.startsWith('/windows-dev'),
    },
  ]);

  const mobileLinks = computed(() => [
    {
      label: 'ESLint',
      icon: 'i-lucide:square-play',
      to: '/eslint',
      active: route.path.startsWith('/eslint'),
    },
    {
      label: 'Perkakas',
      icon: 'i-lucide:book-open',
      to: '/perkakas',
      active: route.path.startsWith('/perkakas'),
    },
    {
      label: 'UnoCSS Preset',
      icon: 'i-lucide:box',
      to: '/unocss-preset',
      active: route.path.startsWith('/unocss-preset'),
    },
    {
      label: 'Windows Dev',
      icon: 'i-lucide:window-maximize',
      to: '/windows-dev',
      active: route.path.startsWith('/windows-dev'),
    },
  ]);

  return {
    desktopLinks,
    mobileLinks,
  };
}
