<template>
  <PTheme
    :props="{
      button: { color: 'neutral', variant: 'outline', size: 'lg' },
      input: { size: 'lg' },
      select: { size: 'lg' },
    }"
    :ui="{
      button: { base: 'rounded-full' },
      input: { base: 'rounded-full' },
      select: { base: 'rounded-full' },
    }"
  >
    <div class="flex gap-2 items-center">
      <PButton label="Button" />
      <PInput placeholder="Search..." />
      <PSelect
        placeholder="Select"
        :items="['Item 1', 'Item 2', 'Item 3']"
      />
    </div>
  </PTheme>
</template>
