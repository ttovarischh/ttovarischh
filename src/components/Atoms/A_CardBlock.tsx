import React from "react";
import { FlexBox, PP_24, PP_48 } from "../Common";
import styled, { useTheme } from "styled-components";
import A_Tag from "../Atoms/A_Tag";

interface CardBlockProps {
  headerCard?: boolean;
  cardHeader?: string;
  cardHeaderIcon?: string;
  cardText?: string;
  tags?: Array<{ en: Array<string>; ru: Array<string> }>;
  language?: "en" | "ru";
}

const HeaderLine = styled.div`
  width: 0.52vw;
  height: 4rem;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.cardBlocks.line};
  align-items: stretch;
  margin-right: 12px;
`;

const CardBlock = styled(FlexBox)`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: nowrap;
  height: auto;
  padding: 28px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.cards.bg};
`;

const HeaderCard = styled(CardBlock)`
  align-items: center;
  justify-content: space-between;

  #headertext {
    max-width: 80%;
  }
`;

const DescriptionCard = styled(CardBlock)`
  flex-direction: column;
  padding-bottom: 90%;
  height: 0;
  position: relative;
`;

const InnerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const A_CardBlock: React.FC<CardBlockProps> = ({
  headerCard,
  cardHeader,
  cardHeaderIcon,
  cardText,
  tags,
  language = "en",
}) => {
  const theme = useTheme();
  if (headerCard) {
    return (
      <HeaderCard>
        <FlexBox style={{ width: "100%" }}>
          <HeaderLine />
          <PP_24 id="headertext">{cardHeader}</PP_24>
        </FlexBox>
        <PP_48 color={theme.cardBlocks.icon} lineHeight="3rem">
          {cardHeaderIcon}
        </PP_48>
      </HeaderCard>
    );
  }

  return (
    <DescriptionCard>
      <InnerContent>
        <PP_24>{cardText}</PP_24>
        <FlexBox $direction="column" $gap="8px">
          {tags?.map((tagSet, index) => (
            <React.Fragment key={index}>
              {tagSet[language].map((tag, idx) => (
                <A_Tag key={idx} $header={idx == 0} tagText={tag} />
              ))}
            </React.Fragment>
          ))}
        </FlexBox>
      </InnerContent>
    </DescriptionCard>
  );
};

export default A_CardBlock;
