<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const url = "https://github.com/stixbunny/portfolio";
</script>

<template>
  <footer>
    <p>{{ t('footer.created') }}</p>
    <i18n-t keypath="footer.learn" tag="p" for="here" scope="global">
      <a :href="url" target="_blank">{{ $t('footer.here') }}</a>
    </i18n-t>
  </footer>
</template>

<style scoped>
p {
  font-size: 0.8rem;
}
</style>
