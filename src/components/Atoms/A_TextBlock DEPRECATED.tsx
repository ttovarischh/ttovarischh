import React from "react";
import { FlexBox, PP_24, PP_48 } from "../Common";

interface InfoColumnProps {
  header?: string;
  text?: string;
}

const A_TextBlock: React.FC<InfoColumnProps> = ({ header, text }) => {
  return (
    <FlexBox $gap="2px" $direction="column">
      <PP_24 medium color="#6B6863">
        {header}
      </PP_24>
      <PP_48>{text}</PP_48>
    </FlexBox>
  );
};

export default A_TextBlock;
