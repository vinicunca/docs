<script setup lang="ts">
import type { BreadcrumbItem } from 'pohon-ui'

const items: BreadcrumbItem[] = [
  {
    label: 'Docs',
    to: '/docs'
  },
  {
    label: 'Components',
    to: '/docs/components'
  },
  {
    label: 'Breadcrumb',
    to: '/docs/components/breadcrumb'
  }
]
</script>

<template>
  <PBreadcrumb :items="items">
    <template #separator>
      <span class="mx-2 color-text-muted">/</span>
    </template>
  </PBreadcrumb>
</template>
