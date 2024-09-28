import React from "react";
import A_InfoCard from "../Atoms/A_InfoCard";
import styled from "styled-components";
import { FlexBox } from "../Common";

interface InfoCardsGridProps {
  texts: Array<{ header: string; text: string }>;
  references?: string[];
}

const CardsContainer = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.04vw;
  width: 100%;
  justify-content: center;
`;

const M_InfoCardsGrid: React.FC<InfoCardsGridProps> = ({
  texts,
  references,
}) => {
  return (
    <CardsContainer>
      {texts.map(({ header, text }, index) => (
        <A_InfoCard
          key={`${header}-${text}`}
          header={header}
          text={text}
          reference={references ? references[index] : undefined}
          style={{
            transform: index % 2 === 0 ? "rotate(-0.8deg)" : "rotate(0.8deg)",
          }}
        />
      ))}
    </CardsContainer>
  );
};

export default M_InfoCardsGrid;
