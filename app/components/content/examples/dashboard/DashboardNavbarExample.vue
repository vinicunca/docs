<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items: TabsItem[] = [{
  label: 'All',
  value: 'all'
}, {
  label: 'Unread',
  value: 'unread'
}]
</script>

<template>
  <PDashboardNavbar title="Inbox">
    <template #leading>
      <PDashboardSidebarCollapse />
    </template>

    <template #trailing>
      <PBadge label="4" variant="subtle" />
    </template>

    <template #right>
      <PTabs
        :items="items"
        default-value="all"
        size="sm"
        class="w-40"
        :content="false"
      />
    </template>
  </PDashboardNavbar>
</template>
