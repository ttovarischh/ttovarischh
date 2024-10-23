// components/M_PageMenu.tsx
import React, { useState, useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { PP_20, FlexBox } from "../Quarks";

const MenuContainer = styled.div<{ $isHovered?: boolean }>`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: fit-content;
  margin-right: ${(props) => (props.$isHovered ? "1vw" : "0.6vw")};
  margin-left: auto;
  left: auto;
  top: 28vh;
  padding: ${(props) => (props.$isHovered ? "20px" : "0px")};

  border-radius: ${(props) =>
    props.$isHovered ? `var(--bigger-card-radius)` : 0};

  background-color: ${(props) =>
    props.$isHovered ? ({ theme }) => theme.page_menu.bg : "transparent"};
  box-shadow: ${(props) =>
    props.$isHovered ? "0px 0px 40px 0px rgba(0, 0, 0, 0.1)" : "none"};
  backdrop-filter: ${(props) => (props.$isHovered ? "blur(10px)" : "none")};
  transition: all 0.6s ease;
  gap: ${(props) => (props.$isHovered ? "4px" : "12px")};
  max-height: ${(props) => (props.$isHovered ? "42vh" : "none")};
  overflow-y: ${(props) => (props.$isHovered ? "scroll" : "auto")};
  z-index: 2;
  pointer-events: auto;

  &::-webkit-scrollbar {
    width: 0.63vw;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;

    border-radius: var(--button-border-radius);
  }
`;

const Line = styled.div<{ $isSubItem?: boolean; $isActive?: boolean }>`
  height: 2px;
  width: ${(props) => (props.$isSubItem ? "10px" : "20px")};
  border-radius: var(--header-line-border-radius);

  transition: all 0.5s ease;
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  background-color: ${({ theme }) => theme.page_menu.line};
`;

const Header = styled(FlexBox)`
  padding: 2px 8px;
  border-radius: var(--header-line-border-radius);

  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.page_menu.text_bg};
  }
`;

const SubItem = styled.div`
  cursor: pointer;
  padding: 2px 8px;
  border-radius: var(--header-line-border-radius);

  box-sizing: border-box;
  margin-left: 2rem;
  max-width: 200px;
  &:hover {
    background-color: ${({ theme }) => theme.page_menu.text_bg};
  }
`;

interface PageMenuProps {
  menuItems: {
    header: {
      title: { en: string; ru: string };
      reference: string;
    }[];
    subItems: {
      title: { en: string; ru: string };
      reference: string;
    }[];
  }[];
  currentLanguage: "en" | "ru";
}

const PageMenu: React.FC<PageMenuProps> = ({ menuItems, currentLanguage }) => {
  const [activeReference, setActiveReference] = useState<string | null>(null);
  const [$isHovered, set$isHovered] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const handleScrollToReference = (reference: string) => {
    const element = document.getElementById(reference);
    if (element) {
      element.classList.add("faded");

      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top + window.scrollY;
      const offsetPosition =
        elementPosition - window.innerHeight / 2 + elementRect.height / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        element.classList.remove("faded");
      }, 1000);
    }
  };

  useEffect(() => {
    if ($isHovered && activeReference && menuContainerRef.current) {
      const activeElement = menuContainerRef.current.querySelector(
        `[data-reference="${activeReference}"]`
      );
      if (activeElement) {
        const elementRect = activeElement.getBoundingClientRect();
        const containerRect = menuContainerRef.current.getBoundingClientRect();
        const containerHeight = containerRect.height;

        const offset =
          elementRect.top -
          containerRect.top +
          menuContainerRef.current.scrollTop;

        const centeredOffset =
          offset - containerHeight / 2 + elementRect.height / 2;

        menuContainerRef.current.scrollTo({
          top: centeredOffset,
          behavior: "smooth",
        });
      }
    }
  }, [$isHovered, activeReference]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveReference(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [menuItems, currentLanguage]);

  const totalSubItems = menuItems.reduce(
    (count, item) => count + item.subItems.length,
    0
  );

  return (
    <MenuContainer
      className="menu"
      onMouseEnter={() => {
        set$isHovered(true);
      }}
      onMouseLeave={() => {
        set$isHovered(false);
      }}
      $isHovered={$isHovered}
      ref={menuContainerRef}
    >
      {menuItems.map((item) => (
        <FlexBox
          $direction="column"
          $gap={$isHovered ? "4px" : totalSubItems > 13 ? "8px" : "12px"}
          key={item.header[0].reference}
          $alignItems={$isHovered ? "flex-start" : "flex-end"}
        >
          {item.header.map((header) =>
            $isHovered ? (
              <Header
                key={header.reference}
                onClick={() => handleScrollToReference(header.reference)}
                data-reference={header.reference}
              >
                <PP_20
                  medium
                  color={
                    activeReference == header.reference
                      ? theme.page_menu.text_active
                      : theme.page_menu.text
                  }
                >
                  {header.title[currentLanguage]}
                </PP_20>
              </Header>
            ) : (
              <Line
                key={header.reference}
                $isActive={activeReference === header.reference}
              />
            )
          )}

          {item.subItems.map((subItem) =>
            $isHovered ? (
              <SubItem
                key={subItem.reference}
                onClick={() => handleScrollToReference(subItem.reference)}
                data-reference={subItem.reference}
              >
                <PP_20
                  color={
                    activeReference == subItem.reference
                      ? theme.page_menu.text_active
                      : theme.page_menu.text
                  }
                  medium={activeReference == subItem.reference}
                >
                  {subItem.title[currentLanguage]}
                </PP_20>
              </SubItem>
            ) : (
              <Line
                key={subItem.reference}
                $isSubItem
                $isActive={activeReference === subItem.reference}
              />
            )
          )}
        </FlexBox>
      ))}
    </MenuContainer>
  );
};

export default PageMenu;
