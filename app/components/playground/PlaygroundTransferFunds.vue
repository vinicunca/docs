<script setup lang="ts">
const toast = useToast()

const accounts = [
  { label: 'Main Checking •8402', value: 'checking' },
  { label: 'High Yield Savings •1192', value: 'savings' }
]

const amount = ref(1200)
const from = ref('checking')
const to = ref('savings')
</script>

<template>
  <div>
    <div class="p-4 space-y-4">
      <div>
        <p class="font-semibold color-text-highlighted">
          Transfer funds
        </p>
        <p class="text-sm color-text-muted">
          Move money between your accounts.
        </p>
      </div>

      <PFormField label="Amount">
        <PInputNumber v-model="amount" :format-options="{ style: 'currency', currency: 'USD' }" class="w-full" />
      </PFormField>

      <PFormField label="From">
        <PSelect v-model="from" :items="accounts" class="w-full" :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }" />
      </PFormField>

      <PFormField label="To">
        <PSelect v-model="to" :items="accounts" class="w-full" :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }" />
      </PFormField>

      <div class="space-y-1.5 text-sm">
        <div class="flex justify-between">
          <span class="color-text-muted">Estimated arrival</span>
          <span class="font-medium color-text-highlighted">Today</span>
        </div>
        <div class="flex justify-between">
          <span class="color-text-muted">Transaction fee</span>
          <span class="font-medium color-text-highlighted">$0.00</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end border-t border-border px-4 py-3">
      <PButton label="Confirm transfer" @click="toast.add({ title: 'Transfer confirmed' })" />
    </div>
  </div>
</template>
