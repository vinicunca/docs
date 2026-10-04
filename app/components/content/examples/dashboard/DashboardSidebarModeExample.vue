<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

defineProps<{
  mode: 'drawer' | 'slideover' | 'modal'
}>()

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <PDashboardGroup>
    <PDashboardSidebar :mode="mode">
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" class="h-5 w-auto" />
        <PIcon v-else name="i-simple-icons-nuxtdotjs" class="size-5 text-primary mx-auto" />
      </template>

      <PNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </PDashboardSidebar>

    <PDashboardPanel>
      <template #header>
        <PDashboardNavbar title="Dashboard" />
      </template>
    </PDashboardPanel>
  </PDashboardGroup>
</template>
