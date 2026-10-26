<script setup lang="ts">
const items = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));
</script>

<template>
  <PScrollArea
    v-slot="{ item, index }"
    :items="items"
    class="h-96 w-full"
  >
    <PPageCard
      v-bind="item"
      :variant="index % 2 === 0 ? 'soft' : 'outline'"
      class="rounded-none"
    />
  </PScrollArea>
</template>
