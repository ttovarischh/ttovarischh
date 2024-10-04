import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
`;

const A_PixelatedGradient: React.FC = () => {
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

    const width = window.innerWidth;
    const height = window.innerHeight;
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);

    canvas.width = width;
    canvas.height = height;

    const color1 = { r: 87, g: 162, b: 139 }; // #57A28B
    const color2 = { r: 178, g: 194, b: 136 }; // #B2C188

    let time = 0;

    function drawPixelatedGradient() {
      ctx!.clearRect(0, 0, width, height);

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

          ctx!.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx!.fillRect(x, y, pixelSize, pixelSize);
        }
      }

      time += 0.05;
      animationRef.current = requestAnimationFrame(drawPixelatedGradient);
    }

    drawPixelatedGradient();

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPixelatedGradient();
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

  return (
    <CanvasWrapper>
      <StyledCanvas ref={canvasRef} />
    </CanvasWrapper>
  );
};

export default A_PixelatedGradient;
