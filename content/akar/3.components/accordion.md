---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal an associated section of content.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Accordion"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Accordion"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation.","Supports horizontal/vertical orientation.","Supports Right to Left direction.","Can expand one or multiple items.","Can be controlled or uncontrolled."]
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
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'akar';
</script>

<template>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeader>
        <AccordionTrigger />
      </AccordionHeader>
      <AccordionContent />
    </AccordionItem>
  </AccordionRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an Accordion

:akar-api{name="AccordionRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Item

Contains all the parts of a collapsible section.

:akar-api{name="AccordionItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Header

Wraps an `AccordionTrigger`. Use the `asChild` prop to update it to the appropriate heading level for your page.

:akar-api{name="AccordionHeader"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Trigger

Toggles the collapsed state of its associated item. It should be nested inside of an `AccordionHeader`.

:akar-api{name="AccordionTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Content

Contains the collapsible content for an item.

:akar-api{name="AccordionContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-accordion-content-width","description":"The width of the content when it opens/closes"},{"cssVariable":"--akar-accordion-content-height","description":"The height of the content when it opens/closes"}]
---
::

## Examples

### Expanded by default

Use the `defaultValue` prop to define the open item by default.

```vue{4}
<template>
  <AccordionRoot
    type="single"
    default-value="item-2"
  >
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Allow collapsing all items

Use the `collapsible` prop to allow all items to close.

```vue{4}
<template>
  <AccordionRoot
    type="single"
    collapsible
  >
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Multiple items open at the same time

Set the `type` prop to `multiple` to enable opening multiple items at once.

```vue{2}
<template>
  <AccordionRoot type="multiple">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Rotated icon when open

You can add extra decorative elements, such as chevrons, and rotate it when the item is open.

```vue{16}
// index.vue
<script setup>
import { Icon } from '@iconify/vue'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger class="AccordionTrigger">
          Trigger text
          <Icon
            icon="radix-icons:chevron-down"
            class="AccordionChevron"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>…</AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css{5-7}
/* styles.css */
.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state="open"] > .AccordionChevron {
  transform: rotate(180deg);
}
```

### Horizontal orientation

Use the `orientation` prop to create a horizontal Accordion

```vue{2}
<template>
  <AccordionRoot orientation="horizontal">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Animating content size

Use the `--akar-accordion-content-width` and/or `--akar-accordion-content-height` CSS variables to animate the size of the content when it opens/closes:

```vue{11}
// index.vue
<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>…</AccordionHeader>
      <AccordionContent class="AccordionContent">
        …
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css{17,23}
/* styles.css */
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--akar-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--akar-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

### Render content even when closed

By default hidden content will be removed, use `:unmountOnHide="false"` to keep the content always available.

This will also allow browser to search the hidden text, and open the accordion.

```vue{2}
<template>
  <AccordionRoot :unmount-on-hide="false">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"When focus is on an `AccordionTrigger` of a collapsed section, expands the section."},{"keys":["Enter"],"description":"When focus is on an `AccordionTrigger` of a collapsed section, expands the section."},{"keys":["Tab"],"description":"Moves focus to the next focusable element."},{"keys":["Shift + Tab"],"description":"Moves focus to the previous focusable element."},{"keys":["ArrowDown"],"description":"Moves focus to the next `AccordionTrigger` when `orientation` is `vertical`."},{"keys":["ArrowUp"],"description":"Moves focus to the previous `AccordionTrigger` when `orientation` is `vertical`."},{"keys":["ArrowRight"],"description":"Moves focus to the next `AccordionTrigger` when `orientation` is `horizontal`."},{"keys":["ArrowLeft"],"description":"Moves focus to the previous `AccordionTrigger` when `orientation` is `horizontal`."},{"keys":["Home"],"description":"When focus is on an `AccordionTrigger`, moves focus to the start `AccordionTrigger`."},{"keys":["End"],"description":"When focus is on an `AccordionTrigger`, moves focus to the last `AccordionTrigger`."}]
---
::
