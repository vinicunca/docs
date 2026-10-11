<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'akar';
import { ref } from 'vue';
import './styles.css';

const open = ref(false);
</script>

<template>
  <div class="akar-demo akar-demo-Collapsible">
    <CollapsibleRoot
      v-model:open="open"
      class="CollapsibleRoot"
    >
      <div style="display: flex; align-items: center; justify-content: space-between">
        <span class="Text"> @peduarte starred 3 repos </span>
        <CollapsibleTrigger
          class="IconButton"
        >
          <PIcon
            v-if="open"
            name="i-lucide-x"
          />
          <PIcon
            v-else
            name="i-lucide-unfold-vertical"
          />
        </CollapsibleTrigger>
      </div>

      <div class="Repository">
        <span class="Text">@unovue/reka-ui</span>
      </div>

      <CollapsibleContent>
        <div class="Repository">
          <span class="Text">@vuejs/core</span>
        </div>
        <div class="Repository">
          <span class="Text">@radix-ui/primitives</span>
        </div>
      </CollapsibleContent>
    </CollapsibleRoot>
  </div>
</template>
