import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.light_grey};
`;

const Divider = React.memo(() => {
  return <DividerWrapper />;
});

export default Divider;
