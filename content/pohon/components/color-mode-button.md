---
title: "ColorModeButton"
description: "A Button to switch between light and dark mode."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/color-mode-button.md"
---
## Usage

The ColorModeButton component extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UColorModeButton />
</template>
```

> [!NOTE]
> 
> The button defaults to `color="neutral"` and `variant="ghost"`.

## Examples

### With custom icons

**Nuxt:**

Use the `app.config.ts` to customize the icon with the `ui.icons` property:

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
})
```

**Vue:**

Use the `vite.config.ts` to customize the icon with the `ui.icons` property:

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        icons: {
          light: 'i-lucide-sun-medium',
          dark: 'i-lucide-moon-star'
        }
      }
    })
  ]
})
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/color-mode/ColorModeButton.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/color-mode/color-mode-button.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/color-mode/ColorModeButton.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
