import React, { useState } from "react";
import A_Skeleton from "../Atoms/A_Skeleton";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  id?: any;
  $width?: string;
  $borderRadius?: string;
  $aspectRatio?: number;
  $className?: string;
  $imageDescription?: string;
  onClick?: any;
}

const CaseImg = styled.img<{ $imageDescription?: string }>`
  height: auto;
  object-fit: cover;
  border-radius: ${({ $imageDescription }) =>
    $imageDescription ? "5px" : "12px"};
  transition: all 0.5s ease;
  flex: 1 1 0;
  max-width: 100%;
  cursor: zoom-in;
`;

const Image = React.memo((props: ImageProps) => {
  const {
    src,
    alt,
    $width,
    $borderRadius,
    $aspectRatio,
    $imageDescription,
    id,
    onClick,
    $className,
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  console.log(`Initial loading state: ${isLoading}`);

  const handleImageLoad = () => {
    console.log("Image loaded successfully.");
    setIsLoading(false);

    // setTimeout(() => {
    //   setIsLoading(false);
    //   console.log("Skeleton should now be hidden.");
    // }, 20000);
  };
  const handleImageError = () => {
    console.error("Image failed to load");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <A_Skeleton
          $width={$width}
          $aspectRatio={$aspectRatio}
          $borderRadius={$borderRadius}
          className={$className}
        />
      )}
      <CaseImg
        src={src}
        alt={alt}
        id={id}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: isLoading ? "none" : "block" }}
        $imageDescription={$imageDescription}
        onClick={onClick}
      />
    </>
  );
});

export default Image;
