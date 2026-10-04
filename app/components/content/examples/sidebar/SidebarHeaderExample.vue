<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-col flex-1">
    <PHeader toggle-side="left" :ui="{ container: 'px-4!' }">
      <template #toggle>
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </template>
    </PHeader>

    <div class="flex flex-1 min-h-0">
      <PSidebar
        v-model:open="open"
        collapsible="icon"
        :ui="{
          gap: 'h-[calc(100%-var(--ui-header-height))]',
          container: 'absolute top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))]'
        }"
      >
        <PNavigationMenu
          :items="items"
          orientation="vertical"
          :ui="{ link: 'p-1.5 overflow-hidden' }"
        />
      </PSidebar>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
