---
title: Toggle
description: A two-state button that can be either on or off.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/button"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Toggle"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Toggle"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Can be controlled or uncontrolled."]
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
<script setup>
import { Toggle } from 'akar'
</script>

<template>
  <Toggle />
</template>
```

## API Reference

### Root

The toggle.

:akar-api{name="Toggle"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["on","off"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Activates/deactivates the toggle."},{"keys":["Enter"],"description":"Activates/deactivates the toggle."}]
---
::
