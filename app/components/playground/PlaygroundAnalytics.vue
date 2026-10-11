<script setup lang="ts">
const studioIcons = useStudioIcons();
const bars = [40, 65, 52, 80, 60, 95, 72];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm color-text-muted">
          Visitors
        </p>
        <p class="text-2xl color-text-highlighted font-semibold">
          418.2K
        </p>
      </div>
      <PBadge
        color="success"
        variant="subtle"
        size="sm"
        :icon="studioIcons.trendingUp"
      >
        +10%
      </PBadge>
    </div>

    <div>
      <div class="flex gap-1.5 h-24 items-end">
        <div
          v-for="(bar, index) in bars"
          :key="index"
          class="rounded-t-sm bg-primary/80 flex-1 transition-colors hover:bg-primary"
          :style="{ height: `${bar}%` }"
        />
      </div>
      <div class="mt-1.5 flex gap-1.5">
        <span
          v-for="(day, index) in days"
          :key="index"
          class="text-xs color-text-muted text-center flex-1"
        >
          {{ day }}
        </span>
      </div>
    </div>
  </div>
</template>
