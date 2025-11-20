// @unocss-include

import type { PThemeCommandPalette } from 'pohon-ui';

export const commandPaletteTheme = {
  slots: {
    root: 'flex flex-col min-h-0 min-w-0 divide-y divide-divide',
    input: '[&>input]:h-12',
    back: 'p-0',
    content: 'relative overflow-hidden flex flex-col',
    footer: 'p-1',
    viewport: 'relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none',
    group: 'p-1 isolate',
    empty: 'py-6 text-center text-sm color-text-muted',
    label: 'p-1.5 text-xs font-semibold color-text-highlighted',
    item: 'group text-sm p-1.5 outline-none flex gap-1.5 w-full select-none items-start relative before:(content-empty rounded-md inset-px absolute -z-1) data-[disabled]:(opacity-75 cursor-not-allowed)',
    itemLeadingIcon: 'shrink-0 size-5',
    itemLeadingAvatar: 'shrink-0',
    itemLeadingAvatarSize: '2xs',
    itemLeadingChip: 'shrink-0 size-5',
    itemLeadingChipSize: 'md',
    itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
    itemTrailingIcon: 'shrink-0 size-5',
    itemTrailingHighlightedIcon: 'shrink-0 size-5 color-text-dimmed hidden group-data-[highlighted]:inline-flex',
    itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0 gap-0.5',
    itemTrailingKbdsSize: 'md',
    itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
    itemLabel: 'truncate space-x-1 color-text-dimmed',
    itemDescription: 'truncate color-text-muted',
    itemLabelBase: 'color-text-highlighted [&>mark]:color-text-inverted [&>mark]:bg-primary',
    itemLabelPrefix: 'color-text',
    itemLabelSuffix: 'color-text-dimmed [&>mark]:color-text-inverted [&>mark]:bg-primary',
  },
  variants: {
    virtualize: {
      true: {
        viewport: 'p-1 isolate',
      },
      false: {
        viewport: 'divide-y divide-divide',
      },
    },
    active: {
      true: {
        item: 'color-text-highlighted before:bg-background-elevated',
        itemLeadingIcon: 'color-text',
      },
      false: {
        item: 'color-text data-[highlighted]:not-[[data-disabled]]:color-text-highlighted data-[highlighted]:not-[[data-disabled]]:before:bg-background-elevated/50 transition-colors-280 before:transition-colors-280',
        itemLeadingIcon: 'color-text-dimmed group-data-[highlighted]:group-not-[[data-disabled]]:color-text transition-colors-280',
      },
    },
    loading: {
      true: {
        itemLeadingIcon: 'animate-spin',
      },
    },
  },
} satisfies PThemeCommandPalette;
