<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const inputDate = useTemplateRef('inputDate')

const modelValue = shallowRef({
  start: new CalendarDate(2022, 1, 10),
  end: new CalendarDate(2022, 1, 20)
})
</script>

<template>
  <PInputDate ref="inputDate" v-model="modelValue" range>
    <template #trailing>
      <PPopover :reference="inputDate?.inputsRef[0]?.$el">
        <PButton
          color="neutral"
          variant="link"
          size="sm"
          icon="i-lucide-calendar"
          aria-label="Select a date range"
          class="px-0"
        />

        <template #content>
          <PCalendar v-model="modelValue" class="p-2" :number-of-months="2" range />
        </template>
      </PPopover>
    </template>
  </PInputDate>
</template>
