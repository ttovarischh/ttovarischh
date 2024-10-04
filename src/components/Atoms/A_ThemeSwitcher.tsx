// A_ThemeSwitcher.tsx
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const fullRotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ThemeSwitcherButton = styled.button<{ $rotating: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background-color: ${({ theme }) => theme.navigation.themeswitcher};
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  backdrop-filter: blur(12px) saturate(140%);
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  align-self: center;

  &:hover {
    transform: rotate(45deg);
  }

  ${({ $rotating }) =>
    $rotating &&
    css`
      animation: ${fullRotation} 0.8s forwards;
    `}
`;

interface A_ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const A_ThemeSwitcher: React.FC<A_ThemeSwitcherProps> = ({
  theme,
  toggleTheme,
}) => {
  const [rotating, setRotating] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 800);
  };

  return (
    <ThemeSwitcherButton onClick={handleClick} $rotating={rotating}>
      {theme === "light" ? "☀️" : "🌙"}
    </ThemeSwitcherButton>
  );
};

export default A_ThemeSwitcher;
