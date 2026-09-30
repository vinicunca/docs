---
title: "Modal"
description: "A dialog window that can be used to display a message or request user input."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/modal.md"
---
## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Modal.

Then, use the `#content` slot to add the content displayed when the Modal is open.

```vue
<template>
  <UModal>
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UModal>
</template>
```

You can also use the `#header`, `#body` and `#footer` slots to customize the Modal's content.

### Title

Use the `title` prop to set the title of the Modal's header.

```vue
<template>
  <UModal title="Modal with title">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Description

Use the `description` prop to set the description of the Modal's header.

```vue
<template>
  <UModal title="Modal with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Close

Use the `close` prop to customize or hide the close button (with `false` value) displayed in the Modal's header.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<template>
  <UModal title="Modal with close button" :close="{
  color: 'primary',
  variant: 'outline',
  class: 'rounded-full'
}">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

> [!TIP]
> 
> The close button is not displayed if the `#content` slot is used as it's a part of the header.

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue
<template>
  <UModal title="Modal with close button" close-icon="i-lucide-arrow-right">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.

### Transition

Use the `transition` prop to control whether the Modal is animated or not. Defaults to `true`.

```vue
<template>
  <UModal :transition="false" title="Modal without transition">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Overlay

Use the `overlay` prop to control whether the Modal has an overlay or not. Defaults to `true`.

```vue
<template>
  <UModal :overlay="false" title="Modal without overlay">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Modal

Use the `modal` prop to control whether the Modal blocks interaction with outside content. Defaults to `true`.

> [!NOTE]
> 
> When `modal` is set to `false`, the overlay is automatically disabled and outside content becomes interactive.

```vue
<template>
  <UModal :modal="false" title="Modal interactive">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Dismissible

Use the `dismissible` prop to control whether the Modal is dismissible when clicking outside of it or pressing escape. Defaults to `true`.

> [!NOTE]
> 
> A `close:prevent` event will be emitted when the user tries to close it.

> [!TIP]
> 
> You can combine `modal: false` with `dismissible: false` to make the Modal's background interactive without closing it.

```vue
<template>
  <UModal :dismissible="false" modal title="Modal non-dismissible">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

### Scrollable

Use the `scrollable` prop to make the Modal's content scrollable within the overlay.

> [!WARNING]
> 
> As the overlay is needed for scrolling, `modal: false` is not compatible and `overlay: false` only removes the background.

```vue
<template>
  <UModal scrollable overlay title="Modal scrollable">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-full" />
    </template></UModal>
</template>
```

> [!CAUTION]
> 
> There's a [known issue](/akar/components/dialog#scrollable-overlay) where clicking on the scrollbar may unintentionally close the dialog on some operating systems.

### Fullscreen

Use the `fullscreen` prop to make the Modal fullscreen.

```vue
<template>
  <UModal fullscreen title="Modal fullscreen">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-full" />
    </template></UModal>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the Modal's content from being unmounted when it is closed. Defaults to `true`.

```vue
<template>
  <UModal :unmount-on-hide="false" title="Modal">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

> [!NOTE]
> 
> You can inspect the DOM to see the Modal's content being rendered even while it is closed.

> [!TIP]
> 
> When the `portal` prop is set to `false`, the content is also rendered on the server. This is useful to render an open Modal during SSR without a flash on page load, or to expose its content for SEO.

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [ModalOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PModal v-model:open="open">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #content>
      <Placeholder class="h-48 m-4" />
    </template>
  </PModal>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Modal by pressing `O`.

> [!TIP]
> 
> This lets you move the trigger outside of the Modal or remove it entirely.

### Programmatic usage

You can use the [`useOverlay`](/pohon/composables/use-overlay) composable to open a Modal programmatically.

> [!WARNING]
> 
> Make sure to wrap your app with the [`App`](/pohon/components/app) component which uses the [`OverlayProvider`](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/OverlayProvider.vue) component.

First, create a modal component that will be opened programmatically:

```vue [ModalExample.vue]
<script setup lang="ts">
defineProps<{
  count: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <PModal :close="{ onClick: () => emit('close', false) }" :title="`This modal was opened programmatically ${count} times`">
    <template #footer>
      <div class="flex gap-2">
        <PButton color="neutral" label="Dismiss" @click="emit('close', false)" />
        <PButton label="Success" @click="emit('close', true)" />
      </div>
    </template>
  </PModal>
</template>
```

> [!NOTE]
> 
> We are emitting a `close` event when the modal is closed or dismissed here. You can emit any data through the `close` event, and that data becomes the resolved value of `open()`. The event must be emitted for the promise to resolve.

Then, use it in your app:

```vue [ModalProgrammaticExample.vue]
<script setup lang="ts">
import { LazyModalExample } from '#components'

const count = ref(0)

const toast = useToast()
const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

async function open() {
  const instance = modal.open({
    count: count.value
  })

  const shouldIncrement = await instance.result

  if (shouldIncrement) {
    count.value++

    toast.add({
      title: `Success: ${shouldIncrement}`,
      color: 'success',
      id: 'modal-success'
    })

    // Update the count
    modal.patch({
      count: count.value
    })
    return
  }

  toast.add({
    title: `Dismissed: ${shouldIncrement}`,
    color: 'error',
    id: 'modal-dismiss'
  })
}
</script>

<template>
  <PButton label="Open" color="neutral" variant="subtle" @click="open" />
</template>
```

> [!TIP]
> 
> You can close the modal within the modal component by emitting `emit('close')`.

### Nested modals

You can nest modals within each other.

```vue [ModalNestedExample.vue]
<script setup lang="ts">
const first = ref(false)
const second = ref(false)
</script>

<template>
  <PModal v-model:open="first" title="First modal" :ui="{ footer: 'justify-end' }">
    <PButton color="neutral" variant="subtle" label="Open" />

    <template #footer>
      <PButton label="Close" color="neutral" variant="outline" @click="first = false" />

      <PModal v-model:open="second" title="Second modal" :ui="{ footer: 'justify-end' }">
        <PButton label="Open second" color="neutral" />

        <template #footer>
          <PButton label="Close" color="neutral" variant="outline" @click="second = false" />
        </template>
      </PModal>
    </template>
  </PModal>
</template>
```

### With footer slot

Use the `#footer` slot to add content after the Modal's body.

```vue [ModalFooterSlotExample.vue]
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PModal v-model:open="open" title="Modal with footer" description="This is useful when you want a form in a Modal." :ui="{ footer: 'justify-end' }">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #body>
      <Placeholder class="h-48" />
    </template>

    <template #footer="{ close }">
      <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <PButton label="Submit" color="neutral" />
    </template>
  </PModal>
</template>
```

### With command palette

You can use a [CommandPalette](/pohon/components/command-palette) component inside the Modal's content.

```vue [ModalCommandPaletteExample.vue]
<script setup lang="ts">
const searchTerm = ref('')

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'modal-command-palette-users',
  params: { q: searchTerm },
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  immediate: false
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || [],
  ignoreFilter: true
}])

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <PModal @update:open="onOpen">
    <PButton
      label="Search users..."
      color="neutral"
      variant="subtle"
      icon="i-lucide-search"
    />

    <template #content>
      <PCommandPalette
        v-model:search-term="searchTerm"
        :loading="status === 'pending'"
        :groups="groups"
        placeholder="Search users..."
        class="h-80"
      />
    </template>
  </PModal>
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the Modal opens.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    modal: {
      slots: {
        overlay: 'fixed inset-0',
        content: 'bg-background divide-y divide-divide flex flex-col focus:outline-none',
        header: 'flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)',
        wrapper: '',
        body: 'flex-1 p-4 sm:p-6',
        footer: 'flex items-center gap-1.5 p-4 sm:px-6',
        title: 'color-text-highlighted font-600',
        description: 'mt-1 color-text-muted text-sm',
        close: 'absolute top-4 end-4'
      },
      variants: {
        transition: {
          true: {
            overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
            content: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
          }
        },
        fullscreen: {
          true: {
            content: 'inset-0'
          },
          false: {
            content: 'w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-ring'
          }
        },
        overlay: {
          true: {
            overlay: 'bg-background-elevated/75'
          }
        },
        scrollable: {
          true: {
            overlay: 'overflow-y-auto',
            content: 'relative'
          },
          false: {
            content: 'fixed',
            body: 'overflow-y-auto'
          }
        }
      },
      compoundVariants: [
        {
          scrollable: true,
          fullscreen: false,
          class: {
            overlay: 'grid place-items-center p-4 sm:py-8'
          }
        },
        {
          scrollable: false,
          fullscreen: false,
          class: {
            content: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden'
          }
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Modal.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/modal.ts).

---

- [Dialog](/akar/components/dialog)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Modal.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Modal source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Modal.vue)

### Props

- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **content** — `(Omit<DialogContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DialogContentImplEmits>>) | undefined; optional`: The content of the modal.
- **overlay** — `boolean | undefined; optional; default: true`: Render an overlay behind the modal.
- **scrollable** — `boolean | undefined; optional`: When \`true\`, enables scrollable overlay mode where content scrolls within the overlay.
- **transition** — `boolean | undefined; optional; default: true`: Animate the modal when opening or closing.
- **fullscreen** — `boolean | undefined; optional`: When \`true\`, the modal will take up the full screen.
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the modal in a portal.
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Display a close button to dismiss the modal. \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **dismissible** — `boolean | undefined; optional; default: true`: When \`false\`, the modal will not close when clicking outside or pressing escape.
- **ui** — `{ overlay?: SlotClass; content?: SlotClass; header?: SlotClass; wrapper?: SlotClass; body?: SlotClass; footer?: SlotClass; title?: SlotClass; description?: SlotClass; close?: SlotClass; } | undefined; optional`
- **open** — `boolean | undefined; optional`: The controlled open state of the dialog. Can be binded as \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
- **modal** — `boolean | undefined; optional; default: true`: The modality of the dialog When set to \`true\`, <br> interaction with outside elements will be disabled and only dialog content will be visible to screen readers.
- **unmountOnHide** — `boolean | undefined; optional`: When set to \`false\`, the dialog content will not be unmounted when closed, but instead hidden with CSS. <br> Useful for SEO or when you want to improve performance by not remounting the component on every open.

### Slots

- **default** — `{ open: boolean; }`
- **content** — `{ close: () => void; }`
- **header** — `{ close: () => void; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **actions** — `{} | undefined`
- **close** — `{ ui: { overlay: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **body** — `{ close: () => void; }`
- **footer** — `{ close: () => void; }`

### Events

- **update:open** — `[value: boolean]`
- **leave** — `[]`
- **enter** — `[]`
- **close:prevent** — `[]`
- **after:leave** — `[]`
- **after:enter** — `[]`
