<script setup>
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';

const { t } = useI18n();
</script>

<template>
  <section id="about">
    <h1>{{ t('about.title') }}</h1>
      <div class="subsection">
        <p>{{ t('about.description1') }}</p>
        <p>{{ t('about.description2') }}</p>
      </div>
      <div class="subsection">
        <h2>{{ t('about.amongsoftskills') }}</h2>
        <ul>
          <li>
            <div class="icon">
              <svg class="round-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
              <Icon icon="icon-park-outline:list" />
            </div>
            <div class="skill-head">{{ t('about.detailoriented') }}</div>
            <div class="skill-desc">{{ t('about.detailorienteddesc') }}</div>
          </li>
          <li>
            <div class="icon">
              <svg class="round-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
              <Icon icon="icon-park-outline:search" />
            </div>
            <div class="skill-head">{{ t('about.research') }}</div>
            <div class="skill-desc">{{ t('about.researchdesc') }}</div>
          </li>
          <li>
            <div class="icon">
              <svg class="round-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
              <Icon icon="icon-park-outline:thinking-problem" />
            </div>
            <div class="skill-head">{{ t('about.problemsolving') }}</div>
            <div class="skill-desc">{{ t('about.problemsolvingdesc') }}</div>
          </li>
          <li>
            <div class="icon">
              <svg class="round-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
              <Icon icon="mdi:art" />
            </div>
            <div class="skill-head">{{ t('about.creativity') }}</div>
            <div class="skill-desc">{{ t('about.creativitydesc') }}</div>
          </li>
        </ul>
      </div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  row-gap: var(--section-row-gap);
}
.sub-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
p {
  text-align: justify;
  max-width: 90ch;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0.5rem;
}
li {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1rem;
  gap: 1rem;
  background: var(--color-secondary);
  border-radius: 1rem;
  z-index: -2;
}
.icon {
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  margin-block: 2rem;
  color: var(--color-accent);
}
.round-bg {
  position: absolute;
  scale: 70%;
  display: block;
  margin: auto;
  border-radius: 50%;
  fill: var(--color-primary);
  z-index: -1;
}
svg:not(:first-child) {
  align-self: center;
  width: 50%;
  height: 50%;
  max-width: 200px;
  z-index: 0;
}
.skill-head {
  text-align: center;
  align-self: center;
  font-weight: bold;
}
.skill-desc {
  text-align: justify;
}

@media (min-width: 560px) and (max-width: 750px) {
  li {
    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'left right-up'
      'left right-down';
  }
  .icon {
    grid-area: left;
    width: 80%;
  }
  .skill-head {
    grid-area: right-up;
  }
  .skill-desc {
    grid-area: right-down;
  }
}
@media (min-width: 560px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  li {
    grid-template-rows: auto auto 1fr;
  }
}
</style>
