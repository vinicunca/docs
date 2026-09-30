---
title: "Stepper"
description: "A set of steps that are used to indicate progress through a multi-step process."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/stepper.md"
---
## Usage

Use the Stepper component to display a list of items in a stepper.

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `title?: string`
- `description?: AvatarProps`
- `content?: string`
- `icon?: string`
- `value?: string | number`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper :items="items" class="w-full" />
</template>
```

> [!NOTE]
> 
> Click on the items to navigate through the steps.

### Color

Use the `color` prop to change the color of the Stepper.

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper color="neutral" :items="items" class="w-full" />
</template>
```

### Size

Use the `size` prop to change the size of the Stepper.

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper size="xl" :items="items" class="w-full" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Stepper. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper orientation="vertical" :items="items" class="w-full" />
</template>
```

### Disabled

Use the `disabled` prop to disable navigation through the steps.

```vue
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = ref<StepperItem[]>([
  {
    title: "Address",
    description: "Add your address here",
    icon: "i-lucide-house"
  },
  {
    title: "Shipping",
    description: "Set your preferred shipping method",
    icon: "i-lucide-truck"
  },
  {
    title: "Checkout",
    description: "Confirm your order"
  }
])
</script>

<template>
  <UStepper disabled :items="items" />
</template>
```

> [!NOTE]
> See: #with-controls
> 
> This can be useful when you want to force navigation with controls.

## Examples

### With controls

You can add additional controls for the stepper using buttons.

```vue [StepperWithControlsExample.vue]
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items: StepperItem[] = [
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  }, {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  }, {
    title: 'Checkout',
    description: 'Confirm your order'
  }
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <div class="w-full">
    <PStepper ref="stepper" :items="items">
      <template #content="{ item }">
        <Placeholder class="aspect-video">
          {{ item.title }}
        </Placeholder>
      </template>
    </PStepper>

    <div class="flex gap-2 justify-between mt-4">
      <PButton
        leading-icon="i-lucide-arrow-left"
        :disabled="!stepper?.hasPrev"
        @click="stepper?.prev()"
      >
        Prev
      </PButton>

      <PButton
        trailing-icon="i-lucide-arrow-right"
        :disabled="!stepper?.hasNext"
        @click="stepper?.next()"
      >
        Next
      </PButton>
    </div>
  </div>
</template>
```

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index.

```vue [StepperModelValueExample.vue]
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'
import { onMounted, ref } from 'vue'

const items: StepperItem[] = [
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  }, {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  }, {
    title: 'Checkout',
    description: 'Confirm your order'
  }
]

const active = ref(0)

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % items.length
  }, 2000)
})
</script>

<template>
  <PStepper v-model="active" :items="items" class="w-full">
    <template #content="{ item }">
      <Placeholder class="aspect-video">
        This is the {{ item?.title }} step.
      </Placeholder>
    </template>
  </PStepper>
</template>
```

> [!TIP]
> 
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [StepperContentSlotExample.vue]
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items: StepperItem[] = [
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  }, {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  }, {
    title: 'Checkout',
    description: 'Confirm your order'
  }
]
</script>

<template>
  <PStepper ref="stepper" :items="items" class="w-full">
    <template #content="{ item }">
      <Placeholder class="aspect-video">
        This is the {{ item?.title }} step.
      </Placeholder>
    </template>
  </PStepper>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`

```vue [StepperCustomSlotExample.vue]
<script setup lang="ts">
import type { StepperItem } from 'pohon-ui'

const items = [
  {
    slot: 'address' as const,
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  }, {
    slot: 'shipping' as const,
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  }, {
    slot: 'checkout' as const,
    title: 'Checkout',
    description: 'Confirm your order'
  }
] satisfies StepperItem[]
</script>

<template>
  <PStepper :items="items" class="w-full">
    <template #address>
      <Placeholder class="aspect-video">
        Address
      </Placeholder>
    </template>

    <template #shipping>
      <Placeholder class="aspect-video">
        Shipping
      </Placeholder>
    </template>

    <template #checkout>
      <Placeholder class="aspect-video">
        Checkout
      </Placeholder>
    </template>
  </PStepper>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <PStepper ref="stepper" />
</template>
```

This will give you access to the following:

| Name | Type |
| --- | --- |
| `next` | `() => void` |
| `prev` | `() => void` |
| `hasNext` | `Ref<boolean>` |
| `hasPrev` | `Ref<boolean>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    stepper: {
      slots: {
        root: 'flex gap-4',
        header: 'flex',
        item: 'group text-center relative w-full',
        container: 'relative',
        trigger: 'rounded-full font-500 text-center align-middle flex items-center justify-center font-600 group-data-[state=completed]:color-text-inverted group-data-[state=active]:color-text-inverted color-text-muted bg-background-elevated focus-visible:outline-3',
        indicator: 'flex items-center justify-center size-full',
        icon: 'shrink-0',
        separator: 'absolute rounded-full group-data-[disabled]:opacity-75 bg-background-accented',
        wrapper: '',
        title: 'font-500 color-text',
        description: 'color-text-muted text-wrap',
        content: 'size-full'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'flex-col',
            container: 'flex justify-center',
            separator: 'top-[calc(50%-2px)] h-0.5',
            wrapper: 'mt-1'
          },
          vertical: {
            header: 'flex-col gap-4',
            item: 'flex text-start',
            separator: 'start-[calc(50%-1px)] -bottom-[10px] w-0.5'
          }
        },
        size: {
          xs: {
            trigger: 'size-6 text-xs',
            icon: 'size-3',
            title: 'text-xs',
            description: 'text-xs',
            wrapper: 'mt-1.5'
          },
          sm: {
            trigger: 'size-8 text-sm',
            icon: 'size-4',
            title: 'text-xs',
            description: 'text-xs',
            wrapper: 'mt-2'
          },
          md: {
            trigger: 'size-10 text-base',
            icon: 'size-5',
            title: 'text-sm',
            description: 'text-sm',
            wrapper: 'mt-2.5'
          },
          lg: {
            trigger: 'size-12 text-lg',
            icon: 'size-6',
            title: 'text-base',
            description: 'text-base',
            wrapper: 'mt-3'
          },
          xl: {
            trigger: 'size-14 text-xl',
            icon: 'size-7',
            title: 'text-lg',
            description: 'text-lg',
            wrapper: 'mt-3.5'
          }
        },
        color: {
          primary: {
            trigger: 'group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary outline-primary/25',
            separator: 'group-data-[state=completed]:bg-primary'
          },
          secondary: {
            trigger: 'group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary outline-secondary/25',
            separator: 'group-data-[state=completed]:bg-secondary'
          },
          success: {
            trigger: 'group-data-[state=completed]:bg-success group-data-[state=active]:bg-success outline-success/25',
            separator: 'group-data-[state=completed]:bg-success'
          },
          info: {
            trigger: 'group-data-[state=completed]:bg-info group-data-[state=active]:bg-info outline-info/25',
            separator: 'group-data-[state=completed]:bg-info'
          },
          warning: {
            trigger: 'group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning outline-warning/25',
            separator: 'group-data-[state=completed]:bg-warning'
          },
          error: {
            trigger: 'group-data-[state=completed]:bg-error group-data-[state=active]:bg-error outline-error/25',
            separator: 'group-data-[state=completed]:bg-error'
          },
          neutral: {
            trigger: 'group-data-[state=completed]:bg-background-inverted group-data-[state=active]:bg-background-inverted outline-outline-inverted/25',
            separator: 'group-data-[state=completed]:bg-background-inverted'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          size: 'xs',
          class: {
            separator: 'start-[calc(50%+16px)] end-[calc(-50%+16px)]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'sm',
          class: {
            separator: 'start-[calc(50%+20px)] end-[calc(-50%+20px)]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'md',
          class: {
            separator: 'start-[calc(50%+28px)] end-[calc(-50%+28px)]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'lg',
          class: {
            separator: 'start-[calc(50%+32px)] end-[calc(-50%+32px)]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'xl',
          class: {
            separator: 'start-[calc(50%+36px)] end-[calc(-50%+36px)]'
          }
        },
        {
          orientation: 'vertical',
          size: 'xs',
          class: {
            separator: 'top-[30px]',
            item: 'gap-1.5'
          }
        },
        {
          orientation: 'vertical',
          size: 'sm',
          class: {
            separator: 'top-[38px]',
            item: 'gap-2'
          }
        },
        {
          orientation: 'vertical',
          size: 'md',
          class: {
            separator: 'top-[46px]',
            item: 'gap-2.5'
          }
        },
        {
          orientation: 'vertical',
          size: 'lg',
          class: {
            separator: 'top-[54px]',
            item: 'gap-3'
          }
        },
        {
          orientation: 'vertical',
          size: 'xl',
          class: {
            separator: 'top-[62px]',
            item: 'gap-3.5'
          }
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Stepper.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/stepper.ts).

---

- [Stepper](/akar/components/stepper)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Stepper.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Stepper source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Stepper.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **items** — `T[]; required`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the stepper.
- **valueKey** — `GetItemKeys<T> | undefined; optional; default: "value"`: The key used to get the value from the item.
- **defaultValue** — `string | number | undefined; optional`: The value of the step that should be active when initially rendered. Use when you do not need to control the state of the steps.
- **disabled** — `boolean | undefined; optional`
- **ui** — `{ root?: SlotClass; header?: SlotClass; item?: SlotClass; container?: SlotClass; trigger?: SlotClass; indicator?: SlotClass; icon?: SlotClass; separator?: SlotClass; wrapper?: SlotClass; title?: SlotClass; description?: SlotClass; content?: SlotClass; } | undefined; optional`
- **linear** — `boolean | undefined; optional; default: true`: Whether or not the steps must be completed in order.
- **modelValue** — `string | number | undefined; optional`

### Slots

- **indicator** — `{ item: T; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **wrapper** — `{ item: T; }`
- **title** — `{ item: T; }`
- **description** — `{ item: T; }`
- **content** — `{ item: T; }`

### Events

- **next** — `[value: T]`
- **prev** — `[value: T]`
- **update:modelValue** — `[value: string | number | undefined]`
