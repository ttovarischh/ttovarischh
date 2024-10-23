// M_MobNavbar
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DJR_16, FlexBox, PP_16, PP_32, PP_20 } from "../Quarks";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_ThemeSwitcher from "../Atoms/A_ThemeSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface NavbarProps {
  theme: any;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const LogoNavButton = styled(Link)`
  background-color: ${({ theme }) => theme.white};
  height: 44px;
  padding: 0px 12px;
  border-radius: var(--logo-nav-button-border-radius);

  z-index: 5;

  p {
    color: ${({ theme }) => theme.black};
    line-height: 44px;
  }
`;

const WholeNavWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: auto;
  z-index: 10;
  top: 0;
  left: 0;
`;

const NavbarWrapper = styled.div`
  display: flex;
  padding: 16px max(16px, env(safe-area-inset-left, 16px)) 16px
    max(16px, env(safe-area-inset-right, 16px));
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 5;
`;

const MenuButtonWrapper = styled.button<{
  $isOpened: boolean;
}>`
  display: flex;
  position: relative;
  background-color: ${({ theme, $isOpened }) =>
    $isOpened ? theme.black : theme.navigation.themeswitcher};
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: var(--button-border-radius);

  -webkit-backdrop-filter: blur(12px) saturate(140%);
  backdrop-filter: blur(12px) saturate(140%);
  padding: 0 22px;

  border: 1px solid hsla(0, 0%, 100%, 0.025);
  height: 44px;
  align-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const RouteButtonsWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  flex-wrap: nowrap;
`;

const AddControlsOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  p {
    color: #cdcac5;
  }

  ${media.phoneLansdscape} {
    display: none;
    opacity: 0.5;
  }
`;

const AddControlsInnerWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const RouteButtons = styled(Link)<{
  $isButtonVisible: boolean;
  $transitionDelay?: number;
}>`
  display: flex;
  padding: 0 24px;
  height: 56px;
  transform: translateY(
    ${({ $isButtonVisible }) => ($isButtonVisible ? "0" : "-56px")}
  );
  opacity: ${({ $isButtonVisible }) => ($isButtonVisible ? 1 : 0)};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--button-border-radius);

  background: ${({ theme }) => theme.white};
  p {
    color: ${({ theme }) => theme.black};
  }
  transition: all 0.8s ease;
  transition-delay: ${({ $transitionDelay }) => $transitionDelay ?? 0}s;
`;

const RouteRealButton = styled.div<{
  $isButtonVisible: boolean;
  $transitionDelay?: number;
}>`
  display: flex;
  padding: 0 24px;
  height: 56px;
  transform: translateY(
    ${({ $isButtonVisible }) => ($isButtonVisible ? "0" : "-56px")}
  );
  opacity: ${({ $isButtonVisible }) => ($isButtonVisible ? 1 : 0)};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--button-border-radius);

  background: ${({ theme }) => theme.white};
  p {
    color: ${({ theme }) => theme.black};
  }
  transition: all 0.8s ease;
  transition-delay: ${({ $transitionDelay }) => $transitionDelay ?? 0}s;
`;

const NavigationWrapper = styled.div<{
  $isFullHeight: boolean;
  $isOpened: boolean;
}>`
  position: absolute;
  // top: ${({ $isFullHeight }) => ($isFullHeight ? 0 : "-100dvh")};
  width: 100%;
  // height: ${({ $isFullHeight }) => ($isFullHeight ? "100dvh" : 0)};
  // height: ${({ $isFullHeight }) => ($isFullHeight ? "100vh" : 0)};

  top: ${({ $isFullHeight }) => ($isFullHeight ? 0 : "-100vh")};
  display: ${({ $isOpened }) => ($isOpened ? "flex" : "none")};

  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
    top: ${({ $isFullHeight }) => ($isFullHeight ? 0 : "-100dvh")};
  }

  transition: top 0.8s ease, height 0.3s linear;

  // display: flex;
  background: rgba(57, 57, 57, 0.5);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  padding: 76px 16px 40px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  box-sizing: border-box;
  // transition: all 0.8s ease;
`;

const M_MobNavbar: React.FC<NavbarProps> = ({ theme, toggleTheme, t }) => {
  const [$isOpened, set$isOpened] = useState<boolean>(false);
  const [$isFullHeight, set$isFullHeight] = useState<boolean>(false);
  const [$isButtonVisible, set$isButtonVisible] = useState<boolean>(false);
  const [$isClickable, set$isClickable] = useState<boolean>(true);
  const navigate = useNavigate();

  const openNav = () => {
    if (!$isClickable) return;

    set$isClickable(false);
    set$isOpened(true);

    setTimeout(() => {
      set$isFullHeight(true);
    }, 10);

    setTimeout(() => {
      set$isButtonVisible(true);
      set$isClickable(true);
    }, 800);
  };

  const closeNav = () => {
    if (!$isClickable) return;

    set$isClickable(false);
    set$isButtonVisible(false);

    setTimeout(() => {
      set$isFullHeight(false);
    }, 800);

    setTimeout(() => {
      set$isOpened(false);
      set$isClickable(true);
    }, 1400);
  };

  const handleRouteButtonsClick = (navigate: () => void) => {
    closeNav();
    navigate();
  };

  const handleRouteRealButtonClick = () => {
    closeNav();

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1400);
  };

  const toggleNav = () => {
    if ($isOpened) {
      closeNav();
    } else {
      openNav();
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    const isNavButton = target.closest("button, a");
    const isLanguageSwitcher = target.closest("A_LanguageSwitcher");

    if (!isNavButton && !isLanguageSwitcher) {
      closeNav();
    }
  };

  return (
    <WholeNavWrapper>
      <NavigationWrapper
        $isFullHeight={$isFullHeight}
        $isOpened={$isOpened}
        onClick={handleOutsideClick}
      >
        <RouteButtonsWrapper>
          <RouteButtons
            to="/"
            $isButtonVisible={$isButtonVisible}
            onClick={(e) => {
              e.preventDefault();
              handleRouteButtonsClick(() => navigate("/"));
            }}
          >
            <PP_32 medium>{t(`nav.home`)}</PP_32>
          </RouteButtons>
          <RouteButtons
            to="/work"
            $isButtonVisible={$isButtonVisible}
            $transitionDelay={0.25}
            onClick={(e) => {
              e.preventDefault();
              handleRouteButtonsClick(() => navigate("/work"));
            }}
          >
            <PP_32 medium capitalize>
              {t(`nav.work`)}
            </PP_32>
          </RouteButtons>
          <RouteRealButton
            $isButtonVisible={$isButtonVisible}
            $transitionDelay={0.5}
            onClick={(e) => {
              e.preventDefault();
              handleRouteRealButtonClick();
            }}
          >
            <PP_32 medium capitalize>
              {t(`nav.contacts`)}
            </PP_32>
          </RouteRealButton>
          <RouteButtons
            to="/about"
            $isButtonVisible={$isButtonVisible}
            $transitionDelay={0.75}
            onClick={(e) => {
              e.preventDefault();
              handleRouteButtonsClick(() => navigate("/about"));
            }}
          >
            <PP_32 medium capitalize>
              {t(`nav.info`)}
            </PP_32>
          </RouteButtons>
        </RouteButtonsWrapper>
        <AddControlsOuterWrapper>
          <AddControlsInnerWrapper>
            <PP_20 medium>{t(`nav.siteLang`)}</PP_20>
            <A_LanguageSwitcher />
          </AddControlsInnerWrapper>
          <AddControlsInnerWrapper>
            <PP_20 medium>{t(`nav.currently`)}</PP_20>
            <A_TimeDisplay t={t} />
          </AddControlsInnerWrapper>
        </AddControlsOuterWrapper>
      </NavigationWrapper>

      <NavbarWrapper>
        <LogoNavButton to="/">
          <DJR_16>P.S.</DJR_16>
        </LogoNavButton>
        <FlexBox $gap="8px">
          <A_ThemeSwitcher
            theme={theme}
            toggleTheme={toggleTheme}
            mobColor={$isFullHeight}
          />
          <MenuButtonWrapper
            onClick={() => toggleNav()}
            $isOpened={$isFullHeight}
          >
            <PP_16>{$isFullHeight ? t(`nav.close`) : t(`nav.menu`)}</PP_16>
          </MenuButtonWrapper>
        </FlexBox>
      </NavbarWrapper>
    </WholeNavWrapper>
  );
};

export default M_MobNavbar;
