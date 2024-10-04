import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Common";
import TProjectsGrid from "../components/Templates/TProjectsGrid";
import A_PixelatedGradient from "../components/Atoms/A_PixelatedGradient";

interface HomePageProps {
  projects: any;
}

const PageWrapper = styled(FlexBox)`
  width: 100%;
`;

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
  return (
    <PageWrapper>
      <A_PixelatedGradient />
      <TProjectsGrid projects={projects} />
    </PageWrapper>
  );
};

export default HomePage;
