<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  contentClass: string;
  styleProperty: string;
}>();

const fluidRef = ref(null);
const elementValue = ref('');

function updateValue() {
  if (fluidRef.value) {
    const style = window.getComputedStyle(fluidRef.value);
    elementValue.value = style[props.styleProperty];
  }
}

onMounted(() => {
  updateValue();
  window.addEventListener('resize', updateValue);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateValue);
});
</script>

<template>
  <div class="pt-4 flex flex-col gap-4 color-black">
    <div
      ref="fluidRef"
      class="rounded bg-background-accented"
      :class="contentClass"
    >
      <slot :el-value="elementValue" />
    </div>

    <div class="p-2 rounded bg-background-accented w-fit self-end color-text">
      {{ elementValue }}
    </div>
  </div>
</template>
