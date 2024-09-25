import React from "react";
import styled from "styled-components";

interface ProjectCoverProps {
  cover: string;
  alt: string;
}

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledVideo = styled.video`
  width: 100%;
  object-fit: cover;
  /* Optional: To hide the video controls completely */
  display: block; 
`;

const isVideo = (src: string) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
};

const A_ProjectCover = (props: ProjectCoverProps) => {
  const { cover, alt } = props;

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
};

export default A_ProjectCover;
