---
description: 'A responsive header for your site navigation.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Header.vue
---

## Usage

The Header component renders a `<header>` element.

::tip{to="/pohon/getting-started/theme/css-variables#header"}
Its height is defined through a `--ui-header-height` CSS variable.
::

Use the `left`, `default` and `right` slots to customize the header and the `body` or `content` slots to customize the header menu.

::component-example
---
collapse: true
prettier: true
name: 'header-example'
class: '!px-0 !pt-0'
overflowHidden: true
props:
  class: 'w-full'
---
::

::note
In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render the header links in the center.
::

### Title

Use the `title` prop to change the title of the header. Defaults to `Pohon UI`.

::component-code
---
hide:
  - class
props:
  title: 'Pohon UI'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

You can also use the `title` slot to add your own logo.

::tip{to="#props"}
You should still add the `title` prop to replace the default `aria-label` of the link.
::

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
props:
  class: 'w-full'
slots:
  title: |

    <Logo class="h-6 w-auto" />
class: '!px-0 !pt-0'
---

#title
:logo{class="h-6 w-auto"}
::

### To

Use the `to` prop to change the link of the title. Defaults to `/`.

::component-code
---
hide:
  - class
class: '!px-0 !pt-0'
props:
  to: '/pohon/getting-started'
  class: 'w-full'
---
::

You can also use the `left` slot to override the link entirely.

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
class: '!px-0 !pt-0'
props:
  class: 'w-full'
slots:
  left: |

    <NuxtLink to="/pohon/getting-started">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/pohon/getting-started"}
:logo{class="h-6 w-auto"}
::
::

### Mode

Use the `mode` prop to change the mode of the header menu. Defaults to `modal`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

::tip{to="#props"}
You can use the `menu` prop to customize the menu of the header, it will adapt depending on the mode you choose.
::

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-menu-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-side-example'
props:
  class: 'w-full'
---
::

## Examples

### With animated toggle

Use the `#toggle` slot to replace the default toggle button with a custom animated hamburger icon using [Motion Vue](https://motion.dev/docs/vue/motion-component).

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-animated-example'
props:
  class: 'w-full'
---
::

### Within `app.vue`

Use the Header component in your `app.vue` or in a layout:

```vue [app.vue]{28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui';

const route = useRoute();

const items = computed<Array<NavigationMenuItem>>(() => [
  {
    label: 'Docs',
    to: '/pohon/getting-started',
    active: route.path.startsWith('/pohon/getting-started')
  },
  {
    label: 'Components',
    to: '/pohon/components',
    active: route.path.startsWith('/pohon/components')
  },
  {
    label: 'Theme',
    to: '/theme',
    target: '_blank'
  },
  {
    label: 'Releases',
    to: 'https://github.com/vinicunca/pohon/releases',
    target: '_blank'
  }
]);
</script>

<template>
  <PApp>
    <PHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <PNavigationMenu :items="items" />

      <template #right>
        <PColorModeButton />

        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <PNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </PHeader>

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

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
