<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  headline?: string
  framework?: string
}>(), {
  framework: 'nuxt'
})
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
    <div class="mx-20 mt-[176px] h-[300px] flex flex-col justify-center">
      <!-- the hero's pill, with the framework's mark in front of the section -->
      <div v-if="headline" class="self-start flex flex-row items-center h-[38px] px-4 rounded-full bg-green-50 text-green-500 text-[20px] font-medium">
        <svg
          v-if="framework === 'nuxt'"
          class="w-[24px] h-[24px] mr-2"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z" fill="#00DC82" />
        </svg>
        <svg
          v-else
          class="w-[22px] h-[20px] mr-2"
          viewBox="0 0 261.76 226.69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883" /></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e" /></g></g>
        </svg>
        {{ headline }}
      </div>
      <h1 v-if="title" class="text-[56px] font-medium text-slate-900 mt-6 mb-0">
        {{ title }}
      </h1>
      <p v-if="description" class="text-[28px] leading-[40px] text-slate-500 mt-4 mb-0" :style="{ lineClamp: 3, textOverflow: 'ellipsis' }">
        {{ description }}
      </p>
    </div>
  </div>
</template>
