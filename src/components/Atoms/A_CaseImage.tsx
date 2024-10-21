// src/components/Atoms/A_CaseImage/tsx
import React from "react";
import { FlexBox, PP_18, PP_20 } from "../Quarks";
import styled, { useTheme } from "styled-components";
import Image from "../Quarks/Image";
import Video from "../Quarks/Video";
import LazyLoad from "react-lazyload";

interface CaseImageProps {
  src: string;
  projectName: string;
  imageDescription?: string;
  id?: any;
  onClick?: any;
  ui?: boolean;
  shouldAutoplay?: boolean;
  poster?: string;
}

const CaseImageWrapper = styled(FlexBox)<{ $body?: boolean }>`
  flex: 1;
  // padding: var(--desktop-padding-20);
  padding: var(--mobile-padding-8);
  // border-radius: var(--desktop-img-card-radius);
  border-radius: var(--desktop-img-in-card-radius);
  // gap: 16px;
  background-color: ${({ theme }) => theme.cards.bg};
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  // new
  gap: var(--mobile-gap-8);
  width: 100%;
  box-sizing: border-box;
`;

const isVideo = (src: string) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
};

const A_CaseImage = (props: CaseImageProps) => {
  const theme = useTheme();

  if (props.imageDescription) {
    return (
      <>
        {isVideo(props.src) ? (
          <CaseImageWrapper>
            <LazyLoad
              offset={200}
              once
              style={{ width: "100%", aspectRatio: "1920/1045" }}
            >
              <Video
                shouldAutoplay={props.shouldAutoplay}
                poster={props.poster}
                src={props.src}
                $width="100%"
                $aspectRatio={16 / 9}
                $borderRadius="5px"
              />
            </LazyLoad>
          </CaseImageWrapper>
        ) : (
          <CaseImageWrapper onClick={props.onClick}>
            <LazyLoad
              offset={200}
              once
              style={{ width: "100%", aspectRatio: "1920/1045" }}
            >
              <Image
                src={props.src}
                alt={`${props.projectName} case image`}
                id={props.id}
                $width="100%"
                $aspectRatio={16 / 9}
                $borderRadius="5px"
                $imageDescription={props.imageDescription}
              />
            </LazyLoad>
            {/* <PP_20 color={theme.medium_grey}>{props.imageDescription}</PP_20> */}
            <PP_18 medium color={theme.medium_grey}>
              {props.imageDescription}
            </PP_18>
          </CaseImageWrapper>
        )}
      </>
    );
  } else if (props.ui) {
    return (
      <LazyLoad
        offset={200}
        once
        // style={{ width: "20vw" }}
        style={{ width: "60.93vw" }}
      >
        <Video
          ui
          src={props.src}
          // $width="20vw"
          $width="60.93vw"
          $aspectRatio={2.3}
          // $borderRadius="12px"
          $borderRadius="5px"
        />
      </LazyLoad>
    );
  } else {
    return (
      <>
        {isVideo(props.src) ? (
          <LazyLoad
            offset={200}
            once
            style={{ width: "100%", aspectRatio: "1920/1045" }}
          >
            <Video
              shouldAutoplay={props.shouldAutoplay}
              poster={props.poster}
              src={props.src}
              $width="100%"
              $aspectRatio={16 / 9}
              // $borderRadius="12px"
              $borderRadius="5px"
            />
          </LazyLoad>
        ) : (
          <LazyLoad
            offset={200}
            once
            style={{ width: "100%", aspectRatio: "1920/1045" }}
          >
            <Image
              src={props.src}
              alt={`${props.projectName} case image`}
              id={props.id}
              $width="100%"
              $aspectRatio={16 / 9}
              // $borderRadius="12px"
              $borderRadius="5px"
              onClick={props.onClick}
            />
          </LazyLoad>
        )}
      </>
    );
  }
};

export default A_CaseImage;
