<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui';

const items = [
  {
    label: 'Home',
    to: '/',
  },
  {
    slot: 'dropdown' as const,
    icon: 'i-lucide-ellipsis',
    children: [
      {
        label: 'Documentation',
        to: '/docs',
      },
      {
        label: 'Themes',
      },
      {
        label: 'GitHub',
      },
    ],
  },
  {
    label: 'Components',
    to: '/docs/components',
  },
  {
    label: 'Breadcrumb',
    to: '/docs/components/breadcrumb',
  },
] satisfies Array<BreadcrumbItem>;
</script>

<template>
  <PBreadcrumb :items="items">
    <template #dropdown="{ item }">
      <PDropdownMenu :items="item.children">
        <PButton
          :icon="item.icon"
          color="neutral"
          variant="link"
          class="p-0.5"
        />
      </PDropdownMenu>
    </template>
  </PBreadcrumb>
</template>
