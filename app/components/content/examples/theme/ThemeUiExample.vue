<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex items-center gap-2">
      <PButton label="Button" color="neutral" />
      <PButton label="Button" color="neutral" variant="outline" />
      <PButton label="Button" color="neutral" variant="subtle" />
    </div>
  </PTheme>
</template>
