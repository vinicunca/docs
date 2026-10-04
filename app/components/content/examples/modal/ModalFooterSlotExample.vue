<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PModal v-model:open="open" title="Modal with footer" description="This is useful when you want a form in a Modal." :ui="{ footer: 'justify-end' }">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #body>
      <Placeholder class="h-48" />
    </template>

    <template #footer="{ close }">
      <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <PButton label="Submit" color="neutral" />
    </template>
  </PModal>
</template>
