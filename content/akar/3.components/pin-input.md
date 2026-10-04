---
title: Pin Input
description: A sequence of one-character alphanumeric inputs.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/PinInput"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="PinInput"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Can be controlled or uncontrolled.","Supports pasting from clipboard","Emit event when inputs were filled."]
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
import { PinInputInput, PinInputRoot } from 'akar'
</script>

<template>
  <PinInputRoot>
    <PinInputInput />
  </PinInputRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a pin. An `input` will also render when used within a `form` to ensure events propagate correctly.

:akar-api{name="PinInputRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-complete]","values":"Present when completed"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Input

Input field for Pin Input. You can add as many input as you like.

:akar-api{name="PinInputInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-complete]","values":"Present when completed"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Examples

### OTP mode

You can set the pin input to `otp` mode by setting otp to `true`.

```vue{6}
<script setup lang="ts">
import { Label, PinInputInput, PinInputRoot } from 'akar'
</script>

<template>
  <PinInputRoot v-model="value" otp>
    …
  </PinInputRoot>
</template>
```

### Numeric mode

You can set the pin input to only accept `number` type by setting type to `number`.

```vue{6}
<script setup lang="ts">
import { Label, PinInputInput, PinInputRoot } from 'akar'
</script>

<template>
  <PinInputRoot v-model="value" type="number">
    …
  </PinInputRoot>
</template>
```

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["ArrowLeft"],"description":"Focus on previous input."},{"keys":["ArrowRight"],"description":"Focus on next input."},{"keys":["Home"],"description":"Focus on the first input."},{"keys":["End"],"description":"Focus on the last input."},{"keys":["Backspace"],"description":"Deletes the value of the current input. If the input is empty, moves to the previous input and deletes that value as well."},{"keys":["Delete"],"description":"Deletes the value of the current input."},{"keys":["Ctrl + V"],"description":"Pastes the contents of the clipboard into the pin input. If the number of characters in the clipboard equals exceeds the number of inputs, the contents are pasted from the first input. Otherwise, the contents are pasted from the current input onwards."}]
---
::
