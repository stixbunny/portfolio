<script setup>
import TheNav from './components/TheNav.vue';
import TheFooter from './components/TheFooter.vue';
import TheMain from './components/TheMain.vue';
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<template>
  <TheNav />
  <TheMain />
  <TheFooter />
</template>

<style scoped></style>
