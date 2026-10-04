<script setup lang="ts">
const appConfig = useAppConfig()
const toast = useToast()
const studioIcons = useStudioIcons()
</script>

<template>
  <div>
    <div class="p-4 flex items-start gap-3">
      <div class="flex items-center justify-center size-9 rounded-lg bg-background-elevated text-primary shrink-0">
        <PIcon :name="studioIcons.radar" class="size-5" />
      </div>
      <div>
        <p class="font-semibold color-text-highlighted">
          Observability Plus
        </p>
        <p class="text-sm color-text-muted">
          A faster, natural-language way to explore your data. Monitoring moves to the Pro plan in 2026.
        </p>
      </div>
    </div>

    <div class="flex items-center justify-end gap-2 border-t border-border px-4 py-3">
      <PButton label="Dismiss" color="neutral" variant="ghost" />
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
