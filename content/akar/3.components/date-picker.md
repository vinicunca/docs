---
title: Date Picker
description: Facilitates the selection of dates through an input and calendar-based interface.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/DatePicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="DatePicker"}

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
  DatePickerAnchor,
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerClose,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from 'akar';
</script>

<template>
  <DatePickerRoot>
    <DatePickerField>
      <DatePickerInput />
      <DatePickerTrigger />
    </DatePickerField>

    <DatePickerAnchor />
    <DatePickerContent>
      <DatePickerClose />
      <DatePickerArrow />

      <DatePickerCalendar>
        <DatePickerHeader>
          <DatePickerPrev />
          <DatePickerHeading />
          <DatePickerNext />
        </DatePickerHeader>

        <DatePickerGrid>
          <DatePickerGridHead>
            <DatePickerGridRow>
              <DatePickerHeadCell />
            </DatePickerGridRow>
          </DatePickerGridHead>

          <DatePickerGridBody>
            <DatePickerGridRow>
              <DatePickerCell>
                <DatePickerCellTrigger />
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a date picker

:akar-api{name="DatePickerRoot"}

### Field

Contains the date picker date field segments and trigger

:akar-api{name="DatePickerField"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Input

Contains the date picker date field segments

:akar-api{name="DatePickerInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"},{"attribute":"[data-placeholder]","values":"Present when no value is set"}]
---
::

### Trigger

The button that toggles the popover. By default, the `DatePickerContent` will position itself against the trigger.

:akar-api{name="DatePickerTrigger"}

### Content

The component that pops out when the popover is open.

:akar-api{name="DatePickerContent"}

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `DatePickerContent`. Must be rendered inside `DatePickerContent`.

:akar-api{name="DatePickerArrow"}

### Close

The button that closes an open date picker.

:akar-api{name="DatePickerClose"}

### Anchor

An optional element to position the `DatePickerContent` against. If this part is not used, the content will position alongside the `DatePickerTrigger`.

:akar-api{name="DatePickerAnchor"}

### Calendar

Contains all the parts of a calendar

:akar-api{name="DatePickerCalendar"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"},{"attribute":"[data-readonly]","values":"Present when readonly"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="DatePickerHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one month/year/decade in the past based on the current calendar view.

:akar-api{name="DatePickerPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one month/year/decade in the future based on the current calendar view.

:akar-api{name="DatePickerNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current month and year/

:akar-api{name="DatePickerHeading"}

### Grid

Container for wrapping the calendar grid.

:akar-api{name="DatePickerGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-readonly]","values":"Present when readonly"}]
---
::

### Grid Head

Container for wrapping the grid head.

:akar-api{name="DatePickerGridHead"}

### Grid Body

Container for wrapping the grid body.

:akar-api{name="DatePickerGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="DatePickerGridRow"}

### Head Cell

Container for wrapping the head cell. Used for displaying the week days.

:akar-api{name="DatePickerHeadCell"}

### Cell

Container for wrapping the calendar cells.

:akar-api{name="DatePickerCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell dates. Clicking it selects the date.

:akar-api{name="DatePickerCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when today"},{"attribute":"[data-outside-view]","values":"Present when the date is outside the current month it is displayed in."},{"attribute":"[data-outside-visible-view]","values":"Present when the date is outside the months that are visible on the calendar."},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the date field, focuses the first segment."},{"keys":["Space"],"description":" When the focus is on either `DatePickerNext` or `DatePickerPrev`, it navigates the calendar. Otherwise, it selects the date. If the focus is on `DatePickerTrigger`, it opens/closes the popover. "},{"keys":["Enter"],"description":" When the focus is on either `DatePickerNext` or `DatePickerPrev`, it navigates the calendar. Otherwise, it selects the date. If the focus is on `DatePickerTrigger`, it opens/closes the popover. "},{"keys":["ArrowLeft","ArrowRight"],"description":"Navigates between the date field segments. If the focus is on the `DatePickerCalendar`, it navigates between the dates."},{"keys":["ArrowUp","ArrowDown"],"description":"Increments/changes the value of the segment. If the focus is on the `DatePickerCalendar`, it navigates between the dates."},{"keys":["0-9"],"description":"When the focus is on a numeric `DatePickerInput`, it types in the number and focuses the next segment if the next input would result in an invalid value."},{"keys":["Backspace"],"description":"Deletes a digit from the focused numeric segments."},{"keys":["A","P"],"description":"When the focus is on the day period, it sets it to AM or PM."}]
---
::
