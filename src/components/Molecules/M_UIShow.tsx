import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_48, PP_24 } from "../Common";
import A_CaseImage from "../Atoms/A_CaseImage";
import A_Icon from "../Atoms/A_Icon";

interface UIShowProps {
  uiShow: {
    imgSrc: string;
    headerA: Array<{ en: string; ru: string }>;
    headerB?: Array<{ en: string; ru: string }>;
    textA: Array<{ en: string; ru: string }>;
    textB: Array<{ en: Array<string>; ru: Array<string> }>;
  };
  references?: string;
  projectName: string;
  language: "en" | "ru";
}

const UIShowWrapper = styled(FlexBox)`
  width: 100%;
  padding: 0px 2.5vw;
  justify-content: center;
  gap: 2.66vw;
`;

const M_UIShow = (props: UIShowProps) => {
  const { uiShow, language, projectName, references } = props;
  const theme = useTheme();

  return (
    <UIShowWrapper id={references}>
      <A_CaseImage ui projectName={projectName} src={uiShow.imgSrc} />
      <FlexBox $direction="column" $gap="48px" style={{ maxWidth: "28.59vw" }}>
        <FlexBox $direction="column" $gap="16px">
          <PP_48 medium>
            {uiShow.headerA.map((header) => header[language])}
          </PP_48>
          <PP_24 color={theme.lightest_grey}>
            {uiShow.textA.map((text) => text[language])}
          </PP_24>
        </FlexBox>
        {uiShow.headerB && uiShow.textB && (
          <FlexBox $direction="column" $gap="16px">
            <PP_48 medium>
              {uiShow.headerB.map((header) => header[language])}
            </PP_48>
            <FlexBox $direction="column">
              {uiShow.textB.map((textArray, index) => (
                <FlexBox key={index} $direction="column" $gap="8px">
                  {textArray[language].map((textItem, subIndex) => (
                    <FlexBox
                      key={subIndex}
                      $direction="row"
                      $gap="8px"
                      $alignItems="center"
                    >
                      <A_Icon iconName="arrowRight" />
                      <PP_24 color={theme.lightest_grey}>{textItem}</PP_24>
                    </FlexBox>
                  ))}
                </FlexBox>
              ))}
            </FlexBox>
          </FlexBox>
        )}
      </FlexBox>
    </UIShowWrapper>
  );
};

export default M_UIShow;
