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
        <div class="color-text-muted rounded-full bg-background-elevated flex shrink-0 size-8 items-center justify-center">
          <PIcon
            :name="transaction.icon"
            class="size-4"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm color-text-highlighted font-medium truncate">
            {{ transaction.name }}
          </p>
          <p class="text-xs color-text-muted truncate">
            {{ transaction.category }}
          </p>
        </div>
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
