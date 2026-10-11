---
title: Stepper
description: A set of steps that are used to indicate progress through a multi-step process.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Stepper"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Stepper"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Supports horizontal/vertical orientation.","Supports linear/non-linear activation.","Full keyboard navigation."]
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
import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperTitle, StepperTrigger } from 'akar';
</script>

<template>
  <StepperRoot>
    <StepperItem>
      <StepperTrigger />
      <StepperIndicator />

      <StepperTitle />
      <StepperDescription />

      <StepperSeparator />
    </StepperItem>
  </StepperRoot>
</template>
```

## API Reference

### Root

Contains all the stepper component parts.

:akar-api{name="StepperRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]},{"attribute":"[data-linear]","values":"Present when linear"}]
---
::

### Item

The step item component.

:akar-api{name="StepperItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive","completed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Trigger

The trigger that toggles the step.

:akar-api{name="StepperTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive","completed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Indicator

The indicator for the step.

:akar-api{name="StepperIndicator"}

### Title

An accessible title to be announced when the stepper trigger is focused.

If you want to hide the title, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`.

:akar-api{name="StepperTitle"}

### Description

An optional accessible description to be announced when the stepper trigger is focused.

If you want to hide the description, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `aria-describedby="undefined"` to `StepperTrigger`.

:akar-api{name="StepperItem"}

## Examples

### Vertical

You can create vertical steps by using the `orientation` prop.

```vue{8}
<script setup>
import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperTitle } from 'akar'
</script>

<template>
  <StepperRoot
    :default-value="1"
    orientation="vertical"
  >
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
  </StepperRoot>
</template>
```

### With controls

You can add additional controls for the stepper using buttons and access the typed component instance using `useTemplateRef`.

```vue{8}
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <StepperRoot
    ref="stepper"
    :default-value="1"
  >
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
  </StepperRoot>

  <div class="flex gap-2 justify-between mt-4">
    <button
      :disabled="!stepper?.hasPrev()"
      @click="stepper?.prevStep()"
    >
      Prev
    </button>

    <button
      :disabled="!stepper?.hasNext()"
      @click="stepper?.nextStep()"
    >
      Next
    </button>
  </div>
</template>
```

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":" When focus moves onto the steps, focuses the first step ."},{"keys":["ArrowDown"],"description":" Moves focus to the next step depending on `orientation`."},{"keys":["ArrowRight"],"description":" Moves focus to the next step depending on `orientation` ."},{"keys":["ArrowUp"],"description":" Moves focus to the previous step depending on `orientation` ."},{"keys":["ArrowLeft"],"description":" Moves focus to the previous step depending on `orientation` ."},{"keys":["Enter","Space"],"description":"Selects the focused step."}]
---
::
