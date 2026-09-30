---
title: "Empty"
description: "A component to display an empty state."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/empty.md"
---
## Usage

Use the Empty component to display a placeholder state when there is no content to show.

```vue
<template>
  <p-empty :actions="[
    {
      icon: 'i-lucide-plus',
      label: 'Create new'
    },
    {
      icon: 'i-lucide-refresh-cw',
      label: 'Refresh',
      color: 'neutral',
      variant: 'subtle'
    }
  ]" description="It looks like you haven't added any projects. Create one to get started." icon="i-lucide-file" title="No projects found" />
</template>
```

### Title

Use the `title` prop to set the title of the empty state.

```vue
<template>
  <UEmpty title="No projects found" />
</template>
```

### Description

Use the `description` prop to set the description of the empty state.

```vue
<template>
  <UEmpty title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

### Icon

Use the `icon` prop to set the icon of the empty state.

```vue
<template>
  <UEmpty icon="i-lucide-file" title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

### Avatar

Use the `avatar` prop to set the avatar of the empty state.

```vue
<template>
  <UEmpty :avatar="{
  src: 'https://github.com/nuxt.png'
}" title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

### Loading

Use the `loading` prop to show a loading icon in place of the icon. The layout stays identical, so you can toggle between loading and empty states without layout shifts.

```vue
<template>
  <UEmpty icon="i-lucide-file" loading title="Loading projects" description="Please wait while we fetch your projects." />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
  <UEmpty icon="i-lucide-file" loading loading-icon="i-lucide-loader" title="Loading projects" description="Please wait while we fetch your projects." />
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

### Actions

Use the `actions` prop to add some [Button](/pohon/components/button) actions to the empty state.

```vue
<template>
  <UEmpty icon="i-lucide-file" title="No projects found" description="It looks like you haven't added any projects. Create one to get started." :actions="[
  {
    icon: 'i-lucide-plus',
    label: 'Create new'
  },
  {
    icon: 'i-lucide-refresh-cw',
    label: 'Refresh',
    color: 'neutral',
    variant: 'subtle'
  }
]" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the empty state.

```vue
<template>
  <UEmpty variant="naked" icon="i-lucide-bell" title="No notifications" description="You're all caught up. New notifications will appear here." :actions="[
  {
    icon: 'i-lucide-refresh-cw',
    label: 'Refresh',
    color: 'neutral',
    variant: 'subtle'
  }
]" />
</template>
```

### Size

Use the `size` prop to change the size of the empty state.

```vue
<template>
  <UEmpty size="xl" icon="i-lucide-bell" title="No notifications" description="You're all caught up. New notifications will appear here." :actions="[
  {
    icon: 'i-lucide-refresh-cw',
    label: 'Refresh',
    color: 'neutral',
    variant: 'subtle'
  }
]" />
</template>
```

## Examples

### With slots

Use the available slots to create a more complex empty state.

```vue [EmptySlotsExample.vue]
<script setup lang="ts">
import type { UserProps } from 'pohon-ui'

const members: UserProps[] = [
  {
    name: 'Daniel Roe',
    description: 'danielroe',
    to: 'https://github.com/danielroe',
    target: '_blank',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'danielroe',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Pooya Parsa',
    description: 'pi0',
    to: 'https://github.com/pi0',
    target: '_blank',
    avatar: {
      src: 'https://github.com/pi0.png',
      alt: 'pi0',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Sébastien Chopin',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Benjamin Canac',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac',
      loading: 'lazy' as const
    }
  }
]
</script>

<template>
  <PEmpty
    title="No team members"
    description="Invite your team to collaborate on this project."
    variant="naked"
    :actions="[{
      label: 'Invite members',
      icon: 'i-lucide-user-plus',
      color: 'neutral'
    }]"
  >
    <template #leading>
      <PAvatarGroup size="xl">
        <PAvatar src="https://github.com/nuxt.png" alt="Nuxt" loading="lazy" />
        <PAvatar src="https://github.com/unjs.png" alt="Unjs" loading="lazy" />
      </PAvatarGroup>
    </template>

    <template #footer>
      <PSeparator class="my-4" />

      <div class="grid grid-cols-2 gap-4">
        <PPageCard
          v-for="(member, index) in members"
          :key="index"
          :to="member.to"
          :ui="{ container: 'sm:p-4' }"
        >
          <PUser
            :avatar="member.avatar"
            :name="member.name"
            :description="member.description"
            :ui="{ name: 'truncate' }"
          />
        </PPageCard>
      </div>
    </template>
  </PEmpty>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    empty: {
      slots: {
        root: 'relative flex flex-col items-center justify-center gap-4 rounded-lg p-4 sm:p-6 lg:p-8 min-w-0',
        header: 'flex flex-col items-center gap-2 max-w-sm text-center',
        avatar: 'shrink-0 mb-2',
        title: 'color-text-highlighted text-pretty font-500',
        description: 'text-balance text-center',
        body: 'flex flex-col items-center gap-4 max-w-sm',
        actions: 'flex flex-wrap justify-center gap-2 shrink-0',
        footer: 'flex flex-col items-center gap-2 max-w-sm'
      },
      variants: {
        size: {
          xs: {
            avatar: 'size-8 text-base',
            title: 'text-sm',
            description: 'text-xs'
          },
          sm: {
            avatar: 'size-9 text-lg',
            title: 'text-sm',
            description: 'text-xs'
          },
          md: {
            avatar: 'size-10 text-xl',
            title: 'text-base',
            description: 'text-sm'
          },
          lg: {
            avatar: 'size-11 text-[22px]',
            title: 'text-base',
            description: 'text-sm'
          },
          xl: {
            avatar: 'size-12 text-2xl',
            title: 'text-lg',
            description: 'text-base'
          }
        },
        variant: {
          solid: {
            root: 'bg-background-inverted',
            title: 'color-text-inverted',
            description: 'color-text-dimmed'
          },
          outline: {
            root: 'bg-background ring ring-ring',
            description: 'color-text-muted'
          },
          soft: {
            root: 'bg-background-elevated/50',
            description: 'color-text-toned'
          },
          subtle: {
            root: 'bg-background-elevated/50 ring ring-ring',
            description: 'color-text-toned'
          },
          naked: {
            description: 'color-text-muted'
          }
        },
        loading: {
          true: {
            avatar: '[&>[data-slot=icon]]:animate-spin'
          }
        }
      },
      defaultVariants: {
        variant: 'outline',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Empty.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/empty.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Empty.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Empty source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Empty.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **icon** — `any; optional`: The icon displayed above the title.
- **avatar** — `AvatarProps | undefined; optional`
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **actions** — `ButtonProps[] | undefined; optional`: Display a list of Button in the body.
- **variant** — `"solid" | "outline" | "soft" | "subtle" | "naked" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **ui** — `{ root?: SlotClass; header?: SlotClass; avatar?: SlotClass; title?: SlotClass; description?: SlotClass; body?: SlotClass; actions?: SlotClass; footer?: SlotClass; } | undefined; optional`

### Slots

- **header** — `{} | undefined`
- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **body** — `{} | undefined`
- **actions** — `{} | undefined`
- **footer** — `{} | undefined`

### Events

No events are declared.
