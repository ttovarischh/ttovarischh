import React from "react";
import styled from "styled-components";
import OProjectCard from "../Organisms/OProjectCard";

interface Project {
  id: number;
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  src: string;
  cover: string;
}

interface TProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-column-gap: 2vw;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const TProjectsGrid: React.FC<TProjectsGridProps> = ({ projects }) => {
  return (
    <ProjectsGrid>
      {projects.map((project) => (
        <OProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          src={project.cover}
        />
      ))}
    </ProjectsGrid>
  );
};

export default TProjectsGrid;
