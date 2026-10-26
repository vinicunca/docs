import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: {
      css: true,
    },
    vue: true,
    pnpm: true,
    unocss: true,
  },

  {
    files: [
      'packages/pohon/layer/app/themes/*.ts',
    ],
    rules: {
      'unocss/order': [
        'warn',
        {
          unoVariables: ['Theme?$'],
        },
      ],
    },
  },

  {
    files: ['nuxt.config.ts', 'unocss.config.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },

  {
    files: ['content/**/*.md'],
    rules: {
      // MDC named slots use #nuxt and #vue. Adding a space turns them into headings.
      'markdown/no-missing-atx-heading-space': 'off',
    },
  },

  {
    rules: {
      'vue/no-extra-parens': 'off',
      'pnpm/yaml-enforce-settings': 'off',
      'slop/no-em-dash': 'off',
      'markdown/no-multiple-h1': 'off',
      'markdown/heading-increment': 'off',
      'sonarjs/cognitive-complexity': 'off',
    },
  },
);
