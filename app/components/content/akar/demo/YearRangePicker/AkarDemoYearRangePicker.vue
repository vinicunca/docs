<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { YearRangePickerCell, YearRangePickerCellTrigger, YearRangePickerGrid, YearRangePickerGridBody, YearRangePickerGridRow, YearRangePickerHeader, YearRangePickerHeading, YearRangePickerNext, YearRangePickerPrev, YearRangePickerRoot } from 'akar'
import './styles.css'

const defaultValue = {
  start: new CalendarDate(2020, 1, 1),
  end: new CalendarDate(2024, 1, 1),
}
</script>

<template>
  <div class="akar-demo akar-demo-YearRangePicker">
    <YearRangePickerRoot
        v-slot="{ grid }"
        :default-value="defaultValue"
        class="YearRangePicker"
      >
        <YearRangePickerHeader class="YearRangePickerHeader">
          <YearRangePickerPrev class="YearRangePickerNavButton">
            <PIcon
              name="i-lucide-chevron-left"
              class="Icon"
            />
          </YearRangePickerPrev>
          <YearRangePickerHeading class="YearRangePickerHeading" />
          <YearRangePickerNext class="YearRangePickerNavButton">
            <PIcon
              name="i-lucide-chevron-right"
              class="Icon"
            />
          </YearRangePickerNext>
        </YearRangePickerHeader>
        <div class="YearRangePickerWrapper">
          <YearRangePickerGrid class="YearRangePickerGrid">
            <YearRangePickerGridBody class="YearRangePickerGridWrapper">
              <YearRangePickerGridRow
                v-for="(years, index) in grid.rows"
                :key="`year-${index}`"
                class="YearRangePickerGridRow"
              >
                <YearRangePickerCell
                  v-for="year in years"
                  :key="year.toString()"
                  :date="year"
                  class="YearRangePickerCell"
                >
                  <YearRangePickerCellTrigger
                    :year="year"
                    class="YearRangePickerCellTrigger"
                  />
                </YearRangePickerCell>
              </YearRangePickerGridRow>
            </YearRangePickerGridBody>
          </YearRangePickerGrid>
        </div>
      </YearRangePickerRoot>
  </div>
</template>
