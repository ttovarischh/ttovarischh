import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../Common';
import ALanguageDisplay from '../Atoms/ALanguageDisplay';
import ALanguageSwitcher from '../Atoms/ALanguageSwitcher';

interface ProjectCardProps {
    name: string;
    description: string;
    src: string;
    t: (key: string) => string;
    id: number;
}

const NavbarWrapper = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 50px;
  gap: 20px;
`;

const MNavbar = () => {
    return (
        <NavbarWrapper alignItems="center" >
            <ALanguageDisplay />
            <ALanguageSwitcher />
        </NavbarWrapper>
    );

};

export default MNavbar;
