# Conventions

Coding patterns specific to Pohon UI. Examples are Nuxt unless marked; in plain Vue the same components and composables are auto-imported by the Vite plugin, and `NuxtPage` becomes `RouterView`.

## Nuxt modules Pohon UI registers

The `pohon-ui` module registers `@unocss/nuxt`, `@nuxt/icon`, `@nuxt/fonts`, and `@nuxtjs/color-mode`. Keep them out of `modules` and configure them with root-level keys:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  icon: { /* @nuxt/icon options */ },
  fonts: { /* @nuxt/fonts options */ },
  colorMode: { /* @nuxtjs/color-mode options */ },
  ui: { fonts: false } // turn off @nuxt/fonts; `colorMode: false` turns off color mode
})
```

## Content module integration

List `@nuxt/content` **after** `pohon-ui`, or the prose and content components are not registered:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['pohon-ui', '@nuxt/content']
})
```

Add the Markdown files to UnoCSS's filesystem sources so classes used in content are generated:

```ts
// uno.config.ts
export default defineConfig({
  presets: [presetVinicunca()],
  content: { filesystem: ['content/**/*.{md,yml}'] }
})
```

Use `mapContentNavigation` to turn content navigation into component items, for example for `PBreadcrumb`:

```ts
import { findPageBreadcrumb } from '@nuxt/content/utils'
import { mapContentNavigation } from 'pohon-ui/utils/content'

const breadcrumb = computed(() =>
  mapContentNavigation(findPageBreadcrumb(navigation.value, page.value?.path, { indexAsChild: true }), { deep: 0 })
)
```

Details: [Content integration](https://vinicunca.dev/raw/pohon/getting-started/integrations/content.md).

## PApp wrapper

Wrap the whole app in `PApp` once. It provides:

- the toast container (`useToast`), configured with `:toaster="{ position, duration, max, expand }"`
- the tooltip provider (`:tooltip="{ delayDuration }"`)
- the programmatic overlay host (`useOverlay`)
- locale and text direction (`:locale`)

```vue
<PApp :locale="fr" :toaster="{ position: 'top-right' }">
  <NuxtPage />
</PApp>
```

## Icons

Write icons as `i-{collection}-{name}`, preferring `lucide`:

```vue
<PIcon name="i-lucide-sun" class="size-5" />
<PButton icon="i-lucide-plus" label="Add" />
<PAlert icon="i-lucide-info" title="Heads up" />
```

Install each collection you use so icons render during SSR and offline:

```bash
pnpm add -D @iconify-json/lucide @iconify-json/simple-icons
```

- **Nuxt** uses `@nuxt/icon`. Add local SVG folders with `icon.customCollections: [{ prefix: 'custom', dir: './app/assets/icons' }]`, and bundle icons you reference dynamically with `icon.clientBundle.icons` or `icon.clientBundle.scan: true`.
- **Vue** uses `@iconify/vue`, which cannot split a dashed collection name: write `i-simple-icons:github` (or `simple-icons:github`), not `i-simple-icons-github`. Bundle extra icons with `ui({ icon: { clientBundle: { icons: ['lucide:heart'] } } })`.

Find icon names at [icones.js.org](https://icones.js.org) or with the MCP `search-icons` tool. Docs: [Nuxt icons](https://vinicunca.dev/raw/pohon/getting-started/integrations/icons/nuxt.md), [Vue icons](https://vinicunca.dev/raw/pohon/getting-started/integrations/icons/vue.md).

### Default icon overrides

Components read their built-in icons from `ui.icons`. Override them globally (`app.config.ts` in Nuxt, `ui({ ui: { icons } })` in Vue):

```ts
// app.config.ts
export default defineAppConfig({
  ui: {
    icons: {
      loading: 'i-lucide-refresh-cw',
      close: 'i-lucide-x',
      check: 'i-lucide-check',
      chevronDown: 'i-lucide-chevron-down',
      search: 'i-lucide-search',
      dark: 'i-lucide-moon',
      light: 'i-lucide-sun'
    }
  }
})
```

Other keys include `arrowLeft`, `arrowRight`, `chevronLeft`, `chevronRight`, `copy`, `copyCheck`, `ellipsis`, `external`, `eye`, `eyeOff`, `info`, `success`, `warning`, `error`, `menu`, `plus`, `minus`, `upload`, `panelOpen`, `panelClose`, `system`.

## Slot patterns

Most components follow the same slot names. Check the raw component page for the full list and slot props.

| Slot | Used by | Purpose |
|---|---|---|
| `#header` | Card, Modal, Slideover, Drawer, DashboardPanel | Top section |
| `#body` | Modal, Slideover, Drawer, DashboardPanel, Header (mobile menu) | Main content area |
| `#footer` | Card, Modal, Slideover, Drawer, DashboardPanel | Bottom section; Modal and Slideover pass `{ close }` |
| `#default` | Card, most components | Main content (Card has no `#body` slot) |
| `#left` / `#right` | Page, Header, Footer, DashboardNavbar, DashboardToolbar | Side content |
| `#leading` / `#trailing` | Input, Button (Alert has `#leading` only) | Icon areas |
| `#content` | Modal, Slideover, Drawer, Popover, Tooltip | Replaces the whole panel |
| `#<name>-cell`, `#<name>-header` | Table | Column cell / header |
| `#<slot>` from `item.slot` | Tabs, Accordion, NavigationMenu, DropdownMenu, CommandPalette | Per-item content |

## Items arrays

Menus and lists take an `items` prop.

**Flat array**:

```ts
const items = [
  { label: 'Edit', icon: 'i-lucide-pencil', onSelect: () => edit() },
  { label: 'Delete', icon: 'i-lucide-trash', color: 'error', onSelect: () => remove() }
]
```

**Array of arrays**, which renders a separator between groups:

```ts
const items = [
  [{ label: 'Edit', icon: 'i-lucide-pencil' }, { label: 'Duplicate', icon: 'i-lucide-copy' }],
  [{ label: 'Delete', icon: 'i-lucide-trash', color: 'error' }]
]
```

`PDropdownMenu`, `PContextMenu`, `PNavigationMenu`, `PSelect`, `PSelectMenu`, and the editor menus accept both. `PCommandPalette` takes `groups` instead (`[{ id, label, items }]`). Items accept `to` for links, `onSelect` for actions, `kbds` for displayed shortcuts, `slot` for a custom item slot, and `type: 'label' | 'separator'` in menus.

## Composables

### useToast

```ts
const toast = useToast()

const { id } = toast.add({
  title: 'Saved',
  description: 'Your changes are live.',
  color: 'success',
  icon: 'i-lucide-circle-check',
  duration: 5000, // 0 keeps it open
  actions: [{ label: 'Undo', onClick: () => undo() }]
})

toast.update(id, { title: 'Updated' })
toast.remove(id)
toast.clear()
```

### useOverlay

Programmatic modals, slideovers, and drawers without template `v-model`. See the [overlays recipe](../recipes/overlays.md).

```ts
const overlay = useOverlay()
const modal = overlay.create(ConfirmModal, { props: { title: 'Delete?' } })

const confirmed = await modal.open() // resolves with the value the component emits on `close`
```

### defineShortcuts

```ts
defineShortcuts({
  meta_k: () => openSearch(), // Cmd+K on macOS, Ctrl+K elsewhere
  escape: () => close(),
  'g-d': () => navigateTo('/dashboard'), // chained: press g, then d
  enter: {
    usingInput: 'search', // fires only while the input named "search" is focused (true = any input)
    handler: () => submit()
  }
})
```

Combine modifiers with `_` (`ctrl_shift_f`); `meta` maps to Ctrl outside macOS. A shortcut doesn't fire while an input is focused unless it sets `usingInput`. Pass a `computed` config to turn shortcuts on or off reactively.

### extractShortcuts

Register the `kbds` of menu items as shortcuts:

```ts
const items = [
  { label: 'New file', kbds: ['meta', 'n'], onSelect: () => newFile() },
  { label: 'Save', kbds: ['meta', 's'], onSelect: () => save() }
]

defineShortcuts(extractShortcuts(items))
```

### Internationalization (i18n)

Pohon UI ships 60+ locales. Set one on `PApp` and every component inherits it.

```vue
<script setup lang="ts">
import { fr } from 'pohon-ui/locale'
</script>

<template>
  <PApp :locale="fr">
    <NuxtPage />
  </PApp>
</template>
```

Extend a built-in locale (`extendLocale` is auto-imported). The `code` sets date and time formatting in Calendar, InputDate, and InputTime:

```ts
import { en } from 'pohon-ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: { commandPalette: { placeholder: 'Search a component...' } }
})
```

Create a locale from scratch with `defineLocale<Messages>({ name, code, dir, messages })` (`import type { Messages } from 'pohon-ui'`).

With `@nuxtjs/i18n` (or `vue-i18n`), map the active locale and set `lang`/`dir` on `<html>`:

```vue
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locales[locale.value].code),
    dir: computed(() => locales[locale.value].dir)
  }
})
</script>

<template>
  <PApp :locale="locales[locale]">
    <NuxtPage />
  </PApp>
</template>
```

`PLocaleSelect` renders a locale picker: `<PLocaleSelect v-model="locale" :locales="Object.values(locales)" />`. Docs: [i18n Nuxt](https://vinicunca.dev/raw/pohon/getting-started/integrations/i18n/nuxt.md), [i18n Vue](https://vinicunca.dev/raw/pohon/getting-started/integrations/i18n/vue.md).

## Color mode

Nuxt uses `@nuxtjs/color-mode`; Vue uses VueUse's `useDark`/`useColorMode`, registered by the Vue plugin. Prefer the built-in switchers: `PColorModeButton`, `PColorModeSwitch`, `PColorModeSelect`, and `PColorModeAvatar` / `PColorModeImage` for per-mode images.

For a custom control in Nuxt, read `useColorMode()` inside `ClientOnly` to avoid a hydration mismatch:

```vue
<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (dark) => { colorMode.preference = dark ? 'dark' : 'light' }
})
</script>

<template>
  <ClientOnly>
    <PSwitch v-model="isDark" />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
```

In plain Vue, `import { useColorMode } from '@vueuse/core'` and set `colorMode.value = 'dark'` instead of `preference`.

## Editor tooling

Install the UnoCSS VS Code extension (`antfu.unocss`) for class autocomplete and hover previews. It reads your `uno.config.ts`, so semantic utilities such as `color-text-muted` complete as well.

## Responsive patterns

- `PDashboardSidebar` turns into a modal, slideover, or drawer below `lg`, chosen with its `mode` prop.
- `PHeader` renders its `#body` slot as the mobile menu when the toggle is tapped; its own `mode` prop picks modal, slideover, or drawer.
- `PPageAside` is hidden below `lg`.
- Most components are already responsive; add breakpoint classes only for your own layout.

## Working examples

The [Nuxt playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/vue) contain full Pohon UI configurations and a page per component.
