import React from "react";
import M_Navbar from "../Molecules/M_Navbar";
import M_MobNavbar from "../Molecules/M_MobNavbar";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface NavigationProps {
  theme: any;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const O_Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme, t }) => {
  const { isTablet, isLaptop, isPC, isTabletLandscape } = useScreenSize();

  if (isTablet || isLaptop || isPC || isTabletLandscape) {
    return <M_Navbar theme={theme} toggleTheme={toggleTheme} t={t} />;
  } else {
    return <M_MobNavbar theme={theme} toggleTheme={toggleTheme} t={t} />;
  }
};

export default O_Navigation;
