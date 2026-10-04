<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 20, defaultSize: 30, class: 'items-center justify-center color-text-muted font-medium' },
  { slot: 'right', defaultSize: 70, class: 'items-center justify-center color-text-muted font-medium' }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-custom-handle-example" :items="items" :ui="{ handle: 'data-[orientation=horizontal]:w-px data-[orientation=vertical]:h-px bg-border transition-colors data-[state=hover]:bg-primary data-[state=drag]:bg-primary' }" class="rounded-lg border border-border overflow-hidden">
      <template #left>
        Left
      </template>

      <template #right>
        Right
      </template>
    </PSplitter>
  </div>
</template>
