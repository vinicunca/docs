---
title: Color Swatch Picker
description: A component that allows users to select from a set of predefined colors, often used for themes or branding.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/ColorSwatchPicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="ColorSwatchPicker"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Focus is fully managed.","Full keyboard navigation.","Supports Right to Left direction.","Different selection behavior."]
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

::tip
Looking for a complete color picker? Check out the [Color Picker example](/examples/color-picker) that combines Color Area, Color Slider, Color Field, and Color Swatch components.
::

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import {
  ColorSwatchPickerItem,
  ColorSwatchPickerItemIndicator,
  ColorSwatchPickerItemSwatch,
  ColorSwatchPickerRoot,
} from 'akar';
</script>

<template>
  <ColorSwatchPickerRoot>
    <ColorSwatchPickerItem value="#ff0000">
      <ColorSwatchPickerItemSwatch />
      <ColorSwatchPickerItemIndicator />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem value="#00ff00">
      <ColorSwatchPickerItemSwatch />
      <ColorSwatchPickerItemIndicator />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem value="#0000ff">
      <ColorSwatchPickerItemSwatch />
      <ColorSwatchPickerItemIndicator />
    </ColorSwatchPickerItem>
  </ColorSwatchPickerRoot>
</template>
```

## API Reference

### ColorSwatchPickerRoot

The main component that displays a color swatch picker.

:akar-api{name="ColorSwatchPickerRoot"}

### ColorSwatchPickerItem

The item that represents a selectable color swatch.

:akar-api{name="ColorSwatchPickerItem"}

### ColorSwatchPickerItemSwatch

The component that displays the color swatch within an item.

:akar-api{name="ColorSwatchPickerItemSwatch"}

### ColorSwatchPickerItemIndicator

The component that indicates the selected color swatch within an item.

:akar-api{name="ColorSwatchPickerItemIndicator"}
