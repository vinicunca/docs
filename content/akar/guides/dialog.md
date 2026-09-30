---
title: Dialog
description: Compose an accessible modal dialog with Akar primitives.
package: akar
---

Dialog places content above the page and manages focus while the modal is open. Use `DialogTitle` to give assistive technology a name for the dialog; add `DialogDescription` when more context is useful.

## Anatomy

```vue
<script setup lang="ts">
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
    <DialogTrigger>Open dialog</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Account settings</DialogTitle>
        <DialogDescription>Update your account details.</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

`DialogRoot` supports controlled and uncontrolled open state. See the [Dialog component reference](/akar/components/dialog) for its current props, slots, and events.

This guide was adapted from the [Reka UI Dialog guide](https://reka-ui.com/docs/components/dialog) at commit `78089a5fc90371196d533301a00c955be95c2b39`, then checked against Akar's exported Dialog components. The upstream guide is MIT licensed; [Reka UI's license](https://github.com/unovue/reka-ui/blob/main/LICENSE) applies to adapted material.
