---
title: "ColorModeImage"
description: "An image element with a different source for light and dark mode."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/color-mode-image.md"
---
## Usage

The ColorModeImage component uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image) is installed, falling back to `img` otherwise.

```vue
<template>
  <UColorModeImage light="https://picsum.photos/id/29/400" dark="https://picsum.photos/id/46/400" :width="200" :height="200" />
</template>
```

> [!NOTE]
> 
> Switch between light and dark mode to see the different images:

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes
> 
> This component also supports all native `<img>` HTML attributes.

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/color-mode/ColorModeImage.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/color-mode/color-mode-image.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/color-mode/ColorModeImage.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
