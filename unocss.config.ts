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
        collections: {
          vin: async (iconName) => {
            if (iconName === 'eslint-style') {
              return await fetch('https://eslint.style/logo.svg').then((res) => res.text());
            } else if (iconName === 'yaml') {
              return await fetch('https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/yaml.svg').then((res) => res.text());
            }
          },
        },
        scale: 1.5,
        warn: true,
      },

      fluidOptions: {
        ranges: {
          'xs': [5, 15],
          'sm': [10, 30],
          'md': [15, 40],
          'lg': [20, 50],
          'xl': [25, 60],
          '2xl': [30, 70],
          '3xl': [35, 80],
          '4xl': [40, 90],
        },
      },
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

  blocklist: [
    'fluid-text',
    'fluid-m',
    'fluid-mt',
    'fluid-mr',
    'fluid-mb',
    'fluid-ml',
    'fluid-mx',
    'fluid-my',
    'fluid-p',
    'fluid-pt',
    'fluid-pr',
    'fluid-pb',
    'fluid-pl',
    'fluid-px',
    'fluid-py',
    'fluid-w',
    'fluid-min-w',
    'fluid-max-w',
    'fluid-h',
    'fluid-min-h',
    'fluid-max-h',
    'fluid-gap',
    'fluid-gap-x',
    'fluid-gap-y',
    'fluid-intent',
    'fluid-leading',
    'fluid-scroll-m',
    'fluid-scroll-mt',
    'fluid-scroll-mr',
    'fluid-scroll-mb',
    'fluid-scroll-ml',
    'fluid-scroll-mx',
    'fluid-scroll-my',
    'fluid-scroll-p',
    'fluid-scroll-pt',
    'fluid-scroll-pr',
    'fluid-scroll-pb',
    'fluid-scroll-pl',
    'fluid-scroll-px',
    'fluid-scroll-py',
    'fluid-top',
    'fluid-right',
    'fluid-bottom',
    'fluid-left',
    'fluid-inset',
    'fluid-inset-x',
    'fluid-inset-y',
  ],

  shortcuts: {
    'border-base': 'border-$vp-c-divider',
    'button-action': 'flex flex-inline gap-2 items-center justify-center px-3 py-0.5 rounded hover:color-$vp-c-brand-2 hover:bg-$vp-c-default-soft',
  },

  theme: {
    animation: {
      durations: {
        'collapsible-slide-down': '0.3s',
        'collapsible-slide-up': '0.3s',
        'scale-in': '0.2s',
        'scale-out': '0.2s',
      },

      keyframes: {
        'collapsible-slide-down': '{from {height: 0} to {height: var(--radix-collapsible-content-height)}}',
        'collapsible-slide-up': '{from {height: var(--radix-collapsible-content-height)} to {height: 0}}',
        'scale-in': '{from{opacity:0;transform:rotateX(-10deg) scale(0.9)}to{opacity:1;transform:rotateX(0deg) scale(1)}}',
        'scale-out': '{from{opacity:1;transform:rotateX(0deg) scale(1)}to{opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
      },

      timingFns: {
        'collapsible-slide-down': 'ease-out',
        'collapsible-slide-up': 'ease-out',
        'scale-in': 'ease',
        'scale-out': 'ease',
      },
    },

    boxShadow: {
      1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
    },

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
