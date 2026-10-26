<script setup lang="ts">
const input = useTemplateRef('input');

defineShortcuts({
  '/': () => {
    input.value?.inputRef?.focus();
  },
});
</script>

<template>
  <PInput
    ref="input"
    icon="i-lucide-search"
    placeholder="Search..."
  >
    <template #trailing>
      <PKbd value="/" />
    </template>
  </PInput>
</template>
