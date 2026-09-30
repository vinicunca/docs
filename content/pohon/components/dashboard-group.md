---
title: "DashboardGroup"
description: "A fixed layout component that provides context for dashboard components with sidebar state management and persistence."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-group.md"
---
## Usage

The DashboardGroup component is the main layout that wraps the [DashboardSidebar](/pohon/components/dashboard-sidebar) and [DashboardPanel](/pohon/components/dashboard-panel) components to create a responsive dashboard interface.

Use it in a layout or in your `app.vue`:

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar />

    <slot />
  </PDashboardGroup>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardGroup: {
      base: 'fixed inset-0 flex overflow-hidden'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardGroup source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardGroup.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`
- **storage** — `"cookie" | "local" | undefined; optional; default: "cookie"`: The storage to use for the size.
- **storageKey** — `string | undefined; optional; default: "dashboard"`: Unique id used to auto-save size.
- **storageOptions** — `Record<string, any> | undefined; optional`: Options to pass to the underlying storage (\`useCookie\` or \`useStorage\`).
- **persistent** — `boolean | undefined; optional; default: true`: Whether to persist the size in the storage.
- **unit** — `"%" | "rem" | "px" | undefined; optional; default: "%"`: The unit to use for size values.

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
