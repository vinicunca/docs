<script setup lang="ts">
import type { ProgressGroupItem } from 'pohon-ui'

const max = 128

const items: ProgressGroupItem[] = [
  { label: 'System', value: 24, color: 'neutral', icon: 'i-lucide-cog' },
  { label: 'Apps', value: 8, color: 'error', icon: 'i-lucide-app-window' },
  { label: 'Documents', value: 12, color: 'warning', icon: 'i-lucide-file' },
  { label: 'Multimedia', value: 42, color: 'success', icon: 'i-lucide-film' }
]

const used = items.reduce((total, item) => total + (item.value ?? 0), 0)
</script>

<template>
  <PProgressGroup :items="items" :max="max" status class="w-96" :ui="{ status: 'w-full justify-between' }">
    <template #status>
      <p>{{ used }}GB used</p>
      <p class="color-text-muted">
        {{ max - used }}GB remaining
      </p>
    </template>
  </PProgressGroup>
</template>
