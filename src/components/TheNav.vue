<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitch from './UI/LanguageSwitch.vue';
import NightModeSwitch from './UI/NightModeSwitch.vue';
import { useToggle } from '@vueuse/core';

const { t } = useI18n();
const [isMenuOpen, toggle] = useToggle();

function toggleMenu() {
  toggle();
}
</script>

<template>
  <header>
    <button
      class="mobile-nav-toggle"
      aria-controls="main-nav"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <svg fill="var(--color-text)" class="hamburger-menu" viewBox="0 0 100 100" width="25">
        <rect class="line top" width="80" height="10" x="10" y="25" rx="5"></rect>
        <rect class="line middle" width="80" height="10" x="10" y="45" rx="5"></rect>
        <rect class="line bottom" width="80" height="10" x="10" y="65" rx="5"></rect>
      </svg>
      <span class="sr-only">Menu</span>
    </button>
    <nav id="main-nav" :data-visible="isMenuOpen">
      <ul id="sections">
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
      <div id="switches">
        <LanguageSwitch />
        <NightModeSwitch />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  background-color: var(--color-secondary);
  /* border-block: 1px solid var(--color-text); */
}
#main-nav {
  z-index: 1000;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  --gap: 1rem;
  gap: var(--gap);
}
.mobile-nav-toggle {
  display: none;
}
#sections {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  gap: var(--gap);
}
a {
  font-weight: 500;
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
  flex-direction: row;
  gap: var(--gap);
}
@media (max-width: 35em) {
  header {
    padding-block: 1.75rem !important;
    display: flex;
    align-items: center;
  }
  #main-nav {
    position: fixed;
    inset: 0 0 0 60%;
    flex-direction: column;
    justify-content: space-around;
    padding: min(30vh, 10rem) 2em;
    background: var(--color-background);
    /* border-left: 1px solid var(--color-text); */
    --gap: 2rem;
    transform: translateX(100%);
    transition: transform 350ms ease-out;
  }
  #main-nav[data-visible='true'] {
    transform: translate(0%);
  }
  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 9999;
    background: var(--color-background);
    /* border: 1px solid var(--color-text); */
    border: none;
    border-radius: 5px;
    min-width: min-content;
    aspect-ratio: 1;
    right: 0.5rem;
    padding: 0.2rem !important;
    margin: 0 !important;
  }
  .mobile-nav-toggle[aria-expanded='true'] {
    background: var(--color-primary);
    .hamburger-menu .line {
      transition:
        y 175ms ease-in,
        rotate 175ms ease-in 175ms,
        opacity 0ms 175ms;
    }
    .hamburger-menu :is(.top, .bottom) {
      y: 45;
    }
    .hamburger-menu .top {
      rotate: 45deg;
    }
    .hamburger-menu .middle {
      opacity: 0;
    }
    .hamburger-menu .bottom {
      rotate: -45deg;
    }
  }
  .hamburger-menu {
    display: block;
  }
  .hamburger-menu .line {
    transition:
      y 175ms ease-in 175ms,
      rotate 175ms ease-in,
      opacity 0ms 175ms;
    transform-origin: center;
  }
  #sections,
  #switches {
    flex-direction: column;
  }
}
</style>
