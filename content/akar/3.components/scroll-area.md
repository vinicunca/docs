---
title: Scroll Area
description: Augments native scroll functionality for custom, cross-browser styling.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/ScrollArea"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## ScrollArea

:akar-preview{name="ScrollArea"}

## Features

::akar-highlights
---
features: ["Scrollbar sits on top of the scrollable content, taking up no space.","Scrolling is native; no underlying position movements via CSS transformations.","Shims pointer behaviors only when interacting with the controls, so keyboard controls are unaffected.","Supports Right to Left direction."]
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
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'akar';
</script>

<template>
  <ScrollAreaRoot>
    <ScrollAreaViewport />
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a scroll area.

:akar-api{name="ScrollAreaRoot"}

### Viewport

The viewport area of the scroll area.

:akar-api{name="ScrollAreaViewport"}

### Scrollbar

The vertical scrollbar. Add a second `Scrollbar` with an `orientation` prop to enable horizontal scrolling.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="ScrollAreaScrollbar"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["visible","hidden"]},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Thumb

The thumb to be used in `ScrollAreaScrollbar`.

:akar-api{name="ScrollAreaThumb"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["visible","hidden"]}]
---
::

### Corner

The corner where both vertical and horizontal scrollbars meet.

:akar-api{name="ScrollAreaCorner"}

## Examples
### Custom Scroll
Use the exposed `viewport` to modify / or set the scroll position outside default methods
```vue{4,18}
<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'akar'

const scrollArea = useTemplateRef('scrollArea')
function scrollToBottom() {
  const viewport = scrollArea.value?.viewport
  if (viewport) {
    const top = scrollArea.value?.$el.scrollHeight
    viewport.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <ScrollAreaRoot ref="scrollArea">
    <ScrollAreaViewport />
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
```

## Accessibility

In most cases, it's best to rely on native scrolling and work with the customization options available in CSS. When that isn't enough, `ScrollArea` provides additional customizability while maintaining the browser's native scroll behavior (as well as accessibility features, like keyboard scrolling).

### Keyboard Interactions

Scrolling via keyboard is supported by default because the component relies on native scrolling. Specific keyboard interactions may differ between platforms, so we do not specify them here or add specific event listeners to handle scrolling via key events.
