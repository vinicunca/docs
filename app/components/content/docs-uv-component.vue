<script lang="ts" setup>
import { uv as uvFunc } from 'unocss-variants';

const props = withDefaults(
  defineProps<{
    as?: string;
    uv?: object;
  }>(),
  {
    as: 'div',
    uv: () => ({}),
  },
);

const styles = uvFunc(props.uv);

</script>

<template>
  <component
    :is="props.as"
    :class="styles()"
  >
    <slot mdc-unwrap="p" />
  </component>
</template>
