<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import ModeSwitch from './ModeSwitch.vue';

const { locale } = useI18n({ useScope: 'global' });
const isSpanish = ref(true);
const onText = 'ES';
const offText = 'EN';

function switchState() {
  isSpanish.value = !isSpanish.value;
}

watch(isSpanish, async (newState) => {
  if (newState) {
    locale.value = 'es';
  } else {
    locale.value = 'en';
  }
});
</script>

<template>
  <ModeSwitch
    :on-text="onText"
    :off-text="offText"
    :default-state="isSpanish"
    @clicked="switchState"
    on-color="lightcoral"
    off-color="lightblue"
  />
</template>

<style scoped></style>
