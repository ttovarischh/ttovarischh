import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../projects'; // Adjust the path as necessary

interface Project {
    id: number;
    name: string;
    description: string;
    cover: string;
}

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);
    const project = projects.find((proj: Project) => proj.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <img src={project.cover} alt={project.name} />
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectPage;
