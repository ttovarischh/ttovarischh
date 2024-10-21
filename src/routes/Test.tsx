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
import LazyLoad from "react-lazyload";

interface HomePageProps {
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const PageWrapper = styled(FlexBox)`
  width: 100%;
  height: 2000px;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const Test: React.FC<HomePageProps> = ({ currentLanguage, t }) => {
  return <PageWrapper></PageWrapper>;
};

export default Test;
