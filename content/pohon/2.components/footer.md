---
description: 'A responsive footer for your site links and legal notices.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Footer.vue
---

## Usage

The Footer component renders a `<footer>` element.

Use the `left`, `default` and `right` slots to customize the footer.

::component-example
---
prettier: true
collapse: true
name: 'footer-example'
class: '!p-0'
props:
  class: 'w-full'
---
::

::note
In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render the footer links in the center.
::

::tip{to="/pohon/components/footer-columns"}
You can use the `FooterColumns` component to display a list of links inside the `top` slot.
::

## Examples

### Within `app.vue`

Use the Footer component in your `app.vue` or in a layout:

```vue [app.vue]{32-67}
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items: NavigationMenuItem[] = [{
  label: 'Theme Studio',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://play.pohon.vinicunca.dev/',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}]
</script>

<template>
  <PApp>
    <PHeader />

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PSeparator icon="i-lucide-leaf" type="dashed" class="h-px" />

    <PFooter>
      <template #left>
        <p class="color-text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <PNavigationMenu :items="items" variant="link" />

      <template #right>
        <PButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon/discussions"
          target="_blank"
          aria-label="Discussions"
        />
        <PButton
          icon="i-lucide-book-open"
          color="neutral"
          variant="ghost"
          to="https://vinicunca.dev/"
          target="_blank"
          aria-label="Documentation"
        />
        <PButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </PFooter>
  </PApp>
</template>
```

::note
In this example, we use the [Separator](/pohon/components/separator) component to add a border above the footer.
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
