---
title: "Accordion"
description: "A stacked set of collapsible panels."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/accordion.md"
---
## Usage

Use the Accordion component to display a list of collapsible items.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Is Pohon UI free to use?",
    content: "Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone."
  },
  {
    label: "Can I use Pohon UI with Vue without Nuxt?",
    content: "Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/pohon/getting-started/installation/vue) to get started."
  },
  {
    label: "Is Pohon UI production-ready?",
    content: "Pohon UI is designed for production Vue applications and maintained with component tests and regular updates."
  }
])
</script>

<template>
  <UAccordion :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `trailingIcon?: string`
- `content?: string`
- `value?: string`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically."
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme."
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion :items="items" />
</template>
```

### Multiple

Set the `type` prop to `multiple` to allow multiple items to be active at the same time. Defaults to `single`.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically."
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme."
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion type="multiple" :items="items" />
</template>
```

### Collapsible

When `type` is `single`, you can set the `collapsible` prop to `false` to prevent the active item from collapsing.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically."
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme."
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion :collapsible="false" :items="items" />
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the accordion is collapsed. Defaults to `true`.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically."
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme."
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion :unmount-on-hide="false" :items="items" />
</template>
```

> [!NOTE]
> 
> You can inspect the DOM to see each item's content being rendered.

### Disabled

Use the `disabled` property to disable the Accordion.

You can also disable a specific item by using the `disabled` property in the item object.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically."
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme.",
    disabled: true
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion disabled :items="items" />
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/pohon/components/icon) of each item. Defaults to `i-lucide-chevron-down`.

> [!TIP]
> 
> You can also set an icon for a specific item by using the `trailingIcon` property in the item object.

```vue
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = ref<AccordionItem[]>([
  {
    label: "Icons",
    icon: "i-lucide-smile",
    content: "You have nothing to do, @nuxt/icon will handle it automatically.",
    trailingIcon: "i-lucide-plus"
  },
  {
    label: "Colors",
    icon: "i-lucide-swatch-book",
    content: "Choose a primary and a neutral color from your UnoCSS theme."
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    content: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
  }
])
</script>

<template>
  <UAccordion trailing-icon="i-lucide-arrow-down" :items="items" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.

## Examples

### Control active item(s)

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index **as a string**.

```vue [AccordionModelValueExample.vue]
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items: AccordionItem[] = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your UnoCSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
]

const active = ref('0')

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
  setInterval(() => {
    active.value = String((Number(active.value) + 1) % items.length)
  }, 2000)
})
</script>

<template>
  <PAccordion v-model="active" :items="items" />
</template>
```

> [!TIP]
> 
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

> [!CAUTION]
> 
> When `type="multiple"`, ensure to pass an array to the `default-value` prop or the `v-model` directive.

### With drag and drop

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/) composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) to enable drag and drop functionality on the Accordion. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/) to provide a seamless drag and drop experience.

```vue [AccordionDragAndDropExample.vue]
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'
import { useSortable } from '@vueuse/integrations/useSortable'

const items = shallowRef<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your UnoCSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])

const accordion = useTemplateRef<HTMLElement>('accordion')

useSortable(accordion, items, {
  animation: 150
})
</script>

<template>
  <PAccordion ref="accordion" :items="items" />
</template>
```

### With body slot

Use the `#body` slot to customize the body of each item.

```vue [AccordionBodySlotExample.vue]
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items: AccordionItem[] = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box'
  }
]
</script>

<template>
  <PAccordion :items="items">
    <template #body="{ item }">
      This is the {{ item.label }} panel.
    </template>
  </PAccordion>
</template>
```

> [!TIP]
> 
> The `#body` slot includes some pre-defined styles, use the [`#content` slot](#with-content-slot) if you want to start from scratch.

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [AccordionContentSlotExample.vue]
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items: AccordionItem[] = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box'
  }
]
</script>

<template>
  <PAccordion :items="items">
    <template #content="{ item }">
      <p class="pb-3.5 text-sm color-text-muted">
        This is the {{ item.label }} panel.
      </p>
    </template>
  </PAccordion>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-body`

```vue [AccordionCustomSlotExample.vue]
<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    slot: 'colors' as const,
    content: 'Choose a primary and a neutral color from your UnoCSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
] satisfies AccordionItem[]
</script>

<template>
  <PAccordion :items="items">
    <template #colors="{ item }">
      <p class="text-sm pb-3.5 text-primary">
        {{ item.content }}
      </p>
    </template>
  </PAccordion>
</template>
```

### With markdown content

You can use the [Markdown](https://comark.dev/rendering/vue) component from `@comark/vue` to render markdown in the accordion items.

```vue [AccordionMarkdownExample.vue]
<script setup lang="ts">
import { Markdown } from '@comark/vue'

const items = [
  {
    label: 'Is Pohon UI free to use?',
    icon: 'i-lucide-circle-help',
    content: 'Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
  },
  {
    label: 'Can I use Pohon UI with Vue without Nuxt?',
    icon: 'i-lucide-circle-help',
    content: 'Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/pohon/getting-started/installation/vue) to get started.'
  },
  {
    label: 'Will Pohon UI work with other CSS frameworks like UnoCSS?',
    icon: 'i-lucide-circle-help',
    content: 'No. Pohon UI is designed exclusively for UnoCSS. UnoCSS support would require significant architecture changes due to different class naming conventions.'
  },
  {
    label: 'How does Pohon UI handle accessibility?',
    icon: 'i-lucide-circle-help',
    content: 'Through [Akar](https://akar.vinicunca.dev/docs/overview/accessibility) integration, Pohon UI provides **automatic ARIA attributes**, **keyboard navigation**, **focus management**, and **screen reader support**. While offering a strong foundation, testing in your specific use case remains important.'
  },
  {
    label: 'How is Pohon UI tested?',
    icon: 'i-lucide-circle-help',
    content: 'Pohon UI has component tests covering core behavior and accessibility.'
  },
  {
    label: 'Is Pohon UI production-ready?',
    icon: 'i-lucide-circle-help',
    content: 'Pohon UI is designed for production Vue applications and maintained with component tests and regular updates.'
  }
]
</script>

<template>
  <PAccordion
    type="multiple"
    :items="items"
    :unmount-on-hide="false"
    :default-value="['3']"
    :ui="{
      trigger: 'text-base',
      body: 'text-base color-text-muted'
    }"
  >
    <template #body="{ item }">
      <Markdown :value="item.content" unwrap="p" />
    </template>
  </PAccordion>
</template>
```

## API

### Props

```ts
/**
 * Props for the Accordion component
 */
interface AccordionProps {
  /**
   * @default 'multiple'
   */
  type?: "multiple" | "single" | undefined;
  ui?: { root?: SlotClass; trigger?: SlotClass; } & { root?: SlotClass; item?: SlotClass; header?: SlotClass; trigger?: SlotClass; content?: SlotClass; body?: SlotClass; leadingIcon?: SlotClass; trailingIcon?: SlotClass; label?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Accordion component
 */
interface AccordionSlots {
  default(): any;
}
```

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    accordion: {
      slots: {
        root: 'w-full',
        item: 'border-b border-border last:border-b-0',
        header: 'flex',
        trigger: 'group flex-1 flex items-center gap-1.5 font-500 text-sm py-3.5 outline-primary/25 focus-visible:outline-3 min-w-0 rounded-md',
        content: 'data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=closed]:overflow-hidden focus:outline-none',
        body: 'text-sm pb-3.5',
        leadingIcon: 'shrink-0 size-5',
        trailingIcon: 'shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-280',
        label: 'text-start break-words'
      },
      variants: {
        disabled: {
          true: {
            trigger: 'cursor-not-allowed opacity-75'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Accordion.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/accordion.ts).

---

- [Accordion](/akar/components/accordion)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Accordion.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Accordion source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Accordion.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **items** — `T[] | undefined; optional`
- **trailingIcon** — `any; optional`: The icon displayed on the right side of the trigger.
- **valueKey** — `GetItemKeys<T> | undefined; optional; default: "value"`: The key used to get the value from the item.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: The key used to get the label from the item.
- **ui** — `{ root?: SlotClass; item?: SlotClass; header?: SlotClass; trigger?: SlotClass; content?: SlotClass; body?: SlotClass; leadingIcon?: SlotClass; trailingIcon?: SlotClass; label?: SlotClass; } | undefined; optional`
- **collapsible** — `boolean | undefined; optional; default: true`: When type is "single", allows closing content when clicking trigger for an open item. When type is "multiple", this prop has no effect.
- **defaultValue** — `string | string[] | undefined; optional`: The default active value of the item(s).  Use when you do not need to control the state of the item(s).
- **modelValue** — `string | string[] | undefined; optional`: The controlled value of the active item(s).  Use this when you need to control the state of the items. Can be binded with \`v-model\`
- **type** — `SingleOrMultipleType | undefined; optional; default: "single"`: Determines whether a "single" or "multiple" items can be selected at a time.  This prop will overwrite the inferred type from \`modelValue\` and \`defaultValue\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the accordion and all its items
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When \`true\`, the element will be unmounted on closed state.

### Slots

- **default** — `{ item: T; index: number; open: boolean; }`
- **leading** — `{ item: T; index: number; open: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ item: T; index: number; open: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **content** — `{ item: T; index: number; open: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **body** — `{ item: T; index: number; open: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[value: string | string[] | undefined]`
