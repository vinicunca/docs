<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui';

const items = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    slot: 'colors' as const,
    content: 'Choose a primary and a neutral color from your UnoCSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
] satisfies Array<AccordionItem>;
</script>

<template>
  <PAccordion :items="items">
    <template #colors="{ item }">
      <p class="text-sm color-primary pb-3.5">
        {{ item.content }}
      </p>
    </template>
  </PAccordion>
</template>
