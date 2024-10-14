import { useEffect, useState } from "react";

const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    console.log("Detected touch device:", isTouch);
    setIsTouchDevice(isTouch);
  }, []);

  return isTouchDevice;
};

export default useIsTouchDevice;
