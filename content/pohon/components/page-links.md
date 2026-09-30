---
title: "PageLinks"
description: "A list of links to be displayed in the page."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-links.md"
---
## Usage

Use the PageLinks component to display a list of links.

```vue
<script setup lang="ts">
import type { PageLink } from 'pohon-ui'

const links = ref<PageLink[]>([
  {
    label: "Edit this page",
    icon: "i-lucide-file-pen",
    to: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-links.md"
  },
  {
    label: "Star on GitHub",
    icon: "i-lucide-star",
    to: "https://github.com/vinicunca/pohon"
  },
  {
    label: "Releases",
    icon: "i-lucide-rocket",
    to: "https://github.com/vinicunca/pohon/releases"
  }
])
</script>

<template>
  <UPageLinks :links="links" />
</template>
```

### Links

Use the `links` prop as an array of objects with the following properties:

- `label: string`
- `icon?: string`
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { PageLink } from 'pohon-ui'

const links = ref<PageLink[]>([
  {
    label: "Edit this page",
    icon: "i-lucide-file-pen",
    to: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-links.md"
  },
  {
    label: "Star on GitHub",
    icon: "i-lucide-star",
    to: "https://github.com/vinicunca/pohon"
  },
  {
    label: "Releases",
    icon: "i-lucide-rocket",
    to: "https://github.com/vinicunca/pohon/releases"
  }
])
</script>

<template>
  <UPageLinks :links="links" />
</template>
```

### Title

Use the `title` prop to display a title above the links.

```vue
<script setup lang="ts">
import type { PageLink } from 'pohon-ui'

const links = ref<PageLink[]>([
  {
    label: "Edit this page",
    icon: "i-lucide-file-pen",
    to: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-links.md"
  },
  {
    label: "Star on GitHub",
    icon: "i-lucide-star",
    to: "https://github.com/vinicunca/pohon"
  },
  {
    label: "Releases",
    icon: "i-lucide-rocket",
    to: "https://github.com/vinicunca/pohon/releases"
  }
])
</script>

<template>
  <UPageLinks title="Community" :links="links" />
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the PageLinks component in the `bottom` slot of the ContentToc component to display a list of links below the table of contents.

```vue [pages/[...slug].vue]
<script setup lang="ts">
import type { PageLink } from 'pohon-ui'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/vinicunca/pohon/edit/main/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/vinicunca/pohon',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases'
}])
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
      <PContentToc :links="page.body.toc.links">
        <template #bottom>
          <PSeparator type="dashed" />

          <PPageLinks title="Community" :links="links" />
        </template>
      </PContentToc>
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
    pageLinks: {
      slots: {
        root: 'flex flex-col gap-3',
        title: 'text-sm font-600 flex items-center gap-1.5',
        list: 'flex flex-col gap-2',
        item: 'relative',
        link: 'group text-sm flex items-center gap-1.5 rounded-sm outline-primary/25 focus-visible:outline-3',
        linkLeadingIcon: 'size-5 shrink-0',
        linkLabel: 'truncate',
        linkLabelExternalIcon: 'size-3 absolute top-0 color-text-dimmed'
      },
      variants: {
        active: {
          true: {
            link: 'color-primary font-500'
          },
          false: {
            link: [
              'color-text-muted hover:color-text',
              'transition-colors'
            ]
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageLinks.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-links.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageLinks.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageLinks source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageLinks.vue)

### Props

- **as** — `any; optional; default: "nav"`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **links** — `T[] | undefined; optional`
- **ui** — `{ root?: SlotClass; title?: SlotClass; list?: SlotClass; item?: SlotClass; link?: SlotClass; linkLeadingIcon?: SlotClass; linkLabel?: SlotClass; linkLabelExternalIcon?: SlotClass; } | undefined; optional`

### Slots

- **title** — `{} | undefined`
- **link** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-leading** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-label** — `{ link: T; active: boolean; }`
- **link-trailing** — `{ link: T; active: boolean; }`

### Events

No events are declared.
