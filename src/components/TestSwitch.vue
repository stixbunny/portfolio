<script setup>
import { ref } from 'vue';
import ModeSwitch from './ModeSwitch.vue';
const onText = 'ON!';
const offText = 'OFF!';
const switchState = ref(true);

function toggleTest() {
  switchState.value = !switchState.value;
}
</script>

<template>
  <div>
    <ModeSwitch :on-text="onText" :off-text="offText" :default-state="true" @clicked="toggleTest" />
    <p>{{ switchState ? "true" : "false" }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
