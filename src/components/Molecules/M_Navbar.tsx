// M_Navbar
import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_LogoNavButton from "../Atoms/A_LogoNavButton";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_NavButtons from "../Atoms/A_NavButtons";
import A_ThemeSwitcher from "../Atoms/A_ThemeSwitcher";

interface NavbarProps {
  theme: any;
  toggleTheme: () => void;
}

const NavbarWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: baseline;
  width: 100%;
  position: fixed;
  padding-left: calc(2.5vw - 12px);
  padding-right: calc(2.5vw - 12px);
  padding-top: 24px;
  box-sizing: border-box;
  z-index: 10;
`;

const NavbarGradient = styled.div<{ theme: any }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: calc(100% + 32px);
  background: ${({ theme }) => theme.gradient};
`;

const M_Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <NavbarWrapper>
      <NavbarGradient />
      <A_LogoNavButton />
      <A_NavButtons />
      <FlexBox
        $gap="16px"
        $justifyContent="flex-end"
        $alignItems="baseline"
        style={{ zIndex: 10 }}
      >
        <A_TimeDisplay />
        <A_ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <A_LanguageSwitcher />
      </FlexBox>
    </NavbarWrapper>
  );
};

export default M_Navbar;
