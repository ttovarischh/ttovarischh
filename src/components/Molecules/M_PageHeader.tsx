import React from "react";
import styled, { useTheme } from "styled-components";
import {
  FlexBox,
  DJR_128,
  DJR_64,
  PP_48,
  PP_20,
  PP_18,
  PP_32,
} from "../Quarks";
import A_InfoBlock from "../Atoms/A_InfoBlock";
import A_Button from "../Atoms/A_Button";
import A_Tag from "../Atoms/A_Tag";
import A_Icon from "../Atoms/A_Icon";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import Divider from "../Quarks/Divider";

interface Link {
  name: { en: string; ru: string };
  url: string | { en: string; ru: string };
}

interface PageHeaderProps {
  wrapped?: boolean;
  bigText?: string;
  bigTextSpan?: string;
  bigTextB?: string;
  s_description?: string;
  description?: string;
  links?: Link[];
  currentLanguage: "en" | "ru";
  works?: boolean;
  multiLine?: boolean;
  jobless?: string;
  filterTags?: Array<{ name: string; filter: string | null }>;
  onFilterSelect?: (filter: string | null) => void;
  selectedFilter?: string | null;
  columnAHeader?: string;
  columnBHeader?: string;
  columnCHeader?: string;
  teamColumnHeader?: string;
  columnAText?: string;
  columnBText?: string;
  columnCText?: string;
  iconName?: string;
  team?: Array<{
    imageSrc: string;
    link: string;
  }>;
  contactMeLinks?: Array<{
    name: string;
    url: string;
  }>;
  followMeLinks?: Array<{
    name: string;
    url: string;
  }>;
  ps?: string;
  slash?: boolean;
}

const MainInfoWrapper = styled(FlexBox)`
  // padding: 166px 2.5vw 32px;
  padding-top: 166px;
  padding-bottom: 24px;
  padding-left: calc(16px + env(safe-area-inset-left, 0px));
  padding-right: calc(16px + env(safe-area-inset-right, 0px));
  flex-direction: column;
`;

const ProjectInfoWrapper = styled.div<{ $wrapped?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.phoneLansdscape} {
    padding-left: 20vw;
    padding-right: 20vw;
  }

  ${media.tablets} {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }

  ${media.tabletsL} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    & > div:nth-child(1) {
      grid-column-start: 2;
      max-width: 165px;
    }

    & > div:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 6;
    }
  }

  // ${media.phoneLansdscape} {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  //   margin-top: 40px;
  //   grid-column-gap: 1.04vw;

  //   & > div:nth-child(1) {
  //     grid-column-start: 2;
  //     max-width: 165px;
  //   }

  //   & > div:nth-child(2) {
  //     grid-column-start: 3;
  //     grid-column-end: 6;
  //   }
  // }

  // display: grid;
  // margin: ${({ $wrapped }) => ($wrapped ? "0px" : "140px 2.5vw")};
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  // grid-column-gap: 1.04vw;

  // & > div:nth-child(1) {
  //   grid-column-start: 2;
  //   max-width: 165px;
  // }

  // & > div:nth-child(2) {
  //   grid-column-start: 3;
  //   grid-column-end: 6;
  // }

  // span {
  //   color: ${({ theme }) => theme.medium_grey} !important;
  // }
`;

// const ProjectInfoWrapper = styled.div<{ $wrapped?: boolean }>`
//   display: grid;
//   margin: ${({ $wrapped }) => ($wrapped ? "0px" : "140px 2.5vw")};
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-column-gap: 1.04vw;

//   & > div:nth-child(1) {
//     grid-column-start: 2;
//     max-width: 165px;
//   }

//   & > div:nth-child(2) {
//     grid-column-start: 3;
//     grid-column-end: 6;
//   }

//   span {
//     color: ${({ theme }) => theme.medium_grey} !important;
//   }
// `;

const LinksAndInfoWrapper = styled(FlexBox)<{ $wrapped?: boolean }>`
  width: 100%;
  gap: 16px;

  div {
    width: 100%;
    // flex-direction: row;
    column-gap: 12px;
    flex-direction: ${({ $wrapped }) => ($wrapped ? "row" : "column")};
  }

  ${media.phoneLansdscape} {
    div {
      width: 100%;
      flex-direction: column;
      column-gap: 12px;
    }
  }

  ${media.tablets} {
    gap: 20px;

    div {
      flex-direction: column;
    }
  }

  ${media.tabletsL} {
    gap: 20px;

    div {
      flex-direction: column;
    }
  }
`;

const MainInfoContent = styled.div<{ $works?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $works }) => ($works ? "1fr" : "1fr 1fr")};
  grid-column-gap: ${({ $works }) => ($works ? "0" : "var(--mobile-gap-12)")};
  margin-top: 40px;
  width: 100%;

  ${media.tablets} {
    grid-template-columns: 1fr 2fr 1fr 2fr;

    & > div:nth-child(2) {
      grid-column-start: 3;
    }
  }

  ${media.tabletsL} {
    grid-template-columns: 1fr 2fr 1fr 2fr;
    & > div:nth-child(2) {
      grid-column-start: 3;
    }
  }

  // desktop
  // margin-top: 88px;
  // grid-column-gap: 1.04vw;
`;

const ButtonsWrapper = styled(FlexBox)`
  width: 100%;
`;

const BigTextWrapper = styled(FlexBox)<{ $multiLine?: boolean }>`
  white-space: pre-line;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  ${media.tablets} {
    white-space: ${({ $multiLine }) => ($multiLine ? "pre-line" : "nowrap")};
    // width: ${({ $multiLine }) => ($multiLine ? "65%" : "100%")};
    p {
      max-width: ${({ $multiLine }) => ($multiLine ? "100%" : "50%")};
      line-height: ${({ $multiLine }) => ($multiLine ? "8rem" : "normal")};
      margin-top: ${({ $multiLine }) => $multiLine && "1rem"};
    }
    svg {
      width: 6rem;
      height: 6rem;
    }
  }

  ${media.tabletsL} {
    white-space: ${({ $multiLine }) => ($multiLine ? "pre-line" : "nowrap")};
    // width: ${({ $multiLine }) => ($multiLine ? "65%" : "100%")};
    p {
      max-width: ${({ $multiLine }) => ($multiLine ? "100%" : "50%")};
      line-height: ${({ $multiLine }) => ($multiLine ? "8rem" : "normal")};
      margin-top: ${({ $multiLine }) => $multiLine && "1rem"};
    }
    svg {
      width: 6rem;
      height: 6rem;
    }
  }
`;

const M_PageHeader = ({
  bigText,
  bigTextB,
  bigTextSpan,
  iconName,
  team,
  s_description,
  description,
  links,
  currentLanguage,
  works,
  filterTags,
  onFilterSelect,
  selectedFilter,
  columnAHeader,
  columnBHeader,
  columnCHeader,
  teamColumnHeader,
  columnAText,
  columnBText,
  columnCText,
  multiLine,
  jobless,
  wrapped,
  followMeLinks,
  contactMeLinks,
  ps,
  slash,
}: PageHeaderProps) => {
  const theme = useTheme();
  const { isTablet, isPhoneLandscape, isTabletLandscape } = useScreenSize();
  if (bigText) {
    return (
      <MainInfoWrapper>
        <BigTextWrapper $multiLine={multiLine}>
          {multiLine ? (
            isTablet || isTabletLandscape ? (
              <FlexBox>
                <DJR_128>
                  {bigText}
                  <span>
                    <A_Icon iconName={iconName} />
                  </span>
                  {bigTextSpan}
                  <span>
                    <A_Icon iconName={iconName} />
                  </span>
                  {bigTextB}
                </DJR_128>
              </FlexBox>
            ) : (
              <FlexBox>
                <DJR_64>
                  {bigText}
                  <span>
                    <A_Icon iconName={iconName} />
                  </span>
                  {bigTextSpan}
                  <span>
                    <A_Icon iconName={iconName} />
                  </span>
                  {bigTextB}
                </DJR_64>
              </FlexBox>
            )
          ) : isTablet || isTabletLandscape ? (
            <DJR_128 id="bigText">{bigText}</DJR_128>
          ) : (
            <DJR_64 id="bigText">{bigText}</DJR_64>
          )}
        </BigTextWrapper>
        <MainInfoContent $works={works}>
          <A_InfoBlock
            header={columnAHeader}
            text={columnAText}
            currentLanguage={currentLanguage}
            jobless={jobless}
          />
          {(isTablet || isTabletLandscape) && (
            <A_InfoBlock
              header={columnBHeader}
              text={columnBText}
              currentLanguage={currentLanguage}
            />
          )}
          {works ? (
            <FlexBox $direction="column" $gap="12px">
              {!isTablet && !isTabletLandscape && (
                <PP_18 medium color={theme.medium_grey}>
                  {columnBHeader}
                </PP_18>
              )}
              <FlexBox $gap="8px" style={{ alignSelf: "end" }}>
                {filterTags!.map((filterTag, index) => (
                  <A_Tag
                    small
                    tagText={filterTag.name}
                    key={index}
                    onFilterSelect={() => {
                      if (onFilterSelect) {
                        onFilterSelect(filterTag.filter);
                      }
                    }}
                    selected={selectedFilter === filterTag.filter}
                  />
                ))}
              </FlexBox>
            </FlexBox>
          ) : (
            <A_InfoBlock
              header={columnCHeader}
              text={columnCText}
              currentLanguage={currentLanguage}
            />
          )}
        </MainInfoContent>
      </MainInfoWrapper>
    );
  } else {
    return (
      <ProjectInfoWrapper $wrapped={wrapped}>
        <LinksAndInfoWrapper $wrapped={wrapped}>
          {/* <A_InfoBlock
            header={columnAHeader}
            text={columnAText}
            currentLanguage={currentLanguage}
            aboutMeLinks={contactMeLinks}
          />
          <A_InfoBlock
            header={columnBHeader}
            text={columnBText}
            currentLanguage={currentLanguage}
            aboutMeLinks={followMeLinks}
          />
          {columnCHeader && (
            <A_InfoBlock
              header={columnCHeader}
              text={columnCText}
              currentLanguage={currentLanguage}
            />
          )}
          {team && (
            <A_InfoBlock
              header={teamColumnHeader}
              text={columnCText}
              currentLanguage={currentLanguage}
              team={team}
            />
          )} */}
          <A_InfoBlock
            header={columnAHeader}
            text={columnAText}
            currentLanguage={currentLanguage}
            aboutMeLinks={contactMeLinks}
            slash={!isPhoneLandscape && !isTabletLandscape && slash}
          />
          <A_InfoBlock
            header={columnBHeader}
            text={columnBText}
            currentLanguage={currentLanguage}
            aboutMeLinks={followMeLinks}
            slash={!isPhoneLandscape && !isTabletLandscape && slash}
          />
        </LinksAndInfoWrapper>
        {!isTablet && !isTabletLandscape && <Divider />}
        <FlexBox $gap="60px">
          <FlexBox $gap="26px">
            {/* <PP_48 lineHeight="100%" medium>
              {s_description}
            </PP_48>
            <PP_20>
              {description}
              {ps && (
                <>
                  <br></br>
                  <br></br>
                  <span>{ps}</span>
                </>
              )}
            </PP_20> */}
            <PP_32 lineHeight="100%" medium>
              {s_description}
            </PP_32>
            <PP_18>
              {description}
              {ps && (
                <>
                  <br></br>
                  <br></br>
                  <span style={{ color: theme.medium_grey }}>{ps}</span>
                </>
              )}
            </PP_18>
          </FlexBox>
          <ButtonsWrapper $gap="8px">
            {links?.map((link, index) => {
              const linkUrl =
                typeof link.url === "string"
                  ? link.url
                  : link.url[currentLanguage];

              return (
                <A_Button
                  key={index}
                  buttonText={link.name[currentLanguage]}
                  handleButtonClick={() => window.open(linkUrl, "_blank")}
                  fw
                  disabled={!linkUrl}
                />
              );
            })}
          </ButtonsWrapper>
        </FlexBox>
      </ProjectInfoWrapper>
    );
  }
};

export default M_PageHeader;
