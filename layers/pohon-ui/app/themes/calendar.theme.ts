// @unocss-include

import type { PThemeCalendar } from 'pohon-ui';
import { BRANDS } from './constant';

export const calendarTheme = {
  slots: {
    header: 'flex items-center justify-between',
    body: 'pt-4 flex flex-col space-y-4 sm:(flex-row space-x-4 space-y-0)',
    heading: 'font-medium mx-auto text-center truncate',
    grid: 'w-full select-none border-collapse space-y-1 focus:outline-none',
    gridRow: 'grid grid-cols-7 place-items-center',
    gridWeekDaysRow: 'mb-1 grid grid-cols-7 w-full',
    gridBody: 'grid',
    headCell: 'rounded-md',
    cell: 'text-center relative',
    cellTrigger: 'm-0.5 rounded-full flex whitespace-nowrap transition-colors-280 items-center justify-center relative data-[disabled]:(color-text-dimmed cursor-not-allowed) data-[outside-view]:color-text-muted data-[unavailable]:(color-text-muted line-through pointer-events-none) data-[today]:font-semibold focus:outline-none focus-visible:ring-2',
  },
  variants: {
    color: {
      ...Object.fromEntries(BRANDS.map((color) => [
        color,
        {
          headCell: `color-${color}`,
          cellTrigger: `focus-visible:ring-${color}`,
        },
      ])),
      neutral: {
        headCell: 'color-text-highlighted',
        cellTrigger: 'focus-visible:ring-ring-inverted',
      },
    },
    size: {
      xs: {
        heading: 'text-xs',
        cell: 'text-xs',
        headCell: 'text-[10px]',
        cellTrigger: 'size-7',
        body: 'pt-2 space-y-2',
      },
      sm: {
        heading: 'text-xs',
        headCell: 'text-xs',
        cell: 'text-xs',
        cellTrigger: 'size-7',
      },
      md: {
        heading: 'text-sm',
        headCell: 'text-xs',
        cell: 'text-sm',
        cellTrigger: 'size-8',
      },
      lg: {
        heading: 'text-base',
        headCell: 'text-base',
        cellTrigger: 'text-base size-9',
      },
      xl: {
        heading: 'text-lg',
        headCell: 'text-lg',
        cellTrigger: 'text-lg size-10',
      },
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: 'solid',
      class: {
        cellTrigger: `akar:data-[selected]:bg-${color} akar:data-[selected]:color-text-inverted data-[today]:not-[[data-selected]]:color-${color} data-[highlighted]:bg-${color}/20 hover:not-[[data-selected]]:bg-${color}/20`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'outline',
      class: {
        cellTrigger: `akar:data-[selected]:ring akar:data-[selected]:ring-inset akar:data-[selected]:ring-${color}/50 akar:data-[selected]:color-${color} data-[today]:not-[[data-selected]]:color-${color} data-[highlighted]:bg-${color}/10 hover:not-[[data-selected]]:bg-${color}/10`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'soft',
      class: {
        cellTrigger: `akar:data-[selected]:bg-${color}/10 akar:data-[selected]:color-${color} data-[today]:not-[[data-selected]]:color-${color} data-[highlighted]:bg-${color}/20 hover:not-[[data-selected]]:bg-${color}/20`,
      },
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'subtle',
      class: {
        cellTrigger: `akar:data-[selected]:bg-${color}/10 akar:data-[selected]:color-${color} akar:data-[selected]:ring akar:data-[selected]:ring-inset akar:data-[selected]:ring-${color}/25 data-[today]:not-[[data-selected]]:color-${color} data-[highlighted]:bg-${color}/20 hover:not-[[data-selected]]:bg-${color}/20`,
      },
    })),
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        cellTrigger: 'akar:(data-[selected]:(bg-background-inverted color-text-inverted)) data-[today]:not-[[data-selected]]:color-text-highlighted data-[highlighted]:bg-background-inverted/20 hover:not-[[data-selected]]:bg-background-inverted/10',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: {
        cellTrigger: 'data-[highlighted]:bg-background-inverted/10 data-[today]:not-[[data-selected]]:color-text-highlighted hover:not-[[data-selected]]:bg-background-inverted/10 akar:(data-[selected]:color-text data-[selected]:bg-background data-[selected]:ring data-[selected]:ring-ring-accented data-[selected]:ring-inset)',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        cellTrigger: 'data-[highlighted]:bg-background-inverted/20 data-[today]:not-[[data-selected]]:color-text-highlighted hover:not-[[data-selected]]:bg-background-inverted/10 akar:(data-[selected]:color-text data-[selected]:bg-background-elevated)',
      },
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: {
        cellTrigger: 'data-[highlighted]:bg-background-inverted/20 data-[today]:not-[[data-selected]]:color-text-highlighted hover:not-[[data-selected]]:bg-background-inverted/10 akar:(data-[selected]:color-text data-[selected]:bg-background-elevated data-[selected]:ring data-[selected]:ring-ring-accented data-[selected]:ring-inset)',
      },
    },
  ],
} satisfies PThemeCalendar;
