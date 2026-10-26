<script setup lang="ts">
const { data: countries, status, execute } = await useLazyFetch<Array<{
  name: string;
  code: string;
  emoji: string;
}>>('/api/countries.json', {
  key: 'api-countries',
  immediate: false,
});

function onOpen() {
  if (!countries.value?.length) {
    execute();
  }
}
</script>

<template>
  <PInputMenu
    :items="countries"
    :loading="status === 'pending'"
    label-key="name"
    :search-input="{ icon: 'i-lucide-search' }"
    placeholder="Select country"
    class="w-48"
    @update:open="onOpen"
  >
    <template #leading="{ modelValue, ui }">
      <span
        v-if="modelValue"
        class="text-center size-5"
      >
        {{ modelValue?.emoji }}
      </span>
      <PIcon
        v-else
        name="i-lucide-earth"
        :class="ui.leadingIcon()"
      />
    </template>
    <template #item-leading="{ item }">
      <span class="text-center size-5">
        {{ item.emoji }}
      </span>
    </template>
  </PInputMenu>
</template>
