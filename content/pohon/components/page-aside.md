---
title: "PageAside"
description: "A sticky aside to display your page navigation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-aside.md"
---
## Usage

The PageAside component is a sticky `<aside>` element that is only displayed starting from the [`lg` breakpoint](https://unocss.dev/docs/breakpoints).

> [!TIP]
> See: /docs/getting-started/theme/css-variables#header
> 
> The PageAside component uses the `--ui-header-height` CSS variable to position itself correctly below the `Header`.

Use it inside the `left` or `right` slot of the [Page](/pohon/components/page) component:

```vue
<template>
  <PPage>
    <template #left>
      <PPageAside />
    </template>
  </PPage>
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a layout

Use the PageAside component in a layout to display the navigation:

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

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageAside: {
      slots: {
        root: 'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5',
        container: 'relative',
        top: 'sticky -top-8 -mt-8 pointer-events-none z-1',
        topHeader: 'h-8 bg-background -mx-4 px-4',
        topBody: 'bg-background relative pointer-events-auto flex flex-col -mx-4 px-4',
        topFooter: 'h-8 bg-gradient-to-b from-default -mx-4 px-4'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageAside.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-aside.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageAside.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageAside source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageAside.vue)

### Props

- **as** — `any; optional; default: "aside"`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; container?: SlotClass; top?: SlotClass; topHeader?: SlotClass; topBody?: SlotClass; topFooter?: SlotClass; } | undefined; optional`

### Slots

- **top** — `{} | undefined`
- **default** — `{} | undefined`
- **bottom** — `{} | undefined`

### Events

No events are declared.
