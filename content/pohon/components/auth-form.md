---
title: "AuthForm"
description: "A customizable Form to create login, register or password reset forms."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/auth-form.md"
---
## Usage

Built on top of the [Form](/pohon/components/form) component, the `AuthForm` component can be used in your pages or wrapped in a [PageCard](/pohon/components/page-card).

```vue [AuthFormExample.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from 'pohon-ui'

const toast = useToast()

const fields: AuthFormField[] = [{
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
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <PPageCard class="w-full max-w-md">
      <PAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      />
    </PPageCard>
  </div>
</template>
```

### Fields

The Form will construct itself based on the `fields` prop and the state will be handled internally.

Use the `fields` prop as an array of objects with the following properties:

- `name: string`
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`

Each field must include a `type` property, which determines the input component and any additional props applied: `checkbox` fields use [Checkbox](/pohon/components/checkbox#props) props, `select` fields use [SelectMenu](/pohon/components/select-menu#props) props, `otp` fields use [PinInput](/pohon/components/pin-input#props) props, and all other types use [Input](/pohon/components/input#props) props.

You can also pass any property from the [FormField](/pohon/components/form-field#props) component to each field.

```vue
<script setup lang="ts">
import type { AuthFormField } from 'pohon-ui'

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true
  },
  {
    name: "country",
    type: "select",
    label: "Country",
    placeholder: "Select country",
    items: [
      {
        label: "United States",
        value: "us"
      },
      {
        label: "France",
        value: "fr"
      },
      {
        label: "United Kingdom",
        value: "uk"
      },
      {
        label: "Australia",
        value: "au"
      }
    ]
  },
  {
    name: "otp",
    type: "otp",
    label: "OTP",
    length: 6,
    placeholder: "○"
  },
  {
    name: "remember",
    type: "checkbox",
    label: "Remember me",
    description: "You will be logged in for 30 days."
  }
])
</script>

<template>
  <UAuthForm :fields="fields" class="max-w-sm" />
</template>
```

### Title

Use the `title` prop to set the title of the Form.

```vue
<script setup lang="ts">
import type { AuthFormField } from 'pohon-ui'

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" :fields="fields" class="max-w-md" />
</template>
```

### Description

Use the `description` prop to set the description of the Form.

```vue
<script setup lang="ts">
import type { AuthFormField } from 'pohon-ui'

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." :fields="fields" class="max-w-md" />
</template>
```

### Icon

Use the `icon` prop to set the icon of the Form.

```vue
<script setup lang="ts">
import type { AuthFormField } from 'pohon-ui'

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" :fields="fields" class="max-w-md" />
</template>
```

### Providers

Use the `providers` prop to add providers to the form.

You can pass any property from the [Button](/pohon/components/button) component such as `variant`, `color`, `to`, etc.

```vue
<script setup lang="ts">
import type { ButtonProps, AuthFormField } from 'pohon-ui'

const providers = ref<ButtonProps[]>([
  {
    label: "Google",
    icon: "i-simple-icons-google",
    color: "neutral",
    variant: "subtle"
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    color: "neutral",
    variant: "subtle"
  }
])
const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" :providers="providers" :fields="fields" class="max-w-md" />
</template>
```

### Separator

Use the `separator` prop to customize the [Separator](/pohon/components/separator) between the providers and the fields. Defaults to `or`.

```vue
<script setup lang="ts">
import type { ButtonProps, AuthFormField } from 'pohon-ui'

const providers = ref<ButtonProps[]>([
  {
    label: "Google",
    icon: "i-simple-icons-google",
    color: "neutral",
    variant: "subtle"
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    color: "neutral",
    variant: "subtle"
  }
])
const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" :providers="providers" :fields="fields" separator="Providers" class="max-w-md" />
</template>
```

You can pass any property from the [Separator](/pohon/components/separator#props) component to customize it.

```vue
<script setup lang="ts">
import type { ButtonProps, AuthFormField } from 'pohon-ui'

const providers = ref<ButtonProps[]>([
  {
    label: "Google",
    icon: "i-simple-icons-google",
    color: "neutral",
    variant: "subtle"
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    color: "neutral",
    variant: "subtle"
  }
])
const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" :providers="providers" :fields="fields" :separator="{
  icon: 'i-lucide-user'
}" class="max-w-md" />
</template>
```

### Submit

Use the `submit` prop to change the submit button of the Form.

You can pass any property from the [Button](/pohon/components/button) component such as `variant`, `color`, `to`, etc.

```vue
<script setup lang="ts">
import type { AuthFormField } from 'pohon-ui'

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    label: "Password"
  }
])
</script>

<template>
  <UAuthForm title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" :fields="fields" :submit="{
  label: 'Submit',
  color: 'error',
  variant: 'subtle'
}" class="max-w-md" />
</template>
```

## Examples

### Within a page

You can wrap the `AuthForm` component with the [PageCard](/pohon/components/page-card) component to display it within a `login.vue` page for example.

```vue [AuthFormPageExample.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from 'pohon-ui'

const toast = useToast()

const fields: AuthFormField[] = [{
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
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <PPageCard class="w-full max-w-md">
      <PAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Welcome back!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <PLink to="#" class="text-primary font-medium">Sign up</PLink>.
        </template>
        <template #password-hint>
          <PLink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</PLink>
        </template>
        <template #validation>
          <PAlert color="error" icon="i-lucide-info" title="Error signing in" />
        </template>
        <template #footer>
          By signing in, you agree to our <PLink to="#" class="text-primary font-medium">Terms of Service</PLink>.
        </template>
      </PAuthForm>
    </PPageCard>
  </div>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes
> 
> This component also supports all native `<form>` HTML attributes.

### Slots

### Emits

No events available for this component.

### Expose

You can access the typed component instance (exposing formRef and state) using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). For example, in a separate form (e.g. a "reset" form) you can do:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <PAuthForm ref="authForm" />
</template>
```

This gives you access to the following (exposed) properties:

| Name | Type |
| --- | --- |
| `formRef` | `Ref<HTMLFormElement \| null>` |
| `state` | `Reactive<FormStateType>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    authForm: {
      slots: {
        root: 'w-full space-y-6',
        header: 'flex flex-col text-center',
        leading: 'mb-2',
        leadingIcon: 'size-8 shrink-0 inline-block',
        title: 'text-xl text-pretty font-600 color-text-highlighted',
        description: 'mt-1 text-base text-pretty color-text-muted',
        body: 'gap-y-6 flex flex-col',
        providers: 'space-y-3',
        checkbox: '',
        select: 'w-full',
        password: 'w-full',
        otp: 'w-full',
        input: 'w-full',
        separator: '',
        form: 'space-y-5',
        footer: 'text-sm text-center color-text-muted mt-2'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/AuthForm.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/auth-form.ts).

---

- [Form](/pohon/components/form)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/AuthForm.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[AuthForm source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/AuthForm.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **icon** — `any; optional`: The icon displayed above the title.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **fields** — `F[] | undefined; optional`
- **providers** — `ButtonProps[] | undefined; optional`: Display a list of Button under the description. \`{ color: 'neutral', variant: 'subtle', block: true }\`{lang="ts-type"}
- **separator** — `string | SeparatorProps | undefined; optional; default: "or"`: The text displayed in the separator.
- **submit** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a submit button at the bottom of the form. \`{ label: 'Continue', block: true }\`{lang="ts-type"}
- **schema** — `T | undefined; optional`
- **validate** — `((state: Partial<InferInput<T>>) => FormError<string>[] | Promise<FormError<string>[]>) | undefined; optional`
- **validateOn** — `FormInputEvents[] | undefined; optional`
- **validateOnInputDelay** — `number | undefined; optional`
- **disabled** — `boolean | undefined; optional`
- **loading** — `boolean | undefined; optional`
- **loadingAuto** — `boolean | undefined; optional`
- **ui** — `{ root?: SlotClass; header?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; title?: SlotClass; description?: SlotClass; body?: SlotClass; providers?: SlotClass; checkbox?: SlotClass; select?: SlotClass; password?: SlotClass; otp?: SlotClass; input?: SlotClass; separator?: SlotClass; form?: SlotClass; footer?: SlotClass; } | undefined; optional`
- **name** — `string | undefined; optional`
- **target** — `string | undefined; optional`
- **autocomplete** — `string | undefined; optional`
- **acceptcharset** — `string | undefined; optional`
- **action** — `string | undefined; optional`
- **enctype** — `string | undefined; optional`
- **method** — `string | undefined; optional`
- **novalidate** — `Booleanish | undefined; optional`

### Slots

- **header** — `{} | undefined`
- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; providers: (props?: Record<string, any> | undefined) => string | undefined; checkbox: (props?: Record<string, any> | undefined) => string | undefined; select: (props?: Record<string, any> | undefined) => string | undefined; password: (props?: Record<string, any> | undefined) => string | undefined; otp: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; form: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **providers** — `{} | undefined`
- **separator** — `{} | undefined`
- **validation** — `{} | undefined`
- **submit** — `{ loading: boolean; }`
- **footer** — `{} | undefined`

### Events

- **submit** — `[payload: FormSubmitEvent<InferOutput<T>>]`
