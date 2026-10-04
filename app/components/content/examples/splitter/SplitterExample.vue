<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const card = 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 15, defaultSize: 25, class: card },
  { slot: 'main', minSize: 30, defaultSize: 50, class: card },
  { slot: 'right', minSize: 15, defaultSize: 25, class: card }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-example" :items="items">
      <template #left>
        Left
      </template>

      <template #main>
        Main
      </template>

      <template #right>
        Right
      </template>
    </PSplitter>
  </div>
</template>
