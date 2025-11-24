<script lang="ts" setup>
import { uv as uvFunc } from 'unocss-variants';
import { useAttrs } from 'vue';

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

const attrs = useAttrs();
</script>

<template>
  <component
    :is="props.as"
    :class="styles({ ...attrs })"
  >
    <slot mdc-unwrap="p" />
  </component>
</template>
