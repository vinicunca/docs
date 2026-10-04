<script lang="ts" setup>
import { uv } from 'unocss-variants';

const pagination = uv({
  slots: {
    base: 'relative flex max-w-fit flex-wrap gap-1',
    item: 'data-[active="true"]:bg-blue-500 data-[active="true"]:text-white',
    prev: '',
    next: '',
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundSlots: [
    {
      slots: ['item', 'prev', 'next'],
      class: [
        'flex',
        'flex-wrap',
        'truncate',
        'box-border',
        'outline-none',
        'items-center',
        'justify-center',
        'bg-neutral-200',
        'rounded-lg',
        'hover:bg-neutral-300',
        'active:bg-neutral-400',
        'text-neutral-800',
      ],
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'xs',
      class: 'h-7 w-7 text-xs',
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'sm',
      class: 'h-8 w-8 text-sm',
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'md',
      class: 'h-9 w-9 text-base',
    },
  ],
});

const { base, item, prev, next } = pagination();
</script>

<template>
  <ul
    aria-label="pagination navigation"
    :class="base()"
  >
    <li>
      <button
        aria-label="Go to previous page"
        :class="prev()"
        data-disabled="true"
      >
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          viewBox="0 0 24 24"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
    </li>
    <li
      v-for="page in [1, 2, 3, 4, 5]"
      :key="page"
    >
      <button
        :aria-label="`page ${page}`"
        :class="item()"
        :data-active="page === 3"
      >
        {{ page }}
      </button>
    </li>
    <li
      aria-hidden="true"
      :class="item()"
    >
      ...
    </li>
    <li>
      <button
        aria-label="page 10"
        :class="item()"
      >
        10
      </button>
    </li>
    <li>
      <button
        aria-label="Go to next page"
        :class="next()"
      >
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </li>
  </ul>
</template>
