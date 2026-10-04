<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  name: z.string().min(2),
  news: z.boolean().default(false)
})

type Schema = z.output<typeof schema>

const nestedSchema = z.object({
  email: z.email()
})

type NestedSchema = z.output<typeof nestedSchema>

const state = reactive<Partial<Schema & NestedSchema>>({ })

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PForm
    ref="form"
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <PFormField label="Name" name="name">
      <PInput v-model="state.name" placeholder="John Lennon" />
    </PFormField>

    <div>
      <PCheckbox v-model="state.news" name="news" label="Register to our newsletter" @update:model-value="state.email = undefined" />
    </div>

    <PForm v-if="state.news" :schema="nestedSchema" nested>
      <PFormField label="Email" name="email">
        <PInput v-model="state.email" placeholder="john@lennon.com" />
      </PFormField>
    </PForm>

    <div>
      <PButton type="submit">
        Submit
      </PButton>
    </div>
  </PForm>
</template>
