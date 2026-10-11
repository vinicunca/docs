<script setup lang="ts">
const value = ref(5);
</script>

<template>
  <PInputNumber
    v-model="value"
    :increment="false"
    :decrement="false"
  />
</template>
