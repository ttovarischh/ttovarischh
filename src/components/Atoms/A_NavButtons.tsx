import React, { useState, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlexBox, PP_20 } from "../Quarks";
import { Link } from "react-router-dom";

interface NavButtonsProps {
  t: (key: string) => string;
}

const NavButtonsWrapper = styled(FlexBox)`
  position: relative;
  background-color: ${({ theme }) => theme.navigation.navbuttonswrapper};
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  backdrop-filter: blur(12px) saturate(140%);
  width: fit-content;
  justify-self: center;
  border: 1px solid hsla(0, 0%, 100%, 0.025);
  cursor: pointer;
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
  background-color: ${({ theme }) => theme.navigation.hoverbg};
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

const A_NavButtons = ({ t }: NavButtonsProps) => {
  const theme = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSwitchingButtons, setIsSwitchingButtons] = useState(false);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <NavButtonsWrapper onMouseLeave={handleMouseLeave}>
      {[t("nav:work"), t("nav:contacts"), t("nav:info")].map((text, index) => (
        <NavButton
          key={text}
          ref={(el) => (buttonRefs.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={
            text === t("nav:contacts") ? handleScrollToBottom : undefined
          }
        >
          {text === t("nav:contacts") ? (
            <PP_20 medium uppercase color={theme?.white}>
              {text}
            </PP_20>
          ) : (
            <Link
              to={text === t("nav:work") ? "/work" : "/about"}
              style={{ textDecoration: "none" }}
            >
              <PP_20 medium uppercase color={theme?.white}>
                {text}
              </PP_20>
            </Link>
          )}
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
