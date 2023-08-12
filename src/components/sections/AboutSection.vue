<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="about">
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.description1') }}</p>
    <p>{{ t('about.description2') }}</p>
    <h2>{{ t('about.amongsoftskills') }}</h2>
    <ul>
      <li>
        <div class="skill-head">{{ t('about.detailoriented') }}</div>
        <div class="skill-desc">{{ t('about.detailorienteddesc') }}</div>
      </li>
      <li>
        <div class="skill-head">{{ t('about.research') }}</div>
        <div class="skill-desc">{{ t('about.researchdesc') }}</div>
      </li>
      <li>
        <div class="skill-head">{{ t('about.problemsolving') }}</div>
        <div class="skill-desc">{{ t('about.problemsolvingdesc') }}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0.5rem;
  background: var(--color-secondary);
}
li {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  /* justify-items: center; */
  /* text-align: justify; */
  padding: 0.5rem;
}
.skill-head {
  text-align: center;
  /* display: flex; */
  /* justify-self: center; */
  /* width: min-content; */
  text-wrap: balance;
}
.skill-desc {
  text-align: justify;
}
</style>