import { queryCollection } from '@nuxt/content/server';
import { createError, eventHandler, getRouterParams, setHeader } from 'h3';
import { stringify } from 'minimark/stringify';
import { withLeadingSlash } from 'ufo';
import SOURCE_LOCK from '../../../docs/sources.lock.json';
import { getPerkakasMethods } from '../../perkakas.data';

async function perkakasFunctionsMarkdown() {
  const functions = await getPerkakasMethods();
  const sections = functions.map((func) => {
    const methods = func.methods.map((method) => [
      method.tag ? `### ${method.tag}` : '',
      method.signature ? `\`\`\`ts\n${method.signature.trim()}\n\`\`\`` : '',
      method.example ? `**Example**\n\n\`\`\`ts\n${method.example.trim()}\n\`\`\`` : '',
      method.args.length
        ? `**Parameters**\n\n${method.args.map(arg => `- \`${arg.name}\`${arg.description ? `: ${arg.description}` : ''}`).join('\n')}`
        : '',
      `**Returns:** \`${method.returns.name}\`${method.returns.description ? ` — ${method.returns.description}` : ''}`,
    ].filter(Boolean).join('\n\n'));

    return [
      `## ${func.name}`,
      func.category ? `**Category:** ${func.category}` : '',
      func.sourceUrl ? `**Source:** ${func.sourceUrl}` : '',
      func.description ?? '',
      ...methods,
    ].filter(Boolean).join('\n\n');
  });

  const release = (SOURCE_LOCK.packages as Record<string, { tag: string; commit: string }>).perkakas;
  const provenance = release
    ? `> Package release: ${release.tag}\n> Source commit: https://github.com/vinicunca/perkakas/tree/${release.commit}\n\n`
    : '';

  return `# Perkakas functions\n\n${provenance}${sections.join('\n\n')}\n`;
}

export default eventHandler(async (event) => {
  const params = getRouterParams(event)['slug.md'];

  if (!params?.endsWith('.md')) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }

  const path = withLeadingSlash(params.replace('.md', ''));

  if (path === '/perkakas/functions') {
    setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8');
    return perkakasFunctionsMarkdown();
  }

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

  const provenance = page.sourceTag && page.sourceUrl
    ? `> Package release: ${page.sourceTag}\n> Source: ${page.sourceUrl}\n\n`
    : '';

  return provenance + stringify({ ...page.body, type: 'minimark' }, { format: 'markdown/html' });
});
