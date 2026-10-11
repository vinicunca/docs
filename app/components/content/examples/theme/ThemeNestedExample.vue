<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full',
      },
    }"
  >
    <div class="p-4 border border-border-muted rounded-lg flex flex-col gap-4 items-start">
      <div class="flex gap-2 items-center">
        <PButton label="Outer theme" />
        <PButton
          label="Outer theme"
          color="neutral"
          variant="outline"
        />
      </div>

      <PTheme
        :ui="{
          button: {
            base: 'font-black uppercase',
          },
        }"
      >
        <div class="p-4 border border-border-muted rounded-lg">
          <div class="flex gap-2 items-center">
            <PButton label="Inner theme" />
            <PButton
              label="Inner theme"
              color="neutral"
              variant="outline"
            />
          </div>
        </div>
      </PTheme>
    </div>
  </PTheme>
</template>
