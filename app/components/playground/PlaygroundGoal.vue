<script setup lang="ts">
const percent = 80

const ring = `conic-gradient(var(--ui-primary) ${percent}%, var(--ui-color-bg-accented) 0)`
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <p class="self-start font-semibold color-text-highlighted">
      Investment goal
    </p>

    <div class="relative size-32 rounded-full" :style="{ background: ring }">
      <div class="absolute inset-3 rounded-full bg-background flex flex-col items-center justify-center">
        <span class="text-xl font-semibold color-text-highlighted">$24k</span>
        <span class="text-xs color-text-muted">{{ percent }}% of $30k</span>
      </div>
    </div>

    <div class="flex items-center justify-between w-full text-sm">
      <span class="color-text-muted">Projected finish</span>
      <span class="font-medium color-text-highlighted">Oct 2026</span>
    </div>
  </div>
</template>
