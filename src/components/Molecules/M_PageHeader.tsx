import React from "react";
import styled from "styled-components";
import { FlexBox, DJR_128, PP_48, PP_20 } from "../Quarks";
import A_InfoBlock from "../Atoms/A_InfoBlock";
import A_Button from "../Atoms/A_Button";
import A_Tag from "../Atoms/A_Tag";
import A_Icon from "../Atoms/A_Icon";

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
  columnAHeader: string;
  columnBHeader: string;
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
}

const MainInfoWrapper = styled(FlexBox)`
  padding: 166px 2.5vw 32px;
  flex-direction: column;
`;

const ProjectInfoWrapper = styled.div<{ $wrapped?: boolean }>`
  display: grid;
  margin: ${({ $wrapped }) => ($wrapped ? "0px" : "140px 2.5vw")};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.04vw;

  & > div:nth-child(1) {
    grid-column-start: 2;
    max-width: 165px;
  }

  & > div:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 6;
  }

  span {
    color: ${({ theme }) => theme.medium_grey} !important;
  }
`;

const MainInfoContent = styled.div`
  display: grid;
  margin-top: 88px;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-column-gap: 1.04vw;
  width: 100%;

  & > div:nth-child(2) {
    grid-column-start: 3;
  }
`;

const ButtonsWrapper = styled(FlexBox)`
  width: 100%;
`;

const BigTextWrapper = styled(FlexBox)<{ $multiLine?: boolean }>`
  width: ${({ $multiLine }) => ($multiLine ? "65%" : "100%")};
  p {
    max-width: ${({ $multiLine }) => ($multiLine ? "100%" : "50%")};
    line-height: ${({ $multiLine }) =>
      $multiLine ? "8rem" : "normal"} !important;
    margin-top: ${({ $multiLine }) => $multiLine && "1rem"} !important;
  }
  white-space: pre-line;
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
}: PageHeaderProps) => {
  if (bigText) {
    return (
      <MainInfoWrapper>
        <BigTextWrapper $multiLine={multiLine}>
          {multiLine ? (
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
            <DJR_128 id="bigText">{bigText}</DJR_128>
          )}
        </BigTextWrapper>
        <MainInfoContent>
          <A_InfoBlock
            header={columnAHeader}
            text={columnAText}
            currentLanguage={currentLanguage}
            jobless={jobless}
          />
          <A_InfoBlock
            header={columnBHeader}
            text={columnBText}
            currentLanguage={currentLanguage}
          />
          {works ? (
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
        <FlexBox $gap="20px">
          <A_InfoBlock
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
          )}
        </FlexBox>
        <FlexBox $gap="60px">
          <FlexBox $gap="26px">
            <PP_48 lineHeight="100%" medium>
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
            </PP_20>
          </FlexBox>
          <ButtonsWrapper $gap="1.04vw">
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
