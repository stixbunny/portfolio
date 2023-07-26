<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <footer>
    <p>{{ t('footer.created') }}</p>
    <p>
      {{ t('footer.learn') }}
      <a href="https://github.com/stixbunny/portfolio">{{ t('footer.here') }}</a
      >.
    </p>
  </footer>
</template>

<style scoped>
p {
  font-size: 0.8rem;
}
</style>
