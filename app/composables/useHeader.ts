export function useHeader() {
  const route = useRoute()
  const currentPackage = computed(() => findDocsPackage(route.path))

  function packageLink(pkg: DocsPackage) {
    return {
      label: pkg.title,
      description: pkg.description,
      icon: pkg.icon,
      to: pkg.to,
      active: currentPackage.value?.id === pkg.id
    }
  }

  const packageLinks = computed(() => DOCS_PACKAGES.filter(pkg => pkg.group === 'packages').map(packageLink))
  const guideLinks = computed(() => DOCS_PACKAGES.filter(pkg => pkg.group === 'guides').map(packageLink))

  const desktopLinks = computed(() => [{
    label: 'Packages',
    active: currentPackage.value?.group === 'packages',
    children: packageLinks.value
  }, {
    label: 'Guides',
    active: currentPackage.value?.group === 'guides',
    children: guideLinks.value
  }, {
    label: 'Theme',
    to: '/theme',
    active: route.path.startsWith('/theme')
  }])

  const mobileLinks = computed(() => [
    ...packageLinks.value,
    ...guideLinks.value,
    {
      label: 'Theme',
      icon: 'i-lucide-palette',
      to: '/theme'
    },
    {
      label: 'GitHub',
      to: 'https://github.com/vinicunca',
      icon: 'i-simple-icons-github',
      target: '_blank'
    }
  ])

  return {
    currentPackage,
    desktopLinks,
    mobileLinks
  }
}
