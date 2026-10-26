<script setup lang="ts">
const appConfig = useAppConfig();
const toast = useToast();
const studioIcons = useStudioIcons();
</script>

<template>
  <div>
    <div class="p-4 flex gap-3 items-start">
      <div class="color-primary rounded-lg bg-background-elevated flex shrink-0 size-9 items-center justify-center">
        <PIcon
          :name="studioIcons.radar"
          class="size-5"
        />
      </div>
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
