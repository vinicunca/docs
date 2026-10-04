<script setup lang="ts">
import { useRegle, type InferInput } from '@regle/core'
import { required, email, minLength, withMessage } from '@regle/rules'
import type { FormSubmitEvent } from 'pohon-ui'

const { r$ } = useRegle({ email: '', password: '' }, {
  email: { required, email: withMessage(email, 'Invalid email') },
  password: { required, minLength: withMessage(minLength(8), 'Must be at least 8 characters') }
})

type Schema = InferInput<typeof r$>

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PForm :schema="r$" :state="r$.$value" class="space-y-4" @submit="onSubmit">
    <PFormField label="Email" name="email">
      <PInput v-model="r$.$value.email" />
    </PFormField>

    <PFormField label="Password" name="password">
      <PInput v-model="r$.$value.password" type="password" />
    </PFormField>

    <PButton type="submit">
      Submit
    </PButton>
  </PForm>
</template>
