<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'akar'
import { ref } from 'vue'
import './styles.css'

const sliderValue = ref([50])
</script>

<template>
  <div class="akar-demo akar-demo-Slider">
    <SliderRoot
        v-model="sliderValue"
        class="SliderRoot"
        :max="100"
        :step="1"
      >
        <SliderTrack class="SliderTrack">
          <SliderRange class="SliderRange" />
        </SliderTrack>
        <SliderThumb
          class="SliderThumb"
          aria-label="Volume"
        />
      </SliderRoot>
  </div>
</template>
