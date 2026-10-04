---
title: RangeCalendar
description: Presents a calendar view tailored for selecting date ranges.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/RangeCalendar"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## Range Calendar

:badge[Alpha]

:akar-preview{name="RangeCalendar"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Highly composable"]
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
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNext,
  RangeCalendarPrev,
  RangeCalendarRoot,
} from 'akar'
</script>

<template>
  <RangeCalendarRoot>
    <RangeCalendarHeader>
      <RangeCalendarPrev />
      <RangeCalendarHeading />
      <RangeCalendarNext />
    </RangeCalendarHeader>
    <RangeCalendarGrid>
      <RangeCalendarGridHead>
        <RangeCalendarGridRow>
          <RangeCalendarHeadCell />
        </RangeCalendarGridRow>
      </RangeCalendarGridHead>
      <RangeCalendarGridBody>
        <RangeCalendarGridRow>
          <RangeCalendarCell>
            <RangeCalendarCellTrigger />
          </RangeCalendarCell>
        </RangeCalendarGridRow>
      </RangeCalendarGridBody>
    </RangeCalendarGrid>
  </RangeCalendarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a calendar

:akar-api{name="RangeCalendarRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="RangeCalendarHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one month/year/decade in the past based on the current calendar view.

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

:akar-api{name="RangeCalendarPrev"}

### Next Button

Calendar navigation button. It navigates the calendar one month/year/decade in the future based on the current calendar view.

:akar-api{name="RangeCalendarNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current month and year.

:akar-api{name="RangeCalendarHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the calendar grid.

:akar-api{name="RangeCalendarGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Head

Container for wrapping the grid head.

:akar-api{name="RangeCalendarGridHead"}

### Grid Body

Container for wrapping the grid body.

:akar-api{name="RangeCalendarGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="RangeCalendarGridRow"}

### Head Cell

Container for wrapping the head cell. Used for displaying the week days.

:akar-api{name="RangeCalendarHeadCell"}

### Cell

Container for wrapping the calendar cells.

:akar-api{name="RangeCalendarCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell dates. Clicking it selects the date.

:akar-api{name="RangeCalendarCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when today"},{"attribute":"[data-outside-view]","values":"Present when the date is outside the current month it is displayed in."},{"attribute":"[data-outside-visible-view]","values":"Present when the date is outside the months that are visible on the calendar."},{"attribute":"[data-selection-start]","values":"Present when the date is the start of the selection."},{"attribute":"[data-selection-end]","values":"Present when the date is the end of the selection."},{"attribute":"[data-highlighted]","values":"Present when the date is highlighted by the user as they select a range."},{"attribute":"[data-highlighted-start]","values":"Present when the date is the start of the range that is highlighted by the user."},{"attribute":"[data-highlighted-end]","values":"Present when the date is the end of the range that is highlighted by the user."},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the calendar, focuses the first navigation button."},{"keys":["Space"],"description":" When the focus is on either `RangeCalendarNext` or `RangeCalendarPrev`, it navigates the calendar. Otherwise, it selects the date. "},{"keys":["Enter"],"description":" When the focus is on either `RangeCalendarNext` or `RangeCalendarPrev`, it navigates the calendar. Otherwise, it selects the date. "},{"keys":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],"description":"When the focus is on `RangeCalendarCellTrigger`, it navigates the dates, changing the month/year/decade if necessary."},{"keys":["Home"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves focus to the first day of the current week."},{"keys":["End"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves focus to the last day of the current week."},{"keys":["PageUp"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves to the previous month while preserving the day of the month when possible, or clamps to the last day of the month."},{"keys":["PageDown"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves to the next month while preserving the day of the month when possible, or clamps to the last day of the month."},{"keys":["Shift+PageUp"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves to the previous year while preserving the month and day when possible, or clamps to the last day of the month."},{"keys":["Shift+PageDown"],"description":"When the focus is on `RangeCalendarCellTrigger`, it moves to the next year while preserving the month and day when possible, or clamps to the last day of the month."}]
---
::
