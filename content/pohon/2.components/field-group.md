---
title: FieldGroup
description: Group multiple button-like elements together.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/FieldGroup.vue
---

## Usage

Wrap multiple [Button](/pohon/components/button) within a FieldGroup to group them together.

::component-code
---
prettier: true
slots:
  default: |

    <PButton color="neutral" variant="subtle" label="Button" />
    <PButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:p-button{color="neutral" variant="subtle" label="Button"}
:p-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Size

Use the `size` prop to change the size of all the buttons.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <PButton color="neutral" variant="subtle" label="Button" />
    <PButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:p-button{color="neutral" variant="subtle" label="Button"}
:p-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Orientation

Use the `orientation` prop to change the orientation of the buttons. Defaults to `horizontal`.

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <PButton color="neutral" variant="subtle" label="Submit" />
    <PButton color="neutral" variant="outline" label="Cancel" />
---
:p-button{color="neutral" variant="subtle" label="Submit"}
:p-button{color="neutral" variant="outline" label="Cancel"}
::

## Examples

### With input

You can use components like [Input](/pohon/components/input), [InputMenu](/pohon/components/input-menu), [Select](/pohon/components/select) [SelectMenu](/pohon/components/select-menu), etc. within a field group.

::component-code
---
prettier: true
slots:
  default: |

    <PInput color="neutral" variant="outline" placeholder="Enter token" />

    <PButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:p-input{color="neutral" variant="outline" placeholder="Enter token"}
:p-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### With tooltip

You can use a [Tooltip](/pohon/components/tooltip) within a field group.

:component-example{name="field-group-tooltip-example"}

### With dropdown menu

You can use a [DropdownMenu](/pohon/components/dropdown-menu) within a field group.

:component-example{name="field-group-dropdown-example"}

### With badge

You can use a [Badge](/pohon/components/badge) within a field group.

:component-example{name="field-group-badge-example"}

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
