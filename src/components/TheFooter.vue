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
  background-color: var(--color-secondary);
}
div {
  margin: 0 auto;
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
