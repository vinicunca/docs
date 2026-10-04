<script setup lang="ts">
const value = ref('')
</script>

<template>
  <PInput v-model="value" placeholder="" variant="outline" :ui="{ base: 'peer' }">
    <label class="pointer-events-none absolute left-0 -top-2.5 color-text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:color-text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:color-text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
      <span class="inline-flex bg-background px-1">Email address</span>
    </label>
  </PInput>
</template>
