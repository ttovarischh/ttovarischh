import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_16, PP_20 } from "../Quarks";
import Image from "../Quarks/Image";
import Marquee from "react-fast-marquee";
import Video from "../Quarks/Video";
import { useScreenSize } from "../../styles/ScreenSizeContext";

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
    height: ${(props) => props.$imageHeight};
    width: auto;
  }
  video {
    height: ${(props) => props.$imageHeight};
    width: auto;
  }
  .marqueeskeleton {
    height: ${(props) => props.$imageHeight};
    width: auto;
    aspect-ratio: 16/9;
  }
`;

const ImageMarquee = styled(FlexBox)`
  flex-wrap: nowrap;
  gap: var(--gap-12-104);

  a:first-of-type {
    margin-left: 1.04vw;
  }
`;

const WorkLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
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
  const { isLaptop } = useScreenSize();

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
              {isLaptop ? (
                <PP_20 medium color={theme.medium_grey}>
                  {work.image_description[0][currentLanguage]}
                </PP_20>
              ) : (
                <PP_16 medium color={theme.medium_grey}>
                  {work.image_description[0][currentLanguage]}
                </PP_16>
              )}
              {isVideo(work.image_src) ? (
                <Video
                  shouldAutoplay
                  src={work.image_src}
                  $className="marqueeskeleton"
                  poster={work.poster}
                />
              ) : (
                <Image
                  src={work.image_src}
                  alt={work.image_description[0]["en"]}
                  $className="marqueeskeleton"
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
