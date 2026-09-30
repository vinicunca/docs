---
title: "DashboardSidebarToggle"
description: "A Button to toggle the sidebar on mobile."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-sidebar-toggle.md"
---
## Usage

The DashboardSidebarToggle component is used by the [DashboardNavbar](/pohon/components/dashboard-navbar) and [DashboardSidebar](/pohon/components/dashboard-sidebar) components.

It is automatically displayed on mobile to toggle the sidebar, **you don't have to add it manually**.

```vue
<template>
  <UDashboardSidebarToggle />
</template>
```

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSidebarToggle variant="subtle" />
</template>
```

> [!NOTE]
> 
> The button defaults to `color="neutral"` and `variant="ghost"`.

## Examples

### Within `toggle` slot

Even though this component is automatically displayed on mobile, you can use the `toggle` slot of the [DashboardNavbar](/pohon/components/dashboard-navbar) and [DashboardSidebar](/pohon/components/dashboard-sidebar) components to customize the button.

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar>
      <template #toggle>
        <PDashboardSidebarToggle variant="subtle" />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```

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
        <template #toggle>
          <PDashboardSidebarToggle variant="subtle" />
        </template>
      </PDashboardNavbar>
    </template>
  </PDashboardPanel>
</template>
```

> [!TIP]
> 
> When using the `toggle-side` prop of the `DashboardSidebar` and `DashboardNavbar` components, the button will be displayed on the specified side.

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
    dashboardSidebarToggle: {
      base: 'lg:hidden',
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardSidebarToggle.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-sidebar-toggle.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSidebarToggle.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardSidebarToggle source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSidebarToggle.vue)

### Props

- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "ghost"`
- **side** — `"left" | "right" | undefined; optional; default: "left"`: The side of the sidebar to toggle.
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
