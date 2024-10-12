import React from "react";
import styled from "styled-components";
import O_ProjectCard from "../Organisms/O_ProjectCard";
import { FlexBox } from "../Quarks";
import { Project } from "../../db/types";

interface ProjectsGridProps {
  projects: Project[];
  featured?: boolean;
  currentLanguage: "en" | "ru";
  fadeOutStates?: boolean[];
  similar?: boolean;
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 1.04vw;
  grid-template-columns: 1fr 1fr;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
`;

const BgGradient = styled.img`
  position: absolute;
  width: 160vw;
  height: 80vw;
  left: calc(50% - 80vw);
  top: calc(35% - 40vw);
  z-index: -1;
`;

const FeaturedProjectsGrid = styled(FlexBox)<{ $similar?: boolean }>`
  position: relative;
  flex-direction: ${($similar) => ($similar ? "row" : "column")};
  gap: ${($similar) => ($similar ? "1.04vw" : "20px")};
  justify-content: center;
`;

const T_ProjectsGrid = ({
  projects,
  featured,
  currentLanguage,
  fadeOutStates = [],
  similar,
}: ProjectsGridProps) => {
  console.log(projects);

  const selectedProjects = projects.filter((_, index) =>
    [0, 2, 3].includes(index)
  );

  if (featured) {
    return (
      <FeaturedProjectsGrid $similar={similar}>
        {similar && (
          <BgGradient src="https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design%2Ffinoverlay.webp?alt=media&token=ebcba8a5-012f-477f-9bea-30175533e3b1" />
        )}
        {similar
          ? projects.map((project) => (
              <O_ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                src={project.vertical_cover!}
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
            highlight={index === 2 || index === 5}
            locked={project.locked}
          />
        ))}
      </ProjectsGrid>
    );
  }
};

export default T_ProjectsGrid;
