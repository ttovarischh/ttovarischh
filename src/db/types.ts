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

export interface Project {
  id: number;
  name: {
    en: string;
    ru: string;
  };
  type: {
    en: string;
    ru: string;
  };
  timeline: {
    en: string;
    ru: string;
  };
  deliverables: {
    en: string;
    ru: string;
  };
  role: {
    en: string;
    ru: string;
  };
  organisation: string;
  status: {
    en: string;
    ru: string;
  };
  s_description: {
    en: string;
    ru: string;
  };
  slider: Slider[];
  description: {
    en: string;
    ru: string;
  };
  cover: string;
  svgHeaderPath: string;
  links: Array<{ name: string; url: string }>;
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
  }>;
  texts: Array<{
    header: Array<{ en: string; ru: string }>;
    text: Array<{ en: string; ru: string }>;
  }>;
  layout: LayoutItem[];
  menuItems: MenuItem[];
}