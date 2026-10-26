<script setup lang="ts">
import type { InputMenuItem } from 'pohon-ui';

const items = ref([
  {
    label: 'Backlog',
    value: 'backlog',
    icon: 'i-lucide-circle-help',
  },
  {
    label: 'Todo',
    value: 'todo',
    icon: 'i-lucide-circle-plus',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
    icon: 'i-lucide-circle-arrow-up',
  },
  {
    label: 'Done',
    value: 'done',
    icon: 'i-lucide-circle-check',
  },
] satisfies Array<InputMenuItem>);

const value = ref(items.value[0]);
</script>

<template>
  <PInputMenu
    v-model="value"
    :icon="value?.icon"
    :items="items"
  />
</template>
