<script setup lang="ts">
const targets = [
  { label: 'Retirement', amount: '$420,000', value: 65 },
  { label: 'Real estate', amount: '$85,000', value: 32 }
]
</script>

<template>
  <div class="p-4 space-y-4">
    <div>
      <p class="font-semibold color-text-highlighted">
        Savings targets
      </p>
      <p class="text-sm color-text-muted">
        Active milestones for 2026.
      </p>
    </div>

    <div v-for="target in targets" :key="target.label" class="space-y-2">
      <div class="flex items-baseline justify-between">
        <span class="text-xs uppercase tracking-wide color-text-muted">{{ target.label }}</span>
        <span class="text-xs color-text-muted">{{ target.value }}% achieved</span>
      </div>
      <p class="text-xl font-semibold color-text-highlighted">
        {{ target.amount }}
      </p>
      <PProgress :model-value="target.value" size="sm" />
    </div>
  </div>
</template>
