import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    home: {
      milenko: 'Milenko',
      webdeveloper: 'web developer',
      welcome: '{welcome1}{welcome2}{name}{welcome3}{title}',
      welcome1: 'Welcome to my website, ',
      welcome2: 'my name is ',
      welcome3: " and I'm a ",
    },
    about: {
      title: 'A little bit about me...',
      description1:
        "My name is Milenko Castillo, I'm 31 years old, I'm from Santiago, Chile and I studied Software Engineering. I've been into self thought web development for about a year and I'm trying to get into the industry to show what what I can do. I'm a dedicated person with a knack for learning new things and I'd love to work with you.",
      description2:
        "I've completed a number of courses within and outside the area, and I'd love to keep on perfecting my skills with technologies throughout the web development spectrum. In the near future I'd like to learn Go and SvelteKit. I don't have much working experience but I do have the motivation to keep on learning and find a place to put into practive what I know. ",
      amongsoftskills: 'Among the soft skills I can provide to you are:',
      detailoriented: 'Detail-Oriented',
      detailorienteddesc:
        "I throughly debug my own code and make sure everything is working accordingly and as well as it can. It's something I'm proud of being able to deliver.",
      research: 'Research',
      researchdesc:
        "As every good programmer must be, I'm great at making research and finding out answers... and I enjoy it too! Be it documentation or looking for better ways to do things, you can count on me.",
      problemsolving: 'Problem Solving',
      problemsolvingdesc:
        "I'm a thinker at heart and I love to spend time trying to solve new challenges. I've been doing it to make it where I am today and I'll keep doing it in the future.",
    },
    portfolio: {
      title: "Projects I've done",
    },
    contact: {
      title: 'Interested? You can find me around these places',
    },
    footer: {
      created: 'Made with Vue, Vue-i18n, and brought to you by Milenko Castillo.',
      learn: 'You can learn more about how I made this website {0}.',
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
    home: {
      milenko: 'Milenko',
      webdeveloper: 'desarrollador web',
      welcome: '{welcome1}{welcome2}{name}{welcome3}{title}',
      welcome1: 'Bienvenido a mi sitio, ',
      welcome2: ' mi nombre es ',
      welcome3: ' y soy ',
    },
    about: {
      title: 'Un poco acerca de mí...',
      description1:
        'Mi nombre es Milenko Castillo, tengo 31 años, soy de Santiago de Chile y estoy egresado de Ingeniería de Ejecución Informática. He estudiado de forma autodidacta desarrollo web desde hace mas de un año y estoy intentando entrar a la industria para dar lo mejor de mí. Soy una persona dedicada con un gusto por aprender cosas nuevas y me encantaría trabajar contigo.',
      description2:
        'He realizado una variedad de cursos en el área y fuera de ella, y me gustaría seguir perfeccionando en tecnologías utilizadas en todo el espectro de desarrollo. En el futuro cercano me gustaria aprender de Go y SvelteKit. No tengo mucha experiencia laboral pero si muchas ganas de seguir aprendiendo y encontrar un lugar donde retribuir lo que sé.',
      amongsoftskills: 'Entre las competencias que puedo aportar estan:',
      detailoriented: 'Orientado al Detalle',
      detailorienteddesc:
        'Reviso a fondo mi propio código para asegurarme que todo este funcionando acorde y de la mejor forma posible. Es algo de lo cual estoy orgulloso de poder cumplir.',
      research: 'Busqueda de Información',
      researchdesc:
        'Como todo buen programador soy muy bueno buscando soluciones y encontrando respuestas... ¡Y me gusta hacerlo! Ya sea con documentación o buscando una mejor forma de hacer las cosas, puedes contar conmigo.',
      problemsolving: 'Resolución de problemas',
      problemsolvingdesc:
        'Soy en escencia un pensador y me encanta pasar mi tiempo resolviendo nuevos desafíos. Lo he estado haciendo para llegar donde estoy y lo seguiré haciendo en el futuro.',
    },
    portfolio: {
      title: 'Proyectos que he realizado',
    },
    contact: {
      title: '¿Interesado? Puedes encontrarme por aquí',
    },
    footer: {
      created: 'Hecho con Vue, Vue-i18n, y traido hasta ti por Milenko Castillo.',
      learn: 'Puedes aprender más acerca de como creé este sitio {0}.',
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

export default i18n;
