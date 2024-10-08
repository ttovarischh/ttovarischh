import React from "react";
import styled from "styled-components";
import O_ProjectCard from "../Organisms/O_ProjectCard";
import { FlexBox } from "../Quarks";

interface Project {
  id: number;
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  src: string;
  horisontal_cover: string;
  short_deliverables: { en: string; ru: string };
  type: { en: string; ru: string };
  horisontalOverlay?: boolean;
  overlayColor?: string;
  darkText?: boolean;
}

interface TProjectsGridProps {
  projects: Project[];
  featured?: boolean;
  currentLanguage: "en" | "ru";
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-column-gap: 2vw;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const FeaturedProjectsGrid = styled(FlexBox)`
  flex-direction: column;
  gap: 20px;
`;

const TProjectsGrid = ({
  projects,
  featured,
  currentLanguage,
}: TProjectsGridProps) => {
  const selectedProjects = projects.filter((_, index) =>
    [0, 1, 3].includes(index)
  );

  if (featured) {
    return (
      <FeaturedProjectsGrid>
        {selectedProjects.map((project) => (
          <O_ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            src={project.horisontal_cover}
            deliverables={project.short_deliverables}
            type={project.type}
            currentLanguage={currentLanguage}
            horisontalOverlay={project.horisontalOverlay}
            overlayColor={project.overlayColor}
            darkText={project.darkText}
          />
        ))}
      </FeaturedProjectsGrid>
    );
  } else {
    return (
      <ProjectsGrid>
        {projects.map((project) => (
          <O_ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            src={project.horisontal_cover}
            deliverables={project.short_deliverables}
            type={project.type}
            currentLanguage={currentLanguage}
            horisontalOverlay={project.horisontalOverlay}
          />
        ))}
      </ProjectsGrid>
    );
  }
};

export default TProjectsGrid;
