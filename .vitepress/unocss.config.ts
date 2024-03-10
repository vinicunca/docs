import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        vin: async (iconName) => {
          if (iconName === 'eslint-style') {
            return await fetch('https://eslint.style/logo.svg').then((res) => res.text());
          } else if (iconName === 'yaml') {
            return await fetch('https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/yaml.svg').then((res) => res.text());
          }
        },
      },
      scale: 1.2,

      warn: true,
    }),
  ],

  safelist: [
    'i-simple-icons:eslint',
    'i-logos:javascript',
    'i-fa-regular:comments',
    'i-logos:nodejs-icon-alt',
    'i-simple-line-icons:docs',
    'i-carbon:document-import',
    'i-openmoji:unicorn',
    'i-logos:typescript-icon',
    'i-vin:eslint-style',
    'i-file-icons:test-generic',
    'i-logos:vue',
    'i-carbon:json',
    'i-logos:nodejs-icon',
    'i-vscode-icons:file-type-tsconfig',
    'i-vin:yaml',
    'i-simple-icons:markdown',
    'i-logos:react',
  ],

  theme: {
    colors: {
      primary: '#3eaf7c',
    },
    fontFamily: {
      mono: 'var(--vp-font-family-mono)',
    },
  },

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
