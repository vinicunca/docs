<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  input: z.string({ message: 'Please enter your email' }).min(10, 'Must be at least 10 characters'),
  inputNumber: z.number({ message: 'Please enter a number' }).min(10, 'Must be at least 10'),
  inputMenu: z.any().refine(option => option?.value === 'option-2', {
    message: 'Please select Option 2'
  }),
  inputMenuMultiple: z.any().refine(values => !!values?.find((option: any) => option.value === 'option-2'), {
    message: 'Option 2 must be included'
  }),
  textarea: z.string({ message: 'Please enter a message' }).min(10, 'Must be at least 10 characters'),
  select: z.string({ message: 'Please select an option' }).refine(value => value === 'option-2', {
    message: 'Please select Option 2'
  }),
  selectMultiple: z.array(z.string(), { message: 'Please select at least one option' }).refine(values => values.includes('option-2'), {
    message: 'Option 2 must be included'
  }),
  selectMenu: z.any().refine(option => option?.value === 'option-2', {
    message: 'Please select Option 2'
  }),
  selectMenuMultiple: z.any().refine(values => !!values?.find((option: any) => option.value === 'option-2'), {
    message: 'Option 2 must be included'
  }),
  switch: z.boolean().refine(value => value === true, {
    message: 'Must be enabled'
  }),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'Must be checked'
  }),
  radioGroup: z.string({ message: 'Please select an option' }).refine(value => value === 'option-2', {
    message: 'Please select Option 2'
  }),
  checkboxGroup: z.any().refine(values => !!values?.find((option: any) => option === 'option-2'), {
    message: 'Option 2 must be included'
  }),
  listbox: z.any().refine(option => option?.value === 'option-2', {
    message: 'Please select Option 2'
  }),
  listboxMultiple: z.any().refine(values => !!values?.find((option: any) => option.value === 'option-2'), {
    message: 'Option 2 must be included'
  }),
  inputTags: z.array(z.string(), { message: 'Please add at least one tag' }).min(1, 'Please add at least one tag'),
  inputDate: z.any().refine(value => !!value, {
    message: 'Please select a date'
  }),
  inputTime: z.any().refine(value => !!value, {
    message: 'Please select a time'
  }),
  slider: z.number().min(1, 'Must be greater than 0').max(20, 'Must be less than 20'),
  rating: z.number().min(1, 'Please select a rating'),
  pin: z.string().regex(/^\d$/, 'Must be a digit').array().length(5, 'All 5 digits are required'),
  file: z.file({ message: 'Please upload a file' }).min(1, 'File is required').max(1024 * 1024, 'File must be less than 1MB').mime('image/png', 'Only PNG images are allowed')
})

type Schema = z.input<typeof schema>

const state = reactive<Partial<Schema>>({
  switch: false,
  checkbox: false,
  slider: 0,
  rating: 0,
  pin: []
})

const form = useTemplateRef('form')

const items = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PForm ref="form" :state="state" :schema="schema" class="w-full" @submit="onSubmit">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <PFormField label="Input" name="input">
        <PInput v-model="state.input" placeholder="you@example.com" class="w-full" />
      </PFormField>

      <PFormField name="inputNumber" label="InputNumber">
        <PInputNumber v-model="state.inputNumber" placeholder="Enter a number" class="w-full" />
      </PFormField>

      <PFormField name="pin" label="PinInput" :error-pattern="/(pin)\..*/">
        <PPinInput v-model="state.pin" placeholder="○" />
      </PFormField>

      <PFormField name="inputDate" label="InputDate">
        <PInputDate v-model="state.inputDate" class="w-full" />
      </PFormField>

      <PFormField name="inputTime" label="InputTime">
        <PInputTime v-model="state.inputTime" class="w-full" />
      </PFormField>

      <PFormField name="inputTags" label="InputTags">
        <PInputTags v-model="state.inputTags" placeholder="Add a tag..." class="w-full" />
      </PFormField>

      <PFormField name="inputMenu" label="InputMenu">
        <PInputMenu v-model="state.inputMenu" :items="items" placeholder="Search an option..." class="w-full" />
      </PFormField>

      <PFormField name="inputMenuMultiple" label="InputMenu (Multiple)">
        <PInputMenu v-model="state.inputMenuMultiple" multiple :items="items" placeholder="Search options..." class="w-full" />
      </PFormField>

      <PFormField label="Textarea" name="textarea">
        <PTextarea v-model="state.textarea" placeholder="Write your message..." class="w-full" :rows="1" />
      </PFormField>

      <PFormField name="select" label="Select">
        <PSelect v-model="state.select" :items="items" placeholder="Choose an option" class="w-full" />
      </PFormField>

      <PFormField name="selectMultiple" label="Select (Multiple)">
        <PSelect v-model="state.selectMultiple" multiple :items="items" placeholder="Choose options" class="w-full" />
      </PFormField>

      <div class="hidden md:block" />

      <PFormField name="selectMenu" label="SelectMenu">
        <PSelectMenu v-model="state.selectMenu" :items="items" placeholder="Search an option..." class="w-full" />
      </PFormField>

      <PFormField name="selectMenuMultiple" label="SelectMenu (Multiple)">
        <PSelectMenu v-model="state.selectMenuMultiple" multiple :items="items" placeholder="Search options..." class="w-full" />
      </PFormField>

      <div class="hidden md:block" />

      <PFormField name="listbox" label="Listbox">
        <PListbox v-model="state.listbox" :items="items" class="w-full" />
      </PFormField>

      <PFormField name="listboxMultiple" label="Listbox (Multiple)">
        <PListbox v-model="state.listboxMultiple" :items="items" multiple class="w-full" />
      </PFormField>

      <PFormField name="file" label="FileUpload">
        <PFileUpload
          v-model="state.file"
          label="Drop your image here"
          description="PNG (max. 1MB)"
          class="w-full"
        />
      </PFormField>

      <PFormField name="checkbox" label="Checkbox">
        <PCheckbox v-model="state.checkbox" label="Check me" />
      </PFormField>

      <PFormField name="switch" label="Switch">
        <PSwitch v-model="state.switch" label="Switch me" />
      </PFormField>

      <PFormField name="slider" label="Slider">
        <PSlider v-model="state.slider" class="mt-2.5" />
      </PFormField>

      <PFormField name="rating" label="InputRating">
        <PInputRating v-model="state.rating" />
      </PFormField>

      <PFormField name="checkboxGroup">
        <PCheckboxGroup v-model="state.checkboxGroup" legend="CheckboxGroup" :items="items" />
      </PFormField>

      <PFormField name="radioGroup">
        <PRadioGroup v-model="state.radioGroup" legend="RadioGroup" :items="items" />
      </PFormField>
    </div>

    <div class="flex gap-2 mt-8">
      <PButton type="submit">
        Submit
      </PButton>

      <PButton variant="outline" @click="form?.clear()">
        Clear
      </PButton>
    </div>
  </PForm>
</template>
