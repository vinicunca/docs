<script setup lang="ts">
const toast = useToast()
const studioIcons = useStudioIcons()

const severities = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' }
]

const components = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'API', value: 'api' },
  { label: 'Billing', value: 'billing' }
]

const title = ref('')
const severity = ref('medium')
const component = ref('dashboard')
const steps = ref('')
</script>

<template>
  <div>
    <div class="p-4 space-y-4">
      <div>
        <p class="font-semibold color-text-highlighted">
          Report a bug
        </p>
        <p class="text-sm color-text-muted">
          Help us fix issues faster.
        </p>
      </div>

      <PFormField label="Title">
        <PInput v-model="title" placeholder="Brief description of the issue" class="w-full" />
      </PFormField>

      <div class="grid grid-cols-2 gap-3">
        <PFormField label="Severity">
          <PSelect v-model="severity" :items="severities" :content="{ position: 'item-aligned' }" class="w-full" />
        </PFormField>
        <PFormField label="Component">
          <PSelect v-model="component" :items="components" :content="{ position: 'item-aligned' }" class="w-full" />
        </PFormField>
      </div>

      <PFormField label="Steps to reproduce">
        <PTextarea v-model="steps" :rows="3" placeholder="1. Go to… 2. Click on… 3. See error" class="w-full" />
      </PFormField>
    </div>

    <div class="flex items-center justify-between border-t border-border px-4 py-3">
      <PButton label="Attach file" :icon="studioIcons.paperclip" color="neutral" variant="soft" />
      <PButton label="Submit bug" variant="subtle" @click="toast.add({ title: 'Bug reported' })" />
    </div>
  </div>
</template>
