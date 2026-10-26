# Auth Forms

## PAuthForm (recommended)

`PAuthForm` provides a complete auth form with fields, providers, validation, and submit, so you don't wire `PForm` + `PFormField` yourself. Wrap it in `PPageCard` for a framed look. API: [auth-form](https://vinicunca.dev/raw/pohon/components/auth-form.md).

```vue [pages/login.vue]
<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from 'pohon-ui';
import * as z from 'zod';

const fields: Array<AuthFormField> = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}];

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => navigateTo('/auth/google', { external: true })
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => navigateTo('/auth/github', { external: true })
}];

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  // payload.data contains validated fields
}
</script>

<template>
  <div class="flex items-center justify-center min-h-dvh">
    <PPageCard class="max-w-md w-full">
      <PAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Welcome back!"
        description="Sign in to your account."
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #password-hint>
          <PLink
            to="/forgot-password"
            class="text-primary font-medium"
          >
            Forgot password?
          </PLink>
        </template>
        <template #footer>
          Don't have an account? <PLink
            to="/signup"
            class="text-primary font-medium"
          >
            Sign up
          </PLink>.
        </template>
      </PAuthForm>
    </PPageCard>
  </div>
</template>
```

### PAuthForm key props

| Prop | Purpose |
|---|---|
| `title`, `description`, `icon` | Header content |
| `fields` | `AuthFormField[]`: `name`, `type` (any input type, `checkbox`, `select`, `otp`), `label`, `placeholder`, `required`, … |
| `providers` | `ButtonProps[]` — social login buttons shown above/below the form |
| `schema` | Any Standard Schema (Zod, Valibot, …) |
| `submit` | Submit button props: `{ label: 'Sign in' }` |
| `loading`, `disabled` | Form state |
| `separator` | Text between providers and fields (default: `'or'`) |

### PAuthForm key slots

| Slot | Purpose |
|---|---|
| `#description` | Override description (e.g., add sign-up link) |
| `#password-hint` | "Forgot password?" link on password field |
| `#validation` | Custom error display (e.g., `PAlert`) |
| `#footer` | Terms of service, sign-up link |
| `#<field>-field` | Replace a field's input (receives `{ field, state }`) |
| `#<field>-label`, `-description`, `-hint`, `-help`, `-error` | Customize parts of a field's `PFormField` |

## Custom auth layout

For layouts where `PAuthForm` is too opinionated, use `PCard` + `PForm` + `PFormField` directly.

```vue [pages/login.vue]
<script setup lang="ts">
import type { FormSubmitEvent } from 'pohon-ui';
import * as z from 'zod';

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(1, 'Password is required')
});

type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({ email: '', password: '' });

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // event.data contains validated fields
}
</script>

<template>
  <div class="flex items-center justify-center min-h-dvh">
    <PCard class="max-w-sm w-full">
      <template #header>
        <div class="text-center">
          <h1 class="text-xl color-text font-semibold">
            Welcome back
          </h1>
          <p class="text-sm color-text-muted mt-1">
            Sign in to your account
          </p>
        </div>
      </template>

      <PForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <PFormField
          name="email"
          label="Email"
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
        >
          <template #hint>
            <PLink
              to="/forgot-password"
              class="text-sm text-primary"
            >
              Forgot password?
            </PLink>
          </template>
          <PInput
            v-model="state.password"
            type="password"
          />
        </PFormField>

        <PButton
          type="submit"
          label="Sign in"
          block
        />
      </PForm>

      <template #footer>
        <p class="text-sm color-text-muted text-center">
          Don't have an account?
          <PLink
            to="/signup"
            class="text-primary font-medium"
          >
            Sign up
          </PLink>
        </p>
      </template>
    </PCard>
  </div>
</template>
```

## Tips

- Prefer `PAuthForm` with `PPageCard` for standard auth pages — handles layout, providers, validation, and submit
- With Zod 4, use `import * as z from 'zod'` and `z.email()`
- Type the submit handler: `function onSubmit(event: FormSubmitEvent<Schema>)` — access validated data via `event.data`
- Center auth forms with `flex min-h-dvh items-center justify-center`
- Place "Forgot password?" link as `#password-hint` slot on `PAuthForm`, or `#hint` slot on `PFormField`
- Social login buttons: use `providers` prop on `PAuthForm`, or add manually with `<PSeparator label="or" />`
