import React from "react";
import { FlexBox, PP_18, PP_24 } from "../Quarks";
import styled, { useTheme } from "styled-components";
import useConstructTextWithLinks from "../../hooks/useConstructTextWithLinks";
import Image from "../Quarks/Image";
import { AboutMeCard, Achievement } from "../../db/types";
import Video from "../Quarks/Video";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface AboutCardProps {
  card: AboutMeCard | Achievement;
  currentLanguage: "en" | "ru";
  rotation?: string;
}

const AboutCardWrapper = styled(FlexBox)<{ $rotation?: string }>`
  padding: var(--small-card-padding);
  flex-direction: column;
  gap: 10px;
  border-radius: var(--card-border-radius);
  background-color: ${({ theme }) => theme.cards.bg};
  transform: ${({ $rotation }) => $rotation};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
  }

  img,
  video {
    width: 20rem;
    height: 20rem;
    flex: none;
  }

  p {
    margin: 4px;
  }

  ${media.tablets} {
    img,
    video {
      width: 24.01vw;
      height: 24.01vw;
      flex: none;
      cursor: default;
    }
  }

  ${media.laptop} {
    gap: 12px;
    a {
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
      max-width: 85%;
    }
  }
`;

const AchievementCardWrapper = styled.a`
  display: flex;
  padding: var(--small-card-padding);
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border-radius: var(--card-border-radius);
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  span {
    color: ${({ theme }) => theme.medium_grey} !important;
  }

  p {
    margin: 0px 4px;
    max-width: 85%;
  }

  img {
    border-radius: var(--incard-img-border-radius);
    width: 100%;
    height: 100%;
    cursor: inherit;
  }

  ${media.tabletsL} {
    justify-content: start;
  }

  ${media.laptop} {
    gap: 12px;
    transition: all 0.8s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.6);

      img {
        transform: scale(1.01);
      }
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
  border-radius: var(--incard-img-border-radius);
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

  const { isLaptop } = useScreenSize();

  if (isAchievement(card)) {
    return (
      <AchievementCardWrapper href={card.link} target="_blank">
        <AboutCardImageWrapper $achievement={true}>
          <Image src={card.imgSrc} alt="AboutCard Image" />
        </AboutCardImageWrapper>
        {isLaptop ? (
          <PP_24 color={theme.white}>
            {card.text[currentLanguage]} / <span>{card.year}</span>
          </PP_24>
        ) : (
          <PP_18 color={theme.white}>
            {card.text[currentLanguage]} / <span>{card.year}</span>
          </PP_18>
        )}
      </AchievementCardWrapper>
    );
  } else {
    return (
      <AboutCardWrapper $rotation={rotation}>
        <AboutCardImageWrapper $achievement={false}>
          {isVideo(card.imgSrc) ? (
            <Video
              src={card.imgSrc}
              shouldAutoplay={true}
              fallback={card.fallback}
            />
          ) : (
            <Image src={card.imgSrc} alt="AboutCard Image" />
          )}
        </AboutCardImageWrapper>
        {isLaptop ? (
          <PP_24 color={theme.medium_grey}>{constructedText}</PP_24>
        ) : (
          <PP_18 color={theme.medium_grey}>{constructedText}</PP_18>
        )}
      </AboutCardWrapper>
    );
  }
};

export default A_AboutCard;
