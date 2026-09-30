---
title: "ColorModeSelect"
description: "A Select to switch between system, dark and light mode."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/color-mode-select.md"
---
## Usage

The ColorModeSelect component extends the [SelectMenu](/pohon/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UColorModeSelect />
</template>
```

## Examples

### With custom icons

**Nuxt:**

Use the `app.config.ts` to customize the icon with the `ui.icons` property:

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      system: 'i-lucide-laptop',
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

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/color-mode/ColorModeSelect.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/color-mode/color-mode-select.ts).

---

- [SelectMenu](/pohon/components/select-menu)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/color-mode/ColorModeSelect.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
