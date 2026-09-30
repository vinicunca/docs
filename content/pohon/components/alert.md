---
title: "Alert"
description: "A callout to draw the user's attention."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/alert.md"
---
## Usage

### Title

Use the `title` prop to set the title of the Alert.

```vue
<template>
  <UAlert title="Heads up!" />
</template>
```

### Description

Use the `description` prop to set the description of the Alert.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon).

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar).

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." :avatar="{
  src: 'https://github.com/nuxt.png'
}" />
</template>
```

### Color

Use the `color` prop to change the color of the Alert.

```vue
<template>
  <UAlert color="neutral" title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the Alert.

```vue
<template>
  <UAlert color="neutral" variant="subtle" title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
</template>
```

### Close

Use the `close` prop to display a [Button](/pohon/components/button) to dismiss the Alert.

> [!TIP]
> 
> An `update:open` event will be emitted when the close button is clicked.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" close />
</template>
```

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" :close="{
  color: 'primary',
  variant: 'outline',
  class: 'rounded-full'
}" />
</template>
```

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" close close-icon="i-lucide-arrow-right" />
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

Use the `actions` prop to add some [Button](/pohon/components/button) actions to the Alert.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" :actions="[
  {
    label: 'Action 1'
  },
  {
    label: 'Action 2',
    color: 'neutral',
    variant: 'subtle'
  }
]" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Alert.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" orientation="horizontal" :actions="[
  {
    label: 'Action 1'
  },
  {
    label: 'Action 2',
    color: 'neutral',
    variant: 'subtle'
  }
]" />
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Alert.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." class="rounded-none" />
</template>
```

### `ui` prop

Use the `ui` prop to override the slots styles of the Alert.

```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-rocket" :ui="{
  icon: 'size-11'
}" />
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
    alert: {
      slots: {
        root: 'relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5',
        wrapper: 'min-w-0 flex-1 flex flex-col',
        title: 'text-sm font-500',
        description: 'text-sm opacity-90',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xl',
        actions: 'flex flex-wrap gap-1.5 shrink-0',
        close: 'p-0'
      },
      variants: {
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: ''
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
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: {
            root: 'bg-primary color-text-inverted'
          }
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: {
            root: 'bg-secondary color-text-inverted'
          }
        },
        {
          color: 'success',
          variant: 'solid',
          class: {
            root: 'bg-success color-text-inverted'
          }
        },
        {
          color: 'info',
          variant: 'solid',
          class: {
            root: 'bg-info color-text-inverted'
          }
        },
        {
          color: 'warning',
          variant: 'solid',
          class: {
            root: 'bg-warning color-text-inverted'
          }
        },
        {
          color: 'error',
          variant: 'solid',
          class: {
            root: 'bg-error color-text-inverted'
          }
        },
        {
          color: 'primary',
          variant: 'outline',
          class: {
            root: 'color-primary ring ring-inset ring-primary/25'
          }
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: {
            root: 'color-secondary ring ring-inset ring-secondary/25'
          }
        },
        {
          color: 'success',
          variant: 'outline',
          class: {
            root: 'color-success ring ring-inset ring-success/25'
          }
        },
        {
          color: 'info',
          variant: 'outline',
          class: {
            root: 'color-info ring ring-inset ring-info/25'
          }
        },
        {
          color: 'warning',
          variant: 'outline',
          class: {
            root: 'color-warning ring ring-inset ring-warning/25'
          }
        },
        {
          color: 'error',
          variant: 'outline',
          class: {
            root: 'color-error ring ring-inset ring-error/25'
          }
        },
        {
          color: 'primary',
          variant: 'soft',
          class: {
            root: 'bg-primary/10 color-primary'
          }
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: {
            root: 'bg-secondary/10 color-secondary'
          }
        },
        {
          color: 'success',
          variant: 'soft',
          class: {
            root: 'bg-success/10 color-success'
          }
        },
        {
          color: 'info',
          variant: 'soft',
          class: {
            root: 'bg-info/10 color-info'
          }
        },
        {
          color: 'warning',
          variant: 'soft',
          class: {
            root: 'bg-warning/10 color-warning'
          }
        },
        {
          color: 'error',
          variant: 'soft',
          class: {
            root: 'bg-error/10 color-error'
          }
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: {
            root: 'bg-primary/10 color-primary ring ring-inset ring-primary/25'
          }
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: {
            root: 'bg-secondary/10 color-secondary ring ring-inset ring-secondary/25'
          }
        },
        {
          color: 'success',
          variant: 'subtle',
          class: {
            root: 'bg-success/10 color-success ring ring-inset ring-success/25'
          }
        },
        {
          color: 'info',
          variant: 'subtle',
          class: {
            root: 'bg-info/10 color-info ring ring-inset ring-info/25'
          }
        },
        {
          color: 'warning',
          variant: 'subtle',
          class: {
            root: 'bg-warning/10 color-warning ring ring-inset ring-warning/25'
          }
        },
        {
          color: 'error',
          variant: 'subtle',
          class: {
            root: 'bg-error/10 color-error ring ring-inset ring-error/25'
          }
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: {
            root: 'color-text-inverted bg-background-inverted'
          }
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: {
            root: 'color-text-highlighted bg-background ring ring-inset ring-ring'
          }
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: {
            root: 'color-text-highlighted bg-background-elevated/50'
          }
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: {
            root: 'color-text-highlighted bg-background-elevated/50 ring ring-inset ring-ring-accented'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'solid'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Alert.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/alert.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Alert.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Alert source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Alert.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **icon** — `any; optional`
- **avatar** — `AvatarProps | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation between the content and the actions.
- **actions** — `ButtonProps[] | undefined; optional`: Display a list of actions: - under the title and description when orientation is \`vertical\` - next to the close button when orientation is \`horizontal\` \`{ size: 'xs' }\`{lang="ts-type"}
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a close button to dismiss the alert. \`{ size: 'md', color: 'neutral', variant: 'link' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **ui** — `{ root?: SlotClass; wrapper?: SlotClass; title?: SlotClass; description?: SlotClass; icon?: SlotClass; avatar?: SlotClass; avatarSize?: SlotClass; actions?: SlotClass; close?: SlotClass; } | undefined; optional`

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; avatarSize: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **actions** — `{} | undefined`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; avatarSize: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:open** — `[value: boolean]`
