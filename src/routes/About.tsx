import React from "react";
import { about } from "../db";
import M_PageHeader from "../components/Molecules/M_PageHeader";
import M_AboutCardsGrid from "../components/Molecules/M_AboutCardsGrid";
import styled from "styled-components";
import M_Accordeon from "../components/Molecules/M_Accordeon";
import A_PageTextDivider from "../components/Atoms/A_PageTextDivider";
import { useNavigate } from "react-router-dom";
import T_ProjectsGrid from "../components/Templates/T_ProjectsGrid";
import { Project } from "../db/types";
import M_PseudoAccordeon from "../components/Molecules/M_PseudoAccordeon";

interface AboutPageProps {
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
  projects: Array<Project>;
}

const AboutPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 2.5vw;
  position: relative;
  gap: 120px;
`;

const AboutPagePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutPage: React.FC<AboutPageProps> = ({
  currentLanguage,
  t,
  projects,
}) => {
  console.log(about);
  const navigate = useNavigate();
  const selectedProjects = projects.filter((_, index) =>
    [0, 2, 3].includes(index)
  );
  return (
    <>
      <M_PageHeader
        multiLine
        jobless={t("about.looking")}
        bigText={t("about.moving")}
        iconName="sparkles"
        bigTextB={t("about.since")}
        bigTextSpan={t("about.figma")}
        currentLanguage={currentLanguage}
        columnAHeader={t("about.currently")}
        columnBHeader={t("about.based")}
        columnCHeader={t("about.specializations")}
        columnAText={about.currently[currentLanguage]}
        columnBText={about.based[currentLanguage]}
        columnCText={about.who[currentLanguage]}
      />
      <AboutPageContentWrapper>
        <M_AboutCardsGrid
          currentLanguage={currentLanguage}
          cards={about.aboutMeCards}
        />
        <M_PageHeader
          wrapped
          currentLanguage={currentLanguage}
          columnAHeader="Contact me:"
          columnBHeader="Follow me:"
          contactMeLinks={about.contactMeLinks}
          followMeLinks={about.followMeLinks}
          s_description={about.aboutMeText.header[currentLanguage]}
          description={about.aboutMeText.text[currentLanguage]}
          ps={about.aboutMeText.ps[currentLanguage]}
          links={about.bigLinks}
        />
        <AboutPagePart>
          <A_PageTextDivider header={t("about.workExperience")} />
          <M_Accordeon
            items={about.workExperience}
            currentLanguage={currentLanguage}
            t={t}
          />
        </AboutPagePart>
        <AboutPagePart>
          <A_PageTextDivider header={t("about.education")} />
          <M_PseudoAccordeon
            items={about.education}
            currentLanguage={currentLanguage}
            t={t}
          />
        </AboutPagePart>
        <AboutPagePart>
          <A_PageTextDivider header={t("about.skillsTech")} />
          <M_Accordeon
            items={about.skills}
            currentLanguage={currentLanguage}
            t={t}
          />
        </AboutPagePart>
        <AboutPagePart>
          <A_PageTextDivider header={t("about.achievementsHeader")} />
          <M_AboutCardsGrid
            currentLanguage={currentLanguage}
            cards={about.achievements}
          />
        </AboutPagePart>
        <AboutPagePart style={{ marginTop: "36px" }}>
          <A_PageTextDivider
            header={t("about.selected")}
            text={t("about.loveit")}
            iconName="similar"
            reverse
            buttonText={t("about.seeAll")}
            handleButtonClick={() => navigate("/work")}
          />
          <T_ProjectsGrid
            projects={selectedProjects}
            featured
            currentLanguage={currentLanguage}
            similar
          />
        </AboutPagePart>
      </AboutPageContentWrapper>
    </>
  );
};

export default AboutPage;
