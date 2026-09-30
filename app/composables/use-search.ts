import { useRoute } from '#app';
import { computed, ref } from '#imports';
import { isWithinPath, packages } from '~/utils/package-registry';

export function useSearch() {
  const route = useRoute();

  const searchTerm = ref('');

  const links = computed(() => [
    ...packages.map(item => ({
      label: item.label,
      description: item.description,
      icon: item.icon,
      to: item.path,
      active: isWithinPath(route.path, item.path),
    })),
    {
      label: 'Windows Dev',
      description: 'Setup WSL for your Windows',
      icon: 'i-logos:microsoft-windows-icon',
      to: '/windows-dev/wsl',
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
