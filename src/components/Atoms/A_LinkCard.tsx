import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox, PP_24, PP_80 } from "../Common";
import A_Button from "./A_Button";
import A_Skeleton from "./A_Skeleton";

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.5s ease;
  overflow: hidden;
  width: 63.02vw;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

const LinkCardInfo = styled(FlexBox)`
  padding: 20px 28px 28px;
  justify-content: space-between;
  flex-direction: column;

  :nth-child(1) {
    max-width: 95%;
  }
`;

const LinkCardImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  max-width: 100%;
`;

const A_LinkCard = (props: LinkCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <LinkCardWrapper id={props.reference || undefined} style={props.style}>
      {props.reverse ? (
        <>
          <LinkCardInfo>
            <FlexBox $direction="column" $gap="12px">
              <PP_80 medium lineHeight="5rem">
                {props.header}
              </PP_80>
              <PP_24>{props.text}</PP_24>
            </FlexBox>
            <A_Button
              buttonText={props.link_text}
              disabled={!props.url}
              handleButtonClick={() => window.open(props.url, "_blank")}
            />
          </LinkCardInfo>
          <LinkCardImg
            src={props.image_src}
            alt={`${props.header} thumbnail`}
            loading="lazy"
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
          />
          {isLoading && (
            <A_Skeleton
              $width="100%"
              $aspectRatio={16 / 9}
              $borderRadius="5px"
            />
          )}
        </>
      ) : (
        <>
          <LinkCardImg
            src={props.image_src}
            alt={`${props.header} thumbnail`}
            loading="lazy"
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
          />
          {isLoading && (
            <A_Skeleton
              $width="100%"
              $aspectRatio={16 / 9}
              $borderRadius="5px"
            />
          )}
          <LinkCardInfo>
            <FlexBox $direction="column" $gap="12px">
              <PP_80 medium lineHeight="5rem">
                {props.header}
              </PP_80>
              <PP_24>{props.text}</PP_24>
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
