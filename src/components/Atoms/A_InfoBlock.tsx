import React from "react";
import { FlexBox, PP_20, PP_24, PP_48, PP_18, PP_32 } from "../Quarks";
import styled, { useTheme } from "styled-components";
import useConstructTextWithLinks from "../../hooks/useConstructTextWithLinks";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

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
  slash?: boolean;
}

const GridWrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(6, 1fr);
  // grid-column-gap: 1.04vw;

  ${media.tablets} {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: var(--mobile-gap-8);
  }

  ${media.tabletsL} {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: var(--mobile-gap-8);
  }
`;

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
  // gap: 2px;
  gap: 4px;
  // min-width: 100%;
  a {
    transition: all 0.8s ease-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const InfoBlockWrapperBig = styled(FlexBox)<{ $body?: boolean }>`
  // grid-column-start: 2;
  // grid-column-end: 6;
  // max-width: 85%;
  // gap: 28px;
  gap: 12px;
  // transition: all 0.5s;

  ${media.phoneLansdscape} {
    padding-left: 20vw;
    padding-right: 20vw;
  }

  ${media.tablets} {
    grid-column-start: 2;
    grid-column-end: 6;
  }

  ${media.tabletsL} {
    grid-column-start: 2;
    grid-column-end: 6;
  }

  // @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  //   max-width: 100%;
  // }

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
  // bottom: -0.6rem;
  top: 1.2rem;
  // left: -0.7rem;
  left: 0rem;
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
  -webkit-backdrop-filter: blur(6px);

  ${media.tablets} {
    white-space: nowrap;
  }
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
  slash,
}) => {
  const theme = useTheme();
  const { isTablet, isPhoneLandscape } = useScreenSize();

  const constructedText = useConstructTextWithLinks(
    text ?? "",
    currentLanguage,
    links
  );

  if ($body) {
    return (
      <GridWrapper>
        <InfoBlockWrapperBig $body={$body} id={references}>
          {/* <PP_24 medium color={theme.medium_grey}>
            {header}
          </PP_24> */}
          <PP_32 medium color={theme.medium_grey}>
            {header}
          </PP_32>
          {/* <PP_48 medium lineHeight="113%">
            {constructedText}
          </PP_48> */}
          <PP_18>{constructedText}</PP_18>
        </InfoBlockWrapperBig>
      </GridWrapper>
    );
  } else {
    return (
      <InfoBlockWrapper $body={$body} id={references}>
        {/* <PP_20 medium color={theme.medium_grey}>
          {header}
        </PP_20> */}
        <PP_18 medium color={theme.medium_grey}>
          {header}
        </PP_18>
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
              <React.Fragment key={index}>
                <a href={link.url} target="_blank">
                  <PP_18>{link.name}</PP_18>
                  {/* <PP_20>{link.name}</PP_20> */}
                </a>
                {slash && !isTablet && index !== aboutMeLinks.length - 1 && (
                  <PP_18 color={theme.medium_grey}>/</PP_18>
                )}
              </React.Fragment>
            ))}
          </FlexBox>
        ) : (
          <>
            {/* <PP_20>{constructedText}</PP_20> */}
            <PP_18>{constructedText}</PP_18>
            {jobless && (
              <TagWrapper>
                {/* <PP_20>{jobless}</PP_20> */}
                <PP_18>{jobless}</PP_18>
              </TagWrapper>
            )}
          </>
        )}
      </InfoBlockWrapper>
    );
  }
};

export default A_InfoBlock;
