<script setup lang="ts">
const first = ref(false)
const second = ref(false)
</script>

<template>
  <PSlideover v-model:open="first" title="First slideover" :ui="{ footer: 'justify-end' }">
    <PButton color="neutral" variant="subtle" label="Open" />

    <template #body>
      <Placeholder class="h-full" />
    </template>

    <template #footer>
      <PButton label="Close" color="neutral" variant="outline" @click="first = false" />

      <PSlideover v-model:open="second" title="Second slideover" :ui="{ footer: 'justify-end' }">
        <PButton label="Open second" color="neutral" />

        <template #body>
          <Placeholder class="h-full" />
        </template>

        <template #footer>
          <PButton label="Close" color="neutral" variant="outline" @click="second = false" />
        </template>
      </PSlideover>
    </template>
  </PSlideover>
</template>
