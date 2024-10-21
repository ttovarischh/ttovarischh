import React, { useEffect, useState } from "react";
import { PP_20, PP_16 } from "../Quarks";
import styled from "styled-components";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface TimeDisplayProps {
  t: (key: string) => string;
}

const TimeDisplayWrapper = styled.div`
  cursor: default;
`;

const Emoji = styled.span<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out; // Adjust duration as needed
  margin-right: 16px;
  margin-left: 16px;
`;

const A_TimeDisplay: React.FC<TimeDisplayProps> = ({ t }) => {
  const [currTime, setCurrTime] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");
  const [duty, setDuty] = useState<string>("");
  const [$isHovered, set$isHovered] = useState<boolean>(false);
  const { isLaptop } = useScreenSize();

  const updateTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );
    setCurrTime(timeString);

    const currentHour = new Date().getHours();
    setEmoji(currentHour >= 9 && currentHour < 24 ? "🤙" : "💤");
    setDuty(
      currentHour >= 9 && currentHour < 24
        ? t(`nav.working`)
        : t(`nav.sleeping`)
    );
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateTime();
  }, [t]);

  return (
    <TimeDisplayWrapper
      onMouseEnter={() => set$isHovered(true)}
      onMouseLeave={() => set$isHovered(false)}
    >
      {isLaptop ? (
        <PP_20 medium>
          <Emoji $isVisible={$isHovered}>{emoji} </Emoji>
          (GMT+3) {currTime}
        </PP_20>
      ) : (
        <PP_16>
          (GMT+3) {currTime}
          <Emoji $isVisible={true}>{emoji}</Emoji>
          {duty}
        </PP_16>
      )}
    </TimeDisplayWrapper>
  );
};

export default A_TimeDisplay;
