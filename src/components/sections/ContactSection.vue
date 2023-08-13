<script setup>
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';

const { t } = useI18n();
</script>

<template>
  <section id="contact">
    <h1>{{ t('contact.title') }}</h1>
    <ul>
      <li><a href=""><Icon icon="fa6-brands:linkedin" /><span>LinkedIn</span></a></li>
      <li><a href=""><Icon icon="fa6-brands:square-github" /><span>GitHub</span></a></li>
      <li><a href=""><Icon icon="icomoon-free:mail" /><span>Mail</span></a></li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
li {
  /* flex-basis: 20%; */
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-accent);
}
svg {
  width: 50px;
  height: 100%;
  max-width: 300px;
}
span {
  color: var(--color-text);
}
</style>