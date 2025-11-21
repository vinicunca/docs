<script lang="ts" setup>
import { useFetch } from '#app';

const { data } = await useFetch('/api/perkakas.json');
</script>

<template>
  <template
    v-for="fun in data"
    :key="fun.name"
  >
    <ProseH2
      :id="fun.name"
    >
      <ProseCode>{{ fun.name }}</ProseCode>
    </ProseH2>

    <div class="flex flex-col gap-y-1.5">
      <div class="inline-flex items-center gap-2 justify-between w-full">
        <div class="inline-flex gap-2 items-center">
          <ProseBadge>
            {{ fun.category }}
          </ProseBadge>

          <NuxtLink :href="fun.sourceUrl">
            <i class="i-simple-icons:github size-6" />
          </NuxtLink>
        </div>
      </div>

      <MDC
        v-if="fun.description"
        :value="fun.description"
      />

      <!-- Methods -->
      <div
        v-for="(method, idx) in fun.methods"
        :key="`method-${fun.name}-${idx}`"
        class="flex flex-col gap-2"
      >
        <p class="m-0! font-600">
          {{ method.tag }}
        </p>

        <MDC
          v-if="method.signature"
          class="mt-2"
          :value="`\`\`\`ts\n${method.signature}\n\`\`\``"
        />

        <MDC
          v-if="method.example"
          class="mt-2"
          :value="`\`\`\`ts\n${method.example}\n\`\`\``"
        />

        <ProseCollapsible
          name="Parameters"
          :pohon="{
            trigger: 'border border-border akar:rounded-2 px-3 py-1 font-500',
          }"
        >
          <div class="flex flex-col items-start gap-2">
            <ProseH4>Parameters</ProseH4>

            <div
              v-for="param in method.args"
              :key="param.name"
              class="inline-flex items-center gap-1"
            >
              <ProseCode lang="ts-type">
                {{ param.name }}
              </ProseCode>

              <span>{{ param.description }}</span>
            </div>

            <ProseH4>Returns</ProseH4>

            <ProseCode>{{ method.returns.name }}</ProseCode>
          </div>
        </ProseCollapsible>
      </div>
    </div>
  </template>
</template>
