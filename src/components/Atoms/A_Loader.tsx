import React from "react";
import styled, { css, keyframes, useTheme } from "styled-components";
import { PP_20 } from "../Quarks";
import { media } from "../../styles/mediaQueries";

const mainPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const grow = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(30);
  }
`;

const pulsebigger = keyframes`
  0% {
    transform: scale(1);
    outline-offset: 0px;
    opacity: 0.3;
  }
    80% {
     opacity: 0;
    }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const LoaderWrapper = styled.div<{ $grow?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: ${({ theme }) => theme.black};
  opacity: ${({ $grow }) => ($grow ? "0" : "1")};
  transition: all 0.8s ease;

  p {
    transition: opacity 0.3s ease;
    opacity: ${({ $grow }) => ($grow ? "0" : "1")};
  }
`;

const DotWrapper = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;

  ${media.laptop} {
    width: 4vw;
    height: 4vw;
  }
`;

const Square = styled.div<{ $grow?: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 20vw;
  top: 0;
  left: 0;
  border-radius: 15%;
  background-color: ${({ theme }) => theme.white};

  &:nth-child(1) {
    animation: ${({ $grow }) =>
      $grow
        ? css`
            ${grow} 0.5s forwards
          `
        : css`
            ${mainPulse} 2s infinite
          `};
  }
  &:nth-child(2) {
    animation: ${pulse} 2s infinite;
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation: ${pulse} 2s infinite;
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    animation: ${pulsebigger} 2s infinite;
    animation-delay: 0.3s;
  }

  ${media.laptop} {
    width: 4vw;
    height: 4vw;
  }
`;

const A_Loader: React.FC<{ growSquare: boolean; loadingPercentage: number }> =
  React.memo(({ growSquare, loadingPercentage }) => {
    const theme = useTheme();
    return (
      <LoaderWrapper $grow={growSquare}>
        <DotWrapper>
          <Square $grow={growSquare}>
            <PP_20 medium color={theme.medium_grey}>{`${Math.round(
              loadingPercentage
            )}%`}</PP_20>
          </Square>
          <Square />
          <Square />
          <Square />
        </DotWrapper>
      </LoaderWrapper>
    );
  });

export default A_Loader;
