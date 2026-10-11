<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full',
      },
    }"
  >
    <div class="flex gap-2 items-center">
      <PButton label="Themed" />
      <PButton
        label="Overridden"
        :ui="{ base: 'rounded-none' }"
      />
    </div>
  </PTheme>
</template>
