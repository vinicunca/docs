---
title: Alert Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/AlertDialog"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="AlertDialog"}

## Features

::akar-highlights
---
features: ["Focus is automatically trapped.","Can be controlled or uncontrolled.","Manages screen reader announcements with `Title` and `Description` components.","Esc closes the component automatically."]
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
<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'akar';
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger />
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle />
        <AlertDialogDescription />
        <AlertDialogCancel />
        <AlertDialogAction />
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an alert dialog.

:akar-api{name="AlertDialogRoot"}

### Trigger

A button that opens the dialog.

:akar-api{name="AlertDialogTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Portal

When used, portals your overlay and content parts into the <code>body</code>.

:akar-api{name="AlertDialogPortal"}

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

:akar-api{name="AlertDialogOverlay"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Content

Contains content to be rendered when the dialog is open.

:akar-api{name="AlertDialogContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Cancel

A button that closes the dialog. This button should be distinguished visually from `AlertDialogAction` buttons.

:akar-api{name="AlertDialogCancel"}

### Action

A button that closes the dialog. These buttons should be distinguished visually from the `AlertDialogCancel` button.

:akar-api{name="AlertDialogAction"}

### Title

An accessible name to be announced when the dialog is opened. Alternatively, you can provide `aria-label` or `aria-labelledby` to `AlertDialogContent` and exclude this component.

:akar-api{name="AlertDialogTitle"}

### Description

An accessible description to be announced when the dialog is opened. Alternatively, you can provide `aria-describedby` to `AlertDialogContent` and exclude this component.

:akar-api{name="AlertDialogDescription"}

## Examples

### Close after asynchronous form submission

Use the controlled props to programmatically close the Alert Dialog after an async operation has completed.

```vue{14,15,19,25-29}
<script setup>
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'akar'

const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
const open = ref(false)
</script>

<template>
  <AlertDialogRoot v-model:open="open">
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <form
          @submit.prevent="
            (event) => {
              wait().then(() => open = false);
            }
          "
        >
          <!-- some inputs -->
          <button type="submit">
            Submit
          </button>
        </form>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
```

<br />

### Custom portal container

Customise the element that your alert dialog portals into.

```vue{4,17}
<script setup>
import { ref } from 'vue'

const container = ref(null)
</script>

<template>
  <div>
    <AlertDialogRoot>
      <AlertDialogTrigger />
      <AlertDialogPortal :to="container">
        <AlertDialogOverlay />
        <AlertDialogContent>...</AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>

    <div ref="container" />
  </div>
</template>
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Opens/closes the dialog."},{"keys":["Enter"],"description":"Opens/closes the dialog."},{"keys":["Tab"],"description":"Moves focus to the next focusable element."},{"keys":["Shift + Tab"],"description":"Moves focus to the previous focusable element."},{"keys":["Esc"],"description":"Closes the dialog and moves focus to `AlertDialogTrigger`."}]
---
::
