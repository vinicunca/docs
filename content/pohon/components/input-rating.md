---
title: "InputRating"
description: "A component to display and collect ratings from users."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/input-rating.md"
---
## Usage

Use the `v-model` directive to control the rating value of the InputRating component.

```vue
<script setup lang="ts">
const value = ref(3)
</script>

<template>
  <UInputRating v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
  <UInputRating :default-value="3" />
</template>
```

### Step

Use the `step` prop to control the granularity of each star. Set it to `0.5` to allow half-star ratings.

```vue
<template>
  <UInputRating :step="0.5" :default-value="3.5" />
</template>
```

### Length

Use the `length` prop to set the number of stars. Defaults to `5`.

```vue
<template>
  <UInputRating :length="10" :step="0.5" :default-value="7.5" />
</template>
```

### Clearable

Use the `clearable` prop to allow users to clear the rating by clicking on the currently selected value. Defaults to `false`.

```vue
<template>
  <UInputRating clearable :default-value="3" />
</template>
```

### Hoverable

Use the `hoverable` prop to control whether the rating previews the value when hovering over the stars. Defaults to `false`.

```vue
<template>
  <UInputRating hoverable :default-value="3" />
</template>
```

### Icon

Use the `icon` prop to customize the icon used for stars. Defaults to `i-lucide-star`.

```vue
<template>
  <UInputRating icon="i-lucide-heart" :default-value="4" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize the default star icon globally in your `app.config.ts` under `ui.icons.star` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize the default star icon globally in your `vite.config.ts` under `ui.icons.star` key.

### Empty Icon

Use the `empty-icon` prop to customize the icon used for empty stars. If not provided, uses the same icon as `icon`.

```vue
<template>
  <UInputRating empty-icon="i-lucide-circle" icon="i-lucide-circle-check" :default-value="3" />
</template>
```

### Color

Use the `color` prop to change the color of the filled stars.

```vue
<template>
  <UInputRating color="neutral" :default-value="4" />
</template>
```

### Size

Use the `size` prop to change the size of the stars.

```vue
<template>
  <UInputRating size="xl" :default-value="4" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the rating. Defaults to `horizontal`.

```vue
<template>
  <UInputRating orientation="vertical" :default-value="4" />
</template>
```

### Disabled

Use the `disabled` prop to disable the InputRating component. When disabled, the component has reduced opacity (75%) and shows a `not-allowed` cursor to indicate it's not interactive.

```vue
<template>
  <UInputRating disabled :default-value="3" />
</template>
```

### Readonly

Use the `readonly` prop to display a rating without allowing user interaction. Unlike `disabled`, it maintains normal appearance (full opacity, default cursor). Use when you want to display a rating that cannot be changed but should look normal.

```vue
<template>
  <UInputRating readonly :default-value="4.5" />
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    inputRating: {
      slots: {
        root: '',
        item: [
          'relative inline-block cursor-pointer select-none rounded-sm has-focus-visible:outline-3',
          'transition'
        ],
        indicator: 'absolute inset-0 overflow-hidden outline-none text-transparent w-(--akar-rating-item-step-width) opacity-(--akar-rating-item-step-opacity) z-(--akar-rating-item-step-z-index)',
        icon: 'block',
        emptyIcon: 'block w-full h-full color-text-muted pointer-events-none'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'inline-flex items-center gap-0.5'
          },
          vertical: {
            root: 'inline-flex flex-col items-center gap-0.5'
          }
        },
        size: {
          xs: {
            item: 'size-3',
            icon: 'size-3'
          },
          sm: {
            item: 'size-4',
            icon: 'size-4'
          },
          md: {
            item: 'size-5',
            icon: 'size-5'
          },
          lg: {
            item: 'size-6',
            icon: 'size-6'
          },
          xl: {
            item: 'size-7',
            icon: 'size-7'
          }
        },
        color: {
          primary: {
            indicator: 'data-[state=active]:color-primary',
            item: 'outline-primary/25'
          },
          secondary: {
            indicator: 'data-[state=active]:color-secondary',
            item: 'outline-secondary/25'
          },
          success: {
            indicator: 'data-[state=active]:color-success',
            item: 'outline-success/25'
          },
          info: {
            indicator: 'data-[state=active]:color-info',
            item: 'outline-info/25'
          },
          warning: {
            indicator: 'data-[state=active]:color-warning',
            item: 'outline-warning/25'
          },
          error: {
            indicator: 'data-[state=active]:color-error',
            item: 'outline-error/25'
          },
          neutral: {
            indicator: 'data-[state=active]:color-text-highlighted',
            item: 'outline-outline-inverted/25'
          }
        },
        readonly: {
          true: {
            root: 'cursor-default',
            item: 'cursor-default'
          },
          false: {}
        },
        disabled: {
          true: {
            root: 'opacity-75 cursor-not-allowed',
            item: 'cursor-not-allowed pointer-events-none'
          },
          false: {}
        }
      },
      compoundVariants: [
        {
          readonly: false,
          disabled: false,
          class: {
            item: 'hover:scale-110'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/InputRating.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/input-rating.ts).

---

- [Rating](/akar/components/rating)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputRating.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[InputRating source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputRating.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **id** — `string | undefined; optional`: The id of the rating.
- **readonly** — `boolean | undefined; optional; default: false`: Make the rating readonly (non-interactive).
- **icon** — `any; optional`: The icon displayed for each rating value.
- **emptyIcon** — `any; optional`: The icon displayed for empty rating values. Defaults to \`icon\` when not provided.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the rating.
- **ui** — `{ root?: SlotClass; item?: SlotClass; indicator?: SlotClass; icon?: SlotClass; emptyIcon?: SlotClass; } | undefined; optional`
- **defaultValue** — `number | undefined; optional; default: 0`: The rating value when initially rendered. Use when you do not need to control the state of the rating.
- **modelValue** — `number | undefined; optional`: The controlled rating value. Can be bound with \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with radio items.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **length** — `number | undefined; optional; default: 5`: The number of rating items to render.
- **step** — `1 | 0.5 | 0.25 | 0.1 | undefined; optional; default: 1`: The granularity each rating item is divided into.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **clearable** — `boolean | undefined; optional; default: false`: When \`true\`, clicking the currently selected rating resets the value to \`0\`.
- **hoverable** — `boolean | undefined; optional; default: false`: When \`true\`, the rating previews the value under the pointer on hover.

### Slots

- **item** — `{ index: number; filled: boolean; }`: Rendered for each item. \`filled\` is \`false\` for the empty background layer and \`true\` for the highlighted overlay.

### Events

- **update:modelValue** — `[payload: number]`
- **change** — `[event: Event]`
