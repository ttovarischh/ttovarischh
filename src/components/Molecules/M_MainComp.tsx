// M_Navbar
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FlexBox, PP_32, PP_128 } from "../Quarks";
import A_PixelatedGradient from "../Atoms/A_PixelatedGradient";
import A_Icon from "../Atoms/A_Icon";

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
  // min-height: 840px;

  svg {
    position: absolute;
    left: calc(50% - 9px);
    bottom: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg:hover {
    animation: ${jiggle} 0.6s ease-in-out;
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

  #difference {
    color: ${({ theme }) => theme.mainComp.text} !important;
    max-width: 58%;
  }

  > * {
    cursor: default;
  }
`;

const VideoBackground = styled.video`
  width: 3.65vw;
  height: 6.41vw;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SquareVideoBackground = styled.video`
  width: 4.79vw;
  height: 4.79vw;
  object-fit: cover;
  margin-top: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Span = styled.span<{ $isHovered: boolean; $delay: string }>`
  width: ${({ $isHovered }) => ($isHovered ? "2rem" : 0)};
  display: inline-block;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  position: relative;
  transform: ${({ $isHovered }) =>
    $isHovered ? "translateY(0)" : "translateY(10px)"};
  transition: opacity 0.4s ease, transform 0.4s ease, width 0.15s;
  transition-delay: ${({ $delay }) => $delay};
`;

const M_MainComp: React.FC<M_MainCompProps> = ({ scrollY, t }) => {
  const [$isHovered, set$IsHovered] = useState(false);

  return (
    <MainCompWrapper>
      <A_PixelatedGradient />
      <TextCompWrapper $scrollY={scrollY}>
        <PP_32 medium id="difference">
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
            onMouseEnter={() => set$IsHovered(true)}
            onMouseLeave={() => set$IsHovered(false)}
          >
            <PP_128 bold center>
              {t("home.human")}
              <Span $isHovered={$isHovered} $delay={$isHovered ? "0s" : "0.3s"}>
                .
              </Span>
              <Span $isHovered={$isHovered} $delay={$isHovered ? "0.3s" : "0s"}>
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
