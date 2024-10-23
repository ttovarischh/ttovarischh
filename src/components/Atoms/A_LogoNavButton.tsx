import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DJR_20 } from "../Quarks";
import { useScreenSize } from "../../styles/ScreenSizeContext";

const LogoNavButton = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.white};
  padding: 16px 12px;
  border-radius: var(--logo-nav-button-border-radius);
  width: fit-content;
  z-index: 10;
  pointer-events: auto;
`;

const AnimatedText = styled.span`
  display: inline-block;
`;

const A_LogoNavButton = () => {
  const [text, setText] = useState("P.S...");
  const [$isHovered, set$isHovered] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const theme = useTheme();
  const { isTablet, isLaptop, isPC } = useScreenSize();

  const forwardSteps = [
    "P.S...",
    "PO.SO..",
    "POL.SOT.",
    "POLI.SOTN.",
    "POLIN.SOTNI.",
    "POLINA SOTNIK.",
    "POLINA SOTNIKO.",
    "POLINA SOTNIKOV.",
    "POLINA SOTNIKOVA",
  ];

  const reverseSteps = [
    "POLINA SOTNIKOVA",
    "POLINA SOTNIKOV.",
    "POLINA SOTNIKO.",
    "POLINA SOTNIK.",
    "POLIN.SOTNI.",
    "POLI.SOTN.",
    "POL.SOT.",
    "PO.SO..",
    "P.S...",
  ];

  useEffect(() => {
    let timeout;

    if ($isHovered) {
      timeout = setTimeout(() => {
        if (currentStep < forwardSteps.length) {
          setText(forwardSteps[currentStep]);
          setCurrentStep((prev) => prev + 1);
        }
      }, 80);
    } else {
      timeout = setTimeout(() => {
        if (currentStep > 0) {
          setText(reverseSteps[forwardSteps.length - currentStep]);
          setCurrentStep((prev) => prev - 1);
        }
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [$isHovered, currentStep]);

  return (
    <LogoNavButton
      to="/"
      onMouseEnter={() => {
        if (isLaptop || isPC) {
          set$isHovered(true);
          setCurrentStep(0);
        }
      }}
      onMouseLeave={() => {
        if (isLaptop || isPC) {
          set$isHovered(false);
        }
      }}
    >
      <AnimatedText>
        <DJR_20 color={theme.black}>{text}</DJR_20>
      </AnimatedText>
    </LogoNavButton>
  );
};

export default A_LogoNavButton;
