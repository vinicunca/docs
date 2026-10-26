---
title: Editable
description: Displays an input field used for editing a single line of text, rendering as static text on load.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Editable"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Editable"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed"]
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
import {
  EditableArea,
  EditableCancelTrigger,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
  EditableSubmitTrigger
} from 'akar';
</script>

<template>
  <EditableRoot>
    <EditableArea>
      <EditablePreview />
      <EditableInput />
    </EditableArea>
    <EditableEditTrigger />
    <EditableSubmitTrigger />
    <EditableCancelTrigger />
  </EditableRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an editable component.

:akar-api{name="EditableRoot"}

### Area

Contains the text parts of an editable component.

:akar-api{name="EditableArea"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-placeholder-shown]","values":"Present when preview is shown"},{"attribute":"[data-empty]","values":"Present when the input is empty"},{"attribute":"[data-focus]","values":"Present when the editable field is focused. To be deprecated in favor of [data-focused]"},{"attribute":"[data-focused]","values":"Present when the editable field is focused"}]
---
::

### Input

Contains the input of an editable component.

:akar-api{name="EditableInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Preview

Contains the preview of the editable component.

:akar-api{name="EditablePreview"}

### Edit Trigger

Contains the edit trigger of the editable component.

:akar-api{name="EditableEditTrigger"}

### Submit Trigger

Contains the submit trigger of the editable component.

:akar-api{name="EditableSubmitTrigger"}

### Cancel Trigger

Contains the cancel trigger of the editable component.

:akar-api{name="EditableCancelTrigger"}

## Examples

### Change only on submit

By default the component will submit when `blur` event triggers. We can modify the `submit-mode` prop to alter this behavior.
In this case, we want to submit only when user click on `EditableSubmitTrigger`, so we change the submit mode to `none`.

```vue{2,8}
<template>
  <EditableRoot submit-mode="none">
    <EditableArea>
      <EditablePreview />
      <EditableInput />
    </EditableArea>
    <EditableEditTrigger />
    <EditableSubmitTrigger />
    <EditableCancelTrigger />
  </EditableRoot>
</template>
```

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the editable field, switches into the editable mode if the `activation-mode` is set to focus."},{"keys":["Enter"],"description":" If the `submit-mode` is set to `enter` or `both`, it submits the changes. "},{"keys":["Escape"],"description":"When the focus is on the editable field, it cancels the changes."}]
---
::
