# Forms with Akar

Two layers: every form control can submit with a plain `<form>`, and `FieldRoot` / `FormRoot` add validation, error display and ARIA wiring on top.

## Native submission

Controls that accept `name` (Checkbox, CheckboxGroup, RadioGroup, Switch, Toggle, ToggleGroup, Select, Combobox, Listbox, Slider, NumberField, PinInput, TagsInput, Editable, ColorField, date fields) render a hidden native input, so their value lands in `FormData` like an `<input>`. `required` works the same way. Without `name`, nothing is submitted.

## Field

`FieldRoot` generates the IDs and connects label, description and error to the control.

```vue
<script setup lang="ts">
import { FieldControl, FieldDescription, FieldError, FieldLabel, FieldRoot } from 'akar';
</script>

<template>
  <FieldRoot
    name="email"
    required
    validation-mode="onBlur"
  >
    <FieldLabel>Email</FieldLabel>
    <FieldControl type="email" />
    <FieldDescription>We never share it.</FieldDescription>
    <FieldError match="valueMissing">
      Enter your email.
    </FieldError>
    <FieldError match="typeMismatch">
      Enter a valid email.
    </FieldError>
  </FieldRoot>
</template>
```

- `FieldControl` is a native `input` (`as="textarea"` or `as="select"` for others); bind it with `v-model` or `default-value`.
- Put an Akar control (`CheckboxRoot`, `SelectRoot`, `DateFieldRoot`, ...) inside `FieldRoot` in place of `FieldControl`. It picks up the wiring, reports its value, and enforces `required`.
- For a button-like control such as `SelectTrigger`, render the label as `<FieldLabel as="div" :native-label="false">`.
- `FieldError` without `match` shows any current message (native, custom or server). With `match="<ValidityState key>"` it shows for that constraint only.
- `validate` is a sync or async function returning a message, an array of messages, or `null`. Inside a `FormRoot` it also receives every named field's value.
- `validation-mode`: `onSubmit` (default), `onBlur`, `onChange` (with `validation-debounce-time`). An empty `required` field is not reported until it changes or the form submits.
- Style with `data-invalid`, `data-valid`, `data-dirty`, `data-touched`, `data-filled`, `data-focused`, `data-disabled`, which are set on every part and on the participating control.
- A template ref on `FieldRoot` exposes `validate()`.

## Form

`FormRoot` renders a `<form novalidate>` that validates every Field on submit, focuses the first invalid control, and displays server errors.

```vue
<script setup lang="ts">
import { FieldControl, FieldError, FieldLabel, FieldRoot, FormRoot } from 'akar';
import { ref } from 'vue';

const serverErrors = ref<Record<string, string>>({});

async function onFormSubmit(values: Record<string, unknown>) {
  const result = await api.createAccount(values);
  if (result.error) {
    serverErrors.value = { email: result.error };
  }
}
</script>

<template>
  <FormRoot
    :errors="serverErrors"
    @form-submit="onFormSubmit"
  >
    <FieldRoot
      name="email"
      required
    >
      <FieldLabel>Email</FieldLabel>
      <FieldControl type="email" />
      <FieldError />
    </FieldRoot>
    <button type="submit">
      Create account
    </button>
  </FormRoot>
</template>
```

- With a `form-submit` listener, the native submission is prevented and you receive the values of every named field. Without one, a valid form submits natively (for example to `action`).
- `errors` is keyed by field `name`. Each message shows until the user edits that field.
- Only synchronous validation blocks submission. An async `validate` shows its result when it resolves.
- Native `reset` clears touched, dirty and error state. A template ref exposes `validate(name?)`.

Pohon UI has its own `PForm` / `PFormField` with Standard Schema validation. Use Akar's Field/Form only when you build the form layer yourself.

More: [Field](https://vinicunca.dev/raw/akar/components/field.md), [Form](https://vinicunca.dev/raw/akar/components/form.md), [Label](https://vinicunca.dev/raw/akar/components/label.md).
