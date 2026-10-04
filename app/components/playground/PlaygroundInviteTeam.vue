<script setup lang="ts">
const appConfig = useAppConfig()
const toast = useToast()

const roles = [
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' }
]

const members = ref([
  { email: 'alex@example.com', role: 'editor' },
  { email: 'sam@example.com', role: 'viewer' }
])

const link = 'https://example.com/invite/team'
</script>

<template>
  <div>
    <div class="p-4 space-y-4">
      <div>
        <p class="font-semibold color-text-highlighted">
          Invite your team
        </p>
        <p class="text-sm color-text-muted">
          Add members to your workspace.
        </p>
      </div>

      <div class="space-y-2">
        <div v-for="(member, index) in members" :key="index" class="flex items-center gap-2">
          <PInput v-model="member.email" type="email" color="neutral" class="flex-1" />
          <PSelect v-model="member.role" :items="roles" color="neutral" class="w-28" :content="{ position: 'item-aligned' }" />
        </div>
      </div>

      <PSeparator label="Or share a link" />

      <PInput
        :model-value="link"
        variant="subtle"
        color="neutral"
        readonly
        class="w-full"
        :ui="{ trailing: 'pe-1' }"
      >
        <template #trailing>
          <PButton
            :icon="appConfig.ui.icons.copy"
            color="neutral"
            variant="link"
            size="xs"
            aria-label="Copy link"
            @click="toast.add({ title: 'Invite link copied' })"
          />
        </template>
      </PInput>
    </div>

    <div class="flex justify-end border-t border-border px-4 py-3">
      <PButton label="Send invites" color="neutral" @click="toast.add({ title: 'Invites sent' })" />
    </div>
  </div>
</template>
