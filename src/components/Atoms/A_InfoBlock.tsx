import React from "react";
import { FlexBox, PP_20, PP_24, PP_48, GridWrapper } from "../Quarks";
import styled, { useTheme } from "styled-components";
import useConstructTextWithLinks from "../../hooks/useConstructTextWithLinks";

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
  jobless?: string;
  team?: Array<{
    imageSrc: string;
    link: string;
  }>;
  aboutMeLinks?: Array<{
    name: string;
    url: string;
  }>;
}

const Mate = styled.a<{ $imageUrl?: string }>`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 100px;
  background: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  transition: all 0.8s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.6);
  }
`;

const InfoBlockWrapper = styled(FlexBox)<{ $body?: boolean }>`
  position: relative;
  flex-direction: column;
  gap: 2px;
  min-width: 100%;
  a {
    transition: all 0.8s ease-out;

    &:hover {
      opacity: 0.5;
    }
  }
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

const TagWrapper = styled(FlexBox)`
  cursor: default;
  position: absolute;
  bottom: -0.6rem;
  left: -0.7rem;
  padding: 8px 12px;
  border-radius: 12px;
  transform: rotate(1.766deg);
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(116, 151, 99, 0.5) 0%,
    rgba(43, 109, 104, 0.5) 100%
  );
  backdrop-filter: blur(6px);
`;

const A_InfoBlock: React.FC<InfoBlockProps> = ({
  header,
  text,
  $body,
  references,
  links,
  currentLanguage,
  jobless,
  team,
  aboutMeLinks,
}) => {
  const theme = useTheme();

  const constructedText = useConstructTextWithLinks(
    text ?? "",
    currentLanguage,
    links
  );

  if ($body) {
    return (
      <GridWrapper>
        <InfoBlockWrapperBig $body={$body} id={references}>
          <PP_24 medium color={theme.medium_grey}>
            {header}
          </PP_24>
          <PP_48 medium lineHeight="113%">
            {constructedText}
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
        {team ? (
          <FlexBox $gap="6px" $offsetTop="4px">
            {team.map((mate, index) => (
              <Mate
                $imageUrl={mate.imageSrc}
                key={index}
                href={mate.link}
                target="_blank"
              />
            ))}
          </FlexBox>
        ) : aboutMeLinks ? (
          <FlexBox $gap="6px" $direction="column">
            {aboutMeLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank">
                <PP_20>{link.name}</PP_20>
              </a>
            ))}
          </FlexBox>
        ) : (
          <>
            <PP_20>{constructedText}</PP_20>
            {jobless && (
              <TagWrapper>
                <PP_20>{jobless}</PP_20>
              </TagWrapper>
            )}
          </>
        )}
      </InfoBlockWrapper>
    );
  }
};

export default A_InfoBlock;
