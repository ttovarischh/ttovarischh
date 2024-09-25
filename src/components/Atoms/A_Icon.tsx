import React from "react";

type PropsT = {
  fill?: string;
  iconName?: string;
  width?: any;
  height?: any;
};

const A_Icon = (props: PropsT) => {
  if (props.iconName == "buttonArrow") {
    return (
      <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0.5L5.5 5L1 9.5" stroke="#6B6863" />
      </svg>
    );
  }
  return <></>;
};

export default A_Icon;
