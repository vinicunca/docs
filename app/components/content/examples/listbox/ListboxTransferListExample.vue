<script setup lang="ts">
import type { ListboxItem } from 'pohon-ui';

const items: Array<ListboxItem> = [
  { label: 'France', icon: 'i-lucide-map-pin', value: 'FR' },
  { label: 'Germany', icon: 'i-lucide-map-pin', value: 'DE' },
  { label: 'Italy', icon: 'i-lucide-map-pin', value: 'IT' },
  { label: 'Spain', icon: 'i-lucide-map-pin', value: 'ES' },
  { label: 'Netherlands', icon: 'i-lucide-map-pin', value: 'NL' },
  { label: 'Poland', icon: 'i-lucide-map-pin', value: 'PL' },
  { label: 'Belgium', icon: 'i-lucide-map-pin', value: 'BE' },
  { label: 'Portugal', icon: 'i-lucide-map-pin', value: 'PT' },
];

const targetItems = ref<Array<ListboxItem>>([]);
const sourceSelection = ref<Array<ListboxItem>>([]);
const targetSelection = ref<Array<ListboxItem>>([]);

const sourceItems = computed(() => items.filter((item) => !targetItems.value.some((t) => t.value === item.value)));

function transferSelected() {
  targetItems.value = [...targetItems.value, ...sourceSelection.value];
  sourceSelection.value = [];
}

function removeSelected() {
  targetItems.value = targetItems.value.filter((item) => !targetSelection.value.some((t) => t.value === item.value));
  targetSelection.value = [];
}
</script>

<template>
  <div class="flex gap-4 w-full items-stretch">
    <div class="flex flex-1 flex-col gap-1">
      <span class="text-sm color-text-highlighted font-medium">Available</span>

      <PListbox
        v-model="sourceSelection"
        :items="sourceItems"
        multiple
        filter
        class="size-full"
      />
    </div>

    <div class="flex flex-col gap-1 items-center justify-center">
      <PButton
        icon="i-lucide-chevron-right"
        color="neutral"
        variant="outline"
        :disabled="!sourceSelection.length"
        @click="transferSelected"
      />
      <PButton
        icon="i-lucide-chevron-left"
        color="neutral"
        variant="outline"
        :disabled="!targetSelection.length"
        @click="removeSelected"
      />
    </div>

    <div class="flex flex-1 flex-col gap-1">
      <span class="text-sm color-text-highlighted font-medium">Selected</span>

      <PListbox
        v-model="targetSelection"
        :items="targetItems"
        multiple
        filter
        class="size-full"
      />
    </div>
  </div>
</template>
