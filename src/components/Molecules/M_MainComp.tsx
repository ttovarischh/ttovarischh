// M_MainComp
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FlexBox, PP_32, PP_128, PP_16, PP_52 } from "../Quarks";
import A_PixelatedGradient from "../Atoms/A_PixelatedGradient";
import { media } from "../../styles/mediaQueries";
import useIsTouchDevice from "../../hooks/useIsTouchDevice";
import A_Button from "../Atoms/A_Button";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import A_AnimatedDots from "../Atoms/A_AnimatedDots";

interface M_MainCompProps {
  scrollY: number;
  t: (key: string) => string;
}

const jiggle = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(4px);
  }
`;

const MainCompWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  @supports (height: 100svh) {
    height: 100svh;
  }

  overflow: hidden;

  // svg {
  //   position: absolute;
  //   left: calc(50% - 9px);
  //   bottom: 24px;
  //   transition: transform 0.3s ease-in-out;
  // }

  // svg:hover {
  //   animation: ${jiggle} 0.6s ease-in-out;
  // }

  ${media.laptop} {
    #difference,
    #difference1 {
      font-size: 1.5rem;
    }
  }

  ${media.tablets} {
    #difference,
    #difference1 {
      font-size: 1.5rem;
    }
  }

  ${media.tabletsL} {
    #difference,
    #difference1 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-aspect-ratio: 1440 / 700) and (max-device-width: 1600px) {
    svg,
    #difference1 {
      display: none;
    }
  }

  @media only screen and (min-aspect-ratio: 1440 / 640) and (max-device-width: 1600px) {
    #difference {
      display: none;
    }
  }
`;

const BigTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 0.3rem;
  gap: 0.4rem;
`;

const BigText = styled(FlexBox)`
  // height: 3.5rem;
  // height: 7.5rem;
  align-items: baseline;
  > * {
    line-height: 84.1%;
    color: ${({ theme }) => theme.mainComp.header};
  }

  ${media.tablets} {
    p {
      font-size: 5.5rem;
    }
  }

  ${media.tabletsL} {
    p {
      font-size: 5.5rem;
    }
  }
`;

const MainTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  box-sizing: border-box;
  padding-top: 76px;

  ${media.phoneLansdscape} {
    padding-top: 0px;
  }

  flex-grow: 1;

  // margin-bottom: 30%;

  ${media.phoneLansdscape} {
    margin-bottom: 0;
  }

  ${media.iphoneSE} {
    margin-bottom: 10%;
  }

  ${media.tabletsL} {
    flex-grow: 0;
    gap: 3.5vh;
  }
`;

const TextCompWrapper = styled(FlexBox)<{ $scrollY: number }>`
  position: absolute;
  top: 0;
  transform: translateY(${({ $scrollY }) => $scrollY * -1}px);
  left: 0;
  right: 0;
  bottom: 0;

  align-content: center;
  align-items: center;
  flex-direction: column;

  // new
  padding-bottom: 32px;
  justify-content: flex-end;

  ::selection {
    color: ${({ theme }) => theme.mainComp.selection};
    background: transparent;
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.mainComp.selection};
    background: transparent;
  }

  #difference,
  #difference1 {
    color: ${({ theme }) => theme.mainComp.text};
    // max-width: 58%;
    max-width: 80%;
  }

  > * {
    cursor: default;
  }

  ${media.tabletsL} {
    justify-content: center;
    gap: 4vh;

    #difference,
    #difference1 {
      max-width: 58%;
    }
  }

  // @media only screen and (min-aspect-ratio: 1440 / 700) and (max-device-width: 1600px) {
  //   padding-top: calc(1.4rem + 48px);
  // }
`;

const Portrait = styled.div`
  // width: 2.38rem;
  // height: 4.1rem;
  width: 2.125rem;
  height: 3.688rem;
  background: url("https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fp2.webp?alt=media&token=49801e81-4158-4cdc-b5c0-d7ecc9504b7f");
  background-size: 31.875rem 29.504rem;
  transition: transform 0.3s ease;
  animation: tv 5.6s steps(8, jump-none) infinite,
    th 0.7s steps(15, jump-none) infinite;

  ${media.tablets} {
    width: 3.25rem;
    height: 5.813rem;
    background-size: 48.75rem 46.504rem;
  }

  ${media.tabletsL} {
    width: 3.25rem;
    height: 5.813rem;
    background-size: 48.75rem 46.504rem;
  }
`;

const Square = styled.div`
  width: 2.375rem;
  height: 2.375rem;

  // desktop related
  // transition: transform 0.3s ease;
  // &:hover {
  //   transform: scale(1.05);
  // }
`;

const SquareA = styled(Square)`
  background: url("https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fdesign.webp?alt=media&token=eac5f973-0a73-4640-8627-cd72bad9459c");
  background-size: 35.625rem 28.5rem;
  animation: tv 8.4s steps(12, jump-none) infinite,
    th 0.7s steps(15, jump-none) infinite;

  ${media.tablets} {
    width: 4rem;
    height: 4rem;
    background-size: 60rem 48rem;
  }

  ${media.tabletsL} {
    width: 4rem;
    height: 4rem;
    background-size: 60rem 48rem;
  }
`;

const SquareB = styled(Square)`
  background: url("https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fdev.webp?alt=media&token=174eab6c-f6bb-4566-bf4f-abd525768001");
  background-size: 28.5rem 21.375rem;
  animation: tv 6.3s steps(9, jump-none) infinite,
    th 0.7s steps(12, jump-none) infinite;

  ${media.tablets} {
    width: 4rem;
    height: 4rem;
    background-size: 48rem 36rem;
  }

  ${media.tabletsL} {
    width: 4rem;
    height: 4rem;
    background-size: 48rem 36rem;
  }
`;

const M_MainComp: React.FC<M_MainCompProps> = React.memo(({ scrollY, t }) => {
  const [$isHovered, set$IsHovered] = useState(false);
  const [$isAnimating, set$IsAnimating] = useState(false);
  const isTouchDevice = useIsTouchDevice();
  const { isPhoneLandscape } = useScreenSize();
  const { isTablet, isTabletLandscape } = useScreenSize();

  useEffect(() => {
    const startAnimation = () => {
      set$IsAnimating(true);
      setTimeout(() => {
        set$IsAnimating(false);
      }, 6000);
    };

    if (isTouchDevice) {
      startAnimation();

      const intervalId = setInterval(() => {
        startAnimation();
      }, 12000);

      return () => clearInterval(intervalId);
    }
  }, [isTouchDevice]);

  return (
    <MainCompWrapper>
      <A_PixelatedGradient />
      <TextCompWrapper $scrollY={scrollY}>
        {/* <PP_32 medium id="difference1">
            {t("home.hey")}
          </PP_32> */}
        <MainTextWrapper>
          {!isPhoneLandscape && (
            <PP_16 medium id="difference1">
              {t("home.hey")}
            </PP_16>
          )}

          <BigTextWrapper>
            <BigText $alignItems="center">
              {/* <PP_128 bold center>
              {t("home.im")}&nbsp;
            </PP_128> */}
              <PP_52 bold center>
                {t("home.im")}&nbsp;
              </PP_52>
              <Portrait />
              {/* <PP_128 bold center>
              &nbsp;{t("home.polina")}
            </PP_128> */}
              <PP_52 bold center>
                &nbsp;{t("home.polina")}
              </PP_52>
            </BigText>
            {isTabletLandscape ? (
              <BigText $alignItems="center" $gap="0.5rem">
                <PP_52 bold center>
                  {t("home.productDesigner")}
                </PP_52>
                <SquareA />
              </BigText>
            ) : (
              <>
                <BigText $alignItems="center" $gap="0.5rem">
                  <PP_52 bold center>
                    {t("home.product")}
                  </PP_52>

                  {/* <PP_128 bold center>
              {t("home.product")}
            </PP_128> */}

                  {/* <PP_128 bold center>
              ,
            </PP_128> */}
                </BigText>
                <BigText $alignItems="center" $gap="0.5rem">
                  <PP_52 bold center>
                    {t("home.designer")}
                  </PP_52>
                  <SquareA />
                  <PP_52 bold center>
                    ,
                  </PP_52>
                </BigText>
              </>
            )}
            <BigText $alignItems="center" $gap="0.5rem">
              <SquareB />
              {/* <PP_128 bold center lineHeight="84.1%">
              {t("home.dev")}
            </PP_128> */}
              <PP_52 bold center lineHeight="84.1%">
                {isTabletLandscape ? t("home.dev") : t("home.coder")}
              </PP_52>
            </BigText>
            <BigText
              onMouseEnter={
                !isTouchDevice ? () => set$IsHovered(true) : undefined
              }
              onMouseLeave={
                !isTouchDevice ? () => set$IsHovered(false) : undefined
              }
            >
              {/* <PP_128 bold center>
              {t("home.human")}
              <Span
                $isHovered={isTouchDevice ? false : $isHovered}
                $isAnimating={!isTouchDevice ? false : $isAnimating}
                $delay={$isHovered || $isAnimating ? "0s" : "0.3s"}
                $isTouchDevice={isTouchDevice}
              >
                .
              </Span>
              <Span
                $isHovered={isTouchDevice ? false : $isHovered}
                $isAnimating={!isTouchDevice ? false : $isAnimating}
                $delay={$isHovered || $isAnimating ? "0.3s" : "0s"}
                $isTouchDevice={isTouchDevice}
              >
                .
              </Span>
            </PP_128> */}
              <PP_52 bold center>
                {t("home.mobHuman")}
                <A_AnimatedDots
                  isHovered={$isHovered}
                  isAnimating={$isAnimating}
                  isTouchDevice={isTouchDevice}
                />
              </PP_52>
            </BigText>
          </BigTextWrapper>
        </MainTextWrapper>
        {isTabletLandscape && (
          <PP_16 medium id="difference" center>
            {t("home.ihave")}
          </PP_16>
        )}
        {/* <PP_32 medium id="difference" center>
          {t("home.ihave")}
        </PP_32> */}
        {!isPhoneLandscape && !isTabletLandscape && (
          <FlexBox
            $gap="20px"
            $direction="column"
            $alignItems="center"
            $alignContent="center"
          >
            <A_Button
              buttonText={t("home.contactMe")}
              main
              handleButtonClick={() =>
                window.open(
                  "mailto:polinasot@gmail.com?subject=Hi there!&body=What do you want?",
                  "_blank"
                )
              }
            />
            <PP_16 medium id="difference" center>
              {t("home.ihave")}
            </PP_16>
          </FlexBox>
        )}
      </TextCompWrapper>
      {/* <A_Icon iconName="scrollbottom" /> */}
    </MainCompWrapper>
  );
});

export default M_MainComp;
