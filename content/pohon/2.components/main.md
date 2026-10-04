---
description: 'A main element that fills the available viewport height.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Main.vue
---

## Usage

The Main component renders a `<main>` element that works together with the [Header](/pohon/components/header) component to create a full-height layout that extends to the viewport's available height.

::tip{to="/pohon/getting-started/theme/css-variables#header"}
The Main component uses the `--ui-header-height` CSS variable to position itself correctly below the `Header`.
::

## Examples

### Within `app.vue`

Use the Main component in your `app.vue` or in a layout:

```vue [app.vue]{5-9}
<template>
  <PApp>
    <PHeader />

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PFooter />
  </PApp>
</template>
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
