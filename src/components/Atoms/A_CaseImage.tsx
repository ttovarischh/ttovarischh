import React from "react";
import { FlexBox, PP_20, PP_24, PP_48 } from "../Common";
import styled from "styled-components";

interface CaseImageProps {
  src: string;
  projectName: string;
  imageDescription?: string;
  id?: any;
  onClick?: any;
  ui?: boolean;
}

const CaseImage = styled.img<{ $imageDescription?: string }>`
  height: auto;
  object-fit: cover;
  border-radius: ${({ $imageDescription }) =>
    $imageDescription ? "5px" : "12px"};
  transition: all 0.5s ease;

  flex: 1 1 0; // Allow images to grow equally within their container
  max-width: 100%; // Prevent overflow
  cursor: zoom-in;
`;

const CaseImageWrapper = styled(FlexBox)<{ $body?: boolean }>`
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  gap: 16px;
  background: #212121;
  flex-direction: column;
  align-items: flex-start;
`;

const CaseVideo = styled.video`
  width: 100%;
  object-fit: cover;
  display: block;
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
  if (props.imageDescription) {
    return (
      <>
        {isVideo(props.src) ? (
          <CaseImageWrapper>
            <CaseVideo autoPlay muted loop playsInline>
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
            />
            <PP_20 color="#6B6863">{props.imageDescription}</PP_20>
          </CaseImageWrapper>
        )}
      </>
    );
  } else if (props.ui) {
    return (
      <UICaseVideo autoPlay muted loop playsInline>
        <source src={props.src} type="video/webm" />
        Your browser does not support the video tag.
      </UICaseVideo>
    );
  } else {
    return (
      <>
        {isVideo(props.src) ? (
          <CaseVideo autoPlay muted loop playsInline>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
          </CaseVideo>
        ) : (
          <CaseImage
            src={props.src}
            alt={`${props.projectName} case image`}
            $imageDescription={props.imageDescription}
            id={props.id}
            onClick={props.onClick}
            loading="lazy"
          />
        )}
      </>
    );
  }
};

export default A_CaseImage;
