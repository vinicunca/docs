<script setup lang="ts">
const props = defineProps<{
  package: DocsPackage
}>()

const versions = useRuntimeConfig().public.versions as Record<string, string>
const version = computed(() => props.package.npm ? versions[props.package.npm] : undefined)
</script>

<template>
  <NuxtLink :to="package.to" class="hidden sm:flex items-center gap-1.5 text-sm font-medium color-text-muted hover:color-text-highlighted">
    <span>{{ package.title }}</span>
    <PBadge v-if="version" color="primary" variant="subtle" size="sm">
      v{{ version }}
    </PBadge>
  </NuxtLink>
</template>
