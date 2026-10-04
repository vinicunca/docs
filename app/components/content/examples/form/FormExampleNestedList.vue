<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  customer: z.string().min(2)
})

type Schema = z.output<typeof schema>

const itemSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0)
})

type ItemSchema = z.output<typeof itemSchema>

const state = reactive<Partial<Schema & { items: Partial<ItemSchema>[] }>>({ })

function addItem() {
  if (!state.items) {
    state.items = []
  }
  state.items.push({})
}

function removeItem() {
  if (state.items) {
    state.items.pop()
  }
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <PFormField label="Customer" name="customer">
      <PInput v-model="state.customer" placeholder="Wonka Industries" />
    </PFormField>

    <PForm
      v-for="item, count in state.items"
      :key="count"
      :name="`items.${count}`"
      :schema="itemSchema"
      class="flex gap-2"
      nested
    >
      <PFormField :label="!count ? 'Description' : undefined" name="description">
        <PInput v-model="item.description" />
      </PFormField>
      <PFormField :label="!count ? 'Price' : undefined" name="price" class="w-20">
        <PInput v-model="item.price" type="number" />
      </PFormField>
    </PForm>

    <div class="flex gap-2">
      <PButton color="neutral" variant="subtle" size="sm" @click="addItem()">
        Add Item
      </PButton>

      <PButton color="neutral" variant="ghost" size="sm" @click="removeItem()">
        Remove Item
      </PButton>
    </div>
    <div>
      <PButton type="submit">
        Submit
      </PButton>
    </div>
  </PForm>
</template>
