<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const appConfig = useAppConfig()
const studioIcons = useStudioIcons()

const items = computed<NavigationMenuItem[][]>(() => [
  [
    { label: 'Dashboard', icon: studioIcons.dashboard, active: true },
    { label: 'Inbox', icon: studioIcons.inbox, badge: '4' },
    { label: 'Projects', icon: appConfig.ui.icons.folder },
    { label: 'Calendar', icon: studioIcons.calendar }
  ],
  [
    { label: 'Settings', icon: studioIcons.settings },
    { label: 'Help', icon: appConfig.ui.icons.info }
  ]
])
</script>

<template>
  <div class="p-2">
    <PNavigationMenu orientation="vertical" :items="items" class="w-full" />
  </div>
</template>
