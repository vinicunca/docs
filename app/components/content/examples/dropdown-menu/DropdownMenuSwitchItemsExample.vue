<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui';

const showBookmarks = ref(true);
const showHistory = ref(false);
const showDownloads = ref(false);

const items = computed(() => [{
  label: 'Show Bookmarks',
  icon: 'i-lucide-bookmark',
  slot: 'switch' as const,
  checked: showBookmarks.value,
  onSelect(e: Event) {
    e.preventDefault();
    showBookmarks.value = !showBookmarks.value;
  },
}, {
  label: 'Show History',
  icon: 'i-lucide-clock',
  slot: 'switch' as const,
  checked: showHistory.value,
  onSelect(e: Event) {
    e.preventDefault();
    showHistory.value = !showHistory.value;
  },
}, {
  label: 'Show Downloads',
  icon: 'i-lucide-download',
  slot: 'switch' as const,
  checked: showDownloads.value,
  onSelect(e: Event) {
    e.preventDefault();
    showDownloads.value = !showDownloads.value;
  },
}] satisfies Array<DropdownMenuItem>);
</script>

<template>
  <PDropdownMenu
    :items="items"
    :content="{ align: 'start' }"
    :ui="{ content: 'w-48' }"
  >
    <PButton
      label="Open"
      color="neutral"
      variant="outline"
      icon="i-lucide-menu"
    />

    <template #switch-trailing="{ item }">
      <PSwitch
        :model-value="item.checked"
        tabindex="-1"
      />
    </template>
  </PDropdownMenu>
</template>
