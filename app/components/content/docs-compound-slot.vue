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
    // if you don't specify any variant, it will always be applied
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
      ], // --> these classes will be applied to all slots
    },
    // if you specify a variant, it will only be applied if the variant is active
    {
      slots: ['item', 'prev', 'next'],
      size: 'xs',
      class: 'h-7 w-7 text-xs', // --> these classes will be applied to all slots if size is xs
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'sm',
      class: 'h-8 w-8 text-sm', // --> these classes will be applied to all slots if size is sm
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'md',
      class: 'h-9 w-9 text-base', // --> these classes will be applied to all slots if size is md
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="24"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
    </li>
    <li>
      <button
        aria-label="page 1"
        :class="item()"
      >
        1
      </button>
    </li>
    <li>
      <button
        aria-label="page 2"
        :class="item()"
      >
        2
      </button>
    </li>
    <li>
      <button
        aria-label="page 3"
        :class="item()"
        data-active="true"
      >
        3
      </button>
    </li>
    <li>
      <button
        aria-label="page 4"
        :class="item()"
      >
        4
      </button>
    </li>
    <li>
      <button
        aria-label="page 5"
        :class="item()"
      >
        5
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </li>
  </ul>
</template>
