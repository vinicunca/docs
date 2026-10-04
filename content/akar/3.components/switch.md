---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/switch"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Switch"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Switch"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Can be controlled or uncontrolled.","Supports custom true/false values."]
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

Import all parts and piece them together.

```vue
<script setup>
import { SwitchRoot, SwitchThumb } from 'akar'
</script>

<template>
  <SwitchRoot>
    <SwitchThumb />
  </SwitchRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a switch. An `input` will also render when used within a `form` to ensure events propagate correctly.

:akar-api{name="SwitchRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Thumb

The thumb that is used to visually indicate whether the switch is on or off.

:akar-api{name="SwitchThumb"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Examples

### Custom Values

Use the `trueValue` and `falseValue` props to specify custom values for the on and off states instead of the default `true`/`false`.

```vue{4-5,9-10}
<script setup>
import { SwitchRoot, SwitchThumb } from 'akar'
import { ref } from 'vue'

// With string values
const status = ref('inactive')

// With number values
const enabled = ref(0)
</script>

<template>
  <!-- String values -->
  <SwitchRoot v-model="status" true-value="active" false-value="inactive">
    <SwitchThumb />
  </SwitchRoot>
  Status: {{ status }} <!-- "active" or "inactive" -->

  <!-- Number values -->
  <SwitchRoot v-model="enabled" :true-value="1" :false-value="0">
    <SwitchThumb />
  </SwitchRoot>
  Enabled: {{ enabled }} <!-- 1 or 0 -->
</template>
```

## Accessibility

Adheres to the [`switch` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/switch).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Toggles the component's state."},{"keys":["Enter"],"description":"Toggles the component's state."}]
---
::
