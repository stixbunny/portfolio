<script setup>
import { useDark } from '@vueuse/core';
import ModeSwitch from './ModeSwitch.vue';

const onText = '🌚';
const offText = '🌞';

const nightMode = useDark({
  selector: 'html',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false,
});

function switchState() {
  nightMode.value = !nightMode.value;
}
</script>

<template>
  <ModeSwitch :on-text="onText" :off-text="offText" :default-state="nightMode" @clicked="switchState" />
</template>

<style scoped>

</style>
