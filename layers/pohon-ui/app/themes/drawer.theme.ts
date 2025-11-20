// @unocss-include

import type { PThemeDrawer } from 'pohon-ui';

export const drawerTheme = {
  slots: {
    overlay: 'fixed inset-0 bg-background-elevated/75',
    content: 'fixed bg-background ring ring-ring flex focus:outline-none',
    handle: 'shrink-0 akar:bg-background-accented transition-opacity',
    container: 'w-full flex flex-col gap-4 p-4 overflow-y-auto',
    title: 'color-text-highlighted font-semibold',
    description: 'mt-1 color-text-muted text-sm',
    body: 'flex-1',
    footer: 'flex flex-col gap-1.5',
  },
  variants: {
    direction: {
      top: {
        content: 'mb-24 flex-col-reverse',
        handle: 'mb-4',
      },
      right: {
        content: 'flex-row',
        handle: 'akar:ml-4',
      },
      bottom: {
        content: 'mt-24 flex-col',
        handle: 'mt-4',
      },
      left: {
        content: 'flex-row-reverse',
        handle: 'akar:mr-4',
      },
    },
    inset: {
      true: {
        content: 'rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]',
      },
    },
  },
  compoundVariants: [
    {
      direction: ['top', 'bottom'],
      class: {
        content: 'h-auto max-h-[96%]',
        handle: 'akar:w-12 akar:h-1.5 mx-auto',
      },
    },
    {
      direction: ['top', 'bottom'],
      snapPoints: true,
      class: {
        content: 'h-full',
      },
    },
    {
      direction: ['right', 'left'],
      class: {
        content: 'w-auto max-w-[calc(100%-2rem)]',
        handle: 'akar:!h-12 akar:!w-1.5 mt-auto mb-auto',
      },
    },
    {
      direction: ['right', 'left'],
      snapPoints: true,
      class: {
        content: 'w-full',
      },
    },
    {
      direction: 'top',
      inset: true,
      class: {
        content: 'inset-x-4 top-4',
      },
    },
    {
      direction: 'top',
      inset: false,
      class: {
        content: 'inset-x-0 top-0 rounded-b-lg',
      },
    },
    {
      direction: 'bottom',
      inset: true,
      class: {
        content: 'inset-x-4 bottom-4',
      },
    },
    {
      direction: 'bottom',
      inset: false,
      class: {
        content: 'inset-x-0 bottom-0 rounded-t-lg',
      },
    },
    {
      direction: 'left',
      inset: true,
      class: {
        content: 'inset-y-4 left-4',
      },
    },
    {
      direction: 'left',
      inset: false,
      class: {
        content: 'inset-y-0 left-0 rounded-r-lg',
      },
    },
    {
      direction: 'right',
      inset: true,
      class: {
        content: 'inset-y-4 right-4',
      },
    },
    {
      direction: 'right',
      inset: false,
      class: {
        content: 'inset-y-0 right-0 rounded-l-lg',
      },
    },
  ],
} satisfies PThemeDrawer;
