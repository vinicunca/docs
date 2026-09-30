import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcesPath = join(root, 'docs/sources.json');
const lockPath = join(root, 'docs/sources.lock.json');
const sources = JSON.parse(readFileSync(sourcesPath, 'utf8'));
const args = process.argv.slice(2);

function argument(name) {
  const index = args.indexOf(name);
  return index < 0 ? undefined : args[index + 1];
}

function inside(base, relative) {
  if (!relative || isAbsolute(relative) || relative.split(/[\\/]/).includes('..')) {
    throw new Error(`Unsafe path: ${relative}`);
  }

  const path = resolve(base, relative);
  if (!path.startsWith(`${base}${sep}`)) {
    throw new Error(`Path leaves ${base}: ${relative}`);
  }
  return path;
}

function withProvenance(markdown, id, tag, commit, url) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    throw new Error(`${id} source page must have YAML frontmatter`);
  }

  const frontmatter = match[1]
    .split(/\r?\n/)
    .filter((line) => !/^source(?:Tag|Commit|Url):/.test(line));

  if (!frontmatter.some((line) => line.trim() === `package: ${id}`)) {
    throw new Error(`${id} source page needs "package: ${id}" frontmatter`);
  }

  frontmatter.push(
    `sourceTag: ${JSON.stringify(tag)}`,
    `sourceCommit: ${JSON.stringify(commit)}`,
    `sourceUrl: ${JSON.stringify(url)}`,
  );

  return `---\n${frontmatter.join('\n')}\n---\n${markdown.slice(match[0].length)}`;
}

function readmeWithProvenance(markdown, mapping, id, tag, commit, url) {
  if (!mapping.title || !mapping.description || markdown.startsWith('---\n')) {
    throw new Error(`Invalid README mapping for ${mapping.source}`);
  }
  const body = markdown.replace(/^# .+\r?\n(?:\r?\n)?/, '');
  return `---\ntitle: ${JSON.stringify(mapping.title)}\ndescription: ${JSON.stringify(mapping.description)}\npackage: ${id}\nsourceTag: ${JSON.stringify(tag)}\nsourceCommit: ${JSON.stringify(commit)}\nsourceUrl: ${JSON.stringify(url)}\n---\n\n${body}`;
}

function contentFiles(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const path = join(directory, entry.name);
      if (entry.isSymbolicLink()) {
        throw new Error(`Symlinks are not allowed in docs sources: ${path}`);
      }
      if (entry.isDirectory()) {
        return contentFiles(path);
      }
      return entry.isFile() && (entry.name.endsWith('.md') || entry.name === '.navigation.yaml') ? [path] : [];
    });
}

const id = argument('--package');
const tag = argument('--tag');
const write = args.includes('--write');
const source = sources.packages[id];

if (!id || !tag || !source) {
  throw new Error('Usage: node scripts/sync-docs.mjs --package <id> --tag <tag> [--write]');
}
if (!source.tagPattern || !new RegExp(source.tagPattern).test(tag)) {
  throw new Error(`Tag ${tag} is not accepted for ${id}`);
}
if (!(source.pages?.length || source.directories?.length || source.metadata)) {
  throw new Error(`${id} has no approved content mapping yet`);
}
if (!/^(?:vinicunca|praburangki)\/[a-z0-9-]+$/.test(source.repository)) {
  throw new Error(`Invalid repository for ${id}`);
}

const temp = mkdtempSync(join(tmpdir(), `vinicunca-docs-${id}-`));

try {
  const checkout = join(temp, 'source');
  execFileSync('git', [
    'clone',
    '--quiet',
    '--depth',
    '1',
    '--branch',
    tag,
    '--single-branch',
    `https://github.com/${source.repository}.git`,
    checkout,
  ], { stdio: 'pipe' });

  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: checkout, encoding: 'utf8' }).trim();
  const taggedCommit = execFileSync('git', ['rev-parse', `refs/tags/${tag}^{commit}`], { cwd: checkout, encoding: 'utf8' }).trim();
  if (commit !== taggedCommit) {
    throw new Error(`Checkout does not match ${tag}`);
  }

  const pageMaps = [...(source.pages ?? [])];
  for (const mapping of source.directories ?? []) {
    const sourceDirectory = inside(checkout, mapping.source);
    if (!existsSync(sourceDirectory) || !statSync(sourceDirectory).isDirectory()) {
      throw new Error(`${tag} does not contain docs directory ${mapping.source}`);
    }
    for (const path of contentFiles(sourceDirectory)) {
      const suffix = relative(sourceDirectory, path);
      pageMaps.push({
        source: join(mapping.source, suffix),
        destination: join(mapping.destination, suffix),
      });
    }
  }

  const prepared = pageMaps.map((mapping) => {
    const { source: sourcePath, destination } = mapping;
    const markdownFile = sourcePath.endsWith('.md') && destination.endsWith('.md');
    const navigationFile = sourcePath.endsWith('/.navigation.yaml') && destination.endsWith('/.navigation.yaml');
    if ((!markdownFile && !navigationFile) || !destination.startsWith('content/')) {
      throw new Error(`Unsupported page mapping: ${sourcePath} -> ${destination}`);
    }

    const input = inside(checkout, sourcePath);
    const output = inside(root, destination);
    if (!existsSync(input)) {
      throw new Error(`${tag} does not contain ${sourcePath}`);
    }

    const sourceUrl = `https://github.com/${source.repository}/blob/${commit}/${sourcePath}`;
    const content = readFileSync(input, 'utf8');
    const rendered = markdownFile
      ? mapping.format === 'readme'
        ? readmeWithProvenance(content, mapping, id, tag, commit, sourceUrl)
        : withProvenance(content, id, tag, commit, sourceUrl)
      : content;
    const digest = createHash('sha256').update(rendered).digest('hex');
    return { destination, output, rendered, digest, source: sourcePath };
  });

  if (source.metadata) {
    if (!(
      (id === 'perkakas' && source.metadata.destination === 'server/data/metadata.json')
      || (id === 'akar' && source.metadata.destination === 'server/data/akar-components.json')
      || (id === 'pohon' && source.metadata.destination === 'server/data/pohon-components.json'
        && source.generatedDocs === 'pohon-nuxt-raw')
    )) {
      throw new Error(`Unsupported metadata mapping for ${id}`);
    }

    execFileSync('pnpm', ['install', '--frozen-lockfile', '--ignore-scripts'], {
      cwd: checkout,
      stdio: 'inherit',
    });
    let rendered;
    if (id === 'perkakas') {
      const { generatePerkakasMetadata } = await import('./generate-perkakas.mjs');
      rendered = await generatePerkakasMetadata(checkout, commit);
    } else {
      if (id === 'pohon') {
        execFileSync('pnpm', ['run', 'dev:prepare'], { cwd: checkout, stdio: 'inherit' });
      }
      const metadataOutput = join(temp, `${id}-components.json`);
      execFileSync('pnpm', ['run', 'docs:meta', metadataOutput], {
        cwd: checkout,
        stdio: 'inherit',
      });
      rendered = readFileSync(metadataOutput, 'utf8');
      let pages;
      if (id === 'akar') {
        const { renderAkarReference } = await import('./render-akar-reference.mjs');
        pages = renderAkarReference(JSON.parse(rendered), tag, commit);
      } else {
        execFileSync('pnpm', ['--filter', 'pohon-ui-docs', 'generate'], {
          cwd: checkout,
          stdio: 'inherit',
        });
        const { renderPohonDocs } = await import('./render-pohon-docs.mjs');
        pages = renderPohonDocs(checkout, JSON.parse(rendered), tag, commit);
      }
      for (const page of pages) {
        prepared.push({
          ...page,
          output: inside(root, page.destination),
          digest: createHash('sha256').update(page.rendered).digest('hex'),
        });
      }
    }
    prepared.push({
      source: id === 'perkakas'
        ? 'generated:src/index.ts'
        : id === 'akar' ? 'generated:packages/core/src/index.ts' : 'generated:src/runtime/components',
      destination: source.metadata.destination,
      output: inside(root, source.metadata.destination),
      rendered,
      digest: createHash('sha256').update(rendered).digest('hex'),
    });
  }

  const destinations = prepared.map((page) => page.destination);
  if (new Set(destinations).size !== destinations.length) {
    throw new Error(`${id} maps more than one page to the same destination`);
  }

  if (write) {
    const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
    const previousFiles = lock.packages[id]?.files ?? [];
    const currentDestinations = new Set(destinations);

    for (const previous of previousFiles) {
      if (!currentDestinations.has(previous.destination)) {
        throw new Error(`${id} removed ${previous.destination}; add a route or artifact migration before syncing`);
      }

      const existing = inside(root, previous.destination);
      if (!existsSync(existing)) {
        throw new Error(`Previously synced page is missing: ${previous.destination}`);
      }
      const digest = createHash('sha256').update(readFileSync(existing)).digest('hex');
      if (digest !== previous.sha256) {
        throw new Error(`Previously synced page changed locally: ${previous.destination}`);
      }
    }

    for (const page of prepared) {
      mkdirSync(dirname(page.output), { recursive: true });
      writeFileSync(page.output, page.rendered);
    }

    lock.packages[id] = {
      tag,
      commit,
      files: prepared.map(({ source: sourcePath, destination, digest }) => ({
        source: sourcePath,
        destination,
        sha256: digest,
      })),
    };
    writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`);
  }

  console.log(`${write ? 'Synced' : 'Ready to sync'} ${id}@${tag} (${commit.slice(0, 12)}): ${prepared.length} page(s)`);
} finally {
  rmSync(temp, { recursive: true, force: true });
}
