import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_LogoNavButton from "../Atoms/A_LogoNavButton";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_NavButtons from "../Atoms/A_NavButtons";

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
  // padding: 32px 2.5vw 0;
  box-sizing: border-box;
  z-index: 10;
  // background: red;
`;

const NavbarGradient = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: calc(100% + 32px);
  // background: red;
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0.9) 0%,
    rgba(17, 17, 17, 0) 100%
  );

  // background: -moz-linear-gradient(
  //   180deg,
  //   rgba(17, 17, 17, 1) 0%,
  //   rgba(17, 17, 17, 0) 100%%
  // );
  // background: -webkit-linear-gradient(
  //   180deg,
  //   rgba(17, 17, 17, 1) 0%,
  //   rgba(17, 17, 17, 0) 100%%
  // );
  // background: linear-gradient(
  //   180deg,
  //   rgba(17, 17, 17, 1) 0%,
  //   rgba(17, 17, 17, 0) 100%%
  // );
  // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#111111",endColorstr="#111111",GradientType=1);
`;

const M_Navbar = () => {
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
        <A_LanguageSwitcher />
      </FlexBox>
    </NavbarWrapper>
  );
};

export default M_Navbar;
