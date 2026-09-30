---
title: "ProgressGroup"
description: "A progress bar split into multiple segments that add up to a total."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/progress-group.md"
---
## Usage

Use the ProgressGroup component to display multiple values as segments of a single progress bar.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "System",
    value: 24,
    color: "neutral",
    icon: "i-lucide-cog"
  },
  {
    label: "Apps",
    value: 8,
    color: "error",
    icon: "i-lucide-app-window"
  },
  {
    label: "Documents",
    value: 12,
    color: "warning",
    icon: "i-lucide-file"
  },
  {
    label: "Multimedia",
    value: 42,
    color: "success",
    icon: "i-lucide-film"
  }
])
</script>

<template>
  <UProgressGroup :max="128" :items="items" class="w-96" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `value?: number`
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`](#with-custom-colors)
- `slot?: string`
- `class?: any`
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "Compute",
    value: 42,
    color: "primary"
  },
  {
    label: "Storage",
    value: 18,
    color: "info"
  },
  {
    label: "Bandwidth",
    value: 9,
    color: "warning"
  }
])
</script>

<template>
  <UProgressGroup :items="items" class="w-96" />
</template>
```

> [!NOTE]
> 
> Items without an `icon` get a colored dot in the list instead.

### Max

Use the `max` prop to set the value all items add up to. Defaults to `100`.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "Used",
    value: 128,
    color: "primary"
  },
  {
    label: "Reserved",
    value: 64,
    color: "neutral"
  }
])
</script>

<template>
  <UProgressGroup :max="512" :items="items" class="w-96" />
</template>
```

> [!NOTE]
> 
> Values are clamped between `0` and `max`, and segments that add up to more than `max` share the track proportionally.

### Status

Use the `status` prop to display the summed value above the bar.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "System",
    value: 24,
    color: "neutral"
  },
  {
    label: "Apps",
    value: 8,
    color: "error"
  },
  {
    label: "Multimedia",
    value: 42,
    color: "success"
  }
])
</script>

<template>
  <UProgressGroup status :max="128" :items="items" class="w-96" />
</template>
```

> [!TIP]
> 
> The status tracks the end of the bar, use `:ui="{ status: 'w-full' }"` to make it span the full width instead.

### Color

Use the `color` prop to change the color of every segment that doesn't set its own.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "Read",
    value: 42
  },
  {
    label: "Write",
    value: 18
  }
])
</script>

<template>
  <UProgressGroup color="neutral" :items="items" class="w-96" />
</template>
```

> [!TIP]
> 
> Both this prop and each item's `color` accept any CSS color value, which is handy for palettes outside the theme.

### Size

Use the `size` prop to change the size of the ProgressGroup.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "Read",
    value: 42,
    color: "primary"
  },
  {
    label: "Write",
    value: 18,
    color: "info"
  }
])
</script>

<template>
  <UProgressGroup size="xl" :items="items" class="w-96" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the ProgressGroup. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items = ref<ProgressGroupItem[]>([
  {
    label: "Read",
    value: 42,
    color: "primary"
  },
  {
    label: "Write",
    value: 18,
    color: "info"
  }
])
</script>

<template>
  <UProgressGroup orientation="vertical" :items="items" class="h-48" />
</template>
```

## Examples

### With status slot

Use the `#status` slot to replace the summed percentage with your own content.

```vue [ProgressGroupStatusExample.vue]
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const max = 128

const items: ProgressGroupItem[] = [
  { label: 'System', value: 24, color: 'neutral', icon: 'i-lucide-cog' },
  { label: 'Apps', value: 8, color: 'error', icon: 'i-lucide-app-window' },
  { label: 'Documents', value: 12, color: 'warning', icon: 'i-lucide-file' },
  { label: 'Multimedia', value: 42, color: 'success', icon: 'i-lucide-film' }
]

const used = items.reduce((total, item) => total + (item.value ?? 0), 0)
</script>

<template>
  <PProgressGroup :items="items" :max="max" status class="w-96" :ui="{ status: 'w-full justify-between' }">
    <template #status>
      <p>{{ used }}GB used</p>
      <p class="color-text-muted">
        {{ max - used }}GB remaining
      </p>
    </template>
  </PProgressGroup>
</template>
```

### With item slots

Use the `#item-label` and `#item-trailing` slots to change what each entry displays. Both receive the `item`, its `index` and its `percent`.

```vue [ProgressGroupItemExample.vue]
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const items: ProgressGroupItem[] = [
  { label: 'System', value: 24, color: 'neutral' },
  { label: 'Apps', value: 8, color: 'error' },
  { label: 'Documents', value: 12, color: 'warning' },
  { label: 'Multimedia', value: 42, color: 'success' }
]
</script>

<template>
  <PProgressGroup :items="items" :max="128" class="w-96">
    <template #item-label="{ item }">
      <span class="font-medium">{{ item.label }}</span>
    </template>

    <template #item-trailing="{ item }">
      {{ item.value }}GB
    </template>
  </PProgressGroup>
</template>
```

### With custom colors

Give each item a CSS color to build a breakdown outside the theme palette.

```vue [ProgressGroupCustomColorExample.vue]
<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const max = 128

const items: ProgressGroupItem[] = [
  { label: 'System prompt', value: 4.2, color: 'var(--color-neutral-400)' },
  { label: 'Tool definitions', value: 18.4, color: 'var(--color-violet-400)' },
  { label: 'Rules', value: 12.8, color: 'var(--color-green-400)' },
  { label: 'Skills', value: 7.1, color: 'var(--color-amber-400)' },
  { label: 'MCP & dynamic tools', value: 17.1, color: 'var(--color-rose-400)' },
  { label: 'Subagent definitions', value: 5.5, color: 'var(--color-sky-400)' },
  { label: 'Conversation', value: 24.6, color: 'var(--color-orange-400)' }
]

const used = items.reduce((total, item) => total + (item.value ?? 0), 0)
</script>

<template>
  <PProgressGroup :items="items" :max="max" status class="w-96" :ui="{ status: 'w-full justify-between' }">
    <template #status="{ percent }">
      <p>{{ percent }}% Full</p>
      <p class="color-text-muted">
        ~{{ used.toFixed(1) }}K / {{ max }}K Tokens
      </p>
    </template>

    <template #item-trailing="{ item }">
      {{ item.value }}K
    </template>
  </PProgressGroup>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    progressGroup: {
      slots: {
        root: 'gap-2',
        base: 'flex overflow-hidden rounded-full bg-background-accented',
        segment: 'duration-280 ease-out motion-reduce:transition-none',
        indicator: 'size-full',
        status: 'flex color-text-dimmed duration-280 ease-out motion-reduce:transition-none',
        list: 'flex flex-col gap-1',
        item: 'flex items-center gap-1.5 min-w-0',
        itemLeadingIcon: 'shrink-0',
        itemLeadingDot: 'shrink-0 rounded-full',
        itemLabel: 'truncate',
        itemTrailing: 'ms-auto shrink-0 color-text-dimmed'
      },
      variants: {
        color: {
          primary: {
            indicator: 'bg-primary',
            itemLeadingIcon: 'color-primary',
            itemLeadingDot: 'bg-primary'
          },
          secondary: {
            indicator: 'bg-secondary',
            itemLeadingIcon: 'color-secondary',
            itemLeadingDot: 'bg-secondary'
          },
          success: {
            indicator: 'bg-success',
            itemLeadingIcon: 'color-success',
            itemLeadingDot: 'bg-success'
          },
          info: {
            indicator: 'bg-info',
            itemLeadingIcon: 'color-info',
            itemLeadingDot: 'bg-info'
          },
          warning: {
            indicator: 'bg-warning',
            itemLeadingIcon: 'color-warning',
            itemLeadingDot: 'bg-warning'
          },
          error: {
            indicator: 'bg-error',
            itemLeadingIcon: 'color-error',
            itemLeadingDot: 'bg-error'
          },
          neutral: {
            indicator: 'bg-background-inverted',
            itemLeadingIcon: 'color-text-highlighted',
            itemLeadingDot: 'bg-background-inverted'
          }
        },
        size: {
          '2xs': {
            status: 'text-xs',
            list: 'text-xs',
            itemLeadingIcon: 'size-3',
            itemLeadingDot: 'size-1.5'
          },
          xs: {
            status: 'text-xs',
            list: 'text-xs',
            itemLeadingIcon: 'size-3',
            itemLeadingDot: 'size-1.5'
          },
          sm: {
            status: 'text-sm',
            list: 'text-sm',
            itemLeadingIcon: 'size-4',
            itemLeadingDot: 'size-2'
          },
          md: {
            status: 'text-sm',
            list: 'text-sm',
            itemLeadingIcon: 'size-4',
            itemLeadingDot: 'size-2'
          },
          lg: {
            status: 'text-sm',
            list: 'text-sm',
            itemLeadingIcon: 'size-4',
            itemLeadingDot: 'size-2'
          },
          xl: {
            status: 'text-base',
            list: 'text-base',
            itemLeadingIcon: 'size-5',
            itemLeadingDot: 'size-2.5'
          },
          '2xl': {
            status: 'text-base',
            list: 'text-base',
            itemLeadingIcon: 'size-5',
            itemLeadingDot: 'size-2.5'
          }
        },
        orientation: {
          horizontal: {
            root: 'w-full flex flex-col',
            base: 'w-full flex-row',
            segment: 'h-full transition-[width]',
            status: 'flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]'
          },
          vertical: {
            root: 'h-full flex flex-row',
            base: 'h-full flex-col',
            segment: 'w-full transition-[height]',
            status: 'flex-col justify-end h-(--percent) min-h-fit transition-[height]'
          }
        }
      },
      compoundVariants: [
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ProgressGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/progress-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ProgressGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ProgressGroup source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ProgressGroup.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **items** — `T[] | undefined; optional`
- **max** — `number | undefined; optional; default: 100`: The value all items add up to, used to compute each segment's share of the track.
- **status** — `boolean | undefined; optional`: Display the summed progress value.
- **size** — `"2xl" | "md" | "2xs" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {}) | undefined; optional`: Any theme color, or any CSS color value for palettes outside the theme.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the progress bar.
- **ui** — `{ root?: SlotClass; base?: SlotClass; segment?: SlotClass; indicator?: SlotClass; status?: SlotClass; list?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingDot?: SlotClass; itemLabel?: SlotClass; itemTrailing?: SlotClass; } | undefined; optional`

### Slots

- **status** — `{ percent: number; }`
- **item** — `{ item: T; index: number; percent: number; }`
- **item-leading** — `{ item: T; index: number; percent: number; }`
- **item-label** — `{ item: T; index: number; percent: number; }`
- **item-trailing** — `{ item: T; index: number; percent: number; }`

### Events

No events are declared.
