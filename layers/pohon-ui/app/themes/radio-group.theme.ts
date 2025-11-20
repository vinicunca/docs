// @unocss-include

import type { PThemeRadioGroup } from 'pohon-ui';
import { BRANDS } from './constant';

export const radioGroupTheme = {
  slots: {
    root: 'relative',
    fieldset: 'flex gap-x-2',
    legend: 'mb-1 block font-medium color-text',
    item: 'flex items-start',
    container: 'flex items-center',
    base: 'rounded-full ring ring-inset ring-ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2',
    indicator: 'flex items-center justify-center size-full after:(content-empty bg-background rounded-full)',
    wrapper: 'w-full',
    label: 'block font-medium color-text',
    description: 'color-text-muted',
  },
  variants: {
    color: {
      ...Object.fromEntries(BRANDS.map((color) => [color, {
        base: `focus-visible:outline-${color}`,
        indicator: `bg-${color}`,
      }])),
      neutral: {
        base: 'focus-visible:outline-outline-inverted',
        indicator: 'bg-background-inverted',
      },
    },
    variant: {
      card: {
        item: 'border border-border-muted rounded-lg',
      },
      table: {
        item: 'border border-border-muted',
      },
    },
    orientation: {
      horizontal: {
        fieldset: 'flex-row',
      },
      vertical: {
        fieldset: 'flex-col',
      },
    },
    indicator: {
      start: {
        item: 'flex-row',
        wrapper: 'ms-2',
      },
      end: {
        item: 'flex-row-reverse',
        wrapper: 'me-2',
      },
      hidden: {
        base: 'sr-only',
        wrapper: 'text-center',
      },
    },
    size: {
      xs: {
        fieldset: 'gap-y-0.5',
        legend: 'text-xs',
        base: 'size-3',
        item: 'text-xs',
        container: 'h-4',
        indicator: 'after:size-1',
      },
      sm: {
        fieldset: 'gap-y-0.5',
        legend: 'text-xs',
        base: 'size-3.5',
        item: 'text-xs',
        container: 'h-4',
        indicator: 'after:size-1',
      },
      md: {
        fieldset: 'gap-y-1',
        legend: 'text-sm',
        base: 'size-4',
        item: 'text-sm',
        container: 'h-5',
        indicator: 'after:size-1.5',
      },
      lg: {
        fieldset: 'gap-y-1',
        legend: 'text-sm',
        base: 'size-4.5',
        item: 'text-sm',
        container: 'h-5',
        indicator: 'after:size-1.5',
      },
      xl: {
        fieldset: 'gap-y-1.5',
        legend: 'text-base',
        base: 'size-5',
        item: 'text-base',
        container: 'h-6',
        indicator: 'after:size-2',
      },
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-75',
        label: 'cursor-not-allowed opacity-75',
      },
    },
    required: {
      true: {
        legend: 'after:(content-["*"] ms-0.5 text-error)',
      },
    },
  },
  compoundVariants: [
    { size: 'xs', variant: ['card', 'table'], class: { item: 'p-2.5' } },
    { size: 'sm', variant: ['card', 'table'], class: { item: 'p-3' } },
    { size: 'md', variant: ['card', 'table'], class: { item: 'p-3.5' } },
    { size: 'lg', variant: ['card', 'table'], class: { item: 'p-4' } },
    { size: 'xl', variant: ['card', 'table'], class: { item: 'p-4.5' } },
    {
      orientation: 'horizontal',
      variant: 'table',
      class: {
        item: 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg',
        fieldset: 'akar:gap-0 space-x-[-1px]',
      },
    },
    {
      orientation: 'vertical',
      variant: 'table',
      class: {
        item: 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',
        fieldset: 'akar:gap-0 space-y-[-1px]',
      },
    },
    ...BRANDS.map((color) => ({
      color,
      variant: 'card',
      class: {
        item: `has-data-[state=checked]:border-${color}`,
      },
    })),
    {
      color: 'neutral',
      variant: 'card',
      class: {
        item: 'has-data-[state=checked]:border-border-inverted',
      },
    },
    ...BRANDS.map((color) => ({
      color,
      variant: 'table',
      class: {
        item: `has-data-[state=checked]:bg-${color}/10 has-data-[state=checked]:border-${color}/50 has-data-[state=checked]:z-1`,
      },
    })),
    {
      color: 'neutral',
      variant: 'table',
      class: {
        item: 'has-data-[state=checked]:bg-background-elevated has-data-[state=checked]:border-border-inverted/50 has-data-[state=checked]:z-1',
      },
    },
    {
      variant: ['card', 'table'],
      disabled: true,
      class: {
        item: 'cursor-not-allowed opacity-75',
      },
    },
  ],
} satisfies PThemeRadioGroup;
