# Style rules in detail

What `vinicuncaESLint()` enforces with default options (v6), with examples. Rule names use the renamed prefixes (`style/`, `ts/`, `node/`, `test/`). **(manual)** marks rules with no autofix.

## Formatting (`vinicunca/stylistic/rules`)

ESLint Stylistic `customize()` with `indent: 2`, `quotes: 'single'`, `semi: true`, plus these overrides:

| Rule | Setting | Effect |
| --- | --- | --- |
| `curly` | `'all'` | Every `if`/`else`/`for`/`while` body has braces |
| `style/brace-style` | no options, so `1tbs` | `} else {` on one line. Single-line blocks are not allowed |
| `style/arrow-parens` | `'always'` | `(x) => x` |
| `style/operator-linebreak` | `'before'` | `&&`, `+`, `?`, `:` start the continuation line |
| `style/quote-props` | `'consistent-as-needed'` | Quote all keys or none |
| `style/member-delimiter-style` | default | Semicolons between interface/type members |
| `style/padded-blocks` | `never` | No blank line just inside `{`/`}` |
| `style/object-curly-spacing` | `'always'` | `{ a }` |
| `style/max-statements-per-line` | `1` (from customize) | One statement per line |
| `style/multiline-ternary` | `'always-multiline'` (from customize) | A ternary that wraps puts each part on its own line |
| `style/comma-dangle` | `'always-multiline'` (from customize) | Trailing comma when the closing bracket is on its own line |
| `style/jsx-quotes` | `'prefer-double'` (from customize) | JSX attributes use double quotes |
| `antfu/top-level-function` | on | Top-level `const f = () => {}` becomes `function f() {}` |
| `antfu/consistent-list-newline` | on (off when `stylistic.experimental`) | A list is all on one line or one item per line |
| `antfu/consistent-chaining` | on | Chained calls keep a consistent line-break style |

```ts
// Before
const isEmpty = (s: string) => s.length === 0;
if (!value) {
  return;
}
const total = price
  + tax;
const config = { 'max-age': 60, 'other': 1 };

// After pnpm eslint --fix
function isEmpty(s: string) {
  return s.length === 0;
}
if (!value) {
  return;
}
const total = price
  + tax;
const config = { 'max-age': 60, 'other': 1 };
```

`if`/`else` chains:

```ts
if (a) {
  run();
} else if (b) {
  stop();
} else {
  wait();
}
```

To get stroustrup (`}\nelse {`) in JS/TS, override `style/brace-style` (see SKILL.md). Setting `stylistic.braceStyle` changes only `vue/brace-style` in templates.

## JavaScript (`vinicunca/javascript/rules`)

Rules that most often fail in generated code:

| Rule | What to write |
| --- | --- |
| `no-console` (allow `warn`, `error`) **(manual)** | `console.warn`/`console.error`, or remove the log |
| `antfu/no-top-level-await` **(manual)** | Wrap in an async `main()` function, or put the file under `scripts/`/`cli/` |
| `no-await-in-loop` **(manual)** | `await Promise.all(items.map(async (item) => { ... }))` |
| `no-nested-ternary` **(manual)** | `if`/`else` or a lookup object |
| `no-restricted-syntax` **(manual)** | No `for...in` (use `Object.keys`/`Object.entries`), no `const enum`, no `export =` |
| `no-restricted-globals` **(manual)** | `globalThis`, not `global` or `self` |
| `no-new` **(manual)** | Assign or use the result of `new X()` |
| `camelcase` (properties: never) **(manual)** | Variables in camelCase. Object property names may be snake_case |
| `no-use-before-define` (variables only) **(manual)** | Declare variables before use. Functions and classes can be hoisted |
| `prefer-const`, `no-var`, `one-var` (initialized: never) | One `const` per initialized variable |
| `eqeqeq` (`'smart'`) | `===`, except `== null` and `typeof` comparisons |
| `object-shorthand`, `prefer-template`, `prefer-arrow-callback`, `prefer-exponentiation-operator` | `{ a }`, `` `${a}b` ``, `(x) => {}` callbacks, `a ** b` |
| `no-unused-vars` / `unused-imports/no-unused-vars` | Prefix unused names with `_`. Unused imports are removed |
| `prefer-promise-reject-errors`, `no-throw-literal` **(manual)** | Reject and throw `Error` objects |
| `yoda` (never), `no-return-assign`, `vars-on-top` | `if (x === 1)`, no assignment in `return`, `var`-free code |

## Node (`vinicunca/node/rules`) and unicorn (`vinicunca/unicorn/rules`)

```ts
import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs/promises';
import process from 'node:process';

const env = process.env.NODE_ENV;
```

- `node/prefer-global/process` and `node/prefer-global/buffer` are `never` **(manual)**: import them. Vue SFCs, test files and Markdown code blocks are exempt from the `process` rule.
- `unicorn/prefer-node-protocol`: `node:fs`, not `fs`.
- `node/handle-callback-err`, `node/no-deprecated-api`, `node/no-path-concat` **(manual)**.
- Curated unicorn set: `throw-new-error`, `error-message` **(manual)**, `prefer-type-error`, `prefer-number-properties` (`Number.isNaN`), `prefer-includes`, `prefer-string-starts-ends-with`, `prefer-dom-node-text-content`, `no-new-array`, `no-new-buffer`, `no-instanceof-builtins`, `number-literal-case`, `escape-case`, `consistent-empty-array-spread`.

## Imports (`vinicunca/perfectionist/rules`, `vinicunca/imports/rules`)

```ts
import type { Linter } from 'eslint';
import type { Options } from './types';

import { readFile } from 'node:fs/promises';
import { defineConfig } from 'vite';
import { helper } from '~/utils';
import { local } from './local';
import './side-effect.css';
```

- `perfectionist/sort-imports` groups: type imports, then type parent/sibling/index/internal, then builtin, external, internal, parent/sibling/index, side-effect. Natural, ascending. Blank lines between groups are not enforced (`newlinesBetween: 'ignore'`).
- `perfectionist/sort-named-imports`, `sort-named-exports`, `sort-exports`: `{ a, b, c }` sorted.
- `import/consistent-type-specifier-style: top-level` and `ts/consistent-type-imports` (`separate-type-imports`): type-only imports go on their own `import type` line.
- `import/first`, `import/no-duplicates`, `import/newline-after-import` (one blank line after the last import), `import/no-mutable-exports` (no `export let`), `import/no-named-default`.
- `antfu/import-dedupe`, `antfu/no-import-dist` **(manual)**, `antfu/no-import-node-modules-by-path` **(manual)**.

## TypeScript (`vinicunca/typescript/rules`)

Base: typescript-eslint `eslint-recommended` + `strict`, then:

| Rule | Setting |
| --- | --- |
| `ts/array-type` | `generic`: `Array<string>`, `ReadonlyArray<T>` |
| `ts/consistent-type-definitions` | `interface` for object shapes. Unions and mapped types stay `type` |
| `ts/consistent-type-imports` | `import type`, separate statements. Type annotations like `import('x').Y` are allowed |
| `ts/method-signature-style` | `property`: `{ run: (x: number) => void }` |
| `ts/ban-ts-comment` | `@ts-expect-error: reason` allowed with a description; `@ts-ignore` banned **(manual)** |
| `ts/no-explicit-any`, `ts/no-non-null-assertion`, `ts/no-empty-function`, `ts/no-extraneous-class`, `ts/no-invalid-void-type`, `ts/parameter-properties`, `ts/naming-convention` | off |
| `ts/no-empty-object-type` | Empty interfaces allowed |
| `ts/no-require-imports` **(manual)** | ESM imports. Off in `*.js`/`*.cjs` |
| `ts/no-unused-vars` | `_` prefix ignored for args, variables and destructured array items |
| `ts/no-import-type-side-effects`, `ts/no-invalid-this`, `ts/no-redeclare` | on |
| `ts/explicit-function-return-type` | only with `type: 'lib'` **(manual)**. Off in tests, Vue, `scripts/` and `*.config.*` |

```ts
// Before
interface User { id: number; tags: Array<string>; greet: (name: string) => void }

// After
interface User {
  id: number;
  tags: Array<string>;
  greet: (name: string) => void;
}
```

### Type-aware (`typescript.tsconfigPath` set)

Applied to `**/*.?([cm])ts` and `**/*.?([cm])tsx` (not `.vue`, not Markdown code blocks). All **(manual)** unless noted:

`ts/await-thenable`, `ts/no-floating-promises` (await, return, or `void` the promise), `ts/no-misused-promises`, `ts/no-for-in-array`, `ts/no-implied-eval`, `ts/no-unnecessary-type-assertion` (fixable), `ts/no-unsafe-argument`, `ts/no-unsafe-assignment`, `ts/no-unsafe-call`, `ts/no-unsafe-member-access`, `ts/no-unsafe-return`, `ts/promise-function-async` (fixable: functions returning a Promise are `async`), `ts/restrict-plus-operands`, `ts/restrict-template-expressions`, `ts/return-await` (`in-try-catch`, fixable), `ts/strict-boolean-expressions` (nullable booleans and objects allowed; check strings and numbers explicitly), `ts/switch-exhaustiveness-check`, `ts/unbound-method`, `ts/dot-notation`.

With `typescript.erasableOnly: true`: no enums, namespaces, parameter properties, or `import x = ...` / `export =` aliases.

## Vue (`vinicunca/vue/rules`)

Base: `eslint-plugin-vue` `flat/essential` + `flat/strongly-recommended` + `flat/recommended`, then:

```vue
<script setup lang="ts">
defineOptions({ name: 'UserCard' });
const props = defineProps<{ userId: number }>();
const emit = defineEmits<{ selectUser: [id: number] }>();
</script>

<template>
  <BaseCard
    class="card"
    :class="{ active }"
    @click="emit('selectUser', props.userId)"
  >
    <UserAvatar :id="props.userId" />
  </BaseCard>
</template>

<style scoped>
.card {
  padding: 1rem;
}
</style>
```

- `vue/block-order`: script, template, style. `vue/define-macros-order`: `defineOptions`, `defineProps`, `defineEmits`, `defineSlots`.
- `vue/component-name-in-template-casing`: PascalCase. `vue/prop-name-casing`: camelCase. `vue/custom-event-name-casing`: camelCase per `:` segment (`update:modelValue`, `selectUser`).
- `vue/html-quotes`: double. `vue/html-indent` follows `stylistic.indent`.
- `vue/max-attributes-per-line`: 1 per line on multi-attribute elements.
- `vue/prefer-separate-static-class`: static classes in `class`, dynamic in `:class`.
- `vue/no-unused-refs`, `vue/no-useless-v-bind`, `vue/no-restricted-v-bind` (`:v-...`), `vue/dot-location`, `vue/eqeqeq`, `vue/object-shorthand`, `vue/prefer-template`.
- Off: `vue/multi-word-component-names`, `vue/no-v-html`, `vue/require-default-prop`, `vue/require-prop-types`, `vue/no-setup-props-reactivity-loss`.
- Stylistic rules mirrored for template expressions, including `vue/brace-style` with `stylistic.braceStyle` (`stroustrup`) and `vue/comma-dangle: always-multiline`.

## Tests (`vinicunca/test/rules`)

Files: `**/__tests__/**/*`, `*.spec.*`, `*.test.*`, `*.bench.*`, `*.benchmark.*`.

```ts
import { describe, expect, it } from 'vitest';

describe('parseUser', () => {
  it('returns null for empty input', () => {
    expect(parseUser('')).toBeNull();
  });
});
```

- `test/consistent-test-it`: `it`, inside and outside `describe`.
- `test/prefer-lowercase-title`, `test/prefer-hooks-in-order`, `test/no-identical-title` **(manual)**, `test/no-import-node-test` (import from `vitest`, not `node:test`), `test/no-only-tests`.
- Relaxed in tests: top-level await, `no-unused-expressions`, `node/prefer-global/process`, `ts/explicit-function-return-type`.

## JSDoc (`vinicunca/jsdoc/rules`)

All warnings. Notable: `jsdoc/no-types` (no `{type}` in `@param`; rely on TypeScript), `jsdoc/check-param-names`, `jsdoc/require-returns-description`, `jsdoc/no-defaults`, `jsdoc/multiline-blocks`.

## Comments

`eslint-comments/no-unlimited-disable` **(manual)**: name the rule in `// eslint-disable-next-line rule-name`. Unused disable directives are reported (`reportUnusedDisableDirectives`). `eslint-comments/no-unused-enable`, `no-duplicate-disable` and `no-aggregating-enable` are on.

## Data files

- JSON/JSONC/JSON5: Stylistic-like spacing, indent from `stylistic.indent`. `package.json` keys follow a fixed order (`publisher`, `name`, `displayName`, `type`, `version`, `private`, ...) and `files` is sorted. `tsconfig*.json`/`jsconfig.json` keys are sorted.
- YAML: `yaml/quotes` prefers single quotes (`avoidEscape`). Indent 2. `pnpm-workspace.yaml` keys are sorted when pnpm rules are on.
- TOML: indent and spacing rules.
- Markdown: `@eslint/markdown` recommended, plus linting of fenced code. Code blocks are relaxed: no `no-console`, `no-undef`, `no-unused-vars`, unused imports, or `ts/consistent-type-imports` checks.

## Relaxed paths (`vinicunca/disables/*`)

| Files | Turned off |
| --- | --- |
| `**/scripts/**` | `no-console`, top-level await, `ts/explicit-function-return-type` |
| `**/cli/**`, `**/cli.*` | `no-console`, top-level await |
| `**/bin/**`, `**/bin.*` | `antfu/no-import-dist`, `antfu/no-import-node-modules-by-path` |
| `**/*.d.ts` | `eslint-comments/no-unlimited-disable`, `no-restricted-syntax`, `unused-imports/no-unused-vars` |
| `**/*.js`, `**/*.cjs` | `ts/no-require-imports` |
| `**/*.config.*` | `no-console`, top-level await, `ts/explicit-function-return-type` |

## Always-on extras

- `regexp/*` recommended (`regexp.level: 'warn'` downgrades them).
- `e18e/*` modernization and performance rules. `prefer-static-regex` and the array-copy rules (`prefer-array-at`, `prefer-array-to-sorted`, ...) are off.
- `command/command`: comments like `/// to-function` trigger one-shot transforms. Remove with `.remove('vinicunca/command/rules')`.
