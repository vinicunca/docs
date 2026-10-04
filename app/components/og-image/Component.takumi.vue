<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  slug?: string
}>()
</script>

<template>
  <div class="bg-white size-full flex flex-col">
    <!-- The landing hero's texture, drawn once as an SVG since takumi has no
         background-image, mask or oklch: a dot grid fading in and out
         vertically, a few of its dots lit in primary, and the horizon, a
         glow rising from the bottom edge under a hairline that fades out at
         both ends. -->
    <svg class="absolute inset-0" width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="1" fill="#cad5e2" />
        </pattern>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset="0.3" stop-color="#fff" />
          <stop offset="0.7" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <mask id="fade-mask">
          <rect width="1200" height="630" fill="url(#fade)" />
        </mask>
        <linearGradient id="glow" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#00C16A" stop-opacity="0.15" />
          <stop offset="1" stop-color="#00C16A" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#00C16A" stop-opacity="0" />
          <stop offset="0.3" stop-color="#00C16A" />
          <stop offset="0.7" stop-color="#00C16A" />
          <stop offset="1" stop-color="#00C16A" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#dots)" opacity="0.5" mask="url(#fade-mask)" />
      <g fill="#00C16A" mask="url(#fade-mask)">
        <circle cx="70" cy="126" r="1.5" /><circle cx="266" cy="70" r="1.5" /><circle cx="434" cy="238" r="1.5" /><circle cx="602" cy="98" r="1.5" /><circle cx="770" cy="322" r="1.5" /><circle cx="910" cy="182" r="1.5" /><circle cx="1050" cy="406" r="1.5" /><circle cx="1134" cy="70" r="1.5" /><circle cx="1162" cy="266" r="1.5" /><circle cx="322" cy="434" r="1.5" /><circle cx="686" cy="462" r="1.5" /><circle cx="994" cy="518" r="1.5" />
      </g>
      <rect y="450" width="1200" height="180" fill="url(#glow)" />
      <rect y="628" width="1200" height="2" fill="url(#line)" />
    </svg>
    <div class="absolute top-16 left-20 w-[133px] h-[26px] flex items-center font-bold text-[30px] tracking-tight">Pohon UI</div>
    <div class="mx-20 mt-[120px] flex flex-col">
      <h1 v-if="title" class="text-[44px] font-medium text-slate-900 mb-0">
        {{ title }}
      </h1>
      <p v-if="description" class="text-[24px] leading-[34px] text-slate-500 mt-2 mb-0" :style="{ lineClamp: 1, textOverflow: 'ellipsis' }">
        {{ description }}
      </p>
    </div>
    <!-- the landing's framed window, running off the bottom edge. The shot is
         768x432 with the component in its middle, so it rides up to sit in
         the middle of the window's visible part. -->
    <div v-if="slug" class="mx-20 mt-8 h-[400px] overflow-hidden flex flex-col items-center rounded-t-2xl border-t-2 border-x-2 border-b-0 border-solid border-slate-200 bg-slate-50">
      <img
        :src="`/components/light/${slug}.png`"
        class="h-[432px] w-[768px] mt-[-40px]"
      >
    </div>
  </div>
</template>
