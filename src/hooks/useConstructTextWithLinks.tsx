// src/hooks/useConstructTextWithLinks.tsx
import React, { useMemo } from "react";

interface Link {
  text: Array<{ en: string; ru: string }>;
  url: string;
}

const useConstructTextWithLinks = (
  text: string,
  currentLanguage: "en" | "ru",
  links?: Array<Link>
) => {
  const constructedText = useMemo(() => {
    let parts: Array<string | JSX.Element> = [text];

    if (links) {
      links.forEach((link) => {
        const linkText = link.text[0][currentLanguage];
        const linkKey = link.text[0]["en"];
        parts = replaceTextWithLink(parts, linkText, link.url, linkKey);
      });
    }

    return parts;
  }, [text, links, currentLanguage]);

  return constructedText;
};

const replaceTextWithLink = (
  parts: Array<string | JSX.Element>,
  linkText: string,
  url: string,
  linkKey: string
) => {
  return parts.flatMap((part) => {
    if (typeof part === "string") {
      return part.split(linkText).flatMap((item, index) =>
        index === 0
          ? item
          : [
              <a
                href={url}
                key={linkKey}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
              </a>,
              item,
            ]
      );
    }
    return part;
  });
};

export default useConstructTextWithLinks;
