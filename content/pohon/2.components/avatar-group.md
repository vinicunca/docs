---
title: AvatarGroup
description: Stack multiple avatars in a group.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/AvatarGroup.vue
---

## Usage

Wrap multiple [Avatar](/pohon/components/avatar) within an AvatarGroup to stack them.

::component-code
---
prettier: true
slots:
  default: |

    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
:p-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:p-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
:p-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

### Size

Use the `size` prop to change the size of all the avatars.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:p-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:p-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:p-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Max

Use the `max` prop to limit the number of avatars displayed. The rest is displayed as an `+X` avatar.

::component-code
---
prettier: true
props:
  max: 2
slots:
  default: |

    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:p-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:p-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:p-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Color

Use the `color` prop to change the color of all the avatars.

::component-code
---
prettier: true
props:
  color: primary
slots:
  default: |

    <PAvatar alt="Benjamin Canac" />
    <PAvatar alt="Hugo Richard" />
    <PAvatar alt="Sébastien Chopin" />
---
:p-avatar{alt="Benjamin Canac"}
:p-avatar{alt="Hugo Richard"}
:p-avatar{alt="Sébastien Chopin"}
::

## Examples

### With tooltip

Wrap each avatar with a [Tooltip](/pohon/components/tooltip) to display a tooltip on hover.

:component-example{name="avatar-group-tooltip-example"}

### With chip

Wrap each avatar with a [Chip](/pohon/components/chip) to display a chip around the avatar.

:component-example{name="avatar-group-chip-example"}

### With link

Wrap each avatar with a [Link](/pohon/components/link) to make them clickable.

:component-example{name="avatar-group-link-example"}

### With mask

Wrap an avatar with a CSS mask to display it with a custom shape.

:component-example{name="avatar-group-mask-example"}

::warning
The `chip` prop does not work correctly when using a mask. Chips may be cut depending on the mask shape.
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
