---
title: "CSS Variables"
description: "Pohon UI uses CSS variables as design tokens for flexible, consistent theming with built-in light and dark mode support."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/5.theme/2.css-variables.md"
---
## Colors

Pohon UI provides UnoCSS utility classes for each [semantic color](/pohon/getting-started/theme/design-system#semantic-colors) you define, so you can use class names like `text-error` or `bg-success`:

```vue
<template>
  <span class="text-primary">Primary</span>
  <span class="text-secondary">Secondary</span>
  <span class="text-success">Success</span>
  <span class="text-info">Info</span>
  <span class="text-warning">Warning</span>
  <span class="text-error">Error</span>
</template>
```

Each utility class uses a CSS variable to set its color for light and dark modes:

```css [Light]
:root {
  --ui-primary: var(--ui-color-primary-500);
  --ui-secondary: var(--ui-color-secondary-500);
  --ui-success: var(--ui-color-success-500);
  --ui-info: var(--ui-color-info-500);
  --ui-warning: var(--ui-color-warning-500);
  --ui-error: var(--ui-color-error-500);
}
```

```css [Dark]
.dark {
  --ui-primary: var(--ui-color-primary-400);
  --ui-secondary: var(--ui-color-secondary-400);
  --ui-success: var(--ui-color-success-400);
  --ui-info: var(--ui-color-info-400);
  --ui-warning: var(--ui-color-warning-400);
  --ui-error: var(--ui-color-error-400);
}
```

> [!TIP]
> 
> You can adjust which shade each utility class uses for light and dark mode in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-primary: var(--ui-color-primary-700);
> }
> 
> .dark {
>   --ui-primary: var(--ui-color-primary-200);
> }
> ```

> [!WARNING]
> 
> You can't use `primary: 'black'` in your [**config**](/pohon/getting-started/theme/design-system#runtime-configuration) because `black` doesn't have multiple shades. To use solid black or white as your primary color, set it directly in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-primary: black;
> }
> 
> .dark {
>   --ui-primary: white;
> }
> ```

## Text

Pohon UI provides UnoCSS utility classes for text colors, so you can use class names like `color-text-dimmed` or `color-text-muted`:

```vue
<template>
  <span class="color-text-dimmed">Dimmed</span>
  <span class="color-text-muted">Muted</span>
  <span class="color-text-toned">Toned</span>
  <span class="color-text">Text</span>
  <span class="color-text-highlighted">Highlighted</span>
  <span class="color-text-inverted bg-background-inverted">Inverted</span>
</template>
```

Each utility class uses a CSS variable to set its color for light and dark modes:

```css [Light]
:root {
  --ui-color-text-dimmed: var(--ui-color-neutral-400);
  --ui-color-text-muted: var(--ui-color-neutral-500);
  --ui-color-text-toned: var(--ui-color-neutral-600);
  --ui-color-text: var(--ui-color-neutral-700);
  --ui-color-text-highlighted: var(--ui-color-neutral-900);
  --ui-color-text-inverted: white;
}
```

```css [Dark]
.dark {
  --ui-color-text-dimmed: var(--ui-color-neutral-500);
  --ui-color-text-muted: var(--ui-color-neutral-400);
  --ui-color-text-toned: var(--ui-color-neutral-300);
  --ui-color-text: var(--ui-color-neutral-200);
  --ui-color-text-highlighted: white;
  --ui-color-text-inverted: var(--ui-color-neutral-900);
}
```

> [!TIP]
> 
> You can customize these CSS variables in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-color-text: var(--ui-color-neutral-900);
> }
> 
> .dark {
>   --ui-color-text: white;
> }
> ```
> 
> To change several of these variables at once, [assign a different color to `neutral`](/pohon/getting-started/theme/design-system#runtime-configuration) in your config instead.

## Background

Pohon UI provides UnoCSS utility classes for background colors, so you can use class names like `bg-background` or `bg-background-muted`:

```vue
<template>
  <div class="bg-background">Default</div>
  <div class="bg-background-muted">Muted</div>
  <div class="bg-background-elevated">Elevated</div>
  <div class="bg-background-accented">Accented</div>
  <div class="bg-background-inverted color-text-inverted">Inverted</div>
</template>
```

Each utility class uses a CSS variable to set its color for light and dark modes:

```css [Light]
:root {
  --ui-color-bg: white;
  --ui-color-bg-muted: var(--ui-color-neutral-50);
  --ui-color-bg-elevated: var(--ui-color-neutral-100);
  --ui-color-bg-accented: var(--ui-color-neutral-200);
  --ui-color-bg-inverted: var(--ui-color-neutral-900);
}
```

```css [Dark]
.dark {
  --ui-color-bg: var(--ui-color-neutral-900);
  --ui-color-bg-muted: var(--ui-color-neutral-800);
  --ui-color-bg-elevated: var(--ui-color-neutral-800);
  --ui-color-bg-accented: var(--ui-color-neutral-700);
  --ui-color-bg-inverted: white;
}
```

> [!TIP]
> 
> You can customize these CSS variables in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-color-bg: var(--ui-color-neutral-50);
> }
> 
> .dark {
>   --ui-color-bg: var(--ui-color-neutral-950);
> }
> ```

## Border

Pohon UI provides UnoCSS utility classes for border colors, so you can use class names like `border-border` or `border-border-muted`:

```vue
<template>
  <div class="border border-border">Default</div>
  <div class="border border-border-muted">Muted</div>
  <div class="border border-border-accented">Accented</div>
  <div class="border border-border-inverted">Inverted</div>
</template>
```

Each utility class uses a CSS variable to set its color for light and dark modes:

```css [Light]
:root {
  --ui-color-border: var(--ui-color-neutral-200);
  --ui-color-border-muted: var(--ui-color-neutral-200);
  --ui-color-border-accented: var(--ui-color-neutral-300);
  --ui-color-border-inverted: var(--ui-color-neutral-900);
}
```

```css [Dark]
.dark {
  --ui-color-border: var(--ui-color-neutral-800);
  --ui-color-border-muted: var(--ui-color-neutral-700);
  --ui-color-border-accented: var(--ui-color-neutral-700);
  --ui-color-border-inverted: white;
}
```

> [!TIP]
> 
> You can customize these CSS variables in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-color-border: var(--ui-color-neutral-100);
> }
> 
> .dark {
>   --ui-color-border: var(--ui-color-neutral-900);
> }
> ```

## Focus

Pohon UI applies a `focus-visible` outline on every interactive element, tinted with the `color` prop of the component, e.g. `outline-primary/25` when `color="primary"` or `outline-outline-inverted/25` when `color="neutral"`.

If you prefer a single outline color across your entire app regardless of the component color, you can add a global rule in your `main.css` file:

```css [Primary]
*,
::before,
::after {
  @apply outline-primary/25;
}

*:focus-visible,
*:has(> a:focus-visible) {
  --tw-ring-color: var(--ui-primary);
}
```

```css [Neutral]
*,
::before,
::after {
  @apply outline-outline-inverted/25;
}

*:focus-visible,
*:has(> a:focus-visible) {
  --tw-ring-color: var(--ui-color-border-inverted);
}
```

The first rule tints the focus outline of every component, the second one aligns the ring recolor applied on focus by variants with a visible border like `outline` or `subtle`, including cards that highlight when their link is focused.

> [!NOTE]
> 
> Make sure to declare these rules outside of any `@layer` so they take precedence over the colors set by the component themes. Keep in mind the first rule also tints the native focus outline of your own elements, and variants recoloring a `border` on focus like [FileUpload](/pohon/components/file-upload) or [ContentSurround](/pohon/components/content-surround) keep following the component `color`.

## Radius

Pohon UI overrides UnoCSS's default `rounded-*` utilities with a unified border radius system, so you can use regular [border radius utilities](https://unocss.dev/docs/border-radius) like `rounded-xs` or `rounded-2xl`:

```vue
<template>
  <div class="rounded-xs">xs</div>
  <div class="rounded-sm">sm</div>
  <div class="rounded-md">md</div>
  <div class="rounded-lg">lg</div>
  <div class="rounded-xl">xl</div>
  <div class="rounded-2xl">2xl</div>
  <div class="rounded-3xl">3xl</div>
</template>
```

These utility classes are calculated based on a global `--ui-radius` CSS variable, which defines the base radius value applied across all components for a consistent look.

```css
:root {
  --ui-radius: 0.25rem;
}
```

Each utility multiplies this base value:

```css
:root {
  --radius-xs: calc(var(--ui-radius) * 0.5);
  --radius-sm: var(--ui-radius);
  --radius-md: calc(var(--ui-radius) * 1.5);
  --radius-lg: calc(var(--ui-radius) * 2);
  --radius-xl: calc(var(--ui-radius) * 3);
  --radius-2xl: calc(var(--ui-radius) * 4);
  --radius-3xl: calc(var(--ui-radius) * 6);
}
```

> [!TIP]
> 
> You can customize the base radius value in your `main.css` file:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-radius: 0.5rem;
> }
> ```

> [!WARNING]
> 
> Changing `--ui-radius` also affects the `rounded-xs` to `rounded-3xl` classes on your own markup and third-party components, not only Pohon UI components.

> [!NOTE]
> 
> Try the  theme menu in the header above to change the base radius value.

## Container

Pohon UI provides a `--ui-container` CSS variable that controls the maximum width of the [Container](/pohon/components/container) component.

```css
:root {
  --ui-container: 80rem; /* var(--container-7xl) */
}
```

> [!TIP]
> 
> You can customize this value in your `main.css` file to adjust container widths consistently throughout your application:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --container-8xl: 90rem;
> }
> 
> :root {
>   --ui-container: var(--container-8xl);
> }
> ```

## Header

Pohon UI provides a `--ui-header-height` CSS variable that controls the height of the [Header](/pohon/components/header) component.

```css
:root {
  --ui-header-height: 4rem;
}
```

> [!TIP]
> 
> You can customize this value in your `main.css` to adjust header height consistently throughout your application:
> 
> ```css [app/assets/css/main.css]
> :root {
>   --ui-header-height: 6rem;
> }
> ```

## Body

Pohon UI applies default classes on the `<body>` element of your app for consistent theming across light and dark modes:

```css
body {
  @apply antialiased color-text bg-background scheme-light dark:scheme-dark;
}
```


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
