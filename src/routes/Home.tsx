import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Quarks";
import T_ProjectsGrid from "../components/Templates/T_ProjectsGrid";
import M_MainComp from "../components/Molecules/M_MainComp";
import A_PageTextDivider from "../components/Atoms/A_PageTextDivider";
import { useNavigate } from "react-router-dom";
import { works } from "../db";
import M_ImageMarquee from "../components/Molecules/M_ImageMarquee";
import { Project } from "../db/types";

interface HomePageProps {
  projects: Array<Project>;
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const PageWrapper = styled(FlexBox)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const HomePage: React.FC<HomePageProps> = ({
  projects,
  currentLanguage,
  t,
}) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  const MAX_SCROLL = 200;
  const SCROLL_DELAY = 400;
  const SPEED_FACTOR = 0.5;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= SCROLL_DELAY) {
        const movement = (currentScrollY - SCROLL_DELAY) * SPEED_FACTOR;

        if (movement <= MAX_SCROLL) {
          setScrollY(movement);
        } else {
          setScrollY(MAX_SCROLL);
        }
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topMarqueeWorks = works.top;
  const bottomMarqueeWorks = works.bottom;

  return (
    <PageWrapper>
      <M_MainComp scrollY={scrollY} t={t} />
      <FlexBox $direction="column" $alignItems="center">
        <A_PageTextDivider
          header={t("home.selected")}
          text={t("home.loveit")}
          iconName="sup"
          buttonText={t("home.seeAll")}
          handleButtonClick={() => navigate("/work")}
        />
        <T_ProjectsGrid
          projects={projects}
          featured
          currentLanguage={currentLanguage}
        />
      </FlexBox>
      <FlexBox $direction="column" $alignItems="center">
        <A_PageTextDivider
          header={t("home.moreWork")}
          text={t("home.sometimes")}
          iconName="plus"
          reverse
          buttonText={t("home.aboutMe")}
          handleButtonClick={() => navigate("/about")}
        />
        <M_ImageMarquee
          works={topMarqueeWorks}
          direction="left"
          currentLanguage={currentLanguage}
        />
        <M_ImageMarquee
          works={bottomMarqueeWorks}
          direction="right"
          currentLanguage={currentLanguage}
        />
      </FlexBox>
    </PageWrapper>
  );
};

export default HomePage;
