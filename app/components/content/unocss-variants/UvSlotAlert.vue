<script lang="ts" setup>
import { uv } from 'unocss-variants';
import { computed, ref } from 'vue';

const severity = ref<'success' | 'error'>('success');
const variant = ref<'filled' | 'outlined'>('filled');

const alert = uv({
  slots: {
    root: 'rounded py-3 px-5 mb-4',
    title: 'font-bold mb-1',
    message: '',
  },
  variants: {
    variant: {
      outlined: {
        root: 'border',
      },
      filled: {
        root: '',
      },
    },
    severity: {
      error: '',
      success: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      severity: 'error',
      class: {
        root: 'border-red-700 dark:border-red-500',
        title: 'text-red-700 dark:text-red-500',
        message: 'text-red-600 dark:text-red-500',
      },
    },
    {
      variant: 'outlined',
      severity: 'success',
      class: {
        root: 'border-green-700 dark:border-green-500',
        title: 'text-green-700 dark:text-green-500',
        message: 'text-green-600 dark:text-green-500',
      },
    },
    {
      variant: 'filled',
      severity: 'error',
      class: {
        root: 'bg-red-100 dark:bg-red-800',
        title: 'text-red-900 dark:text-red-50',
        message: 'text-red-700 dark:text-red-200',
      },
    },
    {
      variant: 'filled',
      severity: 'success',
      class: {
        root: 'bg-green-100 dark:bg-green-800',
        title: 'text-green-900 dark:text-green-50',
        message: 'text-green-700 dark:text-green-200',
      },
    },
  ],
  defaultVariants: {
    variant: 'filled',
    severity: 'success',
  },
});

const classes = computed(() => alert({
  severity: severity.value,
  variant: variant.value,
}));
</script>

<template>
  <div>
    <div :class="classes.root()">
      <div :class="classes.title()">
        Oops, something went wrong
      </div>
      <div :class="classes.message()">
        Something went wrong saving your changes. Try again later.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="font-semibold text-slate-800 dark:text-slate-200">
        Select severity:
      </span>
      <PRadioGroup
        v-model="severity"
        :items="['success', 'error']"
        :ui="{ label: 'capitalize' }"
      />
      <span class="font-semibold text-slate-800 dark:text-slate-200">
        Select variant:
      </span>
      <PRadioGroup
        v-model="variant"
        :items="['filled', 'outlined']"
        :ui="{ label: 'capitalize' }"
      />
    </div>
  </div>
</template>
