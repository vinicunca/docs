---
title: "Skeleton"
description: "A placeholder to show while content is loading."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/skeleton.md"
---
## Usage

Use the Skeleton component as-is to display a placeholder.

```vue [SkeletonExample.vue]
<template>
  <div class="flex items-center gap-4">
    <PSkeleton class="size-12 rounded-full" />

    <div class="grid gap-2">
      <PSkeleton class="h-4 w-[250px]" />
      <PSkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    skeleton: {
      base: 'animate-pulse rounded-md bg-background-elevated'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Skeleton.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/skeleton.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Skeleton.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Skeleton source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Skeleton.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{}`

### Events

No events are declared.
