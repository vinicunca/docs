<script setup lang="ts">
const items = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
    slot: 'account',
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    slot: 'password',
  },
];

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
});
</script>

<template>
  <PTabs :items="items">
    <template #account>
      <PForm
        :state="state"
        class="flex flex-col gap-4"
      >
        <PFormField
          label="Name"
          name="name"
        >
          <PInput
            v-model="state.name"
            class="w-full"
          />
        </PFormField>
        <PFormField
          label="Username"
          name="username"
        >
          <PInput
            v-model="state.username"
            class="w-full"
          />
        </PFormField>
      </PForm>
    </template>

    <template #password>
      <PForm
        :state="state"
        class="flex flex-col gap-4"
      >
        <PFormField
          label="Current Password"
          name="current"
          required
        >
          <PInput
            v-model="state.currentPassword"
            type="password"
            required
            class="w-full"
          />
        </PFormField>
        <PFormField
          label="New Password"
          name="new"
          required
        >
          <PInput
            v-model="state.newPassword"
            type="password"
            required
            class="w-full"
          />
        </PFormField>
        <PFormField
          label="Confirm Password"
          name="confirm"
          required
        >
          <PInput
            v-model="state.confirmPassword"
            type="password"
            required
            class="w-full"
          />
        </PFormField>
      </PForm>
    </template>
  </PTabs>
</template>
