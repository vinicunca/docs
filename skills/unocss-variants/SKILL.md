---
name: unocss-variants
description: First-class variants, slots, and compound styles for UnoCSS (a port of Tailwind Variants). Use when authoring uv() recipes, VariantProps types, UnoCSS layer conflict resolution, or migrating from tv().
---

# UnoCSS Variants

Package: `unocss-variants` (v1.5.0). Docs: [https://vinicunca.dev/unocss-variants/getting-started](https://vinicunca.dev/unocss-variants/getting-started). Source: [https://github.com/praburangki/unocss-variants](https://github.com/praburangki/unocss-variants).

## When to use

- Building typed class recipes (`color`, `size`, `disabled`, …) on top of UnoCSS
- Multi-part components (card, alert, pagination) with `slots`
- Porting Tailwind Variants (`tv`) recipes to UnoCSS

Do **not** use it as a `tailwind-merge` replacement. `uv` never drops conflicting utilities.

## Core API

```ts
import { uv, type VariantProps } from 'unocss-variants'

const button = uv({
  base: 'rounded-md px-3 py-1.5 font-medium',
  variants: {
    color: { primary: 'bg-blue-500 text-white', secondary: 'bg-zinc-200' },
    disabled: { true: 'opacity-50 uno-layer-uv:bg-gray-500 pointer-events-none' }
  },
  compoundVariants: [{ color: 'primary', disabled: true, class: 'uno-layer-uv:bg-blue-100' }],
  defaultVariants: { color: 'primary' }
})

button({ color: 'secondary' }) // string
type Props = VariantProps<typeof button>
```

- **`uv(options)` — one argument.** No config, no `twMerge`, no `/lite`, no `createTV`.
- Call-site overrides: `class` or `className` (appended, not merged).
- Slots: non-empty `slots` → `{ base, ... }()` functions. Pass `class` to the **slot function**.
- `compoundSlots`: `{ slots: ['item', 'prev'], class: '...', size: 'md' }`.

## Layers (required for conflicts)

```ts
// uno.config.ts
export default defineConfig({ layers: { uv: 10 } })
```

Prefix the utility that must win: `uno-layer-uv:bg-blue-500`. Parent + child backgrounds both stay in the string otherwise.

## `cn` vs npm 1.5.0

Source exports `uv` and `cn` (concat only). **npm 1.5.0 JS exports `uv`, `cnBase`, `createUv` — not `cn`.** Types declare `cn` anyway. Until republish, import `cnBase` from npm. Do not claim `cn()` works on that tarball.

## Do not

- Write `uv(options, config)` or `createTV`
- Expect later classes in the string to win (that is merge-library behavior)
- Use `responsiveVariants` — put `md:` in the class string
- Trust Result comments copied from Tailwind Variants docs

## Docs (raw markdown)

- [Introduction](https://vinicunca.dev/raw/unocss-variants/getting-started.md)
- [Installation](https://vinicunca.dev/raw/unocss-variants/getting-started/installation.md)
- [Variants](https://vinicunca.dev/raw/unocss-variants/concepts/variants.md)
- [Slots](https://vinicunca.dev/raw/unocss-variants/concepts/slots.md)
- [Layers](https://vinicunca.dev/raw/unocss-variants/concepts/layers.md)
- [cn](https://vinicunca.dev/raw/unocss-variants/concepts/cn.md)
- [TypeScript](https://vinicunca.dev/raw/unocss-variants/concepts/typescript.md)
- [Migration](https://vinicunca.dev/raw/unocss-variants/guides/migration.md)
- [API](https://vinicunca.dev/raw/unocss-variants/api.md)
