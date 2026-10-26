---
title: useForwardPropsEmits
description: Combinations for useForwardProps & useEmitAsProps
---
This composable is just a wrapper for [useForwardProps](/akar/utilities/use-forward-props) & [useEmitAsProps](/akar/utilities/use-emit-as-props.html) composables. Doing so it returns only 1 object that is designed to be use with `v-bind` directly.

## Usage

```vue
<script setup lang="ts">
import { useForwardPropsEmits } from 'akar';

const props = defineProps<CompEmitProps>();
const emits = defineEmits<CompEmitEmits>();
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Comp v-bind="forwarded">
    ...
  </Comp>
</template>
```
