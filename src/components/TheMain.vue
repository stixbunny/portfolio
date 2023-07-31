<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="home">
    <i18n-t keypath="home.welcome" tag="h1">
      <template v-slot:name>
        <span>{{ t('home.milenko') }}</span>
      </template>
      <template v-slot:title>
        <span>{{ t('home.webdeveloper') }}</span>
      </template>
    </i18n-t>
  </section>
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
  <section id="portfolio">
    <h1>{{ t('portfolio.title') }}</h1>
    <p>I'm a web developer ready to get hired by you... yes you right there!</p>
  </section>
  <section id="contact">
    <h1>{{ t('contact.title') }}</h1>
    <ul>
      <li>GitHub</li>
      <li>LinkedIn</li>
      <li>Mail</li>
    </ul>
  </section>
</template>

<style scoped></style>
