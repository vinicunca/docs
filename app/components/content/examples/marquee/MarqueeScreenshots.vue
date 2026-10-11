<template>
  <div class="bg-background-muted h-[400px] w-full relative overflow-hidden">
    <PMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{ root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }"
    >
      <img
        v-for="i in 4"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="border border-border rounded-lg bg-white aspect-video"
      >
    </PMarquee>
    <PMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{ root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }"
    >
      <img
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="border border-border rounded-lg bg-white aspect-video"
      >
    </PMarquee>
    <PMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{ root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }"
    >
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="border border-border rounded-lg bg-white aspect-video"
      >
    </PMarquee>
  </div>
</template>
