import React, { useState, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { PP_32, PP_24, FlexBox } from "../Quarks";
import { WorkExperienceItem, SkillItem } from "../../db/types";
import A_Icon from "../Atoms/A_Icon";
import Image from "../Quarks/Image";
import Video from "../Quarks/Video";
import A_Tag from "../Atoms/A_Tag";

interface AccordeonProps {
  items: (WorkExperienceItem | SkillItem)[];
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const AccordionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.04vw;
  grid-row-gap: 8px;
  width: 100%;
`;

const AccordionWrapper = styled.div<{ $isOpen: boolean }>`
  grid-column-start: 2;
  grid-column-end: 6;
  border-radius: 12px;
  // background-color: ${({ theme }) => theme.cards.bg};
  transition: all 0.2s ease;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.cards.bg : "transparent"};

  a {
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: all 0.5s ease;

    &:hover {
      opacity: 0.5;
    }

    &:click {
      pointer-events: all; /* Ensure link is clickable */
    }
  }
`;

const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.cards.lighter_bg : theme.cards.bg};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;

  svg {
    transition: all 0.5s ease;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "45deg" : "0deg")});
  }

  &:hover {
    opacity: 0.7;

    svg {
      transform: rotate(180deg);
    }
  }
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 500ms;

  .innerDiv {
    overflow: hidden;
  }
`;

const AccordionContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.04vw;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  img,
  video {
    aspect-ratio: 16/10;
    border-radius: 10px;
    cursor: inherit;
  }
`;

const AccordionContentInnerWrapper = styled.div<{ $isSkill: boolean }>`
  display: flex;
  justify-content: ${({ $isSkill }) => ($isSkill ? "space-between" : "normal")};
  flex-direction: column;
  gap: 4px;
  p {
    width: 90%;
  }
`;

const InnerMapItem = styled.div<{ $isSkill: boolean }>`
  display: flex;
  gap: 8px;
  align-items: baseline;
  flex-wrap: wrap;
  svg {
    flex-shrink: 0;
  }
  > * {
    white-space: ${({ $isSkill }) => ($isSkill ? "nowrap" : "wrap")};
  }
`;

const M_Accordeon: React.FC<AccordeonProps> = ({
  currentLanguage,
  items,
  t,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isSkill = (card: SkillItem | WorkExperienceItem): card is SkillItem => {
    return "image_src" in card;
  };

  const isVideo = (src: string): boolean => {
    return src.includes(".webm");
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionWrapper key={index} $isOpen={openIndex === index}>
          <AccordionHeader
            onClick={() => toggleAccordion(index)}
            $isOpen={openIndex === index}
          >
            <FlexBox $direction="column" $gap="8px">
              <PP_32 medium lineHeight="2rem">
                {isSkill(item)
                  ? item.name[currentLanguage]
                  : item.role[currentLanguage]}
              </PP_32>
              {isSkill(item) ? (
                <PP_24 color={theme.medium_grey} medium>
                  {item.typeOf[currentLanguage]}
                </PP_24>
              ) : (
                <a
                  href={item.organisation.url}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PP_24 color={theme.medium_grey} medium>
                    {item.organisation.text[currentLanguage]} / 
                    {item.year[currentLanguage]}
                  </PP_24>
                </a>
              )}
            </FlexBox>
            <A_Icon iconName="accordeonButton" />
          </AccordionHeader>
          <AccordionContent $isOpen={openIndex === index} ref={contentRef}>
            <div className="innerDiv">
              <AccordionContentWrapper>
                {isSkill(item) ? (
                  <>
                    {isVideo(item.image_src) ? (
                      <Video src={item.image_src} shouldAutoplay={true} />
                    ) : (
                      <Image src={item.image_src} alt="Skill Image" />
                    )}
                    <AccordionContentInnerWrapper $isSkill={true}>
                      <PP_24 color={theme.medium_grey} medium>
                        {item.text[currentLanguage]}
                      </PP_24>
                      <InnerMapItem $isSkill={true}>
                        {item.techTags.map((tag, subIndex) => (
                          <A_Tag key={subIndex} tagText={tag} />
                        ))}
                      </InnerMapItem>
                    </AccordionContentInnerWrapper>
                  </>
                ) : (
                  <>
                    <AccordionContentInnerWrapper $isSkill={false}>
                      <PP_24 color={theme.white} medium>
                        {t("about.responsibilities")}
                      </PP_24>
                      {item.responsibilities.map((responsibility, subIndex) => (
                        <InnerMapItem key={subIndex} $isSkill={false}>
                          <A_Icon iconName="arrowRight" />
                          <PP_24 color={theme.lightest_grey}>
                            {responsibility.text[currentLanguage]}
                          </PP_24>
                        </InnerMapItem>
                      ))}
                    </AccordionContentInnerWrapper>
                    <AccordionContentInnerWrapper key={index} $isSkill={false}>
                      <PP_24 color={theme.white} medium>
                        {t("about.achievements")}
                      </PP_24>
                      {item.achievements.map((achievement, subIndex) => (
                        <InnerMapItem key={subIndex} $isSkill={false}>
                          <A_Icon iconName="arrowRight" />
                          <PP_24 color={theme.lightest_grey}>
                            {achievement.text[currentLanguage]}
                          </PP_24>
                        </InnerMapItem>
                      ))}
                    </AccordionContentInnerWrapper>
                  </>
                )}
              </AccordionContentWrapper>
            </div>
          </AccordionContent>
        </AccordionWrapper>
      ))}
    </AccordionContainer>
  );
};

export default M_Accordeon;
