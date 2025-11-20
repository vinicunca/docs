// @unocss-include

import type { PThemeCarousel } from 'pohon-ui';

export const carouselTheme = {
  slots: {
    root: 'relative focus:outline-none',
    viewport: 'overflow-hidden',
    container: 'flex items-start',
    item: 'shrink-0 basis-full min-w-0',
    prev: 'absolute akar:rounded-full',
    next: 'absolute akar:rounded-full',
    dots: 'flex flex-wrap gap-3 items-center inset-x-0 justify-center absolute -bottom-7',
    dot: 'rounded-full bg-background-accented size-3 cursor-pointer transition',
  },
  variants: {
    orientation: {
      vertical: {
        container: 'flex-col -mt-4',
        item: 'pt-4',
        prev: 'rotate-90 left-1/2 top-4 -translate-x-1/2 rtl:-rotate-90 sm:-top-12',
        next: 'rotate-90 bottom-4 left-1/2 -translate-x-1/2 rtl:-rotate-90 sm:-bottom-12',
      },
      horizontal: {
        container: 'flex-row -ms-4',
        item: 'ps-4',
        prev: 'start-4 top-1/2 -translate-y-1/2 sm:-start-12',
        next: 'end-4 top-1/2 -translate-y-1/2 sm:-end-12',
      },
    },
    active: {
      true: {
        dot: 'data-[state=active]:bg-background-inverted',
      },
    },
  },
} satisfies PThemeCarousel;
