<script setup lang="ts">
/**
 * The row that opens a page section under the hero: a small caps title,
 * optionally a control beside it (`leading`), a rule, then the section's
 * figure (`meta`, a count in the mono caption every page shares) and whatever
 * else it keeps at its right edge (a link, controls). Below `sm` the trailing
 * part wraps under the title when it is wider than a word or two.
 */
defineProps<{
  title?: string;
  /** The figure at the right edge, "12 posts"; the `meta` slot for one that needs markup. */
  meta?: string;
  ui?: { root?: string; rule?: string; meta?: string };
}>();
</script>

<template>
  <div
    class="mb-8 flex gap-x-1.5 gap-y-3 min-h-9 items-center sm:gap-x-3.5"
    :class="[ui?.root]"
  >
    <h2
      v-if="title"
      class="text-xs color-text-muted tracking-widest font-medium whitespace-nowrap truncate uppercase"
    >
      {{ title }}
    </h2>

    <slot name="leading" />

    <span
      class="bg-border flex-1 h-px min-w-6"
      :class="[ui?.rule]"
    />

    <span
      v-if="meta || $slots.meta"
      class="text-[13px] color-text-dimmed tracking-wide font-mono whitespace-nowrap"
      :class="[ui?.meta]"
    >
      <slot name="meta">{{ meta }}</slot>
    </span>

    <slot />
  </div>
</template>
