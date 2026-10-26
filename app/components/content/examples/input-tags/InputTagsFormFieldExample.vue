<script setup lang="ts">
const tags = ref(['Vue']);
</script>

<template>
  <PFormField
    label="Tags"
    required
  >
    <PInputTags
      v-model="tags"
      placeholder="Enter tags..."
    />
  </PFormField>
</template>
