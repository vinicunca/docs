---
title: "PageHeader"
description: "A responsive header for your pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-header.md"
---
## Usage

The PageHeader component displays a header for your page.

Use it inside the default slot of the [Page](/pohon/components/page) component, before the [PageBody](/pohon/components/page-body) component:

```vue
<template>
  <PPage>
    <PPageHeader />

    <PPageBody />
  </PPage>
</template>
```

### Title

Use the `title` prop to display a title in the header.

```vue
<template>
  <UPageHeader title="PageHeader" />
</template>
```

### Description

Use the `description` prop to display a description in the header.

```vue
<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." />
</template>
```

### Headline

Use the `headline` prop to display a headline in the header.

```vue
<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." headline="Components" />
</template>
```

### Links

Use the `links` prop to display a list of [Button](/pohon/components/button) in the header.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageHeader.vue",
    target: "_blank"
  }
])
</script>

<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." headline="Components" :links="links" />
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the PageHeader component in a page to display the header of the page:

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
    <PPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

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

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageHeader: {
      slots: {
        root: 'relative border-b border-border py-8',
        container: '',
        wrapper: 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4',
        headline: 'mb-2.5 text-sm font-600 color-primary flex items-center gap-1.5',
        title: 'text-3xl sm:text-4xl text-pretty font-700 color-text-highlighted',
        description: 'text-lg text-pretty color-text-muted',
        links: 'flex flex-wrap items-center gap-1.5'
      },
      variants: {
        title: {
          true: {
            description: 'mt-4'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageHeader.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-header.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageHeader.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageHeader source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageHeader.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **headline** — `string | undefined; optional`
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **links** — `ButtonProps[] | undefined; optional`: Display a list of Button next to the title. \`{ color: 'neutral', variant: 'outline' }\`{lang="ts-type"}
- **ui** — `{ root?: SlotClass; container?: SlotClass; wrapper?: SlotClass; headline?: SlotClass; title?: SlotClass; description?: SlotClass; links?: SlotClass; } | undefined; optional`

### Slots

- **headline** — `{} | undefined`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **links** — `{} | undefined`
- **default** — `{} | undefined`

### Events

No events are declared.
