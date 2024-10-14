// M_Navbar
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FlexBox, PP_32, PP_128 } from "../Quarks";
import A_PixelatedGradient from "../Atoms/A_PixelatedGradient";
import A_Icon from "../Atoms/A_Icon";
import { media } from "../../styles/mediaQueries";
import useIsTouchDevice from "../../hooks/useIsTouchDevice";

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
  overflow: hidden;

  svg {
    position: absolute;
    left: calc(50% - 9px);
    bottom: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg:hover {
    animation: ${jiggle} 0.6s ease-in-out;
  }

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
  gap: 0.3rem;
`;

const BigText = styled(FlexBox)`
  height: 7.5rem;
  > * {
    line-height: 84.1% !important;
    color: ${({ theme }) => theme.mainComp.header} !important;
  }

  ${media.tabletsL} {
    height: 6rem;
    p {
      font-size: 6rem;
    }
  }

  ${media.tabletsP} {
    height: 5rem;
    p {
      font-size: 5rem;
    }
  }

  ${media.ipadProP} {
    opacity: 0.5;
    height: 6.5rem;
    p {
      font-size: 6.5rem;
    }
  }
`;

const TextCompWrapper = styled(FlexBox)<{ $scrollY: number }>`
  position: absolute;
  top: 0;
  transform: translateY(${({ $scrollY }) => $scrollY * -1}px);
  left: 0;
  right: 0;
  bottom: 0;
  gap: 4vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;

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
    color: ${({ theme }) => theme.mainComp.text} !important;
    max-width: 58%;
  }

  ${media.tabletsP} {
    #difference,
    #difference1 {
      color: ${({ theme }) => theme.mainComp.text} !important;
      max-width: 70%;
    }
  }

  > * {
    cursor: default;
  }

  @media only screen and (min-aspect-ratio: 1440 / 700) and (max-device-width: 1600px) {
    padding-top: calc(1.4rem + 48px);
  }
`;

const VideoBackground = styled.video`
  width: 3.88rem;
  height: 7.192rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${media.tablets} {
    width: 4.65vw;
    height: 7.41vw;
  }
`;

const SquareVideoBackground = styled.video`
  // width: 4.79vw;
  // height: 4.79vw;
  width: 5.2rem;
  height: 5.2rem;
  object-fit: contain;
  margin-top: 0.7rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${media.tablets} {
    width: 6vw;
    height: 6vw;
  }
`;

const Span = styled.span<{
  $isHovered: boolean;
  $isAnimating: boolean;
  $delay: string;
  $isTouchDevice: boolean;
}>`
  width: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? "2rem" : 0};
  display: inline-block;
  opacity: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? 1 : 0};
  position: relative;
  transform: ${({ $isAnimating, $isHovered }) =>
    $isAnimating || $isHovered ? "translateY(0)" : "translateY(10px)"};
  transition: opacity 0.4s ease, transform 0.4s ease, width 0.15s;
  transition-delay: ${({ $delay }) => $delay};

  ${media.tablets} {
    width: ${({ $isAnimating, $isHovered }) =>
      $isAnimating || $isHovered ? "1.4rem" : 0};
  }
`;

const M_MainComp: React.FC<M_MainCompProps> = ({ scrollY, t }) => {
  const [$isHovered, set$IsHovered] = useState(false);
  const [$isAnimating, set$IsAnimating] = useState(false);
  const isTouchDevice = useIsTouchDevice();

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
        <PP_32 medium id="difference1">
          {t("home.hey")}
        </PP_32>

        <BigTextWrapper>
          <BigText $alignItems="center">
            <PP_128 bold center>
              {t("home.im")}&nbsp;
            </PP_128>
            <VideoBackground
              src="https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/Portrait.webm?alt=media&token=2f7878a2-cdf1-43e1-8b63-7f632526249b"
              autoPlay
              loop
              muted
            />
            <PP_128 bold center>
              &nbsp;{t("home.polina")}
            </PP_128>
          </BigText>
          <BigText $alignItems="center" $gap="1rem">
            <PP_128 bold center>
              {t("home.product")}
            </PP_128>
            <SquareVideoBackground
              src="https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/design3_VP9_3.webm?alt=media&token=7892a96b-67e7-43fc-8925-068f859d41d7"
              autoPlay
              loop
              muted
            />
            <PP_128 bold center>
              ,
            </PP_128>
          </BigText>
          <BigText $alignItems="center" $gap="1rem">
            <SquareVideoBackground
              src="https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/dev_VP9_3_1.webm?alt=media&token=f9146125-0561-4f2a-8f4f-e0b2152d4c60"
              autoPlay
              loop
              muted
            />
            <PP_128 bold center lineHeight="84.1%">
              {t("home.dev")}
            </PP_128>
          </BigText>
          <BigText
            onMouseEnter={
              !isTouchDevice ? () => set$IsHovered(true) : undefined
            }
            onMouseLeave={
              !isTouchDevice ? () => set$IsHovered(false) : undefined
            }
          >
            <PP_128 bold center>
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
            </PP_128>
          </BigText>
        </BigTextWrapper>
        <PP_32 medium id="difference" center>
          {t("home.ihave")}
        </PP_32>
      </TextCompWrapper>
      <A_Icon iconName="scrollbottom" />
    </MainCompWrapper>
  );
};

export default M_MainComp;
