<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui';

const items: Array<Array<NavigationMenuItem>> = [[{
  label: 'General',
  icon: 'i-lucide-user',
  active: true,
}, {
  label: 'Members',
  icon: 'i-lucide-users',
}, {
  label: 'Notifications',
  icon: 'i-lucide-bell',
}], [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: 'https://pohon.vinicunca.dev/docs',
  target: '_blank',
}, {
  label: 'Help & Feedback',
  icon: 'i-lucide-help-circle',
  to: 'https://github.com/vinicunca/pohon/issues',
  target: '_blank',
}]];
</script>

<template>
  <PDashboardToolbar>
    <PNavigationMenu
      :items="items"
      highlight
      class="flex-1"
    />
  </PDashboardToolbar>
</template>
