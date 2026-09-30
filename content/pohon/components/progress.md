---
title: "Progress"
description: "An indicator showing the progress of a task."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/progress.md"
---
## Usage

Use the `v-model` directive to control the value of the Progress.

```vue
<script setup lang="ts">
const value = ref(50)
</script>

<template>
  <UProgress v-model="value" />
</template>
```

> [!NOTE]
> 
> Use the [`ProgressGroup`](/pohon/components/progress-group) component to split a single bar into multiple segments that add up to a total.

### Max

Use the `max` prop to set the maximum value of the Progress.

```vue
<script setup lang="ts">
const value = ref(3)
</script>

<template>
  <UProgress v-model="value" :max="4" />
</template>
```

Use the `max` prop with an array of strings to display the active step under the bar, the maximum value of the Progress is the length of the array.

```vue
<script setup lang="ts">
const value = ref(3)
</script>

<template>
  <UProgress v-model="value" :max="[
  'Waiting...',
  'Cloning...',
  'Migrating...',
  'Deploying...',
  'Done!'
]" />
</template>
```

### Status

Use the `status` prop to display the current Progress value above the bar.

```vue
<script setup lang="ts">
const value = ref(50)
</script>

<template>
  <UProgress v-model="value" status />
</template>
```

> [!TIP]
> 
> The status tracks the end of the bar, use `:ui="{ status: 'w-full' }"` to make it span the full width instead.

### Indeterminate

When no `v-model` is set or the value is `null`, the Progress becomes *indeterminate*. The progress bar is animated as a `carousel`, but you can change it using the [`animation`](#animation) prop.

```vue
<script setup lang="ts">
const value = ref(null)
</script>

<template>
  <UProgress />
</template>
```

### Animation

Use the `animation` prop to change the animation of the Progress to an inverse carousel, a swinging bar or an elastic bar. Defaults to `carousel`.

```vue
<template>
  <UProgress animation="swing" />
</template>
```

> [!TIP]
> 
> The animation is automatically disabled when the user prefers reduced motion, the indeterminate bar is displayed as a full width pulse instead.

### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

```vue
<template>
  <UProgress orientation="vertical" class="h-48" />
</template>
```

### Color

Use the `color` prop to change the color of the Progress.

```vue
<template>
  <UProgress color="neutral" />
</template>
```

> [!TIP]
> 
> This prop also accepts any CSS color value for palettes outside the theme.

### Size

Use the `size` prop to change the size of the Progress.

```vue
<template>
  <UProgress size="xl" />
</template>
```

### Inverted

Use the `inverted` prop to visually invert the Progress.

```vue
<template>
  <UProgress inverted v-model="value" />
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
    progress: {
      slots: {
        root: 'gap-2',
        base: 'relative overflow-hidden rounded-full bg-background-accented',
        indicator: 'rounded-full size-full transition-transform duration-280 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse',
        status: 'flex color-text-dimmed duration-280 ease-out motion-reduce:transition-none',
        steps: 'grid items-end',
        step: 'truncate text-end row-start-1 col-start-1 transition-opacity ease-out'
      },
      variants: {
        animation: {
          carousel: '',
          'carousel-inverse': '',
          swing: '',
          elastic: ''
        },
        color: {
          primary: {
            indicator: 'bg-primary',
            steps: 'color-primary'
          },
          secondary: {
            indicator: 'bg-secondary',
            steps: 'color-secondary'
          },
          success: {
            indicator: 'bg-success',
            steps: 'color-success'
          },
          info: {
            indicator: 'bg-info',
            steps: 'color-info'
          },
          warning: {
            indicator: 'bg-warning',
            steps: 'color-warning'
          },
          error: {
            indicator: 'bg-error',
            steps: 'color-error'
          },
          neutral: {
            indicator: 'bg-background-inverted',
            steps: 'color-text-highlighted'
          }
        },
        size: {
          '2xs': {
            status: 'text-xs',
            steps: 'text-xs'
          },
          xs: {
            status: 'text-xs',
            steps: 'text-xs'
          },
          sm: {
            status: 'text-sm',
            steps: 'text-sm'
          },
          md: {
            status: 'text-sm',
            steps: 'text-sm'
          },
          lg: {
            status: 'text-sm',
            steps: 'text-sm'
          },
          xl: {
            status: 'text-base',
            steps: 'text-base'
          },
          '2xl': {
            status: 'text-base',
            steps: 'text-base'
          }
        },
        step: {
          active: {
            step: 'opacity-100'
          },
          first: {
            step: 'opacity-100 color-text-muted'
          },
          other: {
            step: 'opacity-0'
          },
          last: {
            step: ''
          }
        },
        orientation: {
          horizontal: {
            root: 'w-full flex flex-col',
            base: 'w-full',
            status: 'flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]'
          },
          vertical: {
            root: 'h-full flex flex-row-reverse',
            base: 'h-full',
            status: 'flex-col justify-end h-(--percent) min-h-fit transition-[height]'
          }
        },
        inverted: {
          true: {
            status: 'self-end'
          }
        }
      },
      compoundVariants: [
        {
          inverted: true,
          orientation: 'horizontal',
          class: {
            step: 'text-start',
            status: 'flex-row-reverse'
          }
        },
        {
          inverted: true,
          orientation: 'vertical',
          class: {
            steps: 'items-start',
            status: 'flex-col-reverse'
          }
        },
        {
          orientation: 'horizontal',
          size: '2xs',
          class: 'h-px'
        },
        {
          orientation: 'horizontal',
          size: 'xs',
          class: 'h-0.5'
        },
        {
          orientation: 'horizontal',
          size: 'sm',
          class: 'h-1'
        },
        {
          orientation: 'horizontal',
          size: 'md',
          class: 'h-2'
        },
        {
          orientation: 'horizontal',
          size: 'lg',
          class: 'h-3'
        },
        {
          orientation: 'horizontal',
          size: 'xl',
          class: 'h-4'
        },
        {
          orientation: 'horizontal',
          size: '2xl',
          class: 'h-5'
        },
        {
          orientation: 'vertical',
          size: '2xs',
          class: 'w-px'
        },
        {
          orientation: 'vertical',
          size: 'xs',
          class: 'w-0.5'
        },
        {
          orientation: 'vertical',
          size: 'sm',
          class: 'w-1'
        },
        {
          orientation: 'vertical',
          size: 'md',
          class: 'w-2'
        },
        {
          orientation: 'vertical',
          size: 'lg',
          class: 'w-3'
        },
        {
          orientation: 'vertical',
          size: 'xl',
          class: 'w-4'
        },
        {
          orientation: 'vertical',
          size: '2xl',
          class: 'w-5'
        },
        {
          orientation: 'horizontal',
          animation: 'carousel',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_linear_infinite]'
          }
        },
        {
          orientation: 'vertical',
          animation: 'carousel',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]'
          }
        },
        {
          orientation: 'horizontal',
          animation: 'carousel-inverse',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_linear_infinite]'
          }
        },
        {
          orientation: 'vertical',
          animation: 'carousel-inverse',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]'
          }
        },
        {
          orientation: 'horizontal',
          animation: 'swing',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]'
          }
        },
        {
          orientation: 'vertical',
          animation: 'swing',
          class: {
            indicator: 'motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]'
          }
        },
        {
          orientation: 'horizontal',
          animation: 'elastic',
          class: {
            indicator: 'relative motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]'
          }
        },
        {
          orientation: 'vertical',
          animation: 'elastic',
          class: {
            indicator: 'relative motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]'
          }
        }
      ],
      defaultVariants: {
        animation: 'carousel',
        color: 'primary',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Progress.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/progress.ts).

---

- [Progress](/akar/components/progress)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Progress.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Progress source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Progress.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **max** — `number | any[] | undefined; optional`: The maximum progress value.
- **status** — `boolean | undefined; optional`: Display the current progress value.
- **inverted** — `boolean | undefined; optional; default: false`: Whether the progress is visually inverted.
- **size** — `"2xl" | "md" | "2xs" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {}) | undefined; optional`: Any theme color, or any CSS color value for palettes outside the theme.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the progress bar.
- **animation** — `"carousel" | "carousel-inverse" | "swing" | "elastic" | undefined; optional`: The animation of the progress bar.
- **ui** — `{ root?: SlotClass; base?: SlotClass; indicator?: SlotClass; status?: SlotClass; steps?: SlotClass; step?: SlotClass; } | undefined; optional`
- **modelValue** — `number | null | undefined; optional; default: null`: The progress value. Can be bind as \`v-model\`.
- **getValueLabel** — `((value: number | null | undefined, max: number) => string | undefined) | undefined; optional`: A function to get the accessible label text in a human-readable format.   If not provided, the value label will be read as the numeric value as a percentage of the max value.
- **getValueText** — `((value: number | null | undefined, max: number) => string | undefined) | undefined; optional`: A function to get the accessible value text representing the current value in a human-readable format.

### Slots

- **status** — `{ percent?: number | undefined; }`

### Events

- **update:modelValue** — `[value: string[] | undefined]`
- **update:max** — `[value: number]`
