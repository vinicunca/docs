<script setup lang="ts">
import type { ChipProps, SelectItem } from 'pohon-ui';

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
] satisfies Array<SelectItem>);

const value = ref(items.value[0]?.value);

function getChip(value: string) {
  return items.value.find((item) => item.value === value)?.chip;
}
</script>

<template>
  <PSelect
    v-model="value"
    :items="items"
    value-key="value"
    class="w-48"
  >
    <template #leading="{ modelValue, ui }">
      <PChip
        v-if="modelValue"
        v-bind="getChip(modelValue)"
        inset
        standalone
        :size="(ui.itemLeadingChipSize() as ChipProps['size'])"
        :class="ui.itemLeadingChip()"
      />
    </template>
  </PSelect>
</template>
