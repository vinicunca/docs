---
title: "ContentNavigation"
description: "An accordion-style navigation component for organizing page links."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/content-navigation.md"
---
> [!WARNING]
> See: /docs/getting-started/integrations/content
> 
> This component is only available when the `@nuxt/content` module is installed.

## Usage

Use the `navigation` prop with the `navigation` value you get when fetching the navigation of your app.

```vue [ContentNavigationExample.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <PContentNavigation :navigation="navigation" highlight />
</template>
```

### Type

Set the `type` prop to `single` to only allow one item to be open at a time. Defaults to `multiple`.

```vue
<script setup lang="ts">
import type { ContentNavigationLink } from 'pohon-ui'

const navigation = ref<ContentNavigationLink[]>([
  {
    title: "Guide",
    icon: "i-lucide-book-open",
    path: "#getting-started",
    children: [
      {
        title: "Introduction",
        path: "#introduction",
        active: true
      },
      {
        title: "Installation",
        path: "#installation"
      }
    ]
  },
  {
    title: "Composables",
    icon: "i-lucide-database",
    path: "#composables",
    children: [
      {
        title: "defineShortcuts",
        path: "#defineshortcuts"
      },
      {
        title: "useModal",
        path: "#usemodal"
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation type="single" />
</template>
```

### Color

Use the `color` prop to change the color of the navigation links.

```vue
<script setup lang="ts">
import type { ContentNavigationLink } from 'pohon-ui'

const navigation = ref<ContentNavigationLink[]>([
  {
    title: "Guide",
    icon: "i-lucide-book-open",
    path: "#getting-started",
    children: [
      {
        title: "Introduction",
        path: "#introduction",
        active: true
      },
      {
        title: "Installation",
        path: "#installation"
      }
    ]
  },
  {
    title: "Composables",
    icon: "i-lucide-database",
    path: "#composables",
    children: [
      {
        title: "defineShortcuts",
        path: "#defineshortcuts"
      },
      {
        title: "useModal",
        path: "#usemodal"
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation color="neutral" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the navigation links.

```vue
<script setup lang="ts">
import type { ContentNavigationLink } from 'pohon-ui'

const navigation = ref<ContentNavigationLink[]>([
  {
    title: "Guide",
    icon: "i-lucide-book-open",
    path: "#getting-started",
    children: [
      {
        title: "Introduction",
        path: "#introduction",
        active: true
      },
      {
        title: "Installation",
        path: "#installation"
      }
    ]
  },
  {
    title: "Composables",
    icon: "i-lucide-database",
    path: "#composables",
    children: [
      {
        title: "defineShortcuts",
        path: "#defineshortcuts"
      },
      {
        title: "useModal",
        path: "#usemodal"
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation variant="link" />
</template>
```

### Highlight

Use the `highlight` prop to display a highlighted border for the active link.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.

```vue
<script setup lang="ts">
import type { ContentNavigationLink } from 'pohon-ui'

const navigation = ref<ContentNavigationLink[]>([
  {
    title: "Guide",
    icon: "i-lucide-book-open",
    path: "#getting-started",
    children: [
      {
        title: "Introduction",
        path: "#introduction",
        active: true
      },
      {
        title: "Installation",
        path: "#installation"
      }
    ]
  },
  {
    title: "Composables",
    icon: "i-lucide-database",
    path: "#composables",
    children: [
      {
        title: "defineShortcuts",
        path: "#defineshortcuts"
      },
      {
        title: "useModal",
        path: "#usemodal"
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation highlight highlight-color="primary" color="primary" variant="pill" />
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/pohon/components/icon) of items that have children. Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
import type { ContentNavigationLink } from 'pohon-ui'

const navigation = ref<ContentNavigationLink[]>([
  {
    title: "Guide",
    icon: "i-lucide-book-open",
    path: "#getting-started",
    children: [
      {
        title: "Introduction",
        path: "#introduction",
        active: true
      },
      {
        title: "Installation",
        path: "#installation"
      }
    ]
  },
  {
    title: "Composables",
    icon: "i-lucide-database",
    path: "#composables",
    children: [
      {
        title: "defineShortcuts",
        path: "#defineshortcuts"
      },
      {
        title: "useModal",
        path: "#usemodal"
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation trailing-icon="i-lucide-arrow-up" />
</template>
```

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.

## Examples

### Within a layout

Use the ContentNavigation component inside a [PageAside](/pohon/components/page-aside) component within a layout to display the navigation of the page:

```vue [layouts/docs.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <PPage>
    <template #left>
      <PPageAside>
        <PContentNavigation :navigation="navigation" highlight />
      </PPageAside>
    </template>

    <slot />
  </PPage>
</template>
```

### Within a header

Use the ContentNavigation component inside the `content` slot of a [Header](/pohon/components/header) component to display the navigation of the page on mobile:

```vue [components/Header.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <PHeader>
    <template #body>
      <PContentNavigation :navigation="navigation" highlight />
    </template>
  </PHeader>
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
    contentNavigation: {
      slots: {
        root: '',
        content: 'data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=closed]:overflow-hidden focus:outline-none',
        list: 'isolate -mx-2.5 -mt-1.5',
        item: '',
        listWithChildren: 'ms-5 border-s border-border',
        itemWithChildren: 'flex flex-col data-[state=open]:mb-1.5',
        trigger: 'font-600',
        link: 'group relative w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3',
        linkLeadingIcon: 'shrink-0 size-5',
        linkTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        linkTrailingBadge: 'shrink-0',
        linkTrailingBadgeSize: 'sm',
        linkTrailingIcon: 'size-5 transform transition-transform duration-280 shrink-0 group-data-[state=open]:rotate-180',
        linkTitle: 'truncate',
        linkTitleExternalIcon: 'size-3 align-top color-text-dimmed'
      },
      variants: {
        color: {
          primary: {
            link: 'before:outline-primary/25'
          },
          secondary: {
            link: 'before:outline-secondary/25'
          },
          success: {
            link: 'before:outline-success/25'
          },
          info: {
            link: 'before:outline-info/25'
          },
          warning: {
            link: 'before:outline-warning/25'
          },
          error: {
            link: 'before:outline-error/25'
          },
          neutral: {
            link: 'before:outline-outline-inverted/25'
          }
        },
        highlightColor: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          pill: '',
          link: ''
        },
        active: {
          true: {
            link: 'font-500'
          },
          false: {
            link: 'color-text-muted',
            linkLeadingIcon: 'color-text-dimmed'
          }
        },
        disabled: {
          true: {
            trigger: 'data-[state=open]:color-text-highlighted'
          }
        },
        highlight: {
          true: {}
        },
        level: {
          true: {
            item: 'ps-1.5 -ms-px',
            itemWithChildren: 'ps-1.5 -ms-px'
          }
        }
      },
      compoundVariants: [
        {
          highlight: true,
          level: true,
          class: {
            link: [
              'after:absolute after:-left-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
              'after:transition-colors'
            ]
          }
        },
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'hover:color-text-highlighted hover:before:bg-background-elevated/50 data-[state=open]:color-text-highlighted',
              'transition-colors before:transition-colors'
            ],
            linkLeadingIcon: [
              'group-hover:color-text group-data-[state=open]:color-text',
              'transition-colors'
            ]
          }
        },
        {
          color: 'primary',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-primary',
            linkLeadingIcon: 'color-primary group-data-[state=open]:color-primary'
          }
        },
        {
          color: 'secondary',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-secondary',
            linkLeadingIcon: 'color-secondary group-data-[state=open]:color-secondary'
          }
        },
        {
          color: 'success',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-success',
            linkLeadingIcon: 'color-success group-data-[state=open]:color-success'
          }
        },
        {
          color: 'info',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-info',
            linkLeadingIcon: 'color-info group-data-[state=open]:color-info'
          }
        },
        {
          color: 'warning',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-warning',
            linkLeadingIcon: 'color-warning group-data-[state=open]:color-warning'
          }
        },
        {
          color: 'error',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-error',
            linkLeadingIcon: 'color-error group-data-[state=open]:color-error'
          }
        },
        {
          color: 'neutral',
          variant: 'pill',
          active: true,
          class: {
            link: 'color-text-highlighted',
            linkLeadingIcon: 'color-text-highlighted group-data-[state=open]:color-text-highlighted'
          }
        },
        {
          variant: 'pill',
          active: true,
          highlight: false,
          class: {
            link: 'before:bg-background-elevated'
          }
        },
        {
          variant: 'pill',
          active: true,
          highlight: true,
          disabled: false,
          class: {
            link: [
              'hover:before:bg-background-elevated/50',
              'before:transition-colors'
            ]
          }
        },
        {
          disabled: false,
          active: false,
          variant: 'link',
          class: {
            link: [
              'hover:color-text-highlighted data-[state=open]:color-text-highlighted',
              'transition-colors'
            ],
            linkLeadingIcon: [
              'group-hover:color-text group-data-[state=open]:color-text',
              'transition-colors'
            ]
          }
        },
        {
          color: 'primary',
          variant: 'link',
          active: true,
          class: {
            link: 'color-primary',
            linkLeadingIcon: 'color-primary group-data-[state=open]:color-primary'
          }
        },
        {
          color: 'secondary',
          variant: 'link',
          active: true,
          class: {
            link: 'color-secondary',
            linkLeadingIcon: 'color-secondary group-data-[state=open]:color-secondary'
          }
        },
        {
          color: 'success',
          variant: 'link',
          active: true,
          class: {
            link: 'color-success',
            linkLeadingIcon: 'color-success group-data-[state=open]:color-success'
          }
        },
        {
          color: 'info',
          variant: 'link',
          active: true,
          class: {
            link: 'color-info',
            linkLeadingIcon: 'color-info group-data-[state=open]:color-info'
          }
        },
        {
          color: 'warning',
          variant: 'link',
          active: true,
          class: {
            link: 'color-warning',
            linkLeadingIcon: 'color-warning group-data-[state=open]:color-warning'
          }
        },
        {
          color: 'error',
          variant: 'link',
          active: true,
          class: {
            link: 'color-error',
            linkLeadingIcon: 'color-error group-data-[state=open]:color-error'
          }
        },
        {
          color: 'neutral',
          variant: 'link',
          active: true,
          class: {
            link: 'color-text-highlighted',
            linkLeadingIcon: 'color-text-highlighted group-data-[state=open]:color-text-highlighted'
          }
        },
        {
          highlightColor: 'primary',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-primary'
          }
        },
        {
          highlightColor: 'secondary',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-secondary'
          }
        },
        {
          highlightColor: 'success',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-success'
          }
        },
        {
          highlightColor: 'info',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-info'
          }
        },
        {
          highlightColor: 'warning',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-warning'
          }
        },
        {
          highlightColor: 'error',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-error'
          }
        },
        {
          highlightColor: 'neutral',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-background-inverted'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        highlightColor: 'primary',
        variant: 'pill'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/content/ContentNavigation.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/content/content-navigation.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/content/ContentNavigation.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
