export function useFooter() {
  const links = computed(() => DOCS_PACKAGES.map(pkg => ({
    label: pkg.title,
    to: pkg.to
  })))

  return {
    links
  }
}
