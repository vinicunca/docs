import type { FooterColumn } from 'pohon-ui';

export function useFooter() {
  const columns = computed<Array<FooterColumn>>(() => [
    ...DOCS_GROUPS.map((group) => ({
      label: group.title,
      children: docsPackagesIn(group.id).map((pkg) => ({
        label: pkg.title,
        to: pkg.to,
      })),
    })),
    {
      label: 'Docs',
      children: [
        { label: 'Theme', to: '/theme' },
        { label: 'GitHub', to: 'https://github.com/vinicunca', target: '_blank' },
      ],
    },
  ]);

  return {
    columns,
  };
}
