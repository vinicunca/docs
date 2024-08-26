import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    react: false,
  },
  {
    files: ['**/tsconfig.json'],
    rules: {
      'jsonc/sort-keys': 'off',
    },
  },
  {
    rules: {
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-objects': 'off',
      'ts/consistent-type-definitions': 'off',
    },
  },
);
