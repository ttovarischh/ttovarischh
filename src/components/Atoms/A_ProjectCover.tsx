import React from "react";
import styled from "styled-components";
import Image from "../Quarks/Image";

interface ProjectCoverProps {
  cover: string;
  alt?: string;
  horisontal?: boolean;
  projectName?: string;
  $imageBorderRadius?: string;
}

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledVideo = styled.video`
  width: 100%;
  object-fit: cover;
  display: block;
`;

const isVideo = (src: string) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
};

const A_ProjectCover = (props: ProjectCoverProps) => {
  const { cover, alt, horisontal, projectName, $imageBorderRadius } = props;

  if (horisontal) {
    return (
      <Image
        src={cover}
        alt={`${projectName} horisontal cover`}
        $width="100%"
        $aspectRatio={16 / 9}
        $borderRadius="0px"
        $imageBorderRadius={$imageBorderRadius}
      />
    );
  } else {
    return (
      <>
        {isVideo(cover) ? (
          <StyledVideo autoPlay muted loop playsInline>
            <source src={cover} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        ) : (
          <StyledImage src={cover} alt={alt} />
        )}
      </>
    );
  }
};

export default A_ProjectCover;
