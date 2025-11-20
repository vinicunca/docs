// @unocss-include

import type { PThemeFooterColumns } from 'pohon-ui';

export const footerColumnsTheme = {
  slots: {
    root: 'xl:(gap-8 grid grid-cols-3)',
    left: 'mb-10 xl:mb-0',
    center: 'flex flex-col gap-8 auto-cols-fr grid-flow-col lg:grid xl:col-span-2',
    right: 'mt-10 xl:mt-0',
    label: 'text-sm font-semibold',
    list: 'mt-6 space-y-4',
    item: 'relative',
    link: 'group text-sm flex gap-1.5 items-center focus-visible:outline-primary',
    linkLeadingIcon: 'shrink-0 size-5',
    linkLabel: 'truncate',
    linkLabelExternalIcon: 'color-text-dimmed size-3 inline-block top-0 absolute',
  },
  variants: {
    active: {
      true: {
        link: 'text-primary font-medium',
      },
      false: {
        link: 'color-text-muted transition-colors-280 hover:color-text',
      },
    },
  },
} satisfies PThemeFooterColumns;
