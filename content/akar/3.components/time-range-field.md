---
title: Time Range Field
description: Allows users to input a range of times within a designated field.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/TimeRangeField"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="TimeRangeField"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Highly composable","Accessible by default","Supports various time formats","Time range validation","Configurable granularity"]
---
::

## Preface

The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the time-related components.

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
  TimeRangeFieldInput,
  TimeRangeFieldRoot,
} from 'akar';
</script>

<template>
  <TimeRangeFieldRoot>
    <TimeRangeFieldInput
      part="hour"
      type="start"
    />
    <TimeRangeFieldInput
      part="minute"
      type="start"
    />
    <TimeRangeFieldInput
      part="hour"
      type="end"
    />
    <TimeRangeFieldInput
      part="minute"
      type="end"
    />
  </TimeRangeFieldRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a time range field.

:akar-api{name="TimeRangeFieldRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Input

Contains the time field segments.

:akar-api{name="TimeRangeFieldInput"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"},{"attribute":"[data-placeholder]","values":"Present when no value is set"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the time field, focuses the first segment."},{"keys":["ArrowLeft","ArrowRight"],"description":"Navigates between the time field segments."},{"keys":["ArrowUp","ArrowDown"],"description":"Increments/changes the value of the segment."},{"keys":["0-9"],"description":"When the focus is on a numeric `TimeRangeFieldInput`, it types in the number and focuses the next segment if the next input would result in an invalid value."},{"keys":["Backspace"],"description":"Deletes a digit from the focused numeric segments."},{"keys":["A","P"],"description":"When the focus is on the day period, it sets it to AM or PM."}]
---
::

## Usage Examples

### Basic Usage

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});
</script>

<template>
  <TimeRangeFieldRoot v-model="timeRange">
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
  </TimeRangeFieldRoot>
</template>
```

### Controlled Component

```vue
<script setup>
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: undefined,
  end: undefined
});

function handleTimeRangeChange(newRange) {
  console.log('Time range changed:', newRange);
  timeRange.value = newRange;
}
</script>

<template>
  <TimeRangeFieldRoot
    :model-value="timeRange"
    @update:model-value="handleTimeRangeChange"
  >
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
  </TimeRangeFieldRoot>
</template>
```

### With Validation

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

// Disable times before 8 AM and after 6 PM
function isTimeUnavailable(time) {
  const hour = time.hour;
  return hour < 8 || hour > 18;
}
</script>

<template>
  <TimeRangeFieldRoot
    v-model="timeRange"
    :is-time-unavailable="isTimeUnavailable"
  >
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
    <p
      v-if="timeRange.start && isTimeUnavailable(timeRange.start)"
      class="text-sm color-red-500 mt-1"
    >
      Start time is unavailable
    </p>
    <p
      v-if="timeRange.end && isTimeUnavailable(timeRange.end)"
      class="text-sm color-red-500 mt-1"
    >
      End time is unavailable
    </p>
  </TimeRangeFieldRoot>
</template>
```

### With Different Granularity

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0, 30),
  end: new Time(17, 30, 0)
});
</script>

<template>
  <div class="space-y-4">
    <!-- Hour and minute only -->
    <div>
      <label class="text-sm font-medium mb-2 block">Hour and Minute</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        granularity="minute"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>

    <!-- Hour only -->
    <div>
      <label class="text-sm font-medium mb-2 block">Hour Only</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        granularity="hour"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>

    <!-- Hour, minute, and second -->
    <div>
      <label class="text-sm font-medium mb-2 block">Hour, Minute, and Second</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        granularity="second"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="second"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="second"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>
  </div>
</template>
```

### With Locale and Hour Cycle

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});
</script>

<template>
  <div class="space-y-4">
    <!-- 24-hour format (default) -->
    <div>
      <label class="text-sm font-medium mb-2 block">24-hour format</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        hour-cycle="h23"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>

    <!-- 12-hour format with AM/PM -->
    <div>
      <label class="text-sm font-medium mb-2 block">12-hour format</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        hour-cycle="h12"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          <TimeRangeFieldInput
            part="dayPeriod"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
            <TimeRangeFieldInput
              part="dayPeriod"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>

    <!-- French locale -->
    <div>
      <label class="text-sm font-medium mb-2 block">French locale</label>
      <TimeRangeFieldRoot
        v-model="timeRange"
        locale="fr"
      >
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          <span class="mx-2">à
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>
  </div>
</template>
```

### With Min and Max Values

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

// Restrict times between 8 AM and 6 PM
const minTime = new Time(8, 0);
const maxTime = new Time(18, 0);
</script>

<template>
  <TimeRangeFieldRoot
    v-model="timeRange"
    :min-value="minTime"
    :max-value="maxTime"
  >
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
    <p class="text-sm color-gray-500 mt-1">
      Business hours: 8:00 AM - 6:00 PM
    </p>
  </TimeRangeFieldRoot>
</template>
```

### With Step Increment

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

// Increment minutes by 15
const step = { minute: 15 };
</script>

<template>
  <TimeRangeFieldRoot
    v-model="timeRange"
    :step="step"
  >
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
    <p class="text-sm color-gray-500 mt-1">
      Minutes increment by 15
    </p>
  </TimeRangeFieldRoot>
</template>
```

### Disabled State

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

const isDisabled = ref(true);
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2 items-center">
      <input
        id="disable"
        v-model="isDisabled"
        type="checkbox"
      >
      <label for="disable">Disable time range field</label>
    </div>

    <TimeRangeFieldRoot
      v-model="timeRange"
      :disabled="isDisabled"
    >
      <div class="flex gap-2 items-center">
        <TimeRangeFieldInput
          part="hour"
          type="start"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="start"
        />
        <span class="mx-2">to
          <TimeRangeFieldInput
            part="hour"
            type="end"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="end"
          />
        </span>
      </div>
    </TimeRangeFieldRoot>
  </div>
</template>
```

### Read-only State

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

const isReadonly = ref(true);
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2 items-center">
      <input
        id="readonly"
        v-model="isReadonly"
        type="checkbox"
      >
      <label for="readonly">Make time range field read-only</label>
    </div>

    <TimeRangeFieldRoot
      v-model="timeRange"
      :readonly="isReadonly"
    >
      <div class="flex gap-2 items-center">
        <TimeRangeFieldInput
          part="hour"
          type="start"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="start"
        />
        <span class="mx-2">to
          <TimeRangeFieldInput
            part="hour"
            type="end"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="end"
          />
        </span>
      </div>
    </TimeRangeFieldRoot>
  </div>
</template>
```

### Advanced Keyboard Navigation

The TimeRangeField provides intuitive keyboard navigation for efficient time input. Users can seamlessly move between time segments, increment or decrement values, and type numbers directly.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});
</script>

<template>
  <div class="space-y-4">
    <p class="text-sm color-gray-600">
      Try navigating with Tab, Arrow keys, and typing numbers. Focus moves automatically between segments.
    </p>
    <TimeRangeFieldRoot v-model="timeRange">
      <div class="flex gap-2 items-center">
        <TimeRangeFieldInput
          part="hour"
          type="start"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="start"
        />
        <span class="mx-2">to
          <TimeRangeFieldInput
            part="hour"
            type="end"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="end"
          />
        </span>
      </div>
    </TimeRangeFieldRoot>
    <div class="text-xs color-gray-500">
      <strong>Keyboard shortcuts:</strong> Tab to navigate, Arrow Up/Down to change values, type numbers to input.
    </div>
  </div>
</template>
```

### Form Integration

Integrate TimeRangeField with HTML forms to handle submissions and validation.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

function handleSubmit() {
  console.log('Form submitted with time range:', timeRange.value);
  // Handle form submission
}
</script>

<template>
  <form
    class="space-y-4"
    @submit.prevent="handleSubmit"
  >
    <div>
      <label class="text-sm font-medium mb-2 block">Select Time Range</label>
      <TimeRangeFieldRoot v-model="timeRange">
        <div class="flex gap-2 items-center">
          <TimeRangeFieldInput
            part="hour"
            type="start"
          />
          :
          <TimeRangeFieldInput
            part="minute"
            type="start"
          />
          <span class="mx-2">to
            <TimeRangeFieldInput
              part="hour"
              type="end"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="end"
            />
          </span>
        </div>
      </TimeRangeFieldRoot>
    </div>
    <button
      type="submit"
      class="color-white px-4 py-2 rounded bg-blue-500"
    >
      Submit
    </button>
  </form>
</template>
```

### Custom Styling

Customize the appearance of the TimeRangeField using CSS classes or Tailwind utilities.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});
</script>

<template>
  <TimeRangeFieldRoot v-model="timeRange">
    <div class="p-4 border border-gray-300 rounded-lg bg-gray-50 flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
        class="px-2 py-1 text-center border border-blue-300 rounded w-12 focus:outline-none focus:border-blue-500"
      />
      <span class="color-gray-500">:
        <TimeRangeFieldInput
          part="minute"
          type="start"
          class="px-2 py-1 text-center border border-blue-300 rounded w-12 focus:outline-none focus:border-blue-500"
        />
        <span class="color-gray-500 mx-2">to
          <TimeRangeFieldInput
            part="hour"
            type="end"
            class="px-2 py-1 text-center border border-blue-300 rounded w-12 focus:outline-none focus:border-blue-500"
          />
          <span class="color-gray-500">:
            <TimeRangeFieldInput
              part="minute"
              type="end"
              class="px-2 py-1 text-center border border-blue-300 rounded w-12 focus:outline-none focus:border-blue-500"
            />
          </span></span></span>
    </div>
  </TimeRangeFieldRoot>
</template>
```

### Advanced Validation

Implement complex validation rules, such as ensuring the end time is after the start time and within business hours.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref, watch } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});

const errors = ref([]);

watch(timeRange, (newRange) => {
  errors.value = [];
  if (newRange.start && newRange.end) {
    if (newRange.start.compare(newRange.end) >= 0) {
      errors.value.push('End time must be after start time');
    }
    if (newRange.start.hour < 8 || newRange.start.hour > 18) {
      errors.value.push('Start time must be between 8 AM and 6 PM');
    }
    if (newRange.end.hour < 8 || newRange.end.hour > 18) {
      errors.value.push('End time must be between 8 AM and 6 PM');
    }
  }
}, { deep: true });
</script>

<template>
  <TimeRangeFieldRoot v-model="timeRange">
    <div class="flex gap-2 items-center">
      <TimeRangeFieldInput
        part="hour"
        type="start"
      />
      :
      <TimeRangeFieldInput
        part="minute"
        type="start"
      />
      <span class="mx-2">to
        <TimeRangeFieldInput
          part="hour"
          type="end"
        />
        :
        <TimeRangeFieldInput
          part="minute"
          type="end"
        />
      </span>
    </div>
    <div
      v-if="errors.length"
      class="mt-2"
    >
      <p
        v-for="error in errors"
        :key="error"
        class="text-sm color-red-500"
      >
        {{ error }}
      </p>
    </div>
  </TimeRangeFieldRoot>
</template>
```

### Accessibility Features

The TimeRangeField is built with accessibility in mind. Enhance it further with ARIA labels and descriptions for screen readers.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const timeRange = ref({
  start: new Time(9, 0),
  end: new Time(17, 0)
});
</script>

<template>
  <div>
    <label
      for="time-range"
      class="text-sm font-medium mb-2 block"
    >Meeting Time Range</label>
    <TimeRangeFieldRoot
      id="time-range"
      v-model="timeRange"
      aria-describedby="time-range-help"
    >
      <div class="flex gap-2 items-center">
        <TimeRangeFieldInput
          part="hour"
          type="start"
          aria-label="Start hour"
        />
        <span aria-hidden="true">:
          <TimeRangeFieldInput
            part="minute"
            type="start"
            aria-label="Start minute"
          />
          <span
            class="mx-2"
            aria-hidden="true"
          >to
            <TimeRangeFieldInput
              part="hour"
              type="end"
              aria-label="End hour"
            />
            <span aria-hidden="true">:
              <TimeRangeFieldInput
                part="minute"
                type="end"
                aria-label="End minute"
              />
            </span></span></span>
      </div>
    </TimeRangeFieldRoot>
    <p
      id="time-range-help"
      class="text-xs color-gray-500 mt-1"
    >
      Select the start and end times for your meeting. Use Tab to navigate between fields.
    </p>
  </div>
</template>
```

### Real-world Use Cases

Use TimeRangeField in practical scenarios like scheduling appointments or booking resources.

```vue
<script setup>
import { Time } from '@internationalized/date';
import { TimeRangeFieldInput, TimeRangeFieldRoot } from 'akar';
import { ref } from 'vue';

const appointment = ref({
  date: new Date(),
  timeRange: {
    start: new Time(10, 0),
    end: new Time(11, 0)
  },
  title: ''
});

function bookAppointment() {
  console.log('Booking appointment:', appointment.value);
  // API call to book appointment
}
</script>

<template>
  <div class="mx-auto p-6 rounded-lg bg-white max-w-md shadow-lg">
    <h2 class="text-xl font-bold mb-4">
      Book an Appointment
    </h2>
    <form
      class="space-y-4"
      @submit.prevent="bookAppointment"
    >
      <div>
        <label class="text-sm font-medium mb-2 block">Appointment Title</label>
        <input
          v-model="appointment.title"
          type="text"
          class="px-3 py-2 border border-gray-300 rounded w-full"
          required
        >
      </div>
      <div>
        <label class="text-sm font-medium mb-2 block">Date</label>
        <input
          v-model="appointment.date"
          type="date"
          class="px-3 py-2 border border-gray-300 rounded w-full"
          required
        >
      </div>
      <div>
        <label class="text-sm font-medium mb-2 block">Time Range</label>
        <TimeRangeFieldRoot v-model="appointment.timeRange">
          <div class="flex gap-2 items-center">
            <TimeRangeFieldInput
              part="hour"
              type="start"
              class="px-2 py-1 text-center border border-gray-300 rounded w-12"
            />
            :
            <TimeRangeFieldInput
              part="minute"
              type="start"
              class="px-2 py-1 text-center border border-gray-300 rounded w-12"
            />
            <span class="mx-2">to
              <TimeRangeFieldInput
                part="hour"
                type="end"
                class="px-2 py-1 text-center border border-gray-300 rounded w-12"
              />
              :
              <TimeRangeFieldInput
                part="minute"
                type="end"
                class="px-2 py-1 text-center border border-gray-300 rounded w-12"
              />
            </span>
          </div>
        </TimeRangeFieldRoot>
      </div>
      <button
        type="submit"
        class="color-white px-4 py-2 rounded bg-green-500 w-full hover:bg-green-600"
      >
        Book Appointment
      </button>
    </form>
  </div>
</template>
