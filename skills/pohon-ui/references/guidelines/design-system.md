# Design System

## Semantic colors

Pohon UI uses 7 semantic colors. Never use raw UnoCSS palette colors in components — always use these semantic names.

| Color | Default | When to use |
|---|---|---|
| `primary` | green | CTAs, active states, brand accent, links |
| `secondary` | blue | Secondary actions, complementary highlights |
| `success` | green | Success messages, confirmations, positive states |
| `info` | blue | Informational alerts, tips, neutral highlights |
| `warning` | yellow | Warnings, caution states, pending actions |
| `error` | red | Errors, destructive actions, validation failures |
| `neutral` | slate | Text, borders, backgrounds, disabled states, chrome |

### Choosing colors for components

- **Primary action** on a page (submit, save, confirm) → `color="primary"`
- **Secondary actions** (cancel, back, alternative) → `color="neutral"` with `variant="outline"` or `"ghost"`
- **Destructive actions** (delete, remove) → `color="error"`
- **Status indicators** → match the semantic meaning: `success`, `warning`, `error`, `info`
- **Navigation and chrome** → `color="neutral"`

### Configuring colors

```ts
// Nuxt — app.config.ts
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
})
```

```ts
// Vue — vite.config.ts
ui({
  ui: {
    colors: { primary: 'indigo', secondary: 'violet', neutral: 'zinc' }
  }
})
```

Only colors that exist in your theme work — either UnoCSS's defaults or custom colors defined in `uno.config.ts`.

Available color palettes:
- **Standard UnoCSS**: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
- **Neutral palettes** (for `neutral` key — pick one that matches the aesthetic):
  - `slate` — cool blue-gray, professional (default)
  - `gray` — true neutral, clean
  - `zinc` — slightly cool, modern, techy
  - `neutral` — perfectly balanced
  - `stone` — warm gray, earthy
  - `taupe` — warm brown-gray, sophisticated
  - `mauve` — purple-tinted gray, elegant
  - `mist` — soft blue-gray, airy
  - `olive` — green-tinted gray, natural

### Adding custom brand colors

1. Define all 11 shades in CSS:

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

2. Assign it: `ui: { colors: { primary: 'brand' } }`

### Extending with new semantic color names

To add a color beyond the 7 defaults (e.g., `tertiary`), register it in `theme.colors`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  }
})
```

## Semantic utility classes

Use these everywhere instead of raw palette colors:

### Text
- `color-text` — primary body text
- `color-text-muted` — secondary text (descriptions, hints)
- `color-text-toned` — medium-emphasis text (between muted and default)
- `color-text-dimmed` — tertiary text (placeholders, disabled)
- `color-text-highlighted` — emphasized text (headings, important labels)
- `color-text-inverted` — text on inverted backgrounds (pair with `bg-background-inverted`)

### Backgrounds
- `bg-background` — page background
- `bg-background-muted` — subtle backgrounds (hover states, alternating rows)
- `bg-background-elevated` — raised surfaces (cards, dropdowns)
- `bg-background-accented` — accent backgrounds (active states, selected items)
- `bg-background-inverted` — inverse background (dark on light, light on dark)

### Borders
- `border-border` — standard borders
- `border-border-muted` — subtle borders (dividers, separators)
- `border-border-accented` — accent borders (active states)
- `border-border-inverted` — inverse borders

## Variants

Most components accept a `variant` prop. Choose based on visual weight:

| Variant | Weight | When to use |
|---|---|---|
| `solid` | Highest | Primary actions, main CTAs |
| `outline` | Medium | Secondary actions, form fields |
| `soft` | Medium-low | Tags, badges, subtle buttons |
| `subtle` | Low | Background highlights, less prominent actions |
| `ghost` | Lowest | Inline actions, icon buttons, navigation items |
| `link` | Lowest | Text-only links inside content |

### Rules

- **One solid primary button per view** — everything else should be lower weight
- **Destructive buttons** use `color="error"` but not necessarily `variant="solid"` — use `variant="soft"` or `"outline"` unless it's the primary action on a confirmation dialog
- **Button groups** should use consistent variants — don't mix `solid` and `outline` siblings

## Customizing components

### `ui` prop

Override theme **slots** on a single instance — wins over global config and variants.

```vue
<PButton :ui="{ base: 'font-bold', trailingIcon: 'size-3 rotate-90' }" />
<PCard :ui="{ header: 'bg-background-muted', body: 'p-8' }" />
```

Rules for `ui` overrides:
- **Prefer `defaultVariants`** over slot class overrides when possible (e.g., changing default button variant/size).
- **Don't duplicate default classes** — check the generated theme file first to see what's already there.
- Border radius defaults come from `--ui-radius`, but you can override with `rounded-*` classes in `ui` or `class` when you need a specific radius on a component.

### `class` prop

Override the **root** (or `base`) slot only — simpler than `ui` for single-slot changes.

```vue
<PButton class="font-bold" />
```

### Finding slot names

Read the generated theme file for any component:
- **Nuxt**: `.nuxt/ui/<component>.ts`
- **Vue**: `node_modules/.pohon-ui/ui/<component>.ts`

These files show every available slot name, variant combination, and default class.

### Global config

Override `slots`, `variants`, `compoundVariants`, and `defaultVariants` globally in `app.config.ts` (Nuxt) or `vite.config.ts` (Vue):

```ts
// Nuxt — app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'font-bold'
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
})
```

Use the component `ui` prop to override slot classes; check the generated theme for available slots.

### Replace instead of merge

Classes from the `ui` prop, the `class` prop, and global config are merged onto the component defaults. To replace them instead, set the slot to a function, which receives the default classes as its argument so you can reuse part of them.

In global config it replaces the slot's own classes, so `variants` and `compoundVariants` still apply on top. In the `ui` and `class` props it runs after the variants, so it replaces the resolved classes, variants included.

```vue
<PButton :ui="{ label: () => 'text-base font-bold' }" />
```

```ts
// app.config.ts, applies to every instance
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        label: () => 'text-base font-bold'
      }
    }
  }
})
```

### Theme component

Override theme for a section of the component tree without affecting the rest of the app. Renders no DOM element — uses `provide`/`inject`:

```vue
<PTheme :ui="{ button: { base: 'rounded-full' } }">
  <PButton label="Rounded" />
  <PButton label="Also rounded" />
</PTheme>
```

### Global `defaultVariants`

Override default `size` and `color` for **all** components at once:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ui: {
    theme: {
      defaultVariants: {
        size: 'lg',
        color: 'neutral'
      }
    }
  }
})
```

### `theme.transitions`

Controls whether interactive components get `transition-colors`. Enabled by default.

```ts
// nuxt.config.ts — disable transitions
export default defineNuxtConfig({
  ui: {
    theme: {
      transitions: false
    }
  }
})
```


### Tree-shaking with `experimental.componentDetection`

Enable automatic component detection to only generate CSS for components you actually use:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ui: {
    experimental: {
      componentDetection: true
    }
  }
})
```

For dynamic components (e.g., `<component :is="...">`), pass an array of component names to guarantee they're included:

```ts
componentDetection: ['Modal', 'DropdownMenu', 'Popover']
```

## UnoCSS theme customization

Customize UnoCSS design tokens in `main.css`:

### Fonts

```css
:root {
  --font-sans: 'Public Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

Load custom fonts through `@nuxt/fonts` or your own font provider, then set the CSS variable.

### Breakpoints

```css
:root {
  --breakpoint-3xl: 1920px;
}
```

## CSS variables

Pohon UI exposes CSS variables you can override in `main.css`:

```css
:root {
  --ui-radius: 0.25rem;
  --ui-container: 80rem;
  --ui-header-height: 4rem;
}
```

### Color shade overrides

Each semantic color defaults to shade 500 in light mode, 400 in dark mode. Override per-mode:

```css
:root {
  --ui-primary: var(--ui-color-primary-700);
}
.dark {
  --ui-primary: var(--ui-color-primary-200);
}
```

You can use `var(--ui-color-<name>-<shade>)` to reference shades from the active palette (e.g., `var(--ui-color-neutral-800)` maps to whichever neutral palette is configured).

### Black/white as primary

`black` and `white` have no shades, so they can't be used in config. Set them directly:

```css
:root {
  --ui-primary: black;
}
.dark {
  --ui-primary: white;
}
```
