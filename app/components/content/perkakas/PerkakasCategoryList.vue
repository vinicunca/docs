<script setup lang="ts">
import { perkakasGroups } from './catalog'

const props = defineProps<{
  category: string
}>()

const group = computed(() => perkakasGroups.find(({ category }) => category === props.category))
</script>

<template>
  <div v-if="group" class="my-3 flex flex-wrap gap-2">
    <NuxtLink
      v-for="fn in group.functions"
      :key="fn.name"
      :to="`/perkakas/functions#${fn.name}`"
      class="no-underline"
    >
      <ProseCode>{{ fn.name }}</ProseCode>
    </NuxtLink>
  </div>
</template>
