---
title: "TimeField"
description: "Akar TimeField components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TimeField"
---

## TimeFieldInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TimeField/TimeFieldInput.vue)

### Props

- **part** — `SegmentPart; required`: The part of the date to render
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TimeFieldRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TimeField/TimeFieldRoot.vue)

### Props

- **defaultValue** — `TimeValue | undefined; optional; default: undefined`: The default value for the calendar
- **defaultPlaceholder** — `TimeValue | undefined; optional`: The default placeholder date
- **placeholder** — `TimeValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what time to display when no time is selected. This updates as the user navigates the field
- **modelValue** — `TimeValue | null | undefined; optional`: The controlled checked state of the field. Can be bound as \`v-model\`.
- **hourCycle** — `HourCycle; optional`: The hour cycle used for formatting times. Defaults to the local preference
- **step** — `DateStep | undefined; optional`: The stepping interval for the time fields. Defaults to \`1\`.
- **stepSnapping** — `boolean | undefined; optional; default: false`: Whether to enforce snapping the value to the nearest step increment after input. Defaults to \`false\`.
- **granularity** — `"hour" | "minute" | "second" | undefined; optional`: The granularity to use for formatting times. Defaults to minute if a Time is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
- **hideTimeZone** — `boolean | undefined; optional`: Whether or not to hide the time zone segment of the field
- **maxValue** — `TimeValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `TimeValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **disabled** — `boolean | undefined; optional; default: false`: Whether or not the time field is disabled
- **readonly** — `boolean | undefined; optional; default: false`: Whether or not the time field is readonly
- **id** — `string | undefined; optional`: Id of the element
- **dir** — `Direction | undefined; optional`: The reading direction of the time field when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: TimeValue | undefined; segments: { part: SegmentPart; value: string; }[]; isInvalid: boolean; }`

### Events

- **update:modelValue** — `[date: TimeValue | undefined]`
- **update:placeholder** — `[date: TimeValue]`
