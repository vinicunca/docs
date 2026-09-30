---
title: "DashboardToolbar"
description: "A toolbar to display under the navbar in a dashboard."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-toolbar.md"
---
## Usage

The DashboardToolbar component is used to display a toolbar under the [DashboardNavbar](/pohon/components/dashboard-navbar) component.

Use it inside the `header` slot of the [DashboardPanel](/pohon/components/dashboard-panel) component:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar />

      <PDashboardToolbar />
    </template>
  </PDashboardPanel>
</template>
```

Use the `left`, `default` and `right` slots to customize the toolbar.

```vue [DashboardToolbarExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items: NavigationMenuItem[][] = [[{
  label: 'General',
  icon: 'i-lucide-user',
  active: true
}, {
  label: 'Members',
  icon: 'i-lucide-users'
}, {
  label: 'Notifications',
  icon: 'i-lucide-bell'
}], [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: 'https://pohon.vinicunca.dev/docs',
  target: '_blank'
}, {
  label: 'Help & Feedback',
  icon: 'i-lucide-help-circle',
  to: 'https://github.com/vinicunca/pohon/issues',
  target: '_blank'
}]]
</script>

<template>
  <PDashboardToolbar>
    <PNavigationMenu :items="items" highlight class="flex-1" />
  </PDashboardToolbar>
</template>
```

> [!NOTE]
> 
> In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render some links.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardToolbar: {
      slots: {
        root: 'shrink-0 flex items-center justify-between border-b border-border px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]',
        left: 'flex items-center gap-1.5',
        right: 'flex items-center gap-1.5'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardToolbar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-toolbar.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardToolbar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardToolbar source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardToolbar.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; left?: SlotClass; right?: SlotClass; } | undefined; optional`

### Slots

- **default** — `{} | undefined`
- **left** — `{} | undefined`
- **right** — `{} | undefined`

### Events

No events are declared.
