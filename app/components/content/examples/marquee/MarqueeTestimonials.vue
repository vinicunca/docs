<script setup lang="ts">
import type { UserProps } from 'pohon-ui'

// Illustrative content for the marquee example, not customer endorsements.
const testimonials: { user: UserProps, quote: string }[] = [
  { user: { name: 'Alex', description: 'Example user' }, quote: 'Add a short quote from a real customer here.' },
  { user: { name: 'Sam', description: 'Example user' }, quote: 'Use this card to highlight feedback about your product.' },
  { user: { name: 'Taylor', description: 'Example user' }, quote: 'Replace the sample copy with a verified testimonial.' }
]
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <PMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:1rem]', content: 'w-auto py-1' }">
      <PPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <PUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </PPageCard>
    </PMarquee>
    <PMarquee pause-on-hover reverse :overlay="false" :ui="{ root: '[--gap:1rem]', content: 'w-auto py-1' }">
      <PPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <PUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </PPageCard>
    </PMarquee>
  </div>
</template>
