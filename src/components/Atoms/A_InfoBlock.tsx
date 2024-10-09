import React from "react";
import { FlexBox, PP_20, PP_24, PP_48, GridWrapper } from "../Quarks";
import styled, { useTheme } from "styled-components";

interface Link {
  text: Array<{ en: string; ru: string }>;
  url: string;
}

interface InfoBlockProps {
  header?: string;
  text?: string;
  $body?: boolean;
  references?: string;
  links?: Array<Link>;
  currentLanguage: "en" | "ru";
  noText?: boolean;
}

const InfoBlockWrapper = styled(FlexBox)<{ $body?: boolean }>`
  flex-direction: column;
  gap: 2px;
`;

const InfoBlockWrapperBig = styled(FlexBox)<{ $body?: boolean }>`
  grid-column-start: 2;
  grid-column-end: 6;
  max-width: 85%;
  gap: 28px;
  transition: all 0.5s;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    max-width: 100%;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
    transition: all 0.5s ease;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const A_InfoBlock: React.FC<InfoBlockProps> = ({
  header,
  text,
  $body,
  references,
  links,
  currentLanguage,
  noText,
}) => {
  const theme = useTheme();

  const constructTextWithLinks = (text: string, links?: Array<Link>) => {
    let parts: Array<string | JSX.Element> = [text];

    if (links) {
      links.forEach((link) => {
        const linkText = link.text[0][currentLanguage];
        const linkKey = link.text[0]["en"];
        parts = parts.flatMap((part) =>
          typeof part === "string"
            ? part.split(linkText).flatMap((item, index) =>
                index === 0
                  ? item
                  : [
                      <a href={link.url} key={linkKey} target="_blank">
                        {linkText}
                      </a>,
                      item,
                    ]
              )
            : part
        );
      });
    }

    return parts;
  };

  if ($body) {
    return (
      <GridWrapper>
        <InfoBlockWrapperBig $body={$body} id={references}>
          <PP_24 medium color={theme.medium_grey}>
            {header}
          </PP_24>
          <PP_48 medium lineHeight="113%">
            {constructTextWithLinks(text ?? "", links)}
          </PP_48>
        </InfoBlockWrapperBig>
      </GridWrapper>
    );
  } else {
    return (
      <InfoBlockWrapper $body={$body} id={references}>
        <PP_20 medium color={theme.medium_grey}>
          {header}
        </PP_20>
        {noText ? (
          <PP_20 medium color={theme.medium_grey}>
            {text}
          </PP_20>
        ) : (
          <PP_20>{constructTextWithLinks(text ?? "", links)}</PP_20>
        )}
      </InfoBlockWrapper>
    );
  }
};

export default A_InfoBlock;
