// @unocss-include

import type { PThemeBreadcrumb } from 'pohon-ui';

export const breadcrumbTheme = {
  slots: {
    root: 'min-w-0 relative',
    list: 'flex gap-1.5 items-center',
    item: 'flex min-w-0',
    link: 'group text-sm flex gap-1.5 min-w-0 items-center relative focus-visible:outline-primary',
    linkLeadingIcon: 'shrink-0 size-5',
    linkLeadingAvatar: 'shrink-0',
    linkLeadingAvatarSize: '2xs',
    linkLabel: 'truncate',
    separator: 'flex',
    separatorIcon: 'color-text-muted shrink-0 size-5',
  },
  variants: {
    active: {
      true: {
        link: 'color-primary font-semibold',
      },
      false: {
        link: 'color-text-muted font-medium',
      },
    },
    disabled: {
      true: {
        link: 'opacity-75 cursor-not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      disabled: false,
      active: false,
      to: true,
      class: {
        link: 'hover:color-text transition-colors-280',
      },
    },
  ],
} satisfies PThemeBreadcrumb;
