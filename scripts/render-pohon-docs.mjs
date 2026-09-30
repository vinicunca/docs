import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fieldList } from './render-akar-reference.mjs';

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`Pohon docs output contains a symlink: ${path}`);
    }
    return entry.isDirectory() ? markdownFiles(path) : entry.name.endsWith('.md') ? [path] : [];
  });
}

function sourceRoutes(checkout) {
  const base = join(checkout, 'docs/content/docs');
  const routes = new Map();
  for (const path of markdownFiles(base)) {
    const source = relative(checkout, path).split(sep).join('/');
    const route = relative(base, path).split(sep).map((segment) => segment.replace(/^\d+\./, '')).join('/').replace(/\/?index\.md$/, '.md');
    routes.set(route, source);
  }
  return routes;
}

function componentApi(name, component, commit) {
  return [
    '## Generated component API',
    `[${name} source](https://github.com/vinicunca/pohon/blob/${commit}/${component.source})`,
    '### Props',
    fieldList(component.props, 'Props'),
    '### Slots',
    fieldList(component.slots, 'Slots'),
    '### Events',
    fieldList(component.events, 'Events'),
  ].join('\n\n');
}

function pascalCase(value) {
  return value.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

function hubLinks(body) {
  return body
    .replaceAll('https://pohon.vinicunca.dev/docs/', '/pohon/')
    .replaceAll('https://pohon.vinicunca.dev/llms-full.txt', 'https://vinicunca.dev/llms-full.txt')
    .replaceAll('https://pohon.vinicunca.dev/llms.txt', 'https://vinicunca.dev/llms.txt')
    .replace(/https:\/\/pohon\.vinicunca\.dev\/(?=[)\s"'`])/g, '/pohon/')
    .replaceAll('https://akar.vinicunca.dev/docs/components/', '/akar/components/')
    .replaceAll('https://akar.vinicunca.dev/docs/utilities/config-provider', '/akar/components/config-provider')
    .replace(/https:\/\/akar\.vinicunca\.dev\/(?=[)\s"'`])/g, '/akar/')
    .replaceAll('](/docs/', '](/pohon/')
    .replaceAll('to: /docs/', 'to: /pohon/')
    .replaceAll('to="/docs/', 'to="/pohon/');
}

function sectionPages(pages, tag, commit) {
  const route = (page) => page.destination.slice('content/pohon/'.length).replace(/(?:\/1\.index)?\.md$/, '');
  const existing = new Set(pages.map(route));
  const missing = new Set();

  for (const page of pages) {
    const segments = route(page).split('/');
    for (let depth = 1; depth < segments.length; depth++) {
      const path = segments.slice(0, depth).join('/');
      if (!existing.has(path)) {
        missing.add(path);
      }
    }
  }

  const all = [...existing, ...missing];
  return [...missing].sort().map((path) => {
    const name = path.split('/').at(-1);
    const title = name.split('-').map((part) => part === 'ai' ? 'AI' : part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    const children = all
      .filter((child) => child.startsWith(`${path}/`) && child.slice(path.length + 1).split('/').length === 1)
      .sort()
      .map((child) => `- [${child.split('/').at(-1).replaceAll('-', ' ')}](/pohon/${child})`);
    const sourceUrl = `https://github.com/vinicunca/pohon/tree/${commit}/docs/content/docs`;
    return {
      source: `generated:docs/content/docs/${path}`,
      destination: `content/pohon/${path}/1.index.md`,
      rendered: [
        '---',
        `title: ${JSON.stringify(title)}`,
        `description: ${JSON.stringify(`Pohon UI ${title.toLowerCase()} documentation.`)}`,
        'package: pohon',
        `sourceTag: ${JSON.stringify(tag)}`,
        `sourceCommit: ${JSON.stringify(commit)}`,
        `sourceUrl: ${JSON.stringify(sourceUrl)}`,
        '---',
        '',
        `Browse the ${title.toLowerCase()} guides:`,
        '',
        ...children,
        '',
      ].join('\n'),
    };
  });
}

export function renderPohonDocs(checkout, metadata, tag, commit) {
  if (metadata.schemaVersion !== 1 || metadata.package !== 'pohon' || metadata.version !== tag.slice(1)) {
    throw new Error(`Pohon metadata does not match ${tag}`);
  }

  const output = join(checkout, 'docs/.output/public/raw/docs');
  const paths = markdownFiles(output);
  if (paths.length < 150) {
    throw new Error(`Expected complete Pohon docs export; found ${paths.length} pages`);
  }

  const routes = sourceRoutes(checkout);
  const pages = paths.sort().map((path) => {
    const suffix = relative(output, path).split(sep).join('/');
    const source = routes.get(suffix);
    if (!source) {
      throw new Error(`No authored Pohon Markdown matches generated route ${suffix}`);
    }

    const input = readFileSync(path, 'utf8');
    const match = input.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) {
      throw new Error(`Pohon output has no frontmatter: ${suffix}`);
    }

    const frontmatter = match[1].split(/\r?\n/).filter((line) => !line.startsWith('canonical_url:'));
    const sourceUrl = `https://github.com/vinicunca/pohon/blob/${commit}/${source}`;
    frontmatter.push(
      'package: pohon',
      `sourceTag: ${JSON.stringify(tag)}`,
      `sourceCommit: ${JSON.stringify(commit)}`,
      `sourceUrl: ${JSON.stringify(sourceUrl)}`,
    );

    let body = input.slice(match[0].length)
      .replace(/^# [^\n]+\n(?:\n> [^\n]*\n)?\n/, '')
      .replaceAll('https://github.com/vinicunca/pohon/blob/main/', `https://github.com/vinicunca/pohon/blob/${commit}/`)
      .replaceAll('https://github.com/vinicunca/pohon/tree/main/', `https://github.com/vinicunca/pohon/tree/${commit}/`)
      .replace(/:component-(?:props|slots|emits|changelog)/g, '');

    if (suffix.startsWith('components/') && suffix !== 'components.md') {
      const componentName = pascalCase(suffix.slice('components/'.length, -3));
      const component = metadata.components[componentName];
      if (component) {
        body = `${body.trim()}\n\n${componentApi(componentName, component, commit)}\n`;
      }
    }

    body = hubLinks(body);

    return {
      source,
      destination: `content/pohon/${suffix}`,
      rendered: `---\n${frontmatter.join('\n')}\n---\n${body}`,
    };
  });
  return [...pages, ...sectionPages(pages, tag, commit)];
}
