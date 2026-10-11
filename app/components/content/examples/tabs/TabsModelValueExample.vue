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

const active = ref('0');

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
  setInterval(() => {
    active.value = String((Number(active.value) + 1) % items.length);
  }, 2000);
});
</script>

<template>
  <PTabs
    v-model="active"
    :content="false"
    :items="items"
    class="w-full"
  />
</template>
