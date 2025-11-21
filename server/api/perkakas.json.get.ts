/* eslint-disable no-await-in-loop */

import { defineEventHandler } from '#imports';
import { format } from 'prettier';
import PERKAKAS_METADATA from '../data/metadata.json';

import { transformProject } from '../perkakas.transform';

const prettierOptions = {
  parser: 'typescript',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'all' as const,
};

export default defineEventHandler(async () => {
  const PERKAKAS_METHODS = transformProject(PERKAKAS_METADATA);

  const results = [];

  for (const func of PERKAKAS_METHODS) {
    const methods = [];

    for (const method of func.methods) {
      const example = await format(method.example ?? '', prettierOptions);
      const signature = await format(method.signature ?? '', prettierOptions);

      methods.push({
        ...method,
        example,
        signature,
      });
    }

    results.push({
      ...func,
      methods,
    });
  }

  return results;
});
