<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PSlideover v-model:open="open" title="Slideover with footer" description="This is useful when you want a form in a Slideover." :ui="{ footer: 'justify-end' }">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #body>
      <Placeholder class="h-full" />
    </template>

    <template #footer="{ close }">
      <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <PButton label="Submit" color="neutral" />
    </template>
  </PSlideover>
</template>
