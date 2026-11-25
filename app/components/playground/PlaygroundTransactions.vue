<script setup lang="ts">
const studioIcons = useStudioIcons();

const transactions = computed(() => [
  { name: 'Stripe Payout', category: 'Income', icon: studioIcons.arrowDownLeft, amount: 2400.00 },
  { name: 'Blue Bottle Coffee', category: 'Food & Drink', icon: studioIcons.coffee, amount: -8.50 },
  { name: 'Whole Foods Market', category: 'Groceries', icon: studioIcons.cart, amount: -64.20 },
  { name: 'Netflix', category: 'Entertainment', icon: studioIcons.movie, amount: -19.99 },
]);

function format(amount: number) {
  return `${amount < 0 ? '-' : '+'}$${Math.abs(amount).toFixed(2)}`;
}
</script>

<template>
  <div>
    <div class="p-4">
      <p class="color-text-highlighted font-semibold">
        Recent transactions
      </p>
      <p class="text-sm color-text-muted">
        Your latest account activity.
      </p>
    </div>

    <PSeparator />

    <ul class="divide-border divide-y">
      <li
        v-for="transaction in transactions"
        :key="transaction.name"
        class="px-4 py-2.5 flex gap-3 items-center"
      >
        <PUser
          :name="transaction.name"
          :description="transaction.category"
          :avatar="{ icon: transaction.icon }"
          :ui="{ wrapper: 'min-w-0 flex-1', name: 'truncate', description: 'truncate' }"
          class="flex-1 gap-3 min-w-0"
        />
        <span
          class="text-sm font-medium"
          :class="transaction.amount < 0 ? 'color-text-highlighted' : 'color-success'"
        >
          {{ format(transaction.amount) }}
        </span>
      </li>
    </ul>
  </div>
</template>
