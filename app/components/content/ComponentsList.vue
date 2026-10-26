<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();

const { data: components } = await useAsyncData(`components-${props.category}`, () => {
  return queryCollection('docs')
    .where('path', 'LIKE', '/pohon/components/%')
    .where('extension', '=', 'md')
    .where('category', '=', props.category)
    .where('index', 'IS NULL')
    .select('path', 'title', 'description')
    .all();
});
</script>

<template>
  <PPageGrid class="gap-5">
    <PPageCard
      v-for="(component, index) in components"
      :key="component.path"
      :title="component.title"
      :description="component.description"
      :to="component.path"
      :ui="{
        root: 'overflow-hidden group ring-border-muted',
        header: 'mb-0',
        container: 'p-0 lg:p-0',
        body: 'p-4',
        title: 'text-[15px] font-medium',
        description: 'line-clamp-2 mt-0.5',
      }"
    >
      <template #header>
        <div class="border border-border-muted rounded-md rounded-b-none bg-background-muted aspect-video overflow-hidden -m-px">
          <PColorModeImage
            :light="`${component.path.replace('/pohon/components/', '/components/light/')}.png`"
            :dark="`${component.path.replace('/pohon/components/', '/components/dark/')}.png`"
            class="size-full transition-transform group-hover:scale-105"
            :loading="index >= 4 ? 'lazy' : 'eager'"
            width="640"
            height="360"
            :alt="`${component.title} preview`"
          />
        </div>
      </template>
    </PPageCard>
  </PPageGrid>
</template>
