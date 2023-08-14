<script setup>
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';

const { t } = useI18n();
</script>

<template>
  <section id="contact">
    <h1>{{ t('contact.title') }}</h1>
    <h2>{{ t('contact.subheading') }}</h2>
    <ul>
      <li><a href="https://www.linkedin.com/in/stixbunny/"><Icon icon="fa6-brands:linkedin" /><span>LinkedIn</span></a></li>
      <li><a href="https://github.com/stixbunny"><Icon icon="fa6-brands:square-github" /><span>GitHub</span></a></li>
      <li class="smaller-icon-li"><a href="mailto:milenko.castillo@gmail.com"><Icon class="smaller-icon" icon="icomoon-free:mail" /><span>Mail</span></a></li>
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
  align-items: baseline;
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
.smaller-icon {
  transform: scale(1.05);
  margin: 0.2rem;
}
.smaller-icon-li {
  align-self: end;
}
span {
  color: var(--color-text);
}
@media (min-width: 35rem) {
  ul {
    padding-inline: calc(var(--section-row-gap) * 7);
  }
}
</style>