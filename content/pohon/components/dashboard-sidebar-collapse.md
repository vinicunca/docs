---
title: "DashboardSidebarCollapse"
description: "A Button to collapse the sidebar on desktop."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-sidebar-collapse.md"
---
## Usage

The DashboardSidebarCollapse component is used to collapse/expand the [DashboardSidebar](/pohon/components/dashboard-sidebar) component **when its collapsible prop is set**.

```vue
<template>
  <UDashboardSidebarCollapse />
</template>
```

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSidebarCollapse variant="subtle" />
</template>
```

> [!NOTE]
> 
> The button defaults to `color="neutral"` and `variant="ghost"`.

## Examples

### Within `header` slot

You can put this component in the `header` slot of the [DashboardSidebar](/pohon/components/dashboard-sidebar) component and use the `collapsed` prop to hide the left part of the header for example:

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <PDashboardSidebarCollapse variant="subtle" />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```

### Within `leading` slot

You can put this component in the `leading` slot of the [DashboardNavbar](/pohon/components/dashboard-navbar) component to display it before the title for example:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Home">
        <template #leading>
          <PDashboardSidebarCollapse variant="subtle" />
        </template>
      </PDashboardNavbar>
    </template>
  </PDashboardPanel>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardSidebarCollapse: {
      base: 'hidden lg:flex',
      variants: {
        side: {
          left: '',
          right: ''
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardSidebarCollapse.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-sidebar-collapse.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSidebarCollapse.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardSidebarCollapse source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSidebarCollapse.vue)

### Props

- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "ghost"`
- **side** — `"left" | "right" | undefined; optional; default: "left"`: The side of the sidebar to collapse.
- **ui** — `{ base?: any; } | undefined; optional`
- **type** — `"button" | "reset" | "submit" | undefined; optional`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **as** — `any; optional`: The element or component this component should render as when not a link.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **name** — `string | undefined; optional`
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **label** — `string | undefined; optional`
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **onClick** — `((event: MouseEvent) => void) | ((event: MouseEvent) => void)[] | undefined; optional`
- **form** — `string | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **block** — `boolean | undefined; optional`: Render the button full width.
- **exactActiveClass** — `string | undefined; optional`: Class to apply when the link is exact active
- **viewTransition** — `boolean | undefined; optional`: Pass the returned promise of \`router.push()\` to \`document.startViewTransition()\` if supported.
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **activeColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **activeVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`
- **square** — `boolean | undefined; optional`: Render the button with equal padding on all sides.
- **loadingAuto** — `boolean | undefined; optional`: Set loading state automatically based on the \`@click\` promise state
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.

### Slots

No slots are declared.

### Events

No events are declared.
