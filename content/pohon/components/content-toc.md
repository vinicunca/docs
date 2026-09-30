---
title: "ContentToc"
description: "A sticky Table of Contents with automatic active anchor link highlighting."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/content-toc.md"
---
> [!WARNING]
> See: /docs/getting-started/integrations/content
> 
> This component is only available when the `@nuxt/content` module is installed.

## Usage

Use the `links` prop with the `page?.body?.toc?.links` you get when fetching a page.

```vue [ContentTocExample.vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <PContentToc :links="page?.body?.toc?.links" />
</template>
```

### Title

Use the `title` prop to change the title of the Table of Contents.

```vue
<script setup lang="ts">
import type { ContentTocLink } from 'pohon-ui'

const links = ref<ContentTocLink[]>([
  {
    id: "usage",
    depth: 2,
    text: "Usage",
    children: [
      {
        id: "title",
        depth: 3,
        text: "Title"
      },
      {
        id: "color",
        depth: 3,
        text: "Color"
      },
      {
        id: "highlight",
        depth: 3,
        text: "Highlight"
      },
      {
        id: "highlight-color",
        depth: 3,
        text: "Highlight Color"
      },
      {
        id: "highlight-variant",
        depth: 3,
        text: "Highlight Variant"
      }
    ]
  }
])
</script>

<template>
  <UContentToc title="On this page" :links="links" />
</template>
```

### Color

Use the `color` prop to change the color of the links.

```vue
<script setup lang="ts">
import type { ContentTocLink } from 'pohon-ui'

const links = ref<ContentTocLink[]>([
  {
    id: "usage",
    depth: 2,
    text: "Usage",
    children: [
      {
        id: "title",
        depth: 3,
        text: "Title"
      },
      {
        id: "color",
        depth: 3,
        text: "Color"
      },
      {
        id: "highlight",
        depth: 3,
        text: "Highlight"
      },
      {
        id: "highlight-color",
        depth: 3,
        text: "Highlight Color"
      },
      {
        id: "highlight-variant",
        depth: 3,
        text: "Highlight Variant"
      }
    ]
  }
])
</script>

<template>
  <UContentToc color="neutral" :links="links" />
</template>
```

### Highlight

Use the `highlight` prop to display a highlighted border for the active item.

```vue
<script setup lang="ts">
import type { ContentTocLink } from 'pohon-ui'

const links = ref<ContentTocLink[]>([
  {
    id: "usage",
    depth: 2,
    text: "Usage",
    children: [
      {
        id: "title",
        depth: 3,
        text: "Title"
      },
      {
        id: "color",
        depth: 3,
        text: "Color"
      },
      {
        id: "highlight",
        depth: 3,
        text: "Highlight"
      },
      {
        id: "highlight-color",
        depth: 3,
        text: "Highlight Color"
      },
      {
        id: "highlight-variant",
        depth: 3,
        text: "Highlight Variant"
      }
    ]
  }
])
</script>

<template>
  <UContentToc highlight :links="links" />
</template>
```

### Highlight Color

Use the `highlight-color` prop to change the color of the highlight. It defaults to the `color` prop.

```vue
<script setup lang="ts">
import type { ContentTocLink } from 'pohon-ui'

const links = ref<ContentTocLink[]>([
  {
    id: "usage",
    depth: 2,
    text: "Usage",
    children: [
      {
        id: "title",
        depth: 3,
        text: "Title"
      },
      {
        id: "color",
        depth: 3,
        text: "Color"
      },
      {
        id: "highlight",
        depth: 3,
        text: "Highlight"
      },
      {
        id: "highlight-color",
        depth: 3,
        text: "Highlight Color"
      },
      {
        id: "highlight-variant",
        depth: 3,
        text: "Highlight Variant"
      }
    ]
  }
])
</script>

<template>
  <UContentToc highlight highlight-color="neutral" :links="links" />
</template>
```

### Highlight Variant

Use the `highlight-variant` prop to change the style of the highlight. Defaults to `straight`.

```vue
<script setup lang="ts">
import type { ContentTocLink } from 'pohon-ui'

const links = ref<ContentTocLink[]>([
  {
    id: "usage",
    depth: 2,
    text: "Usage",
    children: [
      {
        id: "title",
        depth: 3,
        text: "Title"
      },
      {
        id: "color",
        depth: 3,
        text: "Color"
      },
      {
        id: "highlight",
        depth: 3,
        text: "Highlight"
      },
      {
        id: "highlight-color",
        depth: 3,
        text: "Highlight Color"
      },
      {
        id: "highlight-variant",
        depth: 3,
        text: "Highlight Variant"
      }
    ]
  },
  {
    id: "examples",
    depth: 2,
    text: "Examples",
    children: [
      {
        id: "within-a-page",
        depth: 3,
        text: "Within a Page"
      }
    ]
  },
  {
    id: "api",
    depth: 2,
    text: "API",
    children: [
      {
        id: "props",
        depth: 3,
        text: "Props"
      },
      {
        id: "slots",
        depth: 3,
        text: "Slots"
      },
      {
        id: "emits",
        depth: 3,
        text: "Emits"
      }
    ]
  },
  {
    id: "theme",
    depth: 2,
    text: "Theme"
  }
])
</script>

<template>
  <UContentToc highlight highlight-color="primary" highlight-variant="circuit" :links="links" />
</template>
```

## Examples

### Within a page

Use the ContentToc component in a page to display the Table of Contents:

```vue [pages/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <PPage v-if="page">
    <PPageHeader :title="page.title" />

    <PPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <PSeparator v-if="surround?.filter(Boolean).length" />

      <PContentSurround :surround="(surround as any)" />
    </PPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <PContentToc :links="page.body.toc.links" />
    </template>
  </PPage>
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
    contentToc: {
      slots: {
        root: 'sticky top-(--ui-header-height) z-10 bg-background/75 lg:bg-[initial] backdrop-blur-sm -mx-4 px-4 sm:px-6 sm:-mx-6 lg:ms-0 flex flex-col overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]',
        container: 'pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-border lg:border-0 flex flex-col lg:min-h-0',
        top: 'lg:shrink-0',
        bottom: 'hidden lg:flex lg:flex-col lg:shrink-0 gap-6',
        trigger: 'group text-sm font-600 flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 rounded-sm outline-primary/25 focus-visible:outline-3 lg:shrink-0',
        title: 'truncate',
        trailing: 'ms-auto inline-flex gap-1.5 items-center',
        trailingIcon: 'size-5 transform transition-transform duration-280 ease-out motion-reduce:transition-none shrink-0 group-data-[state=open]:rotate-180 lg:hidden',
        content: 'relative data-[state=open]:animate-[collapsible-down_200ms_var(--ease-out)] data-[state=closed]:animate-[collapsible-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden focus:outline-none lg:min-h-[min(var(--list-height,8rem),8rem)] lg:overflow-y-auto lg:scrollbar-none',
        list: 'min-w-0',
        listWithChildren: 'ms-3',
        item: 'min-w-0',
        itemWithChildren: '',
        link: 'group relative text-sm flex items-center rounded-sm outline-primary/25 focus-visible:outline-3 py-1',
        linkText: 'truncate',
        indicator: '',
        indicatorLine: '',
        indicatorActive: ''
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
        highlightColor: {
          primary: {
            indicatorActive: 'bg-primary'
          },
          secondary: {
            indicatorActive: 'bg-secondary'
          },
          success: {
            indicatorActive: 'bg-success'
          },
          info: {
            indicatorActive: 'bg-info'
          },
          warning: {
            indicatorActive: 'bg-warning'
          },
          error: {
            indicatorActive: 'bg-error'
          },
          neutral: {
            indicatorActive: 'bg-background-inverted'
          }
        },
        active: {
          false: {
            link: [
              'color-text-muted hover:color-text',
              'transition-colors'
            ]
          }
        },
        highlight: {
          true: ''
        },
        highlightVariant: {
          straight: '',
          circuit: ''
        },
        body: {
          true: {
            bottom: 'mt-6'
          }
        }
      },
      compoundVariants: [
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
        },
        {
          highlight: true,
          highlightVariant: 'straight',
          class: {
            list: 'ms-2.5 ps-4 border-s border-border',
            item: '-ms-px',
            indicator: 'absolute ms-2.5 transition-[translate,height] duration-280 ease-out motion-reduce:transition-none h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full',
            indicatorLine: 'hidden',
            indicatorActive: 'w-full h-full'
          }
        },
        {
          highlight: true,
          highlightVariant: 'circuit',
          class: {
            list: 'ps-6.5',
            item: '-ms-px',
            itemWithChildren: 'ps-px',
            indicator: 'absolute ms-2.5 start-0 top-0 rtl:-scale-x-100',
            indicatorLine: 'absolute inset-0 bg-(--ui-border)',
            indicatorActive: 'absolute w-full h-(--indicator-size) translate-y-(--indicator-position) transition-[translate,height] duration-280 ease-out motion-reduce:transition-none'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        highlightColor: 'primary',
        highlightVariant: 'straight'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/content/ContentToc.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/content/content-toc.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/content/ContentToc.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
