// @unocss-include

import type { PThemeError } from 'pohon-ui';

export const errorTheme = {
  slots: {
    root: 'min-h-[calc(100vh-var(--pohon-header-height))] flex flex-col items-center justify-center text-center',
    statusCode: 'text-base font-semibold color-primary',
    statusMessage: 'mt-2 text-4xl sm:text-5xl font-bold color-text-highlighted text-balance',
    message: 'mt-4 text-lg color-text-muted text-balance',
    links: 'mt-8 flex items-center justify-center gap-6',
  },
} satisfies PThemeError;
