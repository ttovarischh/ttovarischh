import React, { useState, useRef, useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlexBox, PP_20 } from "../Quarks";
import { Link, useLocation } from "react-router-dom";

interface NavButtonsProps {
  t: (key: string) => string;
}

const NavButtonsWrapper = styled(FlexBox)`
  position: relative;
  background-color: ${({ theme }) => theme.navigation.navbuttonswrapper};
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  backdrop-filter: blur(12px) saturate(140%);
  width: fit-content;
  justify-self: center;
  border: 1px solid hsla(0, 0%, 100%, 0.025);
  cursor: pointer;
`;

const ButtonDot = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.medium_grey};
  width: 4px;
  height: 4px;
  border-radius: 100%;
  left: calc(50% - 2px);
  transition: all 0.4s ease;
  bottom: 10px;
`;

const NavButton = styled(FlexBox)`
  height: 100%;
  padding: 16px 20px;
  border-radius: 100px;
  position: relative;
  z-index: 1;
`;

const HoverBackground = styled.div<{
  $width: number;
  $left: number;
  $hasTransition: boolean;
}>`
  position: absolute;
  height: 100%;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.navigation.hoverbg};
  top: 0;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  opacity: ${({ $width }) => ($width ? 1 : 0)};
  transition: ${({ $hasTransition }) =>
    $hasTransition
      ? "left 0.3s ease, width 0.3s ease, opacity 0.5s ease"
      : "opacity 0.5s ease"};
  z-index: 0;
`;

const A_NavButtons = ({ t }: NavButtonsProps) => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<string>("");
  const [isSwitchingButtons, setIsSwitchingButtons] = useState(false);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footer = document.querySelector("#footer") as HTMLElement | null;

    if (footer) {
      footerRef.current = footer;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(footer);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveIndex("");
    }
  }, [location.pathname]);

  const handleMouseEnter = (index: number) => {
    if (hoveredIndex === null) {
      setIsSwitchingButtons(false);
    } else {
      setIsSwitchingButtons(true);
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsSwitchingButtons(false);
  };

  const handleScrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      setActiveIndex("#footer");
    }, 50);
  };

  const buttons = [
    { key: "work", path: "/work" },
    { key: "contacts", path: "#footer" },
    { key: "info", path: "/about" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/work") {
      setActiveIndex("/work");
    } else if (currentPath === "/about") {
      setActiveIndex("/about");
    } else if (currentPath === "/") {
      setActiveIndex("");
    }
  }, [location.pathname]);

  return (
    <NavButtonsWrapper onMouseLeave={handleMouseLeave}>
      {buttons.map((button, index) => (
        <NavButton
          key={button.key}
          ref={(el) => (buttonRefs.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => {
            if (button.key === "contacts") {
              handleScrollToBottom();
            } else {
              setActiveIndex(button.path);
            }
          }}
        >
          {button.path.startsWith("#") ? (
            <>
              <PP_20 medium uppercase color={theme?.white}>
                {t(`nav:${button.key}`)}
              </PP_20>
              <ButtonDot
                style={{
                  opacity:
                    activeIndex === button.path && isFooterVisible ? 1 : 0,
                }}
              />
            </>
          ) : (
            <Link to={button.path} style={{ textDecoration: "none" }}>
              <PP_20 medium uppercase color={theme?.white}>
                {t(`nav:${button.key}`)}
              </PP_20>
              <ButtonDot
                style={{ opacity: activeIndex === button.path ? 1 : 0 }}
              />
            </Link>
          )}
        </NavButton>
      ))}
      <HoverBackground
        $width={
          hoveredIndex !== null && buttonRefs.current[hoveredIndex]
            ? buttonRefs.current[hoveredIndex].offsetWidth
            : 0
        }
        $left={
          hoveredIndex !== null && buttonRefs.current[hoveredIndex]
            ? buttonRefs.current[hoveredIndex].offsetLeft
            : 0
        }
        $hasTransition={isSwitchingButtons}
      />
    </NavButtonsWrapper>
  );
};

export default A_NavButtons;
