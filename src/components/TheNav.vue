<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitch from './LanguageSwitch.vue';
import NightModeSwitch from './NightModeSwitch.vue';

const { t } = useI18n();
</script>

<template>
  <nav>
    <div>
      <ul>
        <li>
          <a href="#home">{{t("nav.home")}}</a>
        </li>
        <li>
          <a href="#about">{{t("nav.about")}}</a>
        </li>
        <li>
          <a href="#portfolio">{{t("nav.portfolio")}}</a>
        </li>
        <li>
          <a href="#contact">{{t("nav.contact")}}</a>
        </li>
      </ul>
    </div>
    <div>
      <LanguageSwitch />
      <NightModeSwitch />
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
}
</style>
