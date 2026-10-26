<script setup lang="ts">
const data = [
  { browser: 'Chrome', visitors: 275 },
  { browser: 'Safari', visitors: 200 },
  { browser: 'Firefox', visitors: 187 },
  { browser: 'Edge', visitors: 173 },
];
</script>

<template>
  <PChart
    type="donut"
    :data="data"
    index="browser"
    :categories="['visitors']"
    legend
    aria-label="Visitors by browser"
  >
    <template #center>
      <span class="text-2xl color-text-highlighted font-semibold">835</span>
      <span class="text-xs color-text-muted">Visitors</span>
    </template>
  </PChart>
</template>
