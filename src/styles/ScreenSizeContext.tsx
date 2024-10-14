import React, { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ScreenSizeContext = createContext<{ isTabletSize: boolean }>({
  isTabletSize: false,
});

export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isTabletSize = useMediaQuery({
    query:
      "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)",
  });

  return (
    <ScreenSizeContext.Provider value={{ isTabletSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
