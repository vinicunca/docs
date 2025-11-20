// @unocss-include

import type { PThemeCard } from 'pohon-ui';

export const cardTheme = {
  slots: {
    root: 'rounded-lg overflow-hidden',
    header: 'p-4 sm:px-6',
    body: 'p-4 sm:p-6',
    footer: 'p-4 sm:px-6',
  },
  variants: {
    variant: {
      solid: {
        root: 'color-text-inverted bg-background-inverted',
      },
      outline: {
        root: 'bg-background ring ring-ring divide-divide divide-y',
      },
      soft: {
        root: 'bg-background-elevated/50 divide-divide divide-y',
      },
      subtle: {
        root: 'bg-background-elevated/50 ring ring-ring divide-divide divide-y',
      },
    },
  },
} satisfies PThemeCard;
