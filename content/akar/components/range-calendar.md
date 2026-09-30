---
title: "RangeCalendar"
description: "Akar RangeCalendar components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar"
---

## RangeCalendarCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarCell.vue)

### Props

- **date** — `DateValue; required`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "td"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarCellTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarCellTrigger.vue)

### Props

- **day** — `DateValue; required`
- **month** — `DateValue; required`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ dayValue: string; disabled: boolean; selected: boolean; today: boolean; outsideView: boolean; outsideVisibleView: boolean; unavailable: boolean; highlighted: boolean; highlightedStart: boolean; highlightedEnd: boolean; selectionStart: boolean; selectionEnd: boolean; }`

### Events

No events are declared.
## RangeCalendarGrid

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarGrid.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "table"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarGridBody

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarGridBody.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tbody"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarGridHead

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarGridHead.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "thead"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarGridRow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarGridRow.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tr"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarHeadCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarHeadCell.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "th"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarHeader

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarHeader.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RangeCalendarHeading

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarHeading.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ headingValue: string; }`

### Events

No events are declared.
## RangeCalendarNext

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarNext.vue)

### Props

- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the next page. Overwrites the \`nextPage\` function set on the \`RangeCalendarRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## RangeCalendarPrev

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarPrev.vue)

### Props

- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the prev page. Overwrites the \`prevPage\` function set on the \`RangeCalendarRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## RangeCalendarRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RangeCalendar/RangeCalendarRoot.vue)

### Props

- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **defaultValue** — `DateRange | undefined; optional; default: { start: undefined, end: undefined }`: The default value for the calendar
- **modelValue** — `DateRange | null | undefined; optional`: The controlled selected date range of the calendar. Can be bound as \`v-model\`.
- **placeholder** — `DateValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view
- **allowNonContiguousRanges** — `boolean | undefined; optional; default: false`: When combined with \`isDateUnavailable\`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.
- **pagedNavigation** — `boolean | undefined; optional; default: false`: This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month
- **preventDeselect** — `boolean | undefined; optional; default: false`: Whether or not to prevent the user from deselecting a date without selecting another date first
- **maximumDays** — `number | undefined; optional; default: undefined`: The maximum number of days that can be selected in a range
- **weekStartsOn** — `WeekStartsOn | undefined; optional`: The day of the week to start the calendar on
- **weekdayFormat** — `WeekDayFormat | undefined; optional; default: "narrow"`: The format to use for the weekday strings provided via the weekdays slot prop
- **calendarLabel** — `string | undefined; optional`: The accessible label for the calendar
- **fixedWeeks** — `boolean | undefined; optional; default: false`: Whether or not to always display 6 weeks in the calendar
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **numberOfMonths** — `number | undefined; optional; default: 1`: The number of months to display at once
- **disabled** — `boolean | undefined; optional; default: false`: Whether or not the calendar is disabled
- **readonly** — `boolean | undefined; optional; default: false`: Whether or not the calendar is readonly
- **initialFocus** — `boolean | undefined; optional; default: false`: If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted
- **isDateDisabled** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is disabled
- **isDateUnavailable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is unavailable
- **isDateHighlightable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is hightable
- **dir** — `Direction | undefined; optional`: The reading direction of the calendar when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.
- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.
- **disableDaysOutsideCurrentView** — `boolean | undefined; optional; default: false`: Whether or not to disable days outside the current view.
- **fixedDate** — `"start" | "end" | undefined; optional`: Which part of the range should be fixed
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ date: DateValue; grid: Grid<DateValue>[]; weekDays: string[]; weekStartsOn: WeekStartsOn; locale: string; fixedWeeks: boolean; modelValue: DateRange; }`

### Events

- **update:modelValue** — `[date: DateRange]`
- **update:placeholder** — `[date: DateValue]`
- **update:validModelValue** — `[date: DateRange]`
- **update:startValue** — `[date: DateValue | undefined]`
