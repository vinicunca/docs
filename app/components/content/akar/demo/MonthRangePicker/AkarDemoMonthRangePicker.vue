<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { MonthRangePickerCell, MonthRangePickerCellTrigger, MonthRangePickerGrid, MonthRangePickerGridBody, MonthRangePickerGridRow, MonthRangePickerHeader, MonthRangePickerHeading, MonthRangePickerNext, MonthRangePickerPrev, MonthRangePickerRoot } from 'akar'
import './styles.css'

const defaultValue = {
  start: new CalendarDate(2024, 3, 1),
  end: new CalendarDate(2024, 6, 1),
}
</script>

<template>
  <div class="akar-demo akar-demo-MonthRangePicker">
    <MonthRangePickerRoot
        v-slot="{ grid }"
        :default-value="defaultValue"
        class="MonthRangePicker"
      >
        <MonthRangePickerHeader class="MonthRangePickerHeader">
          <MonthRangePickerPrev class="MonthRangePickerNavButton">
            <PIcon
              name="i-lucide-chevron-left"
              class="Icon"
            />
          </MonthRangePickerPrev>
          <MonthRangePickerHeading class="MonthRangePickerHeading" />
          <MonthRangePickerNext class="MonthRangePickerNavButton">
            <PIcon
              name="i-lucide-chevron-right"
              class="Icon"
            />
          </MonthRangePickerNext>
        </MonthRangePickerHeader>
        <div class="MonthRangePickerWrapper">
          <MonthRangePickerGrid class="MonthRangePickerGrid">
            <MonthRangePickerGridBody class="MonthRangePickerGridWrapper">
              <MonthRangePickerGridRow
                v-for="(months, index) in grid.rows"
                :key="`month-${index}`"
                class="MonthRangePickerGridRow"
              >
                <MonthRangePickerCell
                  v-for="month in months"
                  :key="month.toString()"
                  :date="month"
                  class="MonthRangePickerCell"
                >
                  <MonthRangePickerCellTrigger
                    :month="month"
                    class="MonthRangePickerCellTrigger"
                  />
                </MonthRangePickerCell>
              </MonthRangePickerGridRow>
            </MonthRangePickerGridBody>
          </MonthRangePickerGrid>
        </div>
      </MonthRangePickerRoot>
  </div>
</template>
