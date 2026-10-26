<script setup lang="ts">
import type { TabsItem } from 'pohon-ui';

const items: Array<TabsItem> = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
  },
];
</script>

<template>
  <PTabs
    :items="items"
    class="w-full"
  >
    <template #content="{ item }">
      <p>This is the {{ item.label }} tab.</p>
    </template>
  </PTabs>
</template>
