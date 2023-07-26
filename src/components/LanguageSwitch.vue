<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const isSpanish = ref(true);
const computedLocale = computed(() => {
  return locale.value.toUpperCase();
});
function switchButton() {
  if (isSpanish.value) {
    isSpanish.value = false;
    locale.value = 'en';
  } else {
    isSpanish.value = true;
    locale.value = 'es';
  }
}
</script>

<template>
  <div>
    <button class="switch" :class="{ active: isSpanish }" @click="switchButton">
      {{ computedLocale }}
    </button>
  </div>
</template>

<style scoped>
button {
  background-color: steelblue;
}
button.active {
  background-color: coral;
}
</style>
