import { useRoute } from '#app';
import { computed } from 'vue';
import { isWithinPath, packages } from '~/utils/package-registry';

export function useHeader() {
  const route = useRoute();

  const packageLinks = computed(() => packages.map(item => ({
    label: item.label,
    description: item.description,
    icon: item.icon,
    to: item.path,
    badge: item.status === 'work-in-progress' ? 'WIP' : undefined,
    active: isWithinPath(route.path, item.path),
  })));

  const desktopLinks = computed(() => [
    { label: 'Packages', children: packageLinks.value },
    { label: 'Guides', to: '/windows-dev/wsl', active: isWithinPath(route.path, '/windows-dev') },
  ]);

  const mobileLinks = computed(() => [
    { label: 'Packages', children: packageLinks.value },
    { label: 'Guides', icon: 'i-lucide:book-open', to: '/windows-dev/wsl', active: isWithinPath(route.path, '/windows-dev') },
  ]);

  return { desktopLinks, mobileLinks };
}
