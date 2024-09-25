const projects = [
  {
    id: 1,
    name: {
      en: "Wō App",
      ru: "Wō App",
    },
    type: {
      en: "Personal",
      ru: "Личное",
    },
    timeline: {
      en: "Sep 2023 — July 2024",
      ru: "Сен 2023 — Июль 2024",
    },
    deliverables: {
      en: "Brand Strategy, Positioning, Tone of Voice, Branding, Identity Design",
      ru: "Брендовая стратегия, Позиционирование, Тон общения, Брендинг, Дизайн идентичности",
    },
    role: {
      en: "Product designer, Developer",
      ru: "Продуктовый дизайнер, Разработчик",
    },
    organisation: "HSE ART AND DESIGN SCHOOL",
    status: {
      en: "Finished",
      ru: "Завершено",
    },
    s_description: {
      en: "Wō is an AI-based music service for mood transformation.",
      ru: "Wō — это музыкальный сервис на базе ИИ для изменения настроения.",
    },
    description: {
      en: "Wō is not just a streaming platform, but a safe space where each track is carefully selected to match your current state. Listening to music is often not just entertainment, but also a way to relax, feel sad, or, on the contrary, cheer up. Wō analyzes the user’s current mood and offers personalized playlists that promote emotional regulation.",
      ru: "Wō не просто стриминговая платформа, а сейфспейс, где каждый трек заботливо подобран индивидуально под твоё текущее состояние. Ведь прослушивание музыки — часто не только развлечение, но и способ расслабиться, погрустить или, наоборот, развеселиться. Wō анализирует текущее настроение юзера и предлагает персонализированные плейлисты, способствующие эмоциональной регуляции.",
    },
    cover:
      "https://res.cloudinary.com/db64foay5/video/upload/f_auto/v1727186991/PortfolioCover_tunkrm.mp4",
    svgHeaderPath: "/assets/images/wologo.svg",
    links: [
      {
        name: "Full presentation",
        url: "https://portfolio.hse.ru/Project/213207",
      },
      { name: "Landing", url: "https://wo.artdesignandprooomotion.ru/" },
    ],
    texts: [
      {
        header: [{ en: "Full presentation", ru: "Полная презентация" }],
        text: [{ en: "This is a text itself", ru: "А вот это текст" }],
      },
      {
        header: [{ en: "Full presentation 2", ru: "Полная презентация 2" }],
        text: [{ en: "This is a text itself 2", ru: "А вот это текст 2" }],
      },
    ],
    layout: [
      { component: "CoverImage" },
      { component: "ProjectTitle" },
      { component: "A_InfoBlock", textIndex: 0 },
      { component: "Gallery" },
      { component: "A_InfoBlock", textIndex: 1 },
      { component: "StatsBlock" },
      { component: "Testimonial" },
    ],
  },
];

export default projects;
