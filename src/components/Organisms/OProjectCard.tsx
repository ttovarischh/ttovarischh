import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  name: string;
  description: string;
  src: string;
  t: (key: string) => string;
  id: number;
}

const CardWrapper = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectCover = styled.img`
  width: 100%;
  object-fit: cover;
`;

const OProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  src,
  t,
}) => {
  const formattedName = name.toLowerCase().replace(/ /g, "-");

  return (
    <Link to={`/${formattedName}`}>
      <CardWrapper $direction="column">
        <h2>{t(name)}</h2>
        <p>{t(description)}</p>
        <ProjectCover src={src} alt={t(name)} />
      </CardWrapper>
    </Link>
  );
};

export default OProjectCard;
