<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'akar';
import { onMounted, ref } from 'vue';
import './styles.css';

const progressValue = ref(10);

onMounted(() => {
  const timer = setTimeout(() => (progressValue.value = 66), 500);
  return () => clearTimeout(timer);
});
</script>

<template>
  <div class="akar-demo akar-demo-Progress">
    <ProgressRoot
      v-model="progressValue"
      class="ProgressRoot"
      style="transform: translateZ(0)"
    >
      <ProgressIndicator
        class="ProgressIndicator"
        :style="`transform: translateX(-${100 - progressValue}%)`"
      />
    </ProgressRoot>
  </div>
</template>
