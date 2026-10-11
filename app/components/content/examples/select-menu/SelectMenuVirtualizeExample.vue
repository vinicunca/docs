<script setup lang="ts">
import type { SelectMenuItem } from 'pohon-ui';

const items: Array<SelectMenuItem> = Array(1000).fill(0).map((_, i) => ({
  label: `item-${i}`,
  value: i,
}));
</script>

<template>
  <PSelectMenu
    virtualize
    :items="items"
    class="w-48"
  />
</template>
