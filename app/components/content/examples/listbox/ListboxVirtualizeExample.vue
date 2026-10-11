<script setup lang="ts">
import type { ListboxItem } from 'pohon-ui';

const items: Array<ListboxItem> = Array.from({ length: 1000 }, (_, i) => ({
  label: `Item ${i + 1}`,
  icon: 'i-lucide-file',
  value: i + 1,
}));

const value = ref<Array<ListboxItem>>([]);
</script>

<template>
  <PListbox
    v-model="value"
    :items="items"
    multiple
    virtualize
    class="w-full"
  />
</template>
