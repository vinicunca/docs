<script setup lang="ts">
const props = defineProps<{
  to: string;
  component: string;
}>();
const { track } = useAnalytics();
const studioIcons = useStudioIcons();
</script>

<template>
  <PTooltip
    text="Open in playground"
    :content="{ side: 'right' }"
  >
    <PButton
      :to="props.to"
      target="_blank"
      :icon="studioIcons.play"
      color="neutral"
      variant="outline"
      size="sm"
      class="rounded-full ring-ring-muted transition-opacity duration-200 bottom-[-13px] right-[-13px] absolute z-1 lg:opacity-0 lg:group-hover/component:opacity-100"
      aria-label="Open in playground"
      tabindex="-1"
      @click="track('Playground Opened', { component: props.component })"
    />
  </PTooltip>
</template>
