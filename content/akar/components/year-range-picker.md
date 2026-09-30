---
title: "YearRangePicker"
description: "Akar YearRangePicker components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker"
---

## YearRangePickerCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerCell.vue)

### Props

- **date** — `DateValue; required`: The date value for the cell
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "td"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## YearRangePickerCellTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerCellTrigger.vue)

### Props

- **year** — `DateValue; required`: The date value provided to the cell trigger
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ yearValue: string; disabled: boolean; selected: boolean; today: boolean; unavailable: boolean; highlighted: boolean; highlightedStart: boolean; highlightedEnd: boolean; selectionStart: boolean; selectionEnd: boolean; }`

### Events

No events are declared.
## YearRangePickerGrid

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerGrid.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "table"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## YearRangePickerGridBody

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerGridBody.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tbody"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## YearRangePickerGridRow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerGridRow.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tr"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## YearRangePickerHeader

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerHeader.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## YearRangePickerHeading

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerHeading.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ headingValue: string; }`

### Events

No events are declared.
## YearRangePickerNext

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerNext.vue)

### Props

- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the next page. Overwrites the \`nextPage\` function set on the Root.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## YearRangePickerPrev

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerPrev.vue)

### Props

- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the prev page. Overwrites the \`prevPage\` function set on the Root.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## YearRangePickerRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/YearRangePicker/YearRangePickerRoot.vue)

### Props

- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **defaultValue** — `DateRange | undefined; optional; default: { start: undefined, end: undefined }`: The default value for the calendar
- **modelValue** — `DateRange | null | undefined; optional`: The controlled selected year range of the year range picker. Can be bound as \`v-model\`.
- **placeholder** — `DateValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what year range to display when no date is selected.
- **allowNonContiguousRanges** — `boolean | undefined; optional; default: false`: When combined with \`isYearUnavailable\`, determines whether non-contiguous ranges may be selected.
- **preventDeselect** — `boolean | undefined; optional; default: false`: Whether or not to prevent the user from deselecting a date without selecting another date first
- **maximumYears** — `number | undefined; optional; default: undefined`: The maximum number of years that can be selected in a range
- **calendarLabel** — `string | undefined; optional`: The accessible label for the calendar
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **disabled** — `boolean | undefined; optional; default: false`: Whether or not the calendar is disabled
- **readonly** — `boolean | undefined; optional; default: false`: Whether or not the calendar is readonly
- **initialFocus** — `boolean | undefined; optional; default: false`: If true, the calendar will focus the selected year on mount
- **isYearDisabled** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a year is disabled
- **isYearUnavailable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a year is unavailable
- **dir** — `Direction | undefined; optional`: The reading direction of the calendar when applicable.
- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the next page of the calendar.
- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the previous page of the calendar.
- **fixedDate** — `"start" | "end" | undefined; optional`: Which part of the range should be fixed
- **yearsPerPage** — `number | undefined; optional; default: 12`: Number of years to display per page
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ date: DateValue; grid: Grid<DateValue>; locale: string; modelValue: DateRange; }`

### Events

- **update:modelValue** — `[date: DateRange]`
- **update:placeholder** — `[date: DateValue]`
- **update:startValue** — `[date: DateValue | undefined]`
