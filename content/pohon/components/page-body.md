---
title: "PageBody"
description: "The main content of your page."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-body.md"
---
## Usage

The PageBody component wraps your main content and adds some padding for consistent spacing.

Use it inside the default slot of the [Page](/pohon/components/page) component, after the [PageHeader](/pohon/components/page-header) component:

```vue
<template>
  <PPage>
    <PPageHeader />

    <PPageBody />
  </PPage>
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the PageBody component in a page to display the content of the page:

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
> In this example, we use the [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) component from `@nuxt/content` to render the content of the page.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageBody: {
      base: 'mt-8 pb-24 space-y-12'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageBody.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-body.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageBody.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageBody source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageBody.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
