<template>
  <PTheme
    :props="{
      button: { color: 'neutral', variant: 'outline', size: 'lg' },
      input: { size: 'lg' },
      select: { size: 'lg' },
    }"
    :ui="{
      button: { base: 'uno-layer-p-variant:rounded-full' },
      input: { base: 'uno-layer-p-variant:rounded-full' },
      select: { base: 'uno-layer-p-variant:rounded-full' },
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
