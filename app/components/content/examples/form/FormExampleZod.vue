<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <PFormField label="Email" name="email">
      <PInput v-model="state.email" />
    </PFormField>

    <PFormField label="Password" name="password">
      <PInput v-model="state.password" type="password" />
    </PFormField>

    <PButton type="submit">
      Submit
    </PButton>
  </PForm>
</template>
