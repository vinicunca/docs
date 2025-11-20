// @unocss-include

import type { PThemeBanner } from 'pohon-ui';
import { BRANDS } from './constant';

export const bannerTheme = {
  slots: {
    root: 'w-full transition-colors-280 relative z-50',
    container: 'flex gap-3 h-12 items-center justify-between',
    left: 'hidden lg:(flex flex-1 items-center)',
    center: 'flex gap-1.5 min-w-0 items-center',
    right: 'flex items-center justify-end lg:flex-1',
    icon: 'color-text-inverted shrink-0 size-5 pointer-events-none',
    title: 'text-sm color-text-inverted font-medium truncate',
    actions: 'flex shrink-0 gap-1.5 isolate',
    close: 'color-text-inverted -me-1.5 lg:me-0 focus-visible:bg-background/10 hover:bg-background/10',
  },
  variants: {
    color: {
      ...Object.fromEntries(BRANDS.map((color) => [
        color,
        {
          root: `bg-${color}`,
        },
      ])),
      neutral: {
        root: 'bg-background-inverted',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      to: true,
      class: {
        root: `hover:bg-${color}/90`,
      },
    })),
    {
      color: 'neutral',
      to: true,
      class: {
        root: 'hover:bg-background-inverted/90',
      },
    },
  ],
} satisfies PThemeBanner;
