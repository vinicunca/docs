---
title: ColorModeSelect
description: 'A Select to switch between system, dark and light mode.'
category: color-mode
links:
  - label: SelectMenu
    to: /pohon/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/color-mode/ColorModeSelect.vue
---

## Usage

The ColorModeSelect component extends the [SelectMenu](/pohon/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

:component-code{prefix="color-mode"}

## Examples

### With custom icons

::framework-only
#nuxt
::div

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

::

#vue
::div
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

::

::

## API

### Props

:component-props

## Changelog

:component-changelog{prefix="color-mode"}
