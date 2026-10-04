---
title: Tag Group
description: A focusable list of tags that can be navigated, selected and removed with the keyboard.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/TagGroup"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="TagGroup"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation, including typeahead.","Supports no, single or multiple selection.","Removable with the keyboard or a delete button.","Keeps focus on a neighbouring tag after removal.","Can be controlled or uncontrolled.","Labelled and described by an ancestor Field."]
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
import { TagGroupItem, TagGroupItemDelete, TagGroupItemText, TagGroupRoot } from 'akar'
</script>

<template>
  <TagGroupRoot>
    <TagGroupItem>
      <TagGroupItemText />
      <TagGroupItemDelete />
    </TagGroupItem>
  </TagGroupRoot>
</template>
```

## API Reference

### Root

Contains all the tags. Renders a `grid`, or a `group` when there are no tags.

:akar-api{name="TagGroupRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-empty]","values":"Present when there are no tags"}]
---
::

### Item

A tag. Pressing <kbd>Delete</kbd> or <kbd>Backspace</kbd> on it removes it.

:akar-api{name="TagGroupItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemText

The text of the tag. Used for typeahead unless the item has a `textValue`.

:akar-api{name="TagGroupItemText"}

### ItemDelete

The button that removes its tag. It is labelled "Remove" followed by the tag's name; pass an `aria-label` to translate it.

:akar-api{name="TagGroupItemDelete"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Examples

### Removing tags

Tags are removable when you listen to the `remove` event. It receives the values to remove, which you remove from your own list. Removing a selected tag with the keyboard removes every selected tag.

```vue{5-7,11}
<script setup>
import { ref } from 'vue'

const tags = ref(['News', 'Travel', 'Gaming'])
function onRemove(values) {
  tags.value = tags.value.filter(tag => !values.includes(tag))
}
</script>

<template>
  <TagGroupRoot aria-label="Categories" @remove="onRemove">
    <TagGroupItem v-for="tag in tags" :key="tag" :value="tag">
      <TagGroupItemText>{{ tag }}</TagGroupItemText>
      <TagGroupItemDelete>×</TagGroupItemDelete>
    </TagGroupItem>
  </TagGroupRoot>
</template>
```

### Selection

Set `selectionMode` to `single` or `multiple` to make tags selectable with a click, <kbd>Space</kbd> or <kbd>Enter</kbd>. `v-model` holds the selected value, or an array of values when `multiple`.

```vue{2,5}
<template>
  <TagGroupRoot v-model="selected" selection-mode="multiple" aria-label="Amenities">
    <TagGroupItem v-for="amenity in amenities" :key="amenity" :value="amenity">
      <TagGroupItemText>{{ amenity }}</TagGroupItemText>
    </TagGroupItem>
  </TagGroupRoot>
</template>
```

### Empty state

When there are no tags, the root renders as a focusable `group` with a `data-empty` attribute. Render any empty content inside it.

```vue{6}
<template>
  <TagGroupRoot aria-label="Categories" @remove="onRemove">
    <TagGroupItem v-for="tag in tags" :key="tag" :value="tag">
      <TagGroupItemText>{{ tag }}</TagGroupItemText>
    </TagGroupItem>
    <span v-if="!tags.length">No categories
  </TagGroupRoot>
</template>
```

### With a label and description

Place the root in a `FieldRoot` to label and describe it.

```vue{2-3,7}
<template>
  <FieldRoot>
    <FieldLabel :native-label="false">
      Categories
    </FieldLabel>
    <TagGroupRoot @remove="onRemove">
      <!-- ... -->
    </TagGroupRoot>
    <FieldDescription>Your selected categories.</FieldDescription>
  </FieldRoot>
</template>
```

## Accessibility

Adheres to the [Grid WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/), with each tag a `row`. When using `asChild` on `TagGroupItem`, wrap the tag's content in an element with `role="gridcell"`.

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"Moves focus into the tag group, to the focused tag's delete button, then out of the tag group."},{"keys":["ArrowRight","ArrowDown"],"description":"Moves focus to the next tag."},{"keys":["ArrowLeft","ArrowUp"],"description":"Moves focus to the previous tag."},{"keys":["Home","End"],"description":"Moves focus to the first or last tag."},{"keys":["Space","Enter"],"description":"When selectable, toggles the focused tag's selection."},{"keys":["Delete","Backspace"],"description":"Removes the focused tag, or every selected tag when the focused tag is selected."},{"keys":["Escape"],"description":"Clears the selection."}]
---
::
