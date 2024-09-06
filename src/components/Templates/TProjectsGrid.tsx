import React from 'react';
import styled from 'styled-components';
import OProjectCard from '../Organisms/OProjectCard'; // Make sure to import your OProjectCard
import { useTranslation } from 'react-i18next'; // If t is needed for translations

interface Project {
    id: number;
    name: string;
    description: string;
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
    const { t } = useTranslation();

    return (
        <ProjectsGrid>
            {projects.map(project => (
                <OProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    src={project.cover}
                    t={t}
                />
            ))}
        </ProjectsGrid>
    );
};

export default TProjectsGrid;
