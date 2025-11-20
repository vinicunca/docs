// @unocss-include

import type { PThemePagination } from 'pohon-ui';

export const paginationTheme = {
  slots: {
    list: 'flex gap-1 items-center',
    ellipsis: 'pointer-events-none',
    label: 'text-center min-w-5',
  },
} satisfies PThemePagination;
