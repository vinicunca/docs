<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})

const items: ContextMenuItem[] = [
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
  <PContextMenu v-model:open="open" :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </PContextMenu>
</template>
