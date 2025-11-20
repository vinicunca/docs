// @unocss-include

import type { PThemeInputNumber } from 'pohon-ui';
import { BRANDS } from './constant';
import { fieldGroupVariantWithRoot } from './field-group.theme';
import { inputTheme } from './input.theme';

export const inputNumberTheme = {
  slots: {
    root: 'relative inline-flex items-center',
    base: 'w-full rounded-md border-0 placeholder:color-text-dimmed focus:outline-none disabled:(cursor-not-allowed opacity-75) transition-colors-280',
    increment: 'absolute flex items-center',
    decrement: 'absolute flex items-center',
  },
  variants: {
    ...fieldGroupVariantWithRoot,
    size: {
      xs: 'px-2 py-1 text-xs gap-1',
      sm: 'px-2.5 py-1.5 text-xs gap-1.5',
      md: 'px-2.5 py-1.5 text-sm gap-1.5',
      lg: 'px-3 py-2 text-sm gap-2',
      xl: 'px-3 py-2 text-base gap-2',
    },
    variant: {
      ...inputTheme.variants.variant,
    },
    disabled: {
      true: {
        increment: 'opacity-75 cursor-not-allowed',
        decrement: 'opacity-75 cursor-not-allowed',
      },
    },
    orientation: {
      horizontal: {
        base: 'text-center',
        increment: 'inset-y-0 end-0 pe-1',
        decrement: 'inset-y-0 start-0 ps-1',
      },
      vertical: {
        increment: 'top-0 end-0 pe-1 [&>button]:py-0 scale-80',
        decrement: 'bottom-0 end-0 pe-1 [&>button]:py-0 scale-80',
      },
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
    {
      orientation: 'horizontal',
      decrement: false,
      class: 'text-start',
    },
    {
      decrement: true,
      size: 'xs',
      class: 'ps-7',
    },
    {
      decrement: true,
      size: 'sm',
      class: 'ps-8',
    },
    {
      decrement: true,
      size: 'md',
      class: 'ps-9',
    },
    {
      decrement: true,
      size: 'lg',
      class: 'ps-10',
    },
    {
      decrement: true,
      size: 'xl',
      class: 'ps-11',
    },
    {
      increment: true,
      size: 'xs',
      class: 'pe-7',
    },
    {
      increment: true,
      size: 'sm',
      class: 'pe-8',
    },
    {
      increment: true,
      size: 'md',
      class: 'pe-9',
    },
    {
      increment: true,
      size: 'lg',
      class: 'pe-10',
    },
    {
      increment: true,
      size: 'xl',
      class: 'pe-11',
    },
  ],
} satisfies PThemeInputNumber;
