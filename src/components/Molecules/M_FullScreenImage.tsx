import React from "react";
import styled from "styled-components";
import A_Icon from "../Atoms/A_Icon";

const FullscreenOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.$visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  cursor: zoom-out;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const CrossWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 2.5vw;
  left: auto;
  bottom: auto;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

interface M_FullScreenImageProps {
  src: string;
  $visible: boolean;
  onClose: () => void;
}

const M_FullScreenImage: React.FC<M_FullScreenImageProps> = ({
  src,
  $visible,
  onClose,
}) => {
  return (
    <FullscreenOverlay $visible={$visible} onClick={onClose}>
      <FullscreenImage src={src} alt="Fullscreen" />
      <CrossWrapper>
        <A_Icon iconName="cross" />
      </CrossWrapper>
    </FullscreenOverlay>
  );
};

export default M_FullScreenImage;
