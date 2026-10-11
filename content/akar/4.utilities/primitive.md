---
title: Primitive
description: "Compose Akar's functionality onto alternative element types or your own Vue components."
---
When you are building a component, in some cases you might want to allow user to compose some functionalities onto the underlying element, or alternative element. This is where `Primitive` comes in handy as it expose this capability to the user.

## API Reference

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| `as` | `div` | `string \| Component` | The element or component the current element should render as. Can be overwrite by `asChild` |
| `asChild` | `false` | `boolean` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our [Composition](/akar/guides/composition) guide for more details. |

## Usage

### Changing `as` value

If you want to change the default element or component being render, you can set the default `as` when defining the props.

```vue
<script setup lang="ts">
import type { PrimitiveProps } from 'akar';
import { Primitive } from 'akar';

const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'span'
});
</script>

<template>
  <!-- Now this element will be rendered as `span` by default -->
  <Primitive v-bind="props">
    ...
  </Primitive>
</template>
```

### Render `asChild`

Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href="/akar/guides/composition">Composition</a> guide for more details.
