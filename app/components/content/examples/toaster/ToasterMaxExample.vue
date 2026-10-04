<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <PFormField
      label="toaster.max"
      size="sm"
      :ui="{
        wrapper: 'bg-background-elevated/50 rounded-l-sm flex border-r border-border-accented',
        label: 'color-text-muted px-2 py-1.5',
        container: 'mt-0'
      }"
      class="inline-flex ring ring-ring-accented rounded-sm"
    >
      <PInput
        v-model="appConfig.toaster.max"
        color="neutral"
        variant="soft"
        :ui="{ base: 'rounded-sm rounded-l-none min-w-12' }"
      />
    </PFormField>
  </div>
</template>
