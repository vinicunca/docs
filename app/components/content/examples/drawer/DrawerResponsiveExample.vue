<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'

const [DefineFormTemplate, ReuseFormTemplate] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const open = ref(false)

const state = reactive({
  email: undefined
})

const title = 'Edit profile'
const description = 'Make changes to your profile here. Click save when you\'re done.'
</script>

<template>
  <DefineFormTemplate>
    <PForm :state="state" class="space-y-4">
      <PFormField label="Email" name="email" required>
        <PInput v-model="state.email" placeholder="you@example.com" required />
      </PFormField>

      <PButton label="Save changes" type="submit" />
    </PForm>
  </DefineFormTemplate>

  <PModal v-if="isDesktop" v-model:open="open" :title="title" :description="description">
    <PButton label="Edit profile" color="neutral" variant="outline" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </PModal>

  <PDrawer v-else v-model:open="open" :title="title" :description="description">
    <PButton label="Edit profile" color="neutral" variant="outline" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </PDrawer>
</template>
