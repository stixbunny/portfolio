<script setup>
import HomeSection from './HomeSection.vue';
import AboutSection from './AboutSection.vue';
import PortfolioSection from './PortfolioSection.vue';
import ContactSection from './ContactSection.vue';
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
