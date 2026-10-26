<script setup lang="ts">
import type { FormError, FormSubmitEvent } from 'pohon-ui';

const state = reactive({
  email: undefined,
  password: undefined,
});

type Schema = typeof state;

function validate(state: Partial<Schema>): Array<FormError> {
  const errors = [];
  if (!state.email) {
    errors.push({ name: 'email', message: 'Required' });
  }
  if (!state.password) {
    errors.push({ name: 'password', message: 'Required' });
  }
  return errors;
}

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  console.log(event.data);
}
</script>

<template>
  <PForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <PFormField
      label="Email"
      name="email"
    >
      <PInput v-model="state.email" />
    </PFormField>

    <PFormField
      label="Password"
      name="password"
    >
      <PInput
        v-model="state.password"
        type="password"
      />
    </PFormField>

    <PButton type="submit">
      Submit
    </PButton>
  </PForm>
</template>
