---
title: "Installation"
description: "Learn how to install and configure Pohon UI in your Nuxt application."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/2.installation/1.nuxt.md"
---
> [!NOTE]
> See: /docs/getting-started/installation/vue
> 
> Looking for the **Vue** version?

## Setup

### Add to a Nuxt project

#### Install the Pohon UI package

```bash [pnpm]
pnpm add pohon-ui unocss @vinicunca/unocss-preset
```

```bash [yarn]
yarn add pohon-ui unocss @vinicunca/unocss-preset
```

```bash [npm]
npm install pohon-ui unocss @vinicunca/unocss-preset
```

```bash [bun]
bun add pohon-ui unocss @vinicunca/unocss-preset
```

#### Add the Pohon UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui']
})
```

> [!NOTE]
> 
> There is no need to add `@nuxt/icon`, `@nuxt/fonts` or `@nuxtjs/color-mode` to your `modules` array as Pohon UI registers them automatically. You can still configure these modules in your `nuxt.config.ts` using the `icon`, `fonts` and `colorMode` keys.

#### Configure the UnoCSS preset

The Pohon module registers `@unocss/nuxt`. Create an UnoCSS configuration for the semantic utilities used by the components:

```ts [uno.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({ presets: [presetVinicunca()] })
```

#### Wrap your app with App component

```vue [app.vue]
<template>
  <PApp>
    <NuxtPage />
  </PApp>
</template>
```

> [!NOTE]
> See: /docs/components/app
> 
> The `App` component sets up global config and is required for **Toast**, **Tooltip** and **programmatic overlays**.

### Explore working examples

See the [Nuxt playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/vue) for complete Pohon UI setups.

## Options

You can customize Pohon UI by providing options in your `nuxt.config.ts`.

### `prefix`

Use the `prefix` option to change the prefix of the components.

- Default: `P`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    prefix: 'Nuxt'
  }
})
```

### `fonts`

Use the `fonts` option to enable or disable the [`@nuxt/fonts`](https://github.com/nuxt/fonts) module.

- Default: `true`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false
  }
})
```

### `colorMode`

Use the `colorMode` option to enable or disable the [`@nuxt/color-mode`](https://github.com/nuxt-modules/color-mode) module.

- Default: `true`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  }
})
```

### `theme.colors`

Use the `theme.colors` option to define the dynamic color aliases used to generate components theme.

- Default: `['primary', 'secondary', 'success', 'info', 'warning', 'error']`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'error']
    }
  }
})
```

> [!NOTE]
> 
> Each alias generates a full set of `--ui-color-*` shades and variants in the component themes that have color variants, whether your app uses it or not. Trim the list to the aliases you actually use, and keep `error` if you use forms since validation styles rely on it.

> [!TIP]
> See: /docs/getting-started/theme/design-system#color-system
> 
> Learn more about color customization and theming in the Theme section.

### `theme.transitions`

Use the `theme.transitions` option to enable or disable transitions on components.

- Default: `true`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      transitions: false
    }
  }
})
```

> [!NOTE]
> 
> This option adds the `transition-colors` class on components with hover or active states.

### `theme.unstyled`

Use the `theme.unstyled` option to remove all default theme classes from components, keeping only their structure and the classes you provide through `class`, `ui` or `app.config.ui`.

- Default: `false`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      unstyled: true
    }
  }
})
```

> [!WARNING]
> 
> This strips **structural** classes too (positioning, transitions, flex/grid), not just cosmetic ones. Layout-heavy components like `Modal`, `Drawer` or `Calendar` will need you to re-supply their layout, similar to PrimeVue's unstyled mode.

### `theme.defaultVariants`

Use the `theme.defaultVariants` option to override the default `color` and `size` variants for components.

Only defaults that are exactly `primary` or `md` are replaced, so Avatar keeps `color: 'neutral'` and Separator keeps `size: 'xs'`.

- Default: `{ color: 'primary', size: 'md' }`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      defaultVariants: {
        color: 'neutral',
        size: 'sm'
      }
    }
  }
})
```

### `prose`

Use the `prose` option to force the import of Pohon UI [`Prose` components](/pohon/typography) even if `@nuxtjs/mdc`, `@nuxt/content` or `@comark/nuxt` is not installed.

- Default: `false`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    prose: true
  }
})
```

### `mdc` `Deprecated`

Use the [`prose`](#prose) option instead.

### `content`

Use the `content` option to force the import of the Pohon UI prose and content components even if `@nuxt/content` is not installed.

- Default: `false`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    content: true
  }
})
```

### `experimental.componentDetection`

Use the `experimental.componentDetection` option to enable automatic component detection for tree-shaking. This feature scans your source code to detect which components are actually used and only generates the necessary CSS for those components (including their dependencies).

- Default: `false`
- Type: `boolean | string[]`

**Enable automatic detection:**

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    experimental: {
      componentDetection: true
    }
  }
})
```

**Include additional components for dynamic usage:**

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    experimental: {
      componentDetection: ['Modal', 'DropdownMenu', 'Popover']
    }
  }
})
```

> [!NOTE]
> 
> When providing an array of component names, automatic detection is enabled and these components (along with their dependencies) are guaranteed to be included. This is useful for dynamic components like `<component :is="..." />` that can't be statically analyzed.

## Continuous releases

Pohon UI uses [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) for continuous preview releases, providing developers with instant access to the latest features and bug fixes without waiting for official releases.

Automatic preview releases are created for all commits and PRs to the `main` branch. Use them by replacing your package version with the specific commit hash or PR number.

```diff [package.json]
{
  "dependencies": {
-   "pohon-ui": "^2.0.0-rc",
+   "pohon-ui": "https://pkg.pr.new/pohon-ui@4c96909",
  }
}
```

> [!NOTE]
> 
> **pkg.pr.new** will automatically comment on PRs with the installation URL, making it easy to test changes.


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
