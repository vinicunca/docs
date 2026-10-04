<script setup lang="ts">
const value = ref('')
const domains = ['.com', '.dev', '.org']
const domain = ref(domains[0])
</script>

<template>
  <PFieldGroup>
    <PInput
      v-model="value"
      placeholder="nuxt"
      :ui="{
        base: 'pl-14.5',
        leading: 'pointer-events-none'
      }"
    >
      <template #leading>
        <p class="text-sm color-text-muted">
          https://
        </p>
      </template>
    </PInput>

    <PSelectMenu v-model="domain" :items="domains" />
  </PFieldGroup>
</template>
