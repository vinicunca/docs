// @unocss-include

import type { PThemeInputTime } from 'pohon-ui';
import { omit } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { inputTheme } from './input.theme';

const inputSlots = omit(inputTheme.slots, ['root', 'base']);

export const inputTimeTheme = {
  slots: {
    ...inputSlots,
    base: 'group relative inline-flex items-center rounded-md select-none transition-colors-280',
    segment: 'rounded text-center outline-hidden data-[placeholder]:color-text-dimmed data-[segment=literal]:color-text-muted data-[invalid]:color-error data-[disabled]:(cursor-not-allowed opacity-75) transition-colors-280',
  },
  variants: defu(
    {
      size: {
        xs: {
          base: [inputTheme.variants.size.xs.base, 'akar:gap-0.25'],
          segment: 'not-[[data-segment=literal]]:w-6',
        },
        sm: {
          base: [inputTheme.variants.size.sm.base, 'akar:gap-0.5'],
          segment: 'not-[[data-segment=literal]]:w-6',
        },
        md: {
          base: [inputTheme.variants.size.md.base, 'akar:gap-0.5'],
          segment: 'not-[[data-segment=literal]]:w-7',
        },
        lg: {
          base: [inputTheme.variants.size.lg.base, 'akar:gap-0.75'],
          segment: 'not-[[data-segment=literal]]:w-7',
        },
        xl: {
          base: [inputTheme.variants.size.xl.base, 'akar:gap-0.75'],
          segment: 'not-[[data-segment=literal]]:w-8',
        },
      },
    },
    inputTheme.variants,
  ),
  compoundVariants: [
    ...inputTheme.compoundVariants,
    {
      variant: 'outline',
      class: {
        segment: 'focus:bg-background-elevated',
      },
    },
    {
      variant: 'soft',
      class: {
        segment: 'focus:bg-background-accented/50 group-hover:focus:bg-background-accented',
      },
    },
    {
      variant: 'subtle',
      class: {
        segment: 'focus:bg-background-accented',
      },
    },
    {
      variant: 'ghost',
      class: {
        segment: 'focus:bg-background-elevated group-hover:focus:bg-background-accented',
      },
    },
    {
      variant: 'none',
      class: {
        segment: 'focus:bg-background-elevated',
      },
    },
  ],
} satisfies PThemeInputTime;
