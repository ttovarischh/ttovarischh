const sizes = {
  //   Phones
  minIphoneSeW: "320px",
  maxIphoneSeW: "375px",
  minIphone678W: "375px",
  maxIphone678W: "667px",
  minIphone678PlusW: "414px",
  maxIphone678PlusW: "736px",
  minIphoneXW: "375px",
  maxIphoneXW: "812px",
  minIphoneXRPlusW: "375px",
  maxIphoneXRPlusW: "430px",
  minIphoneXRPlusH: "812px",
  maxIphoneXRPlusH: "932px",
  minPixelW: "360px",
  maxPixelW: "412px",
  maxPixelH: "915px",
  //   Tablets
  minIpadMiniW: "768px",
  maxIpadMiniW: "1024px",
  minIpadAirW: "810px",
  maxIpadAirW: "834px",
  minIpadProW: "1024px",
  maxIpadProW: "1366px",
  minIpadProHeight: "1024px",
  maxIpadProHeight: "1366px",
  minTabletH: "800px",
  //   Laptops
  minLaptopW: "1200px",
  maxLaptopW: "1600px",
  //   PC
  minPCW: "1600px",
};

// XR AND PIXEL MIGHT BE ONE

export const media = {
  /* ----------- Phones ----------- */
  iphoneSE: `@media only screen 
  and (min-device-width: ${sizes.minIphoneSeW}) 
  and (max-device-width: ${sizes.maxIphoneSeW}) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphoneSEPL: `@media only screen 
  and (min-device-width: ${sizes.minIphoneSeW}) 
  and (max-device-width: ${sizes.maxIphoneSeW}) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphone678: `@media only screen 
  and (min-device-width: ${sizes.minIphone678W}) 
  and (max-device-width: ${sizes.maxIphone678W}) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphone678L: `@media only screen 
  and (min-device-width: ${sizes.minIphone678W}) 
  and (max-device-width: ${sizes.maxIphone678W}) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphone678Plus: `@media only screen 
  and (min-device-width: ${sizes.minIphone678PlusW}) 
  and (max-device-width: ${sizes.maxIphone678PlusW}) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphone678PlusL: `@media only screen 
  and (min-device-width: ${sizes.minIphone678PlusW}) 
  and (max-device-width: ${sizes.maxIphone678PlusW}) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphoneXPlus: `@media only screen 
  and (min-device-width: ${sizes.minIphoneXW}) 
  and (max-device-width: ${sizes.maxIphoneXW}) 
  and (-webkit-min-device-pixel-ratio: 3)`,
  iphoneXPlusL: `@media only screen 
  and (min-device-width: ${sizes.minIphoneXW}) 
  and (max-device-width: ${sizes.maxIphoneXW}) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 3)`,
  iphoneXRPlus: `@media only screen 
  and (min-device-width: ${sizes.minIphoneXRPlusW}) 
  and (max-device-width: ${sizes.maxIphoneXRPlusW})
  and (min-device-height: ${sizes.minIphoneXRPlusH}) 
  and (max-device-height: ${sizes.maxIphoneXRPlusH}) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  iphoneXRPlusL: `@media only screen 
  and (min-device-width: ${sizes.minIphoneXRPlusW}) 
  and (max-device-width: ${sizes.maxIphoneXRPlusW})
  and (min-device-height: ${sizes.minIphoneXRPlusH}) 
  and (max-device-height: ${sizes.maxIphoneXRPlusH}) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2)`,
  pixel: `@media only screen 
  and (min-device-width: ${sizes.minPixelW}) 
  and (min-device-width: ${sizes.maxPixelW}) 
  and (max-device-height: ${sizes.maxPixelH}),
  and (-webkit-min-device-pixel-ratio: 2)`,
  pixelL: `@media only screen 
  and (min-device-width: ${sizes.minPixelW}) 
  and (min-device-width: ${sizes.maxPixelW}) 
  and (max-device-height: ${sizes.maxPixelH}),
  and (orientation: landscape),
  and (-webkit-min-device-pixel-ratio: 2)`,
  phoneLansdscape: `@media only screen 
  and (max-width: 932px) 
  and (max-height: 800px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1)`,
  /* ----------- Tablets ----------- */
  ipadMini: `@media only screen 
  and (min-device-width: ${sizes.minIpadMiniW}) 
  and (max-device-width: ${sizes.maxIpadMiniW}) 
  and (min-device-height: ${sizes.minTabletH})
  and (-webkit-min-device-pixel-ratio: 1)`,
  ipadMiniP: `@media only screen 
  and (min-device-width: ${sizes.minIpadMiniW}) 
  and (max-device-width: ${sizes.maxIpadMiniW}) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1)`,
  ipadMiniL: `@media only screen 
  and (min-device-width: ${sizes.minIpadMiniW}) 
  and (max-device-width: ${sizes.maxIpadMiniW}) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1)`,
  ipadAir: `@media only screen 
    and (min-device-width: ${sizes.minIpadAirW}) 
    and (max-device-width: ${sizes.maxIpadAirW}) 
    and (min-device-height: ${sizes.minTabletH})
    and (-webkit-min-device-pixel-ratio: 2)`,
  ipadAirP: `@media only screen 
    and (min-device-width: ${sizes.minIpadAirW}) 
    and (max-device-width: ${sizes.maxIpadAirW}) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 2)`,
  ipadAirL: `@media only screen 
    and (min-device-width: ${sizes.minIpadAirW}) 
    and (max-device-width: ${sizes.maxIpadAirW}) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2)`,
  ipadPro: `@media only screen 
  and (min-device-width: ${sizes.minIpadProW}) 
  and (max-device-width: ${sizes.maxIpadProW}) 
  and (min-device-height: ${sizes.minIpadProHeight}) 
    and (max-device-height: ${sizes.maxIpadProHeight}) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  ipadProP: `@media only screen 
  and (min-device-width: ${sizes.minIpadProW}) 
  and (max-device-width: ${sizes.minIpadProW}) 
    and (min-device-height: ${sizes.minIpadProHeight}) 
    and (max-device-height: ${sizes.maxIpadProHeight}) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  ipadProL: `@media only screen 
  and (min-device-width: ${sizes.maxIpadProW}) 
  and (max-device-width: ${sizes.maxIpadProW}) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2)`,
  // Combined Media Query for all iPads (both pixel ratios)
  //   const isTablet = useMediaQuery({
  //   query:
  //     "(min-width: 768px) and (max-width: 1366px) and (min-height: 800px) and (-webkit-min-device-pixel-ratio: 1)",
  // });

  // const isTabletLandscape = useMediaQuery({
  //   query:
  //     "(min-width: 768px) and (max-width: 1366px) and (min-height: 600px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)",
  // });

  //
  tablets: `@media only screen 
    and (min-width: 768px) 
    and (max-width: 1366px) 
    and (min-height: 800px)
    and (-webkit-min-device-pixel-ratio: 1)
    and (orientation: portrait)`,

  tabletsL: `@media only screen 
    and (min-width: 768px) 
    and (max-width: 1366px)
    and (min-height: 600px) 
    and (-webkit-min-device-pixel-ratio: 1)
    and (orientation: landscape)`,

  tabletsP: `@media only screen 
    and (min-device-width: ${sizes.minIpadMiniW}) 
    and (max-device-width: ${sizes.maxIpadProW}) 
    and (-webkit-min-device-pixel-ratio: 1)
    and (-webkit-max-device-pixel-ratio: 2)
    and (orientation: portrait)`,

  /* ----------- Laptops ----------- */
  laptop: `@media screen 
  and (min-width: ${sizes.minLaptopW}) 
  and (max-width: ${sizes.maxLaptopW}) 
  // and (min-height: 832px)
  and (-webkit-min-device-pixel-ratio: 1)`,

  retinaLaptop: `@media screen 
  and (min-device-width: ${sizes.minLaptopW}) 
  and (max-device-width: ${sizes.maxLaptopW}) 
  and (-webkit-device-pixel-ratio: 2)
  and (min-resolution: 192dpi)`,
  /* ----------- PC ----------- */
  pc: `@media screen 
  and (min-device-width: ${sizes.minPCW})`,
};
