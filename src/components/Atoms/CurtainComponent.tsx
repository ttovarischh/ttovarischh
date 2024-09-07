import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the animation
const shrinkUp = keyframes`
  0% {
    height: 100vh;
  }
  100% {
    height: 0vh;
  }
`;

// Create the red divs with staggered animation delays
const CurtainDiv = styled.div<{ delay: number }>`
  background-color: red;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${shrinkUp} 1s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const CurtainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

const CurtainEffect: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false); // Remove curtain after animation
    }, 2500); // Total animation duration

    return () => clearTimeout(timeout);
  }, []);

  if (!isAnimating) return null; // Remove curtain after animation is done

  return (
    <CurtainWrapper>
      <CurtainDiv delay={0} />
      <CurtainDiv delay={0.5} />
      <CurtainDiv delay={1} />
      <CurtainDiv delay={1.5} />
    </CurtainWrapper>
  );
};

export default CurtainEffect;
