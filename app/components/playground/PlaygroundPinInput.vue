<script setup lang="ts">
const studioIcons = useStudioIcons();

const value = ref<Array<string>>(['4', '3', '2']);
</script>

<template>
  <div class="p-6 text-center flex flex-col gap-3 items-center">
    <PIcon
      :name="studioIcons.shieldCheck"
      class="text-primary size-7"
    />

    <div>
      <p class="color-text-highlighted font-semibold">
        Verify your account
      </p>
      <p class="text-sm color-text-muted">
        Enter the 6-digit code we sent you.
      </p>
    </div>

    <PPinInput
      v-model="value"
      :length="6"
      otp
      :separator="3"
    />

    <p class="text-sm color-text-muted">
      Didn't get a code? <PButton
        variant="link"
        class="p-0"
        label="Resend"
      />
    </p>
  </div>
</template>
