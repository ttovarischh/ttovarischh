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
  $linkcard?: boolean;
  $imageBorderRadius?: string;
  $imageClassName?: string;
}

const CaseImg = styled.img<{
  $imageDescription?: string;
  $imageBorderRadius?: string;
}>`
  height: auto;
  object-fit: cover;
  // border-radius: ${({ $imageBorderRadius, $imageDescription }) =>
    $imageBorderRadius ?? ($imageDescription ? "5px" : "12px")};
  border-radius: var(--mobile-single-image-radius);
  transition: all 0.5s ease;
  flex: 1 1 0;
  max-width: 100%;
  cursor: zoom-in;
`;

const LinkCardImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  // border-radius: var(--mobile-single-image-radius);
  max-width: 100%;

  // new
  height: auto;
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
    $linkcard,
    $imageBorderRadius,
    $imageClassName,
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 20000);
  };
  const handleImageError = () => {
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
      {$linkcard ? (
        <LinkCardImg
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? "none" : "block" }}
        />
      ) : (
        <CaseImg
          src={src}
          alt={alt}
          id={id}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? "none" : "block" }}
          $imageDescription={$imageDescription}
          onClick={onClick}
          $imageBorderRadius={$imageBorderRadius}
          className={$imageClassName}
        />
      )}
    </>
  );
});

export default Image;
