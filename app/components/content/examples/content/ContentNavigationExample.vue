<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');
</script>

<template>
  <PContentNavigation
    :navigation="navigation"
    highlight
  />
</template>
