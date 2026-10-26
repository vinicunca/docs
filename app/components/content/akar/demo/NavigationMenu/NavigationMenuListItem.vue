<script setup lang="ts">
import { NavigationMenuLink } from 'akar';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        v-bind="$attrs"
        class="ListItemLink"
      >
        <div class="ListItemHeading">
          {{ props.title }}
        </div>
        <p class="ListItemText">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
