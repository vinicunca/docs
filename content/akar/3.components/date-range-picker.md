---
title: Date Range Picker
description: Facilitates the selection of date ranges through an input and calendar-based interface.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/DateRangePicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="DateRangePicker"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Accessible by default","Supports both date and date-time formats"]
---
::

## Preface

The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.

## Installation

Install the date package.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add @internationalized/date
```

```bash [yarn]
yarn add @internationalized/date
```

```bash [npm]
npm install @internationalized/date
```

```bash [bun]
bun add @internationalized/date
```

::

Install the component from your command line.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add akar
```

```bash [yarn]
yarn add akar
```

```bash [npm]
npm install akar
```

```bash [bun]
bun add akar
```

::

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import {
  DateRangePickerAnchor,
  DateRangePickerArrow,
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerClose,
  DateRangePickerContent,
  DateRangePickerField,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerInput,
  DateRangePickerNext,
  DateRangePickerPrev,
  DateRangePickerRoot,
  DateRangePickerTrigger,
} from 'akar';
</script>

<template>
  <DateRangePickerRoot>
    <DateRangePickerField>
      <DateRangePickerInput />
      <DateRangePickerTrigger />
    </DateRangePickerField>

    <DateRangePickerAnchor />

    <DateRangePickerContent>
      <DateRangePickerClose />
      <DateRangePickerArrow />

      <DateRangePickerCalendar>
        <DateRangePickerHeader>
          <DateRangePickerPrev />
          <DateRangePickerHeading />
          <DateRangePickerNext />
        </DateRangePickerHeader>

        <DateRangePickerGrid>
          <DateRangePickerGridHead>
            <DateRangePickerGridRow>
              <DateRangePickerHeadCell />
            </DateRangePickerGridRow>
          </DateRangePickerGridHead>

          <DateRangePickerGridBody>
            <DateRangePickerGridRow>
              <DateRangePickerCell>
                <DateRangePickerCellTrigger />
              </DateRangePickerCell>
            </DateRangePickerGridRow>
          </DateRangePickerGridBody>
        </DateRangePickerGrid>
      </DateRangePickerCalendar>
    </DateRangePickerContent>
  </DateRangePickerRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a date picker

:akar-api{name="DateRangePickerRoot"}

### Field

Contains the date picker date field segments and trigger

:akar-api{name="DateRangePickerField"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Input

Contains the date picker date field segments

:akar-api{name="DateRangePickerInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"},{"attribute":"[data-placeholder]","values":"Present when no value is set"}]
---
::

### Trigger

The button that toggles the popover. By default, the `DateRangePickerContent` will position itself against the trigger.

:akar-api{name="DateRangePickerTrigger"}

### Content

The component that pops out when the popover is open.

:akar-api{name="DateRangePickerContent"}

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `DateRangePickerContent`. Must be rendered inside `DateRangePickerContent`.

:akar-api{name="DateRangePickerArrow"}

### Close

The button that closes an open date picker.

:akar-api{name="DateRangePickerClose"}

### Anchor

An optional element to position the `DateRangePickerContent` against. If this part is not used, the content will position alongside the `DateRangePickerTrigger`.

:akar-api{name="DateRangePickerAnchor"}

### Calendar

Contains all the parts of a calendar

:akar-api{name="DateRangePickerCalendar"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="DateRangePickerHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one month/year/decade in the past based on the current calendar view.

:akar-api{name="DateRangePickerPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one month/year/decade in the future based on the current calendar view.

:akar-api{name="DateRangePickerNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current month and year

:akar-api{name="DateRangePickerHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the calendar grid.

:akar-api{name="DateRangePickerGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Head

Container for wrapping the grid head.

:akar-api{name="DateRangePickerGridHead"}

### Grid Body

Container for wrapping the grid body.

:akar-api{name="DateRangePickerGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="DateRangePickerGridRow"}

### Head Cell

Container for wrapping the head cell. Used for displaying the week days.

:akar-api{name="DateRangePickerHeadCell"}

### Cell

Container for wrapping the calendar cells.

:akar-api{name="DateRangePickerCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell dates. Clicking it selects the date.

:akar-api{name="DateRangePickerCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when today"},{"attribute":"[data-outside-view]","values":"Present when the date is outside the current month it is displayed in."},{"attribute":"[data-outside-visible-view]","values":"Present when the date is outside the months that are visible on the calendar."},{"attribute":"[data-selection-start]","values":"Present when the date is the start of the selection."},{"attribute":"[data-selection-end]","values":"Present when the date is the end of the selection."},{"attribute":"[data-highlighted]","values":"Present when the date is highlighted by the user as they select a range."},{"attribute":"[data-highlighted-start]","values":"Present when the date is the start of the range that is highlighted by the user."},{"attribute":"[data-highlighted-end]","values":"Present when the date is the end of the range that is highlighted by the user."},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the date field, focuses the first segment."},{"keys":["Space"],"description":" When the focus is on either `DateRangePickerNext` or `DateRangePickerPrev`, it navigates the calendar. Otherwise, it selects the date. If the focus is on `DateRangePickerTrigger`, it opens/closes the popover. "},{"keys":["Enter"],"description":" When the focus is on either `DateRangePickerNext` or `DateRangePickerPrev`, it navigates the calendar. Otherwise, it selects the date. If the focus is on `DateRangePickerTrigger`, it opens/closes the popover. "},{"keys":["ArrowLeft","ArrowRight"],"description":"Navigates between the date field segments. If the focus is on the `DateRangePickerCalendar`, it navigates between the dates."},{"keys":["ArrowUp","ArrowDown"],"description":"Increments/changes the value of the segment. If the focus is on the `DateRangePickerCalendar`, it navigates between the dates."},{"keys":["0-9"],"description":"When the focus is on a numeric `DateRangePickerInput`, it types in the number and focuses the next segment if the next input would result in an invalid value."},{"keys":["Backspace"],"description":"Deletes a digit from the focused numeric segments."},{"keys":["A","P"],"description":"When the focus is on the day period, it sets it to AM or PM."}]
---
::
