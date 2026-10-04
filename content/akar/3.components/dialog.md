---
title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Dialog"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Dialog"}

## Features

::akar-highlights
---
features: ["Supports modal and non-modal modes.","Focus is automatically trapped when modal.","Can be controlled or uncontrolled."," Manages screen reader announcements with `Title` and`Description` components.","Esc closes the component automatically."]
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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'akar'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a dialog

:akar-api{name="DialogRoot"}

### Trigger

The button that opens the dialog

:akar-api{name="DialogTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Portal

When used, portals your overlay and content parts into the `body`.

:akar-api{name="DialogPortal"}

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="DialogOverlay"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Content

Contains content to be rendered in the open dialog

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="DialogContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Close

The button that closes the dialog

:akar-api{name="DialogClose"}

### Title

An accessible title to be announced when the dialog is opened.

If you want to hide the title, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`.

:akar-api{name="DialogTitle"}

### Description

An optional accessible description to be announced when the dialog is opened.

If you want to hide the description, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `:aria-describedby="undefined"` to `DialogContent`.

:akar-api{name="DialogDescription"}

## Examples

### Nested dialog

You can nest multiple layers of dialogs.

:akar-preview{name="DialogNested"}

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```vue{4,5,15-19,22-24}
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'akar'

const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
const open = ref(false)
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form
          @submit.prevent="
            (event) => {
              wait().then(() => (open = false));
            }
          "
        >
          <!-- some inputs -->
          <button type="submit">
            Submit
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### Scrollable overlay

Move the content inside the overlay to render a dialog with overflow.

```vue
// index.vue
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay class="DialogOverlay">
        <DialogContent class="DialogContent">
          ...
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
```

```css
/* styles.css */
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.DialogContent {
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 4px;
}
```

However, there's a caveat to this approach, where user might click on the scrollbar and close the dialog unintentionally. There's no universal solution that would fix this issue for now, however you can add the following snippet to `DialogContent` to prevent closing of modal when clicking on scrollbar.

```vue
<DialogContent
  @pointer-down-outside="(event) => {
    const originalEvent = event.detail.originalEvent;
    const target = originalEvent.target as HTMLElement;
    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
      event.preventDefault();
    }
  }"
>
```

### Custom portal container

Customise the element that your dialog portals into.

```vue{4,11,17}
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'akar'

const container = ref(null)
</script>

<template>
  <div>
    <DialogRoot>
      <DialogTrigger />
      <DialogPortal to="container">
        <DialogOverlay />
        <DialogContent>...</DialogContent>
      </DialogPortal>
    </DialogRoot>

    <div ref="container" />
  </div>
</template>
```

### Disable close on interaction outside

If a global toast (or similar overlay) should not dismiss the dialog when clicked, cancel `interact-outside` when the event target is inside that overlay.

```vue
<DialogContent
  @interact-outside="(event) => {
    const target = event.target as HTMLElement
    if (target?.closest('[data-sonner-toaster]')) event.preventDefault()
  }"
>
  …
</DialogContent>
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Close icon button

When providing an icon (or font icon), remember to label it correctly for screen reader users.

```vue{9-11}
<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose aria-label="Close">
          <span aria-hidden="true">×
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### Close using slot props

Alternatively, you can use the `close` method provided by the `DialogRoot` slot props to programmatically close the dialog.

```vue{4,8,16-20}
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'akar'
</script>

<template>
  <DialogRoot v-slot="{ close }">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form>
          <!-- some inputs -->
          <button type="submit" @click="close">
            Submit
          </button>
        </form>
      </DialogContent>
      <DialogFooter>
        <button type="submit" @click="close">
          Submit
        </button>
      </DialogFooter>
    </DialogPortal>
  </DialogRoot>
</template>
```

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Opens/closes the dialog"},{"keys":["Enter"],"description":"Opens/closes the dialog"},{"keys":["Tab"],"description":"Moves focus to the next focusable element."},{"keys":["Shift + Tab"],"description":"Moves focus to the previous focusable element."},{"keys":["Esc"],"description":"Closes the dialog and moves focus to `DialogTrigger`."}]
---
::

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the overlay and the close button

This example abstracts the `DialogOverlay` and `DialogClose` parts.

#### Usage

```vue
<script setup>
import { Dialog, DialogContent, DialogTrigger } from './your-dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Dialog trigger</DialogTrigger>
    <DialogContent>Dialog Content</DialogContent>
  </Dialog>
</template>
```

#### Implementation

```ts
// your-dialog.ts
export { default as DialogContent } from 'DialogContent.vue'
export { DialogRoot as Dialog, DialogTrigger } from 'akar'
```

```vue
<!-- DialogContent.vue -->
<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'akar'
import { Cross2Icon } from '@radix-icons/vue'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'akar'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent v-bind="forwarded">
      <slot />

      <DialogClose>
        <Cross2Icon />
        <span class="sr-only">Close
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
```
