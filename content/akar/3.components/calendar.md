---
title: Calendar
description: Displays dates and days of the week, facilitating date-related interactions.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Calendar"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="Calendar"}

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
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  CalendarRoot,
} from 'akar';
</script>

<template>
  <CalendarRoot>
    <CalendarHeader>
      <CalendarPrev />
      <CalendarHeading />
      <CalendarNext />
    </CalendarHeader>
    <CalendarGrid>
      <CalendarGridHead>
        <CalendarGridRow>
          <CalendarHeadCell />
        </CalendarGridRow>
      </CalendarGridHead>
      <CalendarGridBody>
        <CalendarGridRow>
          <CalendarCell>
            <CalendarCellTrigger />
          </CalendarCell>
        </CalendarGridRow>
      </CalendarGridBody>
    </CalendarGrid>
  </CalendarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a calendar

:akar-api{name="CalendarRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="CalendarHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one month/year/decade in the past based on the current calendar view.

:akar-api{name="CalendarPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one month/year/decade in the future based on the current calendar view.

:akar-api{name="CalendarNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current month and year

:akar-api{name="CalendarHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the calendar grid.

:akar-api{name="CalendarGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Head

Container for wrapping the grid head.

:akar-api{name="CalendarGridHead"}

### Grid Body

Container for wrapping the grid body.

:akar-api{name="CalendarGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="CalendarGridRow"}

### Head Cell

Container for wrapping the head cell. Used for displaying the week days.

:akar-api{name="CalendarHeadCell"}

### Cell

Container for wrapping the calendar cells.

:akar-api{name="CalendarCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell dates. Clicking it selects the date.

:akar-api{name="CalendarCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when today"},{"attribute":"[data-outside-view]","values":"Present when the date is outside the current month it is displayed in."},{"attribute":"[data-outside-visible-view]","values":"Present when the date is outside the months that are visible on the calendar."},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Examples

### Calendar with Year Incrementation

This example showcases a calendar which allows incrementing the year.

:akar-preview{name="CalendarYearIncrement"}

### Calendar with Locale and Calendar System Selection

This example showcases some of the available locales and how the calendar systems are displayed.

:akar-preview{name="CalendarSelect"}

### Calendar swipe gesture navigation

This component demonstrates intuitive calendar navigation using touch-based swipe gestures, user-friendly way to browse through months.

:akar-preview{name="CalendarSwipe"}

### Calendar week numbers

This example showcases usage of the CalendarWeek component used to display the number of the week.

:akar-preview{name="CalendarWeeks"}

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the calendar, focuses the first navigation button."},{"keys":["Space"],"description":" When the focus is on either `CalendarNext` or `CalendarPrev`, it navigates the calendar. Otherwise, it selects the date. "},{"keys":["Enter"],"description":" When the focus is on either `CalendarNext` or `CalendarPrev`, it navigates the calendar. Otherwise, it selects the date. "},{"keys":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],"description":"When the focus is on `CalendarCellTrigger`, it navigates the dates, changing the month/year/decade if necessary."},{"keys":["Home"],"description":"When the focus is on `CalendarCellTrigger`, it moves focus to the first day of the current week."},{"keys":["End"],"description":"When the focus is on `CalendarCellTrigger`, it moves focus to the last day of the current week."},{"keys":["PageUp"],"description":"When the focus is on `CalendarCellTrigger`, it moves to the previous month while preserving the day of the month when possible, or clamps to the last day of the month."},{"keys":["PageDown"],"description":"When the focus is on `CalendarCellTrigger`, it moves to the next month while preserving the day of the month when possible, or clamps to the last day of the month."},{"keys":["Shift+PageUp"],"description":"When the focus is on `CalendarCellTrigger`, it moves to the previous year while preserving the month and day when possible, or clamps to the last day of the month."},{"keys":["Shift+PageDown"],"description":"When the focus is on `CalendarCellTrigger`, it moves to the next year while preserving the month and day when possible, or clamps to the last day of the month."}]
---
::
