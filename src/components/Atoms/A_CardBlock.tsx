import React from "react";
import { FlexBox, PP_18, PP_24, PP_48 } from "../Quarks";
import styled, { useTheme } from "styled-components";
import A_Tag from "../Atoms/A_Tag";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

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
  border-radius: var(--header-line-border-radius);
  background-color: ${({ theme }) => theme.cardBlocks.line};
  align-items: stretch;
  margin-right: 12px;
  align-self: stretch;

  ${media.laptop} {
    width: 0.32vw;
  }
`;

const CardBlock = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
  flex-wrap: nowrap;
  height: auto;

  padding: var(--medium-card-padding);

  border-radius: var(--bigger-card-radius);
  background-color: ${({ theme }) => theme.cards.bg};

  // ${media.laptop} {
  //   padding: 28px;
  // }
`;

const HeaderCard = styled(CardBlock)`
  align-items: center;
  justify-content: space-between;

  #headertext {
    max-width: 80%;
  }

  ${media.laptop} {
    #headertext {
      max-width: 15vw;
    }
  }
`;

const DescriptionCard = styled(CardBlock)`
  flex-direction: column;
  height: auto;
  position: relative;
  flex-grow: 1;
`;

const InnerContent = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  height: 100%;

  ${media.laptop} {
    gap: 140px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: start;
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
  const { isLaptop } = useScreenSize();

  if (headerCard) {
    return (
      <HeaderCard>
        <FlexBox style={{ width: "100%" }}>
          <HeaderLine />
          {isLaptop ? (
            <PP_24 id="headertext">{cardHeader}</PP_24>
          ) : (
            <PP_18 id="headertext">{cardHeader}</PP_18>
          )}
        </FlexBox>
        {isLaptop && (
          <PP_48 color={theme.cardBlocks.icon} lineHeight="3rem">
            {cardHeaderIcon}
          </PP_48>
        )}
      </HeaderCard>
    );
  }

  return (
    <DescriptionCard>
      <InnerContent>
        {isLaptop ? <PP_24>{cardText}</PP_24> : <PP_18>{cardText}</PP_18>}
        <TagsWrapper>
          {tags?.map((tagSet, index) => (
            <React.Fragment key={index}>
              {tagSet[language].map((tag, idx) => (
                <A_Tag key={idx} $header={idx == 0} tagText={tag} />
              ))}
            </React.Fragment>
          ))}
        </TagsWrapper>
      </InnerContent>
    </DescriptionCard>
  );
};

export default A_CardBlock;
