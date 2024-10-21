import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mediaQueries";

interface AnimatedDotsProps {
  isHovered: boolean;
  isAnimating: boolean;
  isTouchDevice: boolean;
}

const Span = styled.span<{
  $isHovered: boolean;
  $isAnimating: boolean;
  $delay: string;
  $isTouchDevice: boolean;
}>`
  width: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? "0.8rem" : 0};
  // width was 2rem
  display: inline-block;
  opacity: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? 1 : 0};
  position: relative;
  transform: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? "translateY(0)" : "translateY(10px)"};
  transition: opacity 0.4s ease, transform 0.4s ease, width 0.15s;
  transition-delay: ${({ $delay }) => $delay};

  ${media.tablets} {
    width: ${({ $isAnimating, $isHovered }) =>
      $isAnimating || $isHovered ? "1.4rem" : 0};
  }

  ${media.tabletsL} {
    width: ${({ $isAnimating, $isHovered }) =>
      $isAnimating || $isHovered ? "1.45rem" : 0};
  }
`;

const A_AnimatedDots: React.FC<AnimatedDotsProps> = ({
  isHovered,
  isAnimating,
  isTouchDevice,
}) => {
  return (
    <>
      <Span
        $isHovered={isTouchDevice ? false : isHovered}
        $isAnimating={!isTouchDevice ? false : isAnimating}
        $delay={isHovered || isAnimating ? "0s" : "0.3s"}
        $isTouchDevice={isTouchDevice}
      >
        .
      </Span>
      <Span
        $isHovered={isTouchDevice ? false : isHovered}
        $isAnimating={!isTouchDevice ? false : isAnimating}
        $delay={isHovered || isAnimating ? "0.3s" : "0s"}
        $isTouchDevice={isTouchDevice}
      >
        .
      </Span>
    </>
  );
};

export default A_AnimatedDots;
