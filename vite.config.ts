import { createRequire } from 'node:module';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('postcss-nested'),
      ],
    },
  },

  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },

  plugins: [
    UnoCSS(),
  ],
});
