<script lang="ts" setup>
import { useResizeObserver, useWindowSize } from '@vueuse/core';
import { uv } from 'unocss-variants';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

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

const constraintsResizerRef = ref<HTMLElement | null>(null);
const resizerRef = ref<HTMLElement | null>(null);
const iframeRef = ref<HTMLIFrameElement | null>(null);
const enablePointerEvents = ref(true);
const resizerX = ref(0);

const { width: windowWidth } = useWindowSize();
const isMobile = computed(() => windowWidth.value < 640);

const hasInitialWidth = computed(() => props.iframeInitialWidth !== undefined);

const computedHeight = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`;
  }
  return props.height;
});

const resizer = uv({
  base: 'flex items-center justify-end absolute right-[5px] z-10 w-auto xs:hidden',
  slots: {
    main: 'relative w-full',
    barWrapper:
      'cursor-ew-resize select-none absolute d-flex justify-center flex items-center w-[10px] h-auto active:opacity-80',
    barInner: 'relative z-10',
    bar: 'w-[6px] h-[40px] rounded-full bg-neutral/60',
    iframeWrapper: 'border border-neutral/20 rounded-lg overflow-hidden',
    iframe:
      'w-full h-full border-none overflow-x-visible overflow-y-scroll z-10',
  },
  variants: {
    hasInitialWidth: {
      true: {
        base: 'justify-start',
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

const browserWidth = computed(() => {
  if (hasInitialWidth.value) {
    return `${(props.iframeInitialWidth || 0) + resizerX.value + 14}px`;
  }
  return `calc(100% + ${resizerX.value}px - 14px)`;
});

// Drag Logic
let startX = 0;
let startResizerX = 0;
const isDragging = ref(false);

function onDragStart(e: MouseEvent) {
  isDragging.value = true;
  enablePointerEvents.value = false;
  startX = e.clientX;
  startResizerX = resizerX.value;

  document.documentElement.classList.add('dragging-ew');
  if (iframeRef.value) {
    iframeRef.value.classList.add('dragging-ew');
  }

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
}

function onDragMove(e: MouseEvent) {
  if (!isDragging.value) {
    return;
  }
  const deltaX = e.clientX - startX;
  resizerX.value = startResizerX + deltaX;
}

function onDragEnd() {
  isDragging.value = false;
  enablePointerEvents.value = true;

  document.documentElement.classList.remove('dragging-ew');
  if (iframeRef.value) {
    iframeRef.value.classList.remove('dragging-ew');
  }

  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
}

// Resize Observer
useResizeObserver(constraintsResizerRef, (entries) => {
  const entry = entries[0];
  if (!entry || !resizerRef.value) {

  }
  // Logic from React component to constrain resizer
  // let width = constraintsResizerRef.current.offsetWidth - resizerRef.current.offsetWidth;
  // if (resizerX.get() > width) { resizerX.set(width); }

  // We can implement similar logic if needed, but for now we'll trust the drag logic
});

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
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onDragMove);
    window.removeEventListener('mouseup', onDragEnd);
  }
});

watch(() => props.iframeZoom, () => {
  injectIframeStyles();
});
</script>

<template>
  <div
    :class="classes.main({ class: 'xs:w-mw-xs' })"
    :style="{ height: computedHeight }"
  >
    <div
      :class="classes.iframeWrapper({ class: 'xs:w-mw-xs xs:!w-full' })"
      :style="{
        width: isMobile ? '100%' : browserWidth,
        height: computedHeight,
      }"
    >
      <iframe
        ref="iframeRef"
        :class="classes.iframe()"
        :src="iframeSrc"
        :title="iframeTitle"
      />
    </div>

    <div
      ref="constraintsResizerRef"
      :class="classes.base({ class: 'xs:w-mw-xs bottom-0 right-0 top-0' })"
      :style="{
        width: `calc(100% - ${hasInitialWidth ? iframeInitialWidth : minWidth}px - 20px)`,
      }"
    >
      <div
        ref="resizerRef"
        :class="classes.barWrapper()"
        :style="{ transform: `translateX(${resizerX}px)` }"
        @mousedown="onDragStart"
      >
        <div :class="classes.barInner()">
          <div :class="classes.bar()" />
        </div>
      </div>
    </div>
  </div>
</template>
