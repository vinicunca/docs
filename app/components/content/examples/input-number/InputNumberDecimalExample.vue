<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <PInputNumber
    v-model="value"
    :format-options="{
      signDisplay: 'exceptZero',
      minimumFractionDigits: 1
    }"
  />
</template>
