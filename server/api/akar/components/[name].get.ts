import { createError, defineEventHandler, getRouterParam } from 'h3';
import metadata from '../../../data/akar-components.json';

export default defineEventHandler((event) => {
  const requested = getRouterParam(event, 'name')?.replace(/\.json$/i, '');
  const match = Object.entries(metadata.components)
    .find(([name]) => name.toLowerCase() === requested?.toLowerCase());

  if (!match) {
    throw createError({ statusCode: 404, statusMessage: 'Akar component not found' });
  }

  const [name, component] = match;
  return {
    package: 'akar',
    version: metadata.version,
    name,
    ...component,
  };
});
