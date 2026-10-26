<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui';

const loading = ref(true);

const items = [
  {
    label: 'Refresh the Page',
    slot: 'refresh' as const,
  },
  {
    label: 'Clear Cookies and Refresh',
  },
  {
    label: 'Clear Cache and Refresh',
  },
] satisfies Array<ContextMenuItem>;
</script>

<template>
  <PContextMenu
    :items="items"
    :ui="{ content: 'w-48' }"
  >
    <div class="text-sm border border-border-accented rounded-md border-dashed flex w-72 aspect-video items-center justify-center">
      Right click here
    </div>

    <template #refresh-label>
      {{ loading ? 'Refreshing...' : 'Refresh the Page' }}
    </template>

    <template #refresh-trailing>
      <PIcon
        v-if="loading"
        name="i-lucide-loader-circle"
        class="color-primary shrink-0 size-5 animate-spin"
      />
    </template>
  </PContextMenu>
</template>
