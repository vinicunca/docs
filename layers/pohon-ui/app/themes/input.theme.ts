// @unocss-include

import type { PThemeInput } from 'pohon-ui';

import { BRANDS } from './constant';
import { fieldGroupVariantWithRoot } from './field-group.theme';

export const inputTheme = {
  slots: {
    root: 'relative inline-flex items-center',
    base: 'w-full rounded-md border-0 appearance-none placeholder:color-text-dimmed focus:outline-none disabled:(cursor-not-allowed opacity-75) transition-colors-280',
    leading: 'absolute inset-y-0 start-0 flex items-center',
    leadingIcon: 'shrink-0 color-text-dimmed',
    leadingAvatar: 'shrink-0',
    trailing: 'absolute inset-y-0 end-0 flex items-center',
    trailingIcon: 'shrink-0 color-text-dimmed',
  },
  variants: {
    ...fieldGroupVariantWithRoot,
    size: {
      xs: {
        base: 'px-2 py-1 text-xs gap-1',
        leading: 'ps-2',
        trailing: 'pe-2',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4',
      },
      sm: {
        base: 'px-2.5 py-1.5 text-xs gap-1.5',
        leading: 'ps-2.5',
        trailing: 'pe-2.5',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4',
      },
      md: {
        base: 'px-2.5 py-1.5 text-sm gap-1.5',
        leading: 'ps-2.5',
        trailing: 'pe-2.5',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5',
      },
      lg: {
        base: 'px-3 py-2 text-sm gap-2',
        leading: 'ps-3',
        trailing: 'pe-3',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5',
      },
      xl: {
        base: 'px-3 py-2 text-base gap-2',
        leading: 'ps-3',
        trailing: 'pe-3',
        leadingIcon: 'size-6',
        leadingAvatarSize: 'xs',
        trailingIcon: 'size-6',
      },
    },
    variant: {
      outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented',
      soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated focus:bg-background-elevated disabled:bg-background-elevated/50',
      subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented',
      ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
      none: 'color-text-highlighted bg-transparent',
    },
    type: {
      file: 'file:me-1.5 file:font-medium file:color-text-muted file:outline-none',
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: ['outline', 'subtle'],
      class: `focus-visible:(ring-2 ring-inset) focus-visible:ring-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      highlight: true,
      class: `ring ring-inset akar:ring-${color}`,
    })),
    {
      color: 'neutral',
      variant: ['outline', 'subtle'],
      class: 'focus-visible:(ring-2 ring-inset akar:ring-ring-inverted)',
    },
    {
      color: 'neutral',
      highlight: true,
      class: 'ring ring-inset akar:ring-ring-inverted',
    },
    {
      leading: true,
      size: 'xs',
      class: 'ps-7',
    },
    {
      leading: true,
      size: 'sm',
      class: 'ps-8',
    },
    {
      leading: true,
      size: 'md',
      class: 'ps-9',
    },
    {
      leading: true,
      size: 'lg',
      class: 'ps-10',
    },
    {
      leading: true,
      size: 'xl',
      class: 'ps-11',
    },
    {
      trailing: true,
      size: 'xs',
      class: 'pe-7',
    },
    {
      trailing: true,
      size: 'sm',
      class: 'pe-8',
    },
    {
      trailing: true,
      size: 'md',
      class: 'pe-9',
    },
    {
      trailing: true,
      size: 'lg',
      class: 'pe-10',
    },
    {
      trailing: true,
      size: 'xl',
      class: 'pe-11',
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
} satisfies NonNullable<PThemeInput>;
