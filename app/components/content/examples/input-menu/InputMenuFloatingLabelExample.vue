<script setup lang="ts">
const items = ref([
  'Backlog',
  'Todo',
  'In Progress',
  'Done',
]);

const value = ref('');
</script>

<template>
  <PInputMenu
    id="status"
    v-model="value"
    :items="items"
    placeholder=""
    :ui="{ base: 'peer' }"
  >
    <label
      for="status"
      class="text-xs color-text-highlighted font-medium px-1.5 pointer-events-none transition-all left-0 absolute peer-focus:text-xs peer-placeholder-shown:text-sm peer-focus:color-text-highlighted peer-placeholder-shown:color-text-dimmed peer-focus:font-medium peer-placeholder-shown:font-normal -top-2.5 peer-placeholder-shown:top-1.5 peer-focus:-top-2.5"
    >
      <span class="px-1 bg-background inline-flex">Status</span>
    </label>
  </PInputMenu>
</template>
