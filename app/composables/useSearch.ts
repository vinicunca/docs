export function useSearch() {
  const route = useRoute()
  const { frameworks } = useFrameworks()

  const searchTerm = ref('')

  const links = computed(() => [
    ...DOCS_PACKAGES.map(pkg => ({
      label: pkg.title,
      description: pkg.description,
      icon: pkg.icon,
      to: pkg.to,
      active: route.path.startsWith(`/${pkg.id}/`)
    })),
    {
      label: 'Theme',
      description: 'Build and share a Pohon UI theme.',
      icon: 'i-lucide-palette',
      to: '/theme'
    },
    {
      label: 'GitHub',
      description: 'Browse the Vinicunca repositories on GitHub.',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/vinicunca',
      target: '_blank'
    }
  ])

  const groups = computed(() => route.path.startsWith('/pohon/')
    ? [{
        id: 'framework',
        label: 'Framework',
        items: frameworks.value
      }]
    : [])

  return {
    links,
    groups,
    searchTerm
  }
}
