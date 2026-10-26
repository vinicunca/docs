---
title: Tags Input
description: Tags input render tags inside an input, followed by an actual text input.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/TagsInput"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="TagsInput"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Full keyboard navigation.","Limit the number of tags.","Accept value from clipboard.","Clear button to reset all tags values."]
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
import { TagsInputClear, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'akar';
</script>

<template>
  <TagsInputRoot>
    <TagsInputItem>
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput />
    <TagsInputClear />
  </TagsInputRoot>
</template>
```

## API Reference

### Root

Contains all the tags input component parts.

:akar-api{name="TagsInputRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-focused]","values":"Present when focus on input"},{"attribute":"[data-invalid]","values":"Present when input value is invalid"}]
---
::

### Item

The component that contains the tag.

:akar-api{name="TagsInputItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemText

The textual part of the tag. Important for accessibility.

:akar-api{name="TagsInputItemText"}

### ItemDelete

The button that delete the associate tag.

:akar-api{name="TagsInputItemDelete"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Input

The input element for the tags input.

:akar-api{name="TagsInputInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-invalid]","values":"Present when input value is invalid"}]
---
::

### Clear

The button that remove all tags.

:akar-api{name="TagsInputClear"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

## Examples

### Paste behavior

You can automatically add tags on paste by passing the `add-on-paste` prop.

```vue{8}
<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'akar'
</script>

<template>
  <TagsInputRoot
    v-model="modelValue"
    add-on-paste
  >
    …
  </TagsInputRoot>
</template>
```

### Multiple delimiters

You can pass `RegExp` as `delimiter` to allow multiple characters to trigger addition of a new tag. When `add-on-paste` is passed it will be also used to split tags for `@paste` event.

```vue{4-5,11}
<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'akar'

// split by space, comma, semicolon, tab, or newline
const delimiter = /[ ,;\t\n\r]+/
</script>

<template>
  <TagsInputRoot
    v-model="modelValue"
    :delimiter="delimiter"
    add-on-paste
  >
    …
  </TagsInputRoot>
</template>
```

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Delete"],"description":" When tag is active, remove it and set the tag on right active."},{"keys":["Backspace"],"description":" When tag is active, remove it and set the tag on left active. If there are no tags to the left, either the next tags gets focus, or the input."},{"keys":["ArrowRight"],"description":" Set the next tag active."},{"keys":["ArrowLeft"],"description":" Set the previous tag active."},{"keys":["Home"],"description":" Set the first tag active"},{"keys":["End"],"description":" Set the last tag active"}]
---
::
