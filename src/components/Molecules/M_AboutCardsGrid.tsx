import React from "react";
import styled from "styled-components";
import A_AboutCard from "../Atoms/A_AboutCard";
import { AboutMeCard, Achievement } from "../../db/types";
import { media } from "../../styles/mediaQueries";

interface AboutCardsGridProps {
  cards: (AboutMeCard | Achievement)[];
  currentLanguage: "en" | "ru";
}

// const AboutCardsGridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-gap: 1.04vw;

//   :nth-child(1),
//   :nth-child(2),
//   :nth-child(3) {
//     grid-column: span 4;
//   }
//   :nth-child(4) {
//     grid-column-start: 3;
//     grid-column-end: 7;
//   }
//   :nth-child(5) {
//     grid-column-start: 7;
//     grid-column-end: 11;
//   }
// `;

const AboutCardsGridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: var(--mobile-gap-12);

  ${media.phoneLansdscape} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: none;

    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      grid-column: span 4;
    }

    :nth-child(4) {
      grid-column-start: 3;
      grid-column-end: 7;
    }
    :nth-child(5) {
      grid-column-start: 7;
      grid-column-end: 11;
    }
  }

  ${media.tablets} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;

    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      grid-column: span 4;
    }

    :nth-child(4) {
      grid-column-start: 3;
      grid-column-end: 7;
    }
    :nth-child(5) {
      grid-column-start: 7;
      grid-column-end: 11;
    }
  }

  ${media.tabletsL} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;

    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      grid-column: span 4;
    }

    :nth-child(4) {
      grid-column-start: 3;
      grid-column-end: 7;
    }
    :nth-child(5) {
      grid-column-start: 7;
      grid-column-end: 11;
    }
  }
`;

const M_AboutCardsGrid = ({ currentLanguage, cards }: AboutCardsGridProps) => {
  return (
    <AboutCardsGridWrapper>
      {cards.map((card, index) => (
        <A_AboutCard
          key={index}
          card={card}
          currentLanguage={currentLanguage}
          rotation={
            index === 0
              ? "rotate(-0.5deg)"
              : index === 1
              ? "rotate(0.5deg)"
              : "rotate(-0.3deg)"
          }
        />
      ))}
    </AboutCardsGridWrapper>
  );
};

export default M_AboutCardsGrid;
