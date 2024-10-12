// src/db/about/about.ts
import { About } from "../types";

const about: About = {
  currently: {
    en: "Surfing Are.na",
    ru: "Сижу на Are.na",
  },
  jobless: true,
  based: {
    en: "Moscow, Russia",
    ru: "Москва, Россия",
  },
  who: {
    en: "Product designer, UI/UX designer, developer",
    ru: "Продуктовый дизайнер, UI/UX дизайнер, разработчик",
  },
  aboutMeCards: [
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2Ffin.webp?alt=media&token=569a9b65-ab86-443e-9170-5a0fe9d85dbd",
      text: {
        en: "Hi! It’s Polina. I am a small girly pop with a huge desire to work. But besides being a white-collar, I’m also just a person.",
        ru: "Хей! Это Полина. Я люблю работать работу, но помимо того, что я человек работающий, я еще и просто человек. ",
      },
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design%2Flafemme%202_VP9_7.webm?alt=media&token=9d9491cd-e9f3-4ce5-a12f-d85a98c698b8",
      text: {
        en: "I have an inexplicably strong attachment to pretentious European arthouse, novels of Tolstoy and Woolf, and music of any kind.",
        ru: "Очень люблю претенциозный европейский артхаус, романы Толстого и Вулф и музыку любого рода.",
      },
      links: [
        {
          text: [
            {
              en: "pretentious European arthouse",
              ru: "претенциозный европейский артхаус",
            },
          ],
          url: "https://letterboxd.com/ttovarischh/",
        },
        {
          text: [
            {
              en: "novels of Tolstoy and Woolf",
              ru: "романы Толстого и Вулф",
            },
          ],
          url: "https://app.thestorygraph.com/profile/ttovarischh",
        },
      ],
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design%2Ftea.webp?alt=media&token=dd17a9f4-305e-46ef-923b-0d0b976ec3e1",
      text: {
        en: "I go to the gym 3 times a week, brew shu pu-erh 4 times a day, and love my mom and dad 365 days a year (366 in leap years).",
        ru: "Хожу в фитнес 3 раза в неделю, завариваю шу пуэр 4 раза за день и люблю маму с папой 365 дней в году (иногда 366).",
      },
    },
  ],
  aboutMeText: {
    header: {
      en: "My experience allows me to lead projects from concept to successful market launch.",
      ru: "Опыт позволяет мне вести проекты от изначальной концепции до успешного выхода на рынок.",
    },
    text: {
      en: "My products address real user pains, while skills in a variety of design areas enable me to apply unconventional approaches. My strengths are analytical thinking, quick adaptation to new challenges, and creativity. I can help you to create products that will really stand out.",
      ru: "Мои продукты закрывают реальные боли пользователей, а навыки работы в самых разных направлениях позволяют мне применять нестандартные подходы. Мои сильные стороны — это аналитический подход и быстрая адаптация к новым задачам. Помогу создать продукт, который будет выгодно выделяться на фоне конкурентов.",
    },
    ps: { en: "P.S. Nice to meet you!", ru: "P.S. Приятно познакомиться!" },
  },
  contactMeLinks: [
    {
      name: "Gmail",
      url: "mailto: polinasot@gmail.com",
    },
    {
      name: "Telegram",
      url: "https://t.me/ttovarischh",
    },
    {
      name: "Linked.In",
      url: "https://www.linkedin.com/in/ttovarischh/",
    },
  ],
  followMeLinks: [
    {
      name: "Behance",
      url: "https://www.behance.net/ttovarischh",
    },
    {
      name: "Are.na",
      url: "https://www.are.na/polina-sotnikova-8r-1jefvew0/channels",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ttovarischh/",
    },
  ],
  bigLinks: [
    {
      name: {
        en: "My resumé",
        ru: "Мое резюме",
      },
      url: {
        en: "https://drive.google.com/file/d/1CUUQhceAEWkuyIIvOcf509_t-pKz6Rx0/view",
        ru: "https://drive.google.com/file/d/1n44MV-pDMMVsyf5hL8F1B11OuOOJzFxL/view",
      },
    },
    {
      name: {
        en: "Conact me",
        ru: "Свяжитесь со мной",
      },
      url: {
        en: "mailto: polinasot@gmail.com",
        ru: "mailto: polinasot@gmail.com",
      },
    },
  ],
  workExperience: [
    {
      role: {
        en: "Art director",
        ru: "Арт-директор",
      },
      organisation: {
        text: {
          en: "Toggle Studio",
          ru: "Toggle Studio",
        },
        url: "https://www.toggle.studio/",
      },
      year: {
        en: "Аug 2023 — July 2024",
        ru: "Авг 2023 — Июль 2024",
      },
      responsibilities: [
        {
          text: {
            en: "Development of the studio's branding and design system.",
            ru: "Разработка айдентики и дизайн-системы студии.",
          },
        },
        {
          text: {
            en: "Work on the brand's communication strategy, development of a content plan and list of headings for social media.",
            ru: "Работа над коммуникационной стратегией бренда, разработка контент-плана и рубрикатора для соцсетей.",
          },
        },
        {
          text: {
            en: "Design and development of the studio's website.",
            ru: "Дизайн и вёрстка сайта студии.",
          },
        },
        {
          text: {
            en: "Documents, presentations, treatments, and advertising creatives design.",
            ru: "Оформление документов, вёрстка презентаций, тритментов и рекламных креативов.",
          },
        },
        {
          text: {
            en: "Motion design and video editing.",
            ru: "Моушн-дизайн и монтаж видеоконтента.",
          },
        },
        {
          text: {
            en: "3D modeling, assembling of animated and static 3D scenes for projects.",
            ru: "Моделирование 3D-объектов, сборка анимированных и статичных 3D-сцен для проектов.",
          },
        },
      ],
      achievements: [
        {
          text: {
            en: "Moved all work to Figma, optimizing processes for other designers and simplifying collaboration on projects.",
            ru: "Перевела всю работу в Figma, тем самым оптимизировав процессы для остальных дизайнеров и упростив совместную работу над проектами.",
          },
        },
        {
          text: {
            en: "Created branding, styleguide, and atomic design system for the studio from scratch.",
            ru: "С нуля создала айдентику, стайлгайд и атомарную дизайн-систему для студии.",
          },
        },
        {
          text: {
            en: "Increased the frequency of posts in social networks from monthly to 2-3 times per week, leading to a 2.5x growth in social media followers.",
            ru: "Увеличила частоту публикаций в каналах коммуникации с ежемесячной до 2–3 раз в неделю, что привело к росту подписчиков в соцсетях в 2,5 раза.",
          },
        },
        {
          text: {
            en: "Developed the studio's website, which attracted 2,667 unique visitors and achieved high conversion rates on key goals (social media clicks — 3.72%, email clicks — 1.86%), significantly boosting the number of project inquiries.",
            ru: "Создала сайт студии, который привлёк 2 667 уникальных посетителей и обеспечил высокие показатели конверсии по ключевым целям (переходы на соцсети — 3,72%, переходы в почту — 1,86%), что значительно увеличило количество запросов на заказы.",
          },
        },
      ],
    },
    {
      role: {
        en: "Front-end developer",
        ru: "Фронтенд разработчик",
      },
      organisation: {
        text: {
          en: "HSE DESIGN LAB",
          ru: "Toggle Studio",
        },
        url: "https://design.hse.ru/lab",
      },
      year: {
        en: "Sep 2022 — Jan 2023",
        ru: "Сен 2022 — Янв 2023",
      },
      responsibilities: [
        {
          text: {
            en: "Development and support of internal services.",
            ru: "Разработка и поддержка внутренних сервисов.",
          },
        },
        {
          text: {
            en: "Working with external customer services.",
            ru: "Работа с сервисами внешних заказчиков.",
          },
        },
      ],
      achievements: [
        {
          text: {
            en: "Contributed to the development of key products — HSE Design, Deziiign, Portfolio.Hse, and Geograffee, which play an important role in supporting teaching activities and promoting student projects.",
            ru: "Участвовала в разработке ключевых продуктов — HSE Design, Deziiign, Portfolio.Hse и Geograffee, которые играют важную роль в поддержке преподавательской деятельности и продвижении студенческих проектов.",
          },
        },
        {
          text: {
            en: "Created a series of animated promotional landing pages and interactive web applications for HSE ART AND DESIGN SCHOOL partners.",
            ru: "Создала ряд анимированных рекламных лендингов и интерактивных веб-приложений для партнёров Школы дизайна.",
          },
        },
      ],
    },
    {
      role: {
        en: "Designer, developer and founder",
        ru: "Дизайнер, разработчик и фаундер",
      },
      organisation: {
        text: {
          en: "Wō",
          ru: "Wō",
        },
        url: "https://wo.artdesignandprooomotion.ru/",
      },
      year: {
        en: "Sep 2023 — July 2024",
        ru: "Сен 2023 — Июль 2024",
      },
      responsibilities: [
        {
          text: {
            en: "Branding, identity creation, atomic design system, and styleguide development.",
            ru: "Брендинг, создание айдентики, атомарной дизайн-системы и стайлгайда.",
          },
        },
        {
          text: {
            en: "UI/UX design and prototyping.",
            ru: "UI/UX дизайн и прототипирование.",
          },
        },
        {
          text: {
            en: "Marketing and business analytics, MVP development.",
            ru: "Маркетинговая и бизнес-аналитика, разработка MVP.",
          },
        },
        {
          text: {
            en: "Design, layout, and printing of a project-related book, creation of merchandise and other printed assets.",
            ru: "Дизайн, верстка и печать книги по проекту, создание мерча и иной печатной продукции.",
          },
        },
        {
          text: {
            en: "Product promotion, management of social networks, and content creation for them.",
            ru: "Продвижение продукта, ведение каналов коммуникации и создание контента для них.",
          },
        },
      ],
      achievements: [
        {
          text: {
            en: "Total project reach over the year — ~102k. Average conversion rate — 1.71%. Total number of subscribers — 150.",
            ru: "Суммарный охват проекта за год - ~102к. Средняя конверсия — 1,71%. Общее число подписчиков — 150.",
          },
        },
        {
          text: {
            en: "Developed and hosted a user-friendly MVP — a Python Telegram bot with an access to GPT-4. Total number of users within the bot in 3 months — >400.",
            ru: "Разработала и захостовала удобный MVP — tg-бот на Python с доступом к GPT-4. Общее число генераций внутри бота за 3 месяца — >400.",
          },
        },
        {
          text: {
            en: "Revenue from selling 6 premium subscriptions — 1 794₽.",
            ru: "Выручка с продажи 6 премиум-подписок — 1 794₽.",
          },
        },
        {
          text: {
            en: "Presented the project at KAZANFORUM and received a launch offer from colleagues in Libya.",
            ru: "Презентовала проект на «KAZANFORUM», получив предложение по запуску проекта от коллег из Ливии.",
          },
        },
      ],
    },
    {
      role: {
        en: "Designer, developer and co-founder",
        ru: "Дизайнер, разработчик и кофаундер",
      },
      organisation: {
        text: {
          en: "Hod",
          ru: "Ход",
        },
        url: "https://its-all-taken.github.io/hod-landing/",
      },
      year: {
        en: "Sep 2022 — Until now",
        ru: "Сен 2022 — Настоящее время",
      },
      responsibilities: [
        {
          text: {
            en: "Development of the mobile app and web version of «Hod» and its localization.",
            ru: "Разработка мобильного приложения и веб-версии «Ход» и его локализация.",
          },
        },
        {
          text: {
            en: "Backend development, database, and API creation.",
            ru: "Разработка серверной части, базы данных и API сервиса.",
          },
        },
        {
          text: {
            en: "Marketing and business analytics.",
            ru: "Маркетинговая и бизнес-аналитика.",
          },
        },
        {
          text: {
            en: "Design of widgets and notifications for the mobile version.",
            ru: "Дизайн виджетов и уведомлений для мобильной версии.",
          },
        },
        {
          text: {
            en: "Participation in presentations and pitch deck creation.",
            ru: "Участие в вёрстке презентаций и питч дека.",
          },
        },
        {
          text: {
            en: "Creation of additional content for social networks(AR filters, animated stories).",
            ru: "Создание дополнительного контента для каналов продвижения (AR-маски, анимированные сторис).",
          },
        },
      ],
      achievements: [
        {
          text: {
            en: "First place in the HSE CREATIVE OPEN competition.",
            ru: "Первое место в конкурсе «HSE CREATIVE OPEN».",
          },
        },
        {
          text: {
            en: "Received a funding offer for the project from HSE University. Currently working on product launch.",
            ru: "Получили предложение о финансировании проекта от НИУ ВШЭ. На данный момент работаем над запуском продукта.",
          },
        },
        {
          text: {
            en: "Gained first experience in management. Used the Kanban method to optimize team workflow.",
            ru: "Получила первый опыт в менеджменте. Применяли канбан-метод для оптимизации работы внутри команды.",
          },
        },
        {
          text: {
            en: "Over 300 leads came to the project landing page from outdoor advertising, VK ads, and Yandex Direct.",
            ru: "С наружной рекламы, VK рекламы и Яндекс Директа на лендинг проекта пришло >300 лидов.",
          },
        },
      ],
    },
  ],
  education: [
    {
      iconName: "HSE",
      organisation: {
        name: {
          en: "HSE Art and Design School",
          ru: "Школа дизайна НИУ ВШЭ",
        },
        url: "https://design.hse.ru/",
      },
      typeYear: {
        en: "Bachelor / 2023 — 2024 ",
        ru: "Бакалавриат / 2023 — 2024 ",
      },
      specialization: [
        {
          text: {
            en: "Design and coding",
            ru: "Дизайн и программирование",
          },
          url: "https://design.hse.ru/ba/design/programming",
        },
        {
          text: {
            en: "Design and promotion of digital product",
            ru: "Дизайн и продвижение цифрового продукта",
          },
          url: "https://design.hse.ru/ba/design/design-marketing",
        },
      ],
      achievements: [
        {
          text: {
            en: "In 4 years, I completed 31 projects across various fields, from product and communication design to game development and jewelry making. I gained skills not only in design and coding but also in marketing, business analytics, branding, and other crucial areas.",
            ru: "За 4 года сделала 31 проект, работая в самых различных направлениях: от продуктового и коммуникационного дизайна до гейм-дева и ювелирного мастерства. Получила навыки не только в дизайне и кодинге, но и в продвижении, бизнес-аналитике, брендинге и других важнейших областях.",
          },
        },
        {
          text: {
            en: "Led 3 year-long projects from concept to pitch deck and deployment to hosting.",
            ru: "Вела 3 годовых проекта от задумки до питч дека и выгрузки на хостинг.",
          },
        },
        {
          text: {
            en: "Graduated with honors.",
            ru: "Окончила университет с красным дипломом.",
          },
        },
      ],
      button: {
        text: {
          en: "HSE University site",
          ru: "Сайт Школы Дизайна",
        },
        url: "https://design.hse.ru/",
      },
    },
    {
      iconName: "UAL",
      organisation: {
        name: {
          en: "UAL:",
          ru: "UAL:",
        },
        url: "https://www.arts.ac.uk/",
      },
      typeYear: {
        en: "Short courses / 2019",
        ru: "Короткие курсы / 2019",
      },
      specialization: [
        {
          text: {
            en: "Illustration",
            ru: "Иллюстрация",
          },
          url: "https://www.arts.ac.uk/study-at-ual/short-courses/curated/illustration-short-courses",
        },
      ],
      achievements: [
        {
          text: {
            en: "During the course, we completed several practical assignments with the instructors: we created book illustrations, posters, and covers using various techniques.",
            ru: "В процессе обучения мы выполняли ряд практических заданий с преподавателями: создавали книжные иллюстрации, плакаты и обложки в различных техниках. ",
          },
        },
        {
          text: {
            en: "By the end of the course, I had a collection of 50 sheets of completed assignments and an incredible experience in the field of commercial illustration.",
            ru: "К концу обучения у меня был набор из 50 листов с выполненными заданиями и потрясающий опыт в области коммерческой иллюстрации.",
          },
        },
      ],
      button: {
        text: {
          en: "University of the Arts London site",
          ru: "Сайт University of the Arts London",
        },
        url: "https://www.arts.ac.uk/",
      },
    },
    {
      iconName: "LYCEUM",
      organisation: {
        name: {
          en: "HSE Lyceum",
          ru: "Лицей НИУ ВШЭ",
        },
        url: "https://school.hse.ru/",
      },
      typeYear: {
        en: "Secondary / 2018 — 2020 ",
        ru: "Среднее / 2020 — 2020 ",
      },
      specialization: [
        {
          text: {
            en: "Design",
            ru: "Дизайн",
          },
          url: "https://school.hse.ru/design",
        },
      ],
      achievements: [
        {
          text: {
            en: "Studied directly with professors from the HSE ART AND DESIGN SCHOOL. By the 11th grade, I had already tried myself in a large number of different design areas.",
            ru: "Обучалась непосредственно у преподавателей Школы дизайна. Уже к 11 классу попробовала себя в большом количестве разных направлений дизайна. ",
          },
        },
        {
          text: {
            en: "Completed my university entrance project with a score of 100 points.",
            ru: "Выполнила вступительный проект в Школу дизайна на 100 баллов.",
          },
        },
      ],
      button: {
        text: {
          en: "HSE Lyceum site",
          ru: "Сайт Лицея НИУ ВШЭ",
        },
        url: "https://school.hse.ru/",
      },
    },
  ],
  skills: [
    {
      name: {
        en: "#UI/UX design",
        ru: "#UI/UX Дизайн",
      },
      typeOf: {
        en: "Basic education",
        ru: "Основное образование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F9.webp?alt=media&token=b9af73b6-528b-437e-b0fe-5f6a36f4d42d",
      text: {
        en: "Development of interfaces, creation of interactive prototypes, and building atomic component-based design systems for flexible and scalable projects.",
        ru: "Разработка интерфейсов, создание интерактивных прототипов, построение компонентных атомарных дизайн-систем для гибких и масштабируемых проектов, работа с CMS.",
      },
      techTags: ["Figma", "Webflow", "Readymag"],
    },
    {
      name: {
        en: "#Analytics",
        ru: "#Аналитика",
      },
      typeOf: {
        en: "Basic education",
        ru: "Основное образование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F2.webp?alt=media&token=0a5f6704-8f92-4f2f-a6a1-db7d6ad4f05c",
      text: {
        en: "Competitor, market and target audience analysis, business models, and product strategies. Trendwatching, benchmarking, metrics, and MVP development.",
        ru: "Качественные и количественные исследования, конкурентный и рыночный анализы, бизнес-модели и продуктовые стратегии. Трендвотчинг, бенчмаркинг, анализ целевой аудитории, метрики, MVP.",
      },
      techTags: ["Figjam", "Notion", "Miro", "Google Sheets"],
    },
    {
      name: {
        en: "#Development",
        ru: "#Разработка",
      },
      typeOf: {
        en: "Basic education",
        ru: "Основное образование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F3.webp?alt=media&token=bd341865-1161-461f-90fe-df6fb4aa93ce",
      text: {
        en: "Knowledge and experience with HTML, CSS, JS, jQuery, React, React Native, TypeScript, RoR; basic Python skills and experience in creative coding (Tone.js, P5.js).",
        ru: "Знание и работа с HTML, CSS, JavaScript, jQuery, React, React Native, TypeScript, Ruby on Rails; базовые навыки Python и опыт в креативном кодинге (Tone.js, P5.js).",
      },
      techTags: [
        "VSCode",
        "Git",
        "HTML, CSS, JS (jQuery)",
        "React, React Native",
        "Ruby on Rails",
        "Базовый Python",
        "Tone.js, P5.js",
      ],
    },
    {
      name: {
        en: "#Branding",
        ru: "#Брендинг",
      },
      typeOf: {
        en: "Basic education",
        ru: "Основное образование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F5.webp?alt=media&token=566f51a5-edbb-484b-9a16-e3c883b92cfe",
      text: {
        en: "Creation of brand identities, development of brand platforms, work on positioning, semantics, naming, and product philosophy, as well as working with merchandise and various mediums.",
        ru: "Создание айдентики, разработка платформы бренда, работа с позиционированием, проблематикой, неймингом и философией продукта, работа с мерчом и различными носителями.",
      },
      techTags: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Indesign",
        "TouchDesigner",
      ],
    },
    {
      name: {
        en: "#Motion design",
        ru: "#Моушн-Дизайн",
      },
      typeOf: {
        en: "Self educated",
        ru: "Самообразование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/works%2Ffin_VP9_3.webm?alt=media&token=5fdff478-3d6d-46e0-b8f8-e129a30fe904",
      text: {
        en: "Creation of animations and video editing of of almost any complexity, working with expressions to automate processes, generating video and audio content, and its subsequent editing.",
        ru: "Создание анимаций и видеомонтаж, работа с выражениями для автоматизации процессов, генерация видео — и аудиоконтента и последующая его обработка.",
      },
      techTags: [
        "Adobe After Effects",
        "Adobe Premiere",
        "Adobe Media Encoder",
      ],
    },
    {
      name: {
        en: "#3D modeling",
        ru: "#3D Моделирование",
      },
      typeOf: {
        en: "Self educated",
        ru: "Самообразование",
      },
      image_src:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F1.webp?alt=media&token=d188f03d-177f-41a3-8197-0e9297af981a",
      text: {
        en: "Creation of single 3D models and complete scenes, working with object physics and UV mapping, texturing, and optimizing models for use in both animated and static projects.",
        ru: "Создание 3D-моделей и сцен, работа с физикой объектов и UV-развёртками, текстурирование и оптимизация моделей для использования в анимированных и статичных проектах.",
      },
      techTags: [
        "Blender",
        "Adobe Substance 3D",
        " Spline 3D",
        "Unreal Engine",
      ],
    },
  ],
  achievements: [
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F8.webp?alt=media&token=a9eef99f-b125-42ba-8c8b-f0390db67477",
      text: {
        en: "Video for the interactive exhibition «Gogol in Moscow» at the Museum of Moscow",
        ru: "Видеоролик для интерактивной выставки «Гоголь в Москве» в Музее Москвы",
      },
      year: "2019",
      link: "https://www.hse.ru/news/communication/275857687.html",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F7.webp?alt=media&token=c4821001-3fa3-418b-b490-840695bb4e53",
      text: {
        en: "Interactive landing page for the music video «Zodiac» by electronic artist Mujuice",
        ru: "Интерактивный лендинг для клипа «Zodiac» электронного исполнителя Mujuice",
      },
      year: "2021",
      link: "https://design.hse.ru/news/2080",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F6.webp?alt=media&token=37323252-2f9b-47f8-8cd7-2fd84b1d6fc6",
      text: {
        en: "Lecture at the international economic forum KAZANFORUM",
        ru: "Выступление на международном форуме «KAZANFORUM»",
      },
      year: "2024",
      link: "https://facecast.net/v/ntqgl4?t=18591s",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F4.webp?alt=media&token=93dfa689-1a01-442c-bfdc-ab7a49f1ae76",
      text: {
        en: "First place at the HSE CREATIVE OPEN x Alfa Bank competition",
        ru: "Первое место в конкурсе «HSE CREATIVE OPEN x Альфа банк»",
      },
      year: "2024",
      link: "https://design.hse.ru/news/4162",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/about%2F10.webp?alt=media&token=f6a08f94-d933-4638-bd3a-4f47b7905f84",
      text: {
        en: "Shortlist of the competition Best project deziiign according to DAFES",
        ru: "Shortlist of the competition Best project deziiign according to DAFES",
      },
      year: "2024",
      link: "https://hsedesign.ru/competition/c65291ceab8e48628bb33932fe519d30?tab=projects",
    },
  ],
};

export default about;
