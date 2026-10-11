<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from 'pohon-ui';

const items = [
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/docs/composables',
    class: 'hidden',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
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
        to: '/docs/composables',
      },
      {
        label: 'Components',
        icon: 'i-lucide-box',
        to: '/docs/components',
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
