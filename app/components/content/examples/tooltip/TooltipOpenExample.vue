<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PTooltip v-model:open="open" text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </PTooltip>
</template>
