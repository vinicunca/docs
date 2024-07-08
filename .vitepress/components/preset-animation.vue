<script lang="ts" setup>
import { NButton, NCheckbox, NConfigProvider, NDivider, NForm, NFormItem, NInputNumber, NSelect, darkTheme } from 'naive-ui';
import { codeToHtml } from 'shiki';
import { useData } from 'vitepress';
import { computed, nextTick, onMounted, ref, watch } from 'vue';

import { animationNames } from '../unocss-preset/animate';

const { isDark } = useData();

const timeUnitOptions = [
  { label: 'Second', value: 's' },
  { label: 'Millisecond', value: 'ms' },
];

const animationName = ref('');
const isAnimating = ref(false);
const repeat = ref(1);
const repeatInfinite = ref(false);
const duration = ref(1);
const durationUnit = ref(timeUnitOptions[0].value);

async function setAnimated(value: string = animationName.value) {
  if (isAnimating.value) {
    animationName.value = '';
    isAnimating.value = false;

    await nextTick();
  }

  animationName.value = value;
  isAnimating.value = true;
}

function setAnimatedStop() {
  isAnimating.value = false;
}

const headerClasses = 'px-3 h-8 flex items-center border-b border-$vp-c-border';

watch(
  [repeat, repeatInfinite, duration, durationUnit],
  () => {
    setAnimated();
  },
);

const codeStr = computed(() => {
  let animateRepeat = '';

  if (repeatInfinite.value) {
    animateRepeat = 'animate-count-infinite';
  } else if (repeat.value && repeat.value !== 1) {
    animateRepeat = `animated-count-${repeat.value}`;
  }

  let animateDuration = '';

  if (duration.value && duration.value !== 0 && duration.value !== 1) {
    animateDuration = `animate-duration-${duration.value}${durationUnit.value}`;
  }

  const classStr = `${animationName.value} ${animateRepeat} ${animateDuration}`.trim();

  return `<div class="${classStr}" />`;
});

onMounted(() => {
  setAnimated(animationNames[0]);
});

watch(
  codeStr,
  () => {
    renderCodeStr();
  },
);

const renderedCode = ref('');

async function renderCodeStr() {
  const html = await codeToHtml(codeStr.value, {
    lang: 'html',
    theme: 'one-dark-pro',
  });

  renderedCode.value = html;
}

const styleAnimation = computed(() => {
  if (isAnimating.value) {
    return {
      animationDuration: `${duration.value}${durationUnit.value}`,
      animationIterationCount: repeatInfinite.value ? 'infinite' : repeat.value,
    };
  }

  return {};
});
</script>

<template>
  <NConfigProvider
    :theme="isDark ? darkTheme : undefined"
  >
    <div class="animate-container grid grid-cols-2 border border-$vp-c-border rounded">
      <div class="col-span-2 md:col-span-1 flex flex-col">
        <div
          :class="headerClasses"
          class="justify-between"
        >
          <NButton
            size="tiny"
            color="#44bd87"
            @click="isAnimating ? setAnimatedStop() : setAnimated()"
          >
            <i
              v-if="isAnimating"
              class="i-material-symbols:stop"
            />
            <i
              v-else
              class="i-material-symbols:play-arrow"
            />
          </NButton>
        </div>

        <div class="flex-1 py-8 md:py-36 flex items-center justify-center">
          <div
            class="flex items-center size-100px bg-#FC2983 justify-center rounded-2 animated-box"
            :class="{
              [animationName]: isAnimating,
            }"
            :style="styleAnimation"
            @animationend="setAnimatedStop"
          >
            <i class="i-ion:rocket color-white" />
          </div>
        </div>

        <!-- <div
          class="border-t border-$vp-c-border px-6 py-3"
          v-html="renderedCode"
        /> -->

        <div class="language-html m-0!">
          <!-- <button
            title="Copy"
            class="copy"
          /> -->
          <div v-html="renderedCode" />
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 border-t border-$vp-c-border grid grid-cols-2">
        <div class="flex flex-col md:border-l border-$vp-c-border">
          <div
            :class="headerClasses"
            class="justify-center font-bold"
          >
            Animation
          </div>

          <div class="relative flex-1">
            <div class="absolute inset-0 overflow-auto">
              <NButton
                v-for="animName in animationNames"
                :key="animName"
                v-bind="animName === animationName ? { type: 'primary', secondary: true } : { quaternary: true }"
                block
                class="text-13px color-$vp-c-text-1"
                @click="setAnimated(animName)"
              >
                {{ animName.replace('animate-', '') }}
              </NButton>
            </div>
          </div>
        </div>

        <div class="border-l border-$vp-c-border flex flex-col">
          <div
            :class="headerClasses"
            class="justify-center font-bold"
          >
            Options
          </div>

          <NForm
            label-placement="top"
            label-width="5.5em"
            :show-feedback="false"
            class="color-$vp-c-text-1 p-2"
            style="--n-label-text-color: var(--vp-c-text-1);"
          >
            <NFormItem label="Iteration count">
              <div class="flex flex-col gap-2">
                <NInputNumber
                  v-if="!repeatInfinite"
                  v-model:value="repeat"
                  :min="1"
                />

                <NCheckbox v-model:checked="repeatInfinite">
                  Infinite
                </NCheckbox>
              </div>
            </NFormItem>

            <NDivider class="my-3!" />

            <NDivider class="my-3!" />

            <NFormItem label="Speed">
              <div class="flex flex-col gap-2">
                <NInputNumber
                  v-model:value="duration"
                  :min="0"
                />

                <NSelect
                  v-model:value="durationUnit"
                  :options="timeUnitOptions"
                />
              </div>
            </NFormItem>
          </NForm>
        </div>
      </div>
    </div>
  </NConfigProvider>
</template>

<style lang="postcss" scoped>
.animate-container {}

.animated-box {
  box-shadow: 0 0 20px -6px #fc297f;
}
</style>
