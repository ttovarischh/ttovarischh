import React from "react";
import { FlexBox, PP_80, PP_24, PP_40, PP_18, PP_48 } from "../Quarks";
import styled from "styled-components";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface InfoCardProps {
  header: string;
  text: string;
  reference?: string;
  style?: any;
}

const InfoCardWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--bigger-card-radius);
  background-color: ${({ theme }) => theme.cards.bg};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  white-space: pre-line;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  padding: 16px;

  ${media.phoneLansdscape} {
    width: 404px;
    // height: 40vw;
    aspect-ratio: auto;
    // flex-direction: row;
    gap: 40px;
  }

  ${media.tablets} {
    width: 45vw;
    height: 45vw;
  }

  ${media.tabletsL} {
    width: 45vw;
    height: 45vw;
  }

  ${media.laptop} {
    padding: 28px;
    width: 35.42vw;
    height: 35.42vw;
  }
`;

const A_InfoCard: React.FC<InfoCardProps> = ({
  header,
  text,
  reference,
  style,
}) => {
  const { isTabletLandscape, isLaptop } = useScreenSize();
  return (
    <InfoCardWrapper id={reference ?? undefined} style={style}>
      {isLaptop ? (
        <>
          <PP_80 medium lineHeight="95%">
            {header}
          </PP_80>
          <PP_24>{text}</PP_24>
        </>
      ) : isTabletLandscape ? (
        <>
          <PP_48 medium lineHeight="95%">
            {header}
          </PP_48>
          <PP_18>{text}</PP_18>
        </>
      ) : (
        <>
          <PP_40 medium lineHeight="100%">
            {header}
          </PP_40>
          <PP_18>{text}</PP_18>
        </>
      )}
    </InfoCardWrapper>
  );
};

export default A_InfoCard;
