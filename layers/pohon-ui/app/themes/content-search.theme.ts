// @unocss-include

import type { PThemeContentSearch } from 'pohon-ui';

export const contentSearchTheme = {
  slots: {
    input: '[&>input]:text-base/5',
  },
  variants: {
    fullscreen: {
      false: {
        dialog: 'sm:max-w-3xl sm:h-[28rem]',
      },
    },
  },
} satisfies PThemeContentSearch;
