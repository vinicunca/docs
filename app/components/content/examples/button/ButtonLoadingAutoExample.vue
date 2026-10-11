<script setup lang="ts">
async function onClick() {
  return new Promise<void>((res) => setTimeout(res, 1000));
}
</script>

<template>
  <PButton
    loading-auto
    @click="onClick"
  >
    Button
  </PButton>
</template>
