<script lang="ts" setup>
import { uv } from 'unocss-variants';
import { computed, useAttrs } from 'vue';

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    as?: string;
    uv?: Record<string, unknown>;
  }>(),
  {
    as: 'button',
    uv: () => ({}),
  },
);

const attrs = useAttrs();
const recipe = computed(() => uv(props.uv as never));
const className = computed(() => {
  const { class: extraClass, ...rest } = attrs;
  return recipe.value({ ...rest, class: extraClass } as never);
});
</script>

<template>
  <component
    :is="props.as"
    v-bind="attrs"
    :class="className"
  >
    <slot mdc-unwrap="p" />
  </component>
</template>
