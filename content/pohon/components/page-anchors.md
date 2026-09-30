---
title: "PageAnchors"
description: "A list of anchors to be displayed in the page."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-anchors.md"
---
## Usage

Use the PageAnchors component to display a list of links.

```vue
<script setup lang="ts">
import type { PageAnchor } from 'pohon-ui'

const links = ref<PageAnchor[]>([
  {
    label: "Documentation",
    icon: "i-lucide-book-open",
    to: "/docs/getting-started"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Theme Studio",
    icon: "i-lucide-palette",
    to: "/theme",
    target: "_blank"
  },
  {
    label: "Releases",
    icon: "i-simple-icons-github",
    to: "https://github.com/vinicunca/pohon/releases",
    target: "_blank"
  }
])
</script>

<template>
  <UPageAnchors :links="links" />
</template>
```

### Links

Use the `links` prop as an array of objects with the following properties:

- `label: string`
- `icon?: string`
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { PageAnchor } from 'pohon-ui'

const links = ref<PageAnchor[]>([
  {
    label: "Documentation",
    icon: "i-lucide-book-open",
    to: "/docs/getting-started"
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/docs/components"
  },
  {
    label: "Theme Studio",
    icon: "i-lucide-palette",
    to: "/theme",
    target: "_blank"
  },
  {
    label: "Releases",
    icon: "i-simple-icons-github",
    to: "https://github.com/vinicunca/pohon/releases",
    target: "_blank"
  }
])
</script>

<template>
  <UPageAnchors :links="links" />
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a layout

Use the PageAnchors component inside the [PageAside](/pohon/components/page-aside) component to display a list of links above the navigation.

```vue [layouts/docs.vue]
<script setup lang="ts">
import type { PageAnchor } from 'pohon-ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Theme Studio',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}]
</script>

<template>
  <PPage>
    <template #left>
      <PPageAside>
        <PPageAnchors :links="links" />

        <PSeparator type="dashed" />

        <PContentNavigation :navigation="navigation" />
      </PPageAside>
    </template>

    <slot />
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
    pageAnchors: {
      slots: {
        root: '',
        list: '',
        item: 'relative',
        link: 'group text-sm flex items-center gap-1.5 py-1 rounded-sm outline-primary/25 focus-visible:outline-3',
        linkLeading: 'rounded-md p-1 inline-flex ring-inset ring',
        linkLeadingIcon: 'size-4 shrink-0',
        linkLabel: 'truncate',
        linkLabelExternalIcon: 'size-3 absolute top-0 color-text-dimmed'
      },
      variants: {
        active: {
          true: {
            link: 'color-primary font-600',
            linkLeading: 'bg-primary ring-primary color-text-inverted'
          },
          false: {
            link: [
              'color-text-muted hover:color-text font-500',
              'transition-colors'
            ],
            linkLeading: [
              'bg-background-elevated/50 ring-ring-accented color-text-dimmed group-hover:bg-primary group-hover:ring-primary group-hover:color-text-inverted',
              'transition'
            ]
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageAnchors.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-anchors.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageAnchors.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageAnchors source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageAnchors.vue)

### Props

- **as** — `any; optional; default: "nav"`: The element or component this component should render as.
- **links** — `T[] | undefined; optional`
- **ui** — `{ root?: SlotClass; list?: SlotClass; item?: SlotClass; link?: SlotClass; linkLeading?: SlotClass; linkLeadingIcon?: SlotClass; linkLabel?: SlotClass; linkLabelExternalIcon?: SlotClass; } | undefined; optional`

### Slots

- **link** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeading: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-leading** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeading: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-label** — `{ link: T; active: boolean; }`
- **link-trailing** — `{ link: T; active: boolean; }`

### Events

No events are declared.
