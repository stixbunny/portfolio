<script setup>
import { computed } from 'vue';
import { useDark } from '@vueuse/core';

const nightMode = useDark({
  selector: 'html',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false,
});
const computedMode = computed(() => {
  return nightMode.value ? '🌚' : '🌞';
});
function switchButton() {
  nightMode.value = !nightMode.value;
}
</script>

<template>
  <div>
    <button class="switch" :class="{ active: nightMode }" @click="switchButton">
      {{ computedMode }}
    </button>
  </div>
</template>

<style scoped>
button {
  background-color: lightyellow;
}
button.active {
  background-color: steelblue;
}
</style>
