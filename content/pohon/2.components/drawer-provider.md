---
description: A wrapper that coordinates drawers and optionally scales the page behind them.
category: overlay
links:
  - label: Akar Drawer
    icon: i-lucide-box
    to: /akar/components/drawer
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/DrawerProvider.vue
---

## Usage :badge{label="Soon" class="align-text-top"}

Wrap page content in DrawerProvider and enable `scale` to shrink it while a descendant [Drawer](/pohon/components/drawer) is open. This replaces `data-vaul-drawer-wrapper`.

```vue
<PDrawerProvider scale class="min-h-dvh" :ui="{ content: 'min-h-dvh' }">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</PDrawerProvider>
```

Keep the Drawer's portal enabled so its panel renders outside the scaled page. Every descendant Drawer participates. `scale` defaults to `false`.

### Scale

The page scales down and gains rounded corners when a Drawer opens. It follows swipe progress back toward its resting state during dismissal. Reduced-motion preferences disable the transition.

### Element

Use `as` to change the root element. Defaults to `div`.

## Examples

### Custom background

Use `ui.background` to customize the surface behind the page, and `ui.content` for the page wrapper.

```vue
<PDrawerProvider scale :ui="{ background: 'bg-background-accented', content: 'min-h-dvh p-4' }">
  <PDrawer title="Example" close>
    <PButton label="Open" />
    <template #body>Page content scales behind this drawer.</template>
  </PDrawer>
</PDrawerProvider>
```

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
