<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui';

const items: Array<BreadcrumbItem> = [
  {
    label: 'Docs',
    to: '/pohon/getting-started',
  },
  {
    label: 'Components',
    to: '/pohon/components',
  },
  {
    label: 'Breadcrumb',
    to: '/pohon/components/breadcrumb',
  },
];
</script>

<template>
  <PBreadcrumb :items="items">
    <template #separator>
      <span class="color-text-muted mx-2">/</span>
    </template>
  </PBreadcrumb>
</template>
