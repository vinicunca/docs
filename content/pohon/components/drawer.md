---
title: "Drawer"
description: "A drawer that smoothly slides in and out of the screen."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/drawer.md"
---
## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Drawer.

Then, use the `#content` slot to add the content displayed when the Drawer is open.

```vue
<template>
  <UDrawer>
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

You can also use the `#header`, `#body` and `#footer` slots to customize the Drawer's content.

### Title

Use the `title` prop to set the title of the Drawer's header.

```vue
<template>
  <UDrawer title="Drawer with title">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

### Description

Use the `description` prop to set the description of the Drawer's header.

```vue
<template>
  <UDrawer title="Drawer with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

### Close

Use the `close` prop to display a close button in the Drawer. Defaults to `false`.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<template>
  <UDrawer title="Drawer with close button" :close="{
  color: 'primary',
  variant: 'outline',
  class: 'rounded-full'
}">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue
<template>
  <UDrawer title="Drawer with close button" close close-icon="i-lucide-arrow-right">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

### Direction

Use the `direction` prop to control the direction of the Drawer. Defaults to `bottom`.

```vue
<template>
  <UDrawer direction="right">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="min-w-96 min-h-96 size-full m-4" />
    </template></UDrawer>
</template>
```

### Inset

Use the `inset` prop to inset the Drawer from the edges.

```vue
<template>
  <UDrawer direction="right" inset>
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="min-w-96 min-h-96 size-full m-4" />
    </template></UDrawer>
</template>
```

### Handle

Use the `handle` prop to control whether the Drawer has a handle or not. Defaults to `true`.

```vue
<template>
  <UDrawer :handle="false">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

### Handle Only

Use the `handle-only` prop to only allow the Drawer to be dragged by the handle.

```vue
<template>
  <UDrawer handle-only>
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

### Overlay

Use the `overlay` prop to control whether the Drawer has an overlay or not. Defaults to `true`.

```vue
<template>
  <UDrawer :overlay="false">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

### Modal

Use the `modal` prop to control whether the Drawer blocks interaction with outside content. Defaults to `true`.

> [!NOTE]
> 
> When `modal` is set to `false`, the overlay is automatically disabled and outside content becomes interactive.

```vue
<template>
  <UDrawer :modal="false">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

### Dismissible

Use the `dismissible` prop to control whether the Drawer is dismissible when clicking outside of it or pressing escape. Defaults to `true`.

> [!NOTE]
> 
> A `close:prevent` event will be emitted when the user tries to close it.

> [!TIP]
> 
> You can combine `modal: false` with `dismissible: false` to make the Drawer's background interactive without closing it.

```vue [DrawerDismissibleExample.vue]
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PDrawer
    v-model:open="open"
    title="Drawer non-dismissible"
    close
    :dismissible="false"
    :modal="false"
    :handle="false"
  >
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #body>
      <Placeholder class="size-full min-h-48" />
    </template>
  </PDrawer>
</template>
```

### Scale Background

Use the `should-scale-background` prop to scale the background when the Drawer is open, creating a visual depth effect. You can set the `set-background-color-on-scale` prop to `false` to prevent changing the background color.

```vue
<template>
  <UDrawer should-scale-background set-background-color-on-scale>
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

> [!WARNING]
> 
> Make sure to add the `data-vaul-drawer-wrapper` directive to a parent element of your app to make this work.
> 
> ```vue [app.vue]
> <template>
>   <PApp>
>     <div class="bg-background" data-vaul-drawer-wrapper>
>       <NuxtLayout>
>         <NuxtPage />
>       </NuxtLayout>
>     </div>
>   </PApp>
> </template>
> ```
> 
> ```ts [nuxt.config.ts]
> export default defineNuxtConfig({
>   app: {
>     rootAttrs: {
>       'data-vaul-drawer-wrapper': '',
>       'class': 'bg-background'
>     }
>   }
> })
> ```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [DrawerOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PDrawer v-model:open="open">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #content>
      <Placeholder class="h-48 m-4" />
    </template>
  </PDrawer>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Drawer by pressing `O`.

> [!TIP]
> 
> This lets you move the trigger outside of the Drawer or remove it entirely.

### Responsive drawer

You can render a [Modal](/pohon/components/modal) component on desktop and a Drawer on mobile for example.

```vue [DrawerResponsiveExample.vue]
<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'

const [DefineFormTemplate, ReuseFormTemplate] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const open = ref(false)

const state = reactive({
  email: undefined
})

const title = 'Edit profile'
const description = 'Make changes to your profile here. Click save when you\'re done.'
</script>

<template>
  <DefineFormTemplate>
    <PForm :state="state" class="space-y-4">
      <PFormField label="Email" name="email" required>
        <PInput v-model="state.email" placeholder="shadcn@example.com" required />
      </PFormField>

      <PButton label="Save changes" type="submit" />
    </PForm>
  </DefineFormTemplate>

  <PModal v-if="isDesktop" v-model:open="open" :title="title" :description="description">
    <PButton label="Edit profile" color="neutral" variant="outline" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </PModal>

  <PDrawer v-else v-model:open="open" :title="title" :description="description">
    <PButton label="Edit profile" color="neutral" variant="outline" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </PDrawer>
</template>
```

### Nested drawers

You can nest drawers within each other by using the `nested` prop.

```vue [DrawerNestedExample.vue]
<template>
  <PDrawer :ui="{ content: 'h-full', overlay: 'bg-background-inverted/30' }">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #footer>
      <PDrawer nested :ui="{ content: 'h-full', overlay: 'bg-background-inverted/30' }">
        <PButton color="neutral" variant="outline" label="Open nested" />

        <template #content>
          <Placeholder class="flex-1 m-4" />
        </template>
      </PDrawer>
    </template>
  </PDrawer>
</template>
```

### With footer slot

Use the `#footer` slot to add content after the Drawer's body.

```vue [DrawerFooterSlotExample.vue]
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PDrawer v-model:open="open" title="Drawer with footer" description="This is useful when you want a form in a Drawer." :ui="{ container: 'max-w-xl mx-auto' }">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #body>
      <Placeholder class="h-48" />
    </template>

    <template #footer>
      <PButton label="Submit" color="neutral" class="justify-center" />
      <PButton label="Cancel" color="neutral" variant="outline" class="justify-center" @click="open = false" />
    </template>
  </PDrawer>
</template>
```

### With command palette

You can use a [CommandPalette](/pohon/components/command-palette) component inside the Drawer's content.

```vue [DrawerCommandPaletteExample.vue]
<script setup lang="ts">
const searchTerm = ref('')

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'drawer-command-palette-users',
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
  <PDrawer :handle="false" @update:open="onOpen">
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
  </PDrawer>
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the Drawer opens.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    drawer: {
      slots: {
        overlay: 'fixed inset-0 bg-background-elevated/75',
        content: 'fixed bg-background ring ring-ring flex focus:outline-none',
        handle: [
          'shrink-0 !bg-background-accented',
          'transition-opacity'
        ],
        container: 'w-full flex flex-col gap-4 p-4 overflow-y-auto',
        header: 'flex items-center gap-1.5 min-h-8',
        wrapper: 'min-w-0 flex-1',
        title: 'color-text-highlighted font-600',
        description: 'mt-1 color-text-muted text-sm',
        actions: 'flex items-center gap-1.5 shrink-0 ms-auto',
        body: 'flex-1',
        footer: 'flex flex-col gap-1.5',
        close: ''
      },
      variants: {
        direction: {
          top: {
            content: 'mb-24 flex-col-reverse',
            handle: 'mb-4'
          },
          right: {
            content: 'flex-row rtl:flex-row-reverse',
            handle: '!ml-4'
          },
          bottom: {
            content: 'mt-24 flex-col',
            handle: 'mt-4'
          },
          left: {
            content: 'flex-row-reverse rtl:flex-row',
            handle: '!mr-4'
          }
        },
        inset: {
          true: {
            content: 'rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]'
          }
        },
        snapPoints: {
          true: ''
        }
      },
      compoundVariants: [
        {
          direction: [
            'top',
            'bottom'
          ],
          class: {
            content: 'h-auto max-h-[96%]',
            handle: '!w-12 !h-1.5 mx-auto'
          }
        },
        {
          direction: [
            'top',
            'bottom'
          ],
          snapPoints: true,
          class: {
            content: 'h-full'
          }
        },
        {
          direction: [
            'right',
            'left'
          ],
          class: {
            content: 'w-auto max-w-[calc(100%-2rem)]',
            handle: '!h-12 !w-1.5 mt-auto mb-auto'
          }
        },
        {
          direction: [
            'right',
            'left'
          ],
          snapPoints: true,
          class: {
            content: 'w-full'
          }
        },
        {
          direction: 'top',
          inset: true,
          class: {
            content: 'inset-x-4 top-4'
          }
        },
        {
          direction: 'top',
          inset: false,
          class: {
            content: 'inset-x-0 top-0 rounded-b-lg'
          }
        },
        {
          direction: 'bottom',
          inset: true,
          class: {
            content: 'inset-x-4 bottom-4'
          }
        },
        {
          direction: 'bottom',
          inset: false,
          class: {
            content: 'inset-x-0 bottom-0 rounded-t-lg'
          }
        },
        {
          direction: 'left',
          inset: true,
          class: {
            content: 'inset-y-4 left-4'
          }
        },
        {
          direction: 'left',
          inset: false,
          class: {
            content: 'inset-y-0 left-0 rounded-r-lg'
          }
        },
        {
          direction: 'right',
          inset: true,
          class: {
            content: 'inset-y-4 right-4'
          }
        },
        {
          direction: 'right',
          inset: false,
          class: {
            content: 'inset-y-0 right-0 rounded-l-lg'
          }
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Drawer.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/drawer.ts).

---

- [Drawer](https://github.com/unovue/vaul-vue)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Drawer.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Drawer source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Drawer.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **inset** — `boolean | undefined; optional`: Whether to inset the drawer from the edges.
- **content** — `(Omit<DialogContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DialogContentImplEmits>>) | undefined; optional`: The content of the drawer.
- **overlay** — `boolean | undefined; optional; default: true`: Render an overlay behind the drawer.
- **handle** — `boolean | undefined; optional; default: true`: Render a handle on the drawer.
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the drawer in a portal.
- **nested** — `boolean | undefined; optional`: Whether the drawer is nested in another drawer.
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a close button to dismiss the drawer. \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **ui** — `{ overlay?: SlotClass; content?: SlotClass; handle?: SlotClass; container?: SlotClass; header?: SlotClass; wrapper?: SlotClass; title?: SlotClass; description?: SlotClass; actions?: SlotClass; body?: SlotClass; footer?: SlotClass; close?: SlotClass; } | undefined; optional`
- **fixed** — `boolean | undefined; optional`: When \`true\`, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
- **modal** — `boolean | undefined; optional; default: true`: When \`false\` it allows to interact with elements outside of the drawer without closing it.
- **snapPoints** — `(string | number)[] | undefined; optional`: Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up. Should go from least visible. Example \`[0.2, 0.5, 0.8]\`. You can also use px values, which doesn't take screen height into account.
- **open** — `boolean | undefined; optional`
- **direction** — `DrawerDirection | undefined; optional; default: "bottom"`: Direction of the drawer. Can be \`top\` or \`bottom\`, \`left\`, \`right\`.
- **defaultOpen** — `boolean | undefined; optional`: Opened by default, skips initial enter animation. Still reacts to \`open\` state changes
- **dismissible** — `boolean | undefined; optional; default: true`: When \`false\` dragging, clicking outside, pressing esc, etc. will not close the drawer. Use this in combination with the \`open\` prop, otherwise you won't be able to open/close the drawer.
- **activeSnapPoint** — `string | number | null | undefined; optional`
- **closeThreshold** — `number | undefined; optional`: Number between 0 and 1 that determines when the drawer should be closed. Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
- **shouldScaleBackground** — `boolean | undefined; optional`
- **setBackgroundColorOnScale** — `boolean | undefined; optional`: When \`false\` we don't change body's background color when the drawer is open.
- **scrollLockTimeout** — `number | undefined; optional`: Duration for which the drawer is not draggable after scrolling content inside of the drawer.
- **noBodyStyles** — `boolean | undefined; optional`: When \`true\` the \`body\` doesn't get any styles assigned from Vaul
- **handleOnly** — `boolean | undefined; optional`: When \`true\` only allows the drawer to be dragged by the \`<Drawer.Handle />\` component.
- **preventScrollRestoration** — `boolean | undefined; optional`

### Slots

- **default** — `{} | undefined`
- **content** — `{} | undefined`
- **header** — `{} | undefined`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **actions** — `{} | undefined`
- **close** — `{ ui: { overlay: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; handle: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **body** — `{} | undefined`
- **footer** — `{} | undefined`

### Events

- **close** — `[]`
- **drag** — `[percentageDragged: number]`
- **update:open** — `[open: boolean]`
- **close:prevent** — `[]`
- **release** — `[open: boolean]`
- **update:activeSnapPoint** — `[val: string | number]`
- **animationEnd** — `[open: boolean]`
