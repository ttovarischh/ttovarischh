import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

interface TextProps {
    children: React.ReactNode;
    color?: string;
    center?: boolean;
    uppercase?: boolean;
    offsetTop?: number;
    offsetBottom?: number;
    offsetLeft?: number;
    offsetRight?: number;
    lineHeight?: number;
    size?: number;
    capitalize?: boolean;
    medium?: boolean;
    underline?: boolean;
}

export const A_Text = (props: TextProps) => {
    const theme = useContext(ThemeContext) || { text: { white: "#fff" } };
    return (
        <p
            className={props.medium ? "ppmedium" : "ppbook"}
            style={{
                fontSize: props.size ?? 16,
                lineHeight: props.lineHeight ?? "normal",
                color: props.color ?? theme.text.white,
                margin: 0,
                textAlign: props.center ? "center" : "left",
                marginTop: props.offsetTop ? props.offsetTop : 0,
                marginBottom: props.offsetBottom ? props.offsetBottom : 0,
                marginLeft: props.offsetLeft ? props.offsetLeft : 0,
                marginRight: props.offsetRight ? props.offsetRight : 0,
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