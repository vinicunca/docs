---
title: DashboardResizeHandle
description: 'A handle to resize a sidebar or panel.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/DashboardResizeHandle.vue
---

## Usage

The DashboardResizeHandle component is used by the [DashboardSidebar](/pohon/components/dashboard-sidebar) and [DashboardPanel](/pohon/components/dashboard-panel) components.

It is automatically displayed when the `resizable` prop is set, **you don't have to add it manually**.

## Examples

### Within `resize-handle` slot

Even though this component is automatically displayed when the `resizable` prop is set, you can use the `resize-handle` slot of the [DashboardSidebar](/pohon/components/dashboard-sidebar) and [DashboardPanel](/pohon/components/dashboard-panel) components to customize the handle.

::code-group

```vue [layouts/dashboard.vue]{4-10}
<template>
  <PDashboardGroup>
    <PDashboardSidebar resizable>
      <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
        <PDashboardResizeHandle
          class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-color-border-accented) after:transition"
          @mousedown="onMouseDown"
          @touchstart="onTouchStart"
          @dblclick="onDoubleClick"
        />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```

```vue [pages/index.vue]{9-15}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <PDashboardPanel resizable>
    <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
      <PDashboardResizeHandle
        class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-color-border-accented) after:transition"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
        @dblclick="onDoubleClick"
      />
    </template>
  </PDashboardPanel>
</template>
```

::

::note
In this example, we add an `after` pseudo-element to display a vertical line on hover.
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
