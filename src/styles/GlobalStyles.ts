// GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.black};
    min-height: 100vh;
    position: relative;
    overflow: auto;
    overflow-x: hidden;
    padding: 0;
  }

  ::selection {
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.white};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.white};
  }

    .embla__dot {
    background-color: ${({ theme }) => theme.embla.dot};
    touch-action: manipulation;
    cursor: pointer;
    border: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  
  .embla__dot--selected {
    background-color: ${({ theme }) => theme.embla.dot_active};
    width: 16px;
    height: 16px;
  }
  
`;

export default GlobalStyle;
