import { capitalize, toCamelCase } from '@vinicunca/perkakas';
import { createError, defineEventHandler } from 'nuxt/server';
// @ts-expect-error - no types available
import { getComponentExample } from '#component-example/nitro';

export default defineEventHandler((event) => {
  event.res.headers.append('Access-Control-Allow-Origin', '*');
  const componentName = (event.context.params?.['component?'] || '').replace(/\.json$/, '');
  if (componentName) {
    const component = getComponentExample(capitalize(toCamelCase(componentName)));
    if (!component) {
      throw createError({
        statusText: 'Example not found!',
        status: 404,
      });
    }
    return component;
  }
});
