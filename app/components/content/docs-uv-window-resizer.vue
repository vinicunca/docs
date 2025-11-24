<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';
import { motion, useDomRef, useMotionValue, useTransform } from 'motion-v';
import { uv } from 'unocss-variants';
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  height?: string | number;
  minWidth?: number;
  iframeZoom?: number;
  iframeSrc?: string;
  iframeInitialWidth?: number;
  iframeTitle?: string;
}>(), {
  height: '420px',
  minWidth: 200,
  iframeZoom: 1,
});

const constraintsResizerRef = useDomRef();
const resizerRef = ref<HTMLElement | null>(null);
const iframeRef = ref<HTMLIFrameElement | null>(null);
const enablePointerEvents = ref(true);

const { width: windowWidth } = useWindowSize();
const isMobile = computed(() => windowWidth.value < 640);

const hasInitialWidth = computed(() => props.iframeInitialWidth !== undefined);

const resizerX = useMotionValue(0);
const browserWidth = useTransform(
  resizerX,
  (x) => {
    return hasInitialWidth.value ? props.iframeInitialWidth! + x + 14 : `calc(100% + ${x}px - 14px)`;
  },
);

const computedHeight = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`;
  }
  return props.height;
});

const resizer = uv({
  base: 'sm:flex items-center justify-end absolute right-[5px] z-10 w-auto hidden',
  slots: {
    main: 'relative w-full',
    barWrapper:
      'cursor-ew-resize select-none absolute justify-center flex items-center w-[10px] h-auto active:opacity-80',
    barInner: 'relative z-10',
    bar: 'w-[6px] h-[40px] rounded-full bg-background-accented',
    iframeWrapper: 'border border-border-muted p-6 rounded-lg overflow-hidden',
    iframe:
      'w-full h-full border-none overflow-x-visible overflow-y-scroll z-10',
  },
  variants: {
    hasInitialWidth: {
      true: {
        base: 'akar:justify-start',
      },
    },
    isMobile: {
      true: {
        barInner: 'hidden',
      },
    },
    enablePointerEvents: {
      true: {
        iframe: 'pointer-events-auto',
      },
      false: {
        iframe: 'pointer-events-none select-none',
      },
    },
  },
});

const classes = computed(() => resizer({
  hasInitialWidth: hasInitialWidth.value,
  isMobile: isMobile.value,
  enablePointerEvents: enablePointerEvents.value,
}));

// Iframe Injection
function injectIframeStyles() {
  const iframe = iframeRef.value;
  if (!iframe) {
    return;
  }

  try {
    const doc = iframe.contentDocument;
    if (!doc) {
      return;
    }

    doc.documentElement.classList.add('overflow-hidden');

    const style = doc.createElement('style');
    style.innerHTML = `body { zoom: ${props.iframeZoom}; }`;
    doc.head.appendChild(style);

    const aside = doc.querySelector('aside');
    if (aside) {
      aside.style.display = 'none';
    }
  } catch {
    // Cross-origin issues might prevent this
  }
}

onMounted(() => {
  const iframe = iframeRef.value;
  if (iframe) {
    iframe.onload = () => {
      injectIframeStyles();
    };
    injectIframeStyles();
  }

  // Trigger reactivity for browserWidth
  const current = resizerX.get();
  resizerX.set(current + 0.01);
  requestAnimationFrame(() => {
    resizerX.set(current);
  });
});

function handleDragStart() {
  document.documentElement.classList.add('dragging-ew');
  iframeRef.value?.classList?.add('dragging-ew');
  enablePointerEvents.value = false;
}

function handleDragEnd() {
  document.documentElement.classList.remove('dragging-ew');
  iframeRef.value?.classList?.remove('dragging-ew');
  enablePointerEvents.value = true;
}
</script>

<template>
  <div
    :class="classes.main({ class: 'xs:w-mw-xs' })"
    :style="{ height: computedHeight }"
  >
    <motion.div
      :class="classes.iframeWrapper({ class: 'xs:w-mw-xs xs:!w-full' })"
      :style="{
        width: isMobile ? '100%' : browserWidth,
        height: computedHeight,
      }"
    >
      <motion.iframe
        ref="iframeRef"
        :class="classes.iframe()"
        :src="iframeSrc"
        :title="iframeTitle"
      />
    </motion.div>

    <div
      ref="constraintsResizerRef"
      :class="classes.base({ class: 'xs:w-mw-xs bottom-0 right-0 top-0' })"
      :style="{
        width: `calc(100% - ${hasInitialWidth ? iframeInitialWidth : minWidth}px - 20px)`,
      }"
    >
      <motion.div
        ref="resizerRef"
        :_drag-x="resizerX"
        drag="x"
        :drag-constraints="constraintsResizerRef"
        :drag-elastic="0"
        :drag-momentum="false"
        :class="classes.barWrapper()"
        :style="{ x: resizerX }"
        @drag-end="handleDragEnd"
        @drag-start="handleDragStart"
      >
        <div :class="classes.barInner()">
          <div :class="classes.bar()" />
        </div>
      </motion.div>
    </div>
  </div>
</template>
