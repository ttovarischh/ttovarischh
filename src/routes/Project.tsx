import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projects from "../db/projects";
import A_InfoBlock from "../components/Atoms/A_InfoBlock";
import M_CaseImagesGrid from "../components/Molecules/M_CaseImagesGrid";
import { FlexBox } from "../components/Common";
import styled from "styled-components";
import M_ProjectInfo from "../components/Molecules/M_ProjectInfo";
import A_ProjectCover from "../components/Atoms/A_ProjectCover";
import PageMenu from "../components/Molecules/M_PageMenu";
import M_InfoCardsGrid from "../components/Molecules/M_InfoCardsGrid";
import M_LinkCardsGrid from "../components/Molecules/M_LinkCardsGrid";
import M_CardsBlocksGrid from "../components/Molecules/M_CardsBlocksGrid";
import M_FullScreenImage from "../components/Molecules/M_FullScreenImage";
import M_UIShow from "../components/Molecules/M_UIShow";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../components/Atoms/EmblaCarousel";
import "../styles/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const ProjectPageWrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  padding: 0px 2.5vw;
  gap: 180px;
  position: relative; /* Ensure this is necessary */
  height: auto; /* Make sure it has a height based on content */
  overflow: visible; /* Ensure overflow is set appropriately */
`;

const StickyMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;
`;

const ProjectPage: React.FC = () => {
  const { i18n } = useTranslation();
  const { name } = useParams<{ name: string }>();
  const formattedName = name?.toLowerCase();
  const currentLanguage = i18n.language as "en" | "ru";
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);
  const projectPageRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current && projectPageRef.current) {
        const projectPageHeight = projectPageRef.current.offsetHeight;
        menuRef.current.style.height = `${projectPageHeight}px`;
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (projectPageRef.current) {
      resizeObserver.observe(projectPageRef.current);
    }

    handleResize();

    return () => {
      if (projectPageRef.current) {
        resizeObserver.unobserve(projectPageRef.current);
      }
    };
  }, []);

  const handleImageClick = (src: string) => {
    setFullscreenSrc(src);
  };

  const closeFullscreen = () => {
    setFullscreenSrc(null);
  };

  const project = projects.find(
    (proj) => proj.name.en.toLowerCase().replace(/ /g, "-") === formattedName
  );

  if (!project) {
    return <div>Project not found</div>;
  }

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

      <ProjectPageWrapper ref={projectPageRef}>
        {/* <PageMenu
          menuItems={project.menuItems}
          currentLanguage={currentLanguage}
        /> */}
        <StickyMenuWrapper ref={menuRef}>
          <PageMenu
            menuItems={project.menuItems}
            currentLanguage={currentLanguage}
          />
        </StickyMenuWrapper>
        {project.layout.map((item, index) => {
          const textIndex = item.textIndex;
          const smallCardIndex = item.smallCardIndex;
          switch (item.component) {
            case "A_InfoBlock":
              if (textIndex !== undefined) {
                const idx = Array.isArray(textIndex) ? textIndex[0] : textIndex;

                return (
                  <A_InfoBlock
                    key={index}
                    header={project.texts[idx].header[0][currentLanguage]}
                    text={project.texts[idx].text[0][currentLanguage]}
                    links={project.texts[idx].links}
                    $body={item.$body}
                    references={item.references}
                  />
                );
              }
              return null;

            case "EmblaCarousel":
              const sliderSlides = project.slider[item.sliderIndex].slides;
              return (
                <EmblaCarousel
                  key={index}
                  slides={sliderSlides}
                  options={OPTIONS}
                  references={item.references}
                />
              );

            case "M_CaseImagesGrid":
              return (
                <M_CaseImagesGrid
                  key={index}
                  imageIndices={item.imageIndices!}
                  images={project.images}
                  projectName={project.name[currentLanguage]}
                  currentLanguage={currentLanguage}
                  references={item.references}
                  onImageClick={handleImageClick}
                />
              );

            case "A_InfoCard":
              const renderInfoCard = (
                textIndex: number | number[],
                references: any
              ) => {
                let textsArray: Array<{ header: string; text: string }> = [];

                if (Array.isArray(textIndex)) {
                  textsArray = textIndex
                    .map((idx) => {
                      const textItem = project.texts[idx];
                      if (textItem) {
                        return {
                          header: textItem.header[0][currentLanguage],
                          text: textItem.text[0][currentLanguage],
                        };
                      }
                      return null;
                    })
                    .filter(
                      (item): item is { header: string; text: string } =>
                        item !== null
                    );
                } else {
                  const textItem = project.texts[textIndex];
                  if (textItem) {
                    textsArray = [
                      {
                        header: textItem.header[0][currentLanguage],
                        text: textItem.text[0][currentLanguage],
                      },
                    ];
                  }
                }

                return (
                  <M_InfoCardsGrid
                    key={`${textIndex}-${currentLanguage}`}
                    texts={textsArray}
                    references={references}
                  />
                );
              };

              if (textIndex !== undefined) {
                return renderInfoCard(textIndex, item.references);
              }
              return null;

            case "M_LinkCardsGrid":
              const { linkCardIndex } = item;
              const renderLinkCard = (
                linkCardIndex: number | number[],
                references: any
              ) => {
                let linkCardsArray: Array<{
                  image_src: string;
                  header: string;
                  text: string;
                  link_text: string;
                  url: string;
                }> = [];

                const getLocalizedValue = (
                  array: Array<{ en: string; ru: string }>
                ) => {
                  return (
                    array.find((item) => item[currentLanguage])?.[
                      currentLanguage
                    ] || ""
                  );
                };

                if (Array.isArray(linkCardIndex)) {
                  linkCardsArray = linkCardIndex
                    .map((idx) => {
                      const linkItem = project.link_cards[idx];
                      if (linkItem) {
                        return {
                          image_src: linkItem.image_src,
                          header: getLocalizedValue(linkItem.header),
                          text: getLocalizedValue(linkItem.text),
                          link_text: getLocalizedValue(linkItem.link_text),
                          url: linkItem.url,
                        };
                      }
                      return null;
                    })
                    .filter(
                      (
                        item
                      ): item is {
                        image_src: string;
                        header: string;
                        text: string;
                        link_text: string;
                        url: string;
                      } => item !== null
                    );
                } else {
                  const linkItem = project.link_cards[linkCardIndex];
                  if (linkItem) {
                    linkCardsArray = [
                      {
                        image_src: linkItem.image_src,
                        header: getLocalizedValue(linkItem.header),
                        text: getLocalizedValue(linkItem.text),
                        link_text: getLocalizedValue(linkItem.link_text),
                        url: linkItem.url,
                      },
                    ];
                  }
                }

                return (
                  <M_LinkCardsGrid
                    key={`LinkCard ${linkCardIndex}-${currentLanguage}`}
                    linkCards={linkCardsArray}
                    references={references}
                  />
                );
              };

              if (linkCardIndex !== undefined) {
                return renderLinkCard(linkCardIndex, item.references);
              }
              return null;

            case "M_CardsBlocksGrid":
              if (smallCardIndex !== undefined) {
                const indices = Array.isArray(smallCardIndex)
                  ? smallCardIndex
                  : [smallCardIndex];
                const selectedCards = indices.map(
                  (idx) => project.smallCards[idx]
                );

                return (
                  <M_CardsBlocksGrid
                    key={index}
                    smallCards={selectedCards}
                    language={currentLanguage}
                    references={item.references}
                  />
                );
              }

            case "M_UIShow": {
              const uiShowIndex = item.uiShowIndex;

              if (uiShowIndex !== undefined) {
                return (
                  <M_UIShow
                    key={index}
                    uiShow={project.uiShow[uiShowIndex]}
                    language={currentLanguage}
                    references={item.references}
                    projectName={project.name[currentLanguage]}
                  />
                );
              } else {
                console.warn(
                  `uiShowIndex is undefined for item at index ${index}`
                );
                return null;
              }
            }

            default:
              return null;
          }
        })}
      </ProjectPageWrapper>
      <FlexBox
        className="similarProjects"
        $offsetTop="160px"
        style={{ width: "100%", height: "500px", background: "red" }}
      />
      {fullscreenSrc && (
        <M_FullScreenImage
          src={fullscreenSrc}
          $visible={!!fullscreenSrc}
          onClose={closeFullscreen}
        />
      )}
    </div>
  );
};

export default ProjectPage;
