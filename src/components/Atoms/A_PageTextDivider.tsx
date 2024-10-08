import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_24, PP_80 } from "../Quarks";
import A_Icon from "./A_Icon";
import A_Button from "./A_Button";
import { useNavigate } from "react-router-dom";

interface PageTextDividerProps {
  header: string;
  text: string;
  iconName?: string;
  reverse?: boolean;
  handleButtonClick: () => void;
  buttonText: string;
}

const PageTextDividerWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-bottom: 48px;
`;

const A_PageTextDivider: React.FC<PageTextDividerProps> = ({
  header,
  text,
  iconName,
  reverse,
  handleButtonClick,
  buttonText,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <PageTextDividerWrapper>
      <FlexBox $direction="column" $alignItems="center">
        <FlexBox $alignItems="baseline" $gap="16px">
          {reverse && <A_Icon iconName={iconName} />}
          <PP_80 medium color={theme.white}>
            {header}
          </PP_80>
          {!reverse && <A_Icon iconName={iconName} />}
        </FlexBox>
        <PP_24 medium color={theme.medium_grey}>
          {text}
        </PP_24>
      </FlexBox>
      <A_Button
        buttonText={buttonText}
        // handleButtonClick={() => navigate("/work")}
        handleButtonClick={handleButtonClick}
      />
    </PageTextDividerWrapper>
  );
};

export default A_PageTextDivider;