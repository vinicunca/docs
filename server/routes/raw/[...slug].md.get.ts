import { createError, eventHandler, getRouterParams, setHeader } from '#imports';
import { queryCollection } from '@nuxt/content/server';
import { stringify } from 'minimark/stringify';
import { withLeadingSlash } from 'ufo';

export default eventHandler(async (event) => {
  const params = getRouterParams(event)['slug.md'];

  if (!params?.endsWith('.md')) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }

  const path = withLeadingSlash(params.replace('.md', ''));
  const page = await queryCollection(event, 'docs').path(path).first();

  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }

  // Add title and description to the top of the page if missing
  if (page.body.value[0]?.[0] !== 'h1') {
    page.body.value.unshift(['blockquote', {}, page.description]);
    page.body.value.unshift(['h1', {}, page.title]);
  }

  setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8');

  return stringify({ ...page.body, type: 'minimark' }, { format: 'markdown/html' });
});
