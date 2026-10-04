---
description: An indicator of a numeric value or a state.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Chip.vue
---

## Usage

Wrap any component with a Chip to display an indicator.

::component-code
---
prettier: true
slots:
  default: |

    <PButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Color

Use the `color` prop to change the color of the Chip.

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <PButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Size

Use the `size` prop to change the size of the Chip.

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <PButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Text

Use the `text` prop to set the text of the Chip.

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <PButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Position

Use the `position` prop to change the position of the Chip.

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <PButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inset

Use the `inset` prop to display the Chip inside the component. This is useful when dealing with rounded components.

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <PAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### Standalone

Use the `standalone` prop alongside the `inset` prop to display the Chip inline.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
It's used this way in the [`CommandPalette`](/pohon/components/command-palette), [`InputMenu`](/pohon/components/input-menu), [`Select`](/pohon/components/select) or [`SelectMenu`](/pohon/components/select-menu) components for example.
::

## Examples

### Control visibility

You can control the visibility of the Chip using the `show` prop.

:component-example{name="chip-show-example"}

::note
In this example, the Chip has a color per status and is displayed when the status is not `offline`.
::

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
