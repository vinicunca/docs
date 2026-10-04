---
title: Popover
description: Displays rich content in a portal, triggered by a button.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Popover"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Popover"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Customize side, alignment, offsets, collision handling.","Optionally render a pointing arrow.","Focus is fully managed and customizable.","Supports modal and non-modal modes.","Dismissing and layering behavior is highly customizable."]
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
import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger />
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a popover.

:akar-api{name="PopoverRoot"}

### Trigger

The button that toggles the popover. By default, the `PopoverContent` will position itself against the trigger.

:akar-api{name="PopoverTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Anchor

An optional element to position the `PopoverContent` against. If this part is not used, the content will position alongside the <code>PopoverTrigger</code>.

:akar-api{name="PopoverAnchor"}

### Portal

When used, portals the content part into the `body`.

:akar-api{name="PopoverPortal"}

### Content

The component that pops out when the popover is open.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="PopoverContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-popover-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets"},{"cssVariable":"--akar-popover-content-available-width","description":"The remaining width between the trigger and the boundary edge"},{"cssVariable":"--akar-popover-content-available-height","description":"The remaining height between the trigger and the boundary edge"},{"cssVariable":"--akar-popover-trigger-width","description":"The width of the trigger"},{"cssVariable":"--akar-popover-trigger-height","description":"The height of the trigger"}]
---
::

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `PopoverContent`. Must be rendered inside `PopoverContent`.

:akar-api{name="PopoverArrow"}

### Close

The button that closes an open popover.

:akar-api{name="PopoverClose"}

## Examples

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--akar-popover-trigger-width` and `--akar-popover-content-available-height` to support this. Use them to constrain the content dimensions.

```vue{10,11}
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        class="PopoverContent"
        :side-offset="5"
      >
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css{3,4}
/* styles.css */
.PopoverContent {
  width: var(--akar-popover-trigger-width);
  max-height: var(--akar-popover-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--akar-popover-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue{9}
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css{3}
/* styles.css */
.PopoverContent {
  transform-origin: var(--akar-popover-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue{9}
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css{6-11}
/* styles.css */
.PopoverContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.PopoverContent[data-side="top"] {
  animation-name: slideUp;
}
.PopoverContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### With custom anchor

You can anchor the content to another element if you do not want to use the trigger as the anchor.

```vue{7-11}
<script setup>
import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot>
    <PopoverAnchor as-child>
      <div class="Row">
        Row as anchor <PopoverTrigger>Trigger</PopoverTrigger>
      </div>
    </PopoverAnchor>

    <PopoverPortal>
      <PopoverContent>…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.Row {
  background-color: gainsboro;
  padding: 20px;
}
```

### Close using slot props

Alternatively, you can use the `close` method provided by the `PopoverRoot` slot props to programmatically close the popover.

```vue{4,8,16-20}
<script setup>
import { PopoverAnchor, PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
</script>

<template>
  <PopoverRoot v-slot="{ close }">
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <button type="submit" @click="close">
          Submit
        </button>
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Opens/closes the popover."},{"keys":["Enter"],"description":"Opens/closes the popover."},{"keys":["Tab"],"description":"Moves focus to the next focusable element"},{"keys":["Shift + Tab"],"description":"Moves focus to the previous focusable element"},{"keys":["Esc"],"description":" Closes the popover and moves focus to `PopoverTrigger`."}]
---
::

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

#### Abstract the arrow and set default configuration

This example abstracts the `PopoverArrow` part and sets a default `sideOffset` configuration.

#### Usage

```vue
<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from './your-popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Popover trigger</PopoverTrigger>
    <PopoverContent>Popover content</PopoverContent>
  </Popover>
</template>
```

#### Implementation

```ts
// your-popover.ts
export { default as PopoverContent } from 'PopoverContent.vue'

export { PopoverRoot as Popover, PopoverTrigger } from 'akar'
```

```vue
<!-- PopoverContent.vue -->
<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'akar'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'akar'

const props = defineProps<PopoverContentProps>()
const emits = defineEmits<PopoverContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
```
