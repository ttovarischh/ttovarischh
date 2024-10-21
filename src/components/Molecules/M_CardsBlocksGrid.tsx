import React, { useRef, useState } from "react";
import { FlexBox, PP_18 } from "../Quarks";
import A_CardBlock from "../Atoms/A_CardBlock";
import { styled, useTheme } from "styled-components";
import {
  AccordionContainer,
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  AccordionContentWrapper,
  AccordionContentInnerWrapper,
  InnerMapItem,
} from "./M_Accordeon";
import A_Icon from "../Atoms/A_Icon";
import A_Tag from "../Atoms/A_Tag";
import { useScreenSize } from "../../styles/ScreenSizeContext";

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

// const CardsBlocksGrid = styled.div`
//   display: flex;
//   gap: 1.04vw;
//   transition: all 0.5s ease;
//   width: 100%;
// `;

const CardsBlocksGrid = styled.div`
  // display: flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--mobile-gap-8);
  width: 100%;
`;

const AcordeonHeaderInnerWrapper = styled(FlexBox)`
  p {
    max-width: 80%;
  }
`;

const HeaderLine = styled.div`
  width: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.cardBlocks.line};
  margin-right: 12px;
  align-self: stretch;
`;

const M_CardsBlocksGrid: React.FC<CardsBlocksGridProps> = ({
  smallCards,
  references,
  language,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { isTablet, isTabletLandscape } = useScreenSize();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isTablet || isTabletLandscape) {
    return (
      <CardsBlocksGrid id={references}>
        {smallCards.map(
          ({ headerCardText, headerCardIcon, mainCardText, tags }, index) => (
            <FlexBox
              key={index}
              $direction="column"
              $gap="8px"
              style={{ width: "100%" }}
            >
              <A_CardBlock
                headerCard
                cardHeader={
                  headerCardText.find((text) => text[language])?.[language]
                }
                cardHeaderIcon={headerCardIcon}
              />
              <A_CardBlock
                cardText={
                  mainCardText.find((text) => text[language])?.[language]
                }
                tags={tags}
                language={language}
              />
            </FlexBox>
          )
        )}
      </CardsBlocksGrid>
    );
  } else {
    return (
      <AccordionContainer id={references}>
        {smallCards.map(
          ({ headerCardText, headerCardIcon, mainCardText, tags }, index) => (
            <AccordionWrapper key={index} $isOpen={openIndex === index}>
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                $isOpen={openIndex === index}
              >
                <AcordeonHeaderInnerWrapper>
                  <HeaderLine />
                  <PP_18 id="headertext">
                    {headerCardText.find((text) => text[language])?.[language]}
                  </PP_18>
                </AcordeonHeaderInnerWrapper>
                <A_Icon iconName="accordeonButton" />
              </AccordionHeader>
              <AccordionContent $isOpen={openIndex === index} ref={contentRef}>
                <div className="innerDiv">
                  <AccordionContentWrapper>
                    <AccordionContentInnerWrapper $isSkill={true}>
                      <PP_18 color={theme.medium_grey} medium>
                        {
                          mainCardText.find((text) => text[language])?.[
                            language
                          ]
                        }
                      </PP_18>
                      <InnerMapItem
                        $isSkill={true}
                        style={{ marginTop: "32px" }}
                      >
                        {tags?.map((tagSet, index) => (
                          <React.Fragment key={index}>
                            {tagSet[language].map((tag, idx) => (
                              <A_Tag
                                key={idx}
                                $header={idx == 0}
                                tagText={tag}
                              />
                            ))}
                          </React.Fragment>
                        ))}
                      </InnerMapItem>
                    </AccordionContentInnerWrapper>
                  </AccordionContentWrapper>
                </div>
              </AccordionContent>
            </AccordionWrapper>
          )
        )}
      </AccordionContainer>
    );
  }
};

export default M_CardsBlocksGrid;
