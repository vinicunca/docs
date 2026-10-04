<script setup lang="ts">
const dashboard = useTemplateRef('dashboard')
const profile = useTemplateRef('profile')
const settings = useTemplateRef('settings')

const tour = useTour([
  {
    target: () => dashboard.value,
    title: 'Welcome aboard',
    body: 'The popover re-anchors to each target as you step through the tour.'
  },
  {
    target: () => profile.value,
    title: 'Make it yours',
    body: 'You own the content and the buttons — no extra theme or locale to maintain.',
    side: 'right' as const
  },
  {
    target: () => settings.value,
    title: 'You\'re all set',
    body: 'Press Finish to close the tour.'
  }
])
</script>

<template>
  <div class="w-full space-y-4">
    <div class="flex justify-end">
      <PButton icon="i-lucide-wand-sparkles" @click="tour.start()">
        Start tour
      </PButton>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div ref="dashboard" class="p-4 rounded-lg border border-border bg-background-elevated/50">
        <p class="font-medium color-text-highlighted">
          Dashboard
        </p>
        <p class="text-sm color-text-muted">
          Overview of your workspace.
        </p>
      </div>
      <div ref="profile" class="p-4 rounded-lg border border-border bg-background-elevated/50">
        <p class="font-medium color-text-highlighted">
          Profile
        </p>
        <p class="text-sm color-text-muted">
          Manage your account.
        </p>
      </div>
      <div ref="settings" class="p-4 rounded-lg border border-border bg-background-elevated/50">
        <p class="font-medium color-text-highlighted">
          Settings
        </p>
        <p class="text-sm color-text-muted">
          Configure your preferences.
        </p>
      </div>
    </div>

    <PPopover
      :open="tour.open.value"
      :reference="tour.reference.value"
      :content="{ side: tour.current.value?.side, sideOffset: 8 }"
      :dismissible="false"
      arrow
    >
      <template #content>
        <div class="p-4 max-w-xs space-y-2">
          <div class="flex items-center justify-between gap-4">
            <p class="font-semibold color-text-highlighted">
              {{ tour.current.value?.title }}
            </p>
            <span class="text-xs color-text-muted tabular-nums">
              {{ tour.index.value + 1 }} / {{ tour.total.value }}
            </span>
          </div>
          <p class="text-sm color-text-muted">
            {{ tour.current.value?.body }}
          </p>
          <div class="flex items-center justify-between pt-2">
            <PButton
              color="neutral"
              variant="outline"
              size="sm"
              :disabled="!tour.hasPrev.value"
              @click="tour.prev()"
            >
              Back
            </PButton>
            <PButton size="sm" @click="tour.next()">
              {{ tour.hasNext.value ? 'Next' : 'Finish' }}
            </PButton>
          </div>
        </div>
      </template>
    </PPopover>
  </div>
</template>
