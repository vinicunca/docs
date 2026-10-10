# Docs Layout

Build documentation sites with sidebar navigation, table of contents, and surround links.

## When to use

- Technical documentation sites
- Knowledge bases, help centers
- Any content-heavy site with hierarchical navigation

> Requires `@nuxt/content` (Nuxt only). See [conventions](../guidelines/conventions.md#content-module-integration) for setup: module order and UnoCSS content scanning. API: [content-search](https://vinicunca.dev/raw/pohon/components/content-search.md), [content-navigation](https://vinicunca.dev/raw/pohon/components/content-navigation.md), [content-toc](https://vinicunca.dev/raw/pohon/components/content-toc.md).

## Component tree

```
PApp
├── PHeader
├── PMain
│   └── NuxtLayout (docs)
│       └── PPage
│           ├── #left → PPageAside → PContentNavigation
│           └── NuxtPage
│               ├── PPageHeader
│               ├── PPageBody → ContentRenderer + PContentSurround
│               └── #right → PContentToc
└── PFooter
```

## App shell

```vue [app.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), { server: false })

provide('navigation', navigation)

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs')
}])
</script>

<template>
  <PApp>
    <PHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <PNavigationMenu :items="items" />

      <template #right>
        <PContentSearchButton />
        <PColorModeButton />
      </template>
    </PHeader>

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PFooter />

    <ClientOnly>
      <LazyPContentSearch :navigation="navigation" :files="files" />
    </ClientOnly>
  </PApp>
</template>
```

## Layout

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

## Page

```vue [pages/docs/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

definePageMeta({ layout: 'docs' })

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path)
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

### How nesting works

The outer `PPage` in the layout handles the **left sidebar**. The inner `PPage` in the page handles the **right sidebar**. They nest correctly — this is intentional.

### Common mistakes

- Not providing navigation via `provide`/`inject` — the layout needs it from the app shell.
- Forgetting `PContentSearch` in app.vue: search won't work without it. Give it `files` (client-side Fuse.js) or `search` from `useSearchCollection` (server-side FTS5, `@nuxt/content` 3.14+), and wrap it in `ClientOnly`.
- Using `PContentSearchButton` without `PContentSearch` — the button opens search, but the search component must exist.

## Key components

- `PPage` — multi-column grid with `#left`, `#default`, `#right` slots
- `PPageAside` — sticky sidebar wrapper (visible from `lg` breakpoint)
- `PContentNavigation` — sidebar navigation tree from Nuxt Content
- `PContentToc` — table of contents from page headings
- `PContentSurround` — prev/next links
- `PContentSearch` / `PContentSearchButton` — search command palette, opened with Cmd/Ctrl+K, the button, or `useContentSearch().open`
- `PPageAnchors` — simpler alternative to full TOC
