// @unocss-include

import type { PThemeButton } from 'pohon-ui';
import { BRANDS } from './constant';
import { fieldGroupVariant } from './field-group.theme';

export const buttonTheme = {
  slots: {
    base: 'font-500 rounded-md inline-flex transition-colors-280 items-center aria-disabled:(opacity-75 cursor-not-allowed) disabled:(opacity-75 cursor-not-allowed)',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    trailingIcon: 'shrink-0',
  },
  variants: {
    ...fieldGroupVariant,
    size: {
      xs: {
        base: 'text-xs px-2 py-1 gap-1',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4',
      },
      sm: {
        base: 'text-xs px-2.5 py-1.5 gap-1.5',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4',
      },
      md: {
        base: 'text-sm px-2.5 py-1.5 gap-1.5',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5',
      },
      lg: {
        base: 'text-sm px-3 py-2 gap-2',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5',
      },
      xl: {
        base: 'text-base px-3 py-2 gap-2',
        leadingIcon: 'size-6',
        leadingAvatarSize: 'xs',
        trailingIcon: 'size-6',
      },
    },
    block: {
      true: {
        base: 'w-full justify-center',
        trailingIcon: 'ms-auto',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: 'solid',
      class: `color-text-inverted shadow-md bg-${color} hover:bg-${color}/75 active:bg-${color}/75 disabled:bg-${color} aria-disabled:bg-${color} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'outline',
      class: `ring ring-inset ring-${color}/50 color-${color} hover:bg-${color}/10 active:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'soft',
      class: `color-${color} bg-${color}/10 hover:bg-${color}/15 active:bg-${color}/15 focus:outline-none focus-visible:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'subtle',
      class: `color-${color} ring ring-inset ring-${color}/25 bg-${color}/10 hover:bg-${color}/15 active:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'ghost',
      class: `color-${color} hover:bg-${color}/10 active:bg-${color}/10 focus:outline-none focus-visible:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'link',
      class: `color-${color} hover:color-${color}/75 active:color-${color}/75 disabled:color-${color} aria-disabled:color-${color} focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`,
    })),
    {
      color: 'neutral',
      variant: 'solid',
      class: 'color-text-inverted bg-background-inverted focus-visible:(outline-2 outline-outline-inverted outline-offset-2) active:bg-background-inverted/90 aria-disabled:bg-background-inverted disabled:bg-background-inverted hover:bg-background-inverted/90',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: 'color-text bg-background ring ring-ring-accented ring-inset focus:outline-none active:bg-background-elevated aria-disabled:bg-background disabled:bg-background hover:bg-background-elevated focus-visible:(ring-2 ring-ring-inverted)',
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: 'color-text bg-background-elevated focus:(outline-none) active:bg-background-accented/75 aria-disabled:bg-background-elevated disabled:bg-background-elevated focus-visible:bg-background-accented/75 hover:bg-background-accented/75',
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: 'color-text bg-background-elevated ring ring-ring-accented ring-inset focus:(outline-none) active:bg-background-accented/75 aria-disabled:bg-background-elevated disabled:bg-background-elevated hover:bg-background-accented/75 focus-visible:ring-2 focus-visible:ring-ring-inverted',
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class: 'color-text focus:(outline-none) active:bg-background-elevated focus-visible:bg-background-elevated hover:bg-background-elevated hover:aria-disabled:bg-transparent hover:disabled:bg-transparent dark:hover:aria-disabled:bg-transparent dark:hover:disabled:bg-transparent',
    },
    {
      color: 'neutral',
      variant: 'link',
      class: 'color-text-muted active:color-text aria-disabled:color-text-muted disabled:color-text-muted hover:color-text focus:(outline-none) focus-visible:ring-2 focus-visible:ring-ring-inverted focus-visible:ring-inset',
    },
    {
      size: 'xs',
      square: true,
      class: 'akar:p-1',
    },
    {
      size: 'sm',
      square: true,
      class: 'akar:p-1.5',
    },
    {
      size: 'md',
      square: true,
      class: 'akar:p-1.5',
    },
    {
      size: 'lg',
      square: true,
      class: 'akar:p-2',
    },
    {
      size: 'xl',
      square: true,
      class: 'akar:p-2',
    },
    {
      loading: true,
      leading: true,
      class: {
        leadingIcon: 'animate-spin',
      },
    },
    {
      loading: true,
      leading: false,
      trailing: true,
      class: {
        trailingIcon: 'animate-spin',
      },
    },
  ],
} satisfies PThemeButton;
