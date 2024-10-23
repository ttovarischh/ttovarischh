import React, { useState, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { PP_32, PP_24, FlexBox, PP_20, PP_16, PP_18 } from "../Quarks";
import { WorkExperienceItem, SkillItem } from "../../db/types";
import A_Icon from "../Atoms/A_Icon";
import Image from "../Quarks/Image";
import Video from "../Quarks/Video";
import A_Tag from "../Atoms/A_Tag";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface AccordeonProps {
  items: (WorkExperienceItem | SkillItem)[];
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--mobile-gap-8);
  width: 100%;

  ${media.tabletsL} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: var(--mobile-gap-8);
    // grid-row-gap: var(--mobile-gap-8);
    grid-template-rows: 1fr;
  }

  ${media.laptop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: var(--mobile-gap-8);
    grid-template-rows: 1fr;
  }
`;

export const AccordionWrapper = styled.div<{ $isOpen: boolean }>`
  grid-column-start: 2;
  grid-column-end: 6;
  border-radius: var(--bigger-card-radius);

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

export const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: 16px;
  border-radius: var(--bigger-card-radius);

  box-sizing: border-box;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.cards.lighter_bg : theme.cards.bg};
  color: ${({ theme }) => theme.white};
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;

  svg {
    height: 2rem;
    width: 2rem;
    transition: all 0.5s ease;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "45deg" : "0deg")});
  }

  ${media.laptop} {
    svg {
      height: 3rem;
      width: 3rem;
      transition: all 0.5s ease;
      transform: rotate(${({ $isOpen }) => ($isOpen ? "45deg" : "0deg")});
    }

    &:hover {
      opacity: 0.7;

      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 500ms;

  .innerDiv {
    overflow: hidden;
  }
`;

export const AccordionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--mobile-gap-16);
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  img,
  video,
  .sk {
    aspect-ratio: 16/10;
    border-radius: var(--incard-img-medium-border-radius);
    cursor: inherit;
  }

  ${media.phoneLansdscape} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.04vw;
  }

  ${media.tablets} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.tabletsL} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.04vw;
    padding: 20px;
  }
`;

export const AccordionContentInnerWrapper = styled.div<{ $isSkill: boolean }>`
  display: flex;
  justify-content: ${({ $isSkill }) => ($isSkill ? "space-between" : "normal")};
  flex-direction: column;
  gap: 4px;
  p {
    width: 90%;
  }
`;

export const InnerMapItem = styled.div<{ $isSkill: boolean }>`
  display: flex;
  gap: 8px;
  align-items: baseline;
  flex-wrap: wrap;
  svg {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
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

  const { isLaptop } = useScreenSize();

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionWrapper key={index} $isOpen={openIndex === index}>
          <AccordionHeader
            onClick={() => toggleAccordion(index)}
            $isOpen={openIndex === index}
          >
            <FlexBox $direction="column" $gap={isLaptop ? "6px" : "4px"}>
              {isLaptop ? (
                <PP_32 medium lineHeight="2rem">
                  {isSkill(item)
                    ? item.name[currentLanguage]
                    : item.role[currentLanguage]}
                </PP_32>
              ) : (
                <PP_20 medium lineHeight="100%">
                  {isSkill(item)
                    ? item.name[currentLanguage]
                    : item.role[currentLanguage]}
                </PP_20>
              )}
              {isSkill(item) ? (
                isLaptop ? (
                  <PP_24 color={theme.medium_grey} medium>
                    {item.typeOf[currentLanguage]}
                  </PP_24>
                ) : (
                  <PP_16 color={theme.medium_grey} medium>
                    {item.typeOf[currentLanguage]}
                  </PP_16>
                )
              ) : (
                <a
                  href={item.organisation.url}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isLaptop ? (
                    <PP_24 color={theme.medium_grey} medium>
                      {item.organisation.text[currentLanguage]} / 
                      {item.year[currentLanguage]}
                    </PP_24>
                  ) : (
                    <PP_16 color={theme.medium_grey} medium>
                      {item.organisation.text[currentLanguage]} / 
                      {item.year[currentLanguage]}
                    </PP_16>
                  )}
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
                      <Video
                        src={item.image_src}
                        shouldAutoplay={true}
                        fallback={item.fallback}
                      />
                    ) : (
                      <Image src={item.image_src} alt="Skill Image" />
                    )}
                    <AccordionContentInnerWrapper $isSkill={true}>
                      {isLaptop ? (
                        <PP_24 color={theme.medium_grey} medium>
                          {item.text[currentLanguage]}
                        </PP_24>
                      ) : (
                        <PP_18 color={theme.medium_grey} medium>
                          {item.text[currentLanguage]}
                        </PP_18>
                      )}
                      <InnerMapItem
                        $isSkill={true}
                        style={{ marginTop: "32px" }}
                      >
                        {item.techTags.map((tag, subIndex) => (
                          <A_Tag key={subIndex} tagText={tag} />
                        ))}
                      </InnerMapItem>
                    </AccordionContentInnerWrapper>
                  </>
                ) : (
                  <>
                    <AccordionContentInnerWrapper $isSkill={false}>
                      {isLaptop ? (
                        <PP_24 color={theme.white} medium>
                          {t("about.responsibilities")}
                        </PP_24>
                      ) : (
                        <PP_18 color={theme.white} medium>
                          {t("about.responsibilities")}
                        </PP_18>
                      )}
                      {item.responsibilities.map((responsibility, subIndex) => (
                        <InnerMapItem key={subIndex} $isSkill={false}>
                          <A_Icon iconName="arrowRight" />
                          {isLaptop ? (
                            <PP_24 color={theme.lightest_grey}>
                              {responsibility.text[currentLanguage]}
                            </PP_24>
                          ) : (
                            <PP_18 color={theme.lightest_grey}>
                              {responsibility.text[currentLanguage]}
                            </PP_18>
                          )}
                        </InnerMapItem>
                      ))}
                    </AccordionContentInnerWrapper>
                    <AccordionContentInnerWrapper key={index} $isSkill={false}>
                      {isLaptop ? (
                        <PP_24 color={theme.white} medium>
                          {t("about.achievements")}
                        </PP_24>
                      ) : (
                        <PP_18 color={theme.white} medium>
                          {t("about.achievements")}
                        </PP_18>
                      )}
                      {item.achievements.map((achievement, subIndex) => (
                        <InnerMapItem key={subIndex} $isSkill={false}>
                          <A_Icon iconName="arrowRight" />
                          {isLaptop ? (
                            <PP_24 color={theme.lightest_grey}>
                              {achievement.text[currentLanguage]}
                            </PP_24>
                          ) : (
                            <PP_18 color={theme.lightest_grey}>
                              {achievement.text[currentLanguage]}
                            </PP_18>
                          )}
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
