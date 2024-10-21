// M_Navbar
import React from "react";
import styled, { css } from "styled-components";
import { FlexBox } from "../Quarks";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_LogoNavButton from "../Atoms/A_LogoNavButton";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_NavButtons from "../Atoms/A_NavButtons";
import A_ThemeSwitcher from "../Atoms/A_ThemeSwitcher";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface NavbarProps {
  theme: any;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const sharedPaddingStyles = css`
  padding-top: var(--tablets-outer-padding);
  padding-left: var(--tablets-outer-padding);
  padding-right: var(--tablets-outer-padding);
`;

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
  pointer-events: none;

  // @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  //   padding-top: calc(3vw - 12px);
  //   padding-left: calc(3vw - 12px);
  //   padding-right: calc(3vw - 12px);
  // }

  ${media.tablets} {
    ${sharedPaddingStyles};
  }

  ${media.tabletsL} {
    ${sharedPaddingStyles};
  }
`;

const NavbarGradient = styled.div<{ theme: any }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: calc(100% + 32px);
  background: ${({ theme }) => theme.gradient};
  pointer-events: none;
`;

const RightControlsWrapper = styled(FlexBox)`
  gap: 16px;
  justify-content: flex-end;

  z-index: 10;
  > * {
    pointer-events: auto;
  }

  ${media.tablets} {
    align-items: center;
  }

  ${media.tabletsL} {
    align-items: center;
  }
`;

const M_Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, t }) => {
  const { isTablet, isTabletLandscape, isLaptop } = useScreenSize();
  return (
    <NavbarWrapper>
      <NavbarGradient />
      <A_LogoNavButton />
      <A_NavButtons t={t} />
      <RightControlsWrapper>
        {((!isTablet && !isTabletLandscape) || isLaptop) && (
          <A_TimeDisplay t={t} />
        )}
        <A_ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <A_LanguageSwitcher />
      </RightControlsWrapper>
    </NavbarWrapper>
  );
};

export default M_Navbar;
