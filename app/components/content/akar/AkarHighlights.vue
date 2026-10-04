<script setup lang="ts">
defineProps<{
  features: string[]
}>()
</script>

<template>
  <ul class="my-5 flex flex-col gap-2 list-none ps-0">
    <li v-for="feature in features" :key="feature" class="flex items-center gap-3">
      <span class="flex size-6 flex-none items-center justify-center rounded-full bg-primary/10 ring ring-inset ring-primary/20">
        <PIcon name="i-lucide-check" class="size-3.5 color-primary" />
      </span>
      <DocsMarkdown :value="feature" unwrap />
    </li>
  </ul>
</template>
