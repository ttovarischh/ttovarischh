import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme, css } from "styled-components";
import { FlexBox, PP_24, PP_14 } from "../Quarks";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import A_ProjectCover from "../Atoms/A_ProjectCover";

interface ProjectCardProps {
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  src: string;
  deliverables: { en: string; ru: string };
  type: { en: string; ru: string };
  currentLanguage: "en" | "ru";
  horisontalOverlay?: boolean;
  overlayColor?: string;
  darkText?: boolean;
}

const CardWrapper = styled(FlexBox)<{ $isVisible: boolean }>`
  background-color: ${({ theme }) => theme.main_grey};
  width: 63.02vw;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.6);

    img {
      transform: scale(1.01);
    }
  }

  img {
    width: 100%;
    transition: transform 0.5s ease;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`;

const ProjectInfoWrapper = styled(FlexBox)<{
  $horisontalOverlay?: boolean;
  $overlayColor?: string;
  $darkText?: boolean;
}>`
  position: ${({ $horisontalOverlay }) =>
    $horisontalOverlay ? "absolute" : "relative"};
  background: ${({ $overlayColor }) =>
    $overlayColor
      ? `linear-gradient(180deg, rgba(${$overlayColor}, 0) 0%, rgba(${$overlayColor}, 0.9) 100% )`
      : "none"};
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 16px 20px 20px;
`;

const O_ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  currentLanguage,
  src,
  deliverables,
  type,
  horisontalOverlay,
  overlayColor,
  darkText,
}) => {
  const formattedName = name.en.toLowerCase().replace(/ /g, "-");
  const theme = useTheme();

  const [$isVisible, set$IsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            set$IsVisible(true);
          } else {
            set$IsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link to={`/${formattedName}`}>
      <CardWrapper $direction="column" $isVisible={$isVisible} ref={cardRef}>
        <LazyLoad
          offset={200}
          once
          style={{ width: "100%", overflow: "hidden" }}
        >
          <A_ProjectCover
            cover={src}
            horisontal
            projectName={name["en"]}
            $imageBorderRadius="0"
          />
        </LazyLoad>
        <ProjectInfoWrapper
          $horisontalOverlay={horisontalOverlay}
          $overlayColor={overlayColor}
          $darkText={darkText}
        >
          <FlexBox $direction="column" $gap="4px">
            <PP_24
              medium
              color={overlayColor ? theme.mainComp.header : theme.white}
            >
              {name[currentLanguage]}
            </PP_24>
            <PP_14 medium color={theme.medium_grey}>
              {deliverables[currentLanguage]}
            </PP_14>
          </FlexBox>
          <PP_14 medium color={theme.medium_grey}>
            {type[currentLanguage]}
          </PP_14>
        </ProjectInfoWrapper>
      </CardWrapper>
    </Link>
  );
};

export default O_ProjectCard;
