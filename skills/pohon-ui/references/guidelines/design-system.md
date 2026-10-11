# Design System

Colors, utilities, variants, and the four ways to restyle a component. Sources: [Design system](https://vinicunca.dev/raw/pohon/getting-started/theme/design-system.md), [CSS variables](https://vinicunca.dev/raw/pohon/getting-started/theme/css-variables.md), [Customize components](https://vinicunca.dev/raw/pohon/getting-started/theme/components.md).

## Semantic colors

Pohon UI has 7 semantic colors. Use these names in `color` props and utility classes, never raw palette names.

| Color | Default palette | When to use |
|---|---|---|
| `primary` | green | CTAs, active states, brand accent, links |
| `secondary` | blue | Secondary actions, complementary highlights |
| `success` | green | Success messages, confirmations, positive states |
| `info` | blue | Informational alerts, tips |
| `warning` | yellow | Warnings, pending states |
| `error` | red | Errors, destructive actions, validation failures |
| `neutral` | slate | Text, borders, backgrounds, disabled states, chrome |

### Choosing colors for components

- **Main action** of a view (submit, save, confirm) → `color="primary"`
- **Secondary actions** (cancel, back) → `color="neutral"` with `variant="outline"` or `"ghost"`
- **Destructive actions** (delete, remove) → `color="error"`
- **Status** → the matching meaning: `success`, `warning`, `error`, `info`
- **Navigation and chrome** → `color="neutral"`

### Configuring colors

Colors are runtime config, so no rebuild is needed:

```ts
// Nuxt: app/app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'violet',
      success: 'emerald',
      error: 'rose',
      neutral: 'zinc'
    }
  }
});
```

```ts
// Vue: vite.config.ts
ui({
  ui: {
    colors: { primary: 'indigo', secondary: 'violet', neutral: 'zinc' }
  }
});
```

A value must be a palette that exists: a UnoCSS default color or one you define with `--color-<name>-<shade>` variables. `black` and `white` have no shades and cannot be used here (see [Black or white as primary](#black-or-white-as-primary)).

- **Colors**: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
- **Neutral palettes** for the `neutral` key:
  - `slate`: cool blue-gray (default)
  - `gray`: true neutral
  - `zinc`: slightly cool, techy
  - `neutral`: perfectly balanced
  - `stone`: warm, earthy
  - `taupe`: warm brown-gray
  - `mauve`: purple-tinted
  - `mist`: soft blue-gray
  - `olive`: green-tinted

### Adding a custom brand palette

1. Define all 11 shades (`50` to `950`) as CSS variables in a global stylesheet (in Nuxt, add it to `css: ['~/assets/css/main.css']` in `nuxt.config.ts`):

```css
/* app/assets/css/main.css */
:root {
  --color-brand-50: #fef2f2;
  --color-brand-100: #fee2e2;
  --color-brand-200: #fecaca;
  --color-brand-300: #fca5a5;
  --color-brand-400: #f87171;
  --color-brand-500: #ef4444;
  --color-brand-600: #dc2626;
  --color-brand-700: #b91c1c;
  --color-brand-800: #991b1b;
  --color-brand-900: #7f1d1d;
  --color-brand-950: #450a0a;
}
```

2. Assign it: `ui: { colors: { primary: 'brand' } }`.

Overriding a default palette works the same way (`--color-green-500: #00C16A;`).

### Adding a semantic color name

To add a color beyond the defaults (e.g. `tertiary`), register it in the module options, then assign a palette:

```ts
// nuxt.config.ts (Vue: the same `theme` key in ui({ ... }))
export default defineNuxtConfig({
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  }
});
```

```ts
// app.config.ts
export default defineAppConfig({ ui: { colors: { tertiary: 'indigo' } } });
```

Then use `color="tertiary"` or `text-tertiary`. Each alias in `theme.colors` generates variants for every colored component, so trim the list to what you use, and keep `error`: form validation styles depend on it.

## Semantic utility classes

Use these everywhere instead of palette classes. They follow light and dark mode automatically.

### Colors
- `text-primary`, `bg-error`, `border-success`, `ring-info/50`: one utility per semantic color (`--ui-primary`, …)

### Text
- `color-text`: body text
- `color-text-muted`: secondary text (descriptions, hints)
- `color-text-toned`: between muted and default
- `color-text-dimmed`: tertiary text (placeholders, disabled)
- `color-text-highlighted`: headings, emphasized labels
- `color-text-inverted`: text on `bg-background-inverted`

### Backgrounds
- `bg-background`: page background
- `bg-background-muted`: subtle (hover, alternating rows)
- `bg-background-elevated`: raised surfaces (cards, dropdowns)
- `bg-background-accented`: active or selected
- `bg-background-inverted`: inverse surface

### Borders
- `border-border`: standard borders
- `border-border-muted`: dividers
- `border-border-accented`: active borders
- `border-border-inverted`: inverse borders

Rings and outlines use the same names (`ring-ring`, `ring-ring-accented`, `outline-outline-inverted/25`).

## Variants

Most components take a `variant` prop. Pick by visual weight:

| Variant | Weight | When to use |
|---|---|---|
| `solid` | Highest | Primary actions, main CTAs |
| `outline` | Medium | Secondary actions, form fields |
| `soft` | Medium-low | Tags, badges, subtle buttons |
| `subtle` | Low | Soft with a border; less prominent actions |
| `ghost` | Lowest | Inline actions, icon buttons, navigation items |
| `link` | Lowest | Text-only links inside content |

### Rules

- **One solid primary button per view**; give everything else less weight.
- **Destructive buttons** use `color="error"`, usually with `variant="soft"` or `"outline"`. Use `solid` only for the confirm button of a destructive dialog.
- **Sibling buttons** share a variant, except for the one primary action.

## Customizing components

Four layers, highest priority first: `ui` / `class` prop → `PTheme` → global config → theme defaults.

### Merging and conflicts

Pohon UI styles components with UnoCSS Variants, which **joins** your classes onto the defaults and never removes conflicting utilities. A non-conflicting class (`shadow-lg`, `gap-4`) always applies. A conflicting one (`font-bold` against a default `font-medium`, `p-2` against `p-4`) depends on stylesheet order and can lose. When a class must replace a default:

- set the slot to a **function**, which replaces the slot's classes (examples below), or
- add the `!` important prefix to that one class (`!p-2`).

### `ui` prop

Overrides the classes of any **slot** on one instance:

```vue
<PButton :ui="{ leadingIcon: 'size-3', label: 'tracking-wide' }" />

<PCard :ui="{ header: 'bg-background-muted', body: 'p-8' }" />
```

- Read the slot names from the raw component page (Theme section) or the generated theme file: `.nuxt/ui/<component>.ts` (Nuxt) or `node_modules/.pohon-ui/ui/<component>.ts` (Vue).
- Components without slots expose a single `base` key. `PLink` and `PIcon` have no `ui` prop; use `class`.
- Prefer a variant prop (`size`, `variant`, `color`) or `defaultVariants` over slot overrides when one exists.

### `class` prop

Targets the `root` (or `base`) slot only:

```vue
<PButton class="rounded-full shadow-lg" />
```

### Replace instead of merge

A function receives the slot's default classes and returns the classes to use:

```vue
<PButton :ui="{ label: () => 'text-base font-bold' }" />

<PButton :ui="{ base: (defaults) => `${defaults} !rounded-full` }" />
```

In the `ui` and `class` props the function runs after variants, so it replaces the resolved classes. In global config it replaces only the slot's base classes, and `variants` / `compoundVariants` still apply on top. In Nuxt, define a slot function in one `app.config.ts` only: Nuxt layers merge app config with `defuFn`, which calls the function and keeps a plain string.

### Theme component

`PTheme` overrides slot classes (`ui`) and prop defaults (`props`) for everything inside it, without rendering an element:

```vue
<PTheme :ui="{ button: { base: 'rounded-full' } }" :props="{ button: { color: 'neutral', variant: 'outline' } }">
  <PButton label="Rounded neutral" />
  <PButton label="Also rounded" />
</PTheme>
```

### Global config

Override `slots`, `variants`, `compoundVariants`, and `defaultVariants` for every instance, in `app.config.ts` (Nuxt) or `ui({ ui: { ... } })` (Vue):

```ts
// app/app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'font-semibold'
      },
      variants: {
        size: { md: { leadingIcon: 'size-4' } }
      },
      compoundVariants: [{
        color: 'neutral',
        variant: 'outline',
        class: 'ring-ring hover:bg-background-accented'
      }],
      defaultVariants: {
        color: 'neutral',
        variant: 'outline'
      }
    }
  }
});
```

Prose components sit under `ui.prose.<name>`; content components use their camelCase name (`ui.contentToc`).

### Module theme options

Set in `nuxt.config.ts` under `ui.theme` (Vue: `ui({ theme })`):

```ts
export default defineNuxtConfig({
  ui: {
    theme: {
      defaultVariants: { size: 'sm', color: 'neutral' }, // replaces defaults that are exactly 'md' / 'primary'
      transitions: false, // drops `transition-colors` from interactive components
      unstyled: false // true strips every default class, layout included
    }
  }
});
```

## Design tokens

Put token overrides in a global stylesheet (`app/assets/css/main.css` in Nuxt, registered in `css`).

### Fonts

```css
:root {
  --font-sans: 'Public Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

In Nuxt, `@nuxt/fonts` loads fonts named here automatically.

### Breakpoints

Breakpoints live in the UnoCSS theme:

```ts
// uno.config.ts
export default defineConfig({
  presets: [presetVinicunca()],
  theme: { breakpoints: { '3xl': '1920px' } }
});
```

### Motion

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Enter and exit animations use `--ease-out`; indeterminate loaders use `--ease-in-out`. With `prefers-reduced-motion`, overlays fade instead of sliding.

### Layout variables

```css
:root {
  --ui-radius: 0.25rem; /* base for rounded-xs … rounded-3xl, also affects your own markup */
  --ui-container: 80rem; /* PContainer max width */
  --ui-header-height: 4rem; /* PHeader height */
}
```

### Color shade overrides

Each semantic color uses shade 500 in light mode and 400 in dark mode. Override per mode:

```css
:root {
  --ui-primary: var(--ui-color-primary-700);
}
.dark {
  --ui-primary: var(--ui-color-primary-200);
}
```

`var(--ui-color-<name>-<shade>)` points at the configured palette (e.g. `var(--ui-color-neutral-800)`). Text, background, and border tokens are variables too (`--ui-color-text`, `--ui-color-bg`, `--ui-color-border`, plus their `-muted`, `-elevated`, … forms). To shift them all at once, assign a different `neutral` palette instead.

### Black or white as primary

```css
:root {
  --ui-primary: black;
}
.dark {
  --ui-primary: white;
}
```

### Focus color

Interactive components show a `focus-visible` outline tinted with their `color` (`outline-primary/25`). For one outline color everywhere, add this outside any `@layer`:

```css
*,
::before,
::after {
  @apply outline-primary/25;
}
```
