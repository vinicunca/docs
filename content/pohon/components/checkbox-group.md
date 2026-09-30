---
title: "CheckboxGroup"
description: "A set of checkboxes to select multiple options from a list."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/checkbox-group.md"
---
## Usage

Use the `v-model` directive to control the value of the CheckboxGroup or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
const value = ref([
  "System"
])
</script>

<template>
  <UCheckboxGroup v-model="value" :items="items" />
</template>
```

### Items

Use the `items` prop as an array of strings or numbers:

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
const value = ref([
  "System"
])
</script>

<template>
  <UCheckboxGroup v-model="value" :items="items" />
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- `description?: string`
- [`value?: string`](#value-key)
- `disabled?: boolean`
- [`icon?: string`](#indicator)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from 'pohon-ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: "System",
    description: "Matches your device settings.",
    value: "system"
  },
  {
    label: "Light",
    description: "Always uses the light theme.",
    value: "light"
  },
  {
    label: "Dark",
    description: "Always uses the dark theme.",
    value: "dark"
  }
])
const value = ref([
  "system"
])
</script>

<template>
  <UCheckboxGroup v-model="value" :items="items" />
</template>
```

> [!CAUTION]
> 
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from 'pohon-ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: "System",
    description: "Matches your device settings.",
    id: "system"
  },
  {
    label: "Light",
    description: "Always uses the light theme.",
    id: "light"
  },
  {
    label: "Dark",
    description: "Always uses the dark theme.",
    id: "dark"
  }
])
const value = ref([
  "light"
])
</script>

<template>
  <UCheckboxGroup v-model="value" value-key="id" :items="items" />
</template>
```

### Legend

Use the `legend` prop to set the legend of the CheckboxGroup.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
</script>

<template>
  <UCheckboxGroup legend="Theme" :default-value="[
  'System'
]" :items="items" />
</template>
```

### Color

Use the `color` prop to change the color of the CheckboxGroup.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
</script>

<template>
  <UCheckboxGroup color="neutral" :default-value="[
  'System'
]" :items="items" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the CheckboxGroup.

```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from 'pohon-ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: "System",
    value: "system",
    description: "Matches your device settings."
  },
  {
    label: "Light",
    value: "light",
    description: "Always uses the light theme."
  },
  {
    label: "Dark",
    value: "dark",
    description: "Always uses the dark theme."
  }
])
</script>

<template>
  <UCheckboxGroup color="primary" variant="card" :default-value="[
  'system'
]" :items="items" />
</template>
```

### Size

Use the `size` prop to change the size of the CheckboxGroup.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
</script>

<template>
  <UCheckboxGroup size="xl" variant="list" :default-value="[
  'System'
]" :items="items" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the CheckboxGroup. Defaults to `vertical`.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
</script>

<template>
  <UCheckboxGroup orientation="horizontal" variant="list" :default-value="[
  'System'
]" :items="items" />
</template>
```

### Indicator

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

> [!NOTE]
> 
> An item's `icon` replaces the check mark while the indicator is visible, and is displayed above the label when it is `hidden`.

```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from 'pohon-ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: "System",
    icon: "i-lucide-monitor",
    value: "System",
    class: "w-20"
  },
  {
    label: "Light",
    icon: "i-lucide-sun",
    class: "w-20",
    value: "Light"
  },
  {
    label: "Dark",
    icon: "i-lucide-moon",
    class: "w-20",
    value: "Dark"
  }
])
</script>

<template>
  <UCheckboxGroup indicator="hidden" orientation="horizontal" variant="table" :default-value="[
  'System'
]" :items="items" />
</template>
```

### Disabled

Use the `disabled` prop to disable the CheckboxGroup.

```vue
<script setup lang="ts">
const items = ref([
  "System",
  "Light",
  "Dark"
])
</script>

<template>
  <UCheckboxGroup disabled :default-value="[
  'System'
]" :items="items" />
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
    checkboxGroup: {
      slots: {
        root: 'relative',
        fieldset: 'flex gap-x-2',
        legend: 'mb-1 block font-500 color-text',
        item: ''
      },
      variants: {
        orientation: {
          horizontal: {
            fieldset: 'flex-row'
          },
          vertical: {
            fieldset: 'flex-col'
          }
        },
        color: {
          primary: {},
          secondary: {},
          success: {},
          info: {},
          warning: {},
          error: {},
          neutral: {}
        },
        variant: {
          list: {
            fieldset: 'flex-wrap'
          },
          card: {
            fieldset: 'flex-wrap'
          },
          table: {
            item: [
              'border border-border hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-background-elevated/50',
              'transition-colors'
            ]
          }
        },
        size: {
          xs: {
            fieldset: 'gap-y-0.5',
            legend: 'text-xs'
          },
          sm: {
            fieldset: 'gap-y-0.5',
            legend: 'text-xs'
          },
          md: {
            fieldset: 'gap-y-1',
            legend: 'text-sm'
          },
          lg: {
            fieldset: 'gap-y-1',
            legend: 'text-sm'
          },
          xl: {
            fieldset: 'gap-y-1.5',
            legend: 'text-base'
          }
        },
        required: {
          true: {
            legend: "after:content-['*'] after:ms-0.5 after:color-error"
          }
        },
        highlight: {
          true: {},
          false: {}
        },
        disabled: {
          true: {}
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'table',
          class: {
            item: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-1'
          }
        },
        {
          color: 'secondary',
          variant: 'table',
          class: {
            item: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-1'
          }
        },
        {
          color: 'success',
          variant: 'table',
          class: {
            item: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-1'
          }
        },
        {
          color: 'info',
          variant: 'table',
          class: {
            item: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-1'
          }
        },
        {
          color: 'warning',
          variant: 'table',
          class: {
            item: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-1'
          }
        },
        {
          color: 'error',
          variant: 'table',
          class: {
            item: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-1'
          }
        },
        {
          color: 'neutral',
          variant: 'table',
          class: {
            item: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-1'
          }
        },
        {
          variant: 'table',
          highlight: false,
          class: {
            item: 'hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-border-accented'
          }
        },
        {
          size: 'xs',
          variant: 'table',
          class: {
            item: 'p-2.5'
          }
        },
        {
          size: 'sm',
          variant: 'table',
          class: {
            item: 'p-3'
          }
        },
        {
          size: 'md',
          variant: 'table',
          class: {
            item: 'p-3.5'
          }
        },
        {
          size: 'lg',
          variant: 'table',
          class: {
            item: 'p-4'
          }
        },
        {
          size: 'xl',
          variant: 'table',
          class: {
            item: 'p-4.5'
          }
        },
        {
          orientation: 'horizontal',
          variant: 'table',
          class: {
            item: 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg',
            fieldset: 'gap-0 -space-x-px'
          }
        },
        {
          orientation: 'vertical',
          variant: 'table',
          class: {
            item: 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',
            fieldset: 'gap-0 -space-y-px'
          }
        },
        {
          color: 'primary',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'secondary',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'success',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'info',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'warning',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'error',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-1'
          }
        },
        {
          color: 'neutral',
          variant: 'table',
          class: {
            item: 'has-data-[state=checked]:bg-background-elevated has-data-[state=checked]:border-border-inverted/50 has-data-[state=checked]:z-1'
          }
        },
        {
          variant: 'table',
          disabled: true,
          class: {
            item: 'cursor-not-allowed'
          }
        }
      ],
      defaultVariants: {
        highlight: false,
        size: 'md',
        variant: 'list',
        color: 'primary'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/CheckboxGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/checkbox-group.ts).

---

- [CheckboxGroup](/akar/components/checkbox#group-root)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/CheckboxGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[CheckboxGroup source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/CheckboxGroup.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **legend** — `string | undefined; optional`
- **valueKey** — `VK | undefined; optional; default: "value" as never`: When \`items\` is an array of objects, select the field to use as the value.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: When \`items\` is an array of objects, select the field to use as the label.
- **descriptionKey** — `GetItemKeys<T> | undefined; optional; default: "description"`: When \`items\` is an array of objects, select the field to use as the description.
- **items** — `T | undefined; optional`
- **modelValue** — `GetItemValue<T, VK, undefined, NestedItem<T>>[] | undefined; optional`: The controlled value of the CheckboxGroup. Can be bind as \`v-model\`.
- **defaultValue** — `GetItemValue<T, VK, undefined, NestedItem<T>>[] | undefined; optional`: The value of the CheckboxGroup when initially rendered. Use when you do not need to control the state of the CheckboxGroup.
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **variant** — `"card" | "table" | "list" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation the checkbox buttons are laid out.
- **ui** — `({ root?: SlotClass; fieldset?: SlotClass; legend?: SlotClass; item?: SlotClass; } & { root?: SlotClass; container?: SlotClass; base?: SlotClass; indicator?: SlotClass; icon?: SlotClass; wrapper?: SlotClass; label?: SlotClass; description?: SlotClass; }) | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the checkboxes
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **loop** — `boolean | undefined; optional`: Whether keyboard navigation should loop around
- **icon** — `any; optional`: The icon displayed when checked, or above the label when \`indicator\` is \`hidden\`.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **indicator** — `"start" | "end" | "hidden" | undefined; optional`: Position of the indicator.

### Slots

- **legend** — `{} | undefined`
- **label** — `{ item: T[number] & { id: string; }; }`
- **description** — `{ item: T[number] & { id: string; }; }`

### Events

- **update:modelValue** — `[value: GetItemValue<T, VK, undefined, NestedItem<T>>[]]`
- **change** — `[event: Event]`
