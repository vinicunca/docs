<script setup lang="ts">
const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PCollapsible v-model:open="open" class="flex flex-col gap-2 w-48">
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      block
    />

    <template #content>
      <Placeholder class="h-48" />
    </template>
  </PCollapsible>
</template>
