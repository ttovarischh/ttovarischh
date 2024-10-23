import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_18, PP_32 } from "../Quarks";
import LazyLoad from "react-lazyload";
import Image from "../Quarks/Image";
import A_Button from "../Atoms/A_Button";
import { LinkCardInfo } from "../Atoms/A_LinkCard";
import { media } from "../../styles/mediaQueries";

interface LinkCardsGridProps {
  uiShow: {
    imgSrc: string;
    headerA: Array<{ en: string; ru: string }>;
    textA: Array<{ en: string; ru: string }>;
    headerB: Array<{ en: string; ru: string }>;
    textB: Array<{ en: Array<string>; ru: Array<string> }>;
    fallbackLink?: string;
    poster?: string;
  };
  references?: string[];
  language: "en" | "ru";
  toTop: boolean;
}

const LinkCardWrapper = styled.div<{ $toTop: boolean }>`
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: var(--mobile-padding-8);
  border-radius: var(--card-border-radius);

  gap: var(--mobile-gap-8);
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ $toTop }) => ($toTop ? "-72px" : "0")};

  ${media.phoneLansdscape} {
    width: 63.02vw;
    align-self: center;

    img {
      width: 100%;
    }
  }

  ${media.tablets} {
    width: 63.02vw;
    align-self: center;

    img {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }

  ${media.tabletsL} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 63.02vw;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
    }

    button {
      width: 100%;
    }

    .header {
      line-height: 100%;
    }
  }
`;

const M_UILinkCardsGrid: React.FC<LinkCardsGridProps> = ({
  uiShow,
  references,
  language,
  toTop,
}) => {
  const theme = useTheme();
  return (
    <LinkCardWrapper $toTop={toTop}>
      <LazyLoad offset={200} once style={{ width: "100%" }}>
        <Image
          $linkcard
          src={uiShow.poster!}
          alt={`${uiShow.headerA} thumbnail`}
          $width="100%"
          $aspectRatio={16 / 9}
        />
      </LazyLoad>
      <LinkCardInfo>
        <FlexBox $direction="column" $gap="4px">
          <PP_32 className="header" medium>
            {uiShow.headerA[0][language]}
          </PP_32>
          <PP_18 medium color={theme.medium_grey}>
            {uiShow.textA[0][language]}
          </PP_18>
        </FlexBox>
        <A_Button
          buttonText="Go to Vimeo"
          disabled={!uiShow.fallbackLink}
          handleButtonClick={() => window.open(uiShow.fallbackLink, "_blank")}
        />
      </LinkCardInfo>
    </LinkCardWrapper>
  );
};

export default M_UILinkCardsGrid;
