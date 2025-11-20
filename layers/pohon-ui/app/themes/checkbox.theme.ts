// @unocss-include

import type { PThemeCheckbox, PThemeCheckboxGroup } from 'pohon-ui';
import { BRANDS } from './constant';

export const checkboxTheme = {
  slots: {
    root: 'relative flex items-start',
    container: 'flex items-center',
    base: 'rounded-sm ring ring-inset ring-ring-accented overflow-hidden focus-visible:(outline-2 outline-offset-2)',
    indicator: 'flex items-center justify-center size-full color-text-inverted',
    icon: 'shrink-0 size-full',
    wrapper: 'w-full',
    label: 'block font-medium color-text',
    description: 'color-text-muted',
  },
  variants: {
    color: {
      ...Object.fromEntries(BRANDS.map((color) => [
        color,
        {
          base: `focus-visible:outline-${color}`,
          indicator: `bg-${color}`,
        },
      ])),
      neutral: {
        base: 'focus-visible:outline-outline-inverted',
        indicator: 'bg-background-inverted',
      },
    },
    variant: {
      card: {
        root: 'border border-border-muted rounded-lg',
      },
    },
    indicator: {
      start: {
        root: 'flex-row',
        wrapper: 'ms-2',
      },
      end: {
        root: 'flex-row-reverse',
        wrapper: 'me-2',
      },
      hidden: {
        base: 'sr-only',
        wrapper: 'text-center',
      },
    },
    size: {
      xs: {
        base: 'size-3',
        container: 'h-4',
        wrapper: 'text-xs',
      },
      sm: {
        base: 'size-3.5',
        container: 'h-4',
        wrapper: 'text-xs',
      },
      md: {
        base: 'size-4',
        container: 'h-5',
        wrapper: 'text-sm',
      },
      lg: {
        base: 'size-4.5',
        container: 'h-5',
        wrapper: 'text-sm',
      },
      xl: {
        base: 'size-5',
        container: 'h-6',
        wrapper: 'text-base',
      },
    },
    required: {
      true: {
        label: 'after:(content-["*"] ms-0.5 color-error)',
      },
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-75',
        label: 'cursor-not-allowed opacity-75',
        description: 'cursor-not-allowed opacity-75',
      },
    },
  },
  compoundVariants: [
    { size: 'xs', variant: 'card', class: { root: 'p-2.5' } },
    { size: 'sm', variant: 'card', class: { root: 'p-3' } },
    { size: 'md', variant: 'card', class: { root: 'p-3.5' } },
    { size: 'lg', variant: 'card', class: { root: 'p-4' } },
    { size: 'xl', variant: 'card', class: { root: 'p-4.5' } },
    ...BRANDS.map((color) => ({
      color,
      variant: 'card',
      class: {
        root: `has-data-[state=checked]:border-${color}`,
      },
    })),
    {
      color: 'neutral',
      variant: 'card',
      class: {
        root: 'has-data-[state=checked]:border-border-inverted',
      },
    },
    {
      variant: 'card',
      disabled: true,
      class: {
        root: 'cursor-not-allowed opacity-75',
      },
    },
  ],
} satisfies PThemeCheckbox;

export const checkboxGroupTheme = {
  slots: {
    root: 'relative',
    fieldset: 'flex gap-x-2',
    legend: 'mb-1 block font-medium color-text',
  },
  variants: {
    orientation: {
      horizontal: {
        fieldset: 'flex-row',
      },
      vertical: {
        fieldset: 'flex-col',
      },
    },
    variant: {
      table: {
        item: 'border border-border-muted',
      },
    },
    size: {
      xs: {
        fieldset: 'gap-y-0.5',
        legend: 'text-xs',
      },
      sm: {
        fieldset: 'gap-y-0.5',
        legend: 'text-xs',
      },
      md: {
        fieldset: 'gap-y-1',
        legend: 'text-sm',
      },
      lg: {
        fieldset: 'gap-y-1',
        legend: 'text-sm',
      },
      xl: {
        fieldset: 'gap-y-1.5',
        legend: 'text-base',
      },
    },
    required: {
      true: {
        legend: 'after:(content-["*"] ms-0.5 color-error)',
      },
    },
  },
  compoundVariants: [
    { size: 'xs', variant: 'table', class: { item: 'p-2.5' } },
    { size: 'sm', variant: 'table', class: { item: 'p-3' } },
    { size: 'md', variant: 'table', class: { item: 'p-3.5' } },
    { size: 'lg', variant: 'table', class: { item: 'p-4' } },
    { size: 'xl', variant: 'table', class: { item: 'p-4.5' } },
    {
      orientation: 'horizontal',
      variant: 'table',
      class: {
        item: 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg',
        fieldset: 'gap-0 space-x-[-1px]',
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
      variant: 'table',
      // @ts-expect-error this is valid
      disabled: true,
      class: {
        item: 'cursor-not-allowed opacity-75',
      },
    },
  ],
} satisfies PThemeCheckboxGroup;
