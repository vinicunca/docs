<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items: SplitterItem[] = [
  { slot: 'sidebar', sizeUnit: 'px', minSize: 150, defaultSize: 250, collapsible: true, collapsedSize: 48, class: 'bg-background-elevated/50 border border-border rounded-xl' },
  { slot: 'main', class: 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium' }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-collapsible-example" :items="items">
      <template #sidebar="{ collapsed, collapse, expand }">
        <div class="flex-1 flex items-center justify-center p-2">
          <PButton
            :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'"
            :label="collapsed ? undefined : 'Collapse'"
            :aria-label="collapsed ? 'Expand' : undefined"
            color="neutral"
            variant="subtle"
            @click="collapsed ? expand() : collapse()"
          />
        </div>
      </template>

      <template #main>
        Main
      </template>
    </PSplitter>
  </div>
</template>
