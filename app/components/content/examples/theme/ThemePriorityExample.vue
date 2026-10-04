<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex items-center gap-2">
      <PButton label="Themed" />
      <PButton label="Overridden" :ui="{ base: 'rounded-none' }" />
    </div>
  </PTheme>
</template>
