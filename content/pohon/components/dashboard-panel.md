---
title: "DashboardPanel"
description: "A resizable panel to display in a dashboard."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-panel.md"
---
## Usage

The DashboardPanel component is used to display a panel. Its state (size, collapsed, etc.) will be saved based on the `storage` and `storage-key` props you provide to the [DashboardGroup](/pohon/components/dashboard-group#props) component.

Use it inside the default slot of the [DashboardGroup](/pohon/components/dashboard-group) component, you can put multiple panels next to each other:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <PDashboardPanel id="inbox-1" resizable />

  <PDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

> [!CAUTION]
> 
> It is recommended to set an `id` when using multiple panels in different pages to avoid conflicts.

> [!WARNING]
> 
> This component does not have a single root element when using the `resizable` prop, so wrap it in a container (e.g. `<div class="flex flex-1">`) if you use page transitions or require a single root for layout.

Use the `header`, `body` and `footer` slots to customize the panel or the default slot if you don't want a scrollable body with padding.

```vue [DashboardPanelExample.vue]
<template>
  <PDashboardPanel resizable>
    <template #header>
      <PDashboardNavbar title="Inbox">
        <template #leading>
          <PDashboardSidebarCollapse />
        </template>
      </PDashboardNavbar>
    </template>

    <template #body>
      <Placeholder class="h-full" />
    </template>
  </PDashboardPanel>
</template>
```

> [!NOTE]
> 
> Most of the time, you will use the [`DashboardNavbar`](/pohon/components/dashboard-navbar) component in the `header` slot.

### Resizable

Use the `resizable` prop to make the panel resizable.

```vue
<template>
  <UDashboardPanel resizable>
    <template #body>
      <Placeholder class="h-96" />
    </template></UDashboardPanel>
</template>
```

### Size

Use the `min-size`,  `max-size` and `default-size` props to customize the size of the panel.

```vue
<template>
  <UDashboardPanel resizable :min-size="22" :default-size="35" :max-size="40">
    <template #body>
      <Placeholder class="h-96" />
    </template></UDashboardPanel>
</template>
```

> [!TIP]
> See: /docs/components/dashboard-group#props
> 
> Sizes are calculated as percentages by default. You can change this using the `unit` prop on the `DashboardGroup` component.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardPanel: {
      slots: {
        root: 'relative flex flex-col min-w-0 min-h-svh lg:not-last:border-e lg:not-last:border-border shrink-0',
        body: 'flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6',
        handle: ''
      },
      variants: {
        size: {
          true: {
            root: 'w-full lg:w-(--width)'
          },
          false: {
            root: 'flex-1'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardPanel.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-panel.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardPanel.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardPanel source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardPanel.vue)

### Props

- **ui** — `{ root?: SlotClass; body?: SlotClass; handle?: SlotClass; } | undefined; optional`
- **id** — `string | undefined; optional`: The id of the panel.
- **minSize** — `number | undefined; optional; default: 15`: The minimum size of the panel.
- **maxSize** — `number | undefined; optional`: The maximum size of the panel.
- **defaultSize** — `number | undefined; optional`: The default size of the panel.
- **resizable** — `boolean | undefined; optional; default: false`: Whether to allow the user to resize the panel.

### Slots

- **default** — `{} | undefined`
- **header** — `{} | undefined`
- **body** — `{} | undefined`
- **footer** — `{} | undefined`
- **resize-handle** — `{ onMouseDown: (e: MouseEvent) => void; onTouchStart: (e: TouchEvent) => void; onDoubleClick: (e: MouseEvent) => void; }`

### Events

No events are declared.
