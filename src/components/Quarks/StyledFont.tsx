import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  center?: boolean;
  uppercase?: boolean;
  offsetTop?: number;
  offsetBottom?: number;
  offsetLeft?: number;
  offsetRight?: number;
  lineHeight?: string;
  fontSize?: string;
  capitalize?: boolean;
  medium?: boolean;
  bold?: boolean;
  underline?: boolean;
  className?: string;
  id?: string;
}

const StyledText = styled.p<{
  $fontSize?: string;
  $lineHeight?: string;
  $center?: boolean;
  $offsetTop?: number;
  $offsetBottom?: number;
  $offsetLeft?: number;
  $offsetRight?: number;
  $underline?: boolean;
  $uppercase?: boolean;
  $capitalize?: boolean;
  $color?: string;
}>`
  margin: 0;
  font-size: ${({ $fontSize }) => $fontSize ?? "1rem"};
  line-height: ${({ $lineHeight }) => $lineHeight ?? "normal"};
  color: ${({ $color, theme }) => $color ?? theme.white};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  margin-top: ${({ $offsetTop }) => $offsetTop ?? 0}px;
  margin-bottom: ${({ $offsetBottom }) => $offsetBottom ?? 0}px;
  margin-left: ${({ $offsetLeft }) => $offsetLeft ?? 0}px;
  margin-right: ${({ $offsetRight }) => $offsetRight ?? 0}px;
  text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
  text-transform: ${({ $uppercase, $capitalize }) =>
    $uppercase ? "uppercase" : $capitalize ? "capitalize" : "none"};
`;

const Text: React.FC<TextProps> = ({
  children,
  className,
  id,
  bold,
  medium,
  fontSize,
  lineHeight,
  center,
  offsetTop,
  offsetBottom,
  offsetLeft,
  offsetRight,
  underline,
  uppercase,
  capitalize,
  color,
}) => {
  return (
    <StyledText
      className={`${className ?? ""} ${
        bold ? "ppbold" : medium ? "ppmedium" : "ppbook"
      }`}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $center={center}
      $offsetTop={offsetTop}
      $offsetBottom={offsetBottom}
      $offsetLeft={offsetLeft}
      $offsetRight={offsetRight}
      $underline={underline}
      $uppercase={uppercase}
      $capitalize={capitalize}
      $color={color}
      id={id}
    >
      {children}
    </StyledText>
  );
};

export const PP_11 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="0.688rem" {...props} />
);
export const PP_14 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="0.875rem" {...props} />
);
export const PP_16 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="1rem" {...props} />
);
export const PP_18 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="1.125rem" {...props} />
);
export const PP_20 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="1.25rem" {...props} />
);
export const PP_24 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="1.5rem" {...props} />
);
export const PP_32 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="2rem" {...props} />
);
export const PP_40 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="2.5rem" {...props} />
);
export const PP_48 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="3rem" {...props} />
);
export const PP_52 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="3.25rem" {...props} />
);
export const PP_80 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="5rem" {...props} />
);
export const PP_128 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="8rem" {...props} />
);
export const DJR_16 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrbold" fontSize="1rem" {...props} />
);
export const DJR_20 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrbold" fontSize="1.25rem" {...props} />
);
export const DJR_64 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrmedium" fontSize="4rem" {...props} />
);
export const DJR_128 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrmedium" fontSize="8rem" {...props} />
);
