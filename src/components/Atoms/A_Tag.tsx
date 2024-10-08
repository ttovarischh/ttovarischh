import React from "react";
import styled from "styled-components";
import { FlexBox, PP_24 } from "../Quarks";

interface TagProps {
  $header?: boolean;
  tagText: string;
}

const TagWrapper = styled(FlexBox)<{ $header?: boolean }>`
  padding: 8px 12px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.$header
      ? ({ theme }) => theme.tags.headertagbg
      : ({ theme }) => theme.tags.bg};
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
