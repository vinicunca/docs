---
title: "DashboardNavbar"
description: "A responsive navbar to display in a dashboard."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-navbar.md"
---
## Usage

The DashboardNavbar component is a responsive navigation bar that integrates with the [DashboardSidebar](/pohon/components/dashboard-sidebar) component. It includes a mobile toggle button to enable responsive navigation in dashboard layouts.

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
    </template>
  </PDashboardPanel>
</template>
```

Use the `left`, `default` and `right` slots to customize the navbar.

```vue [DashboardNavbarExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items: TabsItem[] = [{
  label: 'All',
  value: 'all'
}, {
  label: 'Unread',
  value: 'unread'
}]
</script>

<template>
  <PDashboardNavbar title="Inbox">
    <template #leading>
      <PDashboardSidebarCollapse />
    </template>

    <template #trailing>
      <PBadge label="4" variant="subtle" />
    </template>

    <template #right>
      <PTabs
        :items="items"
        default-value="all"
        size="sm"
        class="w-40"
        :content="false"
      />
    </template>
  </PDashboardNavbar>
</template>
```

> [!NOTE]
> 
> In this example, we use the [Tabs](/pohon/components/tabs) component in the right slot to display some tabs.

### Title

Use the `title` prop to set the title of the navbar.

```vue
<template>
  <UDashboardNavbar title="Dashboard" />
</template>
```

### Icon

Use the `icon` prop to set the icon of the navbar.

```vue
<template>
  <UDashboardNavbar title="Dashboard" icon="i-lucide-house" />
</template>
```

### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile that opens the [DashboardSidebar](/pohon/components/dashboard-sidebar) component.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue [DashboardNavbarToggleExample.vue]
<template>
  <PDashboardNavbar
    title="Dashboard"
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  />
</template>
```

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

```vue [DashboardNavbarToggleSideExample.vue]
<template>
  <PDashboardNavbar
    title="Dashboard"
    toggle-side="right"
  />
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardNavbar: {
      slots: {
        root: 'h-(--ui-header-height) shrink-0 flex items-center justify-between border-b border-border px-4 sm:px-6 gap-1.5',
        left: 'flex items-center gap-1.5 min-w-0',
        icon: 'shrink-0 size-5 self-center me-1.5',
        title: 'flex items-center gap-1.5 font-600 color-text-highlighted truncate',
        center: 'hidden lg:flex',
        right: 'flex items-center shrink-0 gap-1.5',
        toggle: ''
      },
      variants: {
        toggleSide: {
          left: {
            toggle: ''
          },
          right: {
            toggle: ''
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardNavbar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-navbar.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardNavbar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardNavbar source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardNavbar.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **icon** — `any; optional`: The icon displayed next to the title.
- **title** — `string | undefined; optional`
- **toggle** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Customize the toggle button to open the sidebar. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **toggleSide** — `"left" | "right" | undefined; optional; default: "left"`: The side to render the toggle button on.
- **ui** — `{ root?: SlotClass; left?: SlotClass; icon?: SlotClass; title?: SlotClass; center?: SlotClass; right?: SlotClass; toggle?: SlotClass; } | undefined; optional`

### Slots

- **title** — `{} | undefined`
- **leading** — `DashboardNavbarSlotsProps & { ui: { root: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; toggle: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `DashboardNavbarSlotsProps & { ui: { root: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; toggle: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **left** — `DashboardNavbarSlotsProps`
- **default** — `DashboardNavbarSlotsProps`
- **right** — `DashboardNavbarSlotsProps`
- **toggle** — `DashboardNavbarSlotsProps & { ui: { root: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; toggle: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
