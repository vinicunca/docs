<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')

function onCreate(item: string) {
  items.value.push(item)

  value.value = item
}
</script>

<template>
  <PSelectMenu
    v-model="value"
    create-item
    :items="items"
    class="w-48"
    @create="onCreate"
  />
</template>
