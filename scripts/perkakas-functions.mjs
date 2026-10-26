/**
 * Builds `app/data/perkakas-functions.json`, the data behind the Perkakas
 * function reference (`content/perkakas/2.functions`), the way Remeda's docs
 * build theirs: TypeDoc reads the JSDoc of every export, and each function
 * becomes one slim record grouped by its `@category`.
 *
 *   node scripts/perkakas-functions.mjs
 *
 * TypeDoc runs on the SOURCE checkout of Perkakas, not on the installed
 * declarations: `dist/index.d.ts` keeps the JSDoc, but it is one bundled file,
 * so every source link would point into it. The checkout is
 * `$PERKAKAS_SOURCE` (default: `../perkakas`, next to this repo) and must hold
 * the tag of the version the hub installs, with `src/` unchanged from that tag,
 * so the reference documents exactly what `@vinicunca/perkakas` ships. Its
 * `node_modules` must be installed (the types import `type-fest`).
 *
 * Everything that costs time at render is done here: Prettier formats the
 * signatures and examples, and Shiki highlights them with the site's themes,
 * so the page only prints HTML. Summaries stay Markdown (the page renders
 * them with the site's parser, the raw `.md` output writes them as is).
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { format } from 'prettier';
import { createHighlighter } from 'shiki';
import { Application, OptionDefaults, ReflectionKind } from 'typedoc';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = join(ROOT, 'app/data/perkakas-functions.json');
const REPOSITORY = 'https://github.com/vinicunca/perkakas';
// The themes `app/utils/markdown.ts` highlights with, so these blocks match
// every other code block: `main.css` swaps to `--shiki-dark` in dark mode.
const THEMES = { light: 'material-theme-lighter', dark: 'material-theme-palenight' };
const FALLBACK_CATEGORY = 'Other';
const unformatted = [];
const SIMPLE_REFERENCES = new Set(['Array', 'ReadonlyArray', 'Promise', 'Record', 'Map', 'Set', 'Date', 'RegExp', 'Error']);

const installed = JSON.parse(readFileSync(join(realpathSync(join(ROOT, 'node_modules/@vinicunca/perkakas')), 'package.json'), 'utf8'));
const version = installed.version;
const tag = `v${version}`;
const source = resolve(process.env.PERKAKAS_SOURCE ?? join(ROOT, '../perkakas'));

checkSource();

const app = await Application.bootstrap({
  entryPoints: [join(source, 'src/index.ts')],
  tsconfig: join(source, 'tsconfig.typedoc.json'),
  excludeInternal: true,
  // Type errors in implementation bodies don't change the declarations read here.
  skipErrorChecking: true,
  // Links are built from each reflection's file and line, see `sourceUrl`.
  disableGit: true,
  sourceLinkTemplate: `${REPOSITORY}/blob/${tag}/{path}#L{line}`,
  defaultCategory: FALLBACK_CATEGORY,
  jsDocCompatibility: { exampleTag: false },
  blockTags: [...OptionDefaults.blockTags, '@dataFirst', '@dataLast', '@lazy', '@signature'],
  modifierTags: [...OptionDefaults.modifierTags, '@strict', '@indexed', '@pipeable'],
  logLevel: 'Warn',
});

const project = await app.convert();
if (!project) {
  throw new Error('TypeDoc could not convert the Perkakas sources');
}
const json = app.serializer.projectToObject(project, source);

const highlighter = await createHighlighter({ themes: Object.values(THEMES), langs: ['typescript'] });

const reflections = (json.children ?? []).filter(({ kind }) => kind === ReflectionKind.Function || kind === ReflectionKind.Variable || kind === ReflectionKind.TypeAlias);
const names = new Set(reflections.map(({ name }) => name));
const categoryOf = new Map();
for (const { title, children = [] } of json.categories ?? []) {
  for (const id of children) {
    categoryOf.set(id, title);
  }
}

const functions = [];
for (const reflection of reflections) {
  const record = reflection.kind === ReflectionKind.Function
    ? await transformFunction(reflection)
    : await transformDeclaration(reflection);
  if (record) {
    functions.push(record);
  }
}

functions.sort((a, b) => compareCategories(a.category, b.category) || a.name.localeCompare(b.name));

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify({ version, generatedAt: new Date().toISOString(), functions }, null, 2)}\n`);

const categories = [...new Set(functions.map(({ category }) => category))];
if (unformatted.length) {
  console.log(`Prettier could not parse ${unformatted.length} snippets, kept as written:\n  ${unformatted.join('\n  ')}`);
}
console.log(`Wrote ${functions.length} entries in ${categories.length} categories for @vinicunca/perkakas ${version} to ${relative(ROOT, OUTPUT)}`);

function checkSource() {
  const git = (...args) => execFileSync('git', ['-C', source, ...args], { encoding: 'utf8' }).trim();
  const checkout = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'));
  if (checkout.name !== installed.name) {
    throw new Error(`${source} is not a Perkakas checkout (set PERKAKAS_SOURCE)`);
  }
  try {
    git('rev-parse', '--verify', '--quiet', `refs/tags/${tag}`);
  } catch {
    throw new Error(`${source} has no tag ${tag} (the installed version): run \`git fetch --tags\` there`);
  }
  try {
    git('diff', '--quiet', tag, '--', 'src');
  } catch {
    throw new Error(`src/ in ${source} differs from ${tag}: check out ${tag} there so the reference matches the installed package`);
  }
}

async function transformFunction(reflection) {
  const signatures = (reflection.signatures ?? []).filter((signature) => signature.comment);
  if (!signatures.length) {
    return;
  }

  const [{ comment }] = signatures;
  // Overloads sharing one `@signature` line only differ in their types, and
  // TypeDoc copies the first comment onto overloads that have none of their own.
  const documented = signatures.some(({ comment }) => tagText(comment, '@signature'))
    ? signatures.filter(({ comment }) => tagText(comment, '@signature'))
    : signatures.slice(0, 1);
  const seen = new Set();
  const records = [];
  for (const signature of documented) {
    const record = await transformSignature(signature);
    if (seen.has(record.signature)) {
      continue;
    }
    seen.add(record.signature);
    records.push(record);
  }
  // Data-first before data-last, overload order otherwise.
  records.sort((a, b) => Number(a.variant === 'data-last') - Number(b.variant === 'data-last'));

  return {
    name: reflection.name,
    kind: 'function',
    category: categoryOf.get(reflection.id) ?? FALLBACK_CATEGORY,
    summary: summaryMarkdown(comment.summary),
    tags: {
      lazy: signatures.some(({ comment }) => hasTag(comment, '@lazy') || hasTag(comment, '@pipeable')),
      strict: hasTag(comment, '@strict'),
      indexed: hasTag(comment, '@indexed'),
      deprecated: hasTag(documented[0].comment, '@deprecated'),
    },
    signatures: records,
    sourceUrl: sourceUrl(reflection),
  };
}

async function transformSignature(signature) {
  const { comment } = signature;
  const raw = tagText(comment, '@signature');
  const example = tagText(comment, '@example');
  const variant = hasTag(comment, '@dataFirst') ? 'data-first' : hasTag(comment, '@dataLast') ? 'data-last' : null;

  const formattedSignature = raw === undefined ? undefined : await formatCode(raw, { printWidth: Number.POSITIVE_INFINITY, signature: true });
  const formattedExample = example === undefined ? undefined : await formatCode(example);

  return {
    variant,
    signature: formattedSignature,
    signatureHtml: formattedSignature === undefined ? undefined : highlight(formattedSignature),
    example: formattedExample,
    exampleHtml: formattedExample === undefined ? undefined : highlight(formattedExample),
    params: (signature.parameters ?? []).map(({ name, comment, flags, defaultValue }) => ({
      name: flags?.isRest ? `...${name}` : name,
      optional: Boolean(flags?.isOptional || defaultValue !== undefined),
      description: comment ? plainMarkdown(comment.summary) : undefined,
    })),
    returns: {
      type: returnType(signature.type),
      description: tagText(comment, '@returns', plainMarkdown),
    },
  };
}

// Constants and types have no call signatures: their declaration stands in
// for one, so the card still shows what the export is.
async function transformDeclaration(reflection) {
  const keyword = reflection.kind === ReflectionKind.Variable ? 'const' : 'type';
  const declaration = reflection.kind === ReflectionKind.Variable
    ? `declare const ${reflection.name}: ${typeToString(reflection.type)}`
    : `type ${reflection.name}${typeParameters(reflection.typeParameters)} = ${typeToString(reflection.type)}`;
  const formatted = await formatCode(declaration);

  return {
    name: reflection.name,
    kind: keyword === 'const' ? 'constant' : 'type',
    category: categoryOf.get(reflection.id) ?? FALLBACK_CATEGORY,
    summary: reflection.comment ? summaryMarkdown(reflection.comment.summary) : undefined,
    tags: { lazy: false, strict: false, indexed: false, deprecated: false },
    signatures: [{
      variant: null,
      signature: formatted,
      signatureHtml: highlight(formatted),
      example: undefined,
      exampleHtml: undefined,
      params: [],
      returns: undefined,
    }],
    sourceUrl: sourceUrl(reflection),
  };
}

// The paths TypeDoc puts in its own links drop the `src/` it resolved them from.
function sourceUrl({ sources }) {
  const [first] = sources ?? [];
  return first ? `${REPOSITORY}/blob/${tag}/${first.fileName}#L${first.line}` : undefined;
}

/**
 * The summary as Markdown, with every `code` span naming another Perkakas
 * export linked to its card, unless the author already made it a link.
 */
function summaryMarkdown(parts = []) {
  if (!parts.length) {
    return;
  }

  return parts.map((part, index) => {
    if (part.kind === 'inline-tag') {
      return names.has(part.text) ? `[\`${part.text}\`](#${part.text})` : `\`${part.text}\``;
    }
    if (part.kind !== 'code') {
      return part.text;
    }

    const code = part.text.replace(/^`+|`+$/g, '');
    if (!names.has(code)) {
      return part.text;
    }
    if (parts[index - 1]?.text.endsWith('[') && parts[index + 1]?.text.startsWith(']')) {
      return part.text;
    }

    return `[${part.text}](#${code})`;
  }).join('').trim();
}

function plainMarkdown(parts = []) {
  const text = parts.map(({ kind, text }) => kind === 'inline-tag' ? `\`${text}\`` : text).join('').trim();
  return text || undefined;
}

function hasTag(comment, name) {
  return Boolean(comment?.blockTags?.some(({ tag }) => tag === name) || comment?.modifierTags?.includes(name));
}

function tagText(comment, name, render = (parts) => parts.map(({ text }) => text).join('')) {
  const block = comment?.blockTags?.find(({ tag }) => tag === name);
  if (!block?.content.length) {
    return;
  }
  const text = render(block.content);
  return text?.trim() ? text : undefined;
}

/**
 * JSDoc code is written indented under its tag, and a few older comments
 * still call functions through the `P.` namespace the docs no longer import.
 */
function cleanCode(code) {
  const lines = code.replace(/^\n+|\s+$/g, '').split('\n');
  const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.match(/^\s*/)[0].length));
  return lines.map((line) => line.slice(indent)).join('\n').replace(/\bP\.(?=[a-z])/g, '');
}

async function formatCode(code, { printWidth = 80, signature = false } = {}) {
  const cleaned = cleanCode(code);
  try {
    const formatted = await format(cleaned, { parser: 'typescript', singleQuote: true, printWidth });
    return signature ? formatted.trim().replace(/;$/gm, '') : formatted.trimEnd();
  } catch {
    // Signatures like `pipe(data, op1, ..., opN)` are notation, not code.
    unformatted.push(cleaned.split('\n')[0]);
    return signature ? cleaned.replace(/;$/gm, '') : cleaned;
  }
}

function highlight(code) {
  const html = highlighter.codeToHtml(code, { lang: 'typescript', themes: THEMES, defaultColor: 'light' });
  // Only the lines: the page wraps them in its own `<pre>`.
  return html.replace(/^<pre[^>]*><code>/, '').replace(/<\/code><\/pre>$/, '');
}

/** A one-word return type in the spirit of Remeda's cards, not the full TypeScript type. */
function returnType(type) {
  if (!type) {
    return 'void';
  }
  switch (type.type) {
    case 'intrinsic':
      return type.name;
    case 'literal':
      return JSON.stringify(type.value);
    case 'array':
      return 'Array';
    case 'tuple':
      return 'Array';
    case 'predicate':
      return 'boolean';
    case 'reference':
      return SIMPLE_REFERENCES.has(type.name) ? (type.name === 'ReadonlyArray' ? 'Array' : type.name) : 'Object';
    case 'reflection':
      return type.declaration?.signatures?.length ? 'Function' : 'Object';
    case 'union': {
      const members = [...new Set(type.types.map(returnType))];
      return members.join(' | ');
    }
    default:
      return 'Object';
  }
}

function typeParameters(parameters) {
  return parameters?.length ? `<${parameters.map(({ name }) => name).join(', ')}>` : '';
}

/** Enough of TypeDoc's type model to print the few non-function exports. */
function typeToString(type) {
  if (!type) {
    return 'unknown';
  }
  switch (type.type) {
    case 'intrinsic':
      return type.name;
    case 'literal':
      return typeof type.value === 'string' ? `'${type.value}'` : String(type.value);
    case 'reference':
      return `${type.name}${type.typeArguments?.length ? `<${type.typeArguments.map(typeToString).join(', ')}>` : ''}`;
    case 'array':
      return `${typeToString(type.elementType)}[]`;
    case 'union':
      return type.types.map(typeToString).join(' | ');
    case 'indexedAccess':
      return `${typeToString(type.objectType)}[${typeToString(type.indexType)}]`;
    case 'typeOperator':
      return `${type.operator} ${typeToString(type.target)}`;
    case 'conditional':
      return `${typeToString(type.checkType)} extends ${typeToString(type.extendsType)} ? ${typeToString(type.trueType)} : ${typeToString(type.falseType)}`;
    case 'mapped':
      return `{ [${type.parameter} in ${typeToString(type.parameterType)}]${type.optionalModifier === '+' ? '?' : ''}: ${typeToString(type.templateType)} }`;
    case 'reflection': {
      const children = type.declaration?.children ?? [];
      return `{ ${children.map((child) => `${child.flags?.isReadonly ? 'readonly ' : ''}${child.name}: ${typeToString(child.type)}`).join('; ')} }`;
    }
    default:
      return 'unknown';
  }
}

function compareCategories(a, b) {
  const rank = (category) => (category === 'Deprecated' ? 2 : category === FALLBACK_CATEGORY ? 1 : 0);
  return rank(a) - rank(b) || a.localeCompare(b);
}
