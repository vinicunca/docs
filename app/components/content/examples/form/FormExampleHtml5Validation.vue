<script setup lang="ts">
import type { FormSubmitEvent } from 'pohon-ui';

const state = reactive({
  email: undefined,
  age: undefined,
});

type Schema = typeof state;

const form = useTemplateRef('form');

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  console.log(event.data);
}
</script>

<template>
  <div class="space-y-4">
    <PForm
      ref="form"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <PFormField
        label="Email"
        name="email"
      >
        <PInput
          v-model="state.email"
          type="email"
          required
        />
      </PFormField>

      <PFormField
        label="Age"
        name="age"
      >
        <PInput
          v-model="state.age"
          type="number"
          min="18"
          max="100"
          required
        />
      </PFormField>
    </PForm>

    <PButton @click="form?.submit()">
      Submit
    </PButton>
  </div>
</template>
