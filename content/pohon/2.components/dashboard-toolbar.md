---
title: DashboardToolbar
description: 'A toolbar to display under the navbar in a dashboard.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/DashboardToolbar.vue
---

## Usage

The DashboardToolbar component is used to display a toolbar under the [DashboardNavbar](/pohon/components/dashboard-navbar) component.

Use it inside the `header` slot of the [DashboardPanel](/pohon/components/dashboard-panel) component:

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
});
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

::component-example
---
prettier: true
name: 'dashboard-toolbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render some links.
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
