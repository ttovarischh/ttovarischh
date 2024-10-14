import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_20 } from "../Quarks";
import Image from "../Quarks/Image";
import Marquee from "react-fast-marquee";
import Video from "../Quarks/Video";
import LazyLoad from "react-lazyload";

interface Work {
  image_src: string;
  image_description: Array<{ en: string; ru: string }>;
  link?: string;
}

interface ImageMarqueeProps {
  works: Work[];
  direction: "left" | "right" | "up" | "down";
  currentLanguage: "en" | "ru";
}

const ImageMarqueeWrapper = styled.div<{
  $direction: "left" | "right" | "up" | "down";
}>`
  width: 100vw;
  img {
    border-radius: 0;
    height: 29.38vw;
    width: auto;
    cursor: pointer;
  }
  video {
    border-radius: 0;
    height: 29.38vw;
    width: auto;
    cursor: pointer;
  }
  .marqueeskeleton {
    opacity: 0.2;
    height: 29.38vw;
    width: 52.29vw;
  }
`;

const ImageMarquee = styled(FlexBox)`
  flex-wrap: nowrap;
  gap: 1.04vw;
  :nth-child(1) {
    margin-left: 1.04vw;
  }
`;

const WorkLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
}) => {
  const theme = useTheme();
  const isVideo = (src: string): boolean => {
    return src.includes(".webm");
  };

  return (
    <ImageMarqueeWrapper $direction={direction}>
      <Marquee speed={80} direction={direction}>
        <ImageMarquee>
          {works.map((work, index) => (
            <WorkLink
              key={`${work.link} ${index}`}
              href={work.link}
              target="_blank"
            >
              <PP_20 medium color={theme.medium_grey}>
                {work.image_description[0][currentLanguage]}
              </PP_20>
              {isVideo(work.image_src) ? (
                // <LazyLoad offset={300} once style={{ height: "29.38vw" }}>
                <Video
                  shouldAutoplay
                  src={work.image_src}
                  $className="marqueeskeleton"
                  $borderRadius="0px"
                />
              ) : (
                // </LazyLoad>
                // <LazyLoad offset={300} once style={{ height: "29.38vw" }}>
                <Image
                  src={work.image_src}
                  alt={work.image_description[0]["en"]}
                  $className="marqueeskeleton"
                  $borderRadius="0px"
                />
                // </LazyLoad>
              )}
            </WorkLink>
          ))}
        </ImageMarquee>
      </Marquee>
    </ImageMarqueeWrapper>
  );
};

export default M_ImageMarquee;
