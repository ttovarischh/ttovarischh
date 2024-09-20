import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure overflow is hidden */
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-30px) scale(1.1);
  }
  60% {
    transform: translateY(-15px) scale(0.9);
  }
`;

// const Dot = styled.div<{ delay: string }>`
//   width: 68px;
//   height: 68px;
//   background-color: white;
//   border-radius: 5px;
//   margin: 0 20px;
//   animation: ${bounceAnimation} 0.6s ease forwards;
//   animation-delay: ${({ delay }) => delay};
// `;

const Dot = styled.div<{ delay: string }>`
  width: 68px;
  height: 68px;
  background-color: white;
  border-radius: 5px;
  margin: 0 20px;
  animation: ${bounceAnimation} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay};
  clip-path: inset(0 0 0 0); // Use clip-path to create a mask effect
`;

const CenterDot = styled(Dot)<{ isGrowing: boolean }>`
  background-color: transparent; /* Start with transparent */
  animation: ${({ isGrowing }) => (isGrowing ? "none" : bounceAnimation)} 0.6s
    ease forwards;
  animation-delay: 0.3s;

  ${({ isGrowing }) =>
    isGrowing &&
    `
    position: absolute;
    width: 200vh; /* Change as needed for effect */
    height: 200vh; /* Change as needed for effect */
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    clip-path: circle(50%); /* Ensure it starts as a circle */
    background-color: transparent;
    transition: clip-path 0.5s ease, opacity 0.5s ease;
    
    /* When it grows, it should "subtract" */
    animation: none; /* Stop bouncing when growing */
    clip-path: circle(100% at 50% 50%); /* Expand the clip path */
    opacity: 1; /* Keep it fully visible */
  `}
`;

const ALoader: React.FC = () => {
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsGrowing(true);
    }, 1800); // Time before the center dot starts growing

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderWrapper>
      <Dot delay="0s" />
      <CenterDot delay="0.3s" isGrowing={isGrowing} />
      <Dot delay="0.6s" />
    </LoaderWrapper>
  );
};

export default ALoader;
