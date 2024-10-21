import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_16, PP_20 } from "../Quarks";
import Image from "../Quarks/Image";
import Marquee from "react-fast-marquee";
import Video from "../Quarks/Video";
import LazyLoad from "react-lazyload";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface Work {
  image_src: string;
  image_description: Array<{ en: string; ru: string }>;
  link?: string;
  poster?: string;
}

interface ImageMarqueeProps {
  works: Work[];
  direction: "left" | "right" | "up" | "down";
  currentLanguage: "en" | "ru";
  imageHeight: string;
}

const ImageMarqueeWrapper = styled.div<{
  $direction: "left" | "right" | "up" | "down";
  $imageHeight: string;
}>`
  width: 100vw;

  img {
    border-radius: 0;
    // height: 29.38vw;
    height: ${(props) => props.$imageHeight};
    width: auto;
    cursor: pointer;
  }
  video {
    border-radius: 0;
    // height: 29.38vw;
    height: ${(props) => props.$imageHeight};
    width: auto;
    cursor: pointer;
  }
  .marqueeskeleton {
    // height: 29.38vw;
    height: ${(props) => props.$imageHeight};
    width: auto;
    aspect-ratio: 16/9;
  }
`;

const ImageMarquee = styled(FlexBox)`
  flex-wrap: nowrap;
  // gap: 1.04vw;
  gap: var(--mobile-gap-12);
  :nth-child(1) {
    margin-left: 1.04vw;
  }
`;

const WorkLink = styled.a`
  display: flex;
  flex-direction: column;
  // gap: 24px;
  gap: var(--mobile-gap-12);
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const M_ImageMarquee: React.FC<ImageMarqueeProps> = ({
  works,
  direction,
  currentLanguage,
  imageHeight,
}) => {
  const theme = useTheme();
  const isVideo = (src: string): boolean => {
    return src.includes(".webm");
  };
  const { isPhoneLandscape } = useScreenSize();

  return (
    <ImageMarqueeWrapper $direction={direction} $imageHeight={imageHeight}>
      <Marquee speed={80} direction={direction}>
        <ImageMarquee>
          {works.map((work, index) => (
            <WorkLink
              key={`${work.link} ${index}`}
              href={work.link}
              target="_blank"
            >
              {/* <PP_20 medium color={theme.medium_grey}>
                {work.image_description[0][currentLanguage]}
              </PP_20> */}
              <PP_16 medium color={theme.medium_grey}>
                {work.image_description[0][currentLanguage]}
              </PP_16>
              {isVideo(work.image_src) ? (
                <Video
                  shouldAutoplay
                  src={work.image_src}
                  $className="marqueeskeleton"
                  $borderRadius="0px"
                  poster={work.poster}
                />
              ) : (
                <Image
                  src={work.image_src}
                  alt={work.image_description[0]["en"]}
                  $className="marqueeskeleton"
                  $borderRadius="0px"
                />
              )}
            </WorkLink>
          ))}
        </ImageMarquee>
      </Marquee>
    </ImageMarqueeWrapper>
  );
};

export default M_ImageMarquee;
