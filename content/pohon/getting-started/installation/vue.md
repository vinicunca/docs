---
title: "Installation"
description: "Learn how to install and configure Pohon UI in your Vue application, compatible with both plain Vite and Inertia."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/2.installation/2.vue.md"
---
> [!NOTE]
> See: /docs/getting-started/installation/nuxt
> 
> Looking for the **Nuxt** version?

## Setup

### Add to a Vue project

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

#### Add the Pohon UI Vite plugin in your `vite.config.ts`

```ts [vite.config.ts (Vite)]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui()
  ]
})
```

```ts [vite.config.ts (Laravel Inertia)]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    UnoCSS(),
    laravel({
      input: ['resources/js/app.ts'],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    ui({
      router: 'inertia'
    })
  ]
})
```

```ts [vite.config.ts (AdonisJS Inertia)]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'
import adonisjs from '@adonisjs/vite/client'
import inertia from '@adonisjs/inertia/client'

export default defineConfig({
  plugins: [
    UnoCSS(),
    adonisjs({
      entrypoints: ['inertia/app/app.ts'],
      reload: ['resources/views/**/*.edge']
    }),
    inertia(),
    vue(),
    ui({
      router: 'inertia'
    })
  ]
})
```

> [!TIP]
> 
> Pohon UI registers `unplugin-auto-import` and `unplugin-vue-components`, which will generate `auto-imports.d.ts` and `components.d.ts` type declaration files. You will likely want to gitignore these, and add them to your `tsconfig`.
> 
> ```json [tsconfig.app.json]
> {
>   "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "auto-imports.d.ts", "components.d.ts"]
> }
> ```
> 
> ```bash [.gitignore]
> # Auto-generated type declarations
> auto-imports.d.ts
> components.d.ts
> ```

> [!WARNING]
> 
> These declaration files are only written when Vite runs. The default `create-vue` `build` script runs `vue-tsc` in parallel with `vite build` (`run-p type-check "build-only {@}"`), so on a clean checkout type-checking can start before the files exist and fail with errors like `Cannot find name 'useToast'`. Run the type-check after the build instead so the declarations are generated first.
> 
> ```json [package.json]
> {
>   "scripts": {
>     "build": "run-s build-only type-check"
>   }
> }
> ```

> [!TIP]
> 
> Internally, Pohon UI relies on custom aliases to resolve the theme types. If you're using TypeScript, add these aliases to your `tsconfig` files to enable auto-completion in your `vite.config.ts`.
> 
> ```json [tsconfig.node.json]
> {
>   "compilerOptions": {
>     "paths": {
>       "#build/ui": [
>         "./node_modules/.pohon-ui/ui"
>       ]
>     }
>   }
> }
> ```
> 
> ```json [tsconfig.app.json]
> {
>   "compilerOptions": {
>     "paths": {
>       "#build/ui/*": [
>         "./node_modules/.pohon-ui/ui/*"
>       ]
>     }
>   }
> }
> ```

#### Use the Pohon UI Vue plugin

```ts [src/main.ts (Vite)]
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from 'pohon-ui/vue-plugin'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  routes: [],
  history: createWebHistory()
})

app.use(router)
app.use(ui)

app.mount('#app')
```

```ts [resources/js/app.ts (Laravel Inertia)]
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import ui from 'pohon-ui/vue-plugin'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from 'vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel x Pohon UI'

createInertiaApp({
  title: title => (title ? `${title} - ${appName}` : appName),
  resolve: name =>
    resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob<DefineComponent>('./pages/**/*.vue')
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ui)
      .mount(el)
  }
})
```

```ts [inertia/app/app.ts (AdonisJS Inertia)]
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import ui from 'pohon-ui/vue-plugin'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createApp, h } from 'vue'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS x Pohon UI'

createInertiaApp({
  title: title => (title ? `${title} - ${appName}` : appName),
  resolve: name =>
    resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ui)
      .mount(el)
  }
})
```

#### Configure UnoCSS

```ts [uno.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({ presets: [presetVinicunca()] })
```

Import `virtual:uno.css` in your Vue or Inertia entrypoint before mounting the application:

```ts [src/main.ts]
import 'virtual:uno.css'
```

#### Wrap your app with App component

```vue [src/App.vue (Vite)]
<template>
  <PApp>
    <RouterView />
  </PApp>
</template>
```

```vue [resources/js/pages/index.vue (Laravel Inertia)]
<template>
  <PApp>
    <!-- Your content goes here -->
  </PApp>
</template>
```

```vue [inertia/pages/index.vue (AdonisJS Inertia)]
<template>
  <PApp>
    <!-- Your content goes here -->
  </PApp>
</template>
```

> [!NOTE]
> See: /docs/components/app
> 
> The `App` component sets up global config and is required for **Toast**, **Tooltip** and **programmatic overlays**.

#### Add the `isolate` class to your root container

```html [index.html (Vite)]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pohon UI</title>
  </head>
  <body>
    <div id="app" class="isolate"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

```blade [resources/views/app.blade.php (Laravel Inertia)]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @inertiaHead
    @vite('resources/js/app.ts')
  </head>
  <body>
    <div class="isolate">
        @inertia
    </div>
  </body>
</html>
```

```edge [resources/views/inertia_layout.edge (AdonisJS Inertia)]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @inertiaHead()
    @vite(['inertia/app/app.ts', `inertia/pages/${page.component}.vue`])
  </head>
  <body>
    @inertia({ class: 'isolate' })
  </body>
</html>
```

> [!NOTE]
> 
> This ensures styles are scoped to your app and prevents issues with overlays and stacking contexts.

### Explore working examples

See the [Nuxt playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/vue) for complete Pohon UI setups.

## Options

You can customize Pohon UI by providing options in your `vite.config.ts`.

### `prefix`

Use the `prefix` option to change the prefix of the components.

- Default: `P`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      prefix: 'Nuxt'
    })
  ]
})
```

### `ui`

Use the `ui` option to provide configuration for Pohon UI. This is the Vue equivalent of the `ui` key in Nuxt's `app.config.ts`.

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate'
        }
      }
    })
  ]
})
```

### `dts`

Use the `dts` option to enable or disable the generation of declaration files for auto-imported components and composables.

- Default: `true`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      dts: false
    })
  ]
})
```

### `icon`

Use the `icon` option to set default props for the [Icon](/pohon/components/icon) component (`size`, `mode`, `customize`) and to configure build-time icon bundling through `clientBundle`. Bundling of Pohon UI's own icons is enabled by default when their collection is installed. Set `clientBundle: false` to opt out.

- Default: `{}`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      icon: {
        mode: 'svg',
        clientBundle: {
          scan: true
        }
      }
    })
  ]
})
```

> [!NOTE]
> See: /docs/getting-started/integrations/icons/vue#collections
> 
> Learn more about icon collections and client bundling in the **Icons** documentation.

### `colorMode`

Use the `colorMode` option to enable or disable the color mode integration from `@vueuse/core`.

- Default: `true`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      colorMode: false
    })
  ]
})
```

### `theme.colors`

Use the `theme.colors` option to define the dynamic color aliases used to generate components theme.

- Default: `['primary', 'secondary', 'success', 'info', 'warning', 'error']`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      theme: {
        colors: ['primary', 'error']
      }
    })
  ]
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

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      theme: {
        transitions: false
      }
    })
  ]
})
```

> [!NOTE]
> 
> This option adds the `transition-colors` class on components with hover or active states.

### `theme.unstyled`

Use the `theme.unstyled` option to remove all default theme classes from components, keeping only their structure and the classes you provide through `class`, `ui` or `app.config.ui`.

- Default: `false`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      theme: {
        unstyled: true
      }
    })
  ]
})
```

> [!WARNING]
> 
> This strips **structural** classes too (positioning, transitions, flex/grid), not just cosmetic ones. Layout-heavy components like `Modal`, `Drawer` or `Calendar` will need you to re-supply their layout, similar to PrimeVue's unstyled mode.

### `theme.defaultVariants`

Use the `theme.defaultVariants` option to override the default `color` and `size` variants for components.

Only defaults that are exactly `primary` or `md` are replaced, so Avatar keeps `color: 'neutral'` and Separator keeps `size: 'xs'`.

- Default: `{ color: 'primary', size: 'md' }`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      theme: {
        defaultVariants: {
          color: 'neutral',
          size: 'sm'
        }
      }
    })
  ]
})
```

### `prose`

Use the `prose` option to enable Pohon UI [`Prose` components](/pohon/typography) and their theme.

- Default: `false`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      prose: true
    })
  ]
})
```

### `autoImport`

Use the `autoImport` option to disable composable auto-imports or to customize [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) options.

- Default: `{}`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      autoImport: false
    })
  ]
})
```

> [!NOTE]
> 
> When disabled, you can still import composables explicitly from `pohon-ui/composables`.

### `components`

Use the `components` option to disable component auto-imports or to customize [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) options.

- Default: `{}`

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      components: false
    })
  ]
})
```

> [!NOTE]
> 
> When disabled, you can still import components explicitly, e.g. `import Button from 'pohon-ui/components/Button.vue'` or `import ProseCode from 'pohon-ui/components/prose/Code.vue'`.

### `router`

Use the `router` option to configure routing integration. This is useful for applications that don't use `vue-router`, such as Electron apps, MPAs, or frameworks like [Inertia.js](https://inertiajs.com/) or [Hybridly](https://hybridly.dev/).

- Default: `true`

| Value | Description |
| --- | --- |
| `true` | Uses `vue-router` for navigation with `RouterLink` component. |
| `false` | Disables routing integration, links render as plain `<a>` tags. |
| `'inertia'` | Uses Inertia.js for navigation with its `Link` component. |

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      router: false
    })
  ]
})
```

> [!TIP]
> 
> You can provide custom navigation logic for frameworks like **Hybridly** by setting `router: false` in the Vite config and passing a function when installing the Vue plugin:
> 
> ```ts [src/main.ts]
> import ui from 'pohon-ui/vue-plugin'
> import { router } from 'hybridly'
> 
> app.use(ui, {
>   router: (event, { href, external }) => {
>     if (external) {
>       return
>     }
> 
>     event.preventDefault()
> 
>     router.navigate({ url: href })
>   }
> })
> ```

> [!NOTE]
> 
> When set to `false` or `'inertia'`, `vue-router` is not required as a dependency.

### `scanPackages`

Use the `scanPackages` option to specify additional npm packages that should be scanned for components using Pohon UI. This is useful when you have a shared component library that uses Pohon UI components internally.

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      scanPackages: ['@my-org/ui-components']
    })
  ]
})
```

> [!NOTE]
> 
> By default, only `pohon-ui` is scanned. Use this option when your external packages contain Vue components that use Pohon UI.

### `root`

Use the `root` option to override the directory where Pohon UI generates its `.pohon-ui` directory (containing the theme templates). By default it uses Vite's `root`, but in setups like [`electron-vite`](https://electron-vite.org/) the renderer's `root` points to a sub-directory (e.g. `src/renderer`), so the templates land in `src/renderer/node_modules/.pohon-ui` where UnoCSS doesn't scan them, causing theme classes like `bg-background`, `ring-ring` and `divide-border` to be missing.

```ts [electron.vite.config.ts]
import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  renderer: {
    root: 'src/renderer',
    plugins: [
      vue(),
      ui({
        root: __dirname
      })
    ]
  }
})
```

> [!NOTE]
> 
> Point `root` at your project root so the generated `.pohon-ui` directory ends up in a `node_modules` that UnoCSS scans.

### `experimental.componentDetection`

Use the `experimental.componentDetection` option to enable automatic component detection for tree-shaking. This feature scans your source code to detect which components are actually used and only generates the necessary CSS for those components (including their dependencies). Without it, the Vite plugin generates the theme CSS for every component. Detection covers the Vite root, the packages listed in [`scanPackages`](#scanpackages) and any `dirs` from the [`components`](#components) option located outside the root.

- Default: `false`
- Type: `boolean | string[]`

**Enable automatic detection:**

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      experimental: {
        componentDetection: true
      }
    })
  ]
})
```

**Include additional components for dynamic usage:**

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from 'pohon-ui/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    ui({
      experimental: {
        componentDetection: ['Modal', 'DropdownMenu', 'Popover']
      }
    })
  ]
})
```

> [!NOTE]
> 
> When providing an array of component names, automatic detection is enabled and these components (along with their dependencies) are guaranteed to be included. This is useful for dynamic components like `<component :is="..." />` that can't be statically analyzed.

> [!WARNING]
> 
> Newly used components are picked up on the next dev-server start. If you add a component and its styles are missing, restart the dev server.

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
