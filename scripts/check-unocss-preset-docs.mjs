// Checks that every utility class shown in content/unocss-preset generates CSS
// with the @vinicunca/unocss-preset version pinned in pnpm-workspace.yaml.
// Run: node scripts/check-unocss-preset-docs.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { createGenerator } from 'unocss';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content/unocss-preset');

// Inline code outside fenced blocks is only checked when it is a complete enter/exit or fluid utility.
// Other inline code is too often a CSS property, keyframe name, or prefix written in prose.
const PRESET_UTILITY = /^(?:(?:fade|zoom|spin|slide)-(?:in|out)|fluid-)/;
// Placeholders such as `slide-in-<direction>` or `fade-(in|out)` are syntax, and `fluid-` is a prefix
const PLACEHOLDER = /[<>{}()|*…]|\.\.\.|[-:]$/;
const CLASS_ATTRIBUTE = /\bclass=(["'])(.*?)\1/g;

// Tokens that are documented on purpose but are not classes this config can generate.
// Keep a reason next to each entry.
const IGNORED = new Map([
  ['group', 'variant marker, generates no CSS on its own'],
  ['peer', 'variant marker, generates no CSS on its own'],
  ['slide-in', 'prose names the prefix'],
  ['slide-out', 'prose names the prefix'],
  ['slide-in-from', 'prose names the prefix'],
  ['slide-out-to', 'prose names the prefix'],
  ['spin-in-[30]', 'documented as wrong usage'],
  ['fluid-$my-var', 'documented as wrong usage'],
  ['+btn', 'alias transformer syntax, expanded in source'],
]);

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      return markdownFiles(path);
    }
    return entry.name.endsWith('.md') ? [path] : [];
  });
}

function extractTokens(markdown) {
  const tokens = [];
  let fence;

  markdown.split('\n').forEach((line, index) => {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})\s*(\w*)/);
    if (fenceMatch) {
      fence = fence ? undefined : fenceMatch[2];
      return;
    }

    if (fence === 'html' || fence === 'vue') {
      for (const [, , value] of line.matchAll(CLASS_ATTRIBUTE)) {
        for (const token of value.split(/\s+/).filter(Boolean)) {
          tokens.push({ token, line: index + 1 });
        }
      }
      return;
    }

    if (fence === undefined) {
      for (const [, , code] of line.matchAll(/(`|<code>)([^`<\s]+)(?:`|<\/code>)/g)) {
        if (PRESET_UTILITY.test(code) && !PLACEHOLDER.test(code)) {
          tokens.push({ token: code, line: index + 1 });
        }
      }
    }
  });

  return tokens.filter(({ token }) => !PLACEHOLDER.test(token) && !IGNORED.has(token));
}

const uno = await createGenerator({
  presets: [
    presetVinicunca({
      preflights: false,
      wind4: { preflights: { reset: false, theme: false } },
      scrollbar: true,
      magicCss: true,
      // The fluid page adds this utility before using `fluid-stroke-1/3`
      fluid: { utilities: [['stroke', ['stroke-width']]] },
    }),
  ],
  // The scrollbar page uses `bg-primary`, which assumes a `primary` theme color
  theme: { colors: { primary: '#000' } },
});

const pages = markdownFiles(contentDir)
  .sort()
  .map((file) => ({ file, tokens: extractTokens(readFileSync(file, 'utf8')) }))
  .filter(({ tokens }) => tokens.length);

const results = await Promise.all(
  pages.map(({ tokens }) => uno.generate(tokens.map(({ token }) => token).join(' '), { preflights: false })),
);

const checked = pages.reduce((count, { tokens }) => count + tokens.length, 0);
const failures = pages.flatMap(({ file, tokens }, index) => tokens
  .filter(({ token }) => !results[index].matched.has(token))
  .map(({ token, line }) => `${relative(root, file)}:${line}  ${token}`));

const version = JSON.parse(readFileSync(join(root, 'node_modules/@vinicunca/unocss-preset/package.json'), 'utf8')).version;

if (failures.length) {
  console.error(`These documented classes generate no CSS with @vinicunca/unocss-preset@${version}:\n`);
  console.error([...new Set(failures)].join('\n'));
  process.exit(1);
}

console.log(`All ${checked} documented classes generate CSS with @vinicunca/unocss-preset@${version}.`);
