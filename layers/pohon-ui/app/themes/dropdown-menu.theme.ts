// @unocss-include

import type { PThemeDropdownMenu } from 'pohon-ui';
import { BRANDS } from './constant';

export const dropdownMenuTheme = {
  slots: {
    content: 'min-w-32 bg-background shadow-lg rounded-md ring ring-ring overflow-hidden data-[state=closed]:(animate-out fade-out-0 zoom-out-95) data-[state=open]:(animate-in fade-in-0 zoom-in-95) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-$akar-dropdown-menu-content-transform-origin flex flex-col',
    viewport: 'relative divide-y divide-divide scroll-py-1 overflow-y-auto flex-1',
    arrow: 'fill-fill',
    group: 'p-1 isolate',
    label: 'w-full flex items-center font-semibold color-text-highlighted',
    separator: '-mx-1 my-1 h-px bg-border',
    item: 'group relative w-full flex items-start select-none outline-none before:(content-empty absolute -z-1 inset-px rounded-md) data-[disabled]:(cursor-not-allowed opacity-75) cursor-pointer',
    itemLeadingIcon: 'shrink-0',
    itemLeadingAvatar: 'shrink-0',
    itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
    itemTrailingIcon: 'shrink-0',
    itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0',
    itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
    itemLabel: 'truncate',
    itemDescription: 'truncate color-text-muted',
    itemLabelExternalIcon: 'inline-block size-3 align-top color-text-dimmed',
  },
  variants: {
    active: {
      true: {
        item: 'color-text-highlighted before:bg-background-elevated',
        itemLeadingIcon: 'color-text',
      },
      false: {
        item: 'color-text data-[highlighted]:color-text-highlighted data-[state=open]:color-text-highlighted data-[highlighted]:before:bg-background-elevated/50 data-[state=open]:before:bg-background-elevated/50 transition-colors-280 before:transition-colors-280',
        itemLeadingIcon: 'color-text-dimmed group-data-[highlighted]:color-text group-data-[state=open]:color-text transition-colors-280',
      },
    },
    loading: {
      true: {
        itemLeadingIcon: 'animate-spin',
      },
    },
    size: {
      xs: {
        label: 'p-1 text-xs gap-1',
        item: 'p-1 text-xs gap-1',
        itemLeadingIcon: 'size-4',
        itemLeadingAvatarSize: '3xs',
        itemTrailingIcon: 'size-4',
        itemTrailingKbds: 'gap-0.5',
        itemTrailingKbdsSize: 'sm',
      },
      sm: {
        label: 'p-1.5 text-xs gap-1.5',
        item: 'p-1.5 text-xs gap-1.5',
        itemLeadingIcon: 'size-4',
        itemLeadingAvatarSize: '3xs',
        itemTrailingIcon: 'size-4',
        itemTrailingKbds: 'gap-0.5',
        itemTrailingKbdsSize: 'sm',
      },
      md: {
        label: 'p-1.5 text-sm gap-1.5',
        item: 'p-1.5 text-sm gap-1.5',
        itemLeadingIcon: 'size-5',
        itemLeadingAvatarSize: '2xs',
        itemTrailingIcon: 'size-5',
        itemTrailingKbds: 'gap-0.5',
        itemTrailingKbdsSize: 'md',
      },
      lg: {
        label: 'p-2 text-sm gap-2',
        item: 'p-2 text-sm gap-2',
        itemLeadingIcon: 'size-5',
        itemLeadingAvatarSize: '2xs',
        itemTrailingIcon: 'size-5',
        itemTrailingKbds: 'gap-1',
        itemTrailingKbdsSize: 'md',
      },
      xl: {
        label: 'p-2 text-base gap-2',
        item: 'p-2 text-base gap-2',
        itemLeadingIcon: 'size-6',
        itemLeadingAvatarSize: 'xs',
        itemTrailingIcon: 'size-6',
        itemTrailingKbds: 'gap-1',
        itemTrailingKbdsSize: 'lg',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      active: false,
      class: {
        item: `akar:color-${color} data-[highlighted]:color-${color} data-[highlighted]:before:bg-${color}/10 data-[state=open]:before:bg-${color}/10`,
        itemLeadingIcon: `akar:color-${color}/75 group-data-[highlighted]:color-${color} group-data-[state=open]:color-${color}`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      active: true,
      class: {
        item: `akar:color-${color} before:bg-${color}/10`,
        itemLeadingIcon: `akar:color-${color}`,
      },
    })),
  ],
} satisfies PThemeDropdownMenu;
