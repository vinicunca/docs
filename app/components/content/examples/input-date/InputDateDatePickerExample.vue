<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const inputDate = useTemplateRef('inputDate')

const modelValue = shallowRef(new CalendarDate(2022, 1, 10))
</script>

<template>
  <PInputDate ref="inputDate" v-model="modelValue">
    <template #trailing>
      <PPopover :reference="inputDate?.inputsRef[3]?.$el">
        <PButton
          color="neutral"
          variant="link"
          size="sm"
          icon="i-lucide-calendar"
          aria-label="Select a date"
          class="px-0"
        />

        <template #content>
          <PCalendar v-model="modelValue" class="p-2" />
        </template>
      </PPopover>
    </template>
  </PInputDate>
</template>
