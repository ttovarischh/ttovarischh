import React from "react";
import styled from "styled-components";
import { FlexBox, PP_24 } from "../Common";

interface TagProps {
  $header?: boolean;
  tagText: string;
}

const TagWrapper = styled(FlexBox)<{ $header?: boolean }>`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${(props) => (props.$header ? "#111" : "#3F3F3F")};
  cursor: default;
`;

const A_Tag: React.FC<TagProps> = ({ $header, tagText }) => {
  return (
    <TagWrapper $header={$header}>
      <PP_24>{tagText}</PP_24>
    </TagWrapper>
  );
};

export default A_Tag;
