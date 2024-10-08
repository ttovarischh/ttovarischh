import React from "react";
import { FlexBox, PP_80, PP_24 } from "../Quarks";
import styled from "styled-components";

interface InfoCardProps {
  header: string;
  text: string;
  reference?: string;
  style?: any;
}

const InfoCardWrapper = styled(FlexBox)`
  padding: 28px;
  flex-direction: column;
  justify-content: space-between;
  width: 35.42vw;
  height: 35.42vw;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  white-space: pre-line;
`;

const A_InfoCard: React.FC<InfoCardProps> = ({
  header,
  text,
  reference,
  style,
}) => (
  <InfoCardWrapper id={reference || undefined} style={style}>
    <PP_80 medium lineHeight="95%">
      {header}
    </PP_80>
    <PP_24>{text}</PP_24>
  </InfoCardWrapper>
);

export default A_InfoCard;
