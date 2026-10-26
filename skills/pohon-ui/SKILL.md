---
name: pohon-ui
description: Build Vue and Nuxt interfaces with Pohon UI (the `pohon-ui` package, `P`-prefixed components themed with UnoCSS). Use when installing or configuring pohon-ui in Nuxt, Vue/Vite, Laravel or AdonisJS (Inertia); choosing or wiring a `P*` component or composable (`useToast`, `useOverlay`, `defineShortcuts`); theming colors, CSS variables, or the `ui` prop; or building forms, tables, overlays, and dashboard, docs, landing, chat, or editor layouts.
---

# Pohon UI

Vue component library (125+ components, current release `pohon-ui@2.0.6`) built on [Akar](https://vinicunca.dev/raw/akar/overview.md) primitives, [UnoCSS](https://unocss.dev/) with `@vinicunca/unocss-preset`, and [UnoCSS Variants](https://vinicunca.dev/raw/unocss-variants/getting-started.md). Runs in Nuxt (module) and plain Vue through a Vite plugin, which also covers Laravel and AdonisJS with Inertia.

This skill tells you **which component to use and how to compose it**. For the exact props, slots, emits, and theme of a component, look it up (next section) before you write code.

## Look up APIs

Every docs page is served as Markdown with props, slots, emits, and theme tables expanded. Fetch these instead of guessing a prop name:

| What | URL |
|---|---|
| Component | `https://vinicunca.dev/raw/pohon/components/<kebab-name>.md` (e.g. `select-menu.md`) |
| Composable | `https://vinicunca.dev/raw/pohon/composables/<kebab-name>.md` (e.g. `use-overlay.md`) |
| Prose (Markdown) components | `https://vinicunca.dev/raw/pohon/typography.md` |
| Page index for all packages | `https://vinicunca.dev/llms.txt` |

In a project, the generated theme files show every slot, variant, and default class of a component:

- Nuxt: `.nuxt/ui/<component>.ts` (prose: `.nuxt/ui/prose/<name>.ts`, content: `.nuxt/ui/content/<name>.ts`)
- Vue: `node_modules/.pohon-ui/ui/<component>.ts`

### MCP server

The docs describe an HTTP MCP server at `https://vinicunca.dev/mcp` with the tools `search-components`, `search-composables`, `search-icons`, `get-component` (takes `sections`), `get-component-metadata`, `search-documentation`, `get-documentation-page`, `list-examples`, and `get-example`. If the user wants it configured:

```bash
claude mcp add --transport http pohon-ui https://vinicunca.dev/mcp
```

```json
// .cursor/mcp.json
{ "mcpServers": { "pohon-ui": { "type": "http", "url": "https://vinicunca.dev/mcp" } } }
```

Other clients: [MCP setup](https://vinicunca.dev/raw/pohon/getting-started/ai/mcp.md). If the server doesn't respond, use the raw Markdown URLs above.

## Core rules

1. **Wrap the app in `PApp`.** Toasts, tooltips, and `useOverlay` need it. It also takes `locale`, `toaster`, `tooltip`, and `portal` props.
2. **Use semantic color utilities.** Write `color-text-muted`, `bg-background-elevated`, `border-border`, and `text-primary`, not palette classes like `text-gray-500`. Neutral text colors use the `color-text*` form (`color-text`, `color-text-muted`, `color-text-highlighted`).
3. **Set component colors through the `color` prop:** `primary`, `secondary`, `success`, `info`, `warning`, `error`, `neutral`.
4. **Override styles in this order (highest wins):** `ui` / `class` prop → `PTheme` → global config (`app.config.ts` in Nuxt, `ui({ ui })` in `vite.config.ts` for Vue) → theme defaults.
5. **Replace conflicting classes with the function form.** Pohon UI joins your classes onto the defaults without removing conflicts, so `class="font-bold"` next to a default `font-medium` can lose, depending on stylesheet order. Use `:ui="{ base: (defaults) => '...' }"` to replace a slot's classes, or the `!` important prefix when one class must win.
6. **Write icons as `i-{collection}-{name}`** (`lucide` is the default set). In plain Vue, put a colon after a collection whose name contains a dash: `i-simple-icons:github`. Install collections locally with `@iconify-json/<collection>`.
7. **Use the `P` prefix** (`PButton`, `PModal`). Projects can change it with the `prefix` option, so check the config if `P*` tags don't resolve.

## Load references for the task

Read the matching files **before writing code**, and skip the others.

| Task | References |
|---|---|
| Landing page, blog, changelog, pricing | [design-system](references/guidelines/design-system.md), [conventions](references/guidelines/conventions.md), [landing](references/layouts/landing.md) |
| Dashboard / admin UI | conventions, [component-selection](references/guidelines/component-selection.md), [dashboard](references/layouts/dashboard.md) |
| Settings page or any form | conventions, [forms](references/guidelines/forms.md) |
| Login / signup / password reset | conventions, forms, [auth](references/recipes/auth.md) |
| Data table | conventions, component-selection, [data-tables](references/recipes/data-tables.md) |
| Theme, brand colors, fonts, radius | design-system |
| AI chat | conventions, [chat](references/layouts/chat.md) |
| Modal, slideover, drawer, command palette | conventions, component-selection, [overlays](references/recipes/overlays.md) |
| Header, sidebar, breadcrumbs, tabs | conventions, component-selection, [navigation](references/recipes/navigation.md) |
| Documentation site (Nuxt Content) | conventions, [docs](references/layouts/docs.md) |
| Render Markdown | component-selection, [components](references/components.md) |
| Rich text editor | conventions, [editor](references/layouts/editor.md) |
| Find a component or composable name | [components](references/components.md) |
| Other UI work | conventions, component-selection |

## Installation

All setups install the same packages and UnoCSS preset:

```bash
pnpm add pohon-ui unocss @vinicunca/unocss-preset
```

```ts
// uno.config.ts
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({ presets: [presetVinicunca()] });
```

### Nuxt (`>=4.1`)

```ts
// nuxt.config.ts
export default defineNuxtConfig({ modules: ['pohon-ui'] });
```

```vue
<!-- app.vue -->
<template>
  <PApp>
    <NuxtPage />
  </PApp>
</template>
```

The module registers `@unocss/nuxt`, `@nuxt/icon`, `@nuxt/fonts`, and `@nuxtjs/color-mode`. Leave them out of `modules`, and configure them with the root `icon`, `fonts`, and `colorMode` keys. Module options go under the `ui` key: `prefix`, `fonts`, `colorMode`, `theme.colors`, `theme.transitions`, `theme.unstyled`, `theme.defaultVariants`, `prose`, `content`. See [Nuxt installation](https://vinicunca.dev/raw/pohon/getting-started/installation/nuxt.md).

### Vue (Vite)

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';
import ui from 'pohon-ui/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [UnoCSS(), vue(), ui()]
});
```

```ts
// src/main.ts
import ui from 'pohon-ui/vue-plugin';
import 'virtual:uno.css';

app.use(router); // vue-router, unless the plugin has `router: false` or `'inertia'`
app.use(ui);
```

Then wrap `<RouterView />` in `<PApp>`, and add `class="isolate"` to the mount element (`<div id="app" class="isolate">`).

- The plugin bundles `unplugin-auto-import` and `unplugin-vue-components`. Don't register them a second time (the build throws); configure them through the `autoImport` and `components` options. Add the generated `auto-imports.d.ts` and `components.d.ts` to the `tsconfig` `include`.
- Theme and app config go in `ui({ ui: { colors: { primary: 'green' }, button: { ... } } })`, which takes the place of Nuxt's `app.config.ts`.
- Other options: `prefix`, `dts`, `icon`, `colorMode`, `theme.*`, `prose`, `router`, `scanPackages`, `root`. See [Vue installation](https://vinicunca.dev/raw/pohon/getting-started/installation/vue.md).

### Laravel or AdonisJS (Inertia)

Use the Vue setup with `ui({ router: 'inertia' })`, and call `.use(ui)` in the `createInertiaApp` `setup` callback:

- Laravel: add `laravel({ input: ['resources/js/app.ts'], refresh: true })` before `vue()`, and pass `vue({ template: { transformAssetUrls: { base: null, includeAbsolute: false } } })`. Wrap `@inertia` in `<div class="isolate">` in `resources/views/app.blade.php`.
- AdonisJS: add `adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] })` and `inertia()` before `vue()`. Use `@inertia({ class: 'isolate' })` in `inertia_layout.edge`.
- Wrap each page's content in `<PApp>`. For SSR, render the head with `@unhead/vue/server` so the color variables reach the HTML ([SSR guide](https://vinicunca.dev/raw/pohon/getting-started/integrations/ssr.md)).

Complete working configs: [Nuxt playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/vue).
