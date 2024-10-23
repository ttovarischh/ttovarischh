// src/routes/NotFoundPage.tsx
import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { PP_32, PP_20, PP_18 } from "../components/Quarks";
import A_Button from "../components/Atoms/A_Button";
import { media } from "../styles/mediaQueries";
import { useScreenSize } from "../styles/ScreenSizeContext";
import { useNavigate } from "react-router-dom";

interface NotFoundPageProps {
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const NotFoundPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @supports (height: 100svh) {
    height: 100svh;
  }

  box-sizing: border-box;
  padding-left: calc(16px + env(safe-area-inset-left, 0px));
  padding-right: calc(16px + env(safe-area-inset-right, 0px));
`;

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  -webkit-mask-image: url("/assets/images/404.svg");
  mask-image: url("/assets/images/404.svg");
  mask-size: 100% auto;
  -webkit-mask-size: 100% auto;
  mask-position: center;
  mask-repeat: no-repeat;

  ${media.tabletsL} {
    mask-size: 80% auto;
  }

  ${media.laptop} {
    mask-size: 60% auto;
  }
`;

const NotFoundComp = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 32px;
  gap: 20px;
  align-self: flex-end;
  grid-row-start: 3;
  white-space: pre-line;

  ${media.tabletsL} {
    margin-bottom: 40px;
  }

  ${media.laptop} {
    margin-bottom: 40px;
  }
`;

const NotFoundPage: React.FC<NotFoundPageProps> = ({ t, currentLanguage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const pixelSize = 50;
  const mousePosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);

      canvas.width = width;
      canvas.height = height;

      const color1 = { r: 87, g: 162, b: 139 }; // #57A28B
      const color2 = { r: 178, g: 194, b: 136 }; // #B2C188

      let time = 0;

      const drawPixelatedGradient = () => {
        ctx.clearRect(0, 0, width, height);

        const centerX = mousePosition.current.x;
        const centerY = mousePosition.current.y;

        for (let x = 0; x < width; x += pixelSize) {
          for (let y = 0; y < height; y += pixelSize) {
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const gradientFactor = distance / maxDistance;

            const animatedColor1 = {
              r: Math.floor(color1.r + 20 * Math.sin(time + 0)),
              g: Math.floor(color1.g + 20 * Math.sin(time + 1)),
              b: Math.floor(color1.b + 20 * Math.sin(time + 2)),
            };

            const animatedColor2 = {
              r: Math.floor(color2.r + 20 * Math.sin(time + 3)),
              g: Math.floor(color2.g + 20 * Math.sin(time + 4)),
              b: Math.floor(color2.b + 20 * Math.sin(time + 5)),
            };

            const r = Math.floor(
              animatedColor1.r +
                (animatedColor2.r - animatedColor1.r) * gradientFactor
            );
            const g = Math.floor(
              animatedColor1.g +
                (animatedColor2.g - animatedColor1.g) * gradientFactor
            );
            const b = Math.floor(
              animatedColor1.b +
                (animatedColor2.b - animatedColor1.b) * gradientFactor
            );

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }

        time += 0.05;
        animationRef.current = requestAnimationFrame(drawPixelatedGradient);
      };

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      drawPixelatedGradient();
    };

    handleResize();

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const theme = useTheme();
  const { isTabletLandscape, isLaptop } = useScreenSize();
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper>
      <CanvasWrapper>
        <StyledCanvas ref={canvasRef} />
        <NotFoundComp>
          <BottomWrapper>
            {isTabletLandscape || isLaptop ? (
              <>
                <PP_32>{t("error.header")}</PP_32>
                <PP_20 center medium color={theme.medium_grey}>
                  {t("error.text")}
                </PP_20>
              </>
            ) : (
              <>
                <A_Button
                  buttonText={t("error.goHome")}
                  handleButtonClick={() => navigate("/")}
                />
                <PP_18 center medium color={theme.medium_grey}>
                  {t("error.mobText")}
                </PP_18>
              </>
            )}
          </BottomWrapper>
        </NotFoundComp>
      </CanvasWrapper>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
