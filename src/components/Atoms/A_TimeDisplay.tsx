import React, { useEffect, useState } from "react";
import { PP_20 } from "../Quarks";
import styled from "styled-components";

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
    <div
      onMouseEnter={() => set$isHovered(true)}
      onMouseLeave={() => set$isHovered(false)}
      style={{ cursor: "default" }}
    >
      <PP_20 medium>
        <Emoji $isVisible={$isHovered}>{emoji} </Emoji>
        (GMT+3) {currTime}
      </PP_20>
    </div>
  );
};

export default A_TimeDisplay;
