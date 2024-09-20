import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import projects from "../projects"; // Adjust the path as necessary

interface Project {
  id: number;
  name: string;
  description: string;
  cover: string;
}

const ProjectCover = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProjectPage: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Change id to name
  const formattedName = name?.toLowerCase(); // Ensure case matches

  const project = projects.find(
    (proj: Project) =>
      proj.name.toLowerCase().replace(/ /g, "-") === formattedName
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      {/* <h1>{project.name}</h1> */}
      <ProjectCover src={project.cover} alt={project.name} />
      {/* <p>{project.description}</p> */}
    </div>
  );
};

export default ProjectPage;
