import React from "react";
import styled from "styled-components";
import Image from "../Quarks/Image";

interface ProjectCoverProps {
  cover: string;
  alt?: string;
  horisontal?: boolean;
  projectName?: string;
  verticalCard?: boolean;
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

const isVideo = (src: string): boolean => {
  return src.includes(".webm") || src.includes(".mp4");
};

const A_ProjectCover: React.FC<ProjectCoverProps> = ({
  cover,
  alt,
  horisontal,
  projectName,
  verticalCard,
}) => {
  if (horisontal) {
    return (
      <Image
        src={cover}
        alt={`${projectName} horisontal cover`}
        $width="100%"
        $aspectRatio={verticalCard ? 1240 / 1750 : 16 / 9}
      />
    );
  } else {
    return (
      <>
        {isVideo(cover) ? (
          <StyledVideo autoPlay muted loop playsInline key={cover}>
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
