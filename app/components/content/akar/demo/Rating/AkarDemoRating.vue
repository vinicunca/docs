<script setup lang="ts">
import { RatingItem, RatingItemIndicator, RatingRoot } from 'akar';
import { ref } from 'vue';
import './styles.css';

const rating = ref(3);
</script>

<template>
  <div class="akar-demo akar-demo-Rating">
    <RatingRoot
      v-slot="{ items }"
      v-model="rating"
      class="RatingRoot"
    >
      <RatingItem
        v-for="item in items"
        :key="item"
        v-slot="{ steps }"
        :item="item"
        class="RatingItem"
      >
        <RatingItemIndicator
          v-for="step in steps"
          :key="step"
          :step="step"
          :aria-label="`Rate ${step}`"
          class="RatingItemIndicator"
        >
          <PIcon
            name="i-lucide-star"
            class="RatingStar"
          />
        </RatingItemIndicator>
      </RatingItem>
    </RatingRoot>
  </div>
</template>
