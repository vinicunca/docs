// @unocss-include

import type { PThemeSelect } from 'pohon-ui';
import { isString, omit } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { inputTheme } from './input.theme';

const inputSlots = omit(inputTheme.slots, ['root', 'base']);

export const selectTheme = {
  slots: defu(
    {
      base: 'group rounded-md inline-flex transition-colors-280 items-center relative focus:outline-none disabled:(opacity-75 cursor-not-allowed)',
      value: 'pointer-events-none truncate',
      placeholder: 'color-text-dimmed truncate',
      arrow: 'fill-fill',
      content: 'flex flex-col rounded-md bg-background max-h-60 w-$akar-select-trigger-width pointer-events-auto ring ring-ring shadow-lg origin-$akar-select-content-transform-origin overflow-hidden data-[state=closed]:(animate-out animate-duration-280 fade-out-0 data-[side=bottom]:slide-out-top-5%) data-[state=open]:(animate-in animate-duration-280 fade-in-0 data-[side=bottom]:slide-in-top-5%)',
      viewport: 'flex-1 relative overflow-y-auto scroll-py-1 divide-divide divide-y',
      group: 'p-1 isolate',
      empty: 'color-text-muted text-center',
      label: 'color-text-highlighted font-semibold',
      separator: 'my-1 bg-border h-px -mx-1',
      item: 'group outline-none flex w-full cursor-pointer select-none transition-colors-280 items-center relative data-[state=checked]:(color-primary before:bg-background-elevated) before:(rounded-md content-empty transition-colors-280 inset-px absolute -z-1) data-[disabled]:(opacity-75 cursor-not-allowed) data-[highlighted]:not-[[data-state=checked]]:(color-black before:bg-primary/30)',
      itemLeadingIcon: 'color-text-dimmed shrink-0 transition-colors-280 group-data-[highlighted]:group-not-[[data-disabled]]:color-text',
      itemLeadingAvatar: 'shrink-0',
      itemLeadingChip: 'shrink-0',
      itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
      itemTrailingIcon: 'shrink-0',
      itemLabel: 'truncate',
      itemWrapper: 'flex flex-1 flex-col min-w-0',
      itemDescription: 'color-text-muted truncate',
    },
    inputSlots,
  ),
  variants: defu(
    {
      size: {
        xs: {
          label: 'text-[10px]/3 p-1 gap-1',
          item: 'text-xs p-1 gap-1',
          itemLeadingIcon: 'size-4',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemTrailingIcon: 'size-4',
          empty: 'text-xs p-1',
        },
        sm: {
          label: 'text-[10px]/3 p-1.5 gap-1.5',
          item: 'text-xs p-1.5 gap-1.5',
          itemLeadingIcon: 'size-4',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemTrailingIcon: 'size-4',
          empty: 'text-xs p-1.5',
        },
        md: {
          label: 'text-xs p-1.5 gap-1.5',
          item: 'text-sm p-1.5 gap-1.5',
          itemLeadingIcon: 'size-5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemTrailingIcon: 'size-5',
          empty: 'text-sm p-1.5',
        },
        lg: {
          label: 'text-xs p-2 gap-2',
          item: 'text-sm p-2 gap-2',
          itemLeadingIcon: 'size-5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemTrailingIcon: 'size-5',
          empty: 'text-sm p-2',
        },
        xl: {
          label: 'text-sm p-2 gap-2',
          item: 'text-base p-2 gap-2',
          itemLeadingIcon: 'size-6',
          itemLeadingAvatarSize: 'xs',
          itemLeadingChip: 'size-6',
          itemLeadingChipSize: 'lg',
          itemTrailingIcon: 'size-6',
          empty: 'text-base p-2',
        },
      },
    },
    inputTheme.variants,
  ),
  compoundVariants: [
    ...inputTheme.compoundVariants.map((item) => ({
      ...item,
      class: isString(item.class) ? replaceFocus(item.class) : item.class,
    })),
  ],
} satisfies PThemeSelect;

function replaceFocus(str: string): string {
  return str
    .replace(/focus-visible:/g, 'focus:');
}
