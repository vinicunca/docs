---
title: "Banner"
description: "Display a banner at the top of your website to inform users about important information."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/banner.md"
---
## Usage

### Title

Use the `title` prop to display a title on the Banner.

```vue
<template>
  <UBanner title="This is a banner with an important message." />
</template>
```

### Icon

Use the `icon` prop to display an icon on the Banner.

```vue
<template>
  <UBanner icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```

### Color

Use the `color` prop to change the color of the Banner.

```vue
<template>
  <UBanner color="neutral" icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```

### Close

Use the `close` prop to display a [Button](/pohon/components/button) to dismiss the Banner. Defaults to `false`.

> [!TIP]
> 
> A `close` event will be emitted when the close button is clicked.

```vue [BannerExample.vue]
<script setup lang="ts">
import type { BannerProps } from 'pohon-ui'

const { id = 'example' } = defineProps<{
  id?: string
  title?: string
  color?: BannerProps['color']
  closeIcon?: string
}>()

function onClose() {
  localStorage.removeItem(`banner-${id}`)

  setTimeout(() => {
    document.querySelector('html')?.classList.remove('hide-banner')
  }, 1000)
}

onBeforeMount(() => {
  localStorage.removeItem(`banner-${id}`)
})
</script>

<template>
  <PBanner
    :id="id"
    :title="title || 'This is a closable banner'"
    :color="color"
    :close-icon="closeIcon"
    close
    @close="onClose"
  />
</template>
```

> [!NOTE]
> 
> When closed, `banner-${id}` will be stored in the local storage to prevent it from being displayed again. :br For the example above, `banner-example` will be stored in the local storage.

> [!CAUTION]
> 
> To persist the dismissed state across page reloads, you must specify an `id` prop. Without an explicit `id`, the banner will only be hidden for the current session and will reappear on page reload.

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue [BannerExample.vue]
<script setup lang="ts">
import type { BannerProps } from 'pohon-ui'

const { id = 'example' } = defineProps<{
  id?: string
  title?: string
  color?: BannerProps['color']
  closeIcon?: string
}>()

function onClose() {
  localStorage.removeItem(`banner-${id}`)

  setTimeout(() => {
    document.querySelector('html')?.classList.remove('hide-banner')
  }, 1000)
}

onBeforeMount(() => {
  localStorage.removeItem(`banner-${id}`)
})
</script>

<template>
  <PBanner
    :id="id"
    :title="title || 'This is a closable banner'"
    :color="color"
    :close-icon="closeIcon"
    close
    @close="onClose"
  />
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

Use the `actions` prop to add some [Button](/pohon/components/button) actions to the Banner.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const actions = ref<ButtonProps[]>([
  {
    label: "Action 1",
    variant: "outline"
  },
  {
    label: "Action 2",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UBanner title="This is a banner with actions." :actions="actions" />
</template>
```

> [!NOTE]
> 
> The action buttons default to `color="neutral"` and `size="xs"`. You can customize these values by passing them directly to each action button.

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UBanner to="https://nuxtlabs.com/" target="_blank" title="NuxtLabs is joining Vercel!" color="primary" />
</template>
```

> [!NOTE]
> 
> The `NuxtLink` component will inherit all other attributes you pass to the `User` component.

## Examples

### Within `app.vue`

Use the Banner component in your `app.vue` or in a layout:

```vue [app.vue]
<template>
  <PApp>
    <PBanner icon="i-lucide-construction" title="Pohon UI v2 is available!" />

    <PHeader />

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PFooter />
  </PApp>
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
    banner: {
      slots: {
        root: [
          'relative z-50 w-full',
          'transition-colors'
        ],
        container: 'flex items-center justify-between gap-3 h-12',
        left: 'hidden lg:flex-1 lg:flex lg:items-center',
        center: 'flex items-center gap-1.5 min-w-0',
        right: 'lg:flex-1 flex items-center justify-end',
        icon: 'size-5 shrink-0 color-text-inverted pointer-events-none',
        title: 'text-sm color-text-inverted font-500 truncate',
        actions: 'flex gap-1.5 shrink-0 isolate',
        close: 'color-text-inverted hover:bg-background/10 focus-visible:bg-background/10 -me-1.5 lg:me-0'
      },
      variants: {
        color: {
          primary: {
            root: 'bg-primary'
          },
          secondary: {
            root: 'bg-secondary'
          },
          success: {
            root: 'bg-success'
          },
          info: {
            root: 'bg-info'
          },
          warning: {
            root: 'bg-warning'
          },
          error: {
            root: 'bg-error'
          },
          neutral: {
            root: 'bg-background-inverted'
          }
        },
        to: {
          true: {
            root: 'outline-(--ui-bg)/25 -outline-offset-3 has-[>a:focus-visible]:outline-3'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          to: true,
          class: {
            root: 'hover:bg-primary/90'
          }
        },
        {
          color: 'secondary',
          to: true,
          class: {
            root: 'hover:bg-secondary/90'
          }
        },
        {
          color: 'success',
          to: true,
          class: {
            root: 'hover:bg-success/90'
          }
        },
        {
          color: 'info',
          to: true,
          class: {
            root: 'hover:bg-info/90'
          }
        },
        {
          color: 'warning',
          to: true,
          class: {
            root: 'hover:bg-warning/90'
          }
        },
        {
          color: 'error',
          to: true,
          class: {
            root: 'hover:bg-error/90'
          }
        },
        {
          color: 'neutral',
          to: true,
          class: {
            root: 'hover:bg-background-inverted/90'
          }
        }
      ],
      defaultVariants: {
        color: 'primary'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Banner.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/banner.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Banner.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Banner source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Banner.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **id** — `string | undefined; optional`: A unique id saved to local storage to remember if the banner has been dismissed. Without an explicit id, the banner will not be persisted and will reappear on page reload.
- **icon** — `any; optional`: The icon displayed next to the title.
- **title** — `string | undefined; optional`
- **actions** — `ButtonProps[] | undefined; optional`: Display a list of actions next to the title. \`{ color: 'neutral', size: 'xs' }\`{lang="ts-type"}
- **to** — `string | it | et | undefined; optional`
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a close button to dismiss the banner. \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **ui** — `{ root?: SlotClass; container?: SlotClass; left?: SlotClass; center?: SlotClass; right?: SlotClass; icon?: SlotClass; title?: SlotClass; actions?: SlotClass; close?: SlotClass; } | undefined; optional`

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **actions** — `{} | undefined`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **close** — `[]`
