import React from "react";
import { FlexBox, PP_20 } from "../Common";

interface InfoColumnProps {
  header?: string;
  text?: string;
}

const A_InfoColumn: React.FC<InfoColumnProps> = ({ header, text }) => {
  return (
    <FlexBox $gap="2px" $direction="column">
      <PP_20 medium color="#6B6863">
        {header}
      </PP_20>
      <PP_20>{text}</PP_20>
    </FlexBox>
  );
};

export default A_InfoColumn;
