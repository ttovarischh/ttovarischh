import React from "react";
import styled, { useTheme } from "styled-components";
import { PP_18, PP_20, PP_24, PP_16 } from "../Quarks";
import A_Icon from "./A_Icon";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface ButtonProps {
  fw?: boolean;
  buttonText: string;
  handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  backtotop?: boolean;
  main?: boolean;
}

const Button = styled.button<{ disabled?: boolean }>`
  display: flex;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: all 0.5s ease;
  border: none;
  outline: none;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.7)};
  }
  &:active {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.3)};
  }
`;

const BigButtonWrapper = styled(Button)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 17px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.buttons.bigButton};
  flex: 1;
`;

const SmallButtonWrapper = styled(Button)<{ $main?: boolean }>`
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background-color: ${({ theme, $main }) =>
    $main ? "#121512" : theme.buttons.smallButton};

  svg {
  }
`;

const BackToTopWrapper = styled(Button)`
  // padding: 10px 14px;
  height: 44px;
  padding: 0px 22px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: ${({ theme }) => theme.navigation.backtotop};

  svg {
    transform: rotate(-90deg);
    height: 1.125rem;
    width: 1.125rem;
  }
`;

const A_Button = (props: ButtonProps) => {
  const theme = useTheme();
  const { isTablet, isTabletLandscape } = useScreenSize();
  if (props.fw) {
    return (
      <BigButtonWrapper
        disabled={props.disabled}
        onClick={props.handleButtonClick}
      >
        <PP_20>{props.buttonText}</PP_20>
        <A_Icon iconName="buttonArrow" />
      </BigButtonWrapper>
    );
  }
  if (props.backtotop) {
    return (
      <BackToTopWrapper
        disabled={props.disabled}
        onClick={props.handleButtonClick}
      >
        {isTablet || isTabletLandscape ? (
          <PP_20 medium>{props.buttonText}</PP_20>
        ) : (
          <PP_16 medium>{props.buttonText}</PP_16>
        )}
        <A_Icon iconName="arrowRight" />
      </BackToTopWrapper>
    );
  }
  return (
    <SmallButtonWrapper
      disabled={props.disabled}
      onClick={props.handleButtonClick}
      $main={props.main}
    >
      {isTablet || isTabletLandscape ? (
        // <PP_24>{props.buttonText}</PP_24>
        <PP_18>{props.buttonText}</PP_18>
      ) : (
        <PP_18 color={props.main ? "#FBF8F3" : theme.white}>
          {props.buttonText}
        </PP_18>
      )}
      <A_Icon
        iconName="arrowRight"
        fill={props.main ? "#FBF8F3" : theme.medium_grey}
      />
    </SmallButtonWrapper>
  );
};

export default A_Button;
