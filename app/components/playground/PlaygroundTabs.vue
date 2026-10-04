<script setup lang="ts">
const studioIcons = useStudioIcons()

const items = computed(() => [
  {
    label: 'Account',
    icon: studioIcons.user,
    slot: 'account'
  },
  {
    label: 'Password',
    icon: studioIcons.lock,
    slot: 'password'
  }
])

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: ''
})
</script>

<template>
  <div class="p-4">
    <PTabs :items="items" class="w-full">
      <template #account>
        <PForm :state="state" class="flex flex-col gap-4">
          <PFormField label="Name" name="name">
            <PInput v-model="state.name" class="w-full" />
          </PFormField>
          <PFormField label="Username" name="username">
            <PInput v-model="state.username" class="w-full" />
          </PFormField>
        </PForm>
      </template>

      <template #password>
        <PForm :state="state" class="flex flex-col gap-4">
          <PFormField label="Current Password" name="current" required>
            <PInput v-model="state.currentPassword" type="password" required class="w-full" />
          </PFormField>
          <PFormField label="New Password" name="new" required>
            <PInput v-model="state.newPassword" type="password" required class="w-full" />
          </PFormField>
        </PForm>
      </template>
    </PTabs>
  </div>
</template>
