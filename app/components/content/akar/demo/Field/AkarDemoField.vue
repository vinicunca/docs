<script setup lang="ts">
import { FieldControl, FieldDescription, FieldError, FieldLabel, FieldRoot } from 'akar';
import './styles.css';
</script>

<template>
  <div class="akar-demo akar-demo-Field">
    <FieldRoot
      class="FieldRoot"
      name="email"
      validation-mode="onBlur"
    >
      <FieldLabel class="FieldLabel">
        Email
      </FieldLabel>
      <FieldControl
        type="email"
        required
        placeholder="you@example.com"
        class="FieldControl"
      />
      <FieldDescription class="FieldDescription">
        We'll never share your email.
      </FieldDescription>
      <FieldError
        match="valueMissing"
        class="FieldError"
      >
        Email is required.
      </FieldError>
      <FieldError
        match="typeMismatch"
        class="FieldError"
      >
        Please enter a valid email address.
      </FieldError>
    </FieldRoot>
  </div>
</template>
