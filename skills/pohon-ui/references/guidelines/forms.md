# Forms

`PForm` validates a reactive `state` against a `schema`, and `PFormField` shows the label and the error for each input. The schema can be any [Standard Schema](https://standardschema.dev) library (Zod, Valibot, Regle, Yup, Joi, ArkType) or Superstruct. No validation library is bundled: install the one you use. API: [form](https://vinicunca.dev/raw/pohon/components/form.md), [form-field](https://vinicunca.dev/raw/pohon/components/form-field.md).

## Basic pattern

```vue
<script setup lang="ts">
import type { FormSubmitEvent } from 'pohon-ui';
import * as z from 'zod';

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters')
});

type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({ email: '', password: '' });

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Runs only when validation passes; event.data is the parsed output.
  await $fetch('/api/login', { method: 'POST', body: event.data });
}
</script>

<template>
  <PForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <PFormField
      name="email"
      label="Email"
      required
    >
      <PInput
        v-model="state.email"
        type="email"
        placeholder="you@example.com"
      />
    </PFormField>

    <PFormField
      name="password"
      label="Password"
      required
    >
      <PInput
        v-model="state.password"
        type="password"
      />
    </PFormField>

    <PButton
      type="submit"
      label="Sign in"
      loading-auto
    />
  </PForm>
</template>
```

## Key rules

- Wrap every input in `PFormField`. Its `name` links the input to the schema path and shows that path's error.
- `name` must match the schema key exactly; nested paths use dots: `name="address.city"`.
- Use `reactive<Partial<Schema>>({...})` for state so fields can start empty.
- `@submit` fires only after validation passes, and `event.data` holds the schema's **output** (transforms applied). Failed submits emit `@error` with `event.errors`.
- Add `loading-auto` to the submit `PButton` to show a spinner while an async `@submit` handler runs (the form side, `loadingAuto`, is on by default).
- Inputs validate on `input` (debounced 300 ms), `blur`, and `change`. Narrow it with `:validate-on="['blur']"`.
- `required` on `PFormField` only draws the asterisk; the schema decides validity.
- For rules that a schema can't express, pass `:validate="(state) => FormError[]"` (it runs alongside `schema`).

## PFormField props

| Prop | Purpose |
|---|---|
| `name` | Schema path whose error is shown |
| `label` | Label text, linked to the input |
| `description` | Text under the label |
| `hint` | Text at the end of the label row (e.g. "Optional") |
| `help` | Text under the input |
| `error` | Force an error message (`string`) or the error state (`true`) |
| `required` | Draws the required asterisk |
| `size` | Passed down to the child input |
| `orientation` | `vertical` (default) or `horizontal` (label beside the input) |

Each text prop also has a slot (`#label`, `#description`, `#hint`, `#help`, `#error`).

## Field layout patterns

### Vertical stack (default)

```vue
<PForm :schema="schema" :state="state" class="space-y-4">
  <PFormField name="name" label="Name">
    <PInput v-model="state.name" class="w-full" />
  </PFormField>
  <PFormField name="email" label="Email">
    <PInput v-model="state.email" class="w-full" />
  </PFormField>
</PForm>
```

### Grid layout

```vue
<PForm :schema="schema" :state="state" class="grid grid-cols-2 gap-4">
  <PFormField name="firstName" label="First name">
    <PInput v-model="state.firstName" class="w-full" />
  </PFormField>
  <PFormField name="lastName" label="Last name">
    <PInput v-model="state.lastName" class="w-full" />
  </PFormField>
  <PFormField name="email" label="Email" class="col-span-2">
    <PInput v-model="state.email" type="email" class="w-full" />
  </PFormField>
</PForm>
```

### Settings rows (label beside input)

```vue
<PFormField name="username" label="Username" description="Shown on your profile." orientation="horizontal">
  <PInput v-model="state.username" />
</PFormField>
```

### Input with attached button

`PFieldGroup` joins one input and its buttons into a single control:

```vue
<PFormField name="invite" label="Invite by email">
  <PFieldGroup>
    <PInput v-model="state.invite" placeholder="name@example.com" />
    <PButton label="Send" color="neutral" variant="outline" />
  </PFieldGroup>
</PFormField>
```

## Common field patterns

Inputs are inline-sized by default; add `class="w-full"` to stretch them.

### Select

```vue
<PFormField name="role" label="Role">
  <PSelect v-model="state.role" :items="['Admin', 'Editor', 'Viewer']" placeholder="Choose a role" class="w-full" />
</PFormField>
```

Object items bind their `value` key by default (`:items="[{ label: 'Admin', value: 'admin' }]"`); change it with `value-key`.

### Checkbox

```vue
<PFormField name="terms">
  <PCheckbox v-model="state.terms" label="I agree to the terms and conditions" />
</PFormField>
```

### Radio group

```vue
<PFormField name="plan" label="Plan">
  <PRadioGroup
    v-model="state.plan"
    :items="[
      { label: 'Free', value: 'free', description: 'For personal projects' },
      { label: 'Pro', value: 'pro', description: 'For teams' }
    ]"
  />
</PFormField>
```

### Switch

```vue
<PFormField name="notifications" label="Email notifications">
  <PSwitch v-model="state.notifications" />
</PFormField>
```

### Textarea

```vue
<PFormField name="bio" label="Bio" help="Brief description for your profile.">
  <PTextarea v-model="state.bio" :rows="3" autoresize :maxrows="6" class="w-full" />
</PFormField>
```

### File upload

```vue
<PFormField name="avatar" label="Avatar">
  <PFileUpload v-model="state.avatar" accept="image/*" />
</PFormField>

<!-- `multiple` always renders as a drop area -->
<PFormField name="documents" label="Documents">
  <PFileUpload v-model="state.documents" multiple />
</PFormField>
```

### Date

`PInputDate` uses `@internationalized/date` values (`CalendarDate`), formatted by the `PApp` locale:

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';

state.date = new CalendarDate(2026, 1, 15);
</script>

<template>
  <PFormField
    name="date"
    label="Date"
  >
    <PInputDate v-model="state.date" />
  </PFormField>

  <PFormField
    name="period"
    label="Period"
  >
    <PInputDate
      v-model="state.period"
      range
    />
  </PFormField>
</template>
```

## Programmatic control

```vue
<script setup lang="ts">
const form = useTemplateRef('form');

async function check() {
  const data = await form.value?.validate({ silent: true }); // false when invalid
  if (data) {
    // valid
  }
}

async function checkEmail() {
  await form.value?.validate({ name: 'email', silent: true });
}

function setServerError() {
  form.value?.setErrors([{ name: 'email', message: 'Email already taken' }]);
}

function clearErrors() {
  form.value?.clear(); // or clear('email')
}
</script>

<template>
  <PForm
    ref="form"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <!-- fields -->
  </PForm>
</template>
```

Without `{ silent: true }`, `validate()` throws a `FormValidationException` on failure. The exposed API also includes `submit()`, `getErrors()`, `errors`, `loading`, `dirty`, `dirtyFields`, and `disabled`.

Nest a sub-form with `<PForm nested name="address" :schema="addressSchema">` inside a parent `PForm`; the parent validates it on submit.

## Form in a modal

Give the form an `id` and point the footer's submit button at it with `form="<id>"`, so validation runs on submit:

```vue
<PModal v-model:open="isOpen" title="Edit profile" description="Update your information." :ui="{ footer: 'justify-end' }">
  <template #body>
    <PForm id="profile-form" :schema="schema" :state="state" class="space-y-4" @submit="onSave">
      <PFormField name="name" label="Name">
        <PInput v-model="state.name" class="w-full" />
      </PFormField>
      <PFormField name="email" label="Email">
        <PInput v-model="state.email" type="email" class="w-full" />
      </PFormField>
    </PForm>
  </template>

  <template #footer="{ close }">
    <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
    <PButton type="submit" form="profile-form" label="Save" />
  </template>
</PModal>
```

Close the modal at the end of `onSave` (`isOpen.value = false`).
