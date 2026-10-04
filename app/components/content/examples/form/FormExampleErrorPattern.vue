<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  email: z.email('Invalid email'),
  tags: z.array(z.string().regex(/^[a-z-]+$/, 'Lowercase letters and dashes only')).min(1, 'Please add at least one tag')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  tags: []
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

    <PFormField label="Tags" name="tags" :error-pattern="/^tags\..+/">
      <PInputTags v-model="state.tags" />
    </PFormField>

    <PButton type="submit">
      Submit
    </PButton>
  </PForm>
</template>
