---
title: Collapsible
description: An interactive component which expands/collapses a panel.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Collapsible"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Collapsible"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Can be controlled or uncontrolled."]
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

Import the components and piece the parts together.

```vue
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'akar';
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger />
    <CollapsibleContent />
  </CollapsibleRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a collapsible

:akar-api{name="CollapsibleRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Trigger

The button that toggles the collapsible

:akar-api{name="CollapsibleTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Content

The component that contains the collapsible content.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="CollapsibleContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-collapsible-content-width","description":"The width of the content when it opens/closes"},{"cssVariable":"--akar-collapsible-content-height","description":"The height of the content when it opens/closes"}]
---
::

## Examples

### Animating content size

Use the `--akar-collapsible-content-width` and/or `--akar-collapsible-content-height` CSS variables to animate the size of the content when it opens/closes. Here's a demo:

```vue{10}
// index.vue
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger>…</CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
      …
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
```

```css{17,23}
/* styles.css */
.CollapsibleContent {
  overflow: hidden;
}
.CollapsibleContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.CollapsibleContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--akar-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--akar-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
```

### Render content even when collapsed

By default hidden content will be removed, use `:unmountOnHide="false"` to keep the content always available.

This will also allow browser to search the hidden text, and open the collapsible.

```vue{6}
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'akar'
</script>

<template>
  <CollapsibleRoot :unmount-on-hide="false">
    …
  </CollapsibleRoot>
</template>
```

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Opens/closes the collapsible"},{"keys":["Enter"],"description":"Opens/closes the collapsible"}]
---
::
