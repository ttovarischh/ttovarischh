import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_24, PP_80, PP_40, PP_16, PP_18 } from "../Quarks";
import A_Icon from "./A_Icon";
import A_Button from "./A_Button";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface PageTextDividerProps {
  header: string;
  text?: string;
  iconName?: string;
  reverse?: boolean;
  handleButtonClick?: () => void;
  buttonText?: string;
}

const PageTextDividerWrapper = styled(FlexBox)<{ $text?: string }>`
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-bottom: ${({ $text }) => ($text ? "48px" : "24px")};
  .shortie {
    max-width: 70%;
  }
  button {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }
`;

const PageTextDividerInnerWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 4px;

  svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  ${media.tabletsL} {
    svg {
      height: unset;
      width: unset;
    }
  }

  ${media.laptop} {
    svg {
      height: unset;
      width: unset;
    }
  }
`;

const HeaderWrapper = styled(FlexBox)`
  align-items: baseline;
  gap: 8px;

  ${media.laptop} {
    gap: 16px;
  }
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
  const { isTablet, isTabletLandscape, isLaptop } = useScreenSize();
  return (
    <PageTextDividerWrapper $text={text}>
      <PageTextDividerInnerWrapper>
        <HeaderWrapper>
          {reverse && iconName && <A_Icon iconName={iconName} />}
          {isTabletLandscape || isLaptop ? (
            <PP_80 medium color={theme.white}>
              {header}
            </PP_80>
          ) : (
            <PP_40 medium color={theme.white}>
              {header}
            </PP_40>
          )}
          {!reverse && iconName && <A_Icon iconName={iconName} />}
        </HeaderWrapper>
        {text &&
          (isTabletLandscape || isLaptop ? (
            <PP_24 medium color={theme.medium_grey}>
              {text}
            </PP_24>
          ) : (
            <PP_18 medium color={theme.medium_grey} center className="shortie">
              {text}
            </PP_18>
          ))}
      </PageTextDividerInnerWrapper>
      {buttonText && (
        <A_Button
          buttonText={buttonText}
          handleButtonClick={handleButtonClick}
        />
      )}
    </PageTextDividerWrapper>
  );
};

export default A_PageTextDivider;
