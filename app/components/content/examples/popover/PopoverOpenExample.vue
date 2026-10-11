<script setup lang="ts">
const open = ref(false);

defineShortcuts({
  o: () => open.value = !open.value,
});
</script>

<template>
  <PPopover v-model:open="open">
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="m-4 inline-flex size-48" />
    </template>
  </PPopover>
</template>
