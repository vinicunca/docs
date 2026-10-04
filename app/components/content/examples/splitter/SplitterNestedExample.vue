<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const card = 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 20, class: card },
  { slot: 'right', minSize: 20 }
]

const nested: SplitterItem[] = [
  { slot: 'top', minSize: 20, class: card },
  { slot: 'bottom', minSize: 20, class: card }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-nested-example" :items="items">
      <template #left>
        Left
      </template>

      <template #right>
        <PSplitter id="splitter-nested-example-inner" orientation="vertical" :items="nested">
          <template #top>
            Top
          </template>

          <template #bottom>
            Bottom
          </template>
        </PSplitter>
      </template>
    </PSplitter>
  </div>
</template>
