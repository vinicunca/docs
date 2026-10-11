<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'akar';
import { ref } from 'vue';
import './styles.css';

const checkboxOne = ref(true);
</script>

<template>
  <div class="akar-demo akar-demo-Checkbox">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <label>
        <CheckboxRoot
          v-model="checkboxOne"
          class="CheckboxRoot"
        >
          <CheckboxIndicator class="CheckboxIndicator">
            <PIcon name="i-lucide-check" />
          </CheckboxIndicator>
        </CheckboxRoot>
        <span class="Label">Accept terms and conditions.</span>
      </label>
    </div>
  </div>
</template>
