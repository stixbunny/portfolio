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
        "My name is Milenko Castillo, I'm 31 years old, I'm from Santiago, Chile and I studied Software Engineering. I've been into self-thought web development for about a year and I'm trying to get into the industry to show what I can do. I'm a dedicated person with a knack for learning new things and I'd love to work with you.",
      description2:
        "I've completed several of courses within and outside the area, and I'd love to keep on perfecting my skills with technologies throughout the web development spectrum. In the near future, I'd like to learn Go and SvelteKit. I don't have much working experience but I do have the motivation to keep on learning and find a place to put into practice what I know. ",
      amongsoftskills: 'Among the soft skills you can find in my work are:',
      detailoriented: 'Detail-Oriented',
      detailorienteddesc:
        "I thoroughly debug my code and make sure everything is working accordingly and as well as it can. It's something I'm proud of being able to deliver.",
      research: 'Research',
      researchdesc:
        "As every good programmer must be, I'm great at making research and finding out answers... and I enjoy it too! Be it documentation or looking for better ways to do things, you can count on me.",
      problemsolving: 'Problem-Solving',
      problemsolvingdesc:
        "I'm a thinker at heart and I love to spend time trying to solve new challenges. I've been doing it to make it where I am today and I'll keep doing it in the future.",
      creativity: 'Creativity',
      creativitydesc:
        "I've always been a creative person. I just love art. Be it painting, drawing, photographing, arts and crafts... and as of late, website designing. I like expressing myself this way.",
    },
    portfolio: {
      title: "Projects I've done",
      sourcecode: 'source code',
      temporary: "I'm working on new projects to add to my website all the time, but meanwhile you can check out the small steps I took that lead me to this point.",
      main: "These took a while:",
      smockify: 'Smockify - a Spotify copy',
      smockifydesc: "I made this project as a way to focus on front-end development. It's a copy of the desktop version of spotify. My initial goal was too ambitious, so I had to scale down the scope of the proyect. Therefore there are still thing to complete.",
      concentration: "Concentration",
      concentrationdesc: "As part of a technical test I was tasked to do a concentration game and this is the result. Players have to enter their name and can play a session with six different random dog pictures from an API. I learned Tailwindcss in the process.",
      secondary: 'These I made while learning:',
      coachfinder: 'Coach Finder',
      coachfinderdesc: "This project was made while doing Maximilian Schwarzmüller's Vue course on Udemy. It uses Firebase as a database and authorization provider. Users can register to show up as a coach and can leave messages to coaches to email them back.",
      randomquote: 'Random Quote Generator',
      randomquotedesc: "This project was made during freeCodeCamp's front-end course. It uses a random quote API and it lets you fetch a new one with a button. It also includes two social buttons to share on Twitter as well as on Tumblr. The website colors change on each quote.",
      pomodoroclock: 'Pomodoro Clock',
      pomodoroclockdesc: "This project was made during freeCodeCamp's front-end course. It is an alarm for the Pomodoro Technique of time management and sounds when switching between a break and a work session. It lets you customize the break and session's length and also includes a pause button. The break and session cycle plays indefinitely.",
      markdowneditor: 'Markdown Editor and Previewer',
      markdowneditordesc: "This project was made during freeCodeCamp's front-end course. It is a markdown text editor and includes a real-time previewer. You can write in GitHub markdown as per the instructions and can see the output immediately.",
    },
    contact: {
      title: 'Interested?',
      subheading: 'You can find me around these places:',
    },
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
        'Mi nombre es Milenko Castillo, tengo 31 años, soy de Santiago de Chile y estoy egresado de Ingeniería de Ejecución Informática. He estudiado de forma autodidacta desarrollo web desde hace más de un año y estoy intentando entrar a la industria para dar lo mejor de mí. Soy una persona dedicada, con un gusto por aprender cosas nuevas y me encantaría trabajar contigo.',
      description2:
        'He realizado una variedad de cursos en el área y fuera de ella, y me gustaría seguir perfeccionando en tecnologías utilizadas en todo el espectro de desarrollo. En el futuro cercano me gustaría aprender de Go y SvelteKit. No tengo mucha experiencia laboral, pero sí muchas ganas de seguir aprendiendo y encontrar un lugar donde retribuir lo que sé.',
      amongsoftskills: 'Entre las competencias que encontrarás en mi trabajo están:',
      detailoriented: 'Orientado al Detalle',
      detailorienteddesc:
        'Reviso a fondo mi propio código para asegurarme que todo esté funcionando acorde y de la mejor forma posible. Es algo de lo cual estoy orgulloso de poder cumplir.',
      research: 'Búsqueda de Información',
      researchdesc:
        'Como todo buen programador soy muy bueno buscando soluciones y encontrando respuestas... ¡Y me gusta hacerlo! Ya sea con documentación o buscando una mejor forma de hacer las cosas, puedes contar conmigo.',
      problemsolving: 'Resolución de Problemas',
      problemsolvingdesc:
        'Soy en escencia un pensador y me encanta pasar mi tiempo resolviendo nuevos desafíos. Lo he estado haciendo para llegar donde estoy y lo seguiré haciendo en el futuro.',
      creativity: 'Creatividad',
      creativitydesc:
        "Siempre he sido una persona creativa. Simplemente me encanta el arte. Ya sea pintando, dibujando, fotografiando, realizando manualidades... y ahora último, diseñando páginas web. Me gusta expresarme de esta forma.",
        
    },
    portfolio: {
      title: 'Proyectos que he realizado',
      temporary: 'Estoy trabajando en proyectos para poder mostrar de forma continua, pero por el momento puedes revisar los pequeños pasos que he tomado para llegar hasta aquí.',
      sourcecode: 'código fuente',
      main: "Estos tomaron algo de tiempo:",
      smockify: 'Smockify - una copia de Spotify',
      smockifydesc: 'Realicé este proyecto como una forma de enfocarme en el desarrollo front-end. Es una copia de la interfaz usuaria de Spotify para ordenadores. Mi objetivo inicial era más ambicioso, pero tuve que reducirla escala del proyecto y por ende hay cosas aún sin completar.',
      concentration: 'Memorice',
      concentrationdesc: 'Como parte de una prueba técnica, me encargaron hacer un juego de memorice y este es el resultado. Los jugadores deben ingresar su nombre y pueden jugar varias sesiones con seis imágenes aleatorias de perros de una API. Aprendí Tailwindcss en el proceso.',
      secondary: 'Estos los realicé mientras aprendía:',
      coachfinder: 'Buscador de Entrenadores',
      coachfinderdesc: "Realicé este proyecto mientras hacía el curso de Vue de Maximilian Schwarzmüller en Udemy. Utiliza Firebase como proveedor de base de datos y autorización de usuarios. Los usuarios pueden registrarse como entrenadores y dejar mensajes para que los entrenadores los contacten de vuelta.",
      randomquote: 'Generador de Citas',
      randomquotedesc: "Este proyecto fue realizado durante el curso de front-end de freeCodeCamp. Usa una API de citas y deja al usuario buscar una nueva con un botón. También incluye dos botones para compartir tanto en Twitter como Tumblr. Los colores del sitio cambian en cada nueva cita.",
      pomodoroclock: 'Reloj Pomodoro',
      pomodoroclockdesc: "Este proyecto fue realizado durante el curso de front-end de freeCodeCamp. Es una alarma para aplicar la técnica Pomodoro y suena al cambiar de descanso a sesión de trabajo. Se puede elegir la duración del descanso y de la sesión y también incluye un botón de pausa. El ciclo descanso y sesión se repite indefinidamente.",
      markdowneditor: 'Editor de Markdown y Previsualizador',
      markdowneditordesc: "Este proyecto fue realizado durante el curso de front-end de freeCodeCamp. Es un editor de Markdown que también incluye un previsualizador en tiempo real. Soporta escritura en Markdown de GitHub como señalan las instrucciones y los cambios se pueden ver inmediatamente.",
    },
    contact: {
      title: '¿Interesado?',
      subheading: 'Puedes encontrarme por aquí:',
    },
    footer: {
      created: 'Hecho con Vue, Vue-i18n, y traído hasta ti por Milenko Castillo.',
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

export default i18n;
