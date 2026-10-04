<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

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
    <PDashboardSidebar
      open
      toggle-side="right"
    >
      <template #header>
        <Logo class="h-5 w-auto" />
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
