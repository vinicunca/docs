---
title: "Color Mode"
description: "Pohon UI integrates with VueUse to allow for easy switching between light and dark themes."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/6.integrations/3.color-mode/2.vue.md"
---
> [!NOTE]
> See: /docs/getting-started/integrations/color-mode/nuxt
> 
> Looking for the **Nuxt** version?

## Usage

Pohon UI automatically registers the [useDark](https://vueuse.org/core/useDark) composable as a Vue plugin, so there's no additional setup required.

### Components

You can use the built-in [ColorModeAvatar](/pohon/components/color-mode-avatar) or [ColorModeImage](/pohon/components/color-mode-image) components to display different images for light and dark mode and the [ColorModeButton](/pohon/components/color-mode-button), [ColorModeSwitch](/pohon/components/color-mode-switch) or [ColorModeSelect](/pohon/components/color-mode-select) components to switch between light and dark modes.

You can also use the [useColorMode](https://vueuse.org/core/useColorMode) composable to build your own custom component:

```vue [ColorModeButton.vue]
<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark: boolean) {
    colorMode.value = _isDark ? 'dark' : 'light'
  }
})
</script>

<template>
  <PButton
    :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
    color="neutral"
    variant="ghost"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    @click="isDark = !isDark"
  />
</template>
```

### Configuration

You can disable this plugin with the `colorMode` option in your `vite.config.ts`:

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      colorMode: false
    })
  ]
})
```


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
