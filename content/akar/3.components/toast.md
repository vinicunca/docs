---
title: Toast
description: A succinct message that is displayed temporarily.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/TR/wai-aria/#aria-live"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Toast"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Toast"}

::akar-highlights
---
features: ["Automatically closes.","Pauses closing on hover, focus and window blur.","Supports hotkey to jump to toast viewport.","Supports closing via swipe gesture.","Exposes CSS variables for swipe gesture animations.","Can be controlled or uncontrolled."]
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
<script setup lang="ts">
import { ToastAction, ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'akar';
</script>

<template>
  <ToastProvider>
    <ToastRoot>
      <ToastTitle />
      <ToastDescription />
      <ToastAction />
      <ToastClose />
    </ToastRoot>

    <ToastViewport />
  </ToastProvider>
</template>
```

## API Reference

### Provider

The provider that wraps your toasts and toast viewport. It usually wraps the application.

:akar-api{name="ToastProvider"}

### Viewport

The fixed area where toasts appear. Users can jump to the viewport by pressing a hotkey. It is up to you to ensure the discoverability of the hotkey for keyboard users.

:akar-api{name="ToastViewport"}

### Root

The toast that automatically closes. It should not be held open to [acquire a user response](/akar/components/toast#action).

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="ToastRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-swipe]","values":["start","move","cancel","end"]},{"attribute":"[data-swipe-direction]","values":["up","down","left","right"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-toast-swipe-move-x","description":"The offset position of the toast when horizontally swiping"},{"cssVariable":"--akar-toast-swipe-move-y","description":"The offset position of the toast when vertically swiping"},{"cssVariable":"--akar-toast-swipe-end-x","description":"The offset end position of the toast after horizontally swiping"},{"cssVariable":"--akar-toast-swipe-end-y","description":"The offset end position of the toast after vertically swiping"}]
---
::

### Portal

When used, portals the content part into the `body`.

:akar-api{name="ToastPortal"}

### Title

An optional title for the toast

:akar-api{name="ToastTitle"}

### Description

The toast message.

:akar-api{name="ToastDescription"}

### Action

An action that is safe to ignore to ensure users are not expected to complete tasks with unexpected side effects as a result of a [time limit](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html).

When obtaining a user response is necessary, portal an ["AlertDialog"](/akar/components/alert-dialog) styled as a toast into the viewport instead.

By default, clicking `ToastAction` dismisses the toast. Set `closeOnClick` to `false` when the action should run while keeping the toast visible.

```vue
<template>
  <ToastAction
    alt-text="Retry sending the message"
    :close-on-click="false"
    @click="retry"
  >
    Retry
  </ToastAction>
</template>
```

:akar-api{name="ToastAction"}

### Close

A button that allows users to dismiss the toast before its duration has elapsed.

:akar-api{name="ToastClose"}

## Examples

### Custom hotkey

Override the default hotkey using the `event.code` value for each key from [keycode.info](https://keycode.info/).

```vue{4}
<template>
  <ToastProvider>
    ...
    <ToastViewport :hotkey="['altKey', 'KeyT']" />
  </ToastProvider>
</template>
```

### Custom duration

Customise the duration of a toast to override the provider value.

```vue{2}
<template>
  <ToastRoot :duration="3000">
    <ToastDescription>Saved!</ToastDescription>
  </ToastRoot>
</template>
```

### Duplicate toasts

When a toast must appear every time a user clicks a button, use state to render multiple instances of the same toast (see below). Alternatively, you can abstract the parts to create your own [imperative API](/akar/components/toast#imperative-api).

```vue{3,8}
<template>
  <div>
    <form @submit="count++">
      ...
      <button>save</button>
    </form>

    <ToastRoot v-for="(_, index) in count" :key="index">
      <ToastDescription>Saved!</ToastDescription>
    </ToastRoot>
  </div>
</template>
```

### Animating swipe gesture

Combine `--akar-toast-swipe-move-[x|y]` and `--akar-toast-swipe-end-[x|y]` CSS variables with `data-swipe="[start|move|cancel|end]"` attributes to animate a swipe to close gesture. Here's an example:

```vue{2}
<template>
  <ToastProvider swipe-direction="right">
    <ToastRoot class="ToastRoot">
      ...
    </ToastRoot>
    <ToastViewport />
  </ToastProvider>
</template>
```

```css{2,3,5,9,15}
/* styles.css */
.ToastRoot[data-swipe='move'] {
  transform: translateX(var(--akar-toast-swipe-move-x));
}
.ToastRoot[data-swipe='cancel'] {
  transform: translateX(0);
  transition: transform 200ms ease-out;
}
.ToastRoot[data-swipe='end'] {
  animation: slideRight 100ms ease-out;
}

@keyframes slideRight {
  from {
    transform: translateX(var(--akar-toast-swipe-end-x));
  }
  to {
    transform: translateX(100%);
  }
}
```

## Accessibility

Adheres to the [`aria-live` requirements](https://www.w3.org/TR/wai-aria/#aria-live).

### Sensitivity

Control the sensitivity of the toast for screen readers using the `type` prop.

For toasts that are the result of a user action, choose `foreground`. Toasts generated from background tasks should use `background`.

#### Foreground

Foreground toasts are announced immediately. Assistive technologies may choose to clear previously queued messages when a foreground toast appears. Try to avoid stacking distinct foreground toasts at the same time.

#### Background

Background toasts are announced at the next graceful opportunity, for example, when the screen reader has finished reading its current sentence. They do not clear queued messages so overusing them can be perceived as a laggy user experience for screen reader users when used in response to a user interaction.

```vue{2,7}
<template>
  <ToastRoot type="foreground">
    <ToastDescription>File removed successfully.</ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>

  <ToastRoot type="background">
    <ToastDescription>We've just released Akar 2.0.</ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```

### Alternative action

Use the `altText` prop on the `Action` to instruct an alternative way of actioning the toast to screen reader users.

You can direct the user to a permanent place in your application where they can action it or implement your own custom hotkey logic. If implementing the latter, use `foreground` type to announce immediately and increase the duration to give the user ample time.

```vue{5,11,13}
<template>
  <ToastRoot type="background">
    <ToastTitle>Upgrade Available!</ToastTitle>
    <ToastDescription>We've just released Akar 2.0.</ToastDescription>
    <ToastAction alt-text="Goto account settings to upgrade">
      Upgrade
    </ToastAction>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>

  <ToastRoot type="foreground" :duration="10000">
    <ToastDescription>File removed successfully.</ToastDescription>
    <ToastAction alt-text="Undo (Alt+U)">
      Undo <kbd>Alt</kbd>+<kbd>U</kbd>
    </ToastAction>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```

### Close icon button

When providing an icon (or font icon), remember to label it correctly for screen reader users.

```vue{4-5}
<template>
  <ToastRoot type="foreground">
    <ToastDescription>Saved!</ToastDescription>
    <ToastClose aria-label="Close">
      <span aria-hidden="true">×
    </ToastClose>
  </ToastRoot>
</template>
```

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["F8"],"description":"Focuses toasts viewport."},{"keys":["Tab"],"description":"Moves focus to the next focusable element."},{"keys":["Shift + Tab"],"description":"Moves focus to the previous focusable element."},{"keys":["Space"],"description":" When focus is on a `ToastAction`, closes the toast when `closeOnClick` is `true`. When focus is on `ToastClose`, closes the toast. "},{"keys":["Enter"],"description":" When focus is on a `ToastAction`, closes the toast when `closeOnClick` is `true`. When focus is on `ToastClose`, closes the toast. "},{"keys":["Esc"],"description":" When focus is on a `Toast`, closes the toast "}]
---
::

## Custom APIs

### Abstract parts

Create your own API by abstracting the primitive parts into your own component.

#### Usage

```vue
<script setup lang="ts">
import Toast from './your-toast.vue';
</script>

<template>
  <Toast
    title="Upgrade available"
    content="We've just released Radix 3.0!"
  >
    <button @click="handleUpgrade">
      Upgrade
    </button>
  </Toast>
</template>
```

#### Implementation

```vue
// your-toast.vue
<script setup lang="ts">
import { ToastAction, ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'akar';

defineProps<{
  title: string;
  content: string;
}>();
</script>

<template>
  <ToastRoot>
    <ToastTitle v-if="title">
      {{ title }}
    </ToastTitle>
    <ToastDescription v-if="content">
      {{ content }}
    </ToastDescription>
    <ToastAction
      as-child
      alt-text="toast"
    >
      <slot />
    </ToastAction>
    <ToastClose aria-label="Close">
      <span aria-hidden="true">×
      </span>
    </ToastClose>
  </ToastRoot>
</template>
```

### Imperative API

Create your own imperative API to allow [toast duplication](/akar/components/toast#duplicate-toasts) if preferred.

#### Usage

```vue
<script setup lang="ts">
import Toast from './your-toast.vue';

const savedRef = ref<InstanceType<typeof Toast>>();
</script>

<template>
  <div>
    <form @submit="savedRef.publish()">
      ...
    </form>
    <Toast ref="savedRef">
      Saved successfully!
    </Toast>
  </div>
</template>
```

#### Implementation

```vue
// your-toast.vue
<script setup lang="ts">
import { ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'akar';
import { ref } from 'vue';

const count = ref(0);

function publish() {
  count.value++;
}

defineExpose({
  publish
});
</script>

<template>
  <ToastRoot
    v-for="index in count"
    :key="index"
  >
    <ToastDescription>
      <slot />
    </ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```
