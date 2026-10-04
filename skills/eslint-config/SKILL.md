---
name: eslint-config
description: Set up and follow @vinicunca/eslint-config — Vinicunca's flat ESLint config with formatting. Use when adding ESLint to a JS/TS/Vue project, writing code linted by this config, or overriding vinicuncaESLint options.
---

# @vinicunca/eslint-config

Shareable ESLint **flat** config. Lints and formats JS, TS, Vue, JSON, YAML, TOML and Markdown. Fork of [antfu/eslint-config](https://github.com/antfu/eslint-config) with different style defaults.

Docs: [getting started](https://vinicunca.dev/raw/eslint/getting-started.md) · [options](https://vinicunca.dev/raw/eslint/configuration/options.md) · [frameworks](https://vinicunca.dev/raw/eslint/configuration/frameworks.md) · [conventions below]

## When to use

- Scaffolding `eslint.config.js` in a Vinicunca or Vue/TS app
- Writing or reviewing code that must pass `pnpm eslint --fix`
- Overriding rules (use `ts/*`, `style/*`, `react/*` — not `@typescript-eslint/*`)

## Setup

```bash
pnpm add -D eslint @vinicunca/eslint-config
```

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

Named export only — **no default export**, **no CLI wizard**, **no `angular` option**. ESLint `^9.39.1 || ^10`.

If ESLint fails with `Cannot find package 'eslint-plugin-sonarjs'`, install that plugin (v5.7.1 imports it at load time).

Vue auto-enables when `vue` / `nuxt` / `vitepress` / `@slidev/cli` is installed. TypeScript auto-enables when `typescript` is installed. pnpm workspace rules auto-enable when `pnpm-workspace.yaml` exists.

Opt-in: `react`, `nextjs`, `svelte`, `solid`, `astro`, `unocss`, `formatters`, `antislop`. React needs `@eslint-react/eslint-plugin` and `eslint-plugin-react-refresh` (not react-hooks).

## Conventions (always follow)

Match auto-fix so you don't fight the linter:

- **Indent** 2 spaces. **Single quotes**. **Semicolons on**.
- **Braces on every block** (`curly: 'all'`). JS/TS brace style is **`1tbs`**: `} else {` on one line (not stroustrup). Vue templates use stroustrup.
- **Arrow parens always**: `(x) => x`, never `x => x`.
- **Top-level functions** are `function` declarations, not `const fn = () =>`. Arrow callbacks are fine (`prefer-arrow-callback`).
- **Trailing commas** on multiline. Object shorthand. Prefer template literals. `===` except smart eqeqeq cases.
- **`Array<T>`**, not `T[]`. Prefer **`interface`** over `type`. Type-only imports: `import type { Foo } from '…'` (top-level, not inline `import { type Foo }`).
- Method signatures as properties: `{ fn: () => void }`, not `{ fn(): void }`.
- Unused vars/args: prefix `_`. `any` and non-null assertions are allowed.
- **`no-console`**: only `console.warn` and `console.error` (not `log`/`info` unless you override).
- No `var`, nested ternaries, `for…in`, or `const` enums.
- **Imports**: sorted by `perfectionist` (natural, asc). Groups: type imports, then builtin / external / internal / parent-sibling, then side-effect. Do not use the editor's organize-imports action.
- **Vue SFC**: `<script>`, then `<template>`, then `<style>`. PascalCase components in templates. HTML attributes use **double** quotes. Macro order: `defineOptions`, `defineProps`, `defineEmits`, `defineSlots`.
- **Tests**: `it()`, not `test()`; lowercase titles; hooks in order.

Do not run Prettier on JS/TS. Do not use `pnpx eslint` / `pnpm dlx eslint` — use `pnpm eslint`.

## Key options

```js
vinicuncaESLint(
  {
    type: 'app', // 'lib' adds ts/explicit-function-return-type
    stylistic: { indent: 2, quotes: 'single', semi: true },
    typescript: { tsconfigPath: 'tsconfig.json' }, // type-aware rules
    vue: { a11y: false },
    react: false,
    formatters: { css: true, html: true },
    antislop: false,
  },
  { rules: { 'no-console': 'off' } },
)
```

`lessOpinionated` is a no-op. Integration `overrides` apply to that plugin's files; extra args are full flat configs. Composer: `.override('vinicunca/stylistic/rules', { rules: { … } })`.

`unicorn.overrides` and `unocss.overrides` are ignored — use an extra config.

## Raw docs

- https://vinicunca.dev/raw/eslint/getting-started.md
- https://vinicunca.dev/raw/eslint/configuration.md
- https://vinicunca.dev/raw/eslint/configuration/options.md
- https://vinicunca.dev/raw/eslint/configuration/frameworks.md
- https://vinicunca.dev/raw/eslint/configuration/formatters.md
- https://vinicunca.dev/raw/eslint/configuration/typescript.md
- https://vinicunca.dev/raw/eslint/configuration/rules-overrides.md
- https://vinicunca.dev/raw/eslint/configuration/optional-configs.md
- https://vinicunca.dev/raw/eslint/guides/differences-from-antfu.md
- https://vinicunca.dev/raw/eslint/guides/faq.md
