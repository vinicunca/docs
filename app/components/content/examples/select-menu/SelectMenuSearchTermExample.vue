<script setup lang="ts">
const searchTerm = ref('D')
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<template>
  <PSelectMenu v-model="value" v-model:search-term="searchTerm" :items="items" class="w-48" />
</template>
