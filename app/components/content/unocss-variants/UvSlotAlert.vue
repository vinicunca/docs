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
        title: 'color-red-700 dark:color-red-500',
        message: 'color-red-600 dark:color-red-500',
      },
    },
    {
      variant: 'outlined',
      severity: 'success',
      class: {
        root: 'border-green-700 dark:border-green-500',
        title: 'color-green-700 dark:color-green-500',
        message: 'color-green-600 dark:color-green-500',
      },
    },
    {
      variant: 'filled',
      severity: 'error',
      class: {
        root: 'bg-red-100 dark:bg-red-800',
        title: 'color-red-900 dark:color-red-50',
        message: 'color-red-700 dark:color-red-200',
      },
    },
    {
      variant: 'filled',
      severity: 'success',
      class: {
        root: 'bg-green-100 dark:bg-green-800',
        title: 'color-green-900 dark:color-green-50',
        message: 'color-green-700 dark:color-green-200',
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
      <span class="color-slate-800 font-semibold dark:color-slate-200">
        Select severity:
      </span>
      <PRadioGroup
        v-model="severity"
        :items="['success', 'error']"
        :ui="{ label: 'capitalize' }"
      />
      <span class="color-slate-800 font-semibold dark:color-slate-200">
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
