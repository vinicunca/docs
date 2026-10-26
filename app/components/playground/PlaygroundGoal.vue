<script setup lang="ts">
const percent = 80;

const ring = `conic-gradient(var(--ui-color-primary) ${percent}%, var(--ui-color-bg-accented) 0)`;
</script>

<template>
  <div class="p-4 flex flex-col gap-4 items-center">
    <p class="color-text-highlighted font-semibold self-start">
      Investment goal
    </p>

    <div
      class="rounded-full size-32 relative"
      :style="{ background: ring }"
    >
      <div class="rounded-full bg-background flex flex-col items-center inset-3 justify-center absolute">
        <span class="text-xl color-text-highlighted font-semibold">$24k</span>
        <span class="text-xs color-text-muted">{{ percent }}% of $30k</span>
      </div>
    </div>

    <div class="text-sm flex w-full items-center justify-between">
      <span class="color-text-muted">Projected finish</span>
      <span class="color-text-highlighted font-medium">Oct 2026</span>
    </div>
  </div>
</template>
