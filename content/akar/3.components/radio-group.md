---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/RadioGroup"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## RadioGroup

:akar-preview{name="RadioGroup"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Supports horizontal/vertical orientation.","Can be controlled or uncontrolled."]
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
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'akar'
</script>

<template>
  <RadioGroupRoot>
    <RadioGroupItem>
      <RadioGroupIndicator />
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a radio group.

:akar-api{name="RadioGroupRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Item

An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly.

:akar-api{name="RadioGroupItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Indicator

Renders when the radio item is in a checked state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="RadioGroupIndicator"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Accessibility

Adheres to the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton) and uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among radio items.

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"Moves focus to either the checked radio item or the first radio item in the group."},{"keys":["Space"],"description":"When focus is on an unchecked radio item, checks it."},{"keys":["ArrowDown"],"description":"Moves focus and checks the next radio item in the group."},{"keys":["ArrowRight"],"description":"Moves focus and checks the next radio item in the group."},{"keys":["ArrowUp"],"description":"Moves focus to the previous radio item in the group."},{"keys":["ArrowLeft"],"description":"Moves focus to the previous radio item in the group."}]
---
::
