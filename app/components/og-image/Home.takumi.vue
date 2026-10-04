<script setup lang="ts">
import { computed } from 'vue'

/**
 * The landing's hero as a card: the wordmark, the two-tone title and the
 * description on the left, the theme as the file you would ship on the
 * right with the preset pills under it, over the hero's texture. `dark`
 * swaps the palette: the README banner is rendered from this template too.
 */
const props = withDefaults(defineProps<{
  lead?: string
  accent?: string
  description?: string
  dark?: boolean
}>(), {
  dark: false
})

// the site's tokens, resolved to hex since takumi reads no CSS variables
const c = computed(() => props.dark
  ? { bg: '#0f172b', fg: '#ffffff', muted: '#90a1b9', dot: '#314158', primary: '#00DC82', card: '#1d293d', border: '#314158', tab: '#2c3a4f', code: '#0f172b', kw: '#89ddff', str: '#c3e88d', text: '#e2e8f0', val: '#f78c6c' }
  : { bg: '#ffffff', fg: '#0f172b', muted: '#62748e', dot: '#cad5e2', primary: '#00C16A', card: '#f8fafc', border: '#e2e8f0', tab: '#e6eaf0', code: '#ffffff', kw: '#39adb5', str: '#91b859', text: '#314158', val: '#f76d47' }
)

// each preset's primary as the theme menu chips show it, 500 in light, 400 in dark
const PRESETS = {
  light: { default: '#00C16A', mono: '#000000', cobalt: '#0d6efd', sky: '#00a6f4', mint: '#00bba7', iris: '#8e51ff', crimson: '#fb2c36', coral: '#ff2056', sunset: '#ff6900', carbon: '#fe9a00', bubblegum: '#f6339a', parchment: '#d97757' },
  dark: { default: '#00DC82', mono: '#ffffff', cobalt: '#3d8bfd', sky: '#00bcff', mint: '#00d5be', iris: '#a684ff', crimson: '#ff6467', coral: '#ff637e', sunset: '#ff8904', carbon: '#ffb900', bubblegum: '#fb64b6', parchment: '#dd9977' }
}
const preset = (id: keyof typeof PRESETS.light) => PRESETS[props.dark ? 'dark' : 'light'][id]
const pill = (id: keyof typeof PRESETS.light) => ({ backgroundColor: `${preset(id)}26`, borderColor: preset(id) })
</script>

<template>
  <!-- the families named here are what nuxt-og-image fetches for the render -->
  <div class="size-full flex flex-col" :style="{ backgroundColor: c.bg, color: c.fg, fontFamily: 'Public Sans' }">
    <!-- The landing hero's texture, drawn once as an SVG since takumi has no
         background-image, mask or oklch: a dot grid fading in and out
         vertically, a few of its dots lit in primary, and the horizon, a
         glow rising from the bottom edge under a hairline that fades out at
         both ends. -->
    <svg class="absolute inset-0" width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="1" :fill="c.dot" />
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
          <stop offset="0" :stop-color="c.primary" stop-opacity="0.15" />
          <stop offset="1" :stop-color="c.primary" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" :stop-color="c.primary" stop-opacity="0" />
          <stop offset="0.3" :stop-color="c.primary" />
          <stop offset="0.7" :stop-color="c.primary" />
          <stop offset="1" :stop-color="c.primary" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#dots)" opacity="0.5" mask="url(#fade-mask)" />
      <g :fill="c.primary" mask="url(#fade-mask)">
        <circle cx="70" cy="126" r="1.5" /><circle cx="266" cy="70" r="1.5" /><circle cx="434" cy="238" r="1.5" /><circle cx="602" cy="98" r="1.5" /><circle cx="770" cy="322" r="1.5" /><circle cx="910" cy="182" r="1.5" /><circle cx="1050" cy="406" r="1.5" /><circle cx="1134" cy="70" r="1.5" /><circle cx="1162" cy="266" r="1.5" /><circle cx="322" cy="434" r="1.5" /><circle cx="686" cy="462" r="1.5" /><circle cx="994" cy="518" r="1.5" />
      </g>
      <rect y="450" width="1200" height="180" fill="url(#glow)" />
      <rect y="628" width="1200" height="2" fill="url(#line)" />
    </svg>

    <div class="absolute left-[64px] top-[150px] w-[470px] flex flex-col">
      <div class="w-[189px] h-[37px] flex items-center font-bold text-[30px] tracking-tight">Pohon UI</div>
      <h1 class="flex flex-col text-[66px] leading-[70px] font-medium mt-11 mb-0">
        <span>{{ lead }}</span>
        <span class="font-semibold" :style="{ color: c.primary }">{{ accent }}</span>
      </h1>
      <p v-if="description" class="text-[23px] leading-[34px] mt-7 mb-0" :style="{ color: c.muted, lineClamp: 3, textOverflow: 'ellipsis' }">
        {{ description }}
      </p>
    </div>

    <!-- takumi has no preflight reset: every border side is set explicitly -->
    <div class="absolute left-[562px] top-[84px] w-[604px] h-[450px] flex flex-col rounded-2xl border-2 border-solid p-3" :style="{ backgroundColor: c.card, borderColor: c.border }">
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center h-[36px] px-3 rounded-lg text-[16px] font-medium" :style="{ backgroundColor: c.tab, color: c.text }">
          <div class="flex items-center justify-center w-[18px] h-[18px] rounded-[4px] mr-2 text-[8px] font-bold text-white bg-[#7c3aed]">
            css
          </div>
          main.css
        </div>
        <div class="flex flex-row items-center h-[36px] px-3 text-[16px] font-medium" :style="{ color: c.text }">
          <span class="mr-2 text-[13px] font-bold text-[#3178c6]">TS</span>
          app.config.ts
        </div>
      </div>
      <div class="flex flex-col flex-1 rounded-xl border-2 border-solid mt-3 px-5 py-4 text-[16px] leading-[27px]" :style="{ backgroundColor: c.code, borderColor: c.border, color: c.text, fontFamily: 'Geist Mono' }">
        <div class="flex flex-row h-[27px]">
          <span :style="{ color: c.kw }">@import "</span><span :style="{ color: c.str }">unocss</span><span :style="{ color: c.kw }">";</span>
        </div>
        <div class="flex flex-row h-[27px]">
          <span :style="{ color: c.kw }">/* Pohon UI theme */</span>
        </div>
        <div class="flex h-[27px]" />
        <div class="flex flex-row h-[27px]">
          <span :style="{ color: c.kw }">:root</span><span>&nbsp;{</span>
        </div>
        <div class="flex flex-row h-[27px]">
          <span>&nbsp;&nbsp;--font-sans:&nbsp;</span><span :style="{ color: c.str }">'Public Sans'</span><span>,&nbsp;</span><span :style="{ color: c.val }">sans-serif</span><span>;</span>
        </div>
        <div class="flex flex-row h-[27px]">
          <span>}</span>
        </div>
      </div>
      <div class="flex flex-row items-center mt-3 px-1" style="gap: 12px">
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': true }" :style="pill('default')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('default') }"><path fill="currentColor" d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.6 1.6 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.53 1.53 0 0 0-.217-.782L17.792 7.414a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.6 1.6 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.6 1.6 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.6 1.6 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632" /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('mono')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('mono') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12z" /></g></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('cobalt')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('cobalt') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6" /><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20" /></g></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('sky')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('sky') }"><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"
          /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('mint')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('mint') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 20a10 10 0 0 0 10-10a25.9 25.9 0 0 0-1.04-7.281a1 1 0 0 0-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0 0 11 20" /><path d="M2 21a5 5 0 0 1 2.911-4.544C7.613 15.212 8.351 15.24 11 13" /></g></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('iris')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('iris') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16" /></g></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('crimson')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('crimson') }"><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m12.296 3.464l3.02 3.956M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3zM3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.18-5.724l3.1 3.899"
          /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('coral')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('coral') }"><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 11a2 2 0 1 1-4 0a4 4 0 0 1 8 0a6 6 0 0 1-12 0a8 8 0 0 1 16 0a10 10 0 1 1-20 0a11.93 11.93 0 0 1 2.42-7.22a2 2 0 1 1 3.16 2.44"
          /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('sunset')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('sunset') }"><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10V2m-7.07 8.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M16 6l-4 4l-4-4m8 12a4 4 0 0 0-8 0"
          /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('carbon')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('carbon') }"><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"
          /></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('bubblegum')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('bubblegum') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 7v10.9m4-11.8V17m2-10V3a1 1 0 0 1 1.707-.707a2.5 2.5 0 0 0 2.152.717a1 1 0 0 1 1.131 1.131a2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" /><path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07a5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" /><path d="M8 17v4a1 1 0 0 1-1.707.707a2.5 2.5 0 0 0-2.152-.717a1 1 0 0 1-1.131-1.131a2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" /></g></svg>
        </div>
        <div class="flex items-center justify-center w-[36px] h-[36px] rounded-full" :class="{ 'border-2 border-solid': false }" :style="pill('parchment')">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :style="{ color: preset('parchment') }"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></g></svg>
        </div>
      </div>
    </div>
  </div>
</template>
