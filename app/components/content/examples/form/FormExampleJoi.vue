<script setup lang="ts">
import Joi from 'joi'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .required()
})

const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
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
