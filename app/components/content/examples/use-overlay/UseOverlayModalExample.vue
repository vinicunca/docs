<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <PModal
    title="Welcome 👋"
    description="This modal was opened programmatically with useOverlay."
    :close="{ onClick: () => emit('close') }"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <PButton label="Close" color="neutral" @click="emit('close')" />
    </template>
  </PModal>
</template>
