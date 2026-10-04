---
title: Toolbar
description: A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Toolbar"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Toolbar"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation."]
---
::

## Installation

Install the component from your command line.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add akar
```

```bash [yarn]
yarn add akar
```

```bash [npm]
npm install akar
```

```bash [bun]
bun add akar
```

::

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from 'akar'
</script>

<template>
  <ToolbarRoot>
    <ToolbarButton />
    <ToolbarSeparator />
    <ToolbarLink />
    <ToolbarToggleGroup>
      <ToolbarToggleItem />
    </ToolbarToggleGroup>
  </ToolbarRoot>
</template>
```

## API Reference

### Root

Contains all the toolbar component parts.

:akar-api{name="ToolbarRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Button

A button item.

:akar-api{name="ToolbarButton"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Link

A link item.

:akar-api{name="ToolbarLink"}

### ToggleGroup

A set of two-state buttons that can be toggled on or off.

:akar-api{name="ToolbarToggleGroup"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### ToggleItem

An item in the group.

:akar-api{name="ToolbarToggleItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["on","off"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Separator

Used to visually separate items in the toolbar

:akar-api{name="ToolbarSeparator"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

## Examples

### Use with other primitives

All our primitives which expose a `Trigger` part, such as `Dialog`, `AlertDialog`, `Popover`, `DropdownMenu` can be composed within a toolbar by using the [`asChild` prop](/akar/guides/composition).

Here is an example using our `DropdownMenu` primitive.

```vue{20-22}
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from 'akar'
</script>

<template>
  <ToolbarRoot>
    <ToolbarButton>Action 1</ToolbarButton>
    <ToolbarSeparator />
    <DropdownMenuRoot>
      <ToolbarButton as-child>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
      </ToolbarButton>
      <DropdownMenuContent>…</DropdownMenuContent>
    </DropdownMenuRoot>
  </ToolbarRoot>
</template>
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"Moves focus to the first item in the group."},{"keys":["Space"],"description":"Activates/deactivates the item."},{"keys":["Enter"],"description":"Activates/deactivates the item."},{"keys":["ArrowDown"],"description":" Moves focus to the next item depending on `orientation`."},{"keys":["ArrowRight"],"description":" Moves focus to the next item depending on `orientation`."},{"keys":["ArrowUp"],"description":" Moves focus to the previous item depending on `orientation` ."},{"keys":["ArrowLeft"],"description":" Moves focus to the previous item depending on `orientation` ."},{"keys":["Home"],"description":"Moves focus to the first item."},{"keys":["End"],"description":"Moves focus to the last item."}]
---
::
