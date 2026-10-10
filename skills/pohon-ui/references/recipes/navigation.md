# Navigation

Patterns for headers, sidebars, breadcrumbs, and tab navigation. API: [header](https://vinicunca.dev/raw/pohon/components/header.md), [navigation-menu](https://vinicunca.dev/raw/pohon/components/navigation-menu.md), [tabs](https://vinicunca.dev/raw/pohon/components/tabs.md).

## Header with mobile menu

`PHeader` renders its default slot as desktop navigation and `#body` as the mobile menu (opened by the built-in toggle, shown as a modal by default; change it with `mode="slideover"` or `"drawer"`). Without `#body`, mobile users have no navigation. Other slots: `#title` (or the `title` and `to` props), `#left`, `#right`, `#top`, `#bottom`.

```vue
<PHeader>
  <template #title>
    <Logo class="h-6 w-auto" />
  </template>

  <PNavigationMenu :items="items" />

  <template #right>
    <PColorModeButton />
    <PButton label="Sign in" color="neutral" variant="ghost" />
  </template>

  <template #body>
    <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
  </template>
</PHeader>
```

> Full app shell example in [landing layout](../layouts/landing.md).

## Sidebar navigation (dashboard)

See [dashboard layout](../layouts/dashboard.md) for the full sidebar pattern with `PDashboardSidebar` + `PNavigationMenu`. Key points:
- Pass `:collapsed="collapsed"` to `PNavigationMenu` inside collapsible sidebars
- Use `NavigationMenuItem[][]` (nested arrays) for separate nav groups
- Use `#footer` slot for user menu with `PDropdownMenu`

## Breadcrumbs

```vue
<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.map((segment, index) => ({
    label: segment.charAt(0).toUpperCase() + segment.slice(1),
    to: '/' + segments.slice(0, index + 1).join('/')
  }))
})
</script>

<template>
  <PBreadcrumb :items="breadcrumbs" />
</template>
```

## Tab navigation (within a page)

```vue
<script setup lang="ts">
const items = [{
  label: 'Overview',
  icon: 'i-lucide-layout-dashboard',
  slot: 'overview' as const
}, {
  label: 'Activity',
  icon: 'i-lucide-activity',
  slot: 'activity' as const
}, {
  label: 'Members',
  icon: 'i-lucide-users',
  slot: 'members' as const
}]
</script>

<template>
  <PTabs :items="items">
    <template #overview>
      <!-- Overview content -->
    </template>
    <template #activity>
      <!-- Activity feed -->
    </template>
    <template #members>
      <!-- Members list -->
    </template>
  </PTabs>
</template>
```
