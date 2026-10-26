<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'akar';
import { ref } from 'vue';
import './styles.css';

const switchState = ref(false);
</script>

<template>
  <div class="akar-demo akar-demo-Switch">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <label
        class="Label"
        for="airplane-mode"
      >
        Airplane mode
      </label>
      <SwitchRoot
        id="airplane-mode"
        v-model="switchState"
        class="SwitchRoot"
      >
        <SwitchThumb
          class="SwitchThumb"
        />
      </SwitchRoot>
    </div>
  </div>
</template>
