import React, { useState, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlexBox, PP_20 } from "../Common";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavButtonsWrapper = styled(FlexBox)`
  position: relative;
  background: rgba(57, 57, 57, 0.2);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  width: fit-content;
  justify-self: center;
`;

const NavButton = styled(FlexBox)`
  height: 100%;
  padding: 16px 20px;
  border-radius: 100px;
  position: relative;
  z-index: 1;
`;

const HoverBackground = styled.div<{
  $width: number;
  $left: number;
  $hasTransition: boolean;
}>`
  position: absolute;
  height: 100%;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.4);
  top: 0;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  opacity: ${({ $width }) => ($width ? 1 : 0)};
  transition: ${({ $hasTransition }) =>
    $hasTransition
      ? "left 0.3s ease, width 0.3s ease, opacity 0.5s ease"
      : "opacity 0.5s ease"};
  z-index: 0;
`;

const A_NavButtons: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSwitchingButtons, setIsSwitchingButtons] = useState(false);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  const handleMouseEnter = (index: number) => {
    if (hoveredIndex === null) {
      setIsSwitchingButtons(false);
    } else {
      setIsSwitchingButtons(true);
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsSwitchingButtons(false);
  };

  return (
    <NavButtonsWrapper onMouseLeave={handleMouseLeave}>
      {[t("nav:work"), t("nav:contacts"), t("nav:info")].map((text, index) => (
        <NavButton
          key={text}
          ref={(el) => (buttonRefs.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <PP_20 medium uppercase color={theme?.text.white}>
              {text}
            </PP_20>
          </Link>
        </NavButton>
      ))}
      <HoverBackground
        $width={
          hoveredIndex !== null && buttonRefs.current[hoveredIndex]
            ? buttonRefs.current[hoveredIndex]!.offsetWidth
            : 0
        }
        $left={
          hoveredIndex !== null && buttonRefs.current[hoveredIndex]
            ? buttonRefs.current[hoveredIndex]!.offsetLeft
            : 0
        }
        $hasTransition={isSwitchingButtons}
      />
    </NavButtonsWrapper>
  );
};

export default A_NavButtons;
