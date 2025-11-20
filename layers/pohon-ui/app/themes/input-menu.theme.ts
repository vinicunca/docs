// @unocss-include

import type { PThemeInputMenu } from 'pohon-ui';
import { omit } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { BRANDS } from './constant';
import { inputTheme } from './input.theme';

const inputSlots = omit(inputTheme.slots, ['base']);

export const inputMenuTheme = {
  slots: defu(
    {
      base: 'rounded-md transition-colors-280',
      trailing: 'group flex items-center end-0 inset-y-0 absolute disabled:(opacity-75 cursor-not-allowed)',
      arrow: 'fill-fill',
      content: 'rounded-md bg-background flex flex-col max-h-60 w-$akar-combobox-trigger-width pointer-events-auto ring ring-ring shadow-lg origin-$akar-combobox-content-transform-origin overflow-hidden data-[state=closed]:(animate-out fade-out-0 zoom-out-95) data-[state=open]:(animate-in fade-in-0 zoom-in-95)',
      viewport: 'flex-1 relative overflow-y-auto scroll-py-1',
      group: 'p-1 isolate',
      empty: 'color-text-muted text-center',
      label: 'color-text-highlighted font-semibold',
      separator: 'my-1 bg-border h-px -mx-1',
      item: 'group text-sm color-text p-1.5 outline-none flex gap-1.5 w-full select-none transition-colors-280 items-start relative before:(rounded-md content-empty transition-colors-280 inset-px absolute -z-1) data-[disabled]:(opacity-75 cursor-not-allowed) data-[highlighted]:not-[[data-disabled]]:color-text-highlighted data-[highlighted]:not-[[data-disabled]]:before:bg-background-elevated/50 not-[[data-disabled]]:cursor-pointer',
      itemLeadingIcon: 'color-text-dimmed shrink-0 transition-colors-280 group-data-[highlighted]:group-not-[[data-disabled]]:color-text',
      itemLeadingAvatar: 'shrink-0',
      itemLeadingChip: 'shrink-0',
      itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
      itemTrailingIcon: 'shrink-0',
      itemWrapper: 'flex flex-1 flex-col min-w-0',
      itemLabel: 'truncate',
      itemDescription: 'color-text-muted truncate',
      tagsItem: 'color-text font-medium px-1.5 py-0.5 rounded-sm bg-background-elevated inline-flex gap-0.5 ring ring-ring-accented ring-inset items-center data-[disabled]:(opacity-75 cursor-not-allowed)',
      tagsItemText: 'truncate',
      tagsItemDelete: 'color-text-dimmed rounded-xs inline-flex transition-colors-280 items-center hover:(color-text bg-background-accented/75) disabled:pointer-events-none',
      tagsItemDeleteIcon: 'shrink-0',
      tagsInput: 'border-0 bg-transparent flex-1 placeholder:color-text-dimmed focus:outline-none disabled:(opacity-75 cursor-not-allowed)',
    },
    inputSlots,
  ),
  variants: defu(
    {
      virtualize: {
        true: {
          viewport: 'p-1 isolate',
        },
        false: {
          viewport: 'divide-y divide-divide',
        },
      },
      multiple: {
        true: {
          root: 'flex-wrap',
        },
        false: {
          base: 'w-full border-0 placeholder:color-text-dimmed focus:outline-none disabled:(cursor-not-allowed opacity-75)',
        },
      },
      size: {
        xs: {
          label: 'p-1 text-[10px]/3 gap-1',
          item: 'p-1 text-xs gap-1',
          itemLeadingIcon: 'size-4',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemTrailingIcon: 'size-4',
          tagsItem: 'text-[10px]/3',
          tagsItemDeleteIcon: 'size-3',
          empty: 'p-1 text-xs',
        },
        sm: {
          label: 'p-1.5 text-[10px]/3 gap-1.5',
          item: 'p-1.5 text-xs gap-1.5',
          itemLeadingIcon: 'size-4',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemTrailingIcon: 'size-4',
          tagsItem: 'text-[10px]/3',
          tagsItemDeleteIcon: 'size-3',
          empty: 'p-1.5 text-xs',
        },
        md: {
          label: 'p-1.5 text-xs gap-1.5',
          item: 'p-1.5 text-sm gap-1.5',
          itemLeadingIcon: 'size-5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemTrailingIcon: 'size-5',
          tagsItem: 'text-xs',
          tagsItemDeleteIcon: 'size-3.5',
          empty: 'p-1.5 text-sm',
        },
        lg: {
          label: 'p-2 text-xs gap-2',
          item: 'p-2 text-sm gap-2',
          itemLeadingIcon: 'size-5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemTrailingIcon: 'size-5',
          tagsItem: 'text-xs',
          tagsItemDeleteIcon: 'size-3.5',
          empty: 'p-2 text-sm',
        },
        xl: {
          label: 'p-2 text-sm gap-2',
          item: 'p-2 text-base gap-2',
          itemLeadingIcon: 'size-6',
          itemLeadingAvatarSize: 'xs',
          itemLeadingChip: 'size-6',
          itemLeadingChipSize: 'lg',
          itemTrailingIcon: 'size-6',
          tagsItem: 'text-sm',
          tagsItemDeleteIcon: 'size-4',
          empty: 'p-2 text-base',
        },
      },
    },
    inputTheme.variants,
  ),
  compoundVariants: [
    {
      variant: 'soft',
      multiple: true,
      class: 'has-focus:bg-background-elevated',
    },
    {
      variant: 'ghost',
      multiple: true,
      class: 'has-focus:bg-background-elevated',
    },
    ...BRANDS.map((color) => ({
      color,
      multiple: true,
      variant: ['outline', 'subtle'],
      class: `has-focus-visible:ring-2 has-focus-visible:ring-${color}`,
    })),
    {
      color: 'neutral',
      multiple: true,
      variant: ['outline', 'subtle'],
      class: 'has-focus-visible:(ring-2 ring-ring-inverted)',
    },
    ...inputTheme.compoundVariants,
  ],
} satisfies PThemeInputMenu;
