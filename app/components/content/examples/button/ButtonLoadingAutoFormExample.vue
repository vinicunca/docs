<script setup lang="ts">
const state = reactive({ fullName: '' })

async function onSubmit() {
  return new Promise<void>(res => setTimeout(res, 1000))
}

async function validate(data: Partial<typeof state>) {
  if (!data.fullName?.length) return [{ name: 'fullName', message: 'Required' }]
  return []
}
</script>

<template>
  <PForm :state="state" :validate="validate" @submit="onSubmit">
    <PFormField name="fullName" label="Full name">
      <PInput v-model="state.fullName" />
    </PFormField>
    <PButton type="submit" class="mt-2" loading-auto>
      Submit
    </PButton>
  </PForm>
</template>
