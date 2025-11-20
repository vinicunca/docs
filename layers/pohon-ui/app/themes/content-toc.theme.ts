// @unocss-include

import type { PThemeContentToc } from 'pohon-ui';
import { BRANDS } from './constant';

export const contentTocTheme = {
  slots: {
    root: 'sticky top-$pohon-header-height z-10 bg-background/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--pohon-header-height))]',
    container: 'pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-border lg:border-0 flex flex-col',
    bottom: 'hidden lg:flex lg:flex-col gap-6',
    trigger: 'group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary',
    title: 'truncate',
    trailing: 'ms-auto inline-flex gap-1.5 items-center',
    trailingIcon: 'size-5 transform transition-transform-280 shrink-0 group-data-[state=open]:rotate-180 lg:hidden',
    content: 'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none',
    list: 'min-w-0',
    listWithChildren: 'ms-3',
    item: 'min-w-0',
    link: 'group relative text-sm flex items-center focus-visible:outline-primary py-1',
    linkText: 'truncate',
    indicator: 'absolute ms-2.5 transition-[transform,height]-280 h-$indicator-size translate-y-$indicator-position w-px rounded-full',
  },
  variants: {
    highlightColor: {
      ...Object.fromEntries(BRANDS.map((color) => [color, {
        indicator: `bg-${color}`,
      }])),
      neutral: {
        indicator: 'bg-background-inverted',
      },
    },
    active: {
      false: {
        link: ['color-text-muted hover:color-text transition-colors-280'],
      },
    },
    highlight: {
      true: {
        list: 'ms-2.5 ps-4 border-s border-border',
        item: '-ms-px',
      },
    },
    body: {
      true: {
        bottom: 'mt-6',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      active: true,
      class: {
        link: `color-${color}`,
        linkLeadingIcon: `color-${color}`,
      },
    })),
    {
      color: 'neutral',
      active: true,
      class: {
        link: 'color-text-highlighted',
        linkLeadingIcon: 'color-text-highlighted',
      },
    },
  ],
} satisfies PThemeContentToc;
