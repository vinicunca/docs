---
title: Roving Focus
description: Utility component that implements the roving tabindex method to manage focus between items.
---
:akar-preview{name="RovingFocus"}

::note
Learn more about roving tabindex in [Keyboard Navigation Inside Composite Components](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#x6-6-keyboard-navigation-inside-components)
::

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { RovingFocusGroup, RovingFocusItem } from 'akar';
</script>

<template>
  <RovingFocusGroup>
    <RovingFocusItem />
  </RovingFocusGroup>
</template>
```

## API Reference

### Group

Contains all the parts of a Roving Focus

:akar-api{name="RovingFocusGroup"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal",null]}]
---
::

### Item

The item that would inherit the roving tabindex

:akar-api{name="RovingFocusItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-active]","values":"Present when not active"},{"attribute":"[data-disabled]","values":"Present when not focusable"},{"attribute":"[data-orientation]","values":["vertical","horizontal",null]}]
---
::

## Examples

### Vertical orientation

```vue{2}
<template>
  <RovingFocusGroup :orientation="'vertical'">
    …
  </RovingFocusGroup>
</template>
```

### Loop

Use `loop` property to enable roving from last item to the first item, and vice versa.

```vue{2}
<template>
  <RovingFocusGroup loop>
    …
  </RovingFocusGroup>
</template>
```

### Initial focus item

Set `active` prop to item to initially focused item.

```vue{4}
<template>
  <RovingFocusGroup>
    <RovingFocusItem>1</RovingFocusItem>
    <RovingFocusItem active>2</RovingFocusItem>
    <RovingFocusItem>3</RovingFocusItem>
  </RovingFocusGroup>
</template>
```

### Unfocusable item

Set `focusable="false"` prop to item will prevent them from being focused.

```vue{4}
<template>
  <RovingFocusGroup>
    <RovingFocusItem>1</RovingFocusItem>
    <RovingFocusItem :focusable="false">2</RovingFocusItem>
    <RovingFocusItem>3</RovingFocusItem>
  </RovingFocusGroup>
</template>
```

## Accessibility

Adheres to the [Keyboard Navigation Inside Composite Components](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#x6-6-keyboard-navigation-inside-components).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["ArrowDown"],"description":"Moves focus to the next roving focus item in the group."},{"keys":["ArrowRight"],"description":"Moves focus to the next roving focus item in the group."},{"keys":["ArrowUp"],"description":"Moves focus to the previous roving focus item in the group."},{"keys":["ArrowLeft"],"description":"Moves focus to the previous roving focus item in the group."},{"keys":["Space","Enter"],"description":"Triggers click on the roving focus item."}]
---
::
