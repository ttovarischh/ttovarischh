import React from "react";
import A_LinkCard from "../Atoms/A_LinkCard";
import styled from "styled-components";
import { FlexBox } from "../Common";

interface LinkCardsGridProps {
  linkCards: Array<{
    image_src: string;
    header: string;
    text: string;
    link_text: string;
    url: string;
  }>;
  references?: string[];
}

const LinkCardsContainer = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

const M_LinkCardsGrid: React.FC<LinkCardsGridProps> = ({
  linkCards,
  references,
}) => {
  return (
    <LinkCardsContainer>
      {linkCards.map(({ image_src, header, text, link_text, url }, index) => (
        <A_LinkCard
          key={header}
          image_src={image_src}
          header={header}
          text={text}
          link_text={link_text}
          url={url}
          reference={references ? references[index] : undefined}
          style={{
            transform: index % 2 === 0 ? "rotate(-0.7deg)" : "rotate(0.8deg)",
          }}
        />
      ))}
    </LinkCardsContainer>
  );
};

export default M_LinkCardsGrid;
