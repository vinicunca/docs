---
title: "ColorModeAvatar"
description: "An Avatar with a different source for light and dark mode."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/color-mode-avatar.md"
---
## Usage

The ColorModeAvatar component extends the [Avatar](/pohon/components/avatar) component, so you can pass any property such as `size`, `icon`, etc.

Use the `light` and `dark` props to define the source for light and dark mode.

```vue
<template>
  <UColorModeAvatar light="https://github.com/vuejs.png" dark="https://github.com/nuxt.png" />
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/color-mode/ColorModeAvatar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/color-mode/color-mode-avatar.ts).

---

- [Avatar](/pohon/components/avatar)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/color-mode/ColorModeAvatar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
