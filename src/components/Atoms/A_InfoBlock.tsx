import React from "react";
import { FlexBox, PP_20, PP_24, PP_48, GridWrapper } from "../Common";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  // margin: 180px 0px;
  transition: all 0.5s;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    max-width: 100%;
  }

  a {
    text-decoration: underline;
    text-decoration-color: #6b6863;
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
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as "en" | "ru";

  const constructTextWithLinks = (text: string, links?: Array<Link>) => {
    let parts: Array<string | JSX.Element> = [text];

    if (links) {
      links.forEach((link) => {
        const linkText = link.text[0][currentLanguage];
        parts = parts.flatMap((part) =>
          typeof part === "string"
            ? part.split(linkText).flatMap((item, index) =>
                index === 0
                  ? item
                  : [
                      <a href={link.url} key={index} target="_blank">
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
          <PP_24 medium color="#6B6863">
            {header}
          </PP_24>
          <PP_48 medium lineHeight="113%">
            {/* {text} */}
            {constructTextWithLinks(text || "", links)}
          </PP_48>
        </InfoBlockWrapperBig>
      </GridWrapper>
    );
  } else {
    return (
      <InfoBlockWrapper $body={$body} id={references}>
        <PP_20 medium color="#6B6863">
          {header}
        </PP_20>
        <PP_20>
          {/* {text} */}
          {constructTextWithLinks(text || "", links)}
        </PP_20>
      </InfoBlockWrapper>
    );
  }
};

export default A_InfoBlock;
