import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { PP_24, FlexBox, PP_20, PP_16, PP_18 } from "../Quarks";
import A_Icon from "../Atoms/A_Icon";
import { EducationItem } from "../../db/types";
import A_Button from "../Atoms/A_Button";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface PseudoAccordeonProps {
  items: EducationItem[];
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const AccordionContainer = styled.div<{ $openIndex: number | null }>`
  display: grid;
  grid-template-columns: ${({ $openIndex }) =>
    $openIndex === 0
      ? "3fr 1fr 1fr"
      : $openIndex === 1
      ? "1fr 3fr 1fr"
      : $openIndex === 2
      ? "1fr 1fr 3fr"
      : "1fr 1fr 1fr"};
  grid-column-gap: 1.04vw;
  grid-row-gap: 8px;
  width: 100%;
  transition: grid-template-columns 0.6s ease;
`;

const AccordionWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: var(--bigger-card-radius);

  overflow: hidden;
  background-color: ${({ theme }) => theme.cards.bg};
  transition: all 0.5s ease, opacity 0.3s ease;
  cursor: pointer;
  height: auto;
  min-height: 29.17vw;

  a {
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: opacity 0.5s ease;

    &:hover {
      opacity: 0.5;
    }

    &:click {
      pointer-events: all; /* Ensure link is clickable */
    }
  }

  svg {
    max-width: 90%;
  }

  &:hover {
    opacity: 0.7;

    svg {
      transform: rotate(360deg);
    }
  }

  ${media.tabletsL} {
    min-height: 45vw;
  }
`;

const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: 20px;
  border-radius: var(--bigger-card-radius);

  box-sizing: border-box;
  align-items: baseline;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.cards.lighter_bg : theme.cards.bg};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  justify-content: space-between;
  transition: all 0.5s ease;

  svg {
    transition: all 0.5s ease;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "90deg" : "0deg")});
  }

  ${media.tabletsL} {
    padding: var(--mobile-padding-16);
  }
`;

const AccordionContentWrapper = styled.div<{
  $invisible: boolean;
  $isNone: boolean;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: ${({ $isNone }) => ($isNone ? "flex-start" : "center")};
  align-items: center;

  p {
    display: inline-flex;
    flex-wrap: wrap;
  }

  .nowrap {
    a {
      white-space: nowrap;
    }
  }

  .logoSvg {
    transition: opacity 0.3s ease;
    margin-bottom: 8%;
    opacity: ${({ $invisible }) => ($invisible ? "0" : "1")};
    display: ${({ $isNone }) => ($isNone ? "none" : "block")};
  }

  img {
    aspect-ratio: 16/10;
    background-color: white;
    border-radius: var(--incard-img-medium-border-radius);

    cursor: inherit;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: all 0.5s ease;
    color: ${({ theme }) => theme.medium_grey} !important;

    &:hover {
      opacity: 0.5;
    }
  }

  ${media.tabletsL} {
    padding: var(--mobile-padding-16);
  }
`;

const AccordionContentInnerWrapper = styled.div<{
  $visible: boolean;
  $isBlock: boolean;
}>`
  display: flex;
  width: 85%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  opacity: ${({ $visible }) => ($visible ? "1" : "0")};
  display: ${({ $isBlock }) => ($isBlock ? "flex" : "none")};
  gap: 40px;

  button {
    align-self: start;
  }
`;

const InnerMapItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  svg {
    flex-shrink: 0;
  }
`;

const M_PseudoAccordeon: React.FC<PseudoAccordeonProps> = ({
  currentLanguage,
  items,
  t,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [invisible, setInvisible] = useState<number | null>(null);
  const [isNone, setIsNone] = useState<number | null>(null);
  const [visible, setVisible] = useState<number | null>(null);
  const [isBlock, setIsBlock] = useState<number | null>(null);
  const theme = useTheme();
  const { isTabletLandscape } = useScreenSize();

  const toggleAccordion = (index: number) => {
    setInvisible(openIndex === index ? null : index);
    setOpenIndex(openIndex === index ? null : index);

    setTimeout(() => {
      setIsBlock(openIndex === index ? null : index);
      setIsNone(openIndex === index ? null : index);
    }, 300);

    setTimeout(() => {
      setVisible(openIndex === index ? null : index);
    }, 400);
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AccordionContainer $openIndex={openIndex}>
      {items.map((item, index) => (
        <AccordionWrapper
          key={index}
          onClick={() => toggleAccordion(index)}
          $isOpen={openIndex === index}
        >
          <AccordionHeader $isOpen={openIndex === index}>
            <FlexBox $direction="column" $gap="2px">
              {isTabletLandscape ? (
                <>
                  <PP_20 medium>
                    {item.organisation.name[currentLanguage]}
                  </PP_20>
                  <PP_16 color={theme.medium_grey} medium>
                    {item.typeYear[currentLanguage]}
                  </PP_16>
                </>
              ) : (
                <>
                  <PP_24 medium>
                    {item.organisation.name[currentLanguage]}
                  </PP_24>
                  <PP_24 color={theme.medium_grey} medium>
                    {item.typeYear[currentLanguage]}
                  </PP_24>
                </>
              )}
            </FlexBox>
            <A_Icon iconName="arrowDiagonal" />
          </AccordionHeader>
          <AccordionContentWrapper
            $invisible={invisible === index}
            $isNone={isNone === index}
          >
            <A_Icon iconName={item.iconName} className="logoSvg" />
            <AccordionContentInnerWrapper
              $visible={visible === index}
              $isBlock={isBlock === index}
            >
              <FlexBox $direction="column" $gap="12px" className="nowrap">
                {isTabletLandscape ? (
                  <PP_18>
                    {t("about.specializations")}
                    {item.specialization.map((subItem, subIndex) => (
                      <a
                        href={subItem.url}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        key={subIndex}
                      >
                        {subItem.text[currentLanguage]}
                        {subIndex + 1 !== item.specialization.length && ", "}
                      </a>
                    ))}
                  </PP_18>
                ) : (
                  <PP_24>
                    {t("about.specializations")}
                    {item.specialization.map((subItem, subIndex) => (
                      <a
                        href={subItem.url}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        key={subIndex}
                      >
                        {subItem.text[currentLanguage]}
                        {subIndex + 1 !== item.specialization.length && ", "}
                      </a>
                    ))}
                  </PP_24>
                )}
                {item.achievements.map((achievement, subIndex) => (
                  <InnerMapItem key={subIndex}>
                    <A_Icon iconName="arrowRight" />
                    {isTabletLandscape ? (
                      <PP_18 color={theme.medium_grey}>
                        {achievement.text[currentLanguage]}
                      </PP_18>
                    ) : (
                      <PP_24 color={theme.medium_grey}>
                        {achievement.text[currentLanguage]}
                      </PP_24>
                    )}
                  </InnerMapItem>
                ))}
              </FlexBox>
              <A_Button
                buttonText={item.button.text[currentLanguage]}
                handleButtonClick={(e) => {
                  e.stopPropagation();
                  handleClick(item.button.url);
                }}
              />
            </AccordionContentInnerWrapper>
          </AccordionContentWrapper>
        </AccordionWrapper>
      ))}
    </AccordionContainer>
  );
};

export default M_PseudoAccordeon;
