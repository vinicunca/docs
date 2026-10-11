<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui';

const items: Array<Array<DropdownMenuItem>> = [
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
      color: 'error',
      icon: 'i-lucide-trash',
    },
  ],
];
</script>

<template>
  <PDropdownMenu
    :items="items"
    :ui="{ content: 'w-48' }"
  >
    <PButton
      label="Open"
      color="neutral"
      variant="outline"
      icon="i-lucide-menu"
    />
  </PDropdownMenu>
</template>
