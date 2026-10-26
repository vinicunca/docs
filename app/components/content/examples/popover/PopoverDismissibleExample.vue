<template>
  <PPopover
    :dismissible="false"
    :ui="{ content: 'p-4' }"
  >
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
    />

    <template #content="{ close }">
      <div class="mb-4 flex gap-4 items-center">
        <h2 class="color-text-highlighted font-semibold">
          Popover non-dismissible
        </h2>

        <PButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-x"
          @click="close"
        />
      </div>

      <Placeholder class="size-full min-h-48" />
    </template>
  </PPopover>
</template>
