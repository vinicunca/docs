<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui'

const items: DropdownMenuItem[] = [
  {
    label: 'Team',
    icon: 'i-lucide-users'
  },
  {
    label: 'Invite users',
    icon: 'i-lucide-user-plus',
    children: [
      {
        label: 'Invite by email',
        icon: 'i-lucide-send-horizontal'
      },
      {
        label: 'Invite by link',
        icon: 'i-lucide-link'
      }
    ]
  },
  {
    label: 'New team',
    icon: 'i-lucide-plus'
  }
]
</script>

<template>
  <PFieldGroup>
    <PButton color="neutral" variant="subtle" label="Settings" />

    <PDropdownMenu :items="items">
      <PButton
        color="neutral"
        variant="outline"
        icon="i-lucide-chevron-down"
      />
    </PDropdownMenu>
  </PFieldGroup>
</template>
