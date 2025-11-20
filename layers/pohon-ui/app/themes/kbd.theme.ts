// @unocss-include

import type { PThemeKbd } from 'pohon-ui';
import { BRANDS } from './constant';

export const kbdTheme = {
  base: 'font-600 font-sans px-1 rounded-sm inline-flex items-center justify-center',
  variants: {
    size: {
      sm: 'text-[10px] h-4 min-w-[16px]',
      md: 'text-[11px] h-5 min-w-[20px]',
      lg: 'text-[12px] h-6 min-w-[24px]',
    },
  },
  compoundVariants: [
    ...BRANDS.map((color) => ({
      color,
      variant: 'solid',
      class: `color-text-inverted bg-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'outline',
      class: `ring ring-inset ring-${color}/50 color-${color}`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'soft',
      class: `color-${color} bg-${color}/10`,
    })),
    ...BRANDS.map((color) => ({
      color,
      variant: 'subtle',
      class: `shadow-[0_0_0_1px_rgba(28,25,23,10%),0_3px_0_rgba(28,25,23,10%)] color-${color} ring ring-inset ring-${color}/25 bg-${color}/10`,
    })),
    {
      color: 'neutral',
      variant: 'solid',
      class: 'shadow-[0_0_0_1px_rgba(28,25,23,10%),0_3px_0_rgba(28,25,23,10%)] color-text-inverted bg-background-inverted',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: 'shadow-[0_0_0_1px_rgba(28,25,23,10%),0_3px_0_rgba(28,25,23,10%)] color-text bg-background',
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: 'shadow-[0_0_0_1px_rgba(28,25,23,10%),0_3px_0_rgba(28,25,23,10%)] color-text bg-background-elevated',
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: 'shadow-[0_0_0_1px_rgba(28,25,23,10%),0_3px_0_rgba(28,25,23,10%)] ring ring-inset ring-ring-accented color-text bg-background-elevated',
    },
  ],
} satisfies PThemeKbd;
