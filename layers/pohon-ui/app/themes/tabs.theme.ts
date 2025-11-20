// @unocss-include

import type { PThemeTabs } from 'pohon-ui';
import { BRANDS } from './constant';

export const tabsTheme = {
  slots: {
    root: 'flex gap-2 items-center',
    list: 'group p-1 flex relative',
    indicator: 'transition-[transform,width]-200 absolute',
    trigger: 'group font-medium rounded-md inline-flex min-w-0 transition-colors-280 items-center relative data-[state=inactive]:color-text-muted disabled:(opacity-75 cursor-not-allowed) hover:data-[state=inactive]:not-disabled:color-text',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    label: 'truncate',
    trailingBadge: 'shrink-0',
    trailingBadgeSize: 'sm',
    content: 'w-full focus:outline-none',
  },
  variants: {
    variant: {
      pill: {
        list: 'rounded-lg bg-background-elevated',
        trigger: 'grow',
        indicator: 'rounded-md shadow-xs',
      },
      link: {
        list: 'border-border',
        indicator: 'rounded-full',
        trigger: 'focus:outline-none',
      },
    },
    orientation: {
      horizontal: {
        root: 'flex-col',
        list: 'w-full',
        indicator: 'w-$akar-tabs-indicator-size translate-x-$akar-tabs-indicator-position left-0',
        trigger: 'justify-center',
      },
      vertical: {
        list: 'flex-col',
        indicator: 'h-$akar-tabs-indicator-size translate-y-$akar-tabs-indicator-position top-0',
      },
    },
    size: {
      xs: {
        trigger: 'text-xs px-2 py-1 gap-1',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
      },
      sm: {
        trigger: 'text-xs px-2.5 py-1.5 gap-1.5',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
      },
      md: {
        trigger: 'text-sm px-3 py-1.5 gap-1.5',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
      },
      lg: {
        trigger: 'text-sm px-3 py-2 gap-2',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
      },
      xl: {
        trigger: 'text-base px-3 py-2 gap-2',
        leadingIcon: 'size-6',
        leadingAvatarSize: 'xs',
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'pill',
      class: {
        indicator: 'inset-y-1',
      },
    },
    {
      orientation: 'horizontal',
      variant: 'link',
      class: {
        list: 'border-b -mb-px',
        indicator: '-bottom-px h-px',
      },
    },
    {
      orientation: 'vertical',
      variant: 'pill',
      class: {
        indicator: 'inset-x-1',
        list: 'items-center',
      },
    },
    {
      orientation: 'vertical',
      variant: 'link',
      class: {
        list: 'border-s -ms-px',
        indicator: '-start-px w-px',
      },
    },
    ...BRANDS.map((color) => ({
      color,
      variant: 'pill',
      class: {
        indicator: `bg-${color}`,
        trigger: `data-[state=active]:color-text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`,
      },
    })),
    {
      color: 'neutral',
      variant: 'pill',
      class: {
        indicator: 'bg-background-inverted',
        trigger: 'data-[state=active]:color-text-inverted focus-visible:(outline-2 outline-offset-2 outline-outline-inverted)',
      },
    },
    ...BRANDS.map((color) => ({
      color,
      variant: 'link',
      class: {
        indicator: `bg-${color}`,
        trigger: `data-[state=active]:color-${color} focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`,
      },
    })),
    {
      color: 'neutral',
      variant: 'link',
      class: {
        indicator: 'bg-background-inverted',
        trigger: 'data-[state=active]:color-text-highlighted focus-visible:(ring-2 ring-inset ring-ring-inverted)',
      },
    },
  ],
} satisfies PThemeTabs;
