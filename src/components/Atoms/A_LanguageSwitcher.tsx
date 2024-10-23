import React from "react";
import { useTranslation } from "react-i18next";
import { FlexBox, PP_20, PP_16 } from "../Quarks";
import styled from "styled-components";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

const LanguageSwitcherWrapper = styled(FlexBox)`
  justify-self: right;
  gap: 16px;

  ${media.tablets} {
    gap: 0px;
  }

  ${media.laptop} {
    gap: 0px;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: inherit;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const A_LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: "ru" | "en") => {
    i18n.changeLanguage(lng);
  };

  const { isTablet, isTabletLandscape, isLaptop } = useScreenSize();

  return (
    <LanguageSwitcherWrapper>
      <StyledButton
        onClick={() => handleLanguageChange("ru")}
        aria-label="Switch to Russian"
      >
        {isTablet || isTabletLandscape || isLaptop ? (
          <PP_20 uppercase medium underline={i18n.language === "ru"}>
            Ru
          </PP_20>
        ) : (
          <PP_16 underline={i18n.language === "ru"}>Ru</PP_16>
        )}
      </StyledButton>
      {isTablet || isTabletLandscape || isLaptop ? (
        <PP_20 uppercase medium>
          /
        </PP_20>
      ) : (
        <PP_16 uppercase>/</PP_16>
      )}
      <StyledButton
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
      >
        {isTablet || isTabletLandscape || isLaptop ? (
          <PP_20 uppercase medium underline={i18n.language === "en"}>
            Eng
          </PP_20>
        ) : (
          <PP_16 underline={i18n.language === "en"}>Eng</PP_16>
        )}
      </StyledButton>
    </LanguageSwitcherWrapper>
  );
};

export default A_LanguageSwitcher;
