<script setup lang="ts">
const studioIcons = useStudioIcons()

const value = ref<string[]>(['4', '3', '2'])
</script>

<template>
  <div class="flex flex-col items-center gap-3 p-6 text-center">
    <PIcon :name="studioIcons.shieldCheck" class="size-7 text-primary" />

    <div>
      <p class="font-semibold color-text-highlighted">
        Verify your account
      </p>
      <p class="text-sm color-text-muted">
        Enter the 6-digit code we sent you.
      </p>
    </div>

    <PPinInput v-model="value" :length="6" otp :separator="3" />

    <p class="text-sm color-text-muted">
      Didn't get a code? <PButton variant="link" class="p-0" label="Resend" />
    </p>
  </div>
</template>
