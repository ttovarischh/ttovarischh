import React from "react";
import { useTranslation } from "react-i18next";
import { FlexBox, A_Text } from "../Common";
import styled, { ThemeContext } from "styled-components";

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

const ALanguageSwitcher = () => {
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
        <A_Text uppercase medium underline={i18n.language === "ru"}>
          Ru
        </A_Text>
      </StyledButton>
      <A_Text uppercase medium>
        /
      </A_Text>
      <StyledButton
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
      >
        <A_Text uppercase medium underline={i18n.language === "en"}>
          Eng
        </A_Text>
      </StyledButton>
    </LanguageSwitcherWrapper>
  );
};

export default ALanguageSwitcher;
