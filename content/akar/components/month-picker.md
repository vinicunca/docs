---
title: "MonthPicker"
description: "Akar MonthPicker components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker"
---

## MonthPickerCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerCell.vue)

### Props

- **date** — `DateValue; required`: The date value for the cell
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "td"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## MonthPickerCellTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerCellTrigger.vue)

### Props

- **month** — `DateValue; required`: The date value provided to the cell trigger
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ monthValue: string; disabled: boolean; selected: boolean; today: boolean; unavailable: boolean; }`

### Events

No events are declared.
## MonthPickerGrid

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerGrid.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "table"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## MonthPickerGridBody

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerGridBody.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tbody"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## MonthPickerGridRow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerGridRow.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "tr"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## MonthPickerHeader

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerHeader.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## MonthPickerHeading

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerHeading.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ headingValue: string; }`

### Events

No events are declared.
## MonthPickerNext

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerNext.vue)

### Props

- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the next page. Overwrites the \`nextPage\` function set on the \`MonthPickerRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## MonthPickerPrev

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerPrev.vue)

### Props

- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the prev page. Overwrites the \`prevPage\` function set on the \`MonthPickerRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## MonthPickerRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/MonthPicker/MonthPickerRoot.vue)

### Props

- **defaultValue** — `DateValue | undefined; optional; default: undefined`: The default value for the month picker
- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **placeholder** — `DateValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what year to display when no date is selected
- **preventDeselect** — `boolean | undefined; optional; default: false`: Whether or not to prevent the user from deselecting a date without selecting another date first
- **calendarLabel** — `string | undefined; optional`: The accessible label for the month picker
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **disabled** — `boolean | undefined; optional; default: false`: Whether the month picker is disabled
- **readonly** — `boolean | undefined; optional; default: false`: Whether the month picker is readonly
- **initialFocus** — `boolean | undefined; optional; default: false`: If true, the month picker will focus the selected month, today, or the first month of the year on mount
- **isMonthDisabled** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a month is disabled
- **isMonthUnavailable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a month is unavailable
- **dir** — `Direction | undefined; optional`: The reading direction of the calendar when applicable. If omitted, inherits globally from \`ConfigProvider\` or assumes LTR.
- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the next page of the month picker. Receives the current placeholder as an argument.
- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: A function that returns the previous page of the month picker. Receives the current placeholder as an argument.
- **modelValue** — `DateValue | DateValue[] | null | undefined; optional`: The controlled selected month value of the month picker. Can be bound as \`v-model\`.
- **multiple** — `boolean | undefined; optional; default: false`: Whether multiple months can be selected
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ date: DateValue; grid: Grid<DateValue>; locale: string; modelValue: DateValue | DateValue[] | undefined; }`

### Events

- **update:modelValue** — `[date: DateValue | DateValue[] | undefined]`
- **update:placeholder** — `[date: DateValue]`
