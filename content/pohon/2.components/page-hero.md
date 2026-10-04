---
title: PageHero
description: 'A responsive hero for your pages.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/PageHero.vue
---

## Usage

The PageHero component wraps your content in a [Container](/pohon/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

::code-preview

:::p-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::p-page-card{variant="subtle" class="rounded-lg"}

![App screenshot](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-ring"}

::::

:::

::

### Title

Use the `title` prop to set the title of the hero.

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### Description

Use the `description` prop to set the description of the hero.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### Headline

Use the `headline` prop to set the headline of the hero.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
---
::

### Links

Use the `links` prop to display a list of [Button](/pohon/components/button) under the description.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/pohon/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/pohon/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  links:
    - label: 'Get started'
      to: '/pohon/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/pohon/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-ring" />
---

![App screenshot](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-ring"}
::

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      to: '/pohon/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/pohon/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-ring" />
---

![App screenshot](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-ring"}
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
