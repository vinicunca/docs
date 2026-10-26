<script setup lang="ts">
import type { UseTourReturn } from 'pohon-ui/composables';
import { useElementBounding, useWindowSize } from '@vueuse/core';

const props = withDefaults(defineProps<{
  tour: UseTourReturn;
  padding?: number;
}>(), {
  padding: 8,
});

// Only real elements can be measured: a centered step anchors to a virtual element,
// which `ResizeObserver` and `MutationObserver` reject.
const target = computed(() => {
  const el = props.tour.reference.value;
  return el && el instanceof Element ? el as HTMLElement : null;
});

const { top, left, width: targetWidth, height: targetHeight } = useElementBounding(target);
const { width, height } = useWindowSize();

// The target's own corner radius, so the theme radius carries over. Read once per step, not per frame.
const targetRadius = computed(() => target.value ? Number.parseFloat(getComputedStyle(target.value).borderTopLeftRadius) || 0 : 0);

// The box is physical even in RTL, hence `left-0` + `translate` on the ring below.
const hole = computed(() => {
  // A target removed from the DOM would measure as an empty box at the origin.
  if (!target.value?.isConnected) {
    return null;
  }

  const p = props.padding;
  const w = targetWidth.value + p * 2;
  const h = targetHeight.value + p * 2;
  // Concentric corners: a rounded target gets its radius plus the padding, a square one stays square.
  const r = targetRadius.value > 0 ? targetRadius.value + p : 0;
  return { x: left.value - p, y: top.value - p, w, h, r: Math.min(r, w / 2, h / 2) };
});

// Full-viewport backdrop minus a rounded cutout. `clip-path` also clips hit testing,
// so the target stays clickable while the rest of the page is blocked.
const clipPath = computed(() => {
  if (!hole.value) {
    return undefined;
  }

  const { x, y, w, h, r } = hole.value;
  return `path(evenodd, "M0 0H${width.value}V${height.value}H0Z M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${2 * r - w}a${r} ${r} 0 0 1 ${-r} ${-r}v${2 * r - h}a${r} ${r} 0 0 1 ${r} ${-r}Z")`;
});
</script>

<template>
  <Teleport to="body">
    <template v-if="tour.open.value">
      <div
        aria-hidden="true"
        class="bg-black/50 inset-0 fixed z-40"
        :style="{ clipPath }"
      />
      <div
        v-if="hole"
        aria-hidden="true"
        class="pointer-events-none ring-2 ring-primary left-0 top-0 fixed z-40"
        :style="{ width: `${hole.w}px`, height: `${hole.h}px`, borderRadius: `${hole.r}px`, transform: `translate(${hole.x}px, ${hole.y}px)` }"
      />
    </template>
  </Teleport>
</template>
