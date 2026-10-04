---
title: PageHeader
description: 'A responsive header for your pages.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/PageHeader.vue
---

## Usage

The PageHeader component displays a header for your page.

Use it inside the default slot of the [Page](/pohon/components/page) component, before the [PageBody](/pohon/components/page-body) component:

```vue {3}
<template>
  <PPage>
    <PPageHeader />

    <PPageBody />
  </PPage>
</template>
```

### Title

Use the `title` prop to display a title in the header.

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Description

Use the `description` prop to display a description in the header.

::component-code
---
prettier: true
ignore:
  - title
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  class: 'w-full'
---
::

### Headline

Use the `headline` prop to display a headline in the header.

::component-code
---
prettier: true
ignore:
  - title
  - description
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  class: 'w-full'
---
::

### Links

Use the `links` prop to display a list of [Button](/pohon/components/button) in the header.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  links:
    - label: 'GitHub'
      icon: i-simple-icons-github
      to: 'https://github.com/vinicunca/pohon/tree/main/src/runtime/components/PageHeader.vue'
      target: '_blank'
  class: 'w-full'
---
::

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.
::

### Within a page

Use the PageHeader component in a page to display the header of the page:

```vue [pages/\[...slug\\].vue]{19-24}
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

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
