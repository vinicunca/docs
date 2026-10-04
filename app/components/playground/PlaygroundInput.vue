<script setup lang="ts">
const appConfig = useAppConfig()
const studioIcons = useStudioIcons()

const email = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <PFormField label="Your email" description="We won't share your email." required>
      <PInput v-model="email" type="email" placeholder="john@example.com" :icon="studioIcons.mail" class="w-full" />
    </PFormField>

    <PFormField label="Search">
      <PInput placeholder="Search documentation…" :icon="appConfig.ui.icons.search" :ui="{ trailing: 'gap-px' }" class="w-full">
        <template #trailing>
          <PKbd value="meta" />
          <PKbd value="K" />
        </template>
      </PInput>
    </PFormField>
  </div>
</template>
