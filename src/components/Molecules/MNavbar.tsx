import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_LogoNavButton from "../Atoms/A_LogoNavButton";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_NavButtons from "../Atoms/A_NavButtons";

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: baseline;
  width: 100%;
  position: fixed;
  padding: 32px 2.5vw 0;
  box-sizing: border-box;
  z-index: 10;
`;

const MNavbar = () => {
  return (
    <NavbarWrapper>
      <A_LogoNavButton />
      <A_NavButtons />
      <FlexBox $gap="16px" $justifyContent="flex-end" $alignItems="baseline">
        <A_TimeDisplay />
        <A_LanguageSwitcher />
      </FlexBox>
    </NavbarWrapper>
  );
};

export default MNavbar;
