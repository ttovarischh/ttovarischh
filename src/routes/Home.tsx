import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../components/Common';
import TProjectsGrid from '../components/Templates/TProjectsGrid';

interface HomePageProps {
    projects: any;
}

const PageWrapper = styled(FlexBox)`
  width: 100%;
`;

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
    return (
        <PageWrapper>
            <TProjectsGrid projects={projects} />
        </PageWrapper>
    );
};

export default HomePage;
