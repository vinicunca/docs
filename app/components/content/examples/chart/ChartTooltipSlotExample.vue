<script setup lang="ts">
const data = [
  { month: 'January', revenue: 18600, expenses: 12400 },
  { month: 'February', revenue: 30500, expenses: 21800 },
  { month: 'March', revenue: 23700, expenses: 25100 },
  { month: 'April', revenue: 27300, expenses: 19600 },
  { month: 'May', revenue: 20900, expenses: 22300 },
  { month: 'June', revenue: 31400, expenses: 20700 },
];

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function profit(month?: string) {
  const row = data.find((row) => row.month === month);

  return row ? row.revenue - row.expenses : 0;
}
</script>

<template>
  <PChart
    type="bar"
    :data="data"
    index="month"
    :categories="[{ key: 'revenue', label: 'Revenue', color: 'success' }, { key: 'expenses', label: 'Expenses', color: 'error' }]"
    :format="(value) => currency.format(value)"
    aria-label="Revenue and expenses"
  >
    <template #tooltip="{ title, rows }">
      <p class="color-text-highlighted font-medium">
        {{ title }}
      </p>

      <div
        v-for="row in rows"
        :key="row.label"
        class="flex gap-2 items-center"
      >
        <span
          class="rounded-full size-2"
          :style="{ backgroundColor: row.color }"
        />
        <span class="color-text-muted">{{ row.label }}</span>
        <span class="ms-auto ps-4 tabular-nums">{{ row.value }}</span>
      </div>

      <PSeparator class="my-1" />

      <div class="flex gap-2 items-center">
        <span class="color-text-muted">Profit</span>
        <PBadge
          :color="profit(title) >= 0 ? 'success' : 'error'"
          :label="currency.format(profit(title))"
          variant="subtle"
          size="sm"
          class="ms-auto tabular-nums"
        />
      </div>
    </template>
  </PChart>
</template>
