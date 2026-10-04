<script setup lang="ts">
import { object, string } from 'yup'
import type { InferType } from 'yup'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
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
