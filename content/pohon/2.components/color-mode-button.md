---
title: ColorModeButton
description: 'A Button to switch between light and dark mode.'
category: color-mode
links:
  - label: Button
    to: /pohon/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/color-mode/ColorModeButton.vue
---

## Usage

The ColorModeButton component extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

:component-code{prefix="color-mode"}

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

## Examples

### With custom icons

::framework-only
# nuxt
::div

Use the `app.config.ts` to customize the icon with the `ui.icons` property:

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
});
```

::

# vue
::div
Use the `vite.config.ts` to customize the icon with the `ui.icons` property:

```ts [vite.config.ts]
import vue from '@vitejs/plugin-vue';
import ui from 'pohon-ui/vite';
import { defineConfig } from 'vite';

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
});
```

::

::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
This component also supports all native `<button>` HTML attributes.
::

## Changelog

:component-changelog{prefix="color-mode"}
