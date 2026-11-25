<script setup lang="ts">
const appConfig = useAppConfig();
const toast = useToast();
const studioIcons = useStudioIcons();
</script>

<template>
  <div>
    <div class="p-4 flex gap-3 items-start">
      <PAvatar
        :icon="studioIcons.radar"
        size="lg"
        class="rounded-lg"
        :ui="{ icon: 'size-5 color-primary' }"
      />
      <div>
        <p class="color-text-highlighted font-semibold">
          Observability Plus
        </p>
        <p class="text-sm color-text-muted">
          A faster, natural-language way to explore your data. Monitoring moves to the Pro plan in 2026.
        </p>
      </div>
    </div>

    <div class="px-4 py-3 border-t border-border flex gap-2 items-center justify-end">
      <PButton
        label="Dismiss"
        color="neutral"
        variant="ghost"
      />
      <PButton
        label="Learn more"
        color="neutral"
        variant="subtle"
        :trailing-icon="appConfig.ui.icons.arrowRight"
        @click="toast.add({ title: 'Observability Plus' })"
      />
    </div>
  </div>
</template>
