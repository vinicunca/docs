<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui';

const items: Array<Array<ContextMenuItem>> = [
  [
    {
      label: 'View',
      icon: 'i-lucide-eye',
    },
    {
      label: 'Copy',
      icon: 'i-lucide-copy',
    },
    {
      label: 'Edit',
      icon: 'i-lucide-pencil',
    },
  ],
  [
    {
      label: 'Delete',
      color: 'error' as const,
      icon: 'i-lucide-trash',
    },
  ],
];
</script>

<template>
  <PContextMenu
    :items="items"
    :ui="{ content: 'w-48' }"
  >
    <div class="text-sm border border-border-accented rounded-md border-dashed flex w-72 aspect-video items-center justify-center">
      Right click here
    </div>
  </PContextMenu>
</template>
