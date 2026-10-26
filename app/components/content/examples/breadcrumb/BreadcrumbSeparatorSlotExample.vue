<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui';

const items: Array<BreadcrumbItem> = [
  {
    label: 'Docs',
    to: '/docs',
  },
  {
    label: 'Components',
    to: '/docs/components',
  },
  {
    label: 'Breadcrumb',
    to: '/docs/components/breadcrumb',
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
