<script setup lang="ts">
defineProps<{
  features: Array<string>;
}>();
</script>

<template>
  <ul class="my-5 ps-0 list-none flex flex-col gap-2">
    <li
      v-for="feature in features"
      :key="feature"
      class="flex gap-3 items-center"
    >
      <span class="rounded-full bg-primary/10 flex flex-none size-6 ring ring-primary/20 ring-inset items-center justify-center">
        <PIcon
          name="i-lucide-check"
          class="color-primary size-3.5"
        />
      </span>
      <DocsMarkdown
        :value="feature"
        unwrap
      />
    </li>
  </ul>
</template>
