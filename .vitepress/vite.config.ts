import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
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
  plugins: [
    Components({
      dirs: [
        fileURLToPath(new URL('./components', import.meta.url)),
      ],
      dts: fileURLToPath(new URL('../components.d.ts', import.meta.url)),
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    UnoCSS(
      fileURLToPath(new URL('./unocss.config.ts', import.meta.url)),
    ),
  ],
});
