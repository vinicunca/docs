// @unocss-include

import type { PThemeMarquee } from 'pohon-ui';

export const marqueeTheme = {
  slots: {
    root: 'group relative flex items-center overflow-hidden gap-$gap [--gap:calc(var(--spacing)*16)] [--duration:20s]',
    content: 'flex items-center shrink-0 justify-around gap-$gap min-w-max',
  },
  variants: {
    orientation: {
      horizontal: {
        content: 'w-full',
      },
      vertical: {
        content: 'h-full',
      },
    },
    pauseOnHover: {
      true: {
        content: 'group-hover:[animation-play-state:paused]',
      },
    },
    reverse: {
      true: {
        content: '![animation-direction:reverse]',
      },
    },
    overlay: {
      true: {
        root: 'after:(pointer-events-none content-empty absolute z-2 from-background to-transparent) before:(pointer-events-none content-empty absolute z-2 from-background to-transparent)',
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      class: {
        root: 'flex-row',
        content: 'flex-row animate-marquee rtl:animate-marquee-rtl backface-hidden',
      },
    },
    {
      orientation: 'horizontal',
      overlay: true,
      class: {
        root: 'backface-hidden after:(h-full w-1/3 content-empty inset-y-0 right-0 bg-gradient-to-l) before:(h-full w-1/3 content-empty inset-y-0 left-0 bg-gradient-to-r)',
      },
    },
    {
      orientation: 'vertical',
      class: {
        root: 'flex-col',
        content: 'flex-col animate-marquee-vertical rtl:animate-marquee-vertical-rtl h-[fit-content] backface-hidden',
      },
    },
    {
      orientation: 'vertical',
      overlay: true,
      class: {
        root: 'backface-hidden after:(h-1/3 w-full content-empty inset-x-0 bottom-0 bg-gradient-to-t) before:(h-1/3 w-full content-empty inset-x-0 top-0 bg-gradient-to-b)',
      },
    },
  ],
} satisfies PThemeMarquee;
