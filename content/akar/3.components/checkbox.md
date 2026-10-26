---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Checkbox"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Checkbox"}

## Features

::akar-highlights
---
features: ["Supports indeterminate state.","Full keyboard navigation.","Can be controlled or uncontrolled.","Supports custom true/false values."]
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
import { CheckboxGroupRoot, CheckboxIndicator, CheckboxRoot } from 'akar';
</script>

<template>
  <CheckboxRoot>
    <CheckboxIndicator />
  </CheckboxRoot>

  <!-- or with array support -->
  <CheckboxGroupRoot>
    <CheckboxRoot>
      <CheckboxIndicator />
    </CheckboxRoot>
  </CheckboxGroupRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.

:akar-api{name="CheckboxRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked","indeterminate"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="CheckboxIndicator"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked","indeterminate"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Group Root

Wrapper around `CheckboxRoot` to support array of `modelValue`

:akar-api{name="CheckboxGroupRoot"}

## Examples

### Custom Values

Use the `trueValue` and `falseValue` props to specify custom values for the checked and unchecked states instead of the default `true`/`false`.

```vue{5-6,11-12}
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'akar'
import { ref } from 'vue'

// With string values
const acceptTerms = ref('no')

// With number values
const permission = ref(0)
</script>

<template>
  <!-- String values -->
  <CheckboxRoot v-model="acceptTerms" true-value="yes" false-value="no">
    <CheckboxIndicator>
      <Icon icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>
  Value: {{ acceptTerms }} <!-- "yes" or "no" -->

  <!-- Number values -->
  <CheckboxRoot v-model="permission" :true-value="1" :false-value="0">
    <CheckboxIndicator>
      <Icon icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>
  Value: {{ permission }} <!-- 1 or 0 -->
</template>
```

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```vue{5,9-14,16-18}
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'akar'

const checked = ref('indeterminate')
</script>

<template>
  <CheckboxRoot v-model="checked">
    <CheckboxIndicator>
      <Icon
        v-if="checked === 'indeterminate'"
        icon="radix-icons:divider-horizontal"
      />
      <Icon
        v-if="checked"
        icon="radix-icons:check"
      />
    </CheckboxIndicator>
  </CheckboxRoot>

  <button
    type="button"
    @click="() => (checked === 'indeterminate' ? (checked = false) : (checked = 'indeterminate'))"
  >
    Toggle indeterminate
  </button>
</template>
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Checks/unchecks the checkbox"}]
---
::
