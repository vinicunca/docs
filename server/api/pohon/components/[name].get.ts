import { createError, defineEventHandler, getRouterParam } from 'h3';
import metadata from '../../../data/pohon-components.json';
import SOURCE_LOCK from '../../../../docs/sources.lock.json';

export default defineEventHandler((event) => {
  const requested = getRouterParam(event, 'name')?.replace(/\.json$/i, '');
  const match = Object.entries(metadata.components)
    .find(([name]) => name.toLowerCase() === requested?.toLowerCase());

  if (!match) {
    throw createError({ statusCode: 404, statusMessage: 'Pohon component not found' });
  }

  const [name, component] = match;
  const release = (SOURCE_LOCK.packages as Record<string, { commit: string }>).pohon;
  const ref = release?.commit ?? `v${metadata.version}`;
  return {
    package: 'pohon',
    version: metadata.version,
    name,
    ...component,
    sourceUrl: `https://github.com/vinicunca/pohon/blob/${ref}/${component.source}`,
  };
});
