/* eslint-disable no-await-in-loop */

import type { Options } from 'prettier';
import type { SiteConfig } from 'vitepress';

import { flatten, pipe, values } from '@vinicunca/perkakas';
import { format } from 'prettier';
import { createMarkdownRenderer, defineLoader } from 'vitepress';

import { CATEGORIZED } from './utils/categorized.typedoc';

declare const data: typeof CATEGORIZED;
export { data };

const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;

export default defineLoader({
  async load() {
    return await mapFunctions();
  },
});

const prettierOptions: Options = {
  parser: 'typescript',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'all',
};

async function mapFunctions() {
  const flattenFunctions = pipe(
    CATEGORIZED,
    values,
    flatten(),
  );

  const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger);

  const result = [];

  for (const func of flattenFunctions) {
    const methods = [];

    for (const method of func.methods) {
      const examples = await format(method.example ?? '', prettierOptions);
      const signatures = await format(method.signature ?? '', prettierOptions);

      methods.push({
        ...method,
        example: md.render(`
  \`\`\`ts
  ${examples}
  \`\`\`
  `),
        signature: md.render(`
  \`\`\`ts
  ${signatures}
  \`\`\`
  `),
      });
    }

    result.push({
      ...func,
      description: md.render(func.description ?? ''),
      methods,
    });
  }

  return result;
}
