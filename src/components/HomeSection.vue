<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="home">
    <i18n-t keypath="home.welcome" tag="h1" scope="global">
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
h1 {
  font-size: 2.5rem;
  line-height: 1;
  text-wrap: balance;
  font-weight: bold;
}
span {
  font-weight: bold;
}
/* Name */
span:first-child {
  /* display: block; */
  color: var(--color-background);
  font-size: 5rem;
  text-shadow: 0 0 2px 2px var(--color-text);
}
/* Title */
span:nth-child(2) {
  /* display: block; */
  font-size: 3rem;
}
</style>