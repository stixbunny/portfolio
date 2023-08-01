<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitch from './LanguageSwitch.vue';
import NightModeSwitch from './NightModeSwitch.vue';

const { t } = useI18n();
</script>

<template>
  <header>
    <nav>
      <div id="sections">
        <ul>
          <li>
            <a href="#home">{{ t('nav.home') }}</a>
          </li>
          <li>
            <a href="#about">{{ t('nav.about') }}</a>
          </li>
          <li>
            <a href="#portfolio">{{ t('nav.portfolio') }}</a>
          </li>
          <li>
            <a href="#contact">{{ t('nav.contact') }}</a>
          </li>
        </ul>
      </div>
      <div id="switches">
        <LanguageSwitch />
        <NightModeSwitch />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-subtle-background);
  border-bottom: 1px solid var(--color-text);
}
nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse wrap-reverse;
  gap: 0.5rem;
}
#sections {
  order: 1;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  display: inline-block;
}

li + li {
  margin-left: 1rem;
}
a {
  font-weight: 500;
}
a {
  position: relative;
}
a:visited {
  color: inherit;
}
a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: var(--color-accent);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  transform: scaleX(0);
}
a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
#switches {
  justify-self: right;
  display: flex;
  gap: 1rem;
}
</style>
