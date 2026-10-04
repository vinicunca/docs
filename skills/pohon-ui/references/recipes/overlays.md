# Overlays

Patterns for modals, slideovers, drawers, and command palettes.

## Confirmation dialog

```vue
<script setup lang="ts">
const isOpen = ref(false)

function confirmDelete() {
  // perform delete
  isOpen.value = false
}
</script>

<template>
  <PButton label="Delete" color="error" variant="soft" @click="isOpen = true" />

  <PModal v-model:open="isOpen" title="Delete item" description="This action cannot be undone. Are you sure?" :ui="{ footer: 'justify-end' }">
    <template #footer="{ close }">
      <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <PButton label="Delete" color="error" @click="confirmDelete" />
    </template>
  </PModal>
</template>
```

## Programmatic confirmation (useOverlay)

Reusable pattern — no template state needed at the call site.

```vue [components/ConfirmModal.vue]
<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()

const emit = defineEmits<{
  close: [confirmed: boolean]
}>()
</script>

<template>
  <PModal :close="{ onClick: () => emit('close', false) }" :title="title" :description="description">
    <template #footer>
      <PButton label="Cancel" color="neutral" variant="outline" @click="emit('close', false)" />
      <PButton label="Confirm" color="error" @click="emit('close', true)" />
    </template>
  </PModal>
</template>
```

```ts
// Usage anywhere
const overlay = useOverlay()
const confirm = overlay.create(ConfirmModal)

async function deleteItem(item) {
  const instance = confirm.open({
    title: 'Delete item',
    description: `Are you sure you want to delete "${item.name}"?`
  })

  if (await instance.result) {
    // user confirmed
  }
}
```

## Form in a slideover

```vue
<script setup lang="ts">
import * as z from 'zod'

const isOpen = ref(false)

const schema = z.object({
  name: z.string().min(1),
  email: z.email()
})

type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({})

function onSave() {
  // save user
  isOpen.value = false
}
</script>

<template>
  <PButton label="Add user" @click="isOpen = true" />

  <PSlideover v-model:open="isOpen" title="Add user" description="Fill in the details below.">
    <template #body>
      <PForm id="user-form" :schema="schema" :state="state" class="space-y-4" @submit="onSave">
        <PFormField name="name" label="Name">
          <PInput v-model="state.name" />
        </PFormField>
        <PFormField name="email" label="Email">
          <PInput v-model="state.email" type="email" />
        </PFormField>
      </PForm>
    </template>

    <template #footer="{ close }">
      <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <PButton type="submit" form="user-form" label="Save" />
    </template>
  </PSlideover>
</template>
```

## Command palette

```vue
<script setup lang="ts">
const isOpen = ref(false)

defineShortcuts({
  meta_k: () => { isOpen.value = true }
})

const groups = [{
  id: 'actions',
  label: 'Actions',
  items: [
    { label: 'New file', icon: 'i-lucide-file-plus', kbds: ['meta', 'n'], onSelect: () => newFile() },
    { label: 'New folder', icon: 'i-lucide-folder-plus', onSelect: () => newFolder() }
  ]
}, {
  id: 'navigation',
  label: 'Navigation',
  items: [
    { label: 'Dashboard', icon: 'i-lucide-house', to: '/dashboard' },
    { label: 'Settings', icon: 'i-lucide-settings', to: '/settings' }
  ]
}]
</script>

<template>
  <PButton label="Search..." icon="i-lucide-search" color="neutral" variant="outline" @click="isOpen = true" />

  <PModal v-model:open="isOpen">
    <template #content>
      <PCommandPalette :groups="groups" placeholder="Type a command or search..." close @update:open="isOpen = $event" />
    </template>
  </PModal>
</template>
```

## Drawer (bottom sheet)

```vue
<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <PButton label="Options" @click="isOpen = true" />

  <PDrawer v-model:open="isOpen" title="Options">
    <template #body>
      <div class="space-y-2 p-4">
        <PButton label="Share" icon="i-lucide-share" block variant="ghost" />
        <PButton label="Export" icon="i-lucide-download" block variant="ghost" />
        <PSeparator />
        <PButton label="Delete" icon="i-lucide-trash" block variant="ghost" color="error" />
      </div>
    </template>
  </PDrawer>
</template>
```
