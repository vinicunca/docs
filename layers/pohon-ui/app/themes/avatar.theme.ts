// @unocss-include

import type { PThemeAvatar, PThemeAvatarGroup } from 'pohon-ui';

export const avatarTheme = {
  slots: {
    root: 'align-middle rounded-full bg-background-elevated inline-flex shrink-0 select-none items-center justify-center',
    image: 'rounded-inherit size-full object-cover',
    fallback: 'color-text-muted leading-none font-medium truncate',
    icon: 'color-text-muted shrink-0',
  },
  variants: {
    size: {
      '3xs': {
        root: 'text-[8px] size-4',
      },
      '2xs': {
        root: 'text-[10px] size-5',
      },
      'xs': {
        root: 'text-xs size-6',
      },
      'sm': {
        root: 'text-sm size-7',
      },
      'md': {
        root: 'text-base size-8',
      },
      'lg': {
        root: 'text-lg size-9',
      },
      'xl': {
        root: 'text-xl size-10',
      },
      '2xl': {
        root: 'text-[22px] size-11',
      },
      '3xl': {
        root: 'text-2xl size-12',
      },
    },
  },
} satisfies PThemeAvatar;

export const avatarGroupTheme = {
  slots: {
    root: 'inline-flex flex-row-reverse justify-end',
    base: 'rounded-full ring-ring-bg relative first:me-0',
  },
  variants: {
    size: {
      '3xs': {
        base: 'ring -me-0.5',
      },
      '2xs': {
        base: 'ring -me-0.5',
      },
      'xs': {
        base: 'ring -me-0.5',
      },
      'sm': {
        base: 'ring-2 -me-1.5',
      },
      'md': {
        base: 'ring-2 -me-1.5',
      },
      'lg': {
        base: 'ring-2 -me-1.5',
      },
      'xl': {
        base: 'ring-3 -me-2',
      },
      '2xl': {
        base: 'ring-3 -me-2',
      },
      '3xl': {
        base: 'ring-3 -me-2',
      },
    },
  },
} satisfies PThemeAvatarGroup;
