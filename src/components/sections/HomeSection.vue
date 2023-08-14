<script setup>
import { useI18n } from 'vue-i18n';
import profileImg from '../../assets/img/profile.png';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <section id="home">
    <div id="title">
      <i18n-t keypath="home.welcome" tag="h1" scope="global">
        <template #welcome1>
          <span>{{ t('home.welcome1') }}</span>
        </template>
        <template #welcome2>
          <span>{{ t('home.welcome2') }}</span>
        </template>
        <template #name>
          <span id="my-name">{{ t('home.milenko') }}</span>
        </template>
        <template #welcome3>
          <span>{{ t('home.welcome3') }}</span>
        </template>
        <template #title>
          <span id="my-title">{{ t('home.webdeveloper') }}</span>
        </template>
      </i18n-t>
    </div>
    <div id="profile-pic">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <img :src="profileImg" alt="Milenko Castillo profile picture." />
    </div>
  </section>
</template>

<style scoped>
#home {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
#title {
  justify-self: center;
}
#profile-pic {
  width: 100%;
  justify-self: center;
  position: relative;
  z-index: -1;
}
h1 {
  font-size: var(--font-l);
  line-height: 1;
  text-wrap: balance;
  text-align: center;
}
span {
  display: block;
  font-weight: 500;
  text-align: center;
}
/* Name */
#my-name {
  font-size: var(--font-xxl);
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
  animation: move-bg 15s infinite linear;
}
@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}
/* Title */
#my-title {
  font-size: var(--font-xl);
  color: var(--color-accent);
  /* background: var(--color-secondary); */
  /* border: 1px solid var(--color-text); */
  /* border-radius: 1000px; */
  /* padding: 0.5rem; */
  /* margin-top: 0.5rem; */
}
#my-name,
#my-title {
  font-style: italic;
  text-align: center !important;
  font-weight: bold;
  text-wrap: nowrap;
}
svg {
  position: absolute;
  scale: 80%;
  display: block;
  margin: auto;
  /* border: 1px solid var(--color-text); */
  border-radius: 50%;
  fill: var(--color-primary);
  z-index: -1;
}
img {
  width: 100%;
  min-width: 100px;
  border-radius: 50%;
  z-index: 500;
}
@media (min-width: 35em) {
  #home {
    grid-template-columns: 2fr 1fr;
  }
  #title {
    grid-column: 1 / 2;
    justify-self: center;
  }
  #profile-pic {
    grid-column: 2 / 3;
    justify-self: center;
    position: relative;
  }
}
@media (min-width: 60em) {
  span:first-child {
    display: inline;
    text-align: center;
  }
  span:nth-child(2) {
    display: inline;
    text-align: center;
  }
}
</style>

<style>
[color-scheme='light'] {
  #my-name,
  #my-title {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-text);
  }
}
</style>
