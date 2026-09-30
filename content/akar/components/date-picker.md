---
title: "DatePicker"
description: "Akar DatePicker components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker"
---

## DatePickerAnchor

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerAnchor.vue)

### Props

- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  If not provided will use the current component as anchor.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerArrow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerArrow.vue)

### Props

- **width** — `number | undefined; optional`: The width of the arrow in pixels.
- **height** — `number | undefined; optional`: The height of the arrow in pixels.
- **rounded** — `boolean | undefined; optional`: When \`true\`, render the rounded version of arrow. Do not work with \`as\`/\`asChild\`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerCalendar

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerCalendar.vue)

### Props

No props are declared.

### Slots

- **default** — `{ date: DateValue; grid: Grid<DateValue>[]; weekDays: string[]; weekStartsOn: WeekStartsOn; locale: string; fixedWeeks: boolean; }`

### Events

No events are declared.
## DatePickerCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerCell.vue)

### Props

- **date** — `DateValue; required`: The date value for the cell
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerCellTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerCellTrigger.vue)

### Props

- **day** — `DateValue; required`: The date value provided to the cell trigger
- **month** — `DateValue; required`: The month in which the cell is rendered
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ dayValue: string; disabled: boolean; selected: boolean; today: boolean; outsideView: boolean; outsideVisibleView: boolean; unavailable: boolean; }`

### Events

No events are declared.
## DatePickerClose

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerClose.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerContent.vue)

### Props

- **portal** — `PopoverPortalProps | undefined; optional`: Props to control the portal wrapped around the content.
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **memoDependencies** — `unknown[] | undefined; optional`: Reactive dependencies that should invalidate the memoized content subtree.
- **side** — `"top" | "right" | "bottom" | "left" | undefined; optional`: The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.
- **sideOffset** — `number | undefined; optional`: The distance in pixels from the trigger.
- **sideFlip** — `boolean | undefined; optional`: Flip to the opposite side when colliding with boundary.
- **align** — `"start" | "center" | "end" | undefined; optional`: The preferred alignment against the trigger. May change when collisions occur.
- **alignOffset** — `number | undefined; optional`: An offset in pixels from the \`start\` or \`end\` alignment options.
- **alignFlip** — `boolean | undefined; optional`: Flip alignment when colliding with boundary. May only occur when \`prioritizePosition\` is true.
- **avoidCollisions** — `boolean | undefined; optional`: When \`true\`, overrides the side and align preferences to prevent collisions with boundary edges.
- **collisionBoundary** — `Element | (Element | null)[] | null | undefined; optional`: The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
- **collisionPadding** — `number | Partial<Record<"top" | "right" | "bottom" | "left", number>> | undefined; optional`: The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.
- **arrowPadding** — `number | undefined; optional`: The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.
- **hideShiftedArrow** — `boolean | undefined; optional`: When \`true\`, hides the arrow when it cannot be centered to the reference element.
- **sticky** — `"partial" | "always" | undefined; optional`: The sticky behavior on the align axis. \`partial\` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.
- **hideWhenDetached** — `boolean | undefined; optional`: Whether to hide the content when the trigger becomes fully occluded.
- **positionStrategy** — `"fixed" | "absolute" | undefined; optional`: The type of CSS position property to use.
- **updatePositionStrategy** — `"always" | "optimized" | undefined; optional`: Strategy to update the position of the floating element on every animation frame.
- **disableUpdateOnLayoutShift** — `boolean | undefined; optional`: Whether to disable the update position for the content when the layout shifted.
- **prioritizePosition** — `boolean | undefined; optional`: Force content to be position within the viewport.  Might overlap the reference element, which may not be desired.
- **reference** — `ReferenceElement | undefined; optional`: The custom element or virtual element that will be set as the reference to position the floating element.  If provided, it will replace the default anchor element.
- **dir** — `Direction | undefined; optional`: The reading direction of the popper content when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disableOutsidePointerEvents** — `boolean | undefined; optional`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
## DatePickerField

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerField.vue)

### Props

No props are declared.

### Slots

- **default** — `{ segments: { part: SegmentPart; value: string; }[]; modelValue: DateValue | undefined; }`

### Events

No events are declared.
## DatePickerGrid

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerGrid.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerGridBody

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerGridBody.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerGridHead

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerGridHead.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerGridRow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerGridRow.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerHeadCell

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerHeadCell.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerHeader

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerHeader.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerHeading

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerHeading.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ headingValue: string; }`

### Events

No events are declared.
## DatePickerInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerInput.vue)

### Props

- **part** — `SegmentPart; required`: The part of the date to render
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DatePickerNext

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerNext.vue)

### Props

- **nextPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the next page. Overwrites the \`nextPage\` function set on the \`CalendarRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## DatePickerPrev

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerPrev.vue)

### Props

- **prevPage** — `((placeholder: DateValue) => DateValue) | undefined; optional`: The function to be used for the prev page. Overwrites the \`prevPage\` function set on the \`CalendarRoot\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ disabled: boolean; }`

### Events

No events are declared.
## DatePickerRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerRoot.vue)

### Props

- **disabled** — `boolean | undefined; optional; default: false`: Whether or not the date field is disabled
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **dir** — `Direction | undefined; optional`: The reading direction of the date field when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **modelValue** — `DateValue | null | undefined; optional`: The controlled value of the field. Can be bound as \`v-model\`.
- **defaultValue** — `DateValue | undefined; optional; default: undefined`: The default value for the calendar
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **placeholder** — `DateValue | undefined; optional; default: undefined`: The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view
- **step** — `DateStep | undefined; optional`: The stepping interval for the time fields. Defaults to \`1\`.
- **defaultPlaceholder** — `DateValue | undefined; optional`: The default placeholder date
- **maxValue** — `DateValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `DateValue | undefined; optional`: The minimum date that can be selected
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **readonly** — `boolean | undefined; optional; default: false`: Whether or not the date field is readonly
- **isDateUnavailable** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is unavailable
- **id** — `string | undefined; optional`: Id of the element
- **hourCycle** — `HourCycle; optional`: The hour cycle used for formatting times. Defaults to the local preference
- **stepSnapping** — `boolean | undefined; optional`: Whether to enforce snapping the time value to the nearest step increment after input. Defaults to \`false\`.
- **granularity** — `Granularity | undefined; optional`: The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
- **hideTimeZone** — `boolean | undefined; optional`: Whether or not to hide the time zone segment of the field
- **defaultOpen** — `boolean | undefined; optional; default: false`: The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the popover.
- **modal** — `boolean | undefined; optional; default: false`: The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
- **pagedNavigation** — `boolean | undefined; optional; default: false`: This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month
- **preventDeselect** — `boolean | undefined; optional; default: false`: Whether or not to prevent the user from deselecting a date without selecting another date first
- **weekStartsOn** — `WeekStartsOn | undefined; optional`: The day of the week to start the calendar on
- **weekdayFormat** — `WeekDayFormat | undefined; optional; default: "narrow"`: The format to use for the weekday strings provided via the weekdays slot prop
- **fixedWeeks** — `boolean | undefined; optional; default: false`: Whether or not to always display 6 weeks in the calendar
- **numberOfMonths** — `number | undefined; optional; default: 1`: The number of months to display at once
- **isDateDisabled** — `Matcher | undefined; optional; default: undefined`: A function that returns whether or not a date is disabled
- **closeOnSelect** — `boolean | undefined; optional; default: false`: Whether or not to close the popover on date select

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[date: DateValue | undefined]`
- **update:open** — `[value: boolean]`
- **update:placeholder** — `[date: DateValue]`
## DatePickerTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DatePicker/DatePickerTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
