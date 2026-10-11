<script setup lang="ts">
import MyButton from './MyButton.vue';
</script>

<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full',
      },
    }"
  >
    <PCard :ui="{ body: 'flex items-center gap-2 sm:flex-row flex-col' }">
      <PButton label="Direct child" />
      <MyButton />
    </PCard>
  </PTheme>
</template>
