# vinicuncaESLint options and composer

Verified against `src/base.ts`, `src/types.ts` and `src/configs/*` of v6.0.0.

```ts
function vinicuncaESLint(
  options?: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'>,
  ...userConfigs: Array<Awaitable<TypedFlatConfigItem | Array<TypedFlatConfigItem> | FlatConfigComposer | Array<Linter.Config>>>
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;
```

Options shaped `boolean | object` turn the integration on when you pass an object. The first argument also accepts `name`, `languageOptions`, `linterOptions`, `processor`, `plugins`, `rules` and `settings`. These go into one config placed after all generated configs and before your extra configs. Passing `files` throws.

## General

| Option | Default | Notes |
| --- | --- | --- |
| `type` | `'app'` | `'lib'` adds `ts/explicit-function-return-type` |
| `ignores` | `[]` | Array extends the built-in list (`node_modules`, `dist`, lockfiles, `coverage`, `.nuxt`, `.next`, `.output`, `.svelte-kit`, `CHANGELOG*.md`, `LICENSE*`, `*.min.*`, `__snapshots__`, `components.d.ts`, `auto-import(s).d.ts`, `.claude`, `.agents`, ...). Function `(originals) => string[]` replaces it. With TypeScript off, `*.ts`/`*.tsx` are ignored |
| `gitignore` | `true` | Object goes to `eslint-config-flat-gitignore` (`files`, `strict`) |
| `isInEditor` | auto | `false` in CI, git hooks and lint-staged. `true` makes `prefer-const`, `unused-imports/no-unused-imports`, `test/no-only-tests` non-fixable warnings |
| `autoRenamePlugins` | `true` | Renames prefixes in every config, including yours |
| `componentExts` | `[]` | Extra extensions parsed by the TS parser and linted in Markdown. `vue` is added when Vue is on |
| `lessOpinionated` | `false` | **No effect** |

Plugin renames: `@eslint-react` to `react`, `@next/next` to `next`, `@stylistic` to `style`, `@typescript-eslint` to `ts`, `import-lite` to `import`, `n` to `node`, `vitest` to `test`, `yml` to `yaml`. `eslint-plugin-vuejs-accessibility` is registered as `vue-a11y` and `eslint-plugin-react-refresh` as `react-refresh`.

## Core integrations

| Option | Default | Shape |
| --- | --- | --- |
| `javascript` | always on | `{ overrides }` |
| `node` | `true` | `boolean` |
| `jsdoc` | `true` | `boolean` |
| `imports` | `true` | `boolean \| { overrides }` |
| `perfectionist` | `true` | `boolean \| { overrides }` |
| `unicorn` | `true` | `boolean \| { allRecommended }`. `overrides` is **ignored** |
| `e18e` | `true` | `boolean \| { modernization: true, performanceImprovements: true, moduleReplacements: false, overrides }` |
| `regexp` | `true` | `boolean \| { level: 'error' \| 'warn', overrides }` |
| `test` | `true` | `boolean \| { overrides }` |
| `jsx` | `true` | `boolean \| { a11y?: boolean \| { overrides } }` |
| `jsonc` | `true` | `boolean \| { overrides }`. Also sorts `package.json` and tsconfig keys |
| `yaml` | `true` | `boolean \| { overrides }` |
| `toml` | `true` | `boolean \| { overrides }` |
| `markdown` | `true` | `boolean \| { gfm, overrides, overridesMarkdown }`. `gfm` defaults to `true` (`false` = CommonMark). `overrides` applies to fenced **code blocks** (`vinicunca/markdown/disables`), `overridesMarkdown` to the document (`vinicunca/markdown/rules`) |

## stylistic

`boolean | { indent, quotes, semi, jsx, braceStyle, experimental, overrides }`. Default `true`.

| Key | Default | Notes |
| --- | --- | --- |
| `indent` | `2` | `number \| 'tab'`. Shared with JSON, YAML, TOML, Vue templates, Svelte, formatters |
| `quotes` | `'single'` | `'single' \| 'double' \| 'backtick'` |
| `semi` | `true` | |
| `jsx` | value of `jsx` option | |
| `braceStyle` | `'stroustrup'` | Reaches only `vue/brace-style`. JS/TS stay `1tbs` |
| `experimental` | `false` | Enables Stylistic experimental rules and drops `antfu/consistent-list-newline` |
| `overrides` | | Merged into `vinicunca/stylistic/rules` |

`stylistic: false` drops formatting rules. JSON, YAML, Vue and the formatters fall back to built-in defaults.

## typescript

`boolean | OptionsTypescript`. Default: on when `typescript` or `@typescript/native-preview` is installed.

| Key | Default | Notes |
| --- | --- | --- |
| `tsconfigPath` | none | Enables type-aware parsing (project service, `defaultProject`) and rules |
| `overrides` | | `vinicunca/typescript/rules` |
| `overridesTypeAware` | | `vinicunca/typescript/rules-type-aware`. Only with `tsconfigPath` |
| `filesTypeAware` | `['**/*.?([cm])ts', '**/*.?([cm])tsx']` | |
| `ignoresTypeAware` | `['**/*.md/**', '**/*.astro/*.ts']` | |
| `parserOptions` | `{}` | Merged last into `@typescript-eslint/parser` options |
| `erasableOnly` | `false` | `eslint-plugin-erasable-syntax-only` (bundled) |

React's `react/no-leaked-conditional-rendering` and Solid's typed parser also use `tsconfigPath`.

## Frameworks

| Option | Default | Shape |
| --- | --- | --- |
| `vue` | auto (`vue`, `nuxt`, `vitepress`, `@slidev/cli`) | `{ a11y: false, sfcBlocks: true, vueVersion: 3, overrides }`. `vueVersion` has **no effect** |
| `react` | `false` | `{ overrides }` |
| `nextjs` | `false` | `{ overrides }` |
| `svelte` | `false` | `{ overrides }` |
| `solid` | `false` | `{ overrides }` |
| `astro` | `false` | `{ overrides }` |
| `unocss` | `false` | `{ attributify: false, strict: false, configPath }`. `overrides` is **ignored** |

## Optional configs

`formatters`, default `false`. `true` enables `css`, `html`, `graphql`, `markdown` (Prettier). It also enables `xml`/`svg` when `@prettier/plugin-xml` is installed, `astro` when `prettier-plugin-astro` is installed, and `slidev` when `@slidev/cli` is installed.

| Key | Values | Notes |
| --- | --- | --- |
| `css` | `boolean \| 'prettier'` | CSS, PostCSS, SCSS, Less, and Vue `<style>` blocks (with `sfcBlocks`) |
| `html` | `boolean \| 'prettier'` | |
| `xml`, `svg` | `boolean \| 'prettier'` | Need `@prettier/plugin-xml` |
| `markdown` | `boolean \| 'prettier' \| 'dprint'` | `true` means Prettier |
| `graphql` | `boolean \| 'prettier'` | |
| `astro` | `boolean \| 'prettier'` | Needs `prettier-plugin-astro` |
| `slidev` | `boolean \| { files }` | Needs `markdown` as Prettier, otherwise throws |
| `prettierOptions` | object | Over defaults: `semi`, `singleQuote`, `tabWidth`/`useTabs` from stylistic, `trailingComma: 'all'`, `printWidth: 120`, `endOfLine: 'auto'` |
| `dprintOptions` | object | Typed `boolean`, so cast in TS |

`antislop`, default `true` (experimental). `eslint-plugin-slop` and `eslint-plugin-sonarjs` ship as dependencies. Shape: `{ slop: true, sonarjs: true, cognitiveComplexity: 15, overrides }`. `slop` can be an object forwarded as `settings.slop` (`cwd`, `inspection`). `overrides` targets `vinicunca/antislop/rules/javascript`.

`pnpm`, default on when `pnpm-workspace.yaml` is found upward (experimental). Shape: `{ catalogs, json, yaml, sort: true }`. `catalogs` defaults to `true` when the workspace file mentions `catalog:`/`catalogs:`.

## Generated config order

1. `vinicunca/gitignore`, `vinicunca/ignores`
2. `vinicunca/javascript/*`, `vinicunca/eslint-comments/rules`, `vinicunca/command/rules`
3. `vinicunca/perfectionist/rules`, `vinicunca/node/rules`, `vinicunca/jsdoc/*`, `vinicunca/imports/rules`, `vinicunca/e18e/rules`, `vinicunca/unicorn/*`, `vinicunca/jsx/setup`
4. `vinicunca/typescript/*`, then `vinicunca/antislop/*`
5. `vinicunca/stylistic/rules`, `vinicunca/regexp/rules`, `vinicunca/test/*`
6. `vinicunca/vue/*`, `vinicunca/react/*`, `vinicunca/nextjs/*`, `vinicunca/solid/*`, `vinicunca/svelte/*`, `vinicunca/unocss`, `vinicunca/astro/*`
7. `vinicunca/jsonc/*`, `vinicunca/sort/package-json`, `vinicunca/sort/tsconfig`, `vinicunca/pnpm/*`, `vinicunca/yaml/*`, `vinicunca/toml/*`, `vinicunca/markdown/*`
8. `vinicunca/formatter/*`
9. `vinicunca/disables/*`
10. The fused config from the first argument's `rules`/`settings`/..., then your extra configs

Later entries win for the same file. Check the real list with `pnpm eslint --inspect-config` (or `pnpm dlx @eslint/config-inspector`). When an override "does nothing", the config name or `files` glob is usually wrong.

## Composer methods

`vinicuncaESLint()` returns a `FlatConfigComposer` (eslint-flat-config-utils). Chain these:

- `.append(...configs)` / `.prepend(...configs)`
- `.insertBefore(name, ...configs)` / `.insertAfter(name, ...configs)`
- `.override(name, config | (c) => c)` / `.overrides({ [name]: config })`
- `.overrideRules(rules)`: change a rule everywhere it is configured
- `.remove(name)` / `.replace(name, ...configs)`
- `.removeRules(...ruleIds)` / `.removePlugins(...names)`
- `.renamePlugins(map)`
- `.disableRulesFix(ruleIds, options)`
- `.onResolved((configs) => ...)`, `.toConfigs()`

## Exports

- Factory: `vinicuncaESLint`. There is no default export.
- Per-integration functions for hand composition: `javascript`, `typescript`, `stylistic`, `vue`, `react`, `jsonc`, `yaml`, `toml`, `markdown`, `imports`, `node`, `jsdoc`, `unicorn`, `perfectionist`, `test`, `comments`, `command`, `ignores`, `disables`, `sortPackageJson`, `sortTsconfig`, `formatters`, `pnpm`, `e18e`, `antislop`, and others.
- Helpers: `combine`, `renameRules`, `renamePluginInConfigs`, `interopDefault`, `GLOB_*` constants, `defaultPluginRenaming`, `STYLISTIC_CONFIG_DEFAULTS`.
- Types: `OptionsConfig`, `TypedFlatConfigItem`, `ConfigNames`, `Rules`.

Hand composition with `combine(...)` skips auto-detection, shared stylistic options, editor detection, plugin renaming of your configs and the composer API. Prefer the factory.
