<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  name: z.string().min(2, 'Too short'),
  email: z.email('Invalid email'),
  bio: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: 'John Doe',
  email: 'john@example.com',
  bio: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Saved', description: 'Your profile has been updated.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PTheme
    :props="{
      input: { size: 'lg' },
      textarea: { size: 'lg' }
    }"
    :ui="{
      formField: {
        root: 'flex max-sm:flex-col justify-between gap-4',
        wrapper: 'w-full sm:max-w-xs'
      }
    }"
  >
    <PForm :schema="schema" :state="state" class="space-y-4 w-full" @submit="onSubmit">
      <PFormField label="Name" name="name" description="Your public display name.">
        <PInput v-model="state.name" />
      </PFormField>

      <PFormField label="Email" name="email" description="Used for notifications.">
        <PInput v-model="state.email" type="email" />
      </PFormField>

      <PFormField label="Bio" name="bio" description="A short description about yourself.">
        <PTextarea v-model="state.bio" placeholder="Tell us about yourself" />
      </PFormField>

      <div class="flex justify-end">
        <PButton type="submit">
          Save changes
        </PButton>
      </div>
    </PForm>
  </PTheme>
</template>
