import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { A_Text } from "../Common";

const LogoNavButton = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.text.white};
  padding: 11px 10px;
  border-radius: 4px;
  width: fit-content;
`;

const AnimatedText = styled.span`
  display: inline-block;
`;

const Logo = () => {
  const [text, setText] = useState("P.S...");
  const [isHovered, setIsHovered] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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

    if (isHovered) {
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
  }, [isHovered, currentStep]);

  return (
    <LogoNavButton
      to="/"
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentStep(0);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <AnimatedText>
        <A_Text medium color="black">
          {text}
        </A_Text>
      </AnimatedText>
    </LogoNavButton>
  );
};

export default Logo;
