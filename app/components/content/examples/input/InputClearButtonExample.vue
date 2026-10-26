<script setup lang="ts">
const value = ref('Click to clear');
</script>

<template>
  <PInput
    v-model="value"
    placeholder="Type something..."
    :ui="{ trailing: 'pe-1' }"
  >
    <template
      v-if="value?.length"
      #trailing
    >
      <PButton
        color="neutral"
        variant="link"
        size="sm"
        icon="i-lucide-circle-x"
        aria-label="Clear input"
        @click="value = ''"
      />
    </template>
  </PInput>
</template>
