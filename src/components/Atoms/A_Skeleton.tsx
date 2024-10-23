import React from "react";
import styled from "styled-components";

interface SkeletonProps {
  $width?: string;
  $aspectRatio?: number;
  className?: string;
}

const SkeletonWrapper = styled.div<SkeletonProps>`
  width: ${({ $width }) => $width || "100%"};
  padding-top: ${({ $aspectRatio }) =>
    $aspectRatio ? `${100 / $aspectRatio}%` : "0"};

  background-color: ${({ theme }) => theme.light_grey};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150px;
    width: 150px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(89, 87, 84, 0) 0%,
      rgba(89, 87, 84, 0.2) 50%,
      rgba(89, 87, 84, 0) 100%
    );
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      left: -150px;
    }
    100% {
      left: 100%;
    }
  }
`;

const A_Skeleton: React.FC<SkeletonProps> = React.memo(
  ({ $width, $aspectRatio, className }) => {
    return (
      <SkeletonWrapper
        $width={$width}
        $aspectRatio={$aspectRatio}
        className={className ? `sk ${className}` : "sk"}
      />
    );
  }
);

export default A_Skeleton;
