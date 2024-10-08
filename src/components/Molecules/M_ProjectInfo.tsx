import React from "react";
import styled from "styled-components";
import { FlexBox, DJR_128, PP_48, PP_20 } from "../Quarks";
import A_InfoBlock from "../Atoms/A_InfoBlock";
import A_Button from "../Atoms/A_Button";
import { useTranslation } from "react-i18next";

interface Link {
  name: { en: string; ru: string };
  url: string;
}

interface ProjectInfoProps {
  horisontal?: boolean;
  name?: string;
  role?: string;
  organisation?: string;
  status?: string;
  team?: string;
  type?: string;
  timeline?: string;
  deliverables?: string;
  s_description?: string;
  description?: string;
  links?: Link[];
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const MainInfoWrapper = styled(FlexBox)`
  padding: 166px 2.5vw 32px;
  flex-direction: column;
`;

const ProjectInfoWrapper = styled.div`
  display: grid;
  margin: 140px 2.5vw;
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

const M_ProjectInfo = ({
  t,
  horisontal,
  name,
  role,
  organisation,
  status,
  team,
  type,
  timeline,
  deliverables,
  s_description,
  description,
  links,
  currentLanguage,
}: ProjectInfoProps) => {
  if (horisontal) {
    return (
      <MainInfoWrapper>
        <DJR_128>{name}</DJR_128>
        <MainInfoContent>
          <A_InfoBlock
            header={t("projectPage.type")}
            text={type}
            currentLanguage={currentLanguage}
          />
          <A_InfoBlock
            header={t("projectPage.timeline")}
            text={timeline}
            currentLanguage={currentLanguage}
          />
          <A_InfoBlock
            header={t("projectPage.deliverables")}
            text={deliverables}
            currentLanguage={currentLanguage}
          />
        </MainInfoContent>
      </MainInfoWrapper>
    );
  } else {
    return (
      <ProjectInfoWrapper>
        <FlexBox $gap="20px">
          <A_InfoBlock
            header={t("projectPage.role")}
            text={role}
            currentLanguage={currentLanguage}
          />
          <A_InfoBlock
            header={t("projectPage.organisation")}
            text={organisation}
            currentLanguage={currentLanguage}
          />
          <A_InfoBlock
            header={t("projectPage.status")}
            text={status}
            currentLanguage={currentLanguage}
          />
          {team && (
            <A_InfoBlock
              header={t("projectPage.team")}
              text={team}
              currentLanguage={currentLanguage}
            />
          )}
        </FlexBox>
        <FlexBox $gap="60px">
          <FlexBox $gap="26px">
            <PP_48 lineHeight="100%" medium>
              {s_description}
            </PP_48>
            <PP_20>{description}</PP_20>
          </FlexBox>
          <ButtonsWrapper $gap="1.04vw">
            {links?.map((link, index) => (
              <A_Button
                key={index}
                buttonText={link.name[currentLanguage]}
                handleButtonClick={() => window.open(link.url, "_blank")}
                fw
              />
            ))}
          </ButtonsWrapper>
        </FlexBox>
      </ProjectInfoWrapper>
    );
  }
};

export default M_ProjectInfo;
