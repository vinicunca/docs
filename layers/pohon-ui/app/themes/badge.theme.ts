// @unocss-include

import type { PThemeBadge } from 'pohon-ui';
import { BRANDS } from './constant';
import { fieldGroupVariant } from './field-group.theme';

export const badgeTheme = {
  slots: {
    base: 'font-medium inline-flex items-center',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    trailingIcon: 'shrink-0',
  },
  variants: {
    ...fieldGroupVariant,
    size: {
      xs: {
        base: 'text-[8px]/3 px-1 py-0.5 rounded-sm gap-1',
        leadingIcon: 'size-3',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-3',
      },
      sm: {
        base: 'text-[10px]/3 px-1.5 py-1 rounded-sm gap-1',
        leadingIcon: 'size-3',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-3',
      },
      md: {
        base: 'text-xs px-2 py-1 rounded-md gap-1',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4',
      },
      lg: {
        base: 'text-sm px-2 py-1 rounded-md gap-1.5',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5',
      },
      xl: {
        base: 'text-base px-2.5 py-1 rounded-md gap-1.5',
        leadingIcon: 'size-6',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-6',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: 'solid',
      class: `bg-${color} color-text-inverted`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'outline',
      class: `color-${color} ring ring-inset ring-${color}/50`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'soft',
      class: `bg-${color}/10 color-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'subtle',
      class: `bg-${color}/10 color-${color} ring ring-inset ring-${color}/25`,
    })),
    {
      color: 'neutral',
      variant: 'solid',
      class: 'color-text-inverted bg-background-inverted',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: 'ring ring-inset ring-ring-accented color-text bg-background',
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: 'color-text bg-background-elevated',
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: 'ring ring-inset ring-ring-accented color-text bg-background-elevated',
    },
    {
      size: 'xs',
      square: true,
      class: 'akar:p-0.5',
    },
    {
      size: 'sm',
      square: true,
      class: 'akar:p-1',
    },
    {
      size: 'md',
      square: true,
      class: 'akar:p-1',
    },
    {
      size: 'lg',
      square: true,
      class: 'akar:p-1',
    },
    {
      size: 'xl',
      square: true,
      class: 'akar:p-1',
    },
  ],
} satisfies PThemeBadge;
