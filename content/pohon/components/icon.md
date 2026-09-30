---
title: "Icon"
description: "A component to display any icon from Iconify or another component."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/icon.md"
---
## Usage

Use the `name` prop to display an icon.

```vue
<template>
  <UIcon name="i-lucide-lightbulb" class="size-5" />
</template>
```

> [!NOTE]
> 
> You can use any name from the [https://iconify.design](https://iconify.design) collection. Browse them easily on [https://icones.js.org](https://icones.js.org) or search directly from your AI assistant using the [`search-icons`](/pohon/getting-started/ai/mcp#available-tools) MCP tool.

**Nuxt:**

> [!CAUTION]
> See: /docs/getting-started/integrations/icons/nuxt#collections
> 
> It's highly recommended to install the icons collections you need, read more about this.

## Examples

### SVG

You can also pass a Vue component into the `name` prop:

```vue [IconSvgExample.vue]
<script setup lang="ts">
import { h } from 'vue'

const IconLightbulb = () => h(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  [
    h(
      'path',
      {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'd': 'M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4'
      }
    )
  ]
)
</script>

<template>
  <PIcon :name="IconLightbulb" class="size-5" />
</template>
```

You can define your icon components yourself, or use [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) to import them directly from SVG files:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <PIcon :name="IconLightbulb" class="size-5" />
</template>
```

## API

### Props

```ts
/**
 * Props for the Icon component
 */
interface IconProps {
  name: string;
  ui?: { base?: any; } | undefined;
}
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Icon.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/icon.ts).

---

- [Iconify](https://iconify.design/)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Icon.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Icon source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Icon.vue)

### Props

- **name** — `any; required`
- **mode** — `"css" | "svg" | undefined; optional`
- **size** — `string | number | undefined; optional`
- **customize** — `boolean | IconifyIconCustomizeCallback | null | undefined; optional`

### Slots

No slots are declared.

### Events

No events are declared.
