<script setup>
import HomeSection from './sections/HomeSection.vue';
import AboutSection from './sections/AboutSection.vue';
import PortfolioSection from './sections/PortfolioSection.vue';
import ContactSection from './sections/ContactSection.vue';
</script>

<template>
  <main>
    <HomeSection />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  padding-inline: 1rem;
}
main > * + * {
  margin-block: 1rem;
}
</style>
