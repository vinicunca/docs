---
title: ProseAccordion
description: 'Create expandable content sections for better information organization.'
category: components
navigation.title: Accordion
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/prose/Accordion.vue
---

## Usage

Use the `accordion` and `accordion-item` components to display an [Accordion](/pohon/components/accordion) in your content.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Pohon UI free to use?" icon="i-lucide-circle-help"}
Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Pohon UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/pohon/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Pohon UI production-ready?" icon="i-lucide-circle-help"}
Pohon UI is designed for production Vue applications and maintained with component tests and regular updates.
::

:::

# code

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Pohon UI free to use?" icon="i-lucide-circle-help"}
Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Pohon UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/pohon/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Pohon UI production-ready?" icon="i-lucide-circle-help"}
Pohon UI is designed for production Vue applications and maintained with component tests and regular updates.
::

::
```

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

::component-theme{prose}
---
extra:
  - accordionItem
---
::

## Changelog

:component-changelog{prefix="prose"}
