---
title: "Input"
description: "An input element to enter text."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/input.md"
---
## Usage

Use the `v-model` directive to control the value of the Input.

```vue
<script setup lang="ts">
const value = ref("")
</script>

<template>
  <UInput />
</template>
```

### Type

Use the `type` prop to change the input type. Defaults to `text`.

Some types have been implemented in their own components such as [Checkbox](/pohon/components/checkbox), [Radio](/pohon/components/radio-group), [InputNumber](/pohon/components/input-number) etc. and others have been styled like `file` for example.

```vue
<template>
  <UInput type="file" />
</template>
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
> 
> You can check all the available types on the MDN Web Docs.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
  <UInput placeholder="Search..." />
</template>
```

### Color

Use the `color` prop to change the ring color when the Input is focused.

```vue
<template>
  <UInput color="neutral" highlight placeholder="Search..." />
</template>
```

> [!NOTE]
> 
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Input.

```vue
<template>
  <UInput color="neutral" variant="subtle" :highlight="false" placeholder="Search..." />
</template>
```

### Size

Use the `size` prop to change the size of the Input.

```vue
<template>
  <UInput size="xl" placeholder="Search..." />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the Input.

```vue
<template>
  <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." />
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
  <UInput trailing-icon="i-lucide-at-sign" placeholder="Enter your email" size="md" />
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the Input.

```vue
<template>
  <UInput :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" size="md" variant="outline" placeholder="Search..." />
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Input.

```vue
<template>
  <UInput loading :trailing="false" placeholder="Search..." />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
  <UInput loading loading-icon="i-lucide-loader" placeholder="Search..." />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Disabled

Use the `disabled` prop to disable the Input.

```vue
<template>
  <UInput disabled placeholder="Search..." />
</template>
```

## Examples

### With clear button

You can put a [Button](/pohon/components/button) inside the `#trailing` slot to clear the Input.

```vue [InputClearButtonExample.vue]
<script setup lang="ts">
const value = ref('Click to clear')
</script>

<template>
  <PInput
    v-model="value"
    placeholder="Type something..."
    :ui="{ trailing: 'pe-1' }"
  >
    <template v-if="value?.length" #trailing>
      <PButton
        color="neutral"
        variant="link"
        size="sm"
        icon="i-lucide-circle-x"
        aria-label="Clear input"
        @click="value = ''"
      />
    </template>
  </PInput>
</template>
```

### With copy button

You can put a [Button](/pohon/components/button) inside the `#trailing` slot to copy the value to the clipboard.

```vue [InputCopyButtonExample.vue]
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const value = ref('pnpm add pohon-ui')

const { copy, copied } = useClipboard()
</script>

<template>
  <PInput
    v-model="value"
    :ui="{ trailing: 'pr-0.5' }"
  >
    <template v-if="value?.length" #trailing>
      <PTooltip text="Copy to clipboard" :content="{ side: 'right' }">
        <PButton
          :color="copied ? 'success' : 'neutral'"
          variant="link"
          size="sm"
          :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
          aria-label="Copy to clipboard"
          @click="copy(value)"
        />
      </PTooltip>
    </template>
  </PInput>
</template>
```

### With password toggle

You can put a [Button](/pohon/components/button) inside the `#trailing` slot to toggle the password visibility.

```vue [InputPasswordToggleExample.vue]
<script setup lang="ts">
const show = ref(false)
const password = ref('')
</script>

<template>
  <PInput
    v-model="password"
    placeholder="Password"
    :type="show ? 'text' : 'password'"
    :ui="{ trailing: 'pe-1' }"
  >
    <template #trailing>
      <PButton
        color="neutral"
        variant="link"
        size="sm"
        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        :aria-label="show ? 'Hide password' : 'Show password'"
        :aria-pressed="show"
        aria-controls="password"
        @click="show = !show"
      />
    </template>
  </PInput>
</template>

<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
    display: none;
}
</style>
```

### With password strength indicator

You can use the [Progress](/pohon/components/progress) component to display the password strength indicator.

```vue [InputPasswordStrengthIndicatorExample.vue]
<script setup lang="ts">
const show = ref(false)
const password = ref('')

function checkStrength(str: string) {
  const requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /\d/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' }
  ]

  return requirements.map(req => ({ met: req.regex.test(str), text: req.text }))
}

const strength = computed(() => checkStrength(password.value))
const score = computed(() => strength.value.filter(req => req.met).length)

const color = computed(() => {
  if (score.value === 0) return 'neutral'
  if (score.value <= 1) return 'error'
  if (score.value <= 2) return 'warning'
  if (score.value === 3) return 'warning'
  return 'success'
})

const text = computed(() => {
  if (score.value === 0) return 'Enter a password'
  if (score.value <= 2) return 'Weak password'
  if (score.value === 3) return 'Medium password'
  return 'Strong password'
})
</script>

<template>
  <div class="space-y-2">
    <PFormField label="Password">
      <PInput
        v-model="password"
        placeholder="Password"
        :color="color"
        :type="show ? 'text' : 'password'"
        :aria-invalid="score < 4"
        aria-describedby="password-strength"
        :ui="{ trailing: 'pe-1' }"
        class="w-full"
      >
        <template #trailing>
          <PButton
            color="neutral"
            variant="link"
            size="sm"
            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
            :aria-label="show ? 'Hide password' : 'Show password'"
            :aria-pressed="show"
            aria-controls="password"
            @click="show = !show"
          />
        </template>
      </PInput>
    </PFormField>

    <PProgress
      :color="color"
      :indicator="text"
      :model-value="score"
      :max="4"
      size="sm"
    />

    <p id="password-strength" class="text-sm font-medium">
      {{ text }}. Must contain:
    </p>

    <ul class="space-y-1" aria-label="Password requirements">
      <li
        v-for="(req, index) in strength"
        :key="index"
        class="flex items-center gap-0.5"
        :class="req.met ? 'text-success' : 'color-text-muted'"
      >
        <PIcon :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'" class="size-4 shrink-0" />

        <span class="text-xs font-light">
          {{ req.text }}
          <span class="sr-only">
            {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
```

### With character limit

You can use the `#trailing` slot to add a character limit to the Input.

```vue [InputCharacterLimitExample.vue]
<script setup lang="ts">
const value = ref('')
const maxLength = 15
</script>

<template>
  <PInput
    v-model="value"
    :maxlength="maxLength"
    aria-describedby="character-count"
    :ui="{ trailing: 'pointer-events-none' }"
  >
    <template #trailing>
      <div
        id="character-count"
        class="text-xs color-text-muted tabular-nums"
        aria-live="polite"
        role="status"
      >
        {{ value?.length }}/{{ maxLength }}
      </div>
    </template>
  </PInput>
</template>
```

### With keyboard shortcut

You can use the [Kbd](/pohon/components/kbd) component inside the `#trailing` slot to add a keyboard shortcut to the Input.

```vue [InputKbdExample.vue]
<script setup lang="ts">
const input = useTemplateRef('input')

defineShortcuts({
  '/': () => {
    input.value?.inputRef?.focus()
  }
})
</script>

<template>
  <PInput
    ref="input"
    icon="i-lucide-search"
    placeholder="Search..."
  >
    <template #trailing>
      <PKbd value="/" />
    </template>
  </PInput>
</template>
```

> [!NOTE]
> See: /docs/composables/define-shortcuts
> 
> This example uses the `defineShortcuts` composable to focus the Input when the `/` key is pressed.

### With mask

There's no built-in support for masks, but you can use libraries like [maska](https://github.com/beholdr/maska) to mask the Input.

```vue [InputMaskExample.vue]
<script setup lang="ts">
import { vMaska } from 'maska/vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <PInput v-maska="'#### #### #### ####'" placeholder="4242 4242 4242 4242" icon="i-lucide-credit-card" />

    <div class="flex items-center gap-2">
      <PInput v-maska="'##/##'" placeholder="MM/YY" icon="i-lucide-calendar" />
      <PInput v-maska="'###'" placeholder="CVC" />
    </div>
  </div>
</template>
```

### With floating label

You can use the `#default` slot to add a floating label to the Input.

```vue [InputFloatingLabelExample.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <PInput v-model="value" placeholder="" variant="outline" :ui="{ base: 'peer' }">
    <label class="pointer-events-none absolute left-0 -top-2.5 color-text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:color-text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:color-text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
      <span class="inline-flex bg-background px-1">Email address</span>
    </label>
  </PInput>
</template>
```

### Within a FormField

You can use the Input within a [FormField](/pohon/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputFormFieldExample.vue]
<script setup lang="ts">
const email = ref('')
</script>

<template>
  <PFormField label="Email" help="We won't share your email." required>
    <PInput v-model="email" placeholder="Enter your email" icon="i-lucide-at-sign" />
  </PFormField>
</template>
```

> [!TIP]
> See: /docs/components/form
> 
> It also provides validation and error handling when used within a **Form** component.

### Within a FieldGroup

You can use the Input within a [FieldGroup](/pohon/components/field-group) component to group multiple elements together.

```vue [InputFieldGroupExample.vue]
<script setup lang="ts">
const value = ref('')
const domains = ['.com', '.dev', '.org']
const domain = ref(domains[0])
</script>

<template>
  <PFieldGroup>
    <PInput
      v-model="value"
      placeholder="nuxt"
      :ui="{
        base: 'pl-14.5',
        leading: 'pointer-events-none'
      }"
    >
      <template #leading>
        <p class="text-sm color-text-muted">
          https://
        </p>
      </template>
    </PInput>

    <PSelectMenu v-model="domain" :items="domains" />
  </PFieldGroup>
</template>
```

### As a phone number input

You can use the Input within a [FieldGroup](/pohon/components/field-group) component alongside a [SelectMenu](/pohon/components/select-menu) to create a phone number input with country code selection.

```vue [InputPhoneNumberExample.vue]
<script setup lang="ts">
import { vMaska } from 'maska/vue'

type PhoneCode = {
  name: string
  code: string
  emoji: string
  dialCode: string
  mask: string
}

const phone = ref('')
const countryCode = ref('US')

const { data: phoneCodes, status, execute } = await useLazyFetch<PhoneCode[]>('/api/phone-codes.json', {
  key: 'api-phone-codes',
  immediate: false
})

const country = computed(() => phoneCodes.value?.find(c => c.code === countryCode.value))
const dialCode = computed(() => country.value?.dialCode || '+1')
const mask = computed(() => country.value?.mask || '(###) ###-####')

function onOpen() {
  if (!phoneCodes.value?.length) {
    execute()
  }
}

watch(countryCode, () => {
  phone.value = ''
})
</script>

<template>
  <PFieldGroup>
    <PSelectMenu
      v-model="countryCode"
      :items="phoneCodes"
      value-key="code"
      :search-input="{
        placeholder: 'Search country...',
        icon: 'i-lucide-search',
        loading: status === 'pending'
      }"
      :filter-fields="['name', 'code', 'dialCode']"
      :content="{ align: 'start' }"
      :ui="{
        base: 'pe-8',
        content: 'w-48',
        placeholder: 'hidden',
        trailingIcon: 'size-4'
      }"
      trailing-icon="i-lucide-chevrons-up-down"
      @update:open="onOpen"
    >
      <span class="size-5 flex items-center text-lg">
        {{ country?.emoji || '\u{1F1FA}\u{1F1F8}' }}
      </span>

      <template #item-leading="{ item }">
        <span class="size-5 flex items-center text-lg">
          {{ item.emoji }}
        </span>
      </template>

      <template #item-label="{ item }">
        {{ item.name }} ({{ item.dialCode }})
      </template>
    </PSelectMenu>

    <PInput
      v-model="phone"
      v-maska="mask"
      :placeholder="mask.replaceAll('#', '_')"
      :style="{ '--dial-code-length': `${dialCode.length + 1.5}ch` }"
      :ui="{
        base: 'ps-(--dial-code-length)',
        leading: 'pointer-events-none text-base md:text-sm color-text-muted'
      }"
    >
      <template #leading>
        {{ dialCode }}
      </template>
    </PInput>
  </PFieldGroup>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
> 
> This component also supports all native `<input>` HTML attributes.

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `inputRef` | `Ref<HTMLInputElement \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    input: {
      slots: {
        root: 'relative inline-flex items-center',
        base: [
          'w-full rounded-md border-0 appearance-none placeholder:color-text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 color-text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 color-text-dimmed'
      },
      variants: {
        fieldGroup: {
          horizontal: {
            root: 'group has-focus-visible:z-1',
            base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none'
          },
          vertical: {
            root: 'group has-focus-visible:z-1',
            base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none'
          }
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-sm/4 gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'px-3 py-2 text-base/5 gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        },
        variant: {
          outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented',
          soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated focus:bg-background-elevated disabled:bg-background-elevated/50',
          subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented',
          ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'color-text-highlighted bg-transparent focus:outline-none'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        type: {
          file: 'file:me-1.5 file:font-500 file:color-text-muted file:outline-none'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-success/25 focus-visible:outline-3 focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-info/25 focus-visible:outline-3 focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-error/25 focus-visible:outline-3 focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-primary/25 focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-success/25 focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-info/25 focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-warning/25 focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-error/25 focus-visible:outline-3'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'secondary',
          highlight: true,
          class: 'ring ring-inset ring-secondary'
        },
        {
          color: 'success',
          highlight: true,
          class: 'ring ring-inset ring-success'
        },
        {
          color: 'info',
          highlight: true,
          class: 'ring ring-inset ring-info'
        },
        {
          color: 'warning',
          highlight: true,
          class: 'ring ring-inset ring-warning'
        },
        {
          color: 'error',
          highlight: true,
          class: 'ring ring-inset ring-error'
        },
        {
          color: 'neutral',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        },
        {
          fixed: false,
          size: 'xs',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'sm',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'md',
          class: 'md:text-sm'
        },
        {
          fixed: false,
          size: 'lg',
          class: 'md:text-sm'
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Input.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/input.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Input.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Input source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Input.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **id** — `string | undefined; optional`
- **name** — `string | undefined; optional`
- **type** — `InputTypeHTMLAttribute | undefined; optional; default: "text"`
- **placeholder** — `string | undefined; optional`: The placeholder text when the input is empty.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **required** — `boolean | undefined; optional`
- **autocomplete** — `(string & {}) | "on" | "off" | undefined; optional; default: "off"`
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional; default: 0`
- **disabled** — `boolean | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **modelValue** — `_Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined; optional`
- **defaultValue** — `_Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined; optional`
- **modelModifiers** — `Mod | undefined; optional`
- **ui** — `{ root?: SlotClass; base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; } | undefined; optional`
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **form** — `string | undefined; optional`
- **list** — `string | undefined; optional`
- **step** — `Numberish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **enterKeyHint** — `"search" | "done" | "next" | "enter" | "go" | "previous" | "send" | undefined; optional`
- **max** — `Numberish | undefined; optional`
- **maxlength** — `Numberish | undefined; optional`
- **min** — `Numberish | undefined; optional`
- **minlength** — `Numberish | undefined; optional`
- **pattern** — `string | undefined; optional`
- **readonly** — `Booleanish | undefined; optional`

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[value: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod>]`
- **blur** — `[event: FocusEvent]`
- **change** — `[event: Event]`
