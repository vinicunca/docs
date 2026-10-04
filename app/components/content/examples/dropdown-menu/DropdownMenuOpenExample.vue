<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui'

const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})

const items: DropdownMenuItem[] = [
  {
    label: 'Profile',
    icon: 'i-lucide-user'
  }, {
    label: 'Billing',
    icon: 'i-lucide-credit-card'
  }, {
    label: 'Settings',
    icon: 'i-lucide-cog'
  }
]
</script>

<template>
  <PDropdownMenu v-model:open="open" :items="items" :ui="{ content: 'w-48' }">
    <PButton label="Open" color="neutral" variant="outline" icon="i-lucide-menu" />
  </PDropdownMenu>
</template>
