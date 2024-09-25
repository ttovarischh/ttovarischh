import React from "react";
import { useTranslation } from "react-i18next";
import { FlexBox, PP_20 } from "../Common";
import styled from "styled-components";

const LanguageSwitcherWrapper = styled(FlexBox)`
  justify-self: right;
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

  return (
    <LanguageSwitcherWrapper>
      <StyledButton
        onClick={() => handleLanguageChange("ru")}
        aria-label="Switch to Russian"
      >
        <PP_20 uppercase medium underline={i18n.language === "ru"}>
          Ru
        </PP_20>
      </StyledButton>
      <PP_20 uppercase medium>
        /
      </PP_20>
      <StyledButton
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
      >
        <PP_20 uppercase medium underline={i18n.language === "en"}>
          Eng
        </PP_20>
      </StyledButton>
    </LanguageSwitcherWrapper>
  );
};

export default A_LanguageSwitcher;
