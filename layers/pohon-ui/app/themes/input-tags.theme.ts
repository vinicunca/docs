// @unocss-include

import type { PThemeInputTags } from 'pohon-ui';
import { isString, omit } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { inputTheme } from './input.theme';

const inputSlots = omit(inputTheme.slots, ['root', 'base']);

export const inputTagsTheme = {
  slots: {
    ...inputSlots,
    root: [inputTheme.slots.root, 'flex-wrap'],
    base: 'rounded-md transition-colors-280',
    item: 'color-text font-medium px-1.5 py-0.5 rounded-sm bg-background-elevated inline-flex gap-0.5 wrap-anywhere ring ring-ring-accented ring-inset items-center data-[state="active"]:bg-background-accented data-[disabled]:(opacity-75 cursor-not-allowed)',
    itemDelete: 'color-text-dimmed rounded-xs inline-flex transition-colors-280 items-center hover:color-text hover:bg-background-accented/75 disabled:pointer-events-none',
    itemDeleteIcon: 'shrink-0',
    input: 'border-0 bg-transparent flex-1 placeholder:color-text-dimmed focus:outline-none disabled:(opacity-75 cursor-not-allowed)',
  },
  variants: defu(
    {
      size: {
        xs: {
          item: 'text-[10px]/3',
          itemDeleteIcon: 'size-3',
        },
        sm: {
          item: 'text-[10px]/3',
          itemDeleteIcon: 'size-3',
        },
        md: {
          item: 'text-xs',
          itemDeleteIcon: 'size-3.5',
        },
        lg: {
          item: 'text-xs',
          itemDeleteIcon: 'size-3.5',
        },
        xl: {
          item: 'text-sm',
          itemDeleteIcon: 'size-4',
        },
      },
      variant: Object.fromEntries(
        Object.entries(inputTheme.variants.variant).map(([key, value]) => [key, replaceFocus(value)]),
      ),
    },
    inputTheme.variants,
  ),
  compoundVariants: [
    ...inputTheme.compoundVariants.map((item) => ({
      ...item,
      class: isString(item.class) ? replaceFocus(item.class) : item.class,
    })),
  ],
} satisfies PThemeInputTags;

function replaceFocus(str: string): string {
  return str
    .replace(/focus:/g, 'has-focus:')
    .replace(/focus-visible:/g, 'has-focus-visible:');
}
