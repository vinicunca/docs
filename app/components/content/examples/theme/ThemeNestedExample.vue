<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex flex-col items-start gap-4 border border-border-muted p-4 rounded-lg">
      <div class="flex items-center gap-2">
        <PButton label="Outer theme" />
        <PButton label="Outer theme" color="neutral" variant="outline" />
      </div>

      <PTheme
        :ui="{
          button: {
            base: 'font-black uppercase'
          }
        }"
      >
        <div class="border border-border-muted p-4 rounded-lg">
          <div class="flex items-center gap-2">
            <PButton label="Inner theme" />
            <PButton label="Inner theme" color="neutral" variant="outline" />
          </div>
        </div>
      </PTheme>
    </div>
  </PTheme>
</template>
