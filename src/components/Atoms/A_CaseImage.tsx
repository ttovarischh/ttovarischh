import React, { useState } from "react";
import { FlexBox, PP_20 } from "../Common";
import styled, { useTheme } from "styled-components";
import A_Skeleton from "./A_Skeleton";

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

const CaseImage = styled.img<{ $imageDescription?: string }>`
  height: auto;
  object-fit: cover;
  border-radius: ${({ $imageDescription }) =>
    $imageDescription ? "5px" : "12px"};
  transition: all 0.5s ease;
  flex: 1 1 0;
  max-width: 100%;
  cursor: zoom-in;
`;

const CaseImageWrapper = styled(FlexBox)<{ $body?: boolean }>`
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  gap: 16px;
  background-color: ${({ theme }) => theme.cards.bg};
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

const CaseVideo = styled.video`
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  overflow: hidden;
`;

const UICaseVideo = styled(CaseVideo)`
  width: 20vw;
  height: auto;
  object-fit: cover;
  display: block;
`;

const isVideo = (src: string) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
};

const A_CaseImage = (props: CaseImageProps) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  
  if (props.imageDescription) {
    return (
      <>
        {isVideo(props.src) ? (
          <CaseImageWrapper>
            {isLoading && (
              <A_Skeleton
                $width="100%"
                $aspectRatio={16 / 9}
                $borderRadius="5px"
              />
            )}
            <CaseVideo
              onLoadedData={handleVideoLoad}
              playsInline
              autoPlay={props.shouldAutoplay}
              muted={props.shouldAutoplay}
              loop={props.shouldAutoplay}
              controls={props.shouldAutoplay}
              poster={props.poster}
              style={{ display: isLoading ? "none" : "block" }}
            >
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </CaseVideo>
          </CaseImageWrapper>
        ) : (
          <CaseImageWrapper onClick={props.onClick}>
            <CaseImage
              src={props.src}
              alt={`${props.projectName} case image`}
              $imageDescription={props.imageDescription}
              id={props.id}
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
            <PP_20 color={theme.medium_grey}>{props.imageDescription}</PP_20>
          </CaseImageWrapper>
        )}
      </>
    );
  } else if (props.ui) {
    return (
      <>
        {isLoading && (
          <A_Skeleton $width="20vw" $aspectRatio={2.3} $borderRadius="12px" />
        )}
        <UICaseVideo
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={props.src} type="video/webm" />
          Your browser does not support the video tag.
        </UICaseVideo>
      </>
    );
  } else {
    return (
      <>
        {isVideo(props.src) ? (
          <>
            {isLoading && (
              <A_Skeleton
                $width="100%"
                $aspectRatio={16 / 9}
                $borderRadius="12px"
              />
            )}
            <CaseVideo
              onLoadedData={handleVideoLoad}
              playsInline
              autoPlay={props.shouldAutoplay}
              muted={props.shouldAutoplay}
              loop={props.shouldAutoplay}
              controls={!props.shouldAutoplay}
              poster={props.poster}
              style={{ display: isLoading ? "none" : "block" }}
            >
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </CaseVideo>
          </>
        ) : (
          <>
            <CaseImage
              src={props.src}
              alt={`${props.projectName} case image`}
              $imageDescription={props.imageDescription}
              id={props.id}
              onClick={props.onClick}
              loading="lazy"
              onLoad={handleImageLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
            {isLoading && (
              <A_Skeleton
                $width="100%"
                $aspectRatio={16 / 9}
                $borderRadius="12px"
              />
            )}
          </>
        )}
      </>
    );
  }
};

export default A_CaseImage;
