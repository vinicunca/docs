<script setup lang="ts">
import type { ChipProps, SelectMenuItem } from 'pohon-ui';

const items = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error',
    },
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success',
    },
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info',
    },
  },
] satisfies Array<SelectMenuItem>);

const value = ref(items.value[0]);
</script>

<template>
  <PSelectMenu
    v-model="value"
    :items="items"
    class="w-48"
  >
    <template #leading="{ modelValue, ui }">
      <PChip
        v-if="modelValue"
        v-bind="modelValue.chip"
        inset
        standalone
        :size="(ui.itemLeadingChipSize() as ChipProps['size'])"
        :class="ui.itemLeadingChip()"
      />
    </template>
  </PSelectMenu>
</template>
