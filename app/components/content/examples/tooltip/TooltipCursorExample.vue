<script setup lang="ts">
const open = ref(false);
const anchor = ref({ x: 0, y: 0 });

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      bottom: anchor.value.y,
      ...anchor.value,
    } as DOMRect),
}));
</script>

<template>
  <PTooltip
    :open="open"
    :reference="reference"
    :content="{ side: 'top', sideOffset: 16, updatePositionStrategy: 'always' }"
  >
    <div
      class="text-sm border border-border-accented rounded-md border-dashed flex w-72 aspect-video items-center justify-center"
      @pointerenter="open = true"
      @pointerleave="open = false"
      @pointermove="(ev: PointerEvent) => {
        anchor.x = ev.clientX
        anchor.y = ev.clientY
      }"
    >
      Hover me
    </div>

    <template #content>
      {{ anchor.x.toFixed(0) }} - {{ anchor.y.toFixed(0) }}
    </template>
  </PTooltip>
</template>
