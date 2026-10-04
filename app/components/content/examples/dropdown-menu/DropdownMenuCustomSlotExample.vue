<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui'

const items = [
  {
    label: 'Profile',
    icon: 'i-lucide-user',
    slot: 'profile' as const
  }, {
    label: 'Billing',
    icon: 'i-lucide-credit-card'
  }, {
    label: 'Settings',
    icon: 'i-lucide-cog'
  }
] satisfies DropdownMenuItem[]
</script>

<template>
  <PDropdownMenu :items="items" :ui="{ content: 'w-48' }">
    <PButton label="Open" color="neutral" variant="outline" icon="i-lucide-menu" />

    <template #profile-trailing>
      <PIcon name="i-lucide-badge-check" class="shrink-0 size-5 text-primary" />
    </template>
  </PDropdownMenu>
</template>
