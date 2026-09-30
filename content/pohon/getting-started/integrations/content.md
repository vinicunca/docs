---
title: "Content"
description: "Pohon UI integrates with Nuxt Content to deliver beautiful typography and consistent component styling."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/6.integrations/5.content.md"
---
## Installation

To get started, you can follow the official [guide](https://content.nuxt.com/docs/getting-started/installation) or in summary:

```bash [pnpm]
pnpm add @nuxt/content
```

```bash [yarn]
yarn add @nuxt/content
```

```bash [npm]
npm install @nuxt/content
```

```bash [bun]
bun add @nuxt/content
```

Then, add the `@nuxt/content` module in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    'pohon-ui',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css']
})
```

> [!CAUTION]
> 
> You need to register `@nuxt/content` after `pohon-ui` in the `modules` array, otherwise the prose components will not be available.

## Configuration

When using UnoCSS classes in your markdown content files, you need to ensure UnoCSS can detect and generate the necessary utility classes. By default, UnoCSS's automatic content detection might not pick up classes written in markdown files.

Add the content directory to UnoCSS's [filesystem sources](https://unocss.dev/config/#content) in `uno.config.ts`:

```ts [uno.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetVinicunca()],
  content: { filesystem: ['content/**/*.{md,yml}'] }
})
```

This ensures that:

- UnoCSS scans all markdown files in your content directory
- Any utility classes used in your markdown (like `text-primary`) are included in the final CSS
- Dynamic classes in MDC components or custom Vue components within your content work properly

Use `content/docs/**/*.md` if only documentation Markdown needs scanning.

> [!NOTE]
> See: https://unocss.dev/config/#content
> 
> Learn more about UnoCSS's automatic content detection and best practices for optimizing build performance.

## Components

You might be using `@nuxt/content` to build a documentation. To help you with that, we've built some components that you can use in your pages:

- a built-in full-text search command palette with [ContentSearch](/pohon/components/content-search), replacing the need for Algolia DocSearch
- a navigation tree with the [ContentNavigation](/pohon/components/content-navigation) component
- a sticky Table of Contents with the [ContentToc](/pohon/components/content-toc) component
- a prev / next navigation with the [ContentSurround](/pohon/components/content-surround) component

## Typography

Pohon UI provides its own implementations of all prose components, so markdown rendered by `@nuxt/content` picks up the same theme as the rest of your components.

> [!NOTE]
> See: /docs/typography
> 
> Discover the full **Typography** system and explore all available prose components for rich, consistent content presentation.

## Utils

Pohon UI ships helpers to reshape the data returned by `@nuxt/content` into the format its components expect.

### `mapContentNavigation`

This util will map the navigation from `queryCollectionNavigation` and transform it recursively into an array of objects that can be used by various components.

`mapContentNavigation(navigation, options?)`

- `navigation`: The navigation tree (array of ContentNavigationItem).
- `options` (optional):

  - `labelAttribute`: (string) Which field to use as label (`title` by default)
  - `deep`: (number or undefined) Controls how many levels of navigation are included (`undefined` by default, includes all levels)

**Example:** As shown in the breadcrumb example below, it's commonly used to transform the navigation data into the correct format.

```vue [app.vue]
<script setup lang="ts">
import { mapContentNavigation } from 'pohon-ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())

const breadcrumb = computed(() => mapContentNavigation(
  findPageBreadcrumb(navigation.value, page.value?.path, { indexAsChild: true }),
  { deep: 0 }
).map(({ icon, ...link }) => link))
</script>

<template>
  <PPage>
    <PPageHeader v-bind="page">
      <template #headline>
        <PBreadcrumb :items="breadcrumb" />
      </template>
    </PPageHeader>
  </PPage>
</template>
```


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
