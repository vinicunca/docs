// @unocss-include

import type { PThemePinInput } from 'pohon-ui';
import { BRANDS } from './constant';

export const pinInputTheme = {
  slots: {
    root: 'inline-flex gap-1.5 items-center relative',
    base: 'text-center border-0 rounded-md transition-colors-280 placeholder:color-text-dimmed focus:outline-none disabled:(opacity-75 cursor-not-allowed)',
  },
  variants: {
    size: {
      xs: {
        base: 'text-xs size-6',
      },
      sm: {
        base: 'text-xs size-7',
      },
      md: {
        base: 'text-sm size-8',
      },
      lg: {
        base: 'text-sm size-9',
      },
      xl: {
        base: 'text-base size-10',
      },
    },
    variant: {
      outline: 'color-text-highlighted bg-background ring ring-ring-accented ring-inset',
      soft: 'color-text-highlighted bg-background-elevated/50 disabled:bg-background-elevated/50 focus:bg-background-elevated hover:bg-background-elevated',
      subtle: 'color-text-highlighted bg-background-elevated ring ring-ring-accented ring-inset',
      ghost: 'color-text-highlighted bg-transparent disabled:bg-transparent focus:bg-background-elevated hover:bg-background-elevated dark:disabled:bg-transparent',
      none: 'color-text-highlighted bg-transparent',
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: ['outline', 'subtle'],
      class: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      highlight: true,
      class: `ring ring-inset ring-${color}`,
    })),
    {
      color: 'neutral',
      variant: ['outline', 'subtle'],
      class: 'focus-visible:(ring-2 ring-inset ring-ring-inverted)',
    },
    {
      color: 'neutral',
      highlight: true,
      class: 'ring ring-inset ring-ring-inverted',
    },
  ],
} satisfies PThemePinInput;
