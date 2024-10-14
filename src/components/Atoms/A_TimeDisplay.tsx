import React, { useEffect, useState } from "react";
import { PP_20 } from "../Quarks";
import styled from "styled-components";

const TimeDisplayWrapper = styled.div`
  cursor: default;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
  }
`;

const Emoji = styled.span<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out; // Adjust duration as needed
`;

const A_TimeDisplay: React.FC = () => {
  const [currTime, setCurrTime] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");
  const [$isHovered, set$isHovered] = useState<boolean>(false);

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
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimeDisplayWrapper
      onMouseEnter={() => set$isHovered(true)}
      onMouseLeave={() => set$isHovered(false)}
    >
      <PP_20 medium>
        <Emoji $isVisible={$isHovered}>{emoji} </Emoji>
        (GMT+3) {currTime}
      </PP_20>
    </TimeDisplayWrapper>
  );
};

export default A_TimeDisplay;
