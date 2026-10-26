<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui';

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'variant' | 'collapsible' | 'side'>>();

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
  <div
    class="flex flex-1"
    :class="[
      variant === 'inset' && 'bg-neutral-50 dark:bg-neutral-950',
      side === 'right' && 'flex-row-reverse',
    ]"
  >
    <PSidebar
      v-model:open="open"
      :variant="variant"
      :collapsible="collapsible"
      :side="side"
      :ui="{
        container: 'h-full',
      }"
    >
      <template #header>
        <PIcon
          name="i-logos-nuxt-icon"
          class="size-8"
        />
      </template>

      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 bg-background flex flex-1 flex-col overflow-hidden peer-data-[variant=inset]:m-4 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-border peer-data-[variant=inset]:shadow-sm lg:peer-data-[variant=floating]:my-4">
      <div
        class="px-4 flex shrink-0 h-(--ui-header-height) items-center"
        :class="[
          variant !== 'floating' && 'border-b border-border',
          side === 'right' && 'justify-end',
        ]"
      >
        <PButton
          :icon="side === 'left' ? 'i-lucide-panel-left' : 'i-lucide-panel-right'"
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
