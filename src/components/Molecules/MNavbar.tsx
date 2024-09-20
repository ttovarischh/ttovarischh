import React, { useState, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlexBox, A_Text } from "../Common";
import ALanguageSwitcher from "../Atoms/ALanguageSwitcher";
import { Link } from "react-router-dom";
import Logo from "../Atoms/ALogoNavButton";

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 32px 2.5vw 0;
  box-sizing: border-box;
  z-index: 10;
`;

const LogoNavButton = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.text.white};
  padding: 11px 10px;
  border-radius: 4px;
  width: fit-content;
`;

const NavButtonsWrapper = styled(FlexBox)`
  position: relative;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  width: fit-content;
  justify-self: center;
`;

const NavButton = styled(FlexBox)`
  height: 100%;
  padding: 11px 16px;
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
  background: rgba(255, 255, 255, 0.5);
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

const MNavbar = () => {
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

  return (
    <NavbarWrapper>
      <Logo />

      <NavButtonsWrapper onMouseLeave={handleMouseLeave}>
        {["work", "contacts", "info"].map((text, index) => (
          <NavButton
            key={text}
            ref={(el) => (buttonRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <A_Text medium uppercase color={theme?.text.white}>
                {text}
              </A_Text>
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

      <ALanguageSwitcher />
    </NavbarWrapper>
  );
};

export default MNavbar;
