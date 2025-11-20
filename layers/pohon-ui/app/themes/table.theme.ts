// @unocss-include

import type { PThemeTable } from 'pohon-ui';
import { BRANDS } from './constant';

export const tableTheme = {
  slots: {
    root: 'relative overflow-auto',
    base: 'min-w-full',
    caption: 'sr-only',
    thead: 'relative',
    tbody: '[&>tr]:data-[selectable=true]:focus-visible:outline-primary [&>tr]:data-[selectable=true]:hover:bg-background-elevated/50',
    tfoot: 'relative',
    tr: 'data-[selected=true]:bg-background-elevated/50',
    th: 'text-sm color-text-highlighted font-semibold px-4 py-3.5 text-left [&:has([role=checkbox])]:pe-0 rtl:text-right',
    td: 'text-sm color-text-muted p-4 whitespace-nowrap [&:has([role=checkbox])]:pe-0',
    separator: 'bg-border-accented h-px w-full left-0 absolute z-1',
    empty: 'text-sm color-text-muted py-6 text-center',
    loading: 'py-6 text-center',
  },
  variants: {
    virtualize: {
      false: {
        base: 'overflow-clip',
        tbody: 'divide-divide divide-y',
      },
    },
    pinned: {
      true: {
        th: 'bg-background/75 sticky data-[pinned=left]:left-0 data-[pinned=right]:right-0',
        td: 'bg-background/75 sticky data-[pinned=left]:left-0 data-[pinned=right]:right-0',
      },
    },
    sticky: {
      true: {
        thead: 'bg-background/75 inset-x-0 top-0 sticky z-1 backdrop-blur',
        tfoot: 'bg-background/75 inset-x-0 bottom-0 sticky z-1 backdrop-blur',
      },
      header: {
        thead: 'bg-background/75 inset-x-0 top-0 sticky z-1 backdrop-blur',
      },
      footer: {
        tfoot: 'bg-background/75 inset-x-0 bottom-0 sticky z-1 backdrop-blur',
      },
    },
    loading: {
      true: {
        thead: 'after:(h-px content-empty absolute z-1)',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      loading: true,
      loadingColor: color,
      class: {
        thead: `after:bg-${color}`,
      },
    })),
    {
      loading: true,
      loadingColor: 'neutral',
      class: {
        thead: 'after:bg-background-inverted',
      },
    },
    {
      loading: true,
      loadingAnimation: 'carousel',
      class: {
        thead: 'after:animate-carousel rtl:after:animate-carousel-rtl',
      },
    },
    {
      loading: true,
      loadingAnimation: 'carousel-inverse',
      class: {
        thead: 'after:animate-carousel-inverse rtl:after:animate-carousel-inverse-rtl',
      },
    },
    {
      loading: true,
      loadingAnimation: 'swing',
      class: {
        thead: 'after:animate-swing',
      },
    },
    {
      loading: true,
      loadingAnimation: 'elastic',
      class: {
        thead: 'after:animate-elastic',
      },
    },
  ],
} satisfies PThemeTable;
