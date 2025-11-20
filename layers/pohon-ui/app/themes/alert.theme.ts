// @unocss-include

import type { PThemeAlert } from 'pohon-ui';
import { BRANDS } from './constant';

export const alertTheme = {
  slots: {
    root: 'p-4 rounded-lg flex gap-2.5 w-full relative overflow-hidden',
    wrapper: 'flex flex-1 flex-col min-w-0',
    title: 'text-sm font-medium',
    description: 'text-sm opacity-90',
    icon: 'shrink-0 size-5',
    avatar: 'shrink-0',
    avatarSize: '2xl',
    actions: 'flex shrink-0 flex-wrap gap-1.5',
    close: 'p-0',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'items-center',
        actions: 'items-center',
      },
      vertical: {
        root: 'items-start',
        actions: 'mt-2.5 items-start',
      },
    },
    title: {
      true: {
        description: 'mt-1',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: 'solid',
      class: {
        root: `bg-${color} color-text-inverted`,
        close: 'akar:color-text-inverted',
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'outline',
      class: {
        root: `color-${color} ring ring-inset ring-${color}/25`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'soft',
      class: {
        root: `bg-${color}/10 color-${color}`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'subtle',
      class: {
        root: `bg-${color}/10 color-${color} ring ring-inset ring-${color}/25`,
      },
    })),
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        root: 'color-text-inverted bg-background-inverted',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: {
        root: 'color-text-highlighted bg-background ring ring-inset ring-ring',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        root: 'color-text-highlighted bg-background-elevated/50',
      },
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: {
        root: 'color-text-highlighted bg-background-elevated/50 ring ring-inset ring-ring-accented',
      },
    },
  ],
} satisfies PThemeAlert;
