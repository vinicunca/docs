<script setup lang="ts">
interface HighlightsProps {
  features: Array<string>;
}

const props = defineProps<HighlightsProps>();
</script>

<template>
  <ul class="flex flex-col gap-1 !pl-0">
    <li
      v-for="(feature, index) in props.features"
      :key="index"
      class="mb-0 mt-1 p-0 flex gap-4 items-center"
    >
      <span class="border border-primary/10 rounded-full bg-primary/10 flex flex-none h-6 aspect-square items-center justify-center !w-6">
        <i
          class="i-lucide:check color-primary size-4"
        />
      </span>

      <span v-html="feature" />
    </li>
  </ul>
</template>
