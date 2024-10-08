import styled, { css } from "styled-components";

interface FlexBoxProps {
  $direction?: "row" | "column";
  $alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  $justifyContent?:
    | "start"
    | "normal"
    | "space-between"
    | "space-around"
    | "center"
    | "space-evenly"
    | "end"
    | "flex-start"
    | "flex-end";
  $alignContent?: string;
  $offsetTop?: string;
  $offsetBottom?: string;
  $offsetLeft?: string;
  $offsetRight?: string;
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: string;
}

export const FlexBox = styled.div<FlexBoxProps>`
  ${({
    $direction,
    $alignItems,
    $justifyContent,
    $offsetTop,
    $offsetBottom,
    $offsetLeft,
    $offsetRight,
    $gap,
    $alignContent,
  }) => css`
    display: flex;
    flex-direction: ${$direction ?? "row"};
    align-items: ${$alignItems ?? "flex-start"};
    align-content: ${$alignContent ?? "flex-start"};
    justify-content: ${$justifyContent ?? "start"};
    margin-top: ${$offsetTop ?? "0px"};
    margin-bottom: ${$offsetBottom ?? "0px"};
    margin-left: ${$offsetLeft ?? "0px"};
    margin-right: ${$offsetRight ?? "0px"};
    height: auto;
    flex-wrap: wrap;
    gap: ${$gap ?? "0px"};
  `}
`;
