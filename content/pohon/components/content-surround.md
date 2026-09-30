---
title: "ContentSurround"
description: "A pair of prev and next links to navigate between pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/content-surround.md"
---
> [!WARNING]
> See: /docs/getting-started/integrations/content
> 
> This component is only available when the `@nuxt/content` module is installed.

## Usage

Use the `surround` prop with the `surround` value you get when fetching a page surround.

```vue [ContentSurroundExample.vue]
<script setup lang="ts">
const route = useRoute()

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description']
  })
})
</script>

<template>
  <PContentSurround :surround="(surround as any)" />
</template>
```

### Prev / Next

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](/pohon/components/icon).

```vue
<script setup lang="ts">
import type { ContentSurroundLink } from 'pohon-ui'

const surround = ref<ContentSurroundLink[]>([
  {
    title: "ContentSearchButton",
    path: "/docs/components/content-search-button",
    stem: "docs/2.components/content-search-button",
    description: "A pre-styled Button to open the ContentSearch modal."
  },
  {
    title: "ContentToc",
    path: "/docs/components/content-toc",
    stem: "docs/2.components/content-toc",
    description: "A sticky Table of Contents with customizable slots."
  }
])
</script>

<template>
  <UContentSurround prev-icon="i-lucide-chevron-left" next-icon="i-lucide-chevron-right" :surround="surround" />
</template>
```

## Examples

### Within a page

Use the ContentSurround component in a page to display the prev and next links:

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

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    contentSurround: {
      slots: {
        root: 'grid grid-cols-1 sm:grid-cols-2 gap-8',
        link: [
          'group block px-6 py-8 rounded-lg border border-border hover:bg-background-elevated/50 outline-primary/25 focus-visible:outline-3 focus-visible:border-primary',
          'transition-colors'
        ],
        linkLeading: [
          'inline-flex items-center rounded-full p-1.5 bg-background-elevated group-hover:bg-primary/10 ring ring-ring-accented mb-4 group-hover:ring-primary/50',
          'transition'
        ],
        linkLeadingIcon: [
          'size-5 shrink-0 color-text-highlighted group-hover:color-primary',
          'transition-[color,translate]'
        ],
        linkTitle: 'font-500 text-[15px] color-text-highlighted mb-1 truncate',
        linkDescription: 'text-sm color-text-muted line-clamp-2'
      },
      variants: {
        direction: {
          left: {
            linkLeadingIcon: [
              'group-active:-translate-x-0.5'
            ]
          },
          right: {
            link: 'text-end',
            linkLeadingIcon: [
              'group-active:translate-x-0.5'
            ]
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/content/ContentSurround.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/content/content-surround.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/content/ContentSurround.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
