---
name: unocss-variants
description: Write typed class recipes for UnoCSS with `uv()` from unocss-variants (variants, slots, compoundVariants, compoundSlots, defaultVariants, extend, VariantProps). Use when authoring or debugging `uv()` recipes, resolving conflicting utilities with `uno-layer-uv:`, or migrating Tailwind Variants `tv()` code.
---

# UnoCSS Variants

`unocss-variants` is a port of Tailwind Variants for UnoCSS. `uv(options)` builds a recipe. You call the recipe with variant props and get back a class string, or slot functions when `slots` is set.

The one rule that drives everything else: **`uv` concatenates and never merges.** Every class from `base`, variants, compounds, `extend`, and `class`/`className` stays in the output. Conflicting utilities (`bg-zinc-100` and `bg-blue-500`) both reach the DOM, and the CSS cascade picks the winner. Token order in the string has no effect. You choose the winner with an UnoCSS layer.

## Setup

```ts
// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  layers: { uv: 10 }, // higher than the default layer, so it is emitted later and wins
});
```

Prefix the utility that must win with `uno-layer-uv:`. Use the prefix only where two utilities set the same property: a child recipe over its parent, a compound or flag over a color variant, or a call-site override over the recipe.

## Recipe anatomy

```ts
import type { VariantProps } from 'unocss-variants';
import { uv } from 'unocss-variants';

export const button = uv({
  base: 'inline-flex items-center rounded-md font-medium', // string or (nested) array
  variants: {
    color: {
      primary: 'bg-blue-600 text-white',
      neutral: 'bg-zinc-200 text-zinc-900',
    },
    size: { sm: 'px-2 py-1 text-xs', md: 'px-3 py-1.5 text-sm' },
    disabled: { true: 'opacity-50 pointer-events-none uno-layer-uv:bg-zinc-400' },
  },
  compoundVariants: [ // must be an array; an object throws on the first call
    { color: ['primary', 'neutral'], size: 'sm', class: 'rounded-sm' }, // array = match any
  ],
  defaultVariants: { color: 'primary', size: 'md' }, // variant VALUES, not classes
});

button(); // defaults applied
button({ color: 'neutral', disabled: true, class: props.class }); // class/className are appended
export type ButtonVariants = VariantProps<typeof button>;
```

Output order is always: `base`, then each variant axis, then matching `compoundVariants`, then `class`, then `className`. Order only affects readability, never which style wins.

## Variant resolution rules

- An omitted prop falls back to `defaultVariants`. If there is no default either, the `false` entry is used when the axis has one. So `flat: { true: 'a', false: 'b' }` yields `b` when `flat` is omitted.
- `undefined` means "use the default". `null` turns the axis off, default included: `button({ size: null })`.
- `true`/`false` keys become a `boolean` prop. Numeric keys work too (`cols: { 1: '...', 2: '...' }` with `cols: 2`).
- A compound condition matches when every listed key matches, after defaults are applied. `false`, `null`, and omitted all count as equal, so `{ disabled: false, ... }` matches when `disabled` is not passed.
- Compounds can append both `class` and `className`. Both are applied.

## Slots

A non-empty `slots` object switches the return value to an object of slot functions. An implicit `base` slot is added, and the top-level `base` option becomes its classes.

```ts
const card = uv({
  slots: { base: 'rounded-xl p-4', title: 'font-semibold', body: 'text-sm' },
  variants: {
    tone: {
      plain: 'bg-white', // a string goes to the base slot only
      danger: { base: 'bg-red-50', title: 'text-red-900' }, // a slot map targets parts
    },
    selected: { true: { title: 'underline' } },
  },
  compoundVariants: [
    { tone: 'danger', selected: true, class: { body: 'text-red-700' } }, // class can be a slot map
  ],
  compoundSlots: [
    { slots: ['title', 'body'], class: 'px-1' }, // always applied
    { slots: ['title', 'body'], tone: 'danger', class: 'tracking-tight' }, // gated by variants
  ],
  defaultVariants: { tone: 'plain' },
});

const { base, title, body } = card({ tone: 'danger' });
base({ class: 'max-w-md' }); // overrides go to the SLOT function
title({ selected: true }); // a slot function also accepts variant overrides for that part only
```

- Slot order: slot classes, variants, compound variants, compound slots, then the slot call's `class`/`className`.
- A root-level `class` on a slotted recipe is ignored: `card({ class: 'x' }).base()` returns no `x`. Pass `class` to the slot function.
- `compoundSlots[].class` is a plain class value, not a slot map. A string `class` on a compound variant applies to `base` only.
- Always list at least one slot key. On npm 1.5.0, `slots: {}` returns a string instead of slot functions.
- Slot functions capture the props at call time. Call the recipe again when props change. In Vue, put the call in a `computed`.

## Composition with `extend`

`uv({ extend: parent, ... })` takes one parent. Chain recipes for deeper lineages. Field by field:

| Field | Child behavior |
| --- | --- |
| `base` | parent classes, then child classes |
| `slots` | merged by name; child classes appended to inherited slots, new slots added |
| `variants` | merged by axis and value; the same value concatenates (`parent child`). **You cannot replace an inherited variant's classes**, only add to them and win with `uno-layer-uv:` |
| `defaultVariants` | child keys override parent keys |
| `compoundVariants` | parent array, then child array |
| `compoundSlots` | concatenated in source. **Not inherited on npm 1.5.0** (only the child's own are applied). Repeat them on the child |

To beat a parent utility, prefix the child utility: `uv({ extend: baseButton, base: 'uno-layer-uv:bg-blue-500' })`. You can also pass `parent()` inside a new `base` array, but that loses the parent's variant keys and types.

## TypeScript

- `VariantProps<typeof recipe>` gives the variant props with `class`/`className` removed. **Every key is optional**, including keys with no default.
- To require a variant, build the props type yourself: `Omit<V, 'size'> & Required<Pick<V, 'size'>>`. There is no `required` option.
- Slotted recipes: `ReturnType<typeof recipe>` is the object of slot functions.
- The recipe type is `UvReturnType` (not `UVReturnType` or `TVReturnType`). It is generic, so use `typeof recipe` instead of writing it by hand.
- Declare variant maps outside `uv()` with `as const` so their keys stay literal.
- Recipe metadata is available at runtime: `recipe.base`, `.slots`, `.variants`, `.variantKeys`, `.defaultVariants`, `.compoundVariants`, `.compoundSlots`, `.extend`.

## Published npm 1.5.0 vs source

1.5.0 is the latest npm release. Its `dist/` was built from older code than the repository `src/`. Write code that works on the installed build:

| | npm 1.5.0 runtime | repo source |
| --- | --- | --- |
| Class joiner | `cnBase` (`cn` is declared in the types, but the runtime does not export it) | `cn` |
| `createUv()` | exported, takes no config | removed |
| `slots: {}` | returns a string | returns slot functions |
| `extend` + parent `compoundSlots` | dropped | inherited |
| `compoundSlots` gated on `flag: false` with `flag` omitted | no match | match |

`cnBase` and `cn` are clsx-style joiners that keep conflicts too: `cnBase('px-2', { 'font-bold': true, hidden: false }, ['px-4'])` returns `'px-2 font-bold px-4'`. Check the exports in `node_modules/unocss-variants/dist/index.mjs` before you import `cn`.

## Not in unocss-variants

These are `tv()` features with no `uv` equivalent:

- A second `config` argument, `twMerge`/`twMergeConfig`, `createTV`, `defaultConfig`, `cnMerge`, `cx`, `withTv`, or a `/lite` entry.
- `responsiveVariants`. Write `sm:`/`md:` prefixes inside the class strings.
- Deduplication. Expected-output comments copied from Tailwind Variants docs or tests are wrong whenever they show a class being dropped.

For porting `tv()` code, read [references/migration.md](references/migration.md).

## References

- [references/resolution.md](references/resolution.md): exact runtime semantics with verified outputs: class order, default and boolean fallbacks, compound matching, the slot pipeline, and `extend` merging. Read it when an output string surprises you or when you write tests that assert class strings.
- [references/migration.md](references/migration.md): `tv()` to `uv()` mapping, a before/after conversion, and a checklist.

Docs (raw markdown):

- [Introduction](https://vinicunca.dev/raw/unocss-variants/getting-started.md) · [Installation](https://vinicunca.dev/raw/unocss-variants/getting-started/installation.md) · [Frameworks](https://vinicunca.dev/raw/unocss-variants/getting-started/frameworks.md)
- [Variants](https://vinicunca.dev/raw/unocss-variants/concepts/variants.md) · [Slots](https://vinicunca.dev/raw/unocss-variants/concepts/slots.md) · [Overriding styles](https://vinicunca.dev/raw/unocss-variants/concepts/overriding-styles.md) · [Composing components](https://vinicunca.dev/raw/unocss-variants/concepts/composing-components.md)
- [Layers](https://vinicunca.dev/raw/unocss-variants/concepts/layers.md) · [cn](https://vinicunca.dev/raw/unocss-variants/concepts/cn.md) · [TypeScript](https://vinicunca.dev/raw/unocss-variants/concepts/typescript.md)
- [Migration](https://vinicunca.dev/raw/unocss-variants/guides/migration.md) · [API reference](https://vinicunca.dev/raw/unocss-variants/api.md)
