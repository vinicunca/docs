<script setup lang="ts">
import { vMaska } from 'maska/vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <PInput
      v-maska="'#### #### #### ####'"
      placeholder="4242 4242 4242 4242"
      icon="i-lucide-credit-card"
    />

    <div class="flex gap-2 items-center">
      <PInput
        v-maska="'##/##'"
        placeholder="MM/YY"
        icon="i-lucide-calendar"
      />
      <PInput
        v-maska="'###'"
        placeholder="CVC"
      />
    </div>
  </div>
</template>
