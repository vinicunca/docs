---
title: "Kbd"
description: "A kbd element to display a keyboard key."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/kbd.md"
---
## Usage

Use the default slot to set the value of the Kbd.

```vue
<template>
  <UKbd>
    K
  </UKbd>
</template>
```

### Value

Use the `value` prop to set the value of the Kbd.

```vue
<template>
  <UKbd value="K" />
</template>
```

You can pass special keys to the `value` prop that goes through the [`useKbd`](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/composables/useKbd.ts) composable. For example, the `meta` key displays as `⌘` on macOS and `Ctrl` on other platforms.

```vue
<template>
  <UKbd value="meta" />
</template>
```

### Color

Use the `color` prop to change the color of the Kbd.

```vue
<template>
  <UKbd color="neutral">
    K
  </UKbd>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Kbd.

```vue
<template>
  <UKbd color="neutral" variant="solid">
    K
  </UKbd>
</template>
```

### Size

Use the `size` prop to change the size of the Kbd.

```vue
<template>
  <UKbd size="lg">
    K
  </UKbd>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Badge.

```vue
<template>
  <UKbd class="font-bold rounded-full" variant="subtle">
    K
  </UKbd>
</template>
```

## API

### Props

```ts
/**
 * Props for the Kbd component
 */
interface KbdProps {
  value?: string | undefined;
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Kbd component
 */
interface KbdSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    kbd: {
      base: 'inline-flex items-center justify-center px-1 rounded-sm font-500 font-sans uppercase',
      variants: {
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: ''
        },
        size: {
          sm: 'h-4 min-w-[16px] text-[10px]',
          md: 'h-5 min-w-[20px] text-[11px]',
          lg: 'h-6 min-w-[24px] text-[12px]'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'color-text-inverted bg-primary'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'color-text-inverted bg-secondary'
        },
        {
          color: 'success',
          variant: 'solid',
          class: 'color-text-inverted bg-success'
        },
        {
          color: 'info',
          variant: 'solid',
          class: 'color-text-inverted bg-info'
        },
        {
          color: 'warning',
          variant: 'solid',
          class: 'color-text-inverted bg-warning'
        },
        {
          color: 'error',
          variant: 'solid',
          class: 'color-text-inverted bg-error'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring ring-inset ring-primary/50 color-primary'
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: 'ring ring-inset ring-secondary/50 color-secondary'
        },
        {
          color: 'success',
          variant: 'outline',
          class: 'ring ring-inset ring-success/50 color-success'
        },
        {
          color: 'info',
          variant: 'outline',
          class: 'ring ring-inset ring-info/50 color-info'
        },
        {
          color: 'warning',
          variant: 'outline',
          class: 'ring ring-inset ring-warning/50 color-warning'
        },
        {
          color: 'error',
          variant: 'outline',
          class: 'ring ring-inset ring-error/50 color-error'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'color-primary bg-primary/10'
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: 'color-secondary bg-secondary/10'
        },
        {
          color: 'success',
          variant: 'soft',
          class: 'color-success bg-success/10'
        },
        {
          color: 'info',
          variant: 'soft',
          class: 'color-info bg-info/10'
        },
        {
          color: 'warning',
          variant: 'soft',
          class: 'color-warning bg-warning/10'
        },
        {
          color: 'error',
          variant: 'soft',
          class: 'color-error bg-error/10'
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'color-primary ring ring-inset ring-primary/25 bg-primary/10'
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: 'color-secondary ring ring-inset ring-secondary/25 bg-secondary/10'
        },
        {
          color: 'success',
          variant: 'subtle',
          class: 'color-success ring ring-inset ring-success/25 bg-success/10'
        },
        {
          color: 'info',
          variant: 'subtle',
          class: 'color-info ring ring-inset ring-info/25 bg-info/10'
        },
        {
          color: 'warning',
          variant: 'subtle',
          class: 'color-warning ring ring-inset ring-warning/25 bg-warning/10'
        },
        {
          color: 'error',
          variant: 'subtle',
          class: 'color-error ring ring-inset ring-error/25 bg-error/10'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'color-text-inverted bg-background-inverted'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring ring-inset ring-ring-accented color-text bg-background'
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'color-text bg-background-elevated'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'ring ring-inset ring-ring-accented color-text bg-background-elevated'
        }
      ],
      defaultVariants: {
        variant: 'outline',
        color: 'neutral',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Kbd.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/kbd.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Kbd.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Kbd source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Kbd.vue)

### Props

- **as** — `any; optional; default: "kbd"`: The element or component this component should render as.
- **value** — `string | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **size** — `"md" | "sm" | "lg" | undefined; optional`
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
