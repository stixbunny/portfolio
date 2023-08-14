<script setup>
import { useI18n } from 'vue-i18n';
import coachFinder from '../../assets/img/coachfinder.png';
import randomQuote from '../../assets/img/randomquote.png';
import pomodoroClock from '../../assets/img/pomodoroclock.png';
import markdownEditor from '../../assets/img/markdowneditor.png';
import { Icon } from '@iconify/vue';

const { t } = useI18n();
</script>

<template>
  <section id="portfolio">
    <h1>{{ t('portfolio.title') }}</h1>
    <p>{{ t('portfolio.temporary') }}</p>
    <h2>{{ t('portfolio.secondary') }}</h2>
    <ul>
      <li>
        <div class="img">
          <a href="https://stixbunny.github.io/coach-finder/coaches" target="_blank">
            <img :src="coachFinder" alt="coach finder project" />
          </a>
        </div>
        <div class="li-title">{{ t('portfolio.coachfinder') }}</div>
        <div class="li-subtitle">
          <a href="https://github.com/stixbunny/coachfinder" target="_blank">
            {{ t('portfolio.sourcecode') }}
          </a>
          <div class="made-with">
            <Icon icon="logos:javascript" />
            <Icon icon="logos:vue" />
            <Icon icon="logos:vueuse" />
            <Icon icon="logos:vitejs" />
            <Icon icon="logos:nodejs-icon" />
            <Icon class="icon-html" icon="logos:html-5" />
            <Icon class="icon-css" icon="logos:css-3" />
          </div>
        </div>
        <div class="li-desc">{{ t('portfolio.coachfinderdesc') }}</div>
      </li>
      <li>
        <div class="img">
          <a
            href="https://stixbunny.github.io/fcc-random-quote-machine-vite-react/"
            target="_blank"
          >
            <img :src="randomQuote" alt="coach finder project" />
          </a>
        </div>
        <div class="li-title">{{ t('portfolio.randomquote') }}</div>
        <div class="li-subtitle">
          <a
            href="https://github.com/stixbunny/fcc-random-quote-machine-vite-react"
            target="_blank"
          >
            {{ t('portfolio.sourcecode') }}
          </a>
          <div class="made-with">
            <Icon icon="logos:javascript" />
            <Icon icon="logos:react" />
            <Icon icon="logos:vitejs" />
            <Icon icon="logos:nodejs-icon" />
            <Icon class="icon-html" icon="logos:html-5" />
            <Icon class="icon-css" icon="logos:css-3" />
          </div>
        </div>
        <div class="li-desc">{{ t('portfolio.randomquotedesc') }}</div>
      </li>
      <li>
        <div class="img">
          <a
            href="https://stixbunny.github.io/fcc-25-5-clock-vite-react-typescript/"
            target="_blank"
          >
            <img :src="pomodoroClock" alt="coach finder project" />
          </a>
        </div>
        <div class="li-title">{{ t('portfolio.pomodoroclock') }}</div>
        <div class="li-subtitle">
          <a
            href="https://github.com/stixbunny/fcc-25-5-clock-vite-react-typescript"
            target="_blank"
          >
            {{ t('portfolio.sourcecode') }}
          </a>
          <div class="made-with">
            <Icon icon="logos:javascript" />
            <Icon icon="logos:typescript-icon" />
            <Icon icon="logos:react" />
            <Icon icon="logos:vitejs" />
            <Icon icon="logos:nodejs-icon" />
            <Icon class="icon-html" icon="logos:html-5" />
            <Icon class="icon-css" icon="logos:css-3" />
          </div>
        </div>
        <div class="li-desc">{{ t('portfolio.pomodoroclockdesc') }}</div>
      </li>
      <li>
        <div class="img">
          <a href="https://stixbunny.github.io/fcc-markdown-previewer/" target="_blank">
            <img :src="markdownEditor" alt="coach finder project" />
          </a>
        </div>
        <div class="li-title">{{ t('portfolio.markdowneditor') }}</div>
        <div class="li-subtitle">
          <a href="https://github.com/stixbunny/fcc-markdown-previewer" target="_blank">
            {{ t('portfolio.sourcecode') }}
          </a>
          <div class="made-with">
            <Icon icon="logos:javascript" />
            <Icon icon="logos:react" />
            <Icon icon="logos:vitejs" />
            <Icon icon="logos:nodejs-icon" />
            <Icon class="icon-html" icon="logos:html-5" />
            <Icon class="icon-css" icon="logos:css-3" />
          </div>
        </div>
        <div class="li-desc">{{ t('portfolio.markdowneditordesc') }}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
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
  gap: 0.5rem;
  background: var(--color-secondary);
  border-radius: 1rem;
  z-index: 0;
}
.img {
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70%;
  /* max-height: 50%; */
  /* margin-block: 2rem; */
  color: var(--color-accent);
}
img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 15px;
}
.li-title {
  text-align: center;
  align-self: center;
  font-weight: bold;
}
.li-subtitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  column-gap: 1rem;
  font-size: var(--font-small);
  font-style: italic;
}
a {
  color: var(--color-text) !important;
}
a:hover {
  color: var(--color-accent) !important;
}
.made-with {
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 0.5rem;
  font-size: var(--font-normal);
}
.icon-html,
.icon-css {
  font-size: calc(var(--font-normal) * 1.3);
}
.li-desc {
  text-align: justify;
}
@media (min-width: 560px) and (max-width: 750px) {
  li {
    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'left right-up'
      'left right-middle'
      'left right-down';
  }
  .img {
    grid-area: left;
    width: 80%;
  }
  .li-title {
    grid-area: right-up;
  }
  .li-subtitle {
    grid-area: right-middle;
  }
  .li-desc {
    grid-area: right-down;
  }
}
@media (min-width: 750px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  li {
    grid-template-rows: auto auto auto 1fr;
    row-gap: 1rem;
  }
}
</style>
