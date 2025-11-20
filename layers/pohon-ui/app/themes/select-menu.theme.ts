// @unocss-include

import type { PThemeSelectMenu } from 'pohon-ui';
import { isString } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { selectTheme } from './select.theme';

export const selectMenuTheme = {
  slots: {
    ...selectTheme.slots,
    input: 'border-b border-border',
    focusScope: 'flex flex-col min-h-0',
    content: [selectTheme.slots.content, 'origin-$akar-combobox-content-transform-origin akar:w-$akar-combobox-trigger-width'],
    viewport: 'flex-1 relative overflow-y-auto scroll-py-1',
  },
  variants: defu(
    {
      virtualize: {
        true: {
          viewport: 'p-1 isolate',
        },
        false: {
          viewport: 'divide-y divide-divide',
        },
      },
    },
    selectTheme.variants,
  ),
  compoundVariants: [
    ...selectTheme.compoundVariants.map((item) => ({
      ...item,
      class: isString(item.class) ? replaceFocus(item.class) : item.class,
    })),
  ],
} satisfies PThemeSelectMenu;

function replaceFocus(str: string): string {
  return str
    .replace(/focus:/g, 'focus-visible:');
}
