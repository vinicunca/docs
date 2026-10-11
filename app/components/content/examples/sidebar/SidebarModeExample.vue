<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui';

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'mode'>>();

const open = ref(true);

const items: Array<NavigationMenuItem> = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true,
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4',
}, {
  label: 'Contacts',
  icon: 'i-lucide-users',
}];
</script>

<template>
  <div class="flex flex-1">
    <PSidebar
      v-model:open="open"
      :mode="mode"
      title="Navigation"
    >
      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex flex-1 flex-col">
      <div class="px-4 border-b border-border flex shrink-0 h-(--ui-header-height) items-center">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="p-4 flex-1">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
