import { Project } from "../types";

export const quimi: Project = {
  id: 7,
  shortie: true,
  name: {
    en: "Quimi App",
    ru: "Quimi App",
  },
  similarCases: [2, 3, 4],
  type: {
    en: "Personal",
    ru: "Личное",
  },
  year: "2024",
  timeline: {
    en: "Sep 2023 — July 2024",
    ru: "Сен 2023 — Июль 2024",
  },
  short_deliverables: {
    en: "Brand & Product",
    ru: "Бренд и продукт",
  },
  deliverables: {
    en: "Branding, Identity, UI/UX, Analytics, Promotion, Development",
    ru: "Брендинг, Айдентика, UI/UX, Аналитика, Продвижение, Разработка",
  },
  filterTags: [
    {
      name: { en: "Product design", ru: "Продуктовый дизайн" },
      value: "product",
    },
    {
      name: { en: "UI/UX design", ru: "UI/UX" },
      value: "uiux",
    },
    {
      name: { en: "Art direction", ru: "Арт-дирекшн" },
      value: "artdir",
    },
  ],
  role: {
    en: "Product designer, Developer",
    ru: "Продуктовый дизайнер, разработчик",
  },
  organisation: "HSE ART AND DESIGN SCHOOL",
  status: {
    en: "Finished",
    ru: "Завершено",
  },
  team: [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design%2Fmasha.webp?alt=media&token=74f1d18a-714a-4050-b787-479d941877ce",
      link: "https://www.behance.net/kauzt",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design%2Fpolina.webp?alt=media&token=d1bec526-b4aa-47ac-ba48-85c4e20d6377",
      link: "https://www.behance.net/sugumisu",
    },
  ],
  s_description: {
    en: "Wō is an AI-based music service for mood transformation.",
    ru: "Wō — это музыкальный сервис для трансформации настроения.",
  },
  description: {
    en: "Wō is not just a streaming platform, but a safe space where each track is carefully selected to match your current state. Listening to music is often not just entertainment, but also a way to relax, feel sad, or, on the contrary, cheer up. Wō analyzes the user’s current mood and offers personalized playlists that promote emotional regulation.",
    ru: "Wō не просто стриминговая платформа, а сейфспейс, где каждый трек заботливо подобран под твоё текущее состояние. Ведь прослушивание музыки — часто не только развлечение, но и способ расслабиться, погрустить или, наоборот, развеселиться. Wō анализирует текущее настроение юзера и предлагает персонализированные плейлисты, способствующие эмоциональной регуляции.",
  },
  horisontal_cover:
    "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/wo_h_c.webp?alt=media&token=e98037f8-9e85-4d53-9991-4665c7843b5a",
  cover:
    "https://res.cloudinary.com/db64foay5/video/upload/f_auto/v1727186991/PortfolioCover_tunkrm.mp4",
  cover_mob:
    "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/casesCovers%2Fwoverticaltextfin.mp4?alt=media&token=d6307ae5-09e7-4e03-a7e8-6f4fafeecbb4",
  links: [
    {
      name: {
        en: "Full presentation",
        ru: "Презентация",
      },
      url: "https://portfolio.hse.ru/Project/213207",
    },
    {
      name: {
        en: "Landing",
        ru: "Лендинг",
      },
      url: "https://wo.artdesignandprooomotion.ru/",
    },
  ],
  smallCards: [
    {
      headerCardText: [
        {
          en: "«It's hard for me to describe my feelings»",
          ru: "«Мне сложно описывать свои чувства»",
        },
      ],
      headerCardIcon: "☂",
      mainCardText: [
        {
          en: "People may have difficulty describing and understanding their emotional state. Mood is not just sadness, joy or calmness, it is more complex.",
          ru: "Люди могут испытывать трудности с описанием и пониманием своего эмоционального состояния. Настроение — не просто грусть, радость или спокойствие, все сложнее.",
        },
      ],
      tags: [
        {
          en: ["We take", "Lüscher color test"],
          ru: ["Отсюда берем", "Тест Люшера"],
        },
      ],
    },
    {
      headerCardText: [
        {
          en: "«When I'm sad, I choose post-punk»",
          ru: "«Когда грустно, выбираю пост-панк»",
        },
      ],
      headerCardIcon: "☁",
      mainCardText: [
        {
          en: "Existing music services don't take into account individual characteristics of music perception: personal associations, negative or positive memories.",
          ru: "Существующие муз. сервисы не способны учитывать индивидуальные особенности восприятия музыки: личные ассоциации, негативные или позитивные воспоминания.",
        },
      ],
      tags: [
        {
          en: [
            "We take",
            "Machine learning",
            "Manual fine-tuning",
            "Privacy settings",
          ],
          ru: [
            "Отсюда берем",
            "Машинное обучение",
            "Мануальная донастройка",
            "Настройки приватности",
          ],
        },
      ],
    },
    {
      headerCardText: [
        {
          en: "«Music for me is a pure self-reflection»",
          ru: "«Музыка для меня —саморефлексия»",
        },
      ],
      headerCardIcon: "♨",
      mainCardText: [
        {
          en: "People often use music as a means of self-regulation, and needing a service that is focused on supporting them in such cases, rather than purely on entertainment.",
          ru: "Люди часто используют музыку как средство саморегуляции, и им нужен сервис, который специально ориентирован на поддержку в таких случаях, а не сугубо на развлечение.",
        },
      ],
      tags: [
        {
          en: ["We take", "State Insights"],
          ru: ["Отсюда берем", "Инсайты состояния"],
        },
      ],
    },
  ],
  slider: [
    {
      slides: [
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/wo1_jheguq.jpg?alt=media&token=ee4983f8-ec33-48af-8bb9-b765186252b2",
          description: {
            en: "About Wō App",
            ru: "Про Wō App",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213026/wo2_ppwtw4.jpg",
          description: {
            en: "Basic mechanics [ 1 ]",
            ru: "Базовые механики [ 1 ]",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213028/wo3_ubreoz.jpg",
          description: {
            en: "Basic mechanics [ 2 ]",
            ru: "Базовые механики [ 2 ]",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213025/wo4_k0a0gh.jpg",
          description: {
            en: "Basic mechanics [ 3 ]",
            ru: "Базовые механики [ 3 ]",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213022/wo5_s6oy7p.jpg",
          description: {
            en: "Test results and tasty numbers",
            ru: "Результаты тестов и вкусные цифры",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727524117/s2_1_in4rab.jpg",
          description: {
            en: "Quantitative research info",
            ru: "Информация о количественном исследовании",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727524117/s2_2_sfygv1.jpg",
          description: {
            en: "Quantitative research results",
            ru: "Результаты количественного исследования",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727524116/s2_3_ssjpr1.jpg",
          description: {
            en: "Target audience, segment 1",
            ru: "Целевая аудитория, сегмент 1",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727524117/s2_4_hcnun2.jpg",
          description: {
            en: "Target audience, segment 2",
            ru: "Целевая аудитория, сегмент 2",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727524117/s2_5_sr0xgy.jpg",
          description: {
            en: "Target audience, segment 3",
            ru: "Целевая аудитория, сегмент 3",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727530868/sB_1_faxtjg.jpg",
          description: {
            en: "About visual research book",
            ru: "Про визуальное исследование",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727530868/sB_2_pb5d7f.jpg",
          description: {
            en: "Contents of the book",
            ru: "Содержание книги",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727957108/sB_Add_fngl3x.jpg",
          description: {
            en: "Conclusion from the study",
            ru: "Вывод из исследования",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727530869/sB_3_xx95xj.jpg",
          description: {
            en: "Book layout",
            ru: "Макет книги",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727527153/s3_1_kjtsxw.jpg",
          description: {
            en: "About naming",
            ru: "Про нейминг",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727527153/s3_2_jxyucv.jpg",
          description: {
            en: "Brand's mission",
            ru: "Миссия бренда",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727527153/s3_3_yfydm5.jpg",
          description: {
            en: "Brand values",
            ru: "Ценности бренда",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727527153/s3_4_tnk7ag.jpg",
          description: {
            en: "Positioning and key Message",
            ru: "Позиционирование и ключевое сообщение",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727527153/s3_5_g1ycfo.jpg",
          description: {
            en: "Communication message",
            ru: "Коммуникационное сообщение",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556897/s4_1_rzhzfy.jpg",
          description: {
            en: "Identity metaphor",
            ru: "Метафора айдентики",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556897/s4_2_aotxxt.jpg",
          description: {
            en: "About logo",
            ru: "Про лого",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556896/s4_3_bdrhe7.jpg",
          description: {
            en: "Logotype",
            ru: "Логотип",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556891/s4_4_ytohu6.jpg",
          description: {
            en: "About typography",
            ru: "Про типографику",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556891/s4_5_va5und.jpg",
          description: {
            en: "Color palette",
            ru: "Цветовая палитра",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727556891/s4_6_weq9mg.jpg",
          description: {
            en: "Image effects",
            ru: "Обработка изображений",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558430/s5_1_j5sktk.jpg",
          description: {
            en: "T-shirts",
            ru: "Футболки",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558430/s5_2_rncent.jpg",
          description: {
            en: "Sweatshirts",
            ru: "Толстовки",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558429/s5_3_aospbb.jpg",
          description: {
            en: "Tumblr and pillbox",
            ru: "Тамблер и таблетница",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558403/s5_4_gas1xm.jpg",
          description: {
            en: "Aroma candles",
            ru: "Ароматические свечи",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558403/s5_5_jj3a28.jpg",
          description: {
            en: "Bluetooth speaker and spring hook",
            ru: "Колонка и карабин",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558430/s5_6_vzophb.jpg",
          description: {
            en: "Guitar and keychains",
            ru: "Гитара и брелоки",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564373/s6_1_x9ou6d.jpg",
          description: {
            en: "Instagram stories",
            ru: "Instagram сторис",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564133/s6_2_oytkrl.jpg",
          description: {
            en: "Vk public page",
            ru: "Паблик Vk",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564131/s6_3_yuczpr.jpg",
          description: {
            en: "Brand's playlists on Yandex Music",
            ru: "Плейлисты бренда на Яндекс.Музыке",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564104/s6_4_mwdibc.jpg",
          description: {
            en: "Vk adds banners",
            ru: "Баннеры на VK Рекламе",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564109/s6_5_g70cfq.jpg",
          description: {
            en: "Yandex Direct adds",
            ru: "Баннеры в Яндекс Директе",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564130/s6_6_mfzlze.jpg",
          description: {
            en: "Appstore page",
            ru: "Страница на Appstore",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564111/s6_7_zaakjb.jpg",
          description: {
            en: "App icon & favicon",
            ru: "Гитара и брелоки",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727566559/s7_1_zxx3nc.jpg",
          description: {
            en: "User scenatio I",
            ru: "Пользовательский сценарий 1",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727566552/s7_2_p2dpsl.jpg",
          description: {
            en: "User scenatio II",
            ru: "Пользовательский сценарий 2",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727566556/s7_3_ul4xap.jpg",
          description: {
            en: "User scenatio III",
            ru: "Пользовательский сценарий 3",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567125/s8_1_tcxmxd.jpg",
          description: {
            en: "Results for Telegram",
            ru: "Результаты по Телеграму",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567122/s8_2_z6lrp7.jpg",
          description: {
            en: "Results for Vk",
            ru: "Результаты по Vk",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567103/s8_3_sp5dpb.jpg",
          description: {
            en: "Results for Dzen",
            ru: "Результаты по Дзену",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567073/s8_4_drzmrx.jpg",
          description: {
            en: "Overall results",
            ru: "Результаты по всем каналам продвижения",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567641/s9_1_tnrhbk.jpg",
          description: {
            en: "Market size",
            ru: "Объемы рынка",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567636/s9_2_pwr5b2.jpg",
          description: {
            en: "Unit economy",
            ru: "Юнит экономика",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567633/s9_3_axsruo.jpg",
          description: {
            en: "Unit economy conclusions",
            ru: "Выводы по юнит экономике",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567630/s9_4_nlslgo.jpg",
          description: {
            en: "Business model",
            ru: "Бизнес-модель",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567638/s9_5_twu4hh.jpg",
          description: {
            en: "Sales Funnel",
            ru: "Воронка продаж",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727567749/s9_6_vjjq4b.jpg",
          description: {
            en: "PESTEL & SWOT",
            ru: "PESTEL & SWOT",
          },
        },
      ],
    },
    {
      slides: [
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727982434/wolast_ap7bv3.jpg",
          description: {
            en: "That's all folks)",
            ru: "Вот и все, ребята)",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568908/s10_1_rssgwk.jpg",
          description: {
            en: "Main numbers",
            ru: "Основные цифры",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568904/s10_2_lp78t0.jpg",
          description: {
            en: "KAZAN FORUM lecture",
            ru: "Лекция на KAZAN FORUM",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568912/s10_4_k7j1iu.jpg",
          description: {
            en: "Ads results",
            ru: "Результаты по рекламе",
          },
        },
        {
          imgSrc:
            "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568924/s10_3_vtamwx.jpg",
          description: {
            en: "Proposal for financing",
            ru: "Деловое предложение",
          },
        },
      ],
    },
  ],
  uiShow: [
    {
      imgSrc:
        "https://res.cloudinary.com/db64foay5/video/upload/q_auto/f_auto/e_loop:6/v1727438683/mock_vypncx.webm",
      headerA: [
        {
          en: "Auth and playlist creation",
          ru: "Регистрация + создание плейлиста",
        },
      ],
      textA: [
        {
          en: "Here are all the free, basic features of the app. The essentials for transforming your mood.",
          ru: "Все бесплатные, базовые функции. Самое необходимое для трансформации вашего настроения.",
        },
      ],
      headerB: [
        {
          en: "Shown screens",
          ru: "Охваченные экраны",
        },
      ],
      textB: [
        {
          en: ["Registration", "Main feed", "Creation", "Playlist", "Player"],
          ru: ["Регистрация", "Фид", "Создание плейлиста", "Плейлист", "Плеер"],
        },
      ],
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db64foay5/video/upload/q_auto/f_auto/v1727438683/mock_vypncx.webm",
      headerA: [
        {
          en: "Subscription and old playlist view",
          ru: "Покупка подписки + старый плейлист",
        },
      ],
      textA: [
        {
          en: "We demonstrate paid features to the user and lead them to purchase a subscription.",
          ru: "Демонстрируем пользователю платные фичи, ведем к покупке подписки.",
        },
      ],
      headerB: [
        {
          en: "Shown screens",
          ru: "Охваченные экраны",
        },
      ],
      textB: [
        {
          en: [
            "Feed",
            "Friends' feed",
            "Profile",
            "History",
            "Payment",
            "Playlist",
          ],
          ru: ["Фид", "Фид друзей", "Профиль", "История", "Оплата", "Плейлист"],
        },
      ],
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db64foay5/video/upload/q_auto/f_auto/v1727438683/mock_vypncx.webm",
      headerA: [
        {
          en: "Auth and playlist creation",
          ru: "Все везде и сразу + инсайты",
        },
      ],
      textA: [
        {
          en: "Let's go through all the user paths again, but this time with a subscription and perks.",
          ru: "Проходим все пользовательские пути еще раз, но уже с подпиской и плюшками.",
        },
      ],
      headerB: [
        {
          en: "Shown screens",
          ru: "Охваченные экраны",
        },
      ],
      textB: [
        {
          en: [
            "Feed",
            "Creation",
            "Playlist",
            "Player",
            "History",
            "Insights",
            "Profile",
          ],
          ru: [
            "Фид",
            "Создание",
            "Плейлист",
            "Плеер",
            "История",
            "Инсайты",
            "Профиль",
          ],
        },
      ],
    },
  ],
  link_cards: [
    {
      image_src:
        "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727357515/userflow_dxraad.jpg",
      header: [{ en: "Userflow", ru: "Userflow" }],
      text: [
        {
          en: "After all the analysis we’ve made our userflow. Find it at the link below.",
          ru: "Далее мы сделали userflow приложения. Найти его можно по ссылке ниже.",
        },
      ],
      link_text: [{ en: "See in Figma", ru: "Перейти в Figma" }],
      url: "https://www.figma.com/design/ZlOtk8Vhh97tBSRWBRtT1t/Shareable?node-id=584-12903&t=26BclhOvfmVtEbYY-1",
    },
    {
      image_src:
        "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727540470/brandplatform_tpoxla.jpg",
      header: [{ en: "Platform", ru: "Платформа" }],
      text: [
        {
          en: "The full version of the brand platform can also be found at the link.",
          ru: "Полную версию платформы бренда можно также прочекать по ссылке.",
        },
      ],
      link_text: [{ en: "See in Figma", ru: "Перейти в Figma" }],
      url: "https://www.figma.com/design/ZlOtk8Vhh97tBSRWBRtT1t/Shareable?node-id=64-633&t=tqHQY8faWBxWOSRP-1",
    },
    {
      image_src:
        "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727559443/styleguide_qjw5az.jpg",
      header: [{ en: "Styleguide", ru: "Стайлгайд" }],
      text: [
        {
          en: "It's our short styleguide, right next to the page with UI Kit.",
          ru: "Это гайд для айдентики, а на странице рядом можно найти еще и UI Kit.",
        },
      ],
      link_text: [{ en: "See in Figma", ru: "Перейти в Figma" }],
      url: "https://www.figma.com/design/ZlOtk8Vhh97tBSRWBRtT1t/Shareable?node-id=602-9426&t=ncGmpwf80zPUUMpl-1",
    },
    {
      image_src:
        "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727566067/design_system_qgu7zc.jpg",
      header: [{ en: "Atomic", ru: "Атомик" }],
      text: [
        {
          en: "You can take a look at our atomic component system at this link.",
          ru: "По этой ссылке можно посмотреть на нашу систему компонентов.",
        },
      ],
      link_text: [{ en: "See in Figma", ru: "Перейти в Figma" }],
      url: "https://www.figma.com/design/ZlOtk8Vhh97tBSRWBRtT1t/Shareable?node-id=147-7968&t=W46saZwkX0nDWP7c-1",
    },
  ],
  images: [
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727480462/29_q5sbeb.jpg",
      description: [{ en: "Context", ru: "Контекст" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727480462/28_ffsfzs.jpg",
      description: [{ en: "Problem", ru: "Проблематика" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727272230/5_la9bkz.jpg",
      description: [{ en: "Trendwatching", ru: "Трендвотчинг-исследование" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727272230/6_n4dqdu.jpg",
      description: [{ en: "Benchmarking", ru: "Бенчмаркинг-исследование" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727302787/1_wuiuic.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727298218/2_wplrif.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727298216/3_wlfruw.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727298215/4_umyvwi.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727298218/5_i85rnx.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727298216/6_uvexmj.jpg",
    },

    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558402/s5_7_fdg3fe.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558402/s5_8_pgww1x.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727558403/s5_9_ucfkvk.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/video/upload/f_auto/v1727560560/wo%CC%84___posters_promo_1080p_1_gmq9qd.mp4",
      poster:
        "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727562906/thumb_hioidb.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727561369/p_1_jnbfos.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727561368/p_4_dj5nqw.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727561367/p_3_yu3tiv.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727561368/p_2_uhv4le.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727564746/imageforinst_cmglk4.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/video/upload/f_auto/v1727564933/Wo%CC%84___Posts_Examples_hj6jvf.mp4",
      shouldAutoplay: true,
    },
    {
      src: "https://res.cloudinary.com/db64foay5/video/upload/f_auto/v1727564973/Wo%CC%84___Stories_Examples_kso30x.mp4",
      shouldAutoplay: true,
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727565595/ig3_1_zbwekt.jpg",
      description: [{ en: "About MVP1", ru: "Трендвотчинг-исследование" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727565651/ig3_2_pwcjmo.jpg",
      description: [{ en: "MVP1 Results", ru: "Бенчмаркинг-исследование" }],
    },

    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568116/mvp3_1_xe4b7c.jpg",
      description: [{ en: "MVP3 results", ru: "Трендвотчинг-исследование" }],
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568159/mvp3_2_q1anmr.jpg",
      description: [{ en: "MVP3 features", ru: "Бенчмаркинг-исследование" }],
    },

    {
      src: "https://res.cloudinary.com/db64foay5/video/upload/v1727568568/Wo%CC%84___Landing_Screencast_qnqosu.mp4",
      shouldAutoplay: true,
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568418/l2_1_nwxheh.jpg",
    },
    {
      src: "https://res.cloudinary.com/db64foay5/image/upload/q_auto/f_auto/v1727568447/l2_2_avglqk.jpg",
    },
  ],
  texts: [
    {
      header: [{ en: "Context and problem", ru: "Проблематика и контекст" }],
      text: [
        {
          en: "According to statistics[1][2], the main reasons for listening to music are mood enhancement, stress relief, and support for overall mental well-being. However, existing music services do not take this context into account.",
          ru: "Согласно статистике[1][2], основными причинами прослушивания музыки являются улучшение настроения, борьба со стрессом, поддержка общего ментального состояния. Однако существующие музыкальные сервисы не учитывают этот контекст.",
        },
      ],
      links: [
        {
          text: [{ en: "1", ru: "1" }],
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/",
        },
        {
          text: [{ en: "2", ru: "2" }],
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/table/TA3/?report=objectonly",
        },
      ],
    },
    {
      header: [
        { en: "Research & target audience", ru: "Исследования и анализ ЦА" },
      ],
      text: [
        {
          en: "We conducted a study by surveying 81 people. The goal was to determine how users listen to music, what role it plays in their lives, and to understand the context in which they exist. As a result, three audience segments were identified.",
          ru: "Мы провели опрос, целью которого было понять, как пользователь подходит к задаче прослушивания музыки и какое место она занимает в его жизни, а также понять, в каком контексте он существует. В результате были выделены 3 сегмента ЦА.",
        },
      ],
    },
    {
      header: [
        { en: "About our competitors \n♞", ru: "Про наших конкурентов\n♞" },
      ],
      text: [
        {
          en: "In the course of the research, we discovered that there are no analogs to Wō. While there are similar products, none address our specific task. Our direct competitors include Endel, Mood Playlist, and My wave. Indirect competitors may include music therapy apps, meditation applications, and online psychotherapy services.",
          ru: "В процессе исследования мы выяснили, что у Wō нет аналога. Есть похожие продукты, но нашу конкретную задачу не решает никто. Например, нашими прямыми конкурентами были Endel, Mood Playlist и «Моя волна». Косвенными конкурентами могут считаться сервисы с муз. терапией и психотерапией, приложения для медитации.",
        },
      ],
    },
    {
      header: [
        {
          en: "Visual research book",
          ru: "Книга-визуальное исследование",
        },
      ],
      text: [
        {
          en: "Deep dive into the topic prompted me to trace the origins of the previously described problem and how it has evolved over the centuries. All of this formed the basis of my visual research book. By the way, it is available online via the link.",
          ru: "Глубокое погружение в тему побудило меня проследить, откуда возникла описанная ранее проблема и как она развивалась на протяжении столетий. Это легло в основу книги-визуального исследования. Кстати, в электронном виде она доступна по ссылке.",
        },
      ],
      links: [
        {
          text: [{ en: "via the link", ru: "по ссылке" }],
          url: "https://www.calameo.com/read/0064920654d449caed04d",
        },
      ],
    },
    {
      header: [{ en: "Problem Interview", ru: "Проблемное интервью" }],
      text: [
        {
          en: "To refine the product, we conducted problem-focused research by interviewing 20 people. During the interviews, 6/7 hypotheses were confirmed. Insights from the research later contributed to the brand development and the technical aspects of the product.",
          ru: "Для более тщательной проработки продукта мы провели проблемные исследования, поговорив c 20 респондентами. В ходе интервью 6/7 гипотез подтвердились. Инсайты из исследования позже помогли в разработке бренда и технической части продукта.",
        },
      ],
      links: [
        {
          text: [
            { en: "problem-focused research", ru: "проблемные исследования" },
          ],
          url: "https://tinyurl.com/45wzju3u",
        },
      ],
    },
    {
      header: [{ en: "Branding & Identity", ru: "Брендинг и айдентика" }],
      text: [
        {
          en: "To explain and convey the core value of our product to the audience, we created a brand — Wō (from Chinese «shelter»). Its mission is to make emotions clear for people. This is why we turn to the universal language — music.",
          ru: "Чтобы объяснить и донести основную ценность нашего продукта до аудитории, мы создали бренд — Wō (с кит. «приют»). Его миссия — сделать эмоции понятными для человека. Именно поэтому мы обращаемся к универсальному языку — музыке.",
        },
      ],
    },
    {
      header: [
        { en: "About main metaphor \n⤨", ru: "Об основной метафоре \n⤨" },
      ],
      text: [
        {
          en: "Wō (aptly named mood switcher) helps you switch moods. Like a toggle or switch, it changes your mood from the current to the desired one with a snap of your fingers. Our symbol and logo, along with additional graphic elements, are abstract switches.",
          ru: "Wō (не зря mood switcher) помогает переключиться. Как рубильник или свич, он по щелчку пальца меняет настроение с существующего на желаемое. Наш знак и логотип, дополнительные графические элементы — абстрактные переключатели.",
        },
      ],
    },
    {
      header: [
        { en: "About main metaphor \n৲", ru: "О добавочной метафоре \n৲" },
      ],
      text: [
        {
          en: "At the same time, it's important to understand that we don't treat or provide therapy, but act as a mediator between music, the user, and the desired mood. All the connections between the elements, all the smooth bridges — that's what it's all about.",
          ru: "В то же время важно понимать, что мы не лечим и не занимаемся терапией, но становимся медиатором между музыкой, пользователем и желаемым настроением. Все связи между блоками, все обтекаемые мосты — про это.",
        },
      ],
    },
    {
      header: [{ en: "About digital assets", ru: "Про цифровые носители" }],
      text: [
        {
          en: "Examples of our digital assets cover the entire user journey in the funnel: from discovering Wō through social media or banner ads to downloading the app in the store. By the way, over the past year, we made 100+ iterations of banners and identified the ones with the highest conversion rates.",
          ru: "Примеры наших цифровых носителей охватывают весь путь пользователя в воронке: от знакомства с Wō через соцсети или рекламные баннеры до скачивания приложения в сторе. Кстати, за год мы сделали 100+ итераций баннеров и нашли те, что показали самую высокую конверсию.",
        },
      ],
    },
    {
      header: [{ en: "About MVP1", ru: "Про MVP1" }],
      text: [
        {
          en: "MVP1 was a landing page that collected nicks for access to the upcoming beta. The primary goal of the research was to determine how interested the TA was in the product. We gathered 27 responses w/ minimal advertising costs.",
          ru: "Нашим первый MVP стал лендинг, собиравший тг-ники для доступа к будущей бете. Задачей исследования было, в первую очередь, определить, насколько высок интерес ЦА к продукту. Собрали 27 откликов при минимальных затратах на рекламу.",
        },
      ],
    },
    {
      header: [{ en: "About MVP2", ru: "Про нашего\nтг-бота\nッ" }],
      text: [
        {
          en: "To test the product mechanics, we created MVP2 — a bot with the Luscher test that curates music based on the user's goals and mood using ChatGPT API. Its secondary goal was to build an audience before the subscription launch.",
          ru: "Для проверки механик продукта мы создали MVP2 — Telegram-бота с тестом Люшера, подбиравшего музыку под цель и настроение пользователя с помощью ChatGPT API. Его побочной целью был сбор аудитории перед запуском подписки.",
        },
      ],
    },
    {
      header: [{ en: "About social media", ru: "Про каналы продвижения\n☄" }],
      text: [
        {
          en: "Also we developed our communities. The content categories included announcements, posts about the history of emotions and their reflection in music, insights from casdev, and interactives. Plus, we created 20 mood playlists on Yandex Music under the Wō brand.",
          ru: "Параллельно мы развивали наши сообщества. Рубрикатор включал анонсы, посты о истории эмоций и их отражении в музыке, инсайты из касдева и интерактивов. Также на Я.Музыке было создано 20 mood-плейлистов под брендом Wō.",
        },
      ],
    },
    {
      header: [{ en: "Market analysis", ru: "Бизнес-аналитика" }],
      text: [
        {
          en: "To understand how to sell it, we assessed the market potential and the product's ability to generate revenue. PESTEL and SWOT analyses provided insights into the project's strengths and weaknesses and how to mitigate threats by leveraging its strengths.",
          ru: "Для того, чтобы понять как это продавать, мы просчитали потенциал рынка и способность продукта генерировать деньги. PESTEL и SWOT дали нам понимание, какие у проекта преимущества и недостатки, и как снизить угрозы за счет сильных сторон.",
        },
      ],
      links: [
        {
          text: [{ en: "the market potential", ru: "потенциал рынка" }],
          url: "https://www.figma.com/design/ZlOtk8Vhh97tBSRWBRtT1t/Shareable?node-id=179-2201&t=npGiMj53g40iHfme-1",
        },
      ],
    },
    {
      header: [
        {
          en: "Qualitative research & MVP3",
          ru: "Качественное исследование & MVP3",
        },
      ],
      text: [
        {
          en: "Solution Interviews confirmed that the basic mechanics are clear to people. The final version of the MVP was created to attract initial sales and validate the product's viability. Subscriptions were purchased directly within the bot, without transitioning to third-party applications.",
          ru: "Решенческие интервью подтвердили: базовая механика понятна людям. Финальная версия MVP была сделана для привлечения первых продаж и проверки жизнеспособности продукта. Подписка покупалась прямо в боте, без перехода в сторонние приложения.",
        },
      ],
    },
    {
      header: [
        {
          en: "Second landing & MVP3 promotion",
          ru: "Второй лендинг & продвижение MVP3",
        },
      ],
      text: [
        {
          en: "To promote MVP3, a second landing page was created. Its secondary goal was to increase the number of subscribers in the communities. The site attracted 617 unique users, and the conversion rate for the goals was 1.91%.",
          ru: "Для продвижения MVP3 был создан второй лендинг. Его побочной целью было увеличить количество подписчиков в сообществах. 617 уникальных пользователей посетили сайт, конверсия по целям составила 1.91%.",
        },
      ],
      links: [
        {
          text: [{ en: "second landing page", ru: "второй лендинг" }],
          url: "https://wo.artdesignandprooomotion.ru/",
        },
      ],
    },
    {
      header: [{ en: "About numbers", ru: "Про цифры" }],
      text: [
        {
          en: "Over the year, we spent 317k tokens, launched 14 ad. campaigns, and created 6.3k Figma frames. Wō was also presented at 1 international forum, receiving 1 business proposal. Reached ~91k users, and earned 2k from sales.",
          ru: "За год потратили 317к токенов, запустлии 14 рекламных кампаний, создали 6.3к фреймов. А еще презентовали Wō на 1 международном форуме, получив 1 предложение по запуску проекта. Охватили ~91к пользователей и заработали 2к с продаж.",
        },
      ],
      links: [
        {
          text: [{ en: "1 international forum", ru: "1 международном форуме" }],
          url: "https://facecast.net/v/ntqgl4?t=18591s",
        },
        {
          text: [{ en: "1 competition", ru: "1 конкурс" }],
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/table/TA3/?report=objectonly",
        },
      ],
    },
  ],
  layout: [
    {
      component: "EmblaCarousel",
      sliderIndex: 0,
      references: "about",
    },
    {
      component: "A_InfoBlock",
      textIndex: 0,
      $body: true,
      references: "contextproblem",
    },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [0, 1],
    },
    {
      component: "A_InfoBlock",
      textIndex: 1,
      $body: true,
      references: "researchta",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 1,
    },
    { component: "A_InfoCard", textIndex: 2, references: ["research"] },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [2, 3],
      references: "trendbench",
    },
    {
      component: "A_InfoBlock",
      textIndex: 3,
      $body: true,
      references: "visualresearch",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 2,
    },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [4, 5, 6, 7, 8, 9],
    },
    {
      component: "A_InfoBlock",
      textIndex: 4,
      $body: true,
      references: "probleminterview",
    },
    {
      component: "M_CardsBlocksGrid",
      smallCardIndex: [0, 1, 2],
      references: "interview",
    },
    {
      component: "A_InfoBlock",
      textIndex: 5,
      $body: true,
      references: "brand",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 3,
      references: "branding",
    },
    {
      component: "M_LinkCardsGrid",
      linkCardIndex: [0, 1],
      references: ["userflow", "brandplatform"],
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 4,
      references: "identity",
    },
    {
      component: "A_InfoCard",
      textIndex: [6, 7],
      references: "aboutassets1",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 5,
      references: "pmerch",
    },
    { component: "M_CaseImagesGrid", imageIndices: [10, 11, 12] },
    {
      component: "M_LinkCardsGrid",
      linkCardIndex: [2],
      references: ["styleguide"],
    },
    { component: "M_CaseImagesGrid", imageIndices: [13, 14, 15, 16, 17] },
    {
      component: "A_InfoBlock",
      textIndex: 8,
      $body: true,
      references: "dassets",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 6,
    },
    { component: "M_CaseImagesGrid", imageIndices: [18, 19, 20] },
    {
      component: "A_InfoBlock",
      textIndex: 9,
      $body: true,
      references: "product",
    },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [21, 22],
      references: "MVP1",
    },
    {
      component: "M_LinkCardsGrid",
      linkCardIndex: [3],
      references: ["designsystem"],
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 7,
      references: "scenarios",
    },
    {
      component: "M_UIShow",
      uiShowIndex: 0,
      references: "scenario1",
    },
    {
      component: "M_UIShow",
      uiShowIndex: 1,
      references: "scenario2",
    },
    {
      component: "M_UIShow",
      uiShowIndex: 2,
      references: "scenario3",
    },
    {
      component: "A_InfoCard",
      textIndex: [10, 11],
      references: "mvp2",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 8,
      references: "mediachannels",
    },
    {
      component: "A_InfoBlock",
      textIndex: 12,
      $body: true,
      references: "marketanalysis",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 9,
      references: "market",
    },
    {
      component: "A_InfoBlock",
      textIndex: 13,
      $body: true,
      references: "mvp3",
    },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [23, 24],
    },
    {
      component: "A_InfoBlock",
      textIndex: 14,
      $body: true,
      references: "mvp3promo",
    },
    {
      component: "M_CaseImagesGrid",
      imageIndices: [25, 26, 27],
    },
    {
      component: "A_InfoBlock",
      textIndex: 15,
      $body: true,
      references: "mvp3promo",
    },
    {
      component: "EmblaCarousel",
      sliderIndex: 10,
      references: "allres",
    },
  ],
  menuItems: [
    {
      header: [
        {
          title: {
            en: "—\u2002About Wo",
            ru: "—\u2002О проекте",
          },
          reference: "about",
        },
      ],
      subItems: [
        {
          title: {
            en: "Context & Problem",
            ru: "Контекст и проблематика",
          },
          reference: "contextproblem",
        },
        {
          title: {
            en: "Survey & TA",
            ru: "Опрос и ЦА",
          },
          reference: "researchta",
        },
      ],
    },
    {
      header: [
        {
          title: {
            en: "—\u2002Research",
            ru: "—\u2002Ресерч",
          },
          reference: "research",
        },
      ],
      subItems: [
        {
          title: {
            en: "Trendwatching & Benchmarking",
            ru: "Трендвотчинг и бенчмаркинг",
          },
          reference: "trendbench",
        },
        {
          title: {
            en: "Visual Research",
            ru: "Визуальное исследование",
          },
          reference: "visualresearch",
        },
        {
          title: {
            en: "Problem Interview",
            ru: "Проблемное интервью",
          },
          reference: "probleminterview",
        },
        {
          title: {
            en: "Insights from TA",
            ru: "Инсайты из интервью",
          },
          reference: "interview",
        },
      ],
    },
    {
      header: [
        {
          title: {
            en: "—\u2002Branding & Identity",
            ru: "—\u2002Брендинг и айдентика",
          },
          reference: "brand",
        },
      ],
      subItems: [
        {
          title: {
            en: "Brand Components",
            ru: "Составляющие бренда",
          },
          reference: "branding",
        },
        {
          title: {
            en: "Userflow",
            ru: "Юзерфлоу",
          },
          reference: "userflow",
        },
        {
          title: {
            en: "Brand Platform",
            ru: "Платформа бренда",
          },
          reference: "brandplatform",
        },
        {
          title: {
            en: "Identity",
            ru: "Айдентика",
          },
          reference: "identity",
        },
        {
          title: {
            en: "About identity components",
            ru: "Про носители",
          },
          reference: "aboutassets1",
        },
        {
          title: {
            en: "Physical merch",
            ru: "Физические носители",
          },
          reference: "pmerch",
        },
        {
          title: {
            en: "Styleguide",
            ru: "Стайлгайд",
          },
          reference: "styleguide",
        },
        {
          title: {
            en: "Digital assets",
            ru: "Диджитальные носители",
          },
          reference: "dassets",
        },
      ],
    },
    {
      header: [
        {
          title: {
            en: "—\u2002Product",
            ru: "—\u2002Продукт",
          },
          reference: "product",
        },
      ],
      subItems: [
        {
          title: {
            en: "About MVP1",
            ru: "Про MVP1",
          },
          reference: "MVP1",
        },
        {
          title: {
            en: "Design System",
            ru: "Дизайн-система",
          },
          reference: "designsystem",
        },
        {
          title: {
            en: "User Scenarios",
            ru: "Сценарии",
          },
          reference: "scenarios",
        },
        {
          title: {
            en: "Scenario I",
            ru: "Сценарий I",
          },
          reference: "scenario1",
        },
        {
          title: {
            en: "Scenario II",
            ru: "Сценарий II",
          },
          reference: "scenario2",
        },
        {
          title: {
            en: "Scenario III",
            ru: "Сценарий III",
          },
          reference: "scenario3",
        },
        {
          title: {
            en: "MVP2 & Promotion",
            ru: "MVP2 & Продвижение",
          },
          reference: "mvp2",
        },
        {
          title: {
            en: "Media channels",
            ru: "Каналы продвижения",
          },
          reference: "mediachannels",
        },
        {
          title: {
            en: "Market Analysis",
            ru: "Анализ рынка",
          },
          reference: "marketanalysis",
        },
        {
          title: {
            en: "Market, Unit economy, Lean Canvas, PESTEL, SWOT, Funnels",
            ru: "Рынок, Юнит-экономика, Лин-канвас, PESTEL, SWOT, Воронки",
          },
          reference: "market",
        },
        {
          title: {
            en: "MVP3",
            ru: "MVP3",
          },
          reference: "mvp3",
        },
        {
          title: {
            en: "MVP3 promotion",
            ru: "Продвижение MVP3",
          },
          reference: "mvp3promo",
        },
        {
          title: {
            en: "Overall results",
            ru: "Результаты",
          },
          reference: "allres",
        },
      ],
    },
  ],
};
