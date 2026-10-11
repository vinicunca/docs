<script setup lang="ts">
import type { TreeItem } from 'pohon-ui';

const items: Array<TreeItem> = Array(1000).fill(0).map((_, i) => ({
  label: `Item ${i + 1}`,
  children: [
    { label: `Child ${i + 1}-1`, icon: 'i-lucide-file' },
    { label: `Child ${i + 1}-2`, icon: 'i-lucide-file' },
  ],
}));
</script>

<template>
  <PTree
    virtualize
    :items="items"
    class="h-80"
  />
</template>
