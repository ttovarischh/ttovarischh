export interface LayoutItem {
  component: string;
  textIndex?: number | Array<number>;
  linkCardIndex?: number | Array<number>;
  $body?: boolean;
  imageIndices?: number[];
  references?: any;
  smallCardIndex?: number | Array<number>;
  uiShowIndex?: number;
  sliderIndex?: any;
}

interface Slide {
  imgSrc: string;
  description: {
    en: string;
    ru: string;
  };
}

interface Slider {
  slides: Slide[];
}

export interface MenuItem {
  header: {
    title: {
      en: string;
      ru: string;
    };
    reference: string;
  }[];
  subItems: {
    title: {
      en: string;
      ru: string;
    };
    reference: string;
  }[];
}

export interface Work {
  top: Array<WorkItem>;
  bottom: Array<WorkItem>;
}

interface WorkItem {
  image_src: string;
  image_description: Array<Description>;
  link?: string;
}

interface Description {
  en: string;
  ru: string;
}

export interface About {
  currently: {
    en: string;
    ru: string;
  };
  jobless?: boolean;
  based: {
    en: string;
    ru: string;
  };
  who: {
    en: string;
    ru: string;
  };
  aboutMeCards: Array<AboutMeCard>;
  aboutMeText: {
    header: { en: string; ru: string };
    text: {
      en: string;
      ru: string;
    };
    ps: { en: string; ru: string };
  };
  contactMeLinks: Array<{
    name: string;
    url: string;
  }>;
  followMeLinks: Array<{
    name: string;
    url: string;
  }>;
  bigLinks: Array<{
    name: { en: string; ru: string };
    url: { en: string; ru: string };
  }>;
  workExperience: Array<WorkExperienceItem>;
  education: Array<EducationItem>;
  skills: Array<SkillItem>;
  achievements: Array<Achievement>;
}

export interface Achievement {
  imgSrc: string;
  text: {
    en: string;
    ru: string;
  };
  year: string;
  link: string;
}

export interface AboutMeCard {
  imgSrc: string;
  text: {
    en: string;
    ru: string;
  };
  links?: Array<{
    text: Array<{ en: string; ru: string }>;
    url: string;
  }>;
}

export interface EducationItem {
  iconName: string;
  organisation: {
    name: {
      en: string;
      ru: string;
    };
    url: string;
  };
  typeYear: {
    en: string;
    ru: string;
  };
  specialization: Array<{
    text: {
      en: string;
      ru: string;
    };
    url: string;
  }>;
  achievements: Array<{
    text: {
      en: string;
      ru: string;
    };
  }>;
  button: {
    text: {
      en: string;
      ru: string;
    };
    url: string;
  };
}

export interface WorkExperienceItem {
  role: {
    en: string;
    ru: string;
  };
  organisation: {
    text: {
      en: string;
      ru: string;
    };
    url: string;
  };
  year: {
    en: string;
    ru: string;
  };
  responsibilities: Array<{
    text: {
      en: string;
      ru: string;
    };
  }>;
  achievements: Array<{
    text: {
      en: string;
      ru: string;
    };
  }>;
}

export interface SkillItem {
  name: {
    en: string;
    ru: string;
  };
  typeOf: {
    en: string;
    ru: string;
  };
  image_src: string;
  text: {
    en: string;
    ru: string;
  };
  techTags: string[];
}

export type AboutCard = AboutMeCard | Achievement;

export interface Project {
  id: number;
  similarCases: number[];
  locked?: boolean;
  shortie?: boolean;
  name: {
    en: string;
    ru: string;
  };
  type: {
    en: string;
    ru: string;
  };
  year: string;
  timeline: {
    en: string;
    ru: string;
  };
  short_deliverables: {
    en: string;
    ru: string;
  };
  deliverables: {
    en: string;
    ru: string;
  };
  filterTags: {
    name: {
      en: string;
      ru: string;
    };
    value: string;
  }[];
  role: {
    en: string;
    ru: string;
  };
  organisation: string;
  status: {
    en: string;
    ru: string;
  };
  team?: {
    imageSrc: string;
    link: string;
  }[];
  s_description: {
    en: string;
    ru: string;
  };
  slider: Slider[];
  description: {
    en: string;
    ru: string;
  };
  vertical_cover?: string;
  horisontal_cover: string;
  cover: string;
  svgHeaderPath: string;
  links: Array<{
    name: { en: string; ru: string };
    url: string;
  }>;
  smallCards: Array<{
    headerCardText: Array<{ en: string; ru: string }>;
    headerCardIcon: string;
    mainCardText: Array<{ en: string; ru: string }>;
    tags: Array<{ en: Array<string>; ru: Array<string> }>;
  }>;
  uiShow: Array<{
    imgSrc: string;
    headerA: Array<{ en: string; ru: string }>;
    textA: Array<{ en: string; ru: string }>;
    headerB: Array<{ en: string; ru: string }>;
    textB: Array<{ en: Array<string>; ru: Array<string> }>;
  }>;
  link_cards: Array<{
    image_src: string;
    header: Array<{ en: string; ru: string }>;
    text: Array<{ en: string; ru: string }>;
    link_text: Array<{ en: string; ru: string }>;
    url: string;
  }>;
  images: Array<{
    src: string;
    description?: Array<{ en: string; ru: string }>;
    shouldAutoplay?: boolean;
    poster?: string;
  }>;
  texts: Array<{
    header: Array<{ en: string; ru: string }>;
    text: Array<{
      en: string;
      ru: string;
    }>;
    links?: Array<{ text: Array<{ en: string; ru: string }>; url: string }>;
  }>;
  layout: LayoutItem[];
  menuItems: MenuItem[];
}
