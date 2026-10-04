<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui'

const items: AccordionItem[] = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box'
  }
]
</script>

<template>
  <PAccordion :items="items">
    <template #content="{ item }">
      <p class="pb-3.5 text-sm color-text-muted">
        This is the {{ item.label }} panel.
      </p>
    </template>
  </PAccordion>
</template>
