import React from "react";
import styled from "styled-components";

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.04vw;
`;

export const GridWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledGridWrapper>{children}</StyledGridWrapper>;
};
