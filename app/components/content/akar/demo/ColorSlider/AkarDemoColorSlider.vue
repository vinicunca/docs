<script setup lang="ts">
import {
  ColorSliderRoot,
  ColorSliderThumb,
  ColorSliderTrack,
} from 'akar';
import { ref } from 'vue';
import './styles.css';

const color = ref('#56d799');
</script>

<template>
  <div class="akar-demo akar-demo-ColorSlider">
    <div class="ColorSliderDemo">
      <ColorSliderRoot
        v-model="color"
        channel="hue"
        class="ColorSliderRoot"
      >
        <ColorSliderTrack class="ColorSliderTrack">
          <div class="ColorSliderTrackFill" />
        </ColorSliderTrack>
        <ColorSliderThumb class="ColorSliderThumb" />
      </ColorSliderRoot>

      <div class="ColorSliderValue">
        <div
          class="ColorSliderSwatch"
          :style="{ background: color }"
        />
        <span class="ColorSliderCode">{{ color }}</span>
      </div>
    </div>
  </div>
</template>
