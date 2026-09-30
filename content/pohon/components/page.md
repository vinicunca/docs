---
title: "Page"
description: "A grid layout for your pages with left and right columns."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page.md"
---
## Usage

The Page component helps you create layouts with optional left and right columns. It's perfect for building documentation sites and other content-focused pages.

```vue
<template>
  <PPage>
    <template #left />

    <template #right />
  </PPage>
</template>
```

> [!TIP]
> 
> The page will display as a centered single column layout if no slots are specified.

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a layout

Use the Page component in a layout with the `left` slot to display a navigation:

```vue [layouts/docs.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <PPage>
    <template #left>
      <PPageAside>
        <PContentNavigation :navigation="navigation" />
      </PPageAside>
    </template>

    <slot />
  </PPage>
</template>
```

> [!NOTE]
> 
> In this example, we use the `ContentNavigation` component to display the navigation injected in `app.vue`.

### Within a page

Use the Page component in a page with the `right` slot to display a table of contents:

```vue [pages/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})
</script>

<template>
  <PPage>
    <PPageHeader :title="page.title" :description="page.description" />

    <PPageBody>
      <ContentRenderer :value="page" />

      <PSeparator />

      <PContentSurround :surround="surround" />
    </PPageBody>

    <template #right>
      <PContentToc :links="page.body.toc.links" />
    </template>
  </PPage>
</template>
```

> [!NOTE]
> 
> In this example, we use the `ContentToc` component to display the table of contents.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    page: {
      slots: {
        root: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-10',
        left: 'lg:col-span-2',
        center: 'lg:col-span-8',
        right: 'lg:col-span-2 order-first lg:order-last'
      },
      variants: {
        left: {
          true: ''
        },
        right: {
          true: ''
        }
      },
      compoundVariants: [
        {
          left: true,
          right: true,
          class: {
            center: 'lg:col-span-6'
          }
        },
        {
          left: false,
          right: false,
          class: {
            center: 'lg:col-span-10'
          }
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Page.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Page.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Page source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Page.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; left?: SlotClass; center?: SlotClass; right?: SlotClass; } | undefined; optional`

### Slots

- **left** — `{} | undefined`
- **default** — `{} | undefined`
- **right** — `{} | undefined`

### Events

No events are declared.
