import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_20, PP_16, PP_18 } from "../Quarks";
import A_Icon from "../Atoms/A_Icon";
import { EducationItem } from "../../db/types";
import A_Button from "../Atoms/A_Button";
import { media } from "../../styles/mediaQueries";

interface PseudoAccordeonProps {
  items: EducationItem[];
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const AccordionContainer = styled.div<{ $openIndex: number | null }>`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 8px;
  width: 100%;
  transition: all 0.6s ease;
`;

const AccordionWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  height: auto;
  background-color: ${({ theme }) => theme.cards.bg};
  transition: all 0.5s ease, opacity 0.3s ease;

  a {
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: opacity 0.5s ease;

    &:click {
      pointer-events: all;
    }
  }
`;

const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: 16px;
  border-radius: 12px;
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
`;

const AccordionContentWrapper = styled.div<{
  $invisible: boolean;
  $isNone: boolean;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  justify-content: ${({ $isNone }) => ($isNone ? "flex-start" : "center")};
  align-items: center;
  position: relative;

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
    position: absolute;
    width: 65%;
    height: auto;
    max-height: 50%;
    transition: opacity 0.3s ease;
    opacity: ${({ $invisible }) => ($invisible ? "0" : "1")};
    display: ${({ $isNone }) => ($isNone ? "none" : "block")};
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    color: ${({ theme }) => theme.medium_grey} !important;
  }
`;

const AccordionContentInnerWrapper = styled.div<{
  $visible: boolean;
  $isBlock: boolean;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  gap: 32px;
  opacity: ${({ $visible }) => ($visible ? "1" : "0")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  button {
    align-self: start;
  }

  ${media.phoneLansdscape} {
    padding-right: 30%;
  }
`;

const InnerMapItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  svg {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;

const M_MobPseudoAccordeon: React.FC<PseudoAccordeonProps> = ({
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

  const toggleAccordion = (index: number) => {
    const isClosing = openIndex === index;
    const isOpening = !isClosing;

    if (isOpening) {
      setInvisible(index);
      setOpenIndex(index);

      setTimeout(() => {
        setIsBlock(index);
        setIsNone(null);
      }, 300);

      setTimeout(() => {
        setVisible(index);
      }, 400);
    } else if (isClosing) {
      setVisible(null);
      setTimeout(() => {
        setInvisible(null);
        setIsNone(null);
        setOpenIndex(null);
      }, 300);

      setTimeout(() => {
        setIsBlock(null);
      }, 400);
    }
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
              <PP_20 medium>{item.organisation.name[currentLanguage]}</PP_20>
              <PP_16 color={theme.medium_grey} medium>
                {item.typeYear[currentLanguage]}
              </PP_16>
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
                {item.achievements.map((achievement, subIndex) => (
                  <InnerMapItem key={subIndex}>
                    <A_Icon iconName="arrowRight" />
                    <PP_18 color={theme.lightest_grey}>
                      {achievement.text[currentLanguage]}
                    </PP_18>
                  </InnerMapItem>
                ))}
              </FlexBox>
              <A_Button
                buttonText={item.button.text[currentLanguage]}
                handleButtonClick={
                  openIndex === index
                    ? (e) => {
                        e.stopPropagation();
                        handleClick(item.button.url);
                      }
                    : undefined
                }
                disabled={openIndex !== index}
              />
            </AccordionContentInnerWrapper>
          </AccordionContentWrapper>
        </AccordionWrapper>
      ))}
    </AccordionContainer>
  );
};

export default M_MobPseudoAccordeon;
