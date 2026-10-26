# Dates and times in Akar

Calendar, RangeCalendar, DateField, DateRangeField, TimeField, TimeRangeField, DatePicker, DateRangePicker, and the Month/Year (Range) pickers all take `DateValue` objects from `@internationalized/date`. They never take JS `Date` objects or strings.

```bash
pnpm add @internationalized/date
```

## Values

| Type | Example | Use for |
|---|---|---|
| `CalendarDate` | `new CalendarDate(2024, 7, 10)`, `parseDate('2024-07-10')`, `today(getLocalTimeZone())` | Date only (birthdays, deadlines) |
| `CalendarDateTime` | `parseDateTime('2024-07-10T12:30:00')` | Date + time with no time zone |
| `ZonedDateTime` | `parseAbsoluteToLocal('2024-07-12T07:45:00Z')`, `parseZonedDateTime('2024-07-12T00:45[America/New_York]')` | Exact instants (meetings) |

- Months are 1-based (January is `1`).
- Values are immutable: reassign the result of `date.set({ month: 8 })`, `date.add({ days: 1 })`, `date.subtract(...)`.
- The value type drives the UI: a `CalendarDate` gives a DateField day/month/year segments; a `CalendarDateTime` adds time segments. Narrow it further with `granularity` (`'day'`, `'hour'`, `'minute'`, `'second'`).
- Ranges use `{ start, end }` (type `DateRange` from `akar`).
- `placeholder` / `default-placeholder` sets the month shown before a value exists.
- Constrain with `min-value`, `max-value`, `is-date-disabled`, `is-date-unavailable`.

## Locale

Formatting, the first day of the week, and the segment order follow `locale`: the component's own prop, or else `ConfigProvider`'s `locale` (default `'en'`). Set it once on `ConfigProvider` in i18n apps. `useDateFormatter(locale)` formats values consistently in your own markup.

## Render loops

The anatomy blocks on the docs pages show each part once. In real code, loop over the Root's slot props.

Calendar (DatePicker uses the same structure inside `DatePickerCalendar`):

```vue
<CalendarRoot v-slot="{ weekDays, grid }" v-model="date">
  <CalendarHeader>
    <CalendarPrev /> <CalendarHeading /> <CalendarNext />
  </CalendarHeader>
  <CalendarGrid v-for="month in grid" :key="month.value.toString()">
    <CalendarGridHead>
      <CalendarGridRow>
        <CalendarHeadCell v-for="day in weekDays" :key="day">{{ day }}</CalendarHeadCell>
      </CalendarGridRow>
    </CalendarGridHead>
    <CalendarGridBody>
      <CalendarGridRow v-for="(weekDates, i) in month.rows" :key="i">
        <CalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
          <CalendarCellTrigger :day="weekDate" :month="month.value" />
        </CalendarCell>
      </CalendarGridRow>
    </CalendarGridBody>
  </CalendarGrid>
</CalendarRoot>
```

Date and time fields (`DatePickerField` exposes the same `segments` slot prop):

```vue
<DateFieldRoot v-slot="{ segments }" v-model="date">
  <DateFieldInput v-for="item in segments" :key="item.part" :part="item.part">
    {{ item.value }}
  </DateFieldInput>
</DateFieldRoot>
```

`number-of-months` renders several grids. `CalendarPrev` / `CalendarNext` accept `prev-page` / `next-page` functions to page by year instead of by month.

`DatePickerContent` and `DateRangePickerContent` already render a Popover portal (configure it through their `portal` prop); there is no separate `*Portal` part.

## Helpers from `akar/date`

Comparisons: `isBefore`, `isAfter`, `isBeforeOrSame`, `isAfterOrSame`, `isBetween`, `isBetweenInclusive`. Type checks: `isCalendarDateTime`, `isZonedDateTime`, `hasTime`. Conversion: `toDate`, `parseStringToDateValue`. Grids: `createMonth`, `createYear`, `createDecade`, `createDateRange`, `createYearRange`, plus `getDaysInMonth`, `getWeekNumber`.

More: [dates guide](https://vinicunca.dev/raw/akar/guides/dates.md), [Calendar](https://vinicunca.dev/raw/akar/components/calendar.md), [Date Field](https://vinicunca.dev/raw/akar/components/date-field.md), [Date Picker](https://vinicunca.dev/raw/akar/components/date-picker.md), [useDateFormatter](https://vinicunca.dev/raw/akar/utilities/use-date-formatter.md).
