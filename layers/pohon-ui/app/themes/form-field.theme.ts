// @unocss-include

import type { PThemeFormField } from 'pohon-ui';

export const formFieldTheme = {
  slots: {
    labelWrapper: 'flex content-center items-center justify-between',
    label: 'color-text font-medium block',
    container: 'mt-1 relative',
    description: 'color-text-muted',
    error: 'text-error mt-2',
    hint: 'color-text-muted',
    help: 'color-text-muted mt-2',
  },
  variants: {
    size: {
      xs: { root: 'text-xs' },
      sm: { root: 'text-xs' },
      md: { root: 'text-sm' },
      lg: { root: 'text-sm' },
      xl: { root: 'text-base' },
    },
    required: {
      true: {
        label: 'after:(text-error ms-0.5 content-["*"])',
      },
    },
  },
} satisfies PThemeFormField;
