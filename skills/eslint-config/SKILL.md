---
name: eslint-config
description: Set up, configure and write code that passes @vinicunca/eslint-config, the `vinicuncaESLint()` flat config that lints and formats JS, TS, Vue, JSON, YAML, TOML and Markdown. Use when creating or editing `eslint.config.*`, enabling a framework integration or formatter, overriding or renaming rules, fixing lint errors, or writing code in a project that depends on `@vinicunca/eslint-config`.
---

# @vinicunca/eslint-config

Shareable ESLint **flat** config (v6) that lints **and** formats code. It replaces Prettier for JS/TS/Vue/JSON/YAML/TOML/Markdown code blocks. It is a fork of [antfu/eslint-config](https://github.com/antfu/eslint-config) with a different code style. Peer: ESLint `^10.0.0` (ESLint 9 is not supported since v6).

## Setup

```bash
pnpm add -D eslint @vinicunca/eslint-config
```

`eslint-plugin-slop` and `eslint-plugin-sonarjs` are dependencies of the config, so don't install them yourself. `Cannot find package 'eslint-plugin-sonarjs'` means the project is on v5.7.1 or older: upgrade to v6 (see [migrating](https://vinicunca.dev/raw/eslint/guides/migrating.md)).

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

- Use the **named** export `vinicuncaESLint`. The package has no default export, no CLI wizard and no `angular` option. `pnpm dlx @antfu/eslint-config` installs antfu's package, not this one.
- Without `"type": "module"` in `package.json`, name the file `eslint.config.mjs`. `eslint.config.ts` gives typed options.
- Auto-detected: TypeScript (`typescript` or `@typescript/native-preview` installed), Vue (`vue`, `nuxt`, `vitepress` or `@slidev/cli` installed), pnpm rules (`pnpm-workspace.yaml` in the current directory or a parent). Pass `true` or `false` to override detection.
- On by default: JS, JSX parsing, JSON/JSONC/JSON5, YAML, TOML, Markdown, Vitest rules for test files, Node, JSDoc, regexp, e18e, `antislop` (experimental, turn off with `antislop: false`), `.gitignore` patterns.
- Opt-in: `react`, `nextjs`, `svelte`, `solid`, `astro`, `unocss`, `formatters`, and `typescript.tsconfigPath` (type-aware rules).

Scripts: `"lint": "eslint"` and `"lint:fix": "eslint --fix"`. For VS Code settings, Neovim and git hooks, see [getting started](https://vinicunca.dev/raw/eslint/getting-started.md).

## Running ESLint

- Run the project binary: `pnpm eslint --fix` (or `pnpm exec eslint`, `npx eslint`). `pnpx eslint` and `pnpm dlx eslint` download a separate ESLint that cannot load this config's plugins.
- **Editor detection affects agents.** If the environment has `VSCODE_PID`, `VSCODE_CWD`, `JETBRAINS_IDE`, `VIM`, `NVIM` or `ZED_ENVIRONMENT`, the config prints `Detected running in editor, some rules are disabled.` and stops autofixing `prefer-const`, `unused-imports/no-unused-imports` and `test/no-only-tests`. An agent started from an editor terminal inherits these variables. Run `CI=1 pnpm eslint --fix` so every fix applies.
- Missing peer plugins trigger an install prompt only in an interactive terminal (TTY, not CI). In non-interactive runs, install each plugin yourself (see [Frameworks](#frameworks)).
- Do not run Prettier on JS/TS. It fights the stylistic rules. Prettier runs only inside ESLint as `format/prettier`, through `formatters`.

## Code conventions

Write code in this style from the start, then run `pnpm eslint --fix`. Most rules autofix. Rules marked **(manual)** do not, so get them right yourself. For before/after examples and the full list, read [references/style-rules.md](references/style-rules.md).

**Formatting**
- 2-space indent, single quotes, **semicolons on**, trailing commas on multiline literals, `(x) => x` (arrow parameters always in parentheses).
- Braces on **every** block (`curly: 'all'`). JS/TS use **`1tbs`** (`} else {`), not stroustrup, with no single-line blocks: `if (!x) return;` becomes a three-line block.
- One statement per line. Operators start the wrapped line (`operator-linebreak: before`). A multiline ternary puts each part on its own line.
- Lists (arrays, objects, arguments, parameters) go all on one line or one item per line (`antfu/consistent-list-newline`).
- Object keys use `consistent-as-needed` quotes: if one key needs quotes, quote them all.
- Top-level functions are `function` declarations. `antfu/top-level-function` rewrites `const fn = () => {}`. Callbacks stay arrows (`prefer-arrow-callback`).

**JavaScript and Node**
- No em dashes (U+2014) anywhere, including comments, strings, YAML and Markdown prose **(manual)**: `slop/no-em-dash`. Keep functions under the `sonarjs/cognitive-complexity` threshold (15) **(manual)**.
- `const`/`let` only. No nested ternaries **(manual)**, no `for...in` **(manual)**, no `await` inside loops **(manual)**: collect promises and use `Promise.all`.
- No top-level `await` **(manual)**, except in `scripts/`, `cli/`, `*.config.*`, test files and Vue SFCs.
- `console` allows only `.warn` and `.error` **(manual)**. `console.log` is fine in `scripts/`, `cli/`, `*.config.*` and Markdown code blocks.
- Import Node globals **(manual)**: `import process from 'node:process'`, `import { Buffer } from 'node:buffer'`. Use the `node:` prefix for builtins. Use `globalThis`, not `global` or `self`.
- `===` (smart), object shorthand, template literals over concatenation, `throw new Error('message')`.
- Unused variables and arguments: prefix with `_`.

**Imports** (`perfectionist`, natural ascending order, autofix)
- Type imports first, then builtin, external, internal, parent/sibling/index, then side-effect imports. Named specifiers are sorted too.
- Type-only imports use a separate top-level `import type { Foo } from '...'`, not inline `import { type Foo }`.
- Turn off the editor's organize-imports action (`"source.organizeImports": "never"`).

**TypeScript** (`ts/*`)
- `Array<T>`, not `T[]`. `interface` for object shapes, not `type X = { ... }`. Property-style method signatures: `fn: () => void`.
- `any` and non-null assertions (`!`) are allowed. `@ts-expect-error` needs a description **(manual)**; `@ts-ignore` is banned.
- No `const enum`, `export =` or `require()` in TS files **(manual)**.
- With `type: 'lib'`, functions need explicit return types **(manual)**. Expressions, higher-order functions and IIFEs are exempt.

**Vue SFC**
- Block order: `<script>`, `<template>`, `<style>`. Macro order: `defineOptions`, `defineProps`, `defineEmits`, `defineSlots`.
- PascalCase components in templates, camelCase props and events (`update:modelValue` is fine), **double** quotes on attributes.
- An element with two or more attributes puts each attribute on its own line (`vue/max-attributes-per-line`).

**Tests** (`*.test.*`, `*.spec.*`, `__tests__/**`): use `it()`, not `test()`. Titles start lowercase. Hooks go in order. No `.only`.

**Data files**: keys in `package.json` and `tsconfig*.json` are sorted. YAML prefers single quotes.

## Overriding rules

Write the **short** plugin prefixes: `ts/` (not `@typescript-eslint/`), `style/`, `react/`, `next/`, `node/`, `import/`, `test/`, `yaml/`. Choose the narrowest place that works:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    // 1. Integration overrides: keep that integration's files glob
    typescript: { overrides: { 'ts/no-explicit-any': 'error' } },
    vue: { overrides: { 'vue/max-attributes-per-line': 'off' } },
    // 2. Global rules on the first argument (never `files` here: the factory throws)
    rules: { 'no-console': 'off' },
  },
  // 3. Extra flat configs, appended last, so they win
  {
    files: ['scripts/**/*.ts'],
    rules: { 'antfu/no-top-level-await': 'off' },
  },
)
  // 4. Composer: patch a generated config by name, or a rule everywhere
  .override('vinicunca/stylistic/rules', {
    rules: { 'style/brace-style': ['error', 'stroustrup', { allowSingleLine: true }] },
  })
  .overrideRules({ 'antfu/top-level-function': 'off' });
```

- `ignores` on the first argument **extends** the built-in ignore list. A function `(originals) => [...]` replaces it.
- These options are accepted but do **nothing** in v6. Use an extra config or `.overrideRules()` instead:
  - `lessOpinionated`
  - `stylistic.braceStyle` (reaches only `vue/brace-style`)
  - `unicorn.overrides`, `unocss.overrides`
  - `vue.vueVersion`
- Remove a whole generated config: `.remove('vinicunca/command/rules')`. Config names always start with `vinicunca/`. List them with `pnpm eslint --inspect-config`.

For every option with its default, and the composer method list, read [references/options.md](references/options.md).

## Frameworks

| Option | Install yourself | Notes |
| --- | --- | --- |
| `vue` | (bundled) | Auto-detected. `a11y: true` needs `eslint-plugin-vuejs-accessibility` |
| `react: true` | `@eslint-react/eslint-plugin`, `eslint-plugin-react-refresh` | Not `eslint-plugin-react` or `eslint-plugin-react-hooks`. Rules are `react/*` |
| `nextjs: true` | `@next/eslint-plugin-next` | Enable `react` as well |
| `svelte: true` | `eslint-plugin-svelte`, `svelte-eslint-parser` | |
| `solid: true` | `eslint-plugin-solid` | |
| `astro: true` | `eslint-plugin-astro`, `astro-eslint-parser` | Never prompts. Install both |
| `unocss: true` | (bundled) | `{ attributify, strict, configPath }` |
| `jsx: { a11y: true }` | `eslint-plugin-jsx-a11y` | JSX accessibility lives here, not under `react` |
| `formatters: true` | (bundled) | CSS, HTML, GraphQL, Markdown via Prettier. XML/SVG need `@prettier/plugin-xml`; Astro needs `prettier-plugin-astro` |
| `antislop` | (bundled) | On by default, experimental. `false` turns it off |

Type-aware rules: `typescript: { tsconfigPath: 'tsconfig.json' }`. This adds `ts/no-floating-promises`, `ts/no-unsafe-*`, `ts/strict-boolean-expressions` and similar rules, and linting gets slower.

## Docs

Fetch the raw Markdown when you need prose beyond this skill:

- Getting started (install, editors, git hooks): https://vinicunca.dev/raw/eslint/getting-started.md
- Configuration overview (factory, generated config order, composer): https://vinicunca.dev/raw/eslint/configuration.md
- Options: https://vinicunca.dev/raw/eslint/configuration/options.md
- Frameworks: https://vinicunca.dev/raw/eslint/configuration/frameworks.md
- Formatters: https://vinicunca.dev/raw/eslint/configuration/formatters.md
- TypeScript: https://vinicunca.dev/raw/eslint/configuration/typescript.md
- Rules and renaming: https://vinicunca.dev/raw/eslint/configuration/rules-overrides.md
- Optional configs (antislop, pnpm, e18e, regexp, command): https://vinicunca.dev/raw/eslint/configuration/optional-configs.md
- Differences from antfu: https://vinicunca.dev/raw/eslint/guides/differences-from-antfu.md
- Migrating (v5 to v6, Prettier, antfu, eslintrc): https://vinicunca.dev/raw/eslint/guides/migrating.md
- Config inspector: https://vinicunca.dev/raw/eslint/guides/config-inspector.md
- FAQ: https://vinicunca.dev/raw/eslint/guides/faq.md
