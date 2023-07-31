<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="about">
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.description') }}</p>
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

</style>