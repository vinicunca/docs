<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'

const date = shallowRef(today(getLocalTimeZone()))
</script>

<template>
  <div class="flex flex-col gap-4">
    <PCalendar v-model="date" />

    <PButton color="neutral" variant="outline" class="justify-center" @click="date = today(getLocalTimeZone())">
      Today
    </PButton>
  </div>
</template>
