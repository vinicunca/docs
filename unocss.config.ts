import { presetVinicunca } from '@vinicunca/unocss-preset-vinicunca';
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      icons: {
        scale: 1.5,
        warn: true,
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
