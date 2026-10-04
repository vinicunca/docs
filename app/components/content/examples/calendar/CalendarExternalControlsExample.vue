<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const date = shallowRef(new CalendarDate(2025, 4, 2))
</script>

<template>
  <div class="flex flex-col gap-4">
    <PCalendar v-model="date" :month-controls="false" :year-controls="false" />

    <div class="flex justify-between gap-4">
      <PButton color="neutral" variant="outline" @click="date = date.subtract({ months: 1 })">
        Prev
      </PButton>

      <PButton color="neutral" variant="outline" @click="date = date.add({ months: 1 })">
        Next
      </PButton>
    </div>
  </div>
</template>
