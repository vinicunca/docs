<script setup lang="ts">
import { green } from '@radix-ui/colors';
import { ColorSwatch } from 'akar';
import './styles.css';
</script>

<template>
  <div class="akar-demo akar-demo-ColorSwatch">
    <ColorSwatch
      :color="green.green9"
      class="swatch"
    />
  </div>
</template>
