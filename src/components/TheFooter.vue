<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

const url = "https://github.com/stixbunny/portfolio";
</script>

<template>
  <footer>
    <div>
      <p>{{ t('footer.created') }}</p>
      <p>{{ t('footer.learn') }} <a :href="url" target="_blank">{{ $t('footer.here') }}.</a></p> 
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
