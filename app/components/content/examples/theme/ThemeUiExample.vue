<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full',
      },
    }"
  >
    <div class="flex gap-2 items-center">
      <PButton
        label="Button"
        color="neutral"
      />
      <PButton
        label="Button"
        color="neutral"
        variant="outline"
      />
      <PButton
        label="Button"
        color="neutral"
        variant="subtle"
      />
    </div>
  </PTheme>
</template>
