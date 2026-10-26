# Migrating from Tailwind Variants (`tv`) to `uv`

Recipe shape is unchanged: `base`, `slots`, `variants`, `compoundVariants`, `compoundSlots`, `defaultVariants`, `extend`, and call-site `class`/`className` all carry over. What changes is that **nothing is merged**, plus a list of removed APIs.

## API mapping

| Tailwind Variants | unocss-variants |
| --- | --- |
| `import { tv } from 'tailwind-variants'` | `import { uv } from 'unocss-variants'` |
| `tv(options, config)` | `uv(options)`. Delete the second argument |
| `createTV({ twMerge, twMergeConfig })` | Delete it and call `uv` directly. (npm 1.5.0 still exports a no-config `createUv()`; source removed it, so do not use it) |
| `twMerge` / `twMergeConfig` / `defaultConfig` | None. Resolve conflicts with layers (below) |
| `tailwind-variants/lite` | None. There is a single entry |
| `cn` (merging) / `cnMerge` / `cx` | npm 1.5.0: `cnBase`. Source: `cn`. Both only join classes |
| `responsiveVariants` | None. Write `sm:`/`md:`/`lg:` prefixes in the class strings |
| `withTv` / Tailwind `classRegex` editor setup | None. Use the UnoCSS VS Code extension; its default extractor reads strings inside `uv({...})` |
| `TVReturnType` | `UvReturnType`; usually just `typeof recipe` |
| `VariantProps` | `VariantProps` (same idea; every key is optional) |
| `slots: {}` to get only an implicit `base` slot | npm 1.5.0 returns a string. Use `slots: { base: '...' }` |
| Root `class` applied to the `base` slot | Ignored. Pass `base({ class })` |

## Conflicts: from merge to layers

```ts
// tailwind-variants (default twMerge): 'py-1 px-4'
// unocss-variants:                      'px-2 py-1 px-4'
uv({ base: 'px-2 py-1' })({ class: 'px-4' });
```

Find every place where the old code relied on a later class replacing an earlier one, and prefix the winner with `uno-layer-uv:`. Add `layers: { uv: 10 }` to `uno.config.ts` once.

Typical spots:

- A child recipe (`extend`) that changes the parent's `bg-*`, `rounded-*`, `text-*` color, or padding.
- Compound variants or boolean flags (`disabled`, `flat`) that recolor a `color` variant.
- Call-site `class` props that consumers use to restyle a component.
- `base: [parent(), '...']` concatenation patterns.

## Before / after

```ts
// Before
import { tv } from 'tailwind-variants';

const base = tv({ base: 'rounded-full bg-zinc-100 px-3 py-1' });
const buy = tv(
  {
    extend: base,
    base: 'rounded-lg bg-blue-500 text-white',
    variants: { size: { sm: 'text-xs', md: 'text-sm' } },
    responsiveVariants: ['md'],
  },
  { twMerge: true },
);
buy({ size: { initial: 'sm', md: 'md' } });
```

```ts
// After
import { uv } from 'unocss-variants';

const base = uv({ base: 'rounded-full bg-zinc-100 px-3 py-1' });
const buy = uv({
  extend: base,
  base: 'uno-layer-uv:rounded-lg uno-layer-uv:bg-blue-500 text-white',
  variants: {
    size: { sm: 'text-xs', md: 'text-sm', responsive: 'text-xs md:text-sm' }, // breakpoints live in the strings
  },
});
buy({ size: 'responsive' });
```

## Checklist

1. Replace `tv` with `uv` and fix imports. Remove `createTV`, `/lite`, and every config argument.
2. Add the `uv` layer to `uno.config.ts`. Prefix conflicting winners with `uno-layer-uv:`.
3. Replace `responsiveVariants` object props with dedicated values or explicit `md:` classes.
4. Move root-level `class` on slotted recipes to the slot function call.
5. Give every slotted recipe at least one slot key.
6. If a child recipe relied on the parent's `compoundSlots`, copy them onto the child. npm 1.5.0 does not inherit them.
7. Replace merge helpers with `cnBase` (npm 1.5.0) or `cn` (once the published build exports it).
8. Rewrite tests and doc comments that expect dropped classes. Assert the full concatenated string, or assert the computed style in a browser test.
