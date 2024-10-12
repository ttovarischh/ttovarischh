import React from "react";
import { FlexBox, PP_24 } from "../Quarks";
import styled, { useTheme } from "styled-components";
import useConstructTextWithLinks from "../../hooks/useConstructTextWithLinks";
import Image from "../Quarks/Image";
import { AboutMeCard, Achievement } from "../../db/types";
import Video from "../Quarks/Video";

interface AboutCardProps {
  card: AboutMeCard | Achievement;
  currentLanguage: "en" | "ru";
  rotation?: string;
}

const AboutCardWrapper = styled(FlexBox)<{ $rotation?: string }>`
  padding: 12px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.cards.bg};
  transform: ${({ $rotation }) => $rotation};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: all 0.5s ease;

    &:hover {
      opacity: 0.5;
    }
  }

  img,
  video {
    width: 24.01vw;
    height: 24.01vw;
    flex: none;
    cursor: default;
  }

  p {
    margin: 0px 4px !important;
    max-width: 85%;
  }
`;

const AchievementCardWrapper = styled.a`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  transition: all 0.8s ease-out;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.medium_grey} !important;
  }

  p {
    margin: 0px 4px !important;
    max-width: 85%;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: inherit;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.6);

    img {
      transform: scale(1.01);
    }
  }
`;

const AboutCardImageWrapper = styled.div<{ $achievement: boolean }>`
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  width: 100%;
  aspect-ratio: ${({ $achievement }) => ($achievement ? "1/0.8" : "1/1")};
  height: auto;
  border-radius: 8px;
  background-color: ${({ $achievement, theme }) =>
    $achievement ? theme.black : "#000000"};
  overflow: hidden;
`;

const A_AboutCard: React.FC<AboutCardProps> = ({
  card,
  currentLanguage,
  rotation,
}) => {
  const isAchievement = (
    card: Achievement | AboutMeCard
  ): card is Achievement => {
    return "year" in card;
  };

  const theme = useTheme();

  const constructedText = useConstructTextWithLinks(
    card.text[currentLanguage],
    currentLanguage,
    isAchievement(card) ? undefined : card.links
  );

  const isVideo = (src: string): boolean => {
    return src.includes(".webm");
  };

  if (isAchievement(card)) {
    return (
      <AchievementCardWrapper href={card.link} target="_blank">
        <AboutCardImageWrapper $achievement={true}>
          <Image src={card.imgSrc} alt="AboutCard Image" />
        </AboutCardImageWrapper>
        <PP_24 color={theme.white}>
          {card.text[currentLanguage]} / <span>{card.year}</span>
        </PP_24>
      </AchievementCardWrapper>
    );
  } else {
    return (
      <AboutCardWrapper $rotation={rotation}>
        <AboutCardImageWrapper $achievement={false}>
          {isVideo(card.imgSrc) ? (
            <Video src={card.imgSrc} shouldAutoplay={true} />
          ) : (
            <Image src={card.imgSrc} alt="AboutCard Image" />
          )}
        </AboutCardImageWrapper>
        <PP_24 color={theme.medium_grey}>{constructedText}</PP_24>
      </AboutCardWrapper>
    );
  }
};

export default A_AboutCard;
