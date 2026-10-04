<script setup lang="ts">
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot } from 'akar'
import { getWeekNumber } from 'akar/date'
</script>

<template>
  <div class="akar-demo akar-demo-CalendarWeeks">
    <CalendarRoot
        v-slot="{ weekDays, grid }"
        class="Calendar"
        fixed-weeks
      >
        <CalendarHeader class="CalendarHeader">
          <CalendarPrev
            class="CalendarNavButton"
          >
            <PIcon
              name="i-lucide-chevron-left"
              class="Icon"
            />
          </CalendarPrev>
          <CalendarHeading class="CalendarHeading" />
          <CalendarNext
            class="CalendarNavButton"
          >
            <PIcon
              name="i-lucide-chevron-right"
              class="Icon"
            />
          </CalendarNext>
        </CalendarHeader>
        <div
          class="CalendarWrapper"
        >
          <CalendarGrid
            v-for="month in grid"
            :key="month.value.toString()"
            class="CalendarGrid"
          >
            <CalendarGridHead>
              <CalendarGridRow class="CalendarGridRow">
                <CalendarHeadCell
                  class="CalendarHeadCell"
                >
                  Wk
                </CalendarHeadCell>
                <CalendarHeadCell
                  v-for="day in weekDays"
                  :key="day"
                  class="CalendarHeadCell"
                >
                  {{ day }}
                </CalendarHeadCell>
              </CalendarGridRow>
            </CalendarGridHead>
            <CalendarGridBody class="CalendarGridWrapper">
              <CalendarGridRow
                v-for="(weekDates, index) in month.rows"
                :key="`weekDate-${index}`"
                class="CalendarGridRow"
              >
                <div
                  class="CalendarWeek"
                  :row-index="index"
                >
                  {{ getWeekNumber(weekDates[0]) }}
                </div>
                <CalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                  class="CalendarCell"
                >
                  <CalendarCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    class="CalendarCellTrigger"
                  />
                </CalendarCell>
              </CalendarGridRow>
            </CalendarGridBody>
          </CalendarGrid>
        </div>
      </CalendarRoot>
  </div>
</template>
