import { defineEventHandler } from 'h3';
import metadata from '../../data/akar-components.json';

export default defineEventHandler(() => ({
  package: 'akar',
  version: metadata.version,
  components: Object.entries(metadata.components).map(([name, component]) => {
    const category = component.source.split('/')[3] ?? '';
    return {
      name,
      category,
      metadata: `/api/akar/components/${name}.json`,
      documentation: `/akar/components/${category.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`,
    };
  }),
}));
