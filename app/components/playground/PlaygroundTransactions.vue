<script setup lang="ts">
const studioIcons = useStudioIcons()

const transactions = computed(() => [
  { name: 'Stripe Payout', category: 'Income', icon: studioIcons.arrowDownLeft, amount: 2400.00 },
  { name: 'Blue Bottle Coffee', category: 'Food & Drink', icon: studioIcons.coffee, amount: -8.50 },
  { name: 'Whole Foods Market', category: 'Groceries', icon: studioIcons.cart, amount: -64.20 },
  { name: 'Netflix', category: 'Entertainment', icon: studioIcons.movie, amount: -19.99 }
])

function format(amount: number) {
  return `${amount < 0 ? '-' : '+'}$${Math.abs(amount).toFixed(2)}`
}
</script>

<template>
  <div>
    <div class="p-4">
      <p class="font-semibold color-text-highlighted">
        Recent transactions
      </p>
      <p class="text-sm color-text-muted">
        Your latest account activity.
      </p>
    </div>

    <PSeparator />

    <ul class="divide-y divide-border">
      <li v-for="transaction in transactions" :key="transaction.name" class="flex items-center gap-3 px-4 py-2.5">
        <div class="flex items-center justify-center size-8 rounded-full bg-background-elevated color-text-muted shrink-0">
          <PIcon :name="transaction.icon" class="size-4" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium color-text-highlighted truncate">
            {{ transaction.name }}
          </p>
          <p class="text-xs color-text-muted truncate">
            {{ transaction.category }}
          </p>
        </div>
        <span class="text-sm font-medium" :class="transaction.amount < 0 ? 'color-text-highlighted' : 'text-success'">
          {{ format(transaction.amount) }}
        </span>
      </li>
    </ul>
  </div>
</template>
