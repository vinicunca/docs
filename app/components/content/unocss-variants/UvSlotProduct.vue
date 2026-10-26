<script lang="ts" setup>
import { uv } from 'unocss-variants';
import { computed, ref } from 'vue';

const color = ref<'primary' | 'secondary' | 'success'>('primary');
const size = ref('xs');

const item = uv({
  slots: {
    base: 'flex flex-col mb-4 sm:flex-row p-6 bg-white dark:bg-stone-900 drop-shadow-xl rounded-xl',
    imageWrapper: 'mb-6 flex-none h-48 w-full relative z-10 sm:(mb-0 h-auto w-48) before:(rounded-xl bg-[#18000E] h-full w-full content-empty left-0 top-0 absolute from-[#010187] bg-gradient-to-r)',
    img: 'sm:scale-125 absolute z-10 top-2 sm:left-2 inset-0 w-full h-full object-cover rounded-lg',
    title: 'relative w-full flex-none mb-2 text-2xl font-semibold color-stone-900 dark:color-white',
    price: 'relative font-semibold text-xl dark:color-white',
    previousPrice: 'relative line-through font-bold color-neutral-500 ml-3',
    percentOff: 'relative font-bold color-green-500 ml-3',
    sizeButton: 'cursor-pointer select-none relative font-semibold rounded-full w-10 h-10 flex items-center justify-center active:opacity-80 dark:color-white peer-checked:color-white',
    buyButton: 'text-xs sm:text-sm px-4 h-10 rounded-lg shadow-lg uppercase font-semibold tracking-wider color-white active:opacity-80',
    addToBagButton: 'text-xs sm:text-sm px-4 h-10 rounded-lg uppercase font-semibold tracking-wider border-2 active:opacity-80',
  },
  variants: {
    color: {
      primary: {
        buyButton: 'bg-blue-500 shadow-blue-500/50',
        sizeButton: 'peer-checked:bg-blue',
        addToBagButton: 'color-blue-500 border-blue-500',
      },
      secondary: {
        buyButton: 'bg-purple-500 shadow-purple-500/50',
        sizeButton: 'peer-checked:bg-purple',
        addToBagButton: 'color-purple-500 border-purple-500',
      },
      success: {
        buyButton: 'bg-green-500 shadow-green-500/50',
        sizeButton: 'peer-checked:bg-green',
        addToBagButton: 'color-green-500 border-green-500',
      },
    },
  },
});

const classes = computed(() => item({ color: color.value }));
</script>

<template>
  <div>
    <div :class="classes.base()">
      <div :class="classes.imageWrapper()">
        <img
          alt="Shoes"
          :class="classes.img()"
          loading="lazy"
          src="/images/shoes-1.png"
        >
      </div>
      <div class="pl-4 flex-auto sm:pl-8">
        <div class="flex flex-wrap items-baseline relative">
          <h1 :class="classes.title()">
            Nike Adapt BB 2.0
          </h1>
          <div :class="classes.price()">
            $279.97
          </div>
          <div :class="classes.previousPrice()">
            $350
          </div>
          <div :class="classes.percentOff()">
            20% off
          </div>
        </div>
        <div class="my-4 flex items-baseline">
          <div class="text-sm font-medium flex space-x-3">
            <label
              v-for="itemSize in ['xs', 's', 'm', 'l', 'xl']"
              :key="itemSize"
            >
              <input
                v-model="size"
                class="peer sr-only"
                name="uv-product-size"
                :value="itemSize"
                type="radio"
              >
              <div :class="classes.sizeButton()">
                {{ itemSize.toUpperCase() }}
              </div>
            </label>
          </div>
        </div>
        <div class="flex space-x-4">
          <button :class="classes.buyButton()">
            Buy now
          </button>
          <button :class="classes.addToBagButton()">
            Add to bag
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="color-slate-800 font-semibold dark:color-slate-200">
        Select color:
      </span>
      <PRadioGroup
        v-model="color"
        :items="['primary', 'secondary', 'success']"
        :ui="{ label: 'capitalize' }"
      />
    </div>
  </div>
</template>
