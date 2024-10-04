import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  src: string;
}

const CardWrapper = styled(FlexBox)`
  background-color: ${({ theme }) => theme.main_grey};
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
}) => {
  const formattedName = name.en.toLowerCase().replace(/ /g, "-");

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as "en" | "ru";

  return (
    <Link to={`/${formattedName}`}>
      <CardWrapper $direction="column">
        <h2>{name[currentLanguage]}</h2>
        <p>{description[currentLanguage]}</p>
        <ProjectCover src={src} alt={name[currentLanguage]} />
      </CardWrapper>
    </Link>
  );
};

export default OProjectCard;
