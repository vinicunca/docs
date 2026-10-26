<script setup lang="ts">
const props = defineProps<{
  package: DocsPackage;
}>();

const versions = useRuntimeConfig().public.versions as Record<string, string>;
const version = computed(() => props.package.npm ? versions[props.package.npm] : undefined);
</script>

<template>
  <NuxtLink
    :to="package.to"
    class="text-sm color-text-muted font-medium gap-1.5 hidden items-center hover:color-text-highlighted sm:flex"
  >
    <span>{{ package.title }}</span>
    <PBadge
      v-if="version"
      color="primary"
      variant="subtle"
      size="sm"
    >
      v{{ version }}
    </PBadge>
  </NuxtLink>
</template>
