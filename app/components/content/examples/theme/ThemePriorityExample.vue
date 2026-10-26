<template>
  <PTheme
    :ui="{
      button: {
        base: 'uno-layer-p-variant:rounded-full',
      },
    }"
  >
    <div class="flex gap-2 items-center">
      <PButton label="Themed" />
      <PButton
        label="Overridden"
        :ui="{ base: 'uno-layer-p-variant:rounded-none' }"
      />
    </div>
  </PTheme>
</template>
