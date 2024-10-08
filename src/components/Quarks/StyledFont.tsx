import React from "react";
import { useTheme } from "styled-components";

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

const Text = (props: TextProps) => {
  const theme = useTheme();
  return (
    <p
      className={
        props.className ??
        (props.bold ? "ppbold" : props.medium ? "ppmedium" : "ppbook")
      }
      id={props.id}
      style={{
        fontSize: props.fontSize ?? "1rem",
        lineHeight: props.lineHeight ?? "normal",
        color: props.color ?? theme.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ?? 0,
        marginBottom: props.offsetBottom ?? 0,
        marginLeft: props.offsetLeft ?? 0,
        marginRight: props.offsetRight ?? 0,
        textDecoration: props.underline ? "underline" : "none",
        textTransform: props.uppercase
          ? "uppercase"
          : props.capitalize
          ? "capitalize"
          : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const PP_14 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="0.875rem" {...props} />
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
export const PP_48 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="3rem" {...props} />
);
export const PP_80 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="5rem" {...props} />
);
export const PP_128 = (props: Omit<TextProps, "fontSize">) => (
  <Text fontSize="8rem" {...props} />
);
export const DJR_20 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrbold" fontSize="1.25rem" {...props} />
);
export const DJR_128 = (props: Omit<TextProps, "fontSize">) => (
  <Text className="djrmedium" fontSize="8rem" {...props} />
);
