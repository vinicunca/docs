<script setup lang="ts">
// as a string this stays an unresolved <nuxtlink> element, with no href
import { NuxtLink } from '#components';

/**
 * A row of figures for the hero's `links` slot, each a link when it has
 * somewhere to go.
 */
defineProps<{
  items: Array<{ value: string; label: string; to?: string }>;
}>();
</script>

<template>
  <div class="flex flex-wrap gap-4 items-end relative lg:gap-x-8 sm:gap-x-6">
    <component
      :is="item.to ? NuxtLink : 'div'"
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :target="item.to?.startsWith('http') ? '_blank' : undefined"
      class="group flex flex-col gap-1.5 focus-visible:outline-primary"
    >
      <span class="text-3xl color-text-highlighted leading-[.95] tracking-[-.03em] font-semibold transition-colors tabular-nums sm:text-4xl group-hover:text-primary">
        {{ item.value }}
      </span>
      <span class="text-[9px] color-text-muted tracking-[.09em] font-medium whitespace-nowrap uppercase sm:text-[11.5px]">
        {{ item.label }}
      </span>
    </component>
  </div>
</template>
