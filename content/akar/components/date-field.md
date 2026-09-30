---
title: "DateField"
description: "Akar DateField components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DateField"
---

## DateFieldInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DateField/DateFieldInput.vue)

### Props

- **part** — `SegmentPart; required`: The part of the date to render
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DateFieldRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DateField/DateFieldRoot.vue)

### Props

- **defaultValue** — `DateValue | undefined; optional; default: undefined`: The default value for the calendar
- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **placeholder** — `DateValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view
- **modelValue** — `DateValue | null | undefined; optional`: The controlled value of the field. Can be bound as \`v-model\`.
- **hourCycle** — `HourCycle; optional`: The hour cycle used for formatting times. Defaults to the local preference
- **step** — `DateStep | undefined; optional`: The stepping interval for the time fields. Defaults to \`1\`.
- **stepSnapping** — `boolean | undefined; optional; default: false`: Whether to enforce snapping the time value to the nearest step increment after input. Defaults to \`false\`.
- **granularity** — `Granularity | undefined; optional`: The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
- **hideTimeZone** — `boolean | undefined; optional`: Whether or not to hide the time zone segment of the field
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **disabled** — `boolean | undefined; optional; default: false`: Whether or not the date field is disabled
- **readonly** — `boolean | undefined; optional; default: false`: Whether or not the date field is readonly
- **isDateUnavailable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is unavailable
- **id** — `string | undefined; optional`: Id of the element
- **dir** — `Direction | undefined; optional`: The reading direction of the date field when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: DateValue | undefined; segments: { part: SegmentPart; value: string; }[]; isInvalid: boolean; }`

### Events

- **update:modelValue** — `[date: DateValue | undefined]`
- **update:placeholder** — `[date: DateValue]`
