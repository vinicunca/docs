---
title: "ContentSearch"
description: "A ready-to-use CommandPalette to add to your documentation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/content-search.md"
---
> [!WARNING]
> See: /docs/getting-started/integrations/content
> 
> This component is only available when the `@nuxt/content` module is installed.

## Usage

The ContentSearch component extends the [CommandPalette](/pohon/components/command-palette) component with built-in [`@nuxt/content`](https://content.nuxt.com) search support, navigation grouping and color mode commands. It supports both client-side [Fuse.js](https://www.fusejs.io/) filtering and server-side [FTS5 full-text search](https://www.sqlite.org/fts5.html). You can pass any CommandPalette property such as `icon`, `placeholder`, etc.

```vue [ContentSearchExample.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { data: files } = useLazyAsyncData('content-search-example', () => queryCollectionSearchSections('docs', {
  ignoredTags: ['style']
}), {
  server: false
})

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const searchTerm = ref('')
</script>

<template>
  <ClientOnly>
    <LazyUContentSearch
      v-model:search-term="searchTerm"
      open
      :autofocus="false"
      :files="files"
      :navigation="navigation"
      :fuse="{ resultLimit: 42 }"
    />
  </ClientOnly>
</template>
```

> [!NOTE]
> 
> You can open the CommandPalette by pressing `Meta` `K`, by using the [ContentSearchButton](/pohon/components/content-search-button) component or by using the `useContentSearch` composable: `const { open } = useContentSearch()`.

> [!TIP]
> 
> It is recommended to wrap the `ContentSearch` component in a [ClientOnly](https://nuxt.com/docs/api/components/client-only) component so it's not rendered on the server.

### Navigation

Use the `navigation` prop with [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation) to group search results by section:

```vue [app.vue]
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
</script>

<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
      />
    </ClientOnly>
  </PApp>
</template>
```

### Files

Use the `files` prop with [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections) to load all search sections upfront and use client-side [Fuse.js](https://www.fusejs.io/) filtering:

```vue [app.vue]
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs', {
  ignoredTags: ['style']
}), {
  server: false
})
</script>

<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :files="files"
        :fuse="{ resultLimit: 20, fuseOptions: { threshold: 0.2 } }"
      />
    </ClientOnly>
  </PApp>
</template>
```

> [!TIP]
> 
> Use the `fuse` prop to configure [useFuse](https://vueuse.org/integrations/useFuse) options passed to the underlying [CommandPalette](/pohon/components/command-palette) such as `resultLimit` (default `12`) and `fuseOptions.threshold` (default `0.1`).

### Search

Use the `search` prop with [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) for server-side [FTS5 full-text search](https://www.sqlite.org/fts5.html) with highlighted snippets instead of client-side filtering:

> [!WARNING]
> 
> Requires `@nuxt/content` v3.14+.

```vue [app.vue]
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { search, status, init } = useSearchCollection('content', {
  immediate: false,
  ignoredTags: ['style']
})

const { open } = useContentSearch()

// Defer index initialization until the user opens the palette when using `immediate: false`
watch(open, (value) => {
  if (value && status.value === 'idle') {
    init()
  }
})
</script>

<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :search="search"
        :search-status="status"
      />
    </ClientOnly>
  </PApp>
</template>
```

> [!TIP]
> 
> Pass `search-status` so the component can automatically re-trigger the search once the index becomes ready. Use `search-delay` (default `100ms`) to control how long typing must pause before the search fires. The `fuse.resultLimit` option caps the total results returned across all groups (search results, links, theme, etc.).

> [!NOTE]
> 
> When using the `search` prop, you don't need to pass `files`. The component calls the async search function on each keystroke instead of Fuse.js. Results are automatically mapped and grouped by navigation with highlighted snippets. Unlike the `files` approach which loads all search sections upfront and lets you browse navigation items before typing, the `search` prop only returns results after a query is entered.

### Shortcut

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](/pohon/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`Meta` `K`).

```vue [app.vue]
<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
      />
    </ClientOnly>
  </PApp>
</template>
```

### Links

Use the `links` prop to add a group of quick-access links at the top of the command palette:

```vue [app.vue]
<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Showcase',
  icon: 'i-lucide-presentation',
  to: '/showcase'
}]
</script>

<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        :links="links"
      />
    </ClientOnly>
  </PApp>
</template>
```

### Color Mode

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

You can disable this behavior by setting the `color-mode` prop to `false`:

```vue [app.vue]
<template>
  <PApp>
    <ClientOnly>
      <LazyUContentSearch
        :color-mode="false"
      />
    </ClientOnly>
  </PApp>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `commandPaletteRef` | `Ref<InstanceType<typeof PCommandPalette> \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    contentSearch: {
      slots: {
        modal: '',
        input: ''
      },
      variants: {
        fullscreen: {
          false: {
            modal: 'sm:max-w-3xl h-full sm:h-[28rem]'
          }
        },
        size: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {}
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/content/ContentSearch.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/content/content-search.ts).

---

- [CommandPalette](/pohon/components/command-palette)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/content/ContentSearch.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
