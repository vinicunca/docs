---
title: Color Swatch
description: A predefined color block that allows users to quickly select commonly used or brand-specific colors.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/ColorSwatch"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="ColorSwatch"}

## Features

::akar-highlights
---
features: ["Supports custom colors","Provides an accessible label for screen readers","Provides a color contrast for better visibility"]
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
  ColorSwatch,
} from 'akar';
</script>

<template>
  <ColorSwatch color="#ff0000" />
</template>
```

## API Reference

### ColorSwatch

The main component that displays a color swatch.

:akar-api{name="ColorSwatch"}
