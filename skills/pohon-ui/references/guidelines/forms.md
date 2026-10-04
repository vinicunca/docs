# Forms

## Basic pattern

Pohon UI forms use `PForm` + `PFormField` + Standard Schema validation (Zod, Valibot, Yup, or Joi).

```vue
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters')
})

type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({ email: '', password: '' })

function onSubmit(event: FormSubmitEvent<Schema>) {
  // PForm validates before emitting @submit — access validated data via event.data
}
</script>

<template>
  <PForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <PFormField name="email" label="Email" required>
      <PInput v-model="state.email" type="email" placeholder="you@example.com" />
    </PFormField>

    <PFormField name="password" label="Password" required>
      <PInput v-model="state.password" type="password" placeholder="Min 8 characters" />
    </PFormField>

    <PButton type="submit" label="Sign in" />
  </PForm>
</template>
```

## Key rules

- Always use `PFormField` around inputs — it connects validation errors via the `name` prop
- The `name` prop on `PFormField` must match the schema field name exactly
- Use `reactive<Partial<Schema>>({})` for state — `Partial` allows empty initial values
- `@submit` only fires when validation passes
- For nested objects, use dot notation: `name="address.city"`

## PFormField props

| Prop | Purpose |
|---|---|
| `name` | Links to schema field for validation errors |
| `label` | Visible label text |
| `description` | Help text below the input |
| `hint` | Right-aligned hint text (e.g., "Optional") |
| `required` | Shows required indicator |
| `size` | Inherits to child input |

## Field layout patterns

### Vertical stack (default)

```vue
<PForm :schema="schema" :state="state" class="space-y-4">
  <PFormField name="name" label="Name">
    <PInput v-model="state.name" />
  </PFormField>
  <PFormField name="email" label="Email">
    <PInput v-model="state.email" />
  </PFormField>
</PForm>
```

### Inline fields with PFieldGroup

```vue
<PFieldGroup>
  <PFormField name="firstName" label="First name">
    <PInput v-model="state.firstName" />
  </PFormField>
  <PFormField name="lastName" label="Last name">
    <PInput v-model="state.lastName" />
  </PFormField>
</PFieldGroup>
```

### Grid layout

```vue
<PForm :schema="schema" :state="state" class="grid grid-cols-2 gap-4">
  <PFormField name="firstName" label="First name">
    <PInput v-model="state.firstName" />
  </PFormField>
  <PFormField name="lastName" label="Last name">
    <PInput v-model="state.lastName" />
  </PFormField>
  <PFormField name="email" label="Email" class="col-span-2">
    <PInput v-model="state.email" type="email" />
  </PFormField>
</PForm>
```

## Common field patterns

### Select

```vue
<PFormField name="role" label="Role">
  <PSelect v-model="state.role" :items="['Admin', 'Editor', 'Viewer']" placeholder="Choose role" />
</PFormField>
```

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
<PFormField name="bio" label="Bio" description="Brief description for your profile.">
  <PTextarea v-model="state.bio" :rows="3" autoresize :maxrows="6" />
</PFormField>
```

### File upload

```vue
<PFormField name="avatar" label="Avatar">
  <PFileUpload v-model="state.avatar" accept="image/*" />
</PFormField>

<!-- Or as a drop area -->
<PFormField name="documents" label="Documents">
  <PFileUpload v-model="state.documents" multiple variant="area" />
</PFormField>
```

### Date

```vue
<PFormField name="date" label="Date">
  <PInputDate v-model="state.date" />
</PFormField>

<!-- Date range -->
<PFormField name="dateRange" label="Date range">
  <PInputDate v-model="state.dateRange" range />
</PFormField>
```

## Programmatic validation

```vue
<script setup lang="ts">
const form = useTemplateRef('form')

async function validateAndSubmit() {
  const result = await form.value?.validate({ silent: true })
  if (result) {
    // valid — submit
  }
}

async function validateEmail() {
  await form.value?.validate({ name: 'email', silent: true })
}

function setServerError() {
  form.value?.setErrors([
    { name: 'email', message: 'Email already taken' }
  ])
}

function resetErrors() {
  form.value?.clear()
}
</script>

<template>
  <PForm ref="form" :schema="schema" :state="state" @submit="onSubmit">
    <!-- fields -->
  </PForm>
</template>
```

By default, `validate()` throws a `FormValidationException` when validation fails. Pass `{ silent: true }` when you want it to return `false` instead. Use `clear()` to remove validation errors.

## Form in a modal

Use `#footer="{ close }"` scoped slot for cancel/submit actions. Wrap the modal body in `PForm` with a `type="submit"` button in the footer so validation runs on submit.

```vue
<PModal v-model:open="isOpen" title="Edit profile" description="Update your information." :ui="{ footer: 'justify-end' }">
  <template #body>
    <PForm id="profile-form" :schema="schema" :state="state" class="space-y-4" @submit="onSave">
      <PFormField name="name" label="Name">
        <PInput v-model="state.name" />
      </PFormField>
      <PFormField name="email" label="Email">
        <PInput v-model="state.email" type="email" />
      </PFormField>
    </PForm>
  </template>
  <template #footer="{ close }">
    <PButton label="Cancel" color="neutral" variant="outline" @click="close" />
    <PButton type="submit" form="profile-form" label="Save" />
  </template>
</PModal>
```
