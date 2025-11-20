// @unocss-include

import type { PThemeAccordion } from 'pohon-ui';

export const accordionTheme = {
  slots: {
    root: 'px-4 rounded-md bg-background w-full',
    item: 'border-b border-border last:border-b-0',
    header: 'flex',
    trigger: 'group text-sm font-medium py-3.5 flex flex-1 gap-1.5 min-w-0 items-center focus-visible:outline-primary',
    content: 'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    body: 'text-sm color-text-muted pb-4 pt-1',
    leadingIcon: 'shrink-0 size-5',
    trailingIcon: 'ms-auto shrink-0 size-5 transition-transform-280 group-data-[state=open]:rotate-180',
    label: 'text-start break-words',
  },
  variants: {
    disabled: {
      true: {
        trigger: 'opacity-50 cursor-not-allowed',
      },
    },
  },
} satisfies PThemeAccordion;
