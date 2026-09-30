---
title: "Select"
description: "A select element to choose from a list of options."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/select.md"
---
## Usage

Use the `v-model` directive to control the value of the Select or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" :items="items" />
</template>
```

### Items

Use the `items` prop as an array of strings, numbers or booleans:

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" :items="items" class="w-48" />
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- [`value?: string`](#value-key)
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icons-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `class?: any`
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const items = ref<SelectItem[]>([
  {
    label: "Backlog",
    value: "backlog"
  },
  {
    label: "Todo",
    value: "todo"
  },
  {
    label: "In Progress",
    value: "in_progress"
  },
  {
    label: "Done",
    value: "done"
  }
])
const value = ref("backlog")
</script>

<template>
  <USelect v-model="value" :items="items" class="w-48" />
</template>
```

> [!CAUTION]
> 
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
const items = ref([
  [
    "Apple",
    "Banana",
    "Blueberry",
    "Grapes",
    "Pineapple"
  ],
  [
    "Aubergine",
    "Broccoli",
    "Carrot",
    "Courgette",
    "Leek"
  ]
])
const value = ref("Apple")
</script>

<template>
  <USelect v-model="value" :items="items" class="w-48" />
</template>
```

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const items = ref<SelectItem[]>([
  {
    label: "Backlog",
    id: "backlog"
  },
  {
    label: "Todo",
    id: "todo"
  },
  {
    label: "In Progress",
    id: "in_progress"
  },
  {
    label: "Done",
    id: "done"
  }
])
const value = ref("backlog")
</script>

<template>
  <USelect v-model="value" value-key="id" :items="items" class="w-48" />
</template>
```

### Multiple

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref([
  "Backlog",
  "Todo"
])
</script>

<template>
  <USelect v-model="value" multiple :items="items" class="w-48" />
</template>
```

> [!CAUTION]
> 
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
</script>

<template>
  <USelect placeholder="Select status" :items="items" class="w-48" />
</template>
```

### Content

Use the `content` prop to control how the Select content is rendered, like its `align` or `side` for example.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" :content="{
  align: 'center',
  side: 'bottom',
  sideOffset: 8
}" :items="items" class="w-48" />
</template>
```

> [!NOTE]
> 
> These options only apply when `content.position` is `popper` (default).

### Position

Use the `content.position` prop to control how the Select content is positioned relative to the trigger. Defaults to `popper`, which positions the content like other popovers. Set it to `item-aligned` to align the content with the selected item (similar to a native macOS menu).

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Todo")
</script>

<template>
  <USelect v-model="value" :content="{
  position: 'item-aligned'
}" :items="items" class="w-48" />
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" arrow :items="items" class="w-48" />
</template>
```

### Color

Use the `color` prop to change the ring color when the Select is focused.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" color="neutral" highlight :items="items" class="w-48" />
</template>
```

> [!NOTE]
> 
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" color="neutral" variant="subtle" :highlight="false" :items="items" class="w-48" />
</template>
```

### Size

Use the `size` prop to change the size of the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" size="xl" :items="items" class="w-48" />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" icon="i-lucide-search" size="md" :items="items" class="w-48" />
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/pohon/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" trailing-icon="i-lucide-arrow-down" size="md" :items="items" class="w-48" />
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

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" selected-icon="i-lucide-flame" size="md" :items="items" class="w-48" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Nuxt",
  "NuxtHub",
  "NuxtLabs",
  "Nuxt Modules",
  "Nuxt Community"
])
const value = ref("Nuxt")
</script>

<template>
  <USelect v-model="value" :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" :items="items" class="w-48" />
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" loading :trailing="false" :items="items" class="w-48" />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
const value = ref("Backlog")
</script>

<template>
  <USelect v-model="value" loading loading-icon="i-lucide-loader" :items="items" class="w-48" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Disabled

Use the `disabled` prop to disable the Select.

```vue
<script setup lang="ts">
const items = ref([
  "Backlog",
  "Todo",
  "In Progress",
  "Done"
])
</script>

<template>
  <USelect disabled placeholder="Select status" :items="items" class="w-48" />
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const items = ref<SelectItem[]>([
  {
    type: "label",
    label: "Fruits"
  },
  "Apple",
  "Banana",
  "Blueberry",
  "Grapes",
  "Pineapple",
  {
    type: "separator"
  },
  {
    type: "label",
    label: "Vegetables"
  },
  "Aubergine",
  "Broccoli",
  "Carrot",
  "Courgette",
  "Leek"
])
const value = ref("Apple")
</script>

<template>
  <USelect v-model="value" :items="items" class="w-48" />
</template>
```

### With icon in items

You can use the `icon` property to display an [Icon](/pohon/components/icon) inside the items.

```vue [SelectItemsIconExample.vue]
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const items = ref([
  {
    label: 'Backlog',
    value: 'backlog',
    icon: 'i-lucide-circle-help'
  },
  {
    label: 'Todo',
    value: 'todo',
    icon: 'i-lucide-circle-plus'
  },
  {
    label: 'In Progress',
    value: 'in_progress',
    icon: 'i-lucide-circle-arrow-up'
  },
  {
    label: 'Done',
    value: 'done',
    icon: 'i-lucide-circle-check'
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

const icon = computed(() => items.value.find(item => item.value === value.value)?.icon)
</script>

<template>
  <PSelect v-model="value" :items="items" value-key="value" :icon="icon" class="w-48" />
</template>
```

> [!NOTE]
> 
> In this example, the icon is computed from the `value` property of the selected item.

> [!TIP]
> 
> You can also use the `#leading` slot to display the selected icon.

### With avatar in items

You can use the `avatar` property to display an [Avatar](/pohon/components/avatar) inside the items.

```vue [SelectItemsAvatarExample.vue]
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const items = ref([
  {
    label: 'benjamincanac',
    value: 'benjamincanac',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac',
      loading: 'lazy' as const
    }
  },
  {
    label: 'HugoRCD',
    value: 'HugoRCD',
    avatar: {
      src: 'https://github.com/HugoRCD.png',
      alt: 'HugoRCD',
      loading: 'lazy' as const
    }
  },
  {
    label: 'atinux',
    value: 'atinux',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux',
      loading: 'lazy' as const
    }
  },
  {
    label: 'romhml',
    value: 'romhml',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml',
      loading: 'lazy' as const
    }
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

const avatar = computed(() => items.value.find(item => item.value === value.value)?.avatar)
</script>

<template>
  <PSelect v-model="value" :items="items" value-key="value" :avatar="avatar" class="w-48" />
</template>
```

> [!NOTE]
> 
> In this example, the avatar is computed from the `value` property of the selected item.

> [!TIP]
> 
> You can also use the `#leading` slot to display the selected avatar.

### With chip in items

You can use the `chip` property to display a [Chip](/pohon/components/chip) inside the items.

```vue [SelectItemsChipExample.vue]
<script setup lang="ts">
import type { SelectItem, ChipProps } from 'pohon-ui'

const items = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error'
    }
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success'
    }
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info'
    }
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

function getChip(value: string) {
  return items.value.find(item => item.value === value)?.chip
}
</script>

<template>
  <PSelect v-model="value" :items="items" value-key="value" class="w-48">
    <template #leading="{ modelValue, ui }">
      <PChip
        v-if="modelValue"
        v-bind="getChip(modelValue)"
        inset
        standalone
        :size="(ui.itemLeadingChipSize() as ChipProps['size'])"
        :class="ui.itemLeadingChip()"
      />
    </template>
  </PSelect>
</template>
```

> [!NOTE]
> 
> In this example, the `#leading` slot is used to display the selected chip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [SelectOpenExample.vue]
<script setup lang="ts">
const open = ref(false)
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PSelect v-model="value" v-model:open="open" :items="items" class="w-48" />
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Select by pressing `O`.

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the Select.

```vue [SelectIconExample.vue]
<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<template>
  <PSelect
    v-model="value"
    :items="items"
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
    }"
    class="w-48"
  />
</template>
```

### With fetched items

You can fetch items from an API and use them in the Select.

```vue [SelectFetchExample.vue]
<script setup lang="ts">
import type { AvatarProps } from 'pohon-ui'

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'typicode-users',
  transform: (data: { id: number, name: string }[]) => {
    return data?.map(user => ({
      label: user.name,
      value: String(user.id),
      avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const }
    }))
  },
  immediate: false
})

function getUserAvatar(value: string) {
  return users.value?.find(user => user.value === value)?.avatar || {}
}

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <PSelect
    :items="users"
    :loading="status === 'pending'"
    icon="i-lucide-user"
    placeholder="Select user"
    value-key="value"
    class="w-48"
    @update:open="onOpen"
  >
    <template #leading="{ modelValue, ui }">
      <PAvatar
        v-if="modelValue"
        v-bind="getUserAvatar(modelValue)"
        :size="(ui.leadingAvatarSize() as AvatarProps['size'])"
        :class="ui.leadingAvatar()"
      />
    </template>
  </PSelect>
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With infinite scroll

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [SelectInfiniteScrollExample.vue]
<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

type User = {
  firstName: string
}

type UserResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

const skip = ref(0)

const { data, status, execute } = await useLazyFetch('https://dummyjson.com/users?limit=10&select=firstName', {
  key: 'select-users-infinite-scroll',
  params: { skip },
  transform: (data?: UserResponse) => {
    return data?.users.map(user => user.firstName)
  },
  immediate: false
})

const users = ref<string[]>([])

watch(data, () => {
  users.value = [
    ...users.value,
    ...(data.value || [])
  ]
})

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}

const select = useTemplateRef('select')

onMounted(() => {
  useInfiniteScroll(() => select.value?.viewportRef, () => {
    skip.value += 10
  }, {
    canLoadMore: () => {
      return status.value !== 'pending'
    }
  })
})
</script>

<template>
  <PSelect
    ref="select"
    placeholder="Select user"
    :items="users"
    @update:open="onOpen"
  />
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` so data is only loaded as the user scrolls.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

```vue [SelectContentWidthExample.vue]
<script setup lang="ts">
const value = ref<string>()

const { data: users, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'typicode-users-email',
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({
      label: user.name,
      email: user.email,
      value: String(user.id),
      avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const }
    }))
  },
  immediate: false
})

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <PSelect
    v-model="value"
    :items="users"
    placeholder="Select user"
    value-key="value"
    :ui="{ content: 'min-w-fit' }"
    class="w-48"
    @update:open="onOpen"
  >
    <template #item-label="{ item }">
      {{ item.label }}

      <span class="color-text-muted">
        {{ item.email }}
      </span>
    </template>
  </PSelect>
</template>
```

> [!TIP]
> 
> You can also change the content width globally in your `app.config.ts`:
> 
> ```text
> export default defineAppConfig({
>   ui: {
>     select: {
>       slots: {
>         content: 'min-w-fit'
>       }
>     }
>   }
> })
> ```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `triggerRef` | `Ref<HTMLButtonElement \| null>` |
| `viewportRef` | `Ref<HTMLDivElement \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        base: [
          'relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 color-text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 color-text-dimmed',
        value: 'truncate pointer-events-none',
        placeholder: 'truncate color-text-dimmed',
        arrow: 'fill-bg stroke-default',
        content: 'max-h-[min(15rem,var(--akar-select-content-available-height,15rem))] w-(--akar-select-trigger-width) bg-background shadow-lg rounded-md ring ring-ring overflow-hidden origin-(--akar-select-content-transform-origin) pointer-events-auto flex flex-col',
        viewport: 'relative divide-y divide-divide scroll-py-1 overflow-y-auto flex-1',
        group: 'p-1 isolate',
        empty: 'text-center color-text-muted',
        label: 'font-600 color-text-highlighted',
        separator: '-mx-1 my-1 h-px bg-border',
        item: [
          'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 color-text data-highlighted:not-data-disabled:color-text-highlighted data-highlighted:not-data-disabled:before:bg-background-elevated/50',
          'transition-colors before:transition-colors'
        ],
        itemLeadingIcon: [
          'shrink-0 color-text-dimmed group-data-highlighted:not-group-data-disabled:color-text',
          'transition-colors'
        ],
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemLeadingChip: 'shrink-0',
        itemLeadingChipSize: '',
        itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        itemTrailingIcon: 'shrink-0',
        itemWrapper: 'flex-1 flex flex-col min-w-0',
        itemLabel: 'truncate',
        itemDescription: 'truncate color-text-muted'
      },
      variants: {
        fieldGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-1',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-1'
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-sm/4 gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            label: 'p-1 text-[10px]/3 gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailingIcon: 'size-4',
            empty: 'p-2 text-xs'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            label: 'p-1.5 text-[10px]/3 gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailingIcon: 'size-4',
            empty: 'p-2.5 text-xs'
          },
          md: {
            base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailingIcon: 'size-5',
            empty: 'p-2.5 text-sm'
          },
          lg: {
            base: 'px-3 py-2 text-base/5 gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            label: 'p-2 text-xs gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailingIcon: 'size-5',
            empty: 'p-3 text-sm'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6',
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6',
            itemLeadingAvatarSize: 'xs',
            itemLeadingChip: 'size-6',
            itemLeadingChipSize: 'lg',
            itemTrailingIcon: 'size-6',
            empty: 'p-3 text-base'
          }
        },
        variant: {
          outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented hover:bg-background-elevated disabled:bg-background',
          soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated focus:bg-background-elevated disabled:bg-background-elevated/50',
          subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented hover:bg-background-accented/75 disabled:bg-background-elevated',
          ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'color-text-highlighted bg-transparent focus:outline-none'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        type: {
          file: 'file:me-1.5 file:font-500 file:color-text-muted file:outline-none'
        },
        position: {
          popper: {
            content: 'data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]'
          },
          'item-aligned': {
            content: ''
          }
        },
        multiple: {
          true: ''
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-success/25 focus-visible:outline-3 focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-info/25 focus-visible:outline-3 focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-error/25 focus-visible:outline-3 focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-primary/25 focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-success/25 focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-info/25 focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-warning/25 focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-error/25 focus-visible:outline-3'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'secondary',
          highlight: true,
          class: 'ring ring-inset ring-secondary'
        },
        {
          color: 'success',
          highlight: true,
          class: 'ring ring-inset ring-success'
        },
        {
          color: 'info',
          highlight: true,
          class: 'ring ring-inset ring-info'
        },
        {
          color: 'warning',
          highlight: true,
          class: 'ring ring-inset ring-warning'
        },
        {
          color: 'error',
          highlight: true,
          class: 'ring ring-inset ring-error'
        },
        {
          color: 'neutral',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        },
        {
          fixed: false,
          size: 'xs',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'sm',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'md',
          class: 'md:text-sm'
        },
        {
          fixed: false,
          size: 'lg',
          class: 'md:text-sm'
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline',
        position: 'popper'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Select.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/select.ts).

---

- [Select](/akar/components/select)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Select.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Select source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Select.vue)

### Props

- **id** — `string | undefined; optional`
- **placeholder** — `string | undefined; optional`: The placeholder text when the select is empty.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **trailingIcon** — `any; optional`: The icon displayed to open the menu.
- **selectedIcon** — `any; optional`: The icon displayed when an item is selected.
- **content** — `(Omit<SelectContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<SelectContentImplEmits>>) | undefined; optional`: The content of the menu.
- **arrow** — `boolean | Omit<SelectArrowProps, "as" | "asChild"> | undefined; optional`: Display an arrow alongside the menu. \`{ rounded: true }\`{lang="ts-type"}
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the menu in a portal.
- **valueKey** — `VK | undefined; optional; default: "value" as never`: When \`items\` is an array of objects, select the field to use as the value.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: When \`items\` is an array of objects, select the field to use as the label.
- **descriptionKey** — `GetItemKeys<T> | undefined; optional; default: "description"`: When \`items\` is an array of objects, select the field to use as the description.
- **items** — `T | undefined; optional`
- **defaultValue** — `_Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | undefined; optional`: The value of the Select when initially rendered. Use when you do not need to control the state of the Select.
- **modelValue** — `_Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | undefined; optional`: The controlled value of the Select. Can be bind as \`v-model\`.
- **modelModifiers** — `Mod | undefined; optional`
- **multiple** — `M | undefined; optional`: Whether multiple options can be selected or not.
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional; default: 0`
- **ui** — `{ base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; value?: SlotClass; placeholder?: SlotClass; arrow?: SlotClass; content?: SlotClass; viewport?: SlotClass; group?: SlotClass; empty?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with Select
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **autocomplete** — `string | undefined; optional`: Native html input \`autocomplete\` attribute.
- **open** — `boolean | undefined; optional`: The controlled open state of the Select. Can be bind as \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the select when it is initially rendered. Use when you do not need to control its open state.
- **nullableValue** — `string | undefined; optional`: The value of the hidden native select option when the model value is nullish.
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **form** — `string | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`

### Slots

- **leading** — `{ modelValue: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>; open: boolean; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ modelValue: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>; open: boolean; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ modelValue: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>; open: boolean; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item** — `{ item: NestedItem<T>; index: number; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-leading** — `{ item: NestedItem<T>; index: number; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-label** — `{ item: NestedItem<T>; index: number; }`
- **item-description** — `{ item: NestedItem<T>; index: number; }`
- **item-trailing** — `{ item: NestedItem<T>; index: number; ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; value: (props?: Record<string, any> | undefined) => string | undefined; placeholder: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **content-top** — `{} | undefined`
- **content-bottom** — `{} | undefined`

### Events

- **update:modelValue** — `[value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>]`
- **update:open** — `[value: boolean]`
- **blur** — `[event: FocusEvent]`
- **change** — `[event: Event]`
- **focus** — `[event: FocusEvent]`
