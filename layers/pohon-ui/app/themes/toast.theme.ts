// @unocss-include

import type { PThemeToast, PThemeToaster } from 'pohon-ui';
import { BRANDS } from './constant';

export const toastTheme = {
  slots: {
    root: 'group p-4 rounded-lg bg-background flex gap-2.5 ring ring-ring shadow-lg relative overflow-hidden focus:outline-none',
    wrapper: 'flex flex-1 flex-col w-0',
    title: 'text-sm color-text-highlighted font-medium',
    description: 'text-sm color-text-muted',
    icon: 'shrink-0 size-5',
    avatar: 'shrink-0',
    avatarSize: '2xl',
    actions: 'flex shrink-0 gap-1.5',
    progress: 'inset-x-0 bottom-0 absolute',
    close: 'uno-layer-pohon:p-0',
  },
  variants: {
    color: {
      ...Object.fromEntries(BRANDS.map((color) => [
        color,
        {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`,
          icon: `color-${color}`,
        },
      ])),
      neutral: {
        root: 'focus-visible:(ring-2 ring-ring-inverted ring-inset)',
        icon: 'color-text-highlighted',
      },
    },
    orientation: {
      horizontal: {
        root: 'items-center',
        actions: 'items-center',
      },
      vertical: {
        root: 'items-start',
        actions: 'mt-2.5 items-start',
      },
    },
    title: {
      true: {
        description: 'mt-1',
      },
    },
  },
} satisfies PThemeToast;

export const toasterTheme = {
  slots: {
    viewport: 'flex flex-col w-[calc(100%-2rem)] fixed z-100 focus:outline-none data-[expanded=true]:h-$height sm:w-96',
    base: 'pointer-events-auto transition-[transform,height]-280 ease-out [transform:var(--transform)] inset-x-0 z-300 data-[swipe=move]:transition-none uno-layer-vinicunca:absolute data-[state=closed]:animate-toast-closed data-[expanded=false]:data-[front-false]:h-$front-height data-[front=false]:*:transition-opacity data-[expanded=false]:data-[front=false]:*:opacity-0 data-[state=x]:data-[expanded=false]:data-[front=false]:animate-toast-collapsed-closed',
  },
  variants: {
    position: {
      'top-left': {
        viewport: 'left-4',
      },
      'top-center': {
        viewport: 'transform left-1/2 -translate-x-1/2',
      },
      'top-right': {
        viewport: 'right-4',
      },
      'bottom-left': {
        viewport: 'left-4',
      },
      'bottom-center': {
        viewport: 'transform left-1/2 -translate-x-1/2',
      },
      'bottom-right': {
        viewport: 'right-4',
      },
    },
    swipeDirection: {
      up: 'akar:data-[swipe=end]:(animate-out slide-out-top)',
      right: 'akar:data-[swipe=end]:(animate-out slide-out-right)',
      down: 'akar:data-[swipe=end]:(animate-out slide-out-bottom)',
      left: 'akar:data-[swipe=end]:(animate-out slide-out-left)',
    },
  },
  compoundVariants: [
    {
      position: ['top-left', 'top-center', 'top-right'],
      class: {
        viewport: 'top-4',
        base: 'top-0 data-[state=open]:(animate-in animate-duration-280 slide-in-from-top)',
      },
    },
    {
      position: ['bottom-left', 'bottom-center', 'bottom-right'],
      class: {
        viewport: 'bottom-4',
        base: 'bottom-0 data-[state=open]:(animate-in animate-duration-280 slide-in-from-bottom)',
      },
    },
    {
      swipeDirection: ['left', 'right'],
      class: 'data-[swipe=move]:translate-x-$akar-toast-swipe-move-x data-[swipe=end]:translate-x-$akar-toast-swipe-end-x data-[swipe=cancel]:translate-x-0',
    },
    {
      swipeDirection: ['up', 'down'],
      class: 'data-[swipe=move]:translate-y-$akar-toast-swipe-move-y data-[swipe=end]:translate-y-$akar-toast-swipe-end-y data-[swipe=cancel]:translate-y-0',
    },
  ],
} satisfies PThemeToaster;
