import React from "react";
import styled from "styled-components";
import O_ProjectCard from "../Organisms/O_ProjectCard";
import { FlexBox } from "../Quarks";
import { Project } from "../../db/types";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface ProjectsGridProps {
  projects: Project[];
  featured?: boolean;
  currentLanguage: "en" | "ru";
  fadeOutStates?: boolean[];
  similar?: boolean;
  homepage?: boolean;
}

// const ProjectsGrid = styled.div`
//   padding-left: 2.5vw;
//   padding-right: 2.5vw;
// `;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: calc(16px + env(safe-area-inset-left, 0px));
  padding-right: calc(16px + env(safe-area-inset-right, 0px));

  ${media.tablets} {
    display: grid;
    grid-gap: 1.04vw;
    grid-template-columns: 1fr 1fr;
  }

  ${media.tabletsL} {
    display: grid;
    grid-gap: 1.04vw;
    grid-template-columns: 1fr 1fr;
  }
`;

// const BgGradient = styled.img`
//   position: absolute;
//   width: 160vw;
//   height: 80vw;
//   left: calc(50% - 80vw);
//   top: calc(35% - 40vw);
//   z-index: -1;
// `;

// const BgGradient = styled.img`
//   position: absolute;
//   width: 160vw;
//   height: 80vw;
//   left: calc(50% - 80vw);
//   top: calc(35% - 40vw);
//   z-index: -1;
// `;

const BgGradient = styled.img`
  position: absolute;
  width: 100vw;
  height: auto;
  // left: calc(50% - 280vw);
  top: -17%;
  // top: calc(15% - 240vw);
  z-index: -1;
  margin-left: calc(-16px - env(safe-area-inset-left, 0px));

  ${media.phoneLansdscape} {
    // display: none;
    top: -60%;
  }

  ${media.tablets} {
    // display: none;
    top: -89%;
  }

  ${media.tabletsL} {
    // display: none;
    top: -50%;
  }
`;

const FeaturedProjectsGrid = styled(FlexBox)<{
  $similar?: boolean;
  $homepage?: boolean;
}>`
  position: relative;
  flex-direction: ${($similar) => ($similar ? "row" : "column")};
  // gap: ${($similar) => ($similar ? "1.04vw" : "20px")};
  gap: 12px;
  justify-content: center;
  box-sizing: border-box;
  padding-left: calc(16px + env(safe-area-inset-left, 0px));
  padding-right: calc(16px + env(safe-area-inset-right, 0px));
  // background: blue;
  // overflow: visible;

  ${media.phoneLansdscape} {
    display: ${({ $homepage }) => ($homepage ? "flex" : "grid")};
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.tablets} {
    display: ${({ $homepage }) => ($homepage ? "flex" : "grid")};
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.tabletsL} {
    display: ${({ $homepage }) => ($homepage ? "flex" : "grid")};
    grid-template-columns: repeat(3, 1fr);
  }
`;

const T_ProjectsGrid = ({
  projects,
  featured,
  currentLanguage,
  fadeOutStates = [],
  similar,
  homepage,
}: ProjectsGridProps) => {
  const selectedProjects = projects.filter((_, index) =>
    [0, 2, 3].includes(index)
  );
  const { isTablet, isPhoneLandscape, isTabletLandscape } = useScreenSize();

  if (featured) {
    return (
      <FeaturedProjectsGrid $similar={similar} $homepage={homepage}>
        {similar && (
          <BgGradient
            src={
              isTabletLandscape
                ? "/assets/images/pc.webp"
                : isTablet
                ? "/assets/images/tablet_v.webp"
                : isPhoneLandscape
                ? "/assets/images/mob_h.webp"
                : "/assets/images/mob_v.webp"
            }
          />
        )}
        {similar
          ? projects.map((project) => (
              <O_ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                src={
                  isPhoneLandscape || isTablet || isTabletLandscape
                    ? project.vertical_cover!
                    : project.horisontal_cover!
                }
                deliverables={project.short_deliverables}
                type={project.type}
                currentLanguage={currentLanguage}
                s_description={project.s_description}
                vertical={similar}
              />
            ))
          : selectedProjects.map((project) => (
              <O_ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                src={project.horisontal_cover}
                deliverables={project.short_deliverables}
                type={project.type}
                currentLanguage={currentLanguage}
                s_description={project.s_description}
                vertical={similar}
              />
            ))}
      </FeaturedProjectsGrid>
    );
  } else {
    return (
      <ProjectsGrid>
        {projects.map((project, index) => (
          <O_ProjectCard
            works
            key={project.id}
            name={project.name}
            description={project.description}
            src={project.horisontal_cover}
            deliverables={project.short_deliverables}
            type={project.type}
            currentLanguage={currentLanguage}
            s_description={project.s_description}
            filterTags={project.filterTags}
            year={project.year}
            fadeOut={fadeOutStates![index]}
            locked={project.locked}
            highlight={
              (isTablet || isTabletLandscape) && (index === 2 || index === 5)
            }
          />
        ))}
      </ProjectsGrid>
    );
  }
};

export default T_ProjectsGrid;
