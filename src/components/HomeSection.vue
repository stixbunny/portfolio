<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="home">
    <div id="title">
      <i18n-t keypath="home.welcome" tag="h1" scope="global">
        <template v-slot:name>
          <span>{{ t('home.milenko') }}</span>
        </template>
        <template v-slot:title>
          <span>{{ t('home.webdeveloper') }}</span>
        </template>
      </i18n-t>
    </div>
    <div id="profile-pic">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <img src="../assets/img/profile.png" alt="Milenko Castillo profile picture." />
    </div>
  </section>
</template>

<style scoped>
#home {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  align-content: center;
  gap: 1rem;
}
#title {
  grid-column: 1 / 2;
}
#profile-pic {
  grid-column: 2 / 3;
  position: relative;
}
h1 {
  font-size: 2.5rem;
  line-height: 1;
  text-wrap: balance;
  font-weight: bold;
}
span {
  font-weight: bold;
}
/* Name */
span:first-child {
  display: inline-block;
  font-size: 5rem;
  --bg-size: 300%;
  --color-one: hsl(54, 100%, 70%);
  --color-two: hsl(184, 100%, 70%);
  --color-three: hsl(323, 100%, 70%);
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-three),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 8s infinite linear;
}
@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}
/* Title */
span:nth-child(2) {
  text-wrap: nowrap;
  font-size: 3rem;
  color: var(--color-secondary);
  text-decoration-line: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-style: wavy;
}
svg {
  position: absolute;
  scale: 80%;
  display: block;
  margin: auto;
  fill: var(--color-accent);
  z-index: -1;
}
img {
  width: 100%;
  min-width: 100px;
  max-width: 200px;
}
</style>
