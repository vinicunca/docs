<script setup lang="ts">
const open = ref(false);

defineShortcuts({
  o: () => open.value = !open.value,
});
</script>

<template>
  <PModal v-model:open="open">
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="m-4 h-48" />
    </template>
  </PModal>
</template>
