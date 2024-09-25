import React from "react";
import { FlexBox, PP_20, PP_24, PP_48 } from "../Common";
import styled from "styled-components";

interface InfoBlockProps {
  header?: string;
  text?: string;
  body?: boolean;
}

const InfoBlockWrapper = styled(FlexBox)<{ body?: boolean }>`
  flex-direction: column;
  gap: 2px;
`;

const InfoBlockWrapperBig = styled(FlexBox)<{ body?: boolean }>`
  grid-column-start: 2;
  grid-column-end: 6;
  max-width: 85%;
  gap: 28px;
`;

const A_InfoBlock: React.FC<InfoBlockProps> = ({ header, text, body }) => {
  if (body) {
    return (
      <InfoBlockWrapperBig body={body}>
        <PP_24 medium color="#6B6863">
          {header}
        </PP_24>
        <PP_48 medium lineHeight="113%">
          {text}
        </PP_48>
      </InfoBlockWrapperBig>
    );
  } else {
    return (
      <InfoBlockWrapper body={body}>
        <PP_20 medium color="#6B6863">
          {header}
        </PP_20>
        <PP_20>{text}</PP_20>
      </InfoBlockWrapper>
    );
  }
};

export default A_InfoBlock;
