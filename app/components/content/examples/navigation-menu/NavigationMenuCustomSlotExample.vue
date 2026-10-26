<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from 'pohon-ui';

const items = [
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/pohon/getting-started',
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/pohon/composables/define-shortcuts',
    class: 'hidden',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/pohon/components',
    class: 'hidden',
  },
  {
    slot: 'more' as const,
    as: 'span',
    class: 'p-0',
    content: {
      align: 'start' as const,
    },
    items: [
      {
        label: 'Composables',
        icon: 'i-lucide-database',
        to: '/pohon/composables/define-shortcuts',
      },
      {
        label: 'Components',
        icon: 'i-lucide-box',
        to: '/pohon/components',
      },
    ] satisfies Array<DropdownMenuItem>,
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/vinicunca/pohon',
    target: '_blank',
    slot: 'github' as const,
  },
] satisfies Array<NavigationMenuItem>;
</script>

<template>
  <PNavigationMenu
    :items="items"
    class="w-full justify-center"
  >
    <template #more="{ item }">
      <PDropdownMenu
        :content="item.content"
        :items="item.items"
      >
        <PButton
          icon="i-lucide-ellipsis"
          color="neutral"
          variant="link"
        />
      </PDropdownMenu>
    </template>

    <template #github-trailing>
      <PBadge
        label="6k+"
        color="neutral"
        variant="subtle"
        size="sm"
      />
    </template>
  </PNavigationMenu>
</template>
