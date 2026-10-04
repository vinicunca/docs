<template>
  <PTheme
    :props="{
      button: { color: 'neutral', variant: 'subtle', size: 'lg' },
      tooltip: { delayDuration: 0, arrow: true }
    }"
  >
    <div class="flex items-center gap-2">
      <PTooltip text="Inherits delayDuration from theme">
        <PButton label="Hover me" />
      </PTooltip>
      <PButton label="With icon" icon="i-lucide-rocket" />
      <PButton label="Square" icon="i-lucide-star" square />
    </div>
  </PTheme>
</template>
