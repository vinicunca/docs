<script setup lang="ts">
const open = ref(false);

defineShortcuts({
  o: () => open.value = !open.value,
});
</script>

<template>
  <PDrawer v-model:open="open">
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-up"
    />

    <template #content>
      <Placeholder class="m-4 h-48" />
    </template>
  </PDrawer>
</template>
