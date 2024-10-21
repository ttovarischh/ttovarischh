import React, { createContext, useContext, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

const ScreenSizeContext = createContext<{
  isTablet: boolean;
  isLaptop: boolean;
  isPC: boolean;
  isPhoneLandscape: boolean;
  isTabletLandscape: boolean;
}>({
  isTablet: false,
  isLaptop: false,
  isPC: false,
  isPhoneLandscape: false,
  isTabletLandscape: false,
});

export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isPhoneLandscape = useMediaQuery({
    query:
      "(max-width: 932px) and (max-height: 800px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)",
  });

  const isTablet = useMediaQuery({
    query:
      "(min-width: 768px) and (max-width: 1366px) and (min-height: 800px) and (pointer: coarse) and (hover: none) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)",
  });

  const isTabletLandscape = useMediaQuery({
    query:
      "(min-width: 768px) and (max-width: 1366px) and (min-height: 600px) and (pointer: coarse) and (hover: none)  and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)",
  });

  const isLaptop = useMediaQuery({
    query:
      "(min-device-width: 1200px) and (pointer: fine) and (hover: hover) and (-webkit-min-device-pixel-ratio: 1)",
  });

  const isPC = useMediaQuery({
    query: "(min-device-width: 1600px)",
  });

  const contextValue = useMemo(
    () => ({ isTablet, isLaptop, isPC, isPhoneLandscape, isTabletLandscape }),
    [isTablet, isLaptop, isPC, isPhoneLandscape, isTabletLandscape]
  );

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
