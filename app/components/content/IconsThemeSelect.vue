<script setup lang="ts">
const { icon, icons } = useTheme();
</script>

<template>
  <PFormField label="Icons preset">
    <PSelect
      v-model="icon"
      color="neutral"
      :icon="icons.find(i => i.value === icon)?.icon"
      :items="icons"
      class="w-50"
    />
  </PFormField>
</template>
