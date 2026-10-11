<script setup lang="ts">
defineProps<{
  html: string;
  code: string;
}>();
</script>

<template>
  <ProsePre
    :code="code"
    language="ts"
    class="shiki my-3"
  >
    <!-- Highlighted at generate time in scripts/perkakas-functions.mjs. -->
    <code v-html="html" />
  </ProsePre>
</template>
