---
title: "Toast"
description: "A succinct message to provide information or feedback to the user."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/toast.md"
---
## Usage

Use the [useToast](/pohon/composables/use-toast) composable to display a toast in your application.

```vue [ToastExample.vue]
<script setup lang="ts">
const toast = useToast()

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  toast.add({
    title: 'Event added to calendar',
    description: `This event is scheduled for ${formattedDate}.`,
    icon: 'i-lucide-calendar-days'
  })
}
</script>

<template>
  <PButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="addToCalendar" />
</template>
```

> [!WARNING]
> 
> Make sure to wrap your app with the [`App`](/pohon/components/app) component which uses our [`Toaster`](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Toaster.vue) component which uses the [`ToastProvider`](/akar/components/toast#provider) component from Akar.

> [!TIP]
> See: /docs/components/app#props
> 
> You can check the `App` component `toaster` prop to see how to configure the Toaster globally.

### Title

Pass a `title` field to the `toast.add` method to display a title.

```vue [ToastTitleExample.vue]
<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const toast = useToast()

function showToast() {
  toast.add(props)
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Description

Pass a `description` field to the `toast.add` method to display a description.

```vue [ToastDescriptionExample.vue]
<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()

const toast = useToast()

function showToast() {
  toast.add(props)
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Icon

Pass an `icon` field to the `toast.add` method to display an [Icon](/pohon/components/icon).

```vue [ToastIconExample.vue]
<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: props.icon
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Avatar

Pass an `avatar` field to the `toast.add` method to display an [Avatar](/pohon/components/avatar).

```vue [ToastAvatarExample.vue]
<script setup lang="ts">
import type { AvatarProps } from 'pohon-ui'

const props = defineProps<{
  avatar: AvatarProps
}>()

const toast = useToast()

function showToast() {
  toast.add({
    title: 'User invited',
    description: 'benjamincanac was invited to the team.',
    avatar: props.avatar
  })
}
</script>

<template>
  <PButton label="Invite user" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Color

Pass a `color` field to the `toast.add` method to change the color of the Toast.

```vue [ToastColorExample.vue]
<script setup lang="ts">
import type { ToastProps } from 'pohon-ui'

const props = defineProps<{
  color: ToastProps['color']
}>()

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: 'i-lucide-wifi',
    color: props.color
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Close

Pass a `close` field to customize or hide the close [Button](/pohon/components/button) (with `false` value).

```vue [ToastCloseExample.vue]
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: 'i-lucide-wifi',
    close: {
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Close Icon

Pass a `closeIcon` field to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue [ToastCloseIconExample.vue]
<script setup lang="ts">
const props = defineProps<{
  closeIcon: string
}>()

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    closeIcon: props.closeIcon
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
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

### Actions

Pass an `actions` field to add some [Button](/pohon/components/button) actions to the Toast.

```vue [ToastActionsExample.vue]
<script setup lang="ts">
const toast = useToast()

const props = defineProps<{
  description: string
}>()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: props.description,
    actions: [{
      icon: 'i-lucide-refresh-cw',
      label: 'Retry',
      color: 'neutral',
      variant: 'outline',
      onClick: (e) => {
        e?.stopPropagation()
      }
    }]
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Duration

Pass a `duration` field to the `toast.add` method to change how long the Toast remains visible (in milliseconds). Defaults to `5000`.

> [!TIP]
> 
> Set the `duration` field to `0` to keep the Toast open until it's manually closed.

```vue [ToastDurationExample.vue]
<script setup lang="ts">
const toast = useToast()

const props = defineProps<{
  duration: number
}>()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    duration: props.duration
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Progress

Pass a `progress` field to customize or hide the [Progress](/pohon/components/progress) bar (with `false` value).

> [!TIP]
> 
> The Progress bar inherits the Toast color by default, but you can override it using the `progress.color` field.

```vue [ToastProgressExample.vue]
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: 'i-lucide-wifi',
    progress: false
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### Orientation

Pass an `orientation` field to the `toast.add` method to change the orientation of the Toast.

```vue [ToastOrientationExample.vue]
<script setup lang="ts">
const toast = useToast()

const props = defineProps<{
  orientation: 'horizontal' | 'vertical'
}>()

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    orientation: props.orientation,
    actions: [{
      icon: 'i-lucide-refresh-cw',
      label: 'Retry',
      color: 'neutral',
      variant: 'outline',
      onClick: (e) => {
        e?.stopPropagation()
      }
    }]
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

## Examples

> [!NOTE]
> See: /docs/components/app
> 
> Pohon UI provides an **App** component that wraps your app to provide global configurations.

### Change global position

Change the `toaster.position` prop on the [App](/pohon/components/app#props) component to change the position of the toasts.

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <PApp :toaster="toaster">
    <NuxtPage />
  </PApp>
</template>
```

```vue [ToastExample.vue]
<script setup lang="ts">
const toast = useToast()

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  toast.add({
    title: 'Event added to calendar',
    description: `This event is scheduled for ${formattedDate}.`,
    icon: 'i-lucide-calendar-days'
  })
}
</script>

<template>
  <PButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="addToCalendar" />
</template>
```

### Change global duration

Change the `toaster.duration` prop on the [App](/pohon/components/app#props) component to change the duration of the toasts.

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <PApp :toaster="toaster">
    <NuxtPage />
  </PApp>
</template>
```

```vue [ToastExample.vue]
<script setup lang="ts">
const toast = useToast()

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  toast.add({
    title: 'Event added to calendar',
    description: `This event is scheduled for ${formattedDate}.`,
    icon: 'i-lucide-calendar-days'
  })
}
</script>

<template>
  <PButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="addToCalendar" />
</template>
```

### Change global max

Change the `toaster.max` prop on the [App](/pohon/components/app#props) component to change the max number of toasts displayed at once.

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <PApp :toaster="toaster">
    <NuxtPage />
  </PApp>
</template>
```

```vue [ToastExample.vue]
<script setup lang="ts">
const toast = useToast()

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  toast.add({
    title: 'Event added to calendar',
    description: `This event is scheduled for ${formattedDate}.`,
    icon: 'i-lucide-calendar-days'
  })
}
</script>

<template>
  <PButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="addToCalendar" />
</template>
```

### Stacked toasts

Set the `toaster.expand` prop to `false` on the [App](/pohon/components/app#props) component to display stacked toasts (inspired by [Sonner](https://sonner.emilkowal.ski/)).

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <PApp :toaster="toaster">
    <NuxtPage />
  </PApp>
</template>
```

> [!TIP]
> 
> You can hover over the toasts to expand them. This will also pause the timer of the toasts.

```vue [ToastExample.vue]
<script setup lang="ts">
const toast = useToast()

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  toast.add({
    title: 'Event added to calendar',
    description: `This event is scheduled for ${formattedDate}.`,
    icon: 'i-lucide-calendar-days'
  })
}
</script>

<template>
  <PButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="addToCalendar" />
</template>
```

### Deduplicated toasts

When calling `toast.add` with an `id` that already exists, the existing toast will pulse instead of creating a duplicate.

```vue [ToastDuplicateExample.vue]
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    id: 'copy',
    title: 'Copied to clipboard',
    icon: 'i-lucide-circle-check',
    duration: 0
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### With callback

Pass an `onUpdateOpen` field to execute a callback when the toast is closed (either by expiration or user dismissal).

```vue [ToastCallbackExample.vue]
<script setup lang="ts">
const toast = useToast()

function showToast() {
  const t = toast.add({
    'title': 'Uploading file...',
    'description': 'Your file is being uploaded.',
    'icon': 'i-lucide-cloud-upload',
    'duration': 3000,
    'onUpdate:open': (open: boolean) => {
      if (open) {
        return
      }

      toast.update(t.id, {
        'title': 'File uploaded!',
        'description': 'Your file has been successfully uploaded.',
        'icon': 'i-lucide-check',
        'color': 'success',
        'onUpdate:open': undefined
      })
    }
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

### With HTML content

Use the [`h()` render function](https://vuejs.org/api/render-function.html#h) in the `title` or `description` fields to render HTML elements or Vue components with custom styling.

```vue [ToastHtmlExample.vue]
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: h('span', {}, [
      'Item ',
      h('span', { class: 'text-primary font-bold' }, '#15'),
      ' deleted'
    ]),
    description: h('span', {}, [
      'You have successfully deleted the item from your ',
      h('span', { class: 'font-bold' }, 'account'),
      '.'
    ]),
    icon: 'i-lucide-trash-2'
  })
}
</script>

<template>
  <PButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `height` | `Ref<number>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    toast: {
      slots: {
        root: 'relative group overflow-hidden bg-background shadow-lg rounded-lg ring ring-ring p-4 flex gap-2.5',
        wrapper: 'w-0 flex-1 flex flex-col',
        title: 'text-sm font-500 color-text-highlighted',
        description: 'text-sm color-text-muted',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xl',
        actions: 'flex gap-1.5 shrink-0',
        progress: 'absolute inset-x-0 bottom-0',
        close: 'p-0'
      },
      variants: {
        color: {
          primary: {
            root: 'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
            icon: 'color-primary'
          },
          secondary: {
            root: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
            icon: 'color-secondary'
          },
          success: {
            root: 'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
            icon: 'color-success'
          },
          info: {
            root: 'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
            icon: 'color-info'
          },
          warning: {
            root: 'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
            icon: 'color-warning'
          },
          error: {
            root: 'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
            icon: 'color-error'
          },
          neutral: {
            root: 'outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted',
            icon: 'color-text-highlighted'
          }
        },
        orientation: {
          horizontal: {
            root: 'items-center',
            actions: 'items-center'
          },
          vertical: {
            root: 'items-start',
            actions: 'items-start mt-2.5'
          }
        },
        title: {
          true: {
            description: 'mt-1'
          }
        }
      },
      defaultVariants: {
        color: 'primary'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Toast.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/toast.ts).

---

- [Toast](/akar/components/toast)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Toast.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Toast source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Toast.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `StringOrVNode | undefined; optional`
- **description** — `StringOrVNode | undefined; optional`
- **icon** — `any; optional`
- **avatar** — `AvatarProps | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation between the content and the actions.
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Display a close button to dismiss the toast. \`{ size: 'md', color: 'neutral', variant: 'link' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **actions** — `ButtonProps[] | undefined; optional`: Display a list of actions: - under the title and description when orientation is \`vertical\` - next to the close button when orientation is \`horizontal\` \`{ size: 'xs' }\`{lang="ts-type"}
- **duration** — `number | undefined; optional`: The time in milliseconds before the toast automatically closes. Overrides the global \`toaster.duration\`.  Set to \`0\` to keep the toast open until it's manually closed.
- **progress** — `boolean | Pick<ProgressProps, "ui" | "color"> | undefined; optional; default: true`: Display a progress bar showing the toast's remaining duration. \`{ size: 'sm' }\`{lang="ts-type"}
- **ui** — `{ root?: SlotClass; wrapper?: SlotClass; title?: SlotClass; description?: SlotClass; icon?: SlotClass; avatar?: SlotClass; avatarSize?: SlotClass; actions?: SlotClass; progress?: SlotClass; close?: SlotClass; } | undefined; optional`
- **type** — `"foreground" | "background" | undefined; optional`: Control the sensitivity of the toast for accessibility purposes.  For toasts that are the result of a user action, choose \`foreground\`. Toasts generated from background tasks should use \`background\`.
- **open** — `boolean | undefined; optional`: The controlled open state of the dialog. Can be bind as \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; avatarSize: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; progress: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **actions** — `{} | undefined`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; avatarSize: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; progress: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:open** — `[value: boolean]`
- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pause** — `[]`
- **resume** — `[]`
- **swipeStart** — `[event: SwipeEvent]`
- **swipeMove** — `[event: SwipeEvent]`
- **swipeCancel** — `[event: SwipeEvent]`
- **swipeEnd** — `[event: SwipeEvent]`
