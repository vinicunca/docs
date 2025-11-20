// @unocss-include

import type { PThemeFooter } from 'pohon-ui';

export const footerTheme = {
  slots: {
    top: 'py-8 lg:py-12',
    bottom: 'py-8 lg:py-12',
    container: 'py-8 lg:(py-4 flex gap-x-3 items-center justify-between)',
    left: 'mt-3 flex gap-x-1.5 items-center justify-center lg:(mt-0 flex-1 justify-start order-1)',
    center: 'mt-3 flex items-center justify-center lg:(mt-0 order-2)',
    right: 'flex gap-x-1.5 items-center justify-center lg:(flex-1 justify-end order-3)',
  },
} satisfies PThemeFooter;
