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
  fallback?: string;
}

const CaseVideo = styled.video`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  overflow: hidden;

  // new
  border-radius: 5px;
`;

const UICaseVideo = styled(CaseVideo)`
  width: 20vw;
  height: auto;
  object-fit: cover;

  // new
  width: 60.93vw;
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
    fallback,
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
      {isLoading && shouldAutoplay && (
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
          style={{
            display: !shouldAutoplay ? "block" : isLoading ? "none" : "block",
          }}
        >
          <source src={src} type="video/mp4" />
          <source src={fallback} type="video/mp4" />
        </CaseVideo>
      )}
    </>
  );
});

export default Video;
