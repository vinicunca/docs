import { queryCollection } from '@nuxt/content/server';
import { pascalCase } from 'scule';

/**
 * Pohon UI components with a documentation page, prerendered as
 * `/api/mcp/pohon-components.json`. The prerender header pulls every
 * component's `/api/component-meta/<Name>.json` into the static output too,
 * which is where the `/mcp` Worker reads props, slots and events from.
 */
export default defineEventHandler(async (event) => {
  const pages = await queryCollection(event, 'docs')
    .select('path', 'title', 'description', 'category')
    .where('path', 'LIKE', '/pohon/components/%')
    .all();

  const components = pages.map((page) => {
    const slug = page.path.split('/').pop() as string;
    return {
      name: `P${pascalCase(slug)}`,
      slug,
      path: page.path,
      title: page.title,
      description: page.description,
      category: page.category,
    };
  });

  if (import.meta.prerender) {
    appendHeader(event, 'x-nitro-prerender', components.map((component) => `/api/component-meta/${component.name}.json`).join(','));
  }

  return components;
});
