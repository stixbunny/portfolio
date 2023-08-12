<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="contact">
    <h1>{{ t('contact.title') }}</h1>
    <ul>
      <li>GitHub</li>
      <li>LinkedIn</li>
      <li>Mail</li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  padding: 0;
  list-style: none;
  display: flex;
}
</style>