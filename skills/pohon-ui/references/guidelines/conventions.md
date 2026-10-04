# Conventions

Coding patterns specific to Pohon UI.

## Auto-registered modules

Pohon UI automatically registers `@nuxt/icon`, `@nuxt/fonts`, and `@nuxtjs/color-mode`. Do **not** add them to your `modules` array. Configure them via root-level keys in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  icon: { /* @nuxt/icon options */ },
  fonts: { /* @nuxt/fonts options */ },
  colorMode: { /* @nuxtjs/color-mode options */ }
})
```

Disable any of them: `ui: { fonts: false }`, `ui: { colorMode: false }`.

## Content module integration

When using `@nuxt/content`, it **must** come after `pohon-ui` in the `modules` array — otherwise prose components won't be available:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['pohon-ui', '@nuxt/content']
})
```

Add the Markdown files to UnoCSS's filesystem sources in `uno.config.ts`:

```ts
export default defineConfig({
  content: { filesystem: ['content/**/*.{md,yml}'] }
})
```

Use `mapContentNavigation` to transform content navigation for components like `PBreadcrumb`:

```ts
import { mapContentNavigation } from 'pohon-ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'

const breadcrumb = computed(() =>
  mapContentNavigation(findPageBreadcrumb(navigation.value, page.value?.path))
)
```

## IDE setup

Recommended `.vscode/settings.json` for UnoCSS IntelliSense autocomplete with Pohon UI:

```json
{
  "files.associations": { "*.css": "unocss" },
  "editor.quickSuggestions": { "strings": "on" },
}
```

## PApp wrapper

Always wrap your app in `PApp` — it provides:
- Toast container (`useToast`)
- Tooltip provider
- Programmatic overlay context (`useOverlay`)
- i18n locale support

```vue
<PApp :locale="fr">
  <NuxtPage /> <!-- or <RouterView /> for Vue -->
</PApp>
```

## Icons

Pohon UI registers `@nuxt/icon` automatically. Format: `i-{collection}-{name}`. Prefer `lucide` collection.

```vue
<PIcon name="i-lucide-sun" class="size-5" />
<PButton icon="i-lucide-plus" label="Add" />
<PAlert icon="i-lucide-info" title="Heads up" />
```

Install collections locally for reliable SSR and best performance:

```bash
pnpm i @iconify-json/lucide
pnpm i @iconify-json/simple-icons
```

Custom local collections (Nuxt only):

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  }
})
```

### Default icon overrides

Components like `Modal`, `Select`, `Accordion`, etc. use default icons from `appConfig.ui.icons`. Override them globally:

```ts
// app.config.ts
export default defineAppConfig({
  ui: {
    icons: {
      loading: 'i-lucide-refresh-cw',
      close: 'i-lucide-x',
      check: 'i-lucide-check',
      chevronDown: 'i-lucide-chevron-down',
      chevronRight: 'i-lucide-chevron-right',
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right'
    }
  }
})
```

## Slot patterns

Most components follow consistent slot naming:

| Slot | Used by | Purpose |
|---|---|---|
| `#header` | Card, Modal, Slideover, DashboardPanel | Top section |
| `#body` | DashboardPanel | Scrollable content area |
| `#footer` | Card, Modal, Slideover, DashboardPanel | Bottom section |
| `#left` | Page, DashboardNavbar | Left sidebar or content |
| `#right` | Page, DashboardNavbar, Header | Right sidebar or content |
| `#leading` | Input, Button, Alert | Before main content (icon area) |
| `#trailing` | Input, Button | After main content (icon area) |
| `#content` | Modal, Slideover, Popover, Tooltip | Full content override |
| `#default` | Most components | Main content area |

## Items arrays

Many components accept an `items` prop. Two patterns:

**Flat array** — plain list:

```ts
const items = [
  { label: 'Edit', icon: 'i-lucide-pencil' },
  { label: 'Delete', icon: 'i-lucide-trash', color: 'error' }
]
```

**Nested array** — groups with automatic separators between them:

```ts
const items = [
  [
    { label: 'Edit', icon: 'i-lucide-pencil' },
    { label: 'Duplicate', icon: 'i-lucide-copy' }
  ],
  [
    { label: 'Delete', icon: 'i-lucide-trash', color: 'error' }
  ]
]
```

Components supporting nested arrays: `PDropdownMenu`, `PContextMenu`, `PNavigationMenu`.
`PCommandPalette` uses a `groups` prop instead, with an `items` array on each group.

## Composables

### useToast

```ts
const toast = useToast()

toast.add({
  title: 'Success',
  description: 'Item saved',
  color: 'success',
  icon: 'i-lucide-check-circle',
  duration: 5000,
  actions: [{ label: 'Undo', onClick: () => {} }]
})

toast.remove('toast-id')
toast.clear()
```

### useOverlay

Programmatic modals, slideovers, drawers — no template `v-model` needed. See [overlays recipe](../recipes/overlays.md) for full patterns.

```ts
const overlay = useOverlay()
const modal = overlay.create(MyComponent)
const instance = modal.open({ title: 'Confirm?' })
if (await instance.result) { /* confirmed */ }
```

### defineShortcuts

```ts
defineShortcuts({
  meta_k: () => openSearch(),
  escape: () => close(),
  meta_enter: {
    handler: () => submit(),
    whenever: [isFormValid]
  }
})
```

Keys: `meta` (Cmd/Ctrl), `ctrl`, `alt`, `shift`. Separator: `_`.

### extractShortcuts

Wire up keyboard shortcuts from menu items:

```ts
const items = [
  { label: 'New file', kbds: ['meta', 'n'], onSelect: () => newFile() },
  { label: 'Save', kbds: ['meta', 's'], onSelect: () => save() }
]

defineShortcuts(extractShortcuts(items))
```

### Internationalization (i18n)

Pohon UI supports 50+ locales. Set the locale on `PApp` — all components inherit it.

#### Static locale

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

#### Extend a built-in locale

`extendLocale` is auto-imported. Override specific messages or the `code` (affects date/time formatting in Calendar, InputDate, InputTime):

```ts
import { en } from 'pohon-ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: {
    commandPalette: { placeholder: 'Search a component...' }
  }
})
```

#### Custom locale from scratch

```ts
import type { Messages } from 'pohon-ui'

const locale = defineLocale<Messages>({
  name: 'My locale',
  code: 'en',
  dir: 'ltr',
  messages: {
    // all component message keys
  }
})
```

#### Dynamic locale with @nuxtjs/i18n

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['pohon-ui', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'ar', name: 'العربية' }
    ]
  }
})
```

```vue
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const { locale } = useI18n()

const lang = computed(() => locales[locale.value]?.code)
const dir = computed(() => locales[locale.value]?.dir)

useHead({
  htmlAttrs: { lang, dir }
})
</script>

<template>
  <PApp :locale="locales[locale]">
    <NuxtPage />
  </PApp>
</template>
```

Each locale has a `dir` property (`'ltr'` or `'rtl'`). `PApp` uses it to set directionality on all components. Use `useHead` to propagate `lang` and `dir` to the `<html>` element.

## Color mode

Pohon UI registers `@nuxtjs/color-mode` automatically. Built-in components for switching:
- `PColorModeButton` — single button toggle (light/dark)
- `PColorModeSwitch` — toggle switch
- `PColorModeSelect` — dropdown with system/light/dark options
- `PColorModeAvatar` — displays different avatar per mode
- `PColorModeImage` — displays different image per mode

For custom color mode UI, use `useColorMode` with `ClientOnly` to avoid hydration mismatch:

```vue
<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (v) => { colorMode.preference = v ? 'dark' : 'light' }
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

## Working examples

The [Nuxt playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/vue) contain complete Pohon UI configurations. Use them as references when starting a project.

## Responsive patterns

- Dashboard sidebar hides on mobile, shows a slideover/drawer via `PDashboardSidebar` `mode` prop
- `PHeader` body slot is the mobile menu content (shown when hamburger is tapped)
- Most components handle responsiveness automatically — avoid manual breakpoint classes unless needed
- Use `PPageAside` for sidebars that should hide below `lg` breakpoint
