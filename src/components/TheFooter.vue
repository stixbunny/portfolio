<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const url = "https://github.com/stixbunny/portfolio";
</script>

<template>
  <footer>
    <div>
      <p>{{ t('footer.created') }}</p>
      <i18n-t keypath="footer.learn" tag="p" for="here" scope="global">
        <a :href="url" target="_blank">{{ $t('footer.here') }}</a>
      </i18n-t>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin: 0 auto;
  background-color: var(--color-secondary);
  /* border-block:1px solid var(--color-text); */
}
div {
  text-align: right;
}
p {
  font-size: var(--font-small);
}
a:hover::before {
  content: '👉 ';
}
a:hover::after {
  content: ' 💯'
}
</style>
