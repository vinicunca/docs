---
title: "PageGrid"
description: "A responsive grid system for displaying content in a flexible layout."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-grid.md"
---
## Usage

The PageGrid component provides a responsive grid layout for displaying [PageCard](/pohon/components/page-card) components or any other elements, automatically adjusting from 1 to 3 columns based on screen size.

```vue [PageGridExample.vue]
<script setup lang="ts">
const cards = ref([
  {
    title: 'Icons',
    description: 'Pohon UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'Fonts',
    description: 'Pohon UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    title: 'Color Mode',
    description: 'Pohon UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode'
  }
])
</script>

<template>
  <PPageGrid>
    <PPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </PPageGrid>
</template>
```

You can also use it to display a list of cards in a bento style layout by using `col-span-*` and `row-span-*` utility classes.

```vue [PageGridBentoExample.vue]
<script setup lang="ts">
const cards = ref([
  {
    title: 'Theme',
    description: 'Learn how to customize Pohon UI components using UnoCSS.',
    icon: 'i-lucide-swatch-book',
    to: '/docs/getting-started/theme/design-system',
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const
  },
  {
    title: 'Fonts',
    description: 'Pohon UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts',
    variant: 'soft' as const
  },
  {
    title: 'Color Mode',
    description: 'Pohon UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
    variant: 'soft' as const
  },
  {
    title: 'Icons',
    description: 'Pohon UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons',
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true
  }
])
</script>

<template>
  <PPageGrid>
    <PPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </PPageGrid>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageGrid.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-grid.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageGrid.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageGrid source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageGrid.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
