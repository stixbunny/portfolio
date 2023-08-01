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
footer {
  text-align: right;
  background-color: var(--color-subtle-background);
  border-top:1px solid var(--color-text);
}
p {
  font-size: var(--small-font);
}
a:hover::before {
  content: '👉 ';
}
a:hover::after {
  content: ' 💯'
}
</style>
