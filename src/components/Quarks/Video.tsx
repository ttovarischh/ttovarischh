import React, { useState } from "react";
import A_Skeleton from "../Atoms/A_Skeleton";
import styled from "styled-components";

interface VideoProps {
  src: string;
  $width?: string;
  $borderRadius?: string;
  $aspectRatio?: number;
  $className?: string;
  poster?: string;
  shouldAutoplay?: boolean;
  ui?: boolean;
}

const CaseVideo = styled.video`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  overflow: hidden;
`;

const UICaseVideo = styled(CaseVideo)`
  width: 20vw;
  height: auto;
  object-fit: cover;
`;

const Video = React.memo((props: VideoProps) => {
  const {
    src,
    $width,
    $borderRadius,
    $aspectRatio,
    $className,
    poster,
    shouldAutoplay,
    ui,
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  const handleVideoError = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <A_Skeleton
          $width={$width}
          $aspectRatio={$aspectRatio}
          $borderRadius={$borderRadius}
          className={$className}
        />
      )}
      {ui ? (
        <UICaseVideo
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </UICaseVideo>
      ) : (
        <CaseVideo
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          playsInline
          autoPlay={shouldAutoplay}
          muted={shouldAutoplay}
          loop={shouldAutoplay}
          controls={!shouldAutoplay}
          poster={poster}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </CaseVideo>
      )}
    </>
  );
});

export default Video;
