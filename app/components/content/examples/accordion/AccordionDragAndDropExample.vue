<script setup lang="ts">
import type { AccordionItem } from 'pohon-ui';
import { useSortable } from '@vueuse/integrations/useSortable';

const items = shallowRef<Array<AccordionItem>>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your UnoCSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
]);

const accordion = useTemplateRef<HTMLElement>('accordion');

useSortable(accordion, items, {
  animation: 150,
});
</script>

<template>
  <PAccordion
    ref="accordion"
    :items="items"
  />
</template>
