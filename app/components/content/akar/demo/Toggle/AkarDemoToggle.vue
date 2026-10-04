<script setup lang="ts">
import { Toggle } from 'akar'
import { ref } from 'vue'
import './styles.css'

const toggleState = ref(false)
</script>

<template>
  <div class="akar-demo akar-demo-Toggle">
    <Toggle
        v-model="toggleState"
        aria-label="Toggle italic"
        class="Toggle"
      >
        <PIcon name="i-lucide-italic" />
      </Toggle>
  </div>
</template>
