<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = [
  {
    label: 'Account',
    description: 'Make changes to your account here. Click save when you\'re done.',
    icon: 'i-lucide-user',
    slot: 'account' as const
  },
  {
    label: 'Password',
    description: 'Change your password here. After saving, you\'ll be logged out.',
    icon: 'i-lucide-lock',
    slot: 'password' as const
  }
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
  <PTabs :items="items" variant="link" :ui="{ trigger: 'grow' }" class="gap-4 w-full">
    <template #account="{ item }">
      <p class="color-text-muted mb-4">
        {{ item.description }}
      </p>

      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Name" name="name">
          <PInput v-model="state.name" class="w-full" />
        </PFormField>
        <PFormField label="Username" name="username">
          <PInput v-model="state.username" class="w-full" />
        </PFormField>

        <PButton label="Save changes" type="submit" variant="soft" class="self-end" />
      </PForm>
    </template>

    <template #password="{ item }">
      <p class="color-text-muted mb-4">
        {{ item.description }}
      </p>

      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Current Password" name="current" required>
          <PInput v-model="state.currentPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="New Password" name="new" required>
          <PInput v-model="state.newPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="Confirm Password" name="confirm" required>
          <PInput v-model="state.confirmPassword" type="password" required class="w-full" />
        </PFormField>

        <PButton label="Change password" type="submit" variant="soft" class="self-end" />
      </PForm>
    </template>
  </PTabs>
</template>
