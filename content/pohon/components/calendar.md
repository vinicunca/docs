---
title: "Calendar"
description: "A calendar component for selecting single dates, multiple dates or date ranges."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/calendar.md"
---
## Usage

Use the `v-model` directive to control the selected date.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef(new CalendarDate(2022, 2, 3))
</script>

<template>
  <UCalendar v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const defaultValue = shallowRef(new CalendarDate(2022, 2, 6))
</script>

<template>
  <UCalendar :default-value="defaultValue" />
</template>
```

**Nuxt:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
> 
> This component uses the `@internationalized/date` package for locale-aware formatting. The date format is determined by the `locale` prop of the App component.

**Vue:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue#locale
> 
> This component uses the `@internationalized/date` package for locale-aware formatting. The date format is determined by the `locale` prop of the App component.

### Type

Use the `type` prop to change what the calendar selects. Defaults to `date`.

When using `date`, click the heading to switch from the day view to a month then year view for quick navigation, then drill back down to pick a date.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef(new CalendarDate(2022, 2, 1))
</script>

<template>
  <UCalendar type="month" v-model="value" />
</template>
```

Use `type="year"` to render a standalone year picker.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef(new CalendarDate(2022, 1, 1))
</script>

<template>
  <UCalendar type="year" v-model="value" />
</template>
```

### Multiple

Use the `multiple` prop to allow multiple selections.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef([new CalendarDate(2022, 2, 4), new CalendarDate(2022, 2, 6), new CalendarDate(2022, 2, 8)])
</script>

<template>
  <UCalendar multiple v-model="value" />
</template>
```

### Range

Use the `range` prop to select a range of dates.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef({ start: new CalendarDate(2022, 2, 3), end: new CalendarDate(2022, 2, 20) })
</script>

<template>
  <UCalendar range v-model="value" />
</template>
```

The `range` prop also works with `type="month"` and `type="year"`, letting you select a range of months or years.

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const value = shallowRef({ start: new CalendarDate(2022, 2, 1), end: new CalendarDate(2022, 6, 1) })
</script>

<template>
  <UCalendar type="month" range v-model="value" />
</template>
```

### Number Of Months

Use the `numberOfMonths` prop to change the number of months in the calendar.

```vue
<template>
  <UCalendar :number-of-months="3" />
</template>
```

### Month Controls

Use the `month-controls` prop to show the month controls. Defaults to `true`.

```vue
<template>
  <UCalendar :month-controls="false" />
</template>
```

Use the `prev-month` and `next-month` props to override the month buttons.

```vue
<template>
  <UCalendar :prev-month="{
  color: 'primary',
  variant: 'soft'
}" :next-month="{
  color: 'primary',
  variant: 'soft'
}" />
</template>
```

### Year Controls

Use the `year-controls` prop to show the year controls. Defaults to `true`.

```vue
<template>
  <UCalendar :year-controls="false" />
</template>
```

Use the `prev-year` and `next-year` props to override the year buttons.

```vue
<template>
  <UCalendar :prev-year="{
  color: 'primary',
  variant: 'soft'
}" :next-year="{
  color: 'primary',
  variant: 'soft'
}" />
</template>
```

### View Control

Use the `view-control` prop to make the heading a button that switches between the day, month and year views. Defaults to `true`.

```vue
<template>
  <UCalendar :view-control="false" />
</template>
```

Set the `view-control` prop to an object to override the heading button.

```vue
<template>
  <UCalendar :view-control="{
  color: 'primary',
  variant: 'soft'
}" />
</template>
```

### Fixed Weeks

Use the `fixed-weeks` prop to display the calendar with fixed weeks.

```vue
<template>
  <UCalendar :fixed-weeks="false" />
</template>
```

### Week Numbers

Use the `week-numbers` prop to display week numbers in the calendar.

```vue
<template>
  <UCalendar week-numbers fixed-weeks />
</template>
```

### Color

Use the `color` prop to change the color of the calendar.

```vue
<template>
  <UCalendar color="neutral" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the calendar.

```vue
<template>
  <UCalendar variant="subtle" />
</template>
```

### Size

Use the `size` prop to change the size of the calendar.

```vue
<template>
  <UCalendar size="xl" />
</template>
```

### Disabled

Use the `disabled` prop to disable the calendar.

```vue
<template>
  <UCalendar disabled />
</template>
```

## Examples

### With chip events

Use the [Chip](/pohon/components/chip) component to add events to specific days.

```vue [CalendarEventsExample.vue]
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
```

### With disabled dates

Use the `is-date-disabled` prop with a function to mark specific dates as disabled. When using `type="month"` or `type="year"`, use the `is-month-disabled` or `is-year-disabled` prop instead.

```vue [CalendarDisabledDatesExample.vue]
<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { CalendarDate } from '@internationalized/date'

const modelValue = shallowRef({
  start: new CalendarDate(2022, 1, 1),
  end: new CalendarDate(2022, 1, 9)
})

const isDateDisabled = (date: DateValue) => {
  return date.day >= 10 && date.day <= 16
}
</script>

<template>
  <PCalendar v-model="modelValue" :is-date-disabled="isDateDisabled" range />
</template>
```

### With unavailable dates

Use the `is-date-unavailable` prop with a function to mark specific dates as unavailable. When using `type="month"` or `type="year"`, use the `is-month-unavailable` or `is-year-unavailable` prop instead.

```vue [CalendarUnavailableDatesExample.vue]
<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { CalendarDate } from '@internationalized/date'

const modelValue = shallowRef({
  start: new CalendarDate(2022, 1, 1),
  end: new CalendarDate(2022, 1, 9)
})

const isDateUnavailable = (date: DateValue) => {
  return date.day >= 10 && date.day <= 16
}
</script>

<template>
  <PCalendar v-model="modelValue" :is-date-unavailable="isDateUnavailable" range />
</template>
```

### With min/max dates

Use the `min-value` and `max-value` props to limit the dates.

```vue [CalendarMinMaxDatesExample.vue]
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const modelValue = shallowRef(new CalendarDate(2023, 9, 10))
const minDate = new CalendarDate(2023, 9, 1)
const maxDate = new CalendarDate(2023, 9, 30)
</script>

<template>
  <PCalendar v-model="modelValue" :min-value="minDate" :max-value="maxDate" />
</template>
```

### With other calendar systems

You can use other calenders from `@internationalized/date` to implement a different calendar system.

```vue [CalendarOtherSystemExample.vue]
<script lang="ts" setup>
import { CalendarDate, HebrewCalendar } from '@internationalized/date'

const hebrewDate = shallowRef(new CalendarDate(new HebrewCalendar(), 5781, 1, 1))
</script>

<template>
  <PCalendar v-model="hebrewDate" />
</template>
```

> [!NOTE]
> See: https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations
> 
> You can check all the available calendars on `@internationalized/date` docs.

### With external controls

You can control the calendar with external controls by manipulating the date passed in the `v-model`.

```vue [CalendarExternalControlsExample.vue]
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
```

### With today's date

Use the `today` function from `@internationalized/date` with `getLocalTimeZone` to set the value to the current date.

```vue [CalendarTodayExample.vue]
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
```

### As a date picker

Use a [Button](/pohon/components/button) and a [Popover](/pohon/components/popover) component to create a date picker.

```vue [CalendarDatePickerExample.vue]
<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const modelValue = shallowRef(new CalendarDate(2022, 1, 10))
</script>

<template>
  <PPopover>
    <PButton color="neutral" variant="subtle" icon="i-lucide-calendar">
      {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
    </PButton>

    <template #content>
      <PCalendar v-model="modelValue" class="p-2" />
    </template>
  </PPopover>
</template>
```

### As a date range picker

Use a [Button](/pohon/components/button) and a [Popover](/pohon/components/popover) component to create a date range picker with preset ranges.

```vue [CalendarDateRangePickerExample.vue]
<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'

const df = new DateFormatter('en-US', { dateStyle: 'medium' })
const tz = getLocalTimeZone()
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 })
const isDesktop = breakpoints.greaterOrEqual('sm')

const ranges = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 14 days', days: 14 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 3 months', months: 3 },
  { label: 'Last 6 months', months: 6 },
  { label: 'Last year', years: 1 }
]

const initialEnd = today(tz)
const modelValue = shallowRef({
  start: initialEnd.subtract({ days: 14 }),
  end: initialEnd
})

const label = computed(() => {
  const { start, end } = modelValue.value
  if (!start) return 'Pick a date'
  if (!end) return df.format(start.toDate(tz))
  return `${df.format(start.toDate(tz))} - ${df.format(end.toDate(tz))}`
})

function computeStart(range: typeof ranges[number]) {
  const end = today(tz)
  return { start: end.subtract({ days: range.days, months: range.months, years: range.years }), end }
}

function isRangeSelected(range: typeof ranges[number]) {
  if (!modelValue.value?.start || !modelValue.value?.end) return false
  const { start, end } = computeStart(range)
  return modelValue.value.start.compare(start) === 0 && modelValue.value.end.compare(end) === 0
}

function selectRange(range: typeof ranges[number]) {
  modelValue.value = computeStart(range)
}
</script>

<template>
  <PPopover :content="{ align: 'center' }">
    <PButton color="neutral" variant="subtle" icon="i-lucide-calendar">
      {{ label }}
    </PButton>

    <template #content>
      <div class="flex items-stretch divide-x divide-(--ui-color-border)">
        <div class="hidden sm:flex flex-col justify-center py-2">
          <PButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="neutral"
            variant="ghost"
            class="rounded-none px-4"
            :class="[isRangeSelected(range) ? 'bg-background-elevated' : 'hover:bg-background-elevated/50']"
            truncate
            @click="selectRange(range)"
          />
        </div>

        <PCalendar v-model="modelValue" class="p-2" :number-of-months="isDesktop ? 2 : 1" range />
      </div>
    </template>
  </PPopover>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    calendar: {
      slots: {
        root: '',
        header: 'flex items-center justify-between',
        body: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0',
        heading: 'flex-1 min-w-0 text-center',
        headingLabel: 'font-500 block truncate p-1.5',
        grid: 'w-full border-collapse select-none space-y-1 focus:outline-none',
        gridRow: 'grid',
        gridWeekDaysRow: 'mb-1 grid w-full grid-cols-7',
        gridBody: 'grid',
        headCell: 'rounded-md',
        headCellWeek: 'rounded-md color-text-muted',
        cell: 'relative text-center',
        cellTrigger: [
          'm-0.5 relative flex items-center justify-center whitespace-nowrap focus-visible:outline-3 data-disabled:color-text-muted data-unavailable:line-through data-unavailable:color-text-muted data-unavailable:pointer-events-none data-today:font-600',
          'transition'
        ],
        cellWeek: 'relative text-center color-text-muted'
      },
      variants: {
        color: {
          primary: {
            headCell: 'color-primary',
            cellTrigger: 'outline-primary/25'
          },
          secondary: {
            headCell: 'color-secondary',
            cellTrigger: 'outline-secondary/25'
          },
          success: {
            headCell: 'color-success',
            cellTrigger: 'outline-success/25'
          },
          info: {
            headCell: 'color-info',
            cellTrigger: 'outline-info/25'
          },
          warning: {
            headCell: 'color-warning',
            cellTrigger: 'outline-warning/25'
          },
          error: {
            headCell: 'color-error',
            cellTrigger: 'outline-error/25'
          },
          neutral: {
            headCell: 'color-text-highlighted',
            cellTrigger: 'outline-outline-inverted/25'
          }
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: ''
        },
        size: {
          xs: {
            headingLabel: 'text-xs',
            cell: 'text-xs',
            cellWeek: 'text-xs',
            headCell: 'text-[10px]',
            headCellWeek: 'text-[10px]',
            body: 'space-y-2 pt-2'
          },
          sm: {
            headingLabel: 'text-xs',
            headCell: 'text-xs',
            headCellWeek: 'text-xs',
            cellWeek: 'text-xs',
            cell: 'text-xs'
          },
          md: {
            headingLabel: 'text-sm',
            headCell: 'text-xs',
            headCellWeek: 'text-xs',
            cellWeek: 'text-xs',
            cell: 'text-sm'
          },
          lg: {
            headingLabel: 'text-base',
            headCell: 'text-base',
            headCellWeek: 'text-base',
            cellWeek: 'text-base',
            cell: 'text-base'
          },
          xl: {
            headingLabel: 'text-lg',
            headCell: 'text-lg',
            headCellWeek: 'text-lg',
            cellWeek: 'text-lg',
            cell: 'text-lg'
          }
        },
        view: {
          day: {
            gridRow: 'grid-cols-7 place-items-center',
            cellTrigger: 'rounded-full data-outside-view:color-text-muted'
          },
          month: {
            gridRow: 'grid-cols-4',
            cellTrigger: 'rounded-md'
          },
          year: {
            gridRow: 'grid-cols-4',
            cellTrigger: 'rounded-md'
          }
        },
        weekNumbers: {
          true: ''
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-primary data-selected:color-text-inverted data-today:not-data-selected:color-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20'
          }
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-secondary data-selected:color-text-inverted data-today:not-data-selected:color-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20'
          }
        },
        {
          color: 'success',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-success data-selected:color-text-inverted data-today:not-data-selected:color-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20'
          }
        },
        {
          color: 'info',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-info data-selected:color-text-inverted data-today:not-data-selected:color-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20'
          }
        },
        {
          color: 'warning',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-warning data-selected:color-text-inverted data-today:not-data-selected:color-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20'
          }
        },
        {
          color: 'error',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-error data-selected:color-text-inverted data-today:not-data-selected:color-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20'
          }
        },
        {
          color: 'primary',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-primary/50 data-selected:color-primary data-selected:focus-visible:ring-primary data-today:not-data-selected:color-primary data-highlighted:bg-primary/10 hover:not-data-selected:bg-primary/10'
          }
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-secondary/50 data-selected:color-secondary data-selected:focus-visible:ring-secondary data-today:not-data-selected:color-secondary data-highlighted:bg-secondary/10 hover:not-data-selected:bg-secondary/10'
          }
        },
        {
          color: 'success',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-success/50 data-selected:color-success data-selected:focus-visible:ring-success data-today:not-data-selected:color-success data-highlighted:bg-success/10 hover:not-data-selected:bg-success/10'
          }
        },
        {
          color: 'info',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-info/50 data-selected:color-info data-selected:focus-visible:ring-info data-today:not-data-selected:color-info data-highlighted:bg-info/10 hover:not-data-selected:bg-info/10'
          }
        },
        {
          color: 'warning',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-warning/50 data-selected:color-warning data-selected:focus-visible:ring-warning data-today:not-data-selected:color-warning data-highlighted:bg-warning/10 hover:not-data-selected:bg-warning/10'
          }
        },
        {
          color: 'error',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-error/50 data-selected:color-error data-selected:focus-visible:ring-error data-today:not-data-selected:color-error data-highlighted:bg-error/10 hover:not-data-selected:bg-error/10'
          }
        },
        {
          color: 'primary',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-primary/10 data-selected:color-primary data-today:not-data-selected:color-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20'
          }
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-secondary/10 data-selected:color-secondary data-today:not-data-selected:color-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20'
          }
        },
        {
          color: 'success',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-success/10 data-selected:color-success data-today:not-data-selected:color-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20'
          }
        },
        {
          color: 'info',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-info/10 data-selected:color-info data-today:not-data-selected:color-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20'
          }
        },
        {
          color: 'warning',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-warning/10 data-selected:color-warning data-today:not-data-selected:color-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20'
          }
        },
        {
          color: 'error',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-error/10 data-selected:color-error data-today:not-data-selected:color-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20'
          }
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-primary/10 data-selected:color-primary data-selected:ring data-selected:ring-inset data-selected:ring-primary/25 data-selected:focus-visible:ring-primary data-today:not-data-selected:color-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20'
          }
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-secondary/10 data-selected:color-secondary data-selected:ring data-selected:ring-inset data-selected:ring-secondary/25 data-selected:focus-visible:ring-secondary data-today:not-data-selected:color-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20'
          }
        },
        {
          color: 'success',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-success/10 data-selected:color-success data-selected:ring data-selected:ring-inset data-selected:ring-success/25 data-selected:focus-visible:ring-success data-today:not-data-selected:color-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20'
          }
        },
        {
          color: 'info',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-info/10 data-selected:color-info data-selected:ring data-selected:ring-inset data-selected:ring-info/25 data-selected:focus-visible:ring-info data-today:not-data-selected:color-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20'
          }
        },
        {
          color: 'warning',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-warning/10 data-selected:color-warning data-selected:ring data-selected:ring-inset data-selected:ring-warning/25 data-selected:focus-visible:ring-warning data-today:not-data-selected:color-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20'
          }
        },
        {
          color: 'error',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-error/10 data-selected:color-error data-selected:ring data-selected:ring-inset data-selected:ring-error/25 data-selected:focus-visible:ring-error data-today:not-data-selected:color-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20'
          }
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: {
            cellTrigger: 'data-selected:bg-background-inverted data-selected:color-text-inverted data-today:not-data-selected:color-text-highlighted data-highlighted:bg-background-inverted/20 hover:not-data-selected:bg-background-inverted/10'
          }
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: {
            cellTrigger: 'data-selected:ring data-selected:ring-inset data-selected:ring-ring-accented data-selected:color-text data-selected:bg-background data-selected:focus-visible:ring-ring-inverted data-today:not-data-selected:color-text-highlighted data-highlighted:bg-background-inverted/10 hover:not-data-selected:bg-background-inverted/10'
          }
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: {
            cellTrigger: 'data-selected:bg-background-elevated data-selected:color-text data-today:not-data-selected:color-text-highlighted data-highlighted:bg-background-inverted/20 hover:not-data-selected:bg-background-inverted/10'
          }
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: {
            cellTrigger: 'data-selected:bg-background-elevated data-selected:color-text data-selected:ring data-selected:ring-inset data-selected:ring-ring-accented data-selected:focus-visible:ring-ring-inverted data-today:not-data-selected:color-text-highlighted data-highlighted:bg-background-inverted/20 hover:not-data-selected:bg-background-inverted/10'
          }
        },
        {
          size: 'xs',
          view: 'day',
          class: {
            cellTrigger: 'size-6'
          }
        },
        {
          size: 'sm',
          view: 'day',
          class: {
            cellTrigger: 'size-7'
          }
        },
        {
          size: 'md',
          view: 'day',
          class: {
            cellTrigger: 'size-8'
          }
        },
        {
          size: 'lg',
          view: 'day',
          class: {
            cellTrigger: 'size-9'
          }
        },
        {
          size: 'xl',
          view: 'day',
          class: {
            cellTrigger: 'size-10'
          }
        },
        {
          size: 'xs',
          view: [
            'month',
            'year'
          ],
          class: {
            cellTrigger: 'h-6 px-2'
          }
        },
        {
          size: 'sm',
          view: [
            'month',
            'year'
          ],
          class: {
            cellTrigger: 'h-7 px-2'
          }
        },
        {
          size: 'md',
          view: [
            'month',
            'year'
          ],
          class: {
            cellTrigger: 'h-8 px-3'
          }
        },
        {
          size: 'lg',
          view: [
            'month',
            'year'
          ],
          class: {
            cellTrigger: 'h-9 px-4'
          }
        },
        {
          size: 'xl',
          view: [
            'month',
            'year'
          ],
          class: {
            cellTrigger: 'h-10 px-5'
          }
        },
        {
          view: 'day',
          weekNumbers: true,
          class: {
            gridRow: 'grid-cols-8',
            gridWeekDaysRow: 'grid-cols-8 [&>*:first-child]:col-start-2'
          }
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'solid',
        view: 'day'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Calendar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/calendar.ts).

---

- [Calendar](/akar/components/calendar)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Calendar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Calendar source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Calendar.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **type** — `CalendarType | undefined; optional; default: "date"`: The type of picker. - \`date\` renders a day calendar whose heading can switch to a month then year view. - \`month\` renders a standalone month picker. - \`year\` renders a standalone year picker.
- **nextYearIcon** — `any; optional`: The icon to use for the next year control.
- **nextYear** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the next year button. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **nextMonthIcon** — `any; optional`: The icon to use for the next month control.
- **nextMonth** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the next month button. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **prevYearIcon** — `any; optional`: The icon to use for the previous year control.
- **prevYear** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the prev year button. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **prevMonthIcon** — `any; optional`: The icon to use for the previous month control.
- **prevMonth** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the prev month button. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **viewControl** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Whether to make the heading a button that switches between the day, month and year views. Has no effect when \`type\` is \`year\`. Can be an object to override the button props. \`{ color: 'neutral', variant: 'ghost', block: true }\`{lang="ts-type"}
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **range** — `R | undefined; optional`: Whether or not a range of dates can be selected
- **multiple** — `M | undefined; optional`: Whether or not multiple dates can be selected
- **monthControls** — `boolean | undefined; optional; default: true`: Show month controls
- **yearControls** — `boolean | undefined; optional; default: true`: Show year controls
- **defaultValue** — `CalendarDefaultValue<R, M> | undefined; optional`
- **modelValue** — `CalendarModelValue<R, M> | undefined; optional`
- **weekNumbers** — `boolean | undefined; optional`
- **ui** — `{ root?: SlotClass; header?: SlotClass; body?: SlotClass; heading?: SlotClass; headingLabel?: SlotClass; grid?: SlotClass; gridRow?: SlotClass; gridWeekDaysRow?: SlotClass; gridBody?: SlotClass; headCell?: SlotClass; headCellWeek?: SlotClass; cell?: SlotClass; cellTrigger?: SlotClass; cellWeek?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: Whether or not the calendar is disabled
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **placeholder** — `DateValue | undefined; optional`: The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view
- **readonly** — `boolean | undefined; optional`: Whether or not the calendar is readonly
- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **allowNonContiguousRanges** — `boolean | undefined; optional`: When combined with \`isDateUnavailable\`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.
- **pagedNavigation** — `boolean | undefined; optional`: This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month
- **preventDeselect** — `boolean | undefined; optional`: Whether or not to prevent the user from deselecting a date without selecting another date first
- **maximumDays** — `number | undefined; optional`: The maximum number of days that can be selected in a range
- **weekStartsOn** — `WeekStartsOn | undefined; optional`: The day of the week to start the calendar on
- **weekdayFormat** — `WeekDayFormat | undefined; optional`: The format to use for the weekday strings provided via the weekdays slot prop
- **fixedWeeks** — `boolean | undefined; optional; default: true`: Whether or not to always display 6 weeks in the calendar
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **numberOfMonths** — `number | undefined; optional`: The number of months to display at once
- **initialFocus** — `boolean | undefined; optional`: If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted
- **isDateDisabled** — `Matcher | undefined; optional`: A function that returns whether or not a date is disabled
- **isDateUnavailable** — `Matcher | undefined; optional`: A function that returns whether or not a date is unavailable
- **isDateHighlightable** — `Matcher | undefined; optional`: A function that returns whether or not a date is hightable
- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.
- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.
- **disableDaysOutsideCurrentView** — `boolean | undefined; optional`: Whether or not to disable days outside the current view.
- **fixedDate** — `"start" | "end" | undefined; optional`: Which part of the range should be fixed
- **isMonthDisabled** — `Matcher | undefined; optional`: A function that returns whether or not a month is disabled
- **isMonthUnavailable** — `Matcher | undefined; optional`: A function that returns whether or not a month is unavailable
- **isYearDisabled** — `Matcher | undefined; optional`: A function that returns whether or not a year is disabled
- **isYearUnavailable** — `Matcher | undefined; optional`: A function that returns whether or not a year is unavailable

### Slots

- **heading** — `{ value: string; view: CalendarView; date: DateValue; setView: (view: CalendarView) => void; setPlaceholder: (date: DateValue) => void; }`
- **day** — `Pick<CalendarCellTriggerProps, "day">`
- **week-day** — `{ day: string; }`
- **month-cell** — `{ month: DateValue; selected: boolean; disabled: boolean; }`
- **year-cell** — `{ year: DateValue; selected: boolean; disabled: boolean; }`

### Events

- **update:modelValue** — `[value: CalendarModelValue<R, M>]`
- **update:placeholder** — `[date: DateValue]`
- **update:validModelValue** — `[date: DateRange]`
- **update:startValue** — `[date: DateValue | undefined]`
