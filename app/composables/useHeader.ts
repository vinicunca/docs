/** @unocss-include */

export function useHeader() {
  const route = useRoute();
  const currentPackage = computed(() => findDocsPackage(route.path));

  function packageLink(pkg: DocsPackage) {
    return {
      label: pkg.title,
      description: pkg.description,
      icon: pkg.icon,
      to: pkg.to,
      active: currentPackage.value?.id === pkg.id,
    };
  }

  const desktopLinks = computed(() => [
    ...DOCS_GROUPS.map((group) => ({
      label: group.title,
      active: currentPackage.value?.group === group.id,
      children: docsPackagesIn(group.id).map(packageLink),
    })),
    {
      label: 'Theme',
      to: '/theme',
      active: route.path.startsWith('/theme'),
    },
  ]);

  const mobileLinks = computed(() => [
    ...DOCS_GROUPS.flatMap((group) => [
      { label: group.title, type: 'label' as const },
      ...docsPackagesIn(group.id).map(packageLink),
    ]),
    { label: 'Docs', type: 'label' as const },
    {
      label: 'Theme',
      icon: 'i-lucide-palette',
      to: '/theme',
    },
    {
      label: 'GitHub',
      to: 'https://github.com/vinicunca',
      icon: 'i-simple-icons-github',
      target: '_blank',
    },
  ]);

  return {
    currentPackage,
    desktopLinks,
    mobileLinks,
  };
}
