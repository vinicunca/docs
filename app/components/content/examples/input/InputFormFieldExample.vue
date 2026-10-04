<script setup lang="ts">
const email = ref('')
</script>

<template>
  <PFormField label="Email" help="We won't share your email." required>
    <PInput v-model="email" placeholder="Enter your email" icon="i-lucide-at-sign" />
  </PFormField>
</template>
