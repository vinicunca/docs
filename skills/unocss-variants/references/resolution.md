# How `uv()` resolves classes

Exact runtime semantics, checked against the npm 1.5.0 `dist/` and the repository `src/` (`src/internal/resolve-options.ts`, `src/internal/class-resolver.ts`). Every output below was produced by running the code. Where the two builds differ, both results are shown.

## Pipeline (no slots)

```
base → variant axes (in variantKeys order) → matching compoundVariants (array order) → class → className
```

The result is joined with single spaces. Nothing is deduplicated or removed. An empty result is `undefined`, not `''`, so use `?? ''` when you assign to `element.className`.

```ts
const button = uv({
  base: 'inline-flex rounded-md',
  variants: {
    color: { primary: 'bg-blue-600', neutral: 'bg-zinc-200' },
    size: { sm: 'px-2 text-xs', md: 'px-3 text-sm' },
    disabled: { true: 'opacity-50 uno-layer-uv:bg-zinc-400' },
  },
  compoundVariants: [{ color: ['primary', 'neutral'], size: 'sm', class: 'rounded-sm' }],
  defaultVariants: { color: 'primary', size: 'md' },
})

button()
// 'inline-flex rounded-md bg-blue-600 px-3 text-sm'
button({ color: 'neutral', size: 'sm', disabled: true, class: 'X' })
// 'inline-flex rounded-md bg-zinc-200 px-2 text-xs opacity-50 uno-layer-uv:bg-zinc-400 rounded-sm X'
uv({ base: 'a' })({ class: 'b', className: 'c' })
// 'a b c'
uv({})()
// undefined
```

## Picking a variant value

For each axis, `uv` looks up a key in the axis map:

1. The slot call's prop, if one was passed. Otherwise the recipe call's prop.
2. `null` stops here: the axis contributes nothing, and the default is skipped too.
3. `true` becomes `'true'`, `false` becomes `'false'`, and `0` becomes `'0'`.
4. If the prop is `undefined`, the `defaultVariants` value is used.
5. If there is still no value, the `'false'` key is used.

```ts
const b = uv({ base: 'btn', variants: { flat: { true: 'flat', false: 'raised' } } })
b()                // 'btn raised'   (omitted → the false key)
b({ flat: false }) // 'btn raised'

const d = uv({ base: 'btn', variants: { size: { sm: 'sm', md: 'md' } }, defaultVariants: { size: 'md' } })
d({ size: undefined }) // 'btn md'  (undefined → default)
d({ size: null })      // 'btn'     (null → axis off)
```

Consequence: an axis with only a `true` key adds nothing when the flag is omitted. An axis with a `false` key always adds something unless you pass `null`.

## Compound matching

Before matching, `uv` builds the complete props: `defaultVariants`, then the recipe-call props, then the slot-call props. `undefined` values do not override. A compound matches when every condition key matches:

- A scalar matches with `===`. `false`, `null`, and `undefined` also count as equal to each other.
- An array matches if any element matches.
- Condition keys can be any prop name. They do not have to be declared variant axes.

```ts
const cv = uv({
  variants: { a: { true: 'A' }, c: { x: 'X' } },
  compoundVariants: [{ a: false, c: 'x', class: 'CMP' }],
})
cv({ c: 'x' }) // 'X CMP'  (a omitted counts as false)
```

`compoundVariants` and `compoundSlots` must be arrays. A non-array throws `TypeError: The "compoundVariants" prop must be an array` on the first call, not when the recipe is created.

**Build difference:** `compoundSlots` conditions on npm 1.5.0 fail when the prop is `undefined` after defaults are applied. So `{ slots: [...], on: false }` does not match when `on` is omitted. The source build treats omitted as `false` and matches. Pass the flag explicitly, or give it a default, so it works on both builds.

## Slot pipeline

Slot mode starts when `slots` is set (npm 1.5.0: when `slots` is non-empty) or when the parent has slots. Each slot function returns:

```
slots[name] → variant classes for this slot → compoundVariants for this slot → compoundSlots listing this slot → slot-call class → slot-call className
```

- A variant value that is a **string** goes to `base` only. A **slot map** sends each entry to its slot.
- A compound variant `class` that is a string goes to `base` only. A slot map sends each entry to its slot.
- `compoundSlots[].class` goes to every slot in `slots: [...]`.
- The root call's `class`/`className` is ignored in slot mode.

```ts
const s = uv({
  slots: { base: 'B', item: 'I' },
  variants: { size: { sm: { item: 'v-sm' } }, on: { true: { item: 'v-on' } } },
  compoundVariants: [{ size: 'sm', on: true, class: { item: 'cv' } }],
  compoundSlots: [{ slots: ['item'], size: 'sm', class: 'cs' }],
})

s({ size: 'sm', on: true }).item({ class: 'X' }) // 'I v-sm v-on cv cs X'
s({ size: 'sm' }).item({ on: true })            // 'I v-sm v-on cv cs'  (slot-level override also drives compounds)
s({ size: 'sm' }).base()                        // 'B'
uv({ slots: { base: 'b', x: 'x' } })({ class: 'zz' }).base() // 'b'  (root class ignored)
```

## `extend` merging

```ts
const parent = uv({
  base: 'P',
  variants: { size: { sm: 'p-sm' }, color: { red: 'p-red' } },
  defaultVariants: { size: 'sm', color: 'red' },
  compoundVariants: [{ size: 'sm', class: 'P-CV' }],
})
const child = uv({
  extend: parent,
  base: 'C',
  variants: { tone: { x: 'c-x' }, color: { red: 'c-red', blue: 'c-blue' } },
  defaultVariants: { color: 'blue' },
  compoundVariants: [{ color: 'blue', class: 'C-CV' }],
})

child()            // 'P C c-blue p-sm P-CV C-CV'
child.variantKeys  // ['tone', 'color', 'size']   (child axes first, then parent-only axes)
child({ color: 'red' }) // includes 'p-red c-red'  (the same value concatenates, parent first)
```

| Field | Rule |
| --- | --- |
| `base` | `parent.base` then `child.base` |
| `variants` | deep merge. If both define the same axis value, the classes concatenate (parent first). There is no way to replace them |
| `defaultVariants` | `{ ...parent, ...child }` |
| `compoundVariants` | `[...parent, ...child]` |
| `compoundSlots` | source: `[...parent, ...child]`. **npm 1.5.0: child only** (`child.compoundSlots` is `[]` if the child declares none) |
| `slots` | merged by name. Classes for a shared name concatenate (parent first) |

Edge case: if the parent has a `base` but no slots, and the child adds `slots`, the child's `base()` slot is `'<child base> <parent base>'` (child first). This affects order only, not the cascade.

## Layers decide conflicts

Since the string keeps both utilities, the stylesheet order decides which one wins. With `layers: { uv: 10 }` in `uno.config.ts`, `uno-layer-uv:<utility>` is emitted after the default layer and wins over an unprefixed utility that sets the same property. Two prefixed utilities that conflict are back to stylesheet order. Prefix only the one that must win.
