import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme, css } from "styled-components";
import { FlexBox, PP_24, PP_14, PP_32, PP_20 } from "../Quarks";
import { Link } from "react-router-dom";
import A_ProjectCover from "../Atoms/A_ProjectCover";
import A_Tag from "../Atoms/A_Tag";
import A_Tooltip from "../Atoms/A_Tooltip";

interface ProjectCardProps {
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  s_description: { en: string; ru: string };
  src: string;
  deliverables: { en: string; ru: string };
  type: { en: string; ru: string };
  currentLanguage: "en" | "ru";
  horisontalOverlay?: boolean;
  overlayColor?: string;
  darkText?: boolean;
  works?: boolean;
  year?: string;
  filterTags?: {
    name: {
      en: string;
      ru: string;
    };
    value: string;
  }[];
  fadeOut?: boolean;
  highlight?: boolean;
  locked?: boolean;
  vertical?: boolean;
}

const CardWrapper = styled.div<{
  $fadeOut?: boolean;
  $highlight?: boolean;
  $locked?: boolean;
}>`
  position: relative;
  display: ${({ $highlight }) => ($highlight ? "grid" : "flex")};
  flex-direction: ${({ $highlight }) => ($highlight ? "row" : "column")};
  grid-template-columns: 4fr 2fr;
  grid-column-gap: 1.04vw;
  background-color: ${({ theme }) => theme.cards.bg};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: ${({ $locked }) => ($locked ? "visible" : "hidden")};
  cursor: ${({ $locked }) => ($locked ? "none" : "pointer")};
  transition: all 0.3s ease-out;
  opacity: ${({ $fadeOut }) => ($fadeOut ? 0 : 1)};
  transform: translateY(${({ $fadeOut }) => ($fadeOut ? "10px" : "0px")});

  &:hover {
    box-shadow: ${({ $locked, theme }) =>
      !$locked ? `0px 10px 30px ${theme.boxShadows.projectCards}` : "none"};

    img {
      transform: scale(${({ $locked }) => ($locked ? "none" : "1.01")});
    }
  }

  > * {
    cursor: ${({ $locked }) => $locked && "none"};
  }

  img {
    width: 100%;
    transition: transform 0.5s ease;
    cursor: ${({ $locked }) => ($locked ? "none" : "pointer")};
    aspect-ratio: 16/9;
    object-position: top;
  }
`;

const MovingCardWrapper = styled(FlexBox)<{
  $isVisible: boolean;
  $vertical?: boolean;
}>`
  background-color: ${({ theme }) => theme.main_grey};
  width: ${({ $vertical }) => ($vertical ? "auto" : "63.02vw")};
  box-sizing: border-box;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
  padding: ${({ $vertical }) => ($vertical ? "12px" : "20px")};
  border: ${({ $vertical }) =>
    $vertical ? "1px solid hsla(0, 0%, 0%, 0.045)" : "none"};
  box-shadow: ${({ $vertical }) =>
    $vertical ? "0px 0px 15px rgba(0, 0, 0, 0.7)" : "none"};

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.6);

    img {
      transform: scale(1.01);
    }
  }

  img {
    width: ${({ $vertical }) => ($vertical ? "19.11vw" : "100%")};
    transition: transform 0.5s ease;
    cursor: pointer;
    border-radius: ${({ $vertical }) => ($vertical ? "8px" : "10px")};
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
  $works?: boolean;
  $highlight?: boolean;
  $vertical?: boolean;
}>`
  position: ${({ $horisontalOverlay }) =>
    $horisontalOverlay ? "absolute" : "relative"};
  background: ${({ $overlayColor }) =>
    $overlayColor
      ? `linear-gradient(180deg, rgba(${$overlayColor}, 0) 0%, rgba(${$overlayColor}, 0.9) 100% )`
      : "none"};
  bottom: 0;
  width: 100%;
  height: ${({ $highlight }) => ($highlight ? "100%" : "auto")};
  align-content: space-between;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  margin-top: ${({ $vertical }) => ($vertical ? "12px" : "0px")};
  padding: ${({ $works, $highlight, $vertical }) =>
    $works && $highlight ? "0px" : $vertical ? "0px 4px " : "20px 0px 0px"};

  p {
    max-width: ${({ $highlight }) => ($highlight ? "90%" : "auto")};
  }
`;

const TagsWrapper = styled(FlexBox)<{
  $highlight?: boolean;
}>`
  justify-content: space-between;
  width: 100%;
  flex-direction: ${({ $highlight }) =>
    $highlight ? "column-reverse" : "row"};
  gap: 8px;
`;

const TagsInnerWrapper = styled(FlexBox)<{
  $highlight?: boolean;
}>`
  gap: 8px;
  width: ${({ $highlight }) => ($highlight ? "100%" : "auto")};

  > * {
    white-space: nowrap;
  }
`;

const O_ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  currentLanguage,
  src,
  deliverables,
  type,
  works,
  s_description,
  filterTags,
  year,
  fadeOut,
  highlight,
  description,
  locked,
  vertical,
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

  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardElement = event.currentTarget as HTMLDivElement;
    const cardRect = cardElement.getBoundingClientRect();
    const tooltipWidth = 100;
    const tooltipHeight = 30;

    let x = event.clientX - cardRect.left - 110;
    let y = event.clientY - cardRect.top - 50;

    if (x + tooltipWidth > window.innerWidth) {
      x = window.innerWidth - tooltipWidth;
    }
    if (y + tooltipHeight > window.innerHeight) {
      y = window.innerHeight - tooltipHeight;
    }

    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${x}px`;
      tooltipRef.current.style.top = `${y}px`;
    }
  };

  if (works) {
    return (
      <Link
        to={`/${formattedName}`}
        style={{ gridColumn: highlight ? "1 / -1" : "auto" }}
        onClick={(e) => {
          if (locked) {
            e.preventDefault();
          }
        }}
      >
        <CardWrapper
          className="card-wrapper"
          $fadeOut={fadeOut}
          $highlight={highlight}
          onMouseMove={handleMouseMove}
          $locked={locked}
        >
          {locked && <A_Tooltip ref={tooltipRef} />}
          <A_ProjectCover
            cover={src}
            horisontal
            projectName={name["en"]}
            $imageBorderRadius="10px"
          />
          <ProjectInfoWrapper $works={works} $gap="28px" $highlight={highlight}>
            <FlexBox $direction="column" $gap={highlight ? "12px" : "4px"}>
              <PP_32 medium lineHeight="32px">
                {name[currentLanguage]}
              </PP_32>
              <PP_20 medium color={theme.medium_grey}>
                {highlight
                  ? description[currentLanguage]
                  : s_description[currentLanguage]}
              </PP_20>
            </FlexBox>
            <TagsWrapper $highlight={highlight}>
              <TagsInnerWrapper $highlight={highlight}>
                {filterTags!.map((filterTag, index) => (
                  <A_Tag
                    small
                    tagText={filterTag.name[currentLanguage]}
                    key={index}
                  />
                ))}
              </TagsInnerWrapper>
              <A_Tag small tagText={year!} $header />
            </TagsWrapper>
          </ProjectInfoWrapper>
        </CardWrapper>
      </Link>
    );
  } else {
    return (
      <Link to={`/${formattedName}`}>
        <MovingCardWrapper
          $direction="column"
          $isVisible={$isVisible}
          ref={cardRef}
          $vertical={vertical}
        >
          <A_ProjectCover cover={src} horisontal projectName={name["en"]} />
          <ProjectInfoWrapper $vertical={vertical}>
            <FlexBox $direction="column" $gap="4px">
              <PP_24 medium lineHeight="1.5rem">
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
        </MovingCardWrapper>
      </Link>
    );
  }
};

export default O_ProjectCard;
