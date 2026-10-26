<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from 'pohon-ui';

const items: Array<Array<NavigationMenuItem>> = [
  [
    {
      label: 'Personal',
      type: 'label',
      slot: 'personal-label' as const,
    },
    {
      label: 'Design System',
      icon: 'i-lucide-folder',
      active: true,
    },
    {
      label: 'Travel',
      icon: 'i-lucide-folder',
    },
  ],
  [
    {
      label: 'Teams',
      type: 'label',
      slot: 'teams-label' as const,
    },
    {
      label: 'Engineering',
      icon: 'i-lucide-folder',
    },
    {
      label: 'Marketing',
      icon: 'i-lucide-folder',
    },
  ],
];

const dropdownItems: Array<Array<DropdownMenuItem>> = [
  [
    { label: 'View Project', icon: 'i-lucide-folder-open' },
    { label: 'Share Project', icon: 'i-lucide-share' },
  ],
  [
    { label: 'Delete Project', icon: 'i-lucide-trash', color: 'error' },
  ],
];
</script>

<template>
  <PNavigationMenu
    orientation="vertical"
    :items="items"
    :ui="{ link: 'overflow-hidden has-data-[state=open]:before:bg-background-elevated/50' }"
    class="w-48"
  >
    <template #personal-label-trailing>
      <PButton
        icon="i-lucide-plus"
        color="neutral"
        variant="ghost"
        size="xs"
      />
    </template>

    <template #teams-label-trailing>
      <PButton
        icon="i-lucide-plus"
        color="neutral"
        variant="ghost"
        size="xs"
      />
    </template>

    <template #item-trailing>
      <div class="flex translate-x-full transition-transform -my-0.5 -mr-1.5 group-hover:translate-x-0 has-data-[state=open]:translate-x-0">
        <PDropdownMenu
          :items="dropdownItems"
          :content="{ align: 'start' }"
          :modal="false"
          size="xs"
        >
          <PButton
            as="div"
            icon="i-lucide-ellipsis"
            color="neutral"
            variant="ghost"
            size="xs"
            class="color-text-muted mr-1.5 hover:color-text-highlighted data-[state=open]:bg-background-accented/50 hover:bg-background-accented/50"
          />
        </PDropdownMenu>
      </div>
    </template>
  </PNavigationMenu>
</template>
