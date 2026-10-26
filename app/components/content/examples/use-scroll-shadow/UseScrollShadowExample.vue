<script setup lang="ts">
const el = useTemplateRef('el');

const { style } = useScrollShadow(el);
</script>

<template>
  <div class="rounded-lg bg-background-elevated/50 max-w-sm">
    <div
      ref="el"
      :style="style"
      class="p-4 h-72 overflow-y-auto space-y-4"
    >
      <p
        v-for="i in 6"
        :key="i"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Morbi accumsan cursus enim, sed ultricies sapien.
      </p>
    </div>
  </div>
</template>
