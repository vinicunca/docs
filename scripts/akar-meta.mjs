#!/usr/bin/env node
/**
 * Generates `app/data/akar-meta.json`, the API reference of every Akar
 * component, from Akar's tagged source (a port of Reka UI's
 * `docs/scripts/autogen.ts`).
 *
 * Usage:
 *   git -C <akar-repo> archive v2.0.20 | tar -x -C <dir>
 *   pnpm -C <dir> install            # the checker needs Akar's own types
 *   node scripts/akar-meta.mjs <dir> --commit $(git -C <akar-repo> rev-parse v2.0.20^{commit})
 *
 * Props, slots and exposed methods come from vue-component-meta. Event
 * descriptions do not (it reads no JSDoc from emits types), so they are read
 * with Babel from the members of each component's `defineEmits<XEmits>()`
 * type, following type references, intersections and imports.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse as babelParse } from '@babel/parser';
import { glob } from 'tinyglobby';
import { createChecker } from 'vue-component-meta';
import { parse as sfcParse } from 'vue/compiler-sfc';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = join(HUB, 'app/data/akar-meta.json');
const SOURCE_BASE = 'https://github.com/vinicunca/akar/blob';
const moduleCache = new Map();

const args = process.argv.slice(2);
const commitFlag = args.indexOf('--commit');
const commitArg = commitFlag === -1 ? undefined : args.splice(commitFlag, 2)[1];
const root = args[0] ? resolve(args[0]) : undefined;

if (!root || !existsSync(join(root, 'packages/core/src'))) {
  console.error('Usage: node scripts/akar-meta.mjs <akar-checkout> [--commit <sha>]');
  process.exit(1);
}

const core = join(root, 'packages/core');
const src = join(core, 'src');
const version = JSON.parse(readFileSync(join(core, 'package.json'), 'utf8')).version;
const commit = commitArg ?? gitHead(root);
const ref = `v${version}`;

const { components } = await import(pathToFileURL(join(core, 'constant/components.ts')).href)
  .catch(() => ({ components: readComponentList(join(core, 'constant/components.ts')) }));
const documented = new Set(Object.values(components).flat());

const checker = createChecker(join(core, 'tsconfig.app.json'), {
  forceUseTs: true,
  printer: { newLine: 1 },
  // v3 defaults `schema` to false, which collapses unions to their alias name
  // (`Direction`) and drops the slot schema the slot table is built from.
  schema: true,
});

const files = (await glob(['src/**/*.vue', '!src/**/story/**', '!src/**/*.story.vue', '!src/**/_*.vue'], { cwd: core, absolute: true }))
  .filter((file) => documented.has(baseName(file)))
  .sort();

const result = {};
for (const file of files) {
  const name = baseName(file);
  const started = Date.now();
  const meta = checker.getComponentMeta(file);
  const events = emitsDescriptions(file);

  result[name] = {
    source: `${SOURCE_BASE}/${ref}/${relative(root, file)}`,
    description: clean(meta.description ?? ''),
    props: parseProps(meta.props),
    emits: meta.events
      .map((event) => ({
        name: event.name,
        type: tidyType(event.type),
        description: events.get(event.name) ?? '',
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    slots: parseSlots(meta.slots),
    methods: meta.exposed
      .filter((exposed) => typeof exposed.schema === 'object' && exposed.schema.kind === 'event')
      .map((exposed) => ({ name: exposed.name, type: exposed.type, description: clean(exposed.description) })),
  };
  console.log(`${name} (${Date.now() - started}ms)`);
}

const missing = [...documented].filter((name) => !result[name]);
if (missing.length) {
  console.warn(`No source file for: ${missing.join(', ')}`);
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify({ version, commit, components: result }, null, 2)}\n`);
console.log(`Wrote ${Object.keys(result).length} components to ${relative(HUB, OUTPUT)}`);

function parseProps(props) {
  return props
    .filter((prop) => !prop.global)
    .map((prop) => {
      let type = prop.type;
      if (!type.includes('AcceptableValue')) {
        type = typeFromSchema(prop.schema) || type;
      }
      let defaultValue = prop.default;
      if (defaultValue === undefined || defaultValue === 'undefined') {
        defaultValue = jsdocDefault(prop.tags);
      }
      if (prop.name === 'as') {
        defaultValue ??= '"div"';
      }
      return {
        name: prop.name,
        type: tidyType(type),
        required: prop.required,
        default: defaultValue ?? null,
        description: clean(prop.description),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function parseSlots(slots) {
  const defaultSlot = slots?.find((slot) => slot.name === 'default') ?? slots?.[0];
  if (!defaultSlot || defaultSlot.type === '{}' || typeof defaultSlot.schema !== 'object' || !defaultSlot.schema.schema) {
    return [];
  }
  return Object.values(defaultSlot.schema.schema).map((child) => ({
    name: child.name,
    type: tidyType(typeFromSchema(child.schema) || child.type),
    description: clean(child.description),
  }));
}

function typeFromSchema(schema) {
  if (typeof schema === 'string') {
    return schema;
  }
  if (typeof schema !== 'object' || !schema) {
    return '';
  }
  if (schema.kind === 'enum' || schema.kind === 'array') {
    const flat = schema.schema?.every((value) => typeof value === 'string');
    const members = schema.schema?.filter((value) => value !== 'undefined') ?? [];
    if (flat && /^[A-Z]/.test(schema.type)) {
      return members.join(' | ');
    }
    if (typeof schema.schema?.[0] === 'object' && schema.schema[0].kind === 'enum') {
      return schema.schema.map(typeFromSchema).join(' | ');
    }
    return schema.type;
  }
  return schema.type ?? '';
}

function jsdocDefault(tags = []) {
  const tag = tags.find((tag) => tag.name === 'defaultValue' || tag.name === 'default');
  const text = tag?.text?.trim();
  if (!text) {
    return undefined;
  }
  return text.replace(/^`(.*)`$/s, '$1');
}

function tidyType(type) {
  return String(type ?? '').replace(/\s*\|\s*undefined\b/g, '').replace(/^undefined\s*\|\s*/, '').trim();
}

// JSDoc stays Markdown; `{@link url}` becomes a Markdown link. Links to the
// retired `akar.vinicunca.dev/docs` site point at the hub instead.
function clean(text = '') {
  return text
    .replace(/\{@link\s+(\S+?)(?:\s+([^}]+))?\}/g, (_, href, label) => `[${label ?? 'reference'}](${href})`)
    .replace(/https:\/\/akar\.vinicunca\.dev\/docs\//g, '/akar/')
    .replace(/\s*<br\s*\/?>\s*/g, '\n\n')
    .trim();
}

// ---- Event descriptions -------------------------------------------------

function emitsDescriptions(file) {
  const program = parseModule(file);
  const descriptions = new Map();
  if (!program) {
    return descriptions;
  }

  let typeNode;
  walk(program, (node) => {
    if (typeNode) {
      return;
    }
    if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'defineEmits') {
      typeNode = node.typeParameters?.params?.[0];
    }
  });
  if (typeNode) {
    collectMembers(file, typeNode, descriptions, new Set());
  }
  return descriptions;
}

function collectMembers(file, node, out, seen) {
  if (!node) {
    return;
  }
  switch (node.type) {
    case 'TSTypeLiteral':
    case 'TSInterfaceBody':
      for (const member of node.members ?? node.body) {
        if (member.type !== 'TSPropertySignature') {
          continue;
        }
        const key = member.key.type === 'StringLiteral' ? member.key.value : member.key.name;
        const comment = member.leadingComments?.filter((c) => c.type === 'CommentBlock').at(-1);
        // The first declaration wins: an intersection lists the component's
        // own members before the ones it inherits.
        if (key && comment && !out.has(key)) {
          out.set(key, jsdocText(comment.value));
        }
      }
      break;
    case 'TSIntersectionType':
      // Own literal members first, so they win over inherited ones.
      for (const type of node.types.filter((t) => t.type === 'TSTypeLiteral')) {
        collectMembers(file, type, out, seen);
      }
      for (const type of node.types.filter((t) => t.type !== 'TSTypeLiteral')) {
        collectMembers(file, type, out, seen);
      }
      break;
    case 'TSParenthesizedType':
      collectMembers(file, node.typeAnnotation, out, seen);
      break;
    case 'TSTypeReference': {
      const name = node.typeName.type === 'Identifier' ? node.typeName.name : node.typeName.right?.name;
      if (['Omit', 'Pick', 'Partial', 'Required', 'Readonly'].includes(name)) {
        collectMembers(file, node.typeParameters?.params?.[0], out, seen);
        break;
      }
      const found = resolveType(file, name, seen);
      if (found) {
        collectMembers(found.file, found.node, out, seen);
      }
      break;
    }
  }
}

function resolveType(file, name, seen) {
  const id = `${file}#${name}`;
  if (seen.has(id)) {
    return undefined;
  }
  seen.add(id);

  const program = parseModule(file);
  if (!program) {
    return undefined;
  }

  for (const statement of program.body) {
    const declaration = statement.type === 'ExportNamedDeclaration' ? statement.declaration : statement;
    if (declaration?.type === 'TSTypeAliasDeclaration' && declaration.id.name === name) {
      return { file, node: declaration.typeAnnotation };
    }
    if (declaration?.type === 'TSInterfaceDeclaration' && declaration.id.name === name) {
      // `interface A extends B { ... }`: own body, then the extended types.
      return {
        file,
        node: {
          type: 'TSIntersectionType',
          types: [
            { type: 'TSTypeLiteral', members: declaration.body.body },
            ...(declaration.extends ?? []).map((heritage) => ({ type: 'TSTypeReference', typeName: heritage.expression, typeParameters: heritage.typeParameters })),
          ],
        },
      };
    }
  }

  for (const statement of program.body) {
    // import { X } from '...' / import type { X as Y } from '...'
    if (statement.type === 'ImportDeclaration') {
      const specifier = statement.specifiers.find((s) => s.local.name === name && s.type === 'ImportSpecifier');
      if (specifier) {
        const target = resolveModule(file, statement.source.value);
        const imported = specifier.imported.name ?? specifier.imported.value;
        if (target) {
          return resolveType(target, imported, seen);
        }
      }
    }
    // export { X } from '...' / export * from '...'
    if (statement.type === 'ExportNamedDeclaration' && statement.source) {
      const specifier = statement.specifiers.find((s) => (s.exported.name ?? s.exported.value) === name);
      if (specifier) {
        const target = resolveModule(file, statement.source.value);
        if (target) {
          return resolveType(target, specifier.local.name ?? specifier.local.value, seen);
        }
      }
    }
  }
  for (const statement of program.body) {
    if (statement.type === 'ExportAllDeclaration') {
      const target = resolveModule(file, statement.source.value);
      const found = target && resolveType(target, name, seen);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

function resolveModule(from, request) {
  let base;
  if (request.startsWith('@/')) {
    base = join(src, request.slice(2));
  } else if (request.startsWith('.')) {
    base = resolve(dirname(from), request);
  } else {
    return undefined;
  }

  const candidates = [base, `${base}.ts`, `${base}.vue`, join(base, 'index.ts')];
  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
}

function parseModule(file) {
  if (moduleCache.has(file)) {
    return moduleCache.get(file);
  }
  let program;
  try {
    let code = readFileSync(file, 'utf8');
    if (file.endsWith('.vue')) {
      const { descriptor } = sfcParse(code, { filename: file });
      code = [descriptor.script?.content, descriptor.scriptSetup?.content].filter(Boolean).join('\n');
    }
    program = babelParse(code, { sourceType: 'module', plugins: ['typescript'], errorRecovery: true }).program;
  } catch {
    program = undefined;
  }
  moduleCache.set(file, program);
  return program;
}

function walk(node, visit) {
  if (!node || typeof node.type !== 'string') {
    return;
  }
  visit(node);
  for (const key of Object.keys(node)) {
    if (key === 'loc' || key.endsWith('Comments')) {
      continue;
    }
    const value = node[key];
    if (Array.isArray(value)) {
      value.forEach((child) => walk(child, visit));
    } else if (value && typeof value === 'object') {
      walk(value, visit);
    }
  }
}

function jsdocText(raw) {
  return clean(raw
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, ''))
    .filter((line) => !/^@\w/.test(line.trim()))
    .join('\n'));
}

// ---- Helpers -------------------------------------------------------------

function baseName(file) {
  return file.split('/').at(-1).replace(/\.vue$/, '');
}

function gitHead(dir) {
  try {
    return execFileSync('git', ['-C', dir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

// Fallback when Node cannot import the `.ts` constant directly.
function readComponentList(file) {
  const code = readFileSync(file, 'utf8');
  const groups = {};
  for (const match of code.matchAll(/(\w+):\s*\[([^\]]*)\]/g)) {
    groups[match[1]] = [...match[2].matchAll(/'(\w+)'/g)].map((m) => m[1]);
  }
  return groups;
}
