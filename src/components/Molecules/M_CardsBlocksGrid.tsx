import React from "react";
import { FlexBox } from "../Common";
import A_CardBlock from "../Atoms/A_CardBlock";
import { styled } from "styled-components";

interface CardsBlocksGridProps {
  smallCards: Array<{
    headerCardText: Array<{ en: string; ru: string }>;
    headerCardIcon: string;
    mainCardText: Array<{ en: string; ru: string }>;
    tags: Array<{ en: Array<string>; ru: Array<string> }>;
  }>;
  references?: string;
  language: "en" | "ru";
}

const CardsBlocksGrid = styled.div`
  display: flex;
  gap: 1.04vw;
  transition: all 0.5s ease;
`;

const M_CardsBlocksGrid: React.FC<CardsBlocksGridProps> = ({
  smallCards,
  references,
  language,
}) => {
  return (
    <CardsBlocksGrid id={references}>
      {smallCards.map(
        ({ headerCardText, headerCardIcon, mainCardText, tags }, index) => (
          <FlexBox key={index} $direction="column" $gap="8px">
            <A_CardBlock
              headerCard
              cardHeader={
                headerCardText.find((text) => text[language])?.[language]
              }
              cardHeaderIcon={headerCardIcon}
            />
            <A_CardBlock
              cardText={mainCardText.find((text) => text[language])?.[language]}
              tags={tags}
              language={language}
            />
          </FlexBox>
        )
      )}
    </CardsBlocksGrid>
  );
};

export default M_CardsBlocksGrid;
