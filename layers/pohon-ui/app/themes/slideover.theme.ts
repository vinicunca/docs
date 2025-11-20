// @unocss-include

import type { PThemeSlideover } from 'pohon-ui';

export const slideoverTheme = {
  slots: {
    overlay: 'bg-background-elevated/75 inset-0 fixed',
    content: 'bg-background flex flex-col ring-ring fixed divide-divide divide-y focus:outline-none sm:ring sm:shadow-lg',
    header: 'p-4 flex gap-1.5 min-h-16 items-center sm:px-6',
    body: 'p-4 flex-1 overflow-y-auto sm:p-6',
    footer: 'p-4 flex gap-1.5 items-center sm:px-6',
    title: 'color-text-highlighted font-semibold',
    description: 'text-sm color-text-muted mt-1',
    close: 'end-4 top-4 absolute',
  },
  variants: {
    side: {
      top: {
        content: 'max-h-full inset-x-0 top-0',
      },
      right: {
        content: 'max-w-md w-full inset-y-0 right-0',
      },
      bottom: {
        content: 'max-h-full inset-x-0 bottom-0',
      },
      left: {
        content: 'max-w-md w-full inset-y-0 left-0',
      },
    },
    transition: {
      true: {
        overlay: 'data-[state=closed]:(animate-out fade-out-0) data-[state=open]:(animate-in fade-in-0)',
      },
    },
  },
  compoundVariants: [
    {
      transition: true,
      side: 'top',
      class: {
        content: 'data-[state=open]:(animate-in slide-in-from-top) data-[state=closed]:(animate-out slide-out-to-top)',
      },
    },
    {
      transition: true,
      side: 'right',
      class: {
        content: 'data-[state=open]:(animate-in slide-in-from-right) data-[state=closed]:(animate-out slide-out-to-right)',
      },
    },
    {
      transition: true,
      side: 'bottom',
      class: {
        content: 'data-[state=open]:(animate-in slide-in-from-bottom) data-[state=closed]:(animate-out slide-out-to-bottom)',
      },
    },
    {
      transition: true,
      side: 'left',
      class: {
        content: 'data-[state=open]:(animate-in slide-in-left) data-[state=closed]:(animate-out slide-out-left)',
      },
    },
  ],
} satisfies PThemeSlideover;
