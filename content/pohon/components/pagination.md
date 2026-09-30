---
title: "Pagination"
description: "A list of buttons or links to navigate through pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/pagination.md"
---
## Usage

Use the `default-page` prop or the `v-model:page` directive to control the current page.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :total="100" />
</template>
```

> [!NOTE]
> 
> The Pagination component uses some [`Button`](/pohon/components/button) to display the pages, use [`color`](#color), [`variant`](#variant) and [`size`](#size) props to style them.

### Total

Use the `total` prop to set the total number of items in the list.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :total="100" />
</template>
```

### Items Per Page

Use the `items-per-page` prop to set the number of items per page. Defaults to `10`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :items-per-page="20" :total="100" />
</template>
```

### Sibling Count

Use the `sibling-count` prop to set the number of siblings to show. Defaults to `2`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :sibling-count="1" :total="100" />
</template>
```

### Show Edges

Use the `show-edges` prop to always show the ellipsis, first and last pages. Defaults to `false`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" show-edges :sibling-count="1" :total="100" />
</template>
```

### Show Controls

Use the `show-controls` prop to show the first, prev, next and last buttons. Defaults to `true`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :show-controls="false" show-edges :total="100" />
</template>
```

### Color

Use the `color` prop to set the color of the inactive controls. Defaults to `neutral`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" color="primary" :total="100" />
</template>
```

### Variant

Use the `variant` prop to set the variant of the inactive controls. Defaults to `outline`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" color="neutral" variant="subtle" :total="100" />
</template>
```

### Active Color

Use the `active-color` prop to set the color of the active control. Defaults to `primary`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" active-color="neutral" :total="100" />
</template>
```

### Active Variant

Use the `active-variant` prop to set the variant of the active control. Defaults to `solid`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" active-color="primary" active-variant="subtle" :total="100" />
</template>
```

### Size

Use the `size` prop to set the size of the controls. Defaults to `md`.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" size="xl" :total="100" />
</template>
```

### Disabled

Use the `disabled` prop to disable the pagination controls.

```vue
<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :total="100" disabled />
</template>
```

## Examples

### With links

Use the `to` prop to transform buttons into links. Pass a function that receives the page number and returns a route destination.

```vue [PaginationLinksExample.vue]
<script setup lang="ts">
const page = ref(5)

function to(page: number) {
  return {
    query: {
      page
    },
    hash: '#with-links'
  }
}
</script>

<template>
  <PPagination v-model:page="page" :total="100" :to="to" :sibling-count="1" show-edges />
</template>
```

> [!NOTE]
> 
> In this example we're adding the `#with-links` hash to avoid going to the top of the page.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pagination: {
      slots: {
        root: '',
        list: 'flex items-center gap-1',
        ellipsis: 'pointer-events-none',
        label: 'min-w-5 text-center',
        first: '',
        prev: '',
        item: '',
        next: '',
        last: ''
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Pagination.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/pagination.ts).

---

- [Pagination](/akar/components/pagination)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Pagination.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Pagination source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Pagination.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **firstIcon** — `any; optional`: The icon to use for the first page control.
- **prevIcon** — `any; optional`: The icon to use for the previous page control.
- **nextIcon** — `any; optional`: The icon to use for the next page control.
- **lastIcon** — `any; optional`: The icon to use for the last page control.
- **ellipsisIcon** — `any; optional`: The icon to use for the ellipsis control.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`: The color of the pagination controls.
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "outline"`: The variant of the pagination controls.
- **activeColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "primary"`: The color of the active pagination control.
- **activeVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "solid"`: The variant of the active pagination control.
- **showControls** — `boolean | undefined; optional; default: true`: Whether to show the first, previous, next, and last controls.
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **to** — `((page: number) => string | it | et | undefined) | undefined; optional`: A function to render page controls as links.
- **ui** — `{ root?: SlotClass; list?: SlotClass; ellipsis?: SlotClass; label?: SlotClass; first?: SlotClass; prev?: SlotClass; item?: SlotClass; next?: SlotClass; last?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **page** — `number | undefined; optional`: The controlled value of the current page. Can be binded as \`v-model:page\`.
- **defaultPage** — `number | undefined; optional`: The value of the page that should be active when initially rendered.  Use when you do not need to control the value state.
- **itemsPerPage** — `number | undefined; optional; default: 10`: Number of items per page
- **showEdges** — `boolean | undefined; optional; default: false`: When \`true\`, always show first page, last page, and ellipsis
- **siblingCount** — `number | undefined; optional; default: 2`: Number of sibling should be shown around the current page
- **total** — `number | undefined; optional; default: 0`: Number of items in your list

### Slots

- **first** — `{} | undefined`
- **prev** — `{} | undefined`
- **next** — `{} | undefined`
- **last** — `{} | undefined`
- **ellipsis** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; ellipsis: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; first: (props?: Record<string, any> | undefined) => string | undefined; prev: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; next: (props?: Record<string, any> | undefined) => string | undefined; last: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item** — `{ page: number; pageCount: number; item: { type: "ellipsis"; } | { type: "page"; value: number; }; index: number; }`

### Events

- **update:page** — `[value: number]`
