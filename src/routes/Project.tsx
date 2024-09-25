import React from "react";
import { useParams } from "react-router-dom";
import projects from "../projects";
import M_ProjectInfo from "../components/Molecules/M_ProjectInfo";
import A_ProjectCover from "../components/Atoms/A_ProjectCover";
import { useTranslation } from "react-i18next";
import Carousel2 from "../components/Atoms/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../components/Atoms/EmblaCarousel";
import "../styles/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProjectPage: React.FC = () => {
  const { i18n } = useTranslation();
  const { name } = useParams<{ name: string }>();
  const formattedName = name?.toLowerCase();

  const project = projects.find(
    (proj) => proj.name.en.toLowerCase().replace(/ /g, "-") === formattedName
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const currentLanguage = i18n.language as "en" | "ru";

  const items = ["1", "2", "3", "4", "5", "6", "7"];

  const images = [
    "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213024/wo1_jheguq.jpg",
    "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213026/wo2_ppwtw4.jpg",
    "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213028/wo3_ubreoz.jpg",
    "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213025/wo4_k0a0gh.jpg",
    "https://res.cloudinary.com/db64foay5/image/upload/f_auto/q_auto/v1727213022/wo5_s6oy7p.jpg",
  ];

  return (
    <div>
      <M_ProjectInfo
        horisontal
        name={project.name[currentLanguage]}
        type={project.type[currentLanguage]}
        timeline={project.timeline[currentLanguage]}
        deliverables={project.deliverables[currentLanguage]}
      />
      <A_ProjectCover
        cover={project.cover}
        alt={`Cover image of ${project.name[currentLanguage]}`}
      />
      <M_ProjectInfo
        role={project.role[currentLanguage]}
        organisation={project.organisation}
        status={project.status[currentLanguage]}
        s_description={project.s_description[currentLanguage]}
        description={project.description[currentLanguage]}
        links={project.links}
      />
      {/* <Carousel2 visibleItemsCount={3} withIndicator isInfinite>
        {[0, 1, 2, 3, 4, 5].map((i, k) => (
          <div style={{ fontSize: 32 }} key={k}>
            {i}
          </div>
        ))}
      </Carousel2> */}
      <EmblaCarousel slides={images} options={OPTIONS} />
    </div>
  );
};

export default ProjectPage;
