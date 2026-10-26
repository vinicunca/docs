---
title: PageCard
description: 'A pre-styled card component that displays a title, description and optional link.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/PageCard.vue
---

## Usage

The PageCard component provides a flexible way to display content in a card with an illustration in the default slot.

::code-preview

::p-page-card
---
title: 'UnoCSS'
description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
icon: 'i-simple-icons-unocss'
class: 'w-96'
---

<PIcon name="i-simple-icons-unocss" class="size-24" />
::

::

::tip
Use the [PageGrid](/pohon/components/page-grid), [PageColumns](/pohon/components/page-columns) or [PageList](/pohon/components/page-list) components to display multiple PageCard.
::

### Title

Use the `title` prop to set the title of the card.

::component-code
---
hide:
  - class
props:
  title: 'UnoCSS'
  class: 'w-96'
---
::

::tip
The title is rendered as a `div` by default. Use the `as` prop with an object to render it as a heading, for example `:as="{ title: 'h3' }"`{lang="ts-type"}. You can also set the root element this way: `:as="{ root: 'section', title: 'h3' }"`{lang="ts-type"}.
::

### Description

Use the `description` prop to set the description of the card.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  class: 'w-96'
---
::

### Icon

Use the `icon` prop to set the icon of the card.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  class: 'w-96'
---
::

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  to: 'https://unocss.dev/'
  target: _blank
  class: 'w-96'
---
::

### Variant

Use the `variant` prop to change the style of the card.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - to
  - target
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  to: 'https://unocss.dev/'
  target: _blank
  variant: soft
  class: 'w-96'
---
::

::tip
You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.
::

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  orientation: horizontal
slots:
  default: |

    <PIcon name="i-simple-icons-unocss" class="size-24" />
---

<PIcon name="i-simple-icons-unocss" class="size-24" />
::

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  orientation: horizontal
  reverse: true
slots:
  default: |

    <PIcon name="i-simple-icons-unocss" class="size-24" />
---

<PIcon name="i-simple-icons-unocss" class="size-24" />
::

### Highlight

Use the `highlight` and `highlight-color` props to display a highlighted border around the card.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  orientation: horizontal
  highlight: true
  highlightColor: 'primary'
slots:
  default: |

    <PIcon name="i-simple-icons-unocss" class="size-24" />
---

<PIcon name="i-simple-icons-unocss" class="size-24" />
::

### Spotlight

Use the `spotlight` and `spotlight-color` props to display a spotlight effect that follows your mouse cursor and highlights borders on hover.

::note
The spotlight effect will take over hover effects when using a `to` prop. It's best to use it with the `outline` variant.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'UnoCSS'
  description: 'Pohon UI integrates with latest UnoCSS, bringing significant improvements.'
  icon: 'i-simple-icons-unocss'
  orientation: horizontal
  spotlight: true
  spotlightColor: 'primary'
slots:
  default: |

    <PIcon name="i-simple-icons-unocss" class="size-24" />
---

<PIcon name="i-simple-icons-unocss" class="size-24" />
::

::tip
You can also customize the color and size by using the `--spotlight-color` and `--spotlight-size` CSS variables:

```vue
<template>
  <PPageCard
    spotlight
    class="[--spotlight-color:var(--ui-color-error)] [--spotlight-size:200px]"
  />
</template>
```
::

## Examples

### As a testimonial

Use the [User](/pohon/components/user) component in the `header` or `footer` slot to make the card look like a testimonial.

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/pohon/components/page-columns"}
You can use the `PageColumns` component to display multiple PageCard in a multi-column layout.
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
