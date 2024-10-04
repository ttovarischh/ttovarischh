import React from "react";
import styled from "styled-components";
import { PP_20, PP_24 } from "../Common";
import A_Icon from "./A_Icon";

interface ButtonProps {
  fw?: boolean;
  buttonText: string;
  handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  backtotop?: boolean;
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

const SmallButtonWrapper = styled(Button)`
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.buttons.smallButton};
`;

const BackToTopWrapper = styled(Button)`
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: ${({ theme }) => theme.navigation.backtotop};

  svg {
    transform: rotate(-90deg);
  }
`;

const A_Button = (props: ButtonProps) => {
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
        <PP_20 medium>{props.buttonText}</PP_20>
        <A_Icon iconName="arrowRight" />
      </BackToTopWrapper>
    );
  }
  return (
    <SmallButtonWrapper
      disabled={props.disabled}
      onClick={props.handleButtonClick}
    >
      <PP_24>{props.buttonText}</PP_24>
      <A_Icon iconName="buttonArrow" />
    </SmallButtonWrapper>
  );
};

export default A_Button;
