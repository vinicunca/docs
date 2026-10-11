<script setup lang="ts">
import { groupPerkakasFunctions, matchesPerkakasQuery, perkakasCategories, perkakasFunctions, perkakasVersion } from './catalog';

const query = ref('');
const category = ref<string | 'all'>('all');

const cleaned = computed(() => query.value.trim().toLowerCase());

const visible = computed(() => {
  const filtered = perkakasFunctions.filter((fn) => {
    if (category.value !== 'all' && fn.category !== category.value) {
      return false;
    }
    return matchesPerkakasQuery(fn, cleaned.value);
  });
  return groupPerkakasFunctions(filtered);
});

const total = computed(() => visible.value.reduce((sum, group) => sum + group.functions.length, 0));
</script>

<template>
  <div class="perkakas-functions">
    <div class="not-prose mb-6 px-1 py-3 bg-background/90 top-0 sticky z-10 backdrop-blur-sm space-y-3 -mx-1">
      <PInput
        v-model="query"
        icon="i-lucide-search"
        variant="soft"
        placeholder="Search functions…"
      >
        <template
          v-if="query"
          #trailing
        >
          <PButton
            color="neutral"
            variant="link"
            size="xs"
            icon="i-lucide-x"
            aria-label="Clear search"
            @click="query = ''"
          />
        </template>
      </PInput>
      <div class="flex flex-wrap gap-1.5">
        <PButton
          size="xs"
          :color="category === 'all' ? 'primary' : 'neutral'"
          :variant="category === 'all' ? 'subtle' : 'ghost'"
          @click="category = 'all'"
        >
          All
        </PButton>
        <PButton
          v-for="name in perkakasCategories"
          :key="name"
          size="xs"
          :color="category === name ? 'primary' : 'neutral'"
          :variant="category === name ? 'subtle' : 'ghost'"
          :to="`#${name}`"
          @click="category = name"
        >
          {{ name }}
        </PButton>
      </div>
      <p class="text-sm color-text-muted m-0">
        {{ total }} of {{ perkakasFunctions.length }} exports in @vinicunca/perkakas {{ perkakasVersion }}
      </p>
    </div>

    <p
      v-if="!visible.length"
      class="color-text-muted"
    >
      No functions match that search.
    </p>

    <section
      v-for="group in visible"
      :key="group.category"
      class="mb-10"
    >
      <ProseH2
        :id="group.category"
        :anchor="true"
        class="scroll-mt-36"
      >
        {{ group.category }}
      </ProseH2>
      <PerkakasFunctionCard
        v-for="fn in group.functions"
        :key="fn.name"
        :fn="fn"
      />
    </section>
  </div>
</template>
