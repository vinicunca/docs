<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <PDrawer v-model:open="open" title="Drawer with footer" description="This is useful when you want a form in a Drawer." :ui="{ container: 'max-w-xl mx-auto' }">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #body>
      <Placeholder class="h-48" />
    </template>

    <template #footer>
      <PButton label="Submit" color="neutral" class="justify-center" />
      <PButton label="Cancel" color="neutral" variant="outline" class="justify-center" @click="open = false" />
    </template>
  </PDrawer>
</template>
