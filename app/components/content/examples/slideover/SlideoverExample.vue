<script setup lang="ts">
defineProps<{
  count: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <PSlideover :close="{ onClick: () => emit('close', false) }" :description="`This slideover was opened programmatically ${count} times`">
    <template #body>
      <Placeholder class="h-full" />
    </template>

    <template #footer>
      <div class="flex gap-2">
        <PButton color="neutral" label="Dismiss" @click="emit('close', false)" />
        <PButton label="Success" @click="emit('close', true)" />
      </div>
    </template>
  </PSlideover>
</template>
