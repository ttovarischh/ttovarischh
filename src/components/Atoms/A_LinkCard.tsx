import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_16, PP_18, PP_20, PP_24, PP_32, PP_80 } from "../Quarks";
import A_Button from "./A_Button";
import Image from "../Quarks/Image";
import LazyLoad from "react-lazyload";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface LinkCardProps {
  image_src: string;
  header: string;
  text: string;
  link_text: string;
  url: string;
  disabled?: boolean;
  reference?: string;
  style?: any;
  reverse?: boolean;
}

const LinkCardWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--bigger-card-radius);
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--mobile-padding-8);
  gap: var(--mobile-gap-8);

  img,
  .sk {
    border-radius: var(--incard-img-bigger-border-radius);
  }

  ${media.phoneLansdscape} {
    width: 63.02vw;
  }

  ${media.tablets} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 63.02vw;

    img,
    .sk {
      height: auto;
      min-height: 100%;
    }
  }

  ${media.tabletsL} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 63.02vw;

    img,
    .sk {
      height: auto;
      min-height: 100%;
    }
  }

  ${media.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 63.02vw;
    padding: 0px;
    gap: 0px;

    img,
    .sk {
      height: auto;
      min-height: 100%;
    }
  }
`;

export const LinkCardInfo = styled(FlexBox)`
  justify-content: space-between;
  flex-direction: column;
  padding: 2px;
  gap: 32px;

  button {
    width: 100%;
  }

  :nth-child(1) {
    max-width: 95%;
  }

  ${media.tablets} {
    button {
      width: auto;
    }
  }

  ${media.laptop} {
    padding: 20px 28px 28px;
    .descr {
      max-width: 70%;
    }
    button {
      width: auto;
    }
  }
`;

const A_LinkCard = (props: LinkCardProps) => {
  const theme = useTheme();
  const { isLaptop } = useScreenSize();

  return (
    <LinkCardWrapper id={props.reference || undefined} style={props.style}>
      {props.reverse ? (
        <>
          <LinkCardInfo>
            <FlexBox $direction="column" $gap={isLaptop ? "12px" : "4px"}>
              {isLaptop ? (
                <>
                  <PP_80 medium lineHeight="5rem">
                    {props.header}
                  </PP_80>
                  <PP_24>{props.text}</PP_24>
                </>
              ) : (
                <>
                  <PP_32 medium>{props.header}</PP_32>
                  <PP_18 medium color={theme.medium_grey}>
                    {props.text}
                  </PP_18>
                </>
              )}
            </FlexBox>
            <A_Button
              buttonText={props.link_text}
              disabled={!props.url}
              handleButtonClick={() => window.open(props.url, "_blank")}
            />
          </LinkCardInfo>
          <LazyLoad offset={200} once style={{ width: "100%" }}>
            <Image
              $linkcard
              src={props.image_src}
              alt={`${props.header} thumbnail`}
              $width="100%"
              $aspectRatio={16 / 9}
            />
          </LazyLoad>
        </>
      ) : (
        <>
          <LazyLoad offset={200} once style={{ width: "100%" }}>
            <Image
              $linkcard
              src={props.image_src}
              alt={`${props.header} thumbnail`}
              $width="100%"
              $aspectRatio={16 / 9}
            />
          </LazyLoad>
          <LinkCardInfo>
            <FlexBox $direction="column" $gap={isLaptop ? "12px" : "4px"}>
              {isLaptop ? (
                <>
                  <PP_80 medium lineHeight="5rem">
                    {props.header}
                  </PP_80>
                  <PP_24>{props.text}</PP_24>
                </>
              ) : (
                <>
                  <PP_32 medium>{props.header}</PP_32>
                  <PP_18 medium color={theme.medium_grey}>
                    {props.text}
                  </PP_18>
                </>
              )}
            </FlexBox>
            <A_Button
              buttonText={props.link_text}
              disabled={!props.url}
              handleButtonClick={() => window.open(props.url, "_blank")}
            />
          </LinkCardInfo>
        </>
      )}
    </LinkCardWrapper>
  );
};

export default A_LinkCard;
