<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="home">
    <i18n-t keypath="home.welcome" tag="h1">
      <template v-slot:name>
        <span>{{ t('home.milenko') }}</span>
      </template>
      <template v-slot:title>
        <span>{{ t('home.webdeveloper') }}</span>
      </template>
    </i18n-t>
  </section>
</template>

<style scoped>

</style>