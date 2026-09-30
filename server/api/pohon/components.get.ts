import { defineEventHandler } from 'h3';
import metadata from '../../data/pohon-components.json';

export default defineEventHandler(() => ({
  package: 'pohon',
  version: metadata.version,
  components: Object.keys(metadata.components).map((name) => ({
    name,
    metadata: `/api/pohon/components/${name}.json`,
    documentation: `/pohon/components/${name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`,
  })),
}));
