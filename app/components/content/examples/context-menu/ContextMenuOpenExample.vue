<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui';

const open = ref(false);

defineShortcuts({
  o: () => open.value = !open.value,
});

const items: Array<ContextMenuItem> = [
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  },
];
</script>

<template>
  <PContextMenu
    v-model:open="open"
    :items="items"
    :ui="{ content: 'w-48' }"
  >
    <div class="text-sm border border-border-accented rounded-md border-dashed flex w-72 aspect-video items-center justify-center">
      Right click here
    </div>
  </PContextMenu>
</template>
