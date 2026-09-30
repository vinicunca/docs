---
title: "Breadcrumb"
description: "A hierarchy of links to navigate through a website."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/breadcrumb.md"
---
## Usage

Use the Breadcrumb component to show the current page's location in your site's hierarchy.

```vue
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: "Docs",
    icon: "i-lucide-book-open",
    to: "/docs"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/docs/components/breadcrumb"
  }
])
</script>

<template>
  <UBreadcrumb :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: "Docs",
    icon: "i-lucide-book-open",
    to: "/docs"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/docs/components/breadcrumb"
  }
])
</script>

<template>
  <UBreadcrumb :items="items" />
</template>
```

> [!NOTE]
> 
> A `span` is rendered instead of a link when the `to` property is not defined.

### Separator Icon

Use the `separator-icon` prop to customize the [Icon](/pohon/components/icon) between each item. Defaults to `i-lucide-chevron-right`.

```vue
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: "Docs",
    icon: "i-lucide-book-open",
    to: "/docs"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/docs/components/breadcrumb"
  }
])
</script>

<template>
  <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key.

### Color

Use the `color` prop to change the color of the active Breadcrumb.

```vue
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: "Docs",
    icon: "i-lucide-book-open",
    to: "/docs"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/docs/components/breadcrumb"
  }
])
</script>

<template>
  <UBreadcrumb color="secondary" :items="items" />
</template>
```

## Examples

### With separator slot

Use the `#separator` slot to customize the separator between each item.

```vue [BreadcrumbSeparatorSlotExample.vue]
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items: BreadcrumbItem[] = [
  {
    label: 'Docs',
    to: '/docs'
  },
  {
    label: 'Components',
    to: '/docs/components'
  },
  {
    label: 'Breadcrumb',
    to: '/docs/components/breadcrumb'
  }
]
</script>

<template>
  <PBreadcrumb :items="items">
    <template #separator>
      <span class="mx-2 color-text-muted">/</span>
    </template>
  </PBreadcrumb>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`

```vue [BreadcrumbCustomSlotExample.vue]
<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items = [
  {
    label: 'Home',
    to: '/'
  },
  {
    slot: 'dropdown' as const,
    icon: 'i-lucide-ellipsis',
    children: [
      {
        label: 'Documentation',
        to: '/docs'
      },
      {
        label: 'Themes'
      },
      {
        label: 'GitHub'
      }
    ]
  },
  {
    label: 'Components',
    to: '/docs/components'
  },
  {
    label: 'Breadcrumb',
    to: '/docs/components/breadcrumb'
  }
] satisfies BreadcrumbItem[]
</script>

<template>
  <PBreadcrumb :items="items">
    <template #dropdown="{ item }">
      <PDropdownMenu :items="item.children">
        <PButton :icon="item.icon" color="neutral" variant="link" class="p-0.5" />
      </PDropdownMenu>
    </template>
  </PBreadcrumb>
</template>
```

> [!TIP]
> See: #slots
> 
> You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    breadcrumb: {
      slots: {
        root: 'relative min-w-0',
        list: 'flex items-center gap-1.5',
        item: 'flex min-w-0',
        link: 'group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md',
        linkLeadingIcon: 'shrink-0 size-5',
        linkLeadingAvatar: 'shrink-0',
        linkLeadingAvatarSize: '2xs',
        linkLabel: 'truncate',
        separator: 'flex',
        separatorIcon: 'shrink-0 size-5 color-text-muted'
      },
      variants: {
        active: {
          true: {
            link: 'font-600'
          },
          false: {
            link: 'color-text-muted font-500'
          }
        },
        disabled: {
          true: {
            link: 'cursor-not-allowed opacity-75'
          }
        },
        to: {
          true: ''
        },
        color: {
          primary: {
            link: 'outline-primary/25 focus-visible:outline-3'
          },
          secondary: {
            link: 'outline-secondary/25 focus-visible:outline-3'
          },
          success: {
            link: 'outline-success/25 focus-visible:outline-3'
          },
          info: {
            link: 'outline-info/25 focus-visible:outline-3'
          },
          warning: {
            link: 'outline-warning/25 focus-visible:outline-3'
          },
          error: {
            link: 'outline-error/25 focus-visible:outline-3'
          },
          neutral: {
            link: 'outline-outline-inverted/25 focus-visible:outline-3'
          }
        }
      },
      compoundVariants: [
        {
          disabled: false,
          active: false,
          to: true,
          class: {
            link: [
              'hover:color-text',
              'transition-colors'
            ]
          }
        },
        {
          color: 'primary',
          active: true,
          class: {
            link: 'color-primary'
          }
        },
        {
          color: 'secondary',
          active: true,
          class: {
            link: 'color-secondary'
          }
        },
        {
          color: 'success',
          active: true,
          class: {
            link: 'color-success'
          }
        },
        {
          color: 'info',
          active: true,
          class: {
            link: 'color-info'
          }
        },
        {
          color: 'warning',
          active: true,
          class: {
            link: 'color-warning'
          }
        },
        {
          color: 'error',
          active: true,
          class: {
            link: 'color-error'
          }
        },
        {
          color: 'neutral',
          active: true,
          class: {
            link: 'color-text-highlighted'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Breadcrumb.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/breadcrumb.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Breadcrumb.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Breadcrumb source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Breadcrumb.vue)

### Props

- **as** — `any; optional; default: "nav"`: The element or component this component should render as.
- **items** — `T[] | undefined; optional`
- **separatorIcon** — `any; optional`: The icon to use as a separator.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: The key used to get the label from the item.
- **ui** — `{ root?: SlotClass; list?: SlotClass; item?: SlotClass; link?: SlotClass; linkLeadingIcon?: SlotClass; linkLeadingAvatar?: SlotClass; linkLeadingAvatarSize?: SlotClass; linkLabel?: SlotClass; separator?: SlotClass; separatorIcon?: SlotClass; } | undefined; optional`

### Slots

- **item** — `{ item: T; index: number; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-leading** — `{ item: T; index: number; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-label** — `{ item: T; index: number; active: boolean; }`
- **item-trailing** — `{ item: T; index: number; active: boolean; }`
- **separator** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
