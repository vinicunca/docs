import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: {
      css: true,
    },
    vue: true,
    pnpm: true,
  },

  {
    files: [
      'packages/pohon/layer/app/themes/*.ts',
    ],
    rules: {
      'unocss/order': ['warn', {
        unoVariables: ['Theme?$'],
      }],
    },
  },

  {
    files: ['nuxt.config.ts', 'unocss.config.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },

  {
    rules: {
      'vue/no-extra-parens': 'off',
    },
  },
);
