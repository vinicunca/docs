<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { MonthPickerCell, MonthPickerCellTrigger, MonthPickerGrid, MonthPickerGridBody, MonthPickerGridRow, MonthPickerHeader, MonthPickerHeading, MonthPickerNext, MonthPickerPrev, MonthPickerRoot } from 'akar';
import './styles.css';

const date = new CalendarDate(2024, 10, 1);
</script>

<template>
  <div class="akar-demo akar-demo-MonthPicker">
    <MonthPickerRoot
      v-slot="{ grid }"
      :default-value="date"
      class="MonthPicker"
    >
      <MonthPickerHeader class="MonthPickerHeader">
        <MonthPickerPrev class="MonthPickerNavButton">
          <PIcon
            name="i-lucide-chevron-left"
            class="Icon"
          />
        </MonthPickerPrev>
        <MonthPickerHeading class="MonthPickerHeading" />
        <MonthPickerNext class="MonthPickerNavButton">
          <PIcon
            name="i-lucide-chevron-right"
            class="Icon"
          />
        </MonthPickerNext>
      </MonthPickerHeader>
      <div class="MonthPickerWrapper">
        <MonthPickerGrid class="MonthPickerGrid">
          <MonthPickerGridBody class="MonthPickerGridWrapper">
            <MonthPickerGridRow
              v-for="(months, index) in grid.rows"
              :key="`month-${index}`"
              class="MonthPickerGridRow"
            >
              <MonthPickerCell
                v-for="month in months"
                :key="month.toString()"
                :date="month"
                class="MonthPickerCell"
              >
                <MonthPickerCellTrigger
                  :month="month"
                  class="MonthPickerCellTrigger"
                />
              </MonthPickerCell>
            </MonthPickerGridRow>
          </MonthPickerGridBody>
        </MonthPickerGrid>
      </div>
    </MonthPickerRoot>
  </div>
</template>
