<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const modelValue = shallowRef(new CalendarDate(2022, 1, 10))

function getColorByDate(date: Date) {
  const isWeekend = date.getDay() % 6 == 0
  const isDayMeeting = date.getDay() % 3 == 0

  if (isWeekend) {
    return undefined
  }

  if (isDayMeeting) {
    return 'error'
  }

  return 'success'
}
</script>

<template>
  <PCalendar v-model="modelValue">
    <template #day="{ day }">
      <PChip :show="!!getColorByDate(day.toDate('UTC'))" :color="getColorByDate(day.toDate('UTC'))" size="2xs">
        {{ day.day }}
      </PChip>
    </template>
  </PCalendar>
</template>
