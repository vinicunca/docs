<script setup lang="ts">
import { Time } from '@internationalized/date'

const time = shallowRef(new Time(12, 30, 0))
</script>

<template>
  <PFormField label="Time" help="Specify the time" required>
    <PInputTime v-model="time" />
  </PFormField>
</template>
