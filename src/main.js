import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    home: {},
    about: {},
    portfolio: {},
    contact: {},
    footer: {
      created: 'Made with Vue, Vue-i18n, and brought to you by Milenko Castillo.',
      learn: 'You can learn more about how I made this website',
      here: 'here',
    },
  },
  es: {
    nav: {
      home: 'Home',
      about: 'Acerca de',
      portfolio: 'Portafolio',
      contact: 'Contacto',
    },
    home: {},
    about: {},
    portfolio: {},
    contact: {},
    footer: {
      created: 'Hecho con Vue, Vue-i18n, y traido hasta ti por Milenko Castillo.',
      learn: 'Puedes aprender más acerca de como creé este sitio',
      here: 'aquí',
    },
  },
};

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  legacy: false,
  messages,
  globalInjection: true,
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
